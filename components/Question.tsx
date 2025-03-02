import { Button } from "@/components/ui/button"

import {Space_Grotesk} from 'next/font/google'
const space_Grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700",],
});

export type Question ={
  question: string;
  options: string[];
  answer: number;
}
export type QuestionArray= Question[]
interface QuestionProps extends Question{
  QuestionIndex: number,

  totalQuestions: number,
  // the index of the selected option will be pushed here 
  selectedOptions: number[]
}

export default function Question({
  options, 
  totalQuestions,
  selectedOptions,
  question,
  answer,
  QuestionIndex
}: QuestionProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Question {QuestionIndex +1} sur {totalQuestions}</h2>
      <p className="text-lg mb-4">{question}</p>
      <div className="space-y-3">
        {options.map((option, index) => (
          <Button
            key={index}
            className={`${space_Grotesk.className} w-full text-left justify-start text-2xs text-wrap min-h-fit`}
            variant="outline"
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  )
}

