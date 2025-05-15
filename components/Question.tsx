import { Button } from "@/components/ui/button";
import { Space_Grotesk } from "next/font/google";
import { useMemo } from "react";
import { Progress } from "@/components/ui/progress";

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
  score: number;
  selectedAnswer: number | null;
  setSelectedAnswer: (answer: number | null) => void;
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
  score,
  selectedAnswer,
  setSelectedAnswer,
}: QuestionProps) {
  const progress = ((QuestionIndex + 1) / totalQuestions) * 100;

  // Randomize options while keeping track of the correct answer
  const randomizedOptions = useMemo(() => {
    const optionsWithIndices = options.map((option, index) => ({ option, originalIndex: index }));
    const shuffled = [...optionsWithIndices].sort(() => Math.random() - 0.5);
    return {
      options: shuffled.map(item => item.option),
      correctIndex: shuffled.findIndex(item => item.originalIndex === answer)
    };
  }, [options, answer]); // Removed QuestionIndex as it's not needed for randomization

  const handleOptionClick = (index: number) => {
    setSelectedAnswer(index);
    handleAnswer(randomizedOptions.correctIndex === index ? answer : index);
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 animate-slide-in">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4 sm:mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm sm:text-base font-medium">
              Question {QuestionIndex + 1}/{totalQuestions}
            </div>
            <div className="flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-full">
              <span className="text-sm sm:text-base text-muted-foreground">Score:</span>
              <span className="text-sm sm:text-base font-semibold text-primary">{score}</span>
              <span className="text-xs sm:text-sm text-muted-foreground">/ {totalQuestions}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-sm sm:text-base font-medium text-primary">
              {Math.round(progress)}% Complete
            </div>
            <div className="hidden sm:block w-16 h-1.5 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <Progress value={progress} className="h-1.5 sm:h-2 mb-4 sm:mb-6" />

        <div className="bg-muted/50 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
          <p className="text-lg sm:text-xl font-medium leading-relaxed">{question}</p>
        </div>

        <div className="space-y-2 sm:space-y-3">
          {randomizedOptions.options.map((option, index) => (
            <Button
              key={index}
              className={`${space_Grotesk.className} w-full text-left justify-start text-base sm:text-lg text-wrap min-h-fit py-3 sm:py-4
                transition-all duration-200 ease-out transform
                ${isAnswerValidated 
                  ? index === randomizedOptions.correctIndex 
                    ? "bg-green-500 text-white border-green-600 scale-[1.02] shadow-lg ring-2 ring-green-400 ring-offset-2" 
                    : selectedAnswer === index && index !== randomizedOptions.correctIndex
                      ? "bg-red-200 text-red-700 border-red-300 scale-[0.98] ring-1 ring-red-200"
                      : ""
                  : "hover:scale-[1.01] hover:shadow-sm active:scale-[0.99]"
                }
                ${isAnswerValidated && index === randomizedOptions.correctIndex ? "animate-pulse-once" : ""}
                ${isAnswerValidated && selectedAnswer === index && index !== randomizedOptions.correctIndex ? "animate-shake" : ""}
                ${!isAnswerValidated ? "animate-bounce-in" : ""}
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

      <div className="mt-3 sm:mt-4 animate-fade-in">
        <Button
          className={`w-full transition-all duration-200 text-base sm:text-lg ${
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
