"use client";
import React, { useState } from "react";
import Question from "@/components/Question";
import { Button } from "@/components/ui/button";
import { Topic } from "@/db/schema/questionSchema";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Results from "@/components/Results";
import FlashCard from "./card-component";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

type TopicComponentType = {
  topic: Topic;
};

const TopicComponent = ({ topic }: TopicComponentType) => {
  const [questionIndex, setQuestionInd] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [isAnswerValidated, setIsAnswerValidated] = useState(false);
  const [questionnaryType, setQuestionnaryType] = useState<"QCM" | "FLASH_CARD">("QCM")
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(
    new Array(topic.questions.length).fill(null)
  );
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const mode = useSearchParams().get("mode");
  if (!mode) return <h3>Veuillez définir le mode dans les paramètres.</h3>;

  const currentQuestion = topic.questions[questionIndex];

  function handleNext() {
    if (mode === "apprentissage" && !isAnswerValidated && selectedAnswer !== null) {
      return;
    }

    if (questionIndex === topic.questions.length - 1) {
      setShowResults(true);
    } else {
      setQuestionInd((ind) => ind + 1);
      setIsAnswerValidated(false);
      setSelectedAnswer(null);
    }
  }

  function handlePrev() {
    if (userAnswers[questionIndex] === currentQuestion.answer) {
      setScore((prev) => prev - 1);
    }

    setUserAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[questionIndex] = null;
      return newAnswers;
    });

    setQuestionInd((ind) => Math.max(ind - 1, 0));
    setIsAnswerValidated(false);
    setSelectedAnswer(null);
  }

  function handleShowAnswer() {
    setShowAnswer((prev) => !prev);
  }

  function handleAnswer(selectedOption: number | null) {
    if (userAnswers[questionIndex] === null) {
      if (selectedOption === currentQuestion.answer) {
        setScore((prev) => prev + 1);
      }
    }

    setUserAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[questionIndex] = selectedOption;
      return newAnswers;
    });

    if (mode === "apprentissage") {
      setIsAnswerValidated(true);
      setTimeout(() => {
        if (questionIndex === topic.questions.length - 1) {
          setShowResults(true);
        } else {
          setQuestionInd((ind) => ind + 1);
        }
        setIsAnswerValidated(false);
        setSelectedAnswer(null);
      }, 1500);
    } else {
      handleNext();
    }
  }

  function restartQuiz() {
    setQuestionInd(0);
    setShowResults(false);
    setScore(0);
    setUserAnswers(new Array(topic.questions.length).fill(null));
  }

  return (
    <main className="min-h-screen flex flex-col w-full">
      {/* Header */}
      <div className=" bg-white/80 backdrop-blur-sm z-10 border-b">
        <div className="w-full px-2 sm:px-4 py-1 sm:py-2">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-2">
            <h3 className="text-sm sm:text-base">
              Mode: <span className="text-red-700 font-medium">{mode}</span>
            </h3>
            <div className="flex items-center gap-1 sm:gap-2">
              <Switch 
                id="questionType_switch"
                checked={questionnaryType==="FLASH_CARD"}
                onCheckedChange={()=>{setQuestionnaryType(questionnaryType==="QCM"?"FLASH_CARD":"QCM")}}
              />
              <Label htmlFor="questionType_switch" className="text-sm">Mode FlashCard</Label>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full px-0 py-2 ">
        {showResults ? (
          <Results
            score={score}
            totalQuestions={topic.questions.length}
            onRestart={restartQuiz}
            questions={topic.questions}
            userAnswers={userAnswers}
          />
        ) : (
          <div className="flex flex-col h-full w-full">
            {questionnaryType === "QCM" ? (
              <>
                <Question
                  answer={currentQuestion.answer}
                  options={currentQuestion.options}
                  question={currentQuestion.question}
                  QuestionIndex={questionIndex}
                  handleShowAnswer={handleShowAnswer}
                  handleAnswer={handleAnswer}
                  totalQuestions={topic.questions.length}
                  key={questionIndex}
                  selectedOptions={[]}
                  mode={mode}
                  isAnswerValidated={isAnswerValidated}
                  score={score}
                  selectedAnswer={selectedAnswer}
                  setSelectedAnswer={setSelectedAnswer}
                />
                {showAnswer && (
                  <div className="mt-2 p-2 sm:p-4 bg-green-100 rounded animate-slide-in">
                    <p className="font-bold">Réponse correcte:</p>
                    <p>{currentQuestion.options[currentQuestion.answer]}</p>
                  </div>
                )}
                <div className="mt-2 sm:mt-4 flex justify-between min-[550px]:flex-row flex-col gap-2 sm:gap-5 px-2 sm:px-0">
                  <Button
                    className={`flex items-center overflow-hidden ${questionIndex === 0 ? "opacity-60 cursor-not-allowed" : ""}`}
                    onClick={handlePrev}
                    disabled={questionIndex === 0}
                  >
                    <ChevronLeft className="mr-1 sm:mr-2" />
                    Question précédente
                  </Button>
                  <Button className="flex items-center overflow-hidden" onClick={handleNext}>
                    {questionIndex === topic.questions.length - 1
                      ? "Voir les résultats"
                      : "Passer la question"}
                    <ChevronRight className="ml-1 sm:ml-2" />
                  </Button>
                </div>
              </>
            ) : (
              <FlashCard  
                question={currentQuestion.question} 
                answer={currentQuestion.options[currentQuestion.answer]}
                currentIndex={questionIndex}
                totalCards={topic.questions.length}
                onNext={handleNext}
                onPrevious={handlePrev}
                onReset={() => {
                  setQuestionInd(0);
                  setShowAnswer(false);
                  setScore(0);
                  setUserAnswers(new Array(topic.questions.length).fill(null));
                }}
              />
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default TopicComponent;
