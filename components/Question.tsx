import { Button } from "@/components/ui/button"

import {Space_Grotesk} from 'next/font/google'
const space_Grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700",],
});

interface QuestionProps {
  question: string
  options: string[]
  onAnswer: (selectedAnswer: number | null) => void
  currentQuestion: number
  totalQuestions: number
  selectedAnswer: number | null
}

export default function Question({ 
  question, 
  options, 
  onAnswer, 
  currentQuestion, 
  totalQuestions,
  selectedAnswer
}: QuestionProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Question {currentQuestion} sur {totalQuestions}</h2>
      <p className="text-lg mb-4">{question}</p>
      <div className="space-y-3">
        {options.map((option, index) => (
          <Button
            key={index}
            className={`${space_Grotesk.className} w-full text-left justify-start text-2xs ${selectedAnswer === index ? 'bg-blue-100' : ''}`}
            variant="outline"
            onClick={() => onAnswer(index)}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  )
}

