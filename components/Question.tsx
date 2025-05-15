import { Button } from "@/components/ui/button";
import { Space_Grotesk } from "next/font/google";
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
  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          Question {QuestionIndex + 1} sur {totalQuestions}
        </h2>
        <p className="text-lg mb-4">{question}</p>
        <div className="space-y-3">
          {options.map((option, index) => (
            <Button
              key={index}
              className={`${space_Grotesk.className} w-full text-left justify-start text-2xs text-wrap min-h-fit transition-all duration-300 ${
                isAnswerValidated 
                  ? index === answer 
                    ? "bg-green-500 text-white hover:bg-green-600 border-green-600" 
                    : "opacity-50"
                  : "hover:bg-gray-100"
              }`}
              variant="outline"
              onClick={() => handleAnswer(index)}
              disabled={isAnswerValidated}
            >
              {option}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-4">
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
