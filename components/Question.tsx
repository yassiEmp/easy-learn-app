import { Button } from "@/components/ui/button";
import { Space_Grotesk } from "next/font/google";
import { useState } from "react";
const space_Grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export type Question = {
  question: string;
  options: string[];
  answer: number;
};
export type QuestionArray = Question[];

interface QuestionProps extends Question {
  QuestionIndex: number;
  totalQuestions: number;
  selectedOptions: number[];
  handleShowAnswer: () => void;
  handleAnswer: (selectedOption: number) => void;
  mode: string;
  isAnswerValidated: boolean;
}

export default function Question({
  options,
  totalQuestions,
  question,
  QuestionIndex,
  handleShowAnswer,
  handleAnswer,
  mode,
  isAnswerValidated,
  answer,
}: QuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleOptionClick = (index: number) => {
    setSelectedAnswer(index);
    handleAnswer(index);
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6 animate-slide-in">
        <h2 className="text-xl font-semibold mb-4">
          Question {QuestionIndex + 1} sur {totalQuestions}
        </h2>
        <p className="text-lg mb-4">{question}</p>
        <div className="space-y-3">
          {options.map((option, index) => (
            <Button
              key={index}
              className={`${space_Grotesk.className} w-full text-left justify-start text-2xs text-wrap min-h-fit 
                transition-all duration-300 ease-out transform
                ${isAnswerValidated 
                  ? index === answer 
                    ? "bg-green-500 text-white border-green-600 scale-[1.02] shadow-lg ring-2 ring-green-400 ring-offset-2" 
                    : selectedAnswer === index && index !== answer
                      ? "bg-red-200 text-red-700 border-red-300 scale-[0.98] ring-1 ring-red-200"
                      : ""
                  : "hover:bg-gray-50 hover:scale-[1.01] hover:shadow-sm active:scale-[0.99]"
                }
                ${isAnswerValidated && index === answer ? "animate-pulse-once" : ""}
                ${isAnswerValidated && selectedAnswer === index && index !== answer ? "animate-shake" : ""}
                ${!isAnswerValidated ? "animate-fade-in" : ""}
              `}
              variant="outline"
              onClick={() => handleOptionClick(index)}
              disabled={isAnswerValidated}
            >
              {option}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-4 animate-fade-in">
        <Button
          className={`w-full transition-all duration-300 ${
            mode === "devoir" ? "opacity-60 cursor-not-allowed pointer-events-none" : ""
          }`}
          onClick={handleShowAnswer}
        >
          Afficher la réponse
        </Button>
      </div>
    </>
  );
}
