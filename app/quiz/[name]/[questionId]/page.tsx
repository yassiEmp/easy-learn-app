import { QuestionArray } from "@/assets/question";
import Question from "@/components/Question";
import { Button } from "@/components/ui/button";
import getQuestionsByName from "@/utils/retriver";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default async function Quiz({
  params,
}: {
  params: Promise<{ name: string; questionId: string }>;
}) {
  const name = (await params).name;
  const questionIndex = Number((await params).questionId);
  const questions = getQuestionsByName(name);
  const length = (questions as QuestionArray).length
  const prev = Math.max(questionIndex - 1,0)
  const next = Math.min(questionIndex + 1,length)
  if (questions == -1) return <>the asked question isn&apos;t available</>;
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
        key={0}
        selectedOptions={[]}
        totalQuestions={length}
      />

      <div className="mt-4 flex justify-between">
        <Button className="flex items-center">
          <ChevronLeft className="mr-2" />{" "}
          <Link href={`/quiz/${name}/${prev}`}>
            Question précédente
          </Link>
        </Button>
        <Button className="flex items-center">
          <Link href={`/quiz/${name}/${next}`}>
            Passer la question
          </Link>
        </Button>
      </div>

      <div className="mt-4">
        <Button className="w-full">Afficher la reponse</Button>
      </div>
    </>
  );
}
