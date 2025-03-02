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
  handleAnswer: (selectedOption: number) => void; // Added
  mode: string;
}

export default function Question({
  options,
  totalQuestions,
  question,
  QuestionIndex,
  handleShowAnswer,
  handleAnswer, // Added
  mode,
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
              className={`${space_Grotesk.className} w-full text-left justify-start text-2xs text-wrap min-h-fit`}
              variant="outline"
              onClick={() => handleAnswer(index)} // Handle answer selection
            >
              {option}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <Button
          className={`w-full ${mode == "devoir" ? "opacity-60 cursor-not-allowed pointer-events-none" : ""}`}
          onClick={handleShowAnswer}
        >
          Afficher la réponse
        </Button>
      </div>
    </>
  );
}
