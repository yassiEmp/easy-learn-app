import { QuestionArray } from "@/assets/question";
import Question from "@/components/Question";
import { Button } from "@/components/ui/button";
import { Topic } from "@/db/schema/questionSchema";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default async function Quiz({
  params,
}: {
  params: Promise<{ name: string; questionId: string }>;
}) {
  const name = (await params).name;
  const questionIndex = Number((await params).questionId);

  try {
    const apiUrl = process.env.NEXT_PUBLIC_SITE_URL
      ? process.env.NEXT_PUBLIC_SITE_URL
      : "http://localhost:3000";

    const res = await fetch(`${apiUrl}/api/questions?name=${name}`, {
      method: "GET",
      cache: "force-cache",
    });

    if (!res.ok) {
      if (res.status === 404) {
        return <p className="text-center text-red-500">⚠️ Ce quiz n'existe pas encore.</p>;
      }
      return <p className="text-center text-red-500">⚠️ Une erreur est survenue.</p>;
    }

    const TopicE: Topic = await res.json();
    const questions = TopicE.questions;
    const length = questions.length;

    if (length === 0) {
      return <p className="text-center text-gray-500">📭 Aucun questionnaire disponible.</p>;
    }

    const prev = Math.max(questionIndex - 1, 0);
    const next = Math.min(questionIndex + 1 , length -1);
    const currentQuestion = (questions as QuestionArray)[questionIndex];

    return (
      <>
        <h1 className="text-3xl font-bold mb-6 text-center">
          Quiz sur le Droit du Travail - {name.replace("question", "")}
        </h1>
        <Question
          QuestionIndex={questionIndex}
          answer={currentQuestion.answer}
          options={currentQuestion.options}
          question={currentQuestion.question}
          key={questionIndex}
          selectedOptions={[]}
          totalQuestions={length}
        />

        <div className="mt-4 flex justify-between">
          <Button className="flex items-center">
            <ChevronLeft className="mr-2" />
            <Link href={`/quiz/${name}/${prev}`}>Question précédente</Link>
          </Button>
          <Button className="flex items-center">
            <Link href={`/quiz/${name}/${next}`}>Passer la question</Link>
          </Button>
        </div>

        <div className="mt-4">
          <Button className="w-full">Afficher la réponse</Button>
        </div>
      </>
    );
  } catch (err) {
    console.error(err);
    return <p className="text-center text-red-500">⚠️ Une erreur est survenue.</p>;
  }
}
