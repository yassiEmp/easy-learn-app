import { Button } from "@/components/ui/button"
import Summary from './Summary'

interface ResultsProps {
  score: number
  totalQuestions: number
  onRestart: () => void
  questions: {
    question: string;
    options: string[];
    answer: number;
  }[]
  userAnswers: (number | null)[]
}

export default function Results({ score, totalQuestions, onRestart, questions, userAnswers }: ResultsProps) {
  const skippedQuestions = userAnswers.filter(answer => answer === null).length;
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-4">Résultats du Quiz</h2>
        <p className="text-xl mb-2">
          Vous avez obtenu {score} sur {totalQuestions} questions correctes.
        </p>
        {skippedQuestions > 0 && (
          <p className="text-lg mb-2 text-yellow-600">
            Vous avez passé {skippedQuestions} question{skippedQuestions > 1 ? 's' : ''}, considérée{skippedQuestions > 1 ? 's' : ''} comme incorrecte{skippedQuestions > 1 ? 's' : ''}.
          </p>
        )}
        <p className="text-3xl font-bold mb-6">{percentage}%</p>
        <Button onClick={onRestart}>Recommencer le Quiz</Button>
      </div>
      <Summary questions={questions} userAnswers={userAnswers} />
    </div>
  )
}

