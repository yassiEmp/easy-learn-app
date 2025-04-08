"use client";
import React, { useState } from "react";
import Question from "@/components/Question";
import { Button } from "@/components/ui/button";
import { Topic } from "@/db/schema/questionSchema";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Results from "@/components/Results";

type TopicComponentType = {
  topic: Topic;
};

const TopicComponent = ({ topic }: TopicComponentType) => {
  const [questionIndex, setQuestionInd] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(
    new Array(topic.questions.length).fill(null)
  );

  const mode = useSearchParams().get("mode");
  if (!mode) return <h3>Veuillez définir le mode dans les paramètres.</h3>;

  const currentQuestion = topic.questions[questionIndex];

  function handleNext() {
    if (questionIndex === topic.questions.length - 1) {
      setShowResults(true);
    } else {
      setQuestionInd((ind) => ind + 1);
    }
  }

  function handlePrev() {
    setQuestionInd((ind) => Math.max(ind - 1, 0));
  }

  function handleShowAnswer() {
    setShowAnswer((prev) => !prev);
  }

  function handleAnswer(selectedOption: number | null) {
    setUserAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[questionIndex] = selectedOption;
      return newAnswers;
    });

    if (selectedOption === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }

    handleNext();
  }

  function restartQuiz() {
    setQuestionInd(0);
    setShowResults(false);
    setScore(0);
    setUserAnswers(new Array(topic.questions.length).fill(null));
  }

  return (
    <main>
      <h3 className="w-full text-center p-2">
        Vous êtes en mode <span className="text-red-700">{mode}</span>
      </h3>

      {showResults ? (
        <Results
          score={score}
          totalQuestions={topic.questions.length}
          onRestart={restartQuiz}
          questions={topic.questions}
          userAnswers={userAnswers}
        />
      ) : (
        <div className="mask-appear">
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
          />
          {showAnswer && (
            <div className="mt-2 p-4 bg-green-100 rounded">
              <p className="font-bold">Réponse correcte:</p>
              <p>{currentQuestion.options[currentQuestion.answer]}</p>
            </div>
          )}
          <div className="mt-4 flex justify-between min-[550px]:flex-row flex-col gap-5">
            <Button
              className={`flex items-center overflow-hidden ${
                questionIndex === 0 ? "opacity-60 cursor-not-allowed" : ""
              }`}
              onClick={handlePrev}
              disabled={questionIndex === 0}
            >
              <ChevronLeft className="mr-2" />
              Question précédente
            </Button>
            <Button
              className="flex items-center overflow-hidden"
              onClick={handleNext}
            >
              {questionIndex === topic.questions.length - 1
                ? "Voir les résultats"
                : "Passer la question"}
              <ChevronRight className="mr-2" />
            </Button>
          </div>
        </div>
      )}
    </main>
  );
};

export default TopicComponent;
