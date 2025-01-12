interface SummaryProps {
  questions: {
    question: string;
    options: string[];
    answer: number;
  }[];
  userAnswers: (number | null)[];
}

export default function Summary({ questions, userAnswers }: SummaryProps) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Résumé des réponses</h3>
      {questions.map((q, index) => (
        <div key={index} className="mb-4 p-4 bg-gray-100 rounded">
          <p className="font-medium">{q.question}</p>
          {userAnswers[index] === null ? (
            <p className="text-yellow-600">Question passée (considérée comme incorrecte)</p>
          ) : (
            <p className={userAnswers[index] === q.answer ? "text-green-600" : "text-red-600"}>
              Votre réponse : {q.options[userAnswers[index] as number]}
            </p>
          )}
          {(userAnswers[index] !== q.answer || userAnswers[index] === null) && (
            <p className="text-green-600">
              Réponse correcte : {q.options[q.answer]}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

