"use client";
import { useEffect, useState } from "react";
import Question from "@/components/Question";
import Results from "@/components/Results";
import { Button } from "@/components/ui/button";
import {
  questionTheme1,
  questionTheme2,
  questionTheme3,
  questionTheme4,
  questionTheme5,
  questionTheme6,
  questionTheme7,
} from "@/public/question";

interface QuizProps {
  theme: number;
  mode: "apprentissage" | "devoir";
}

export default function Quiz({ theme, mode }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [questions, setQuestions] = useState(() => {
    switch (theme) {
      case 1: return questionTheme1;
      case 2: return questionTheme2;
      case 3: return questionTheme3;
      case 4: return questionTheme4;
      case 5: return questionTheme5;
      case 6: return questionTheme6;
      case 7: return questionTheme7;
      default: return questionTheme1;
    }
  });
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  useEffect(() => {
    const shuffledQuestions = questions.map((q) => {
      const shuffledOptions = [...q.options];
      shuffledOptions.sort(() => Math.random() - 0.5);
      return {
        ...q,
        options: shuffledOptions,
        answer: shuffledOptions.indexOf(q.options[q.answer]),
      };
    });
    setQuestions(shuffledQuestions);
  }, []);

  const handleAnswer = (selectedAnswer: number | null) => {
    setUserAnswers([...userAnswers, selectedAnswer]);
    if (
      selectedAnswer !== null &&
      selectedAnswer === questions[currentQuestion].answer
    ) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setShowCorrectAnswer(false); // Reset the state when moving to the next question
    } else {
      setShowResults(true);
    }
  };

  const toggleCorrectAnswer = () => {
    setShowCorrectAnswer(!showCorrectAnswer);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setUserAnswers([]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Quiz sur le Droit du Travail - Thème {theme}
      </h1>
      {showResults ? (
        <Results
          score={score}
          totalQuestions={questions.length}
          onRestart={restartQuiz}
          questions={questions}
          userAnswers={userAnswers}
        />
      ) : (
        <>
          <Question
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            onAnswer={handleAnswer}
            currentQuestion={currentQuestion + 1}
            totalQuestions={questions.length}
          />
          {mode === "apprentissage" && (
            <div className="mt-4">
              <Button onClick={toggleCorrectAnswer} className="w-full">
                {showCorrectAnswer ? "Masquer la réponse" : "Afficher la réponse"}
              </Button>
              {showCorrectAnswer && (
                <div className="mt-2 p-4 bg-green-100 rounded">
                  <p className="font-bold">Réponse correcte:</p>
                  <p>{questions[currentQuestion].options[questions[currentQuestion].answer]}</p>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

