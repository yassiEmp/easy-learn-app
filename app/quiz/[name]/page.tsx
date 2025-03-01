import { QuestionArray } from "@/assets/question";
import Question from "@/components/Question";
import { Button } from "@/components/ui/button";
import getQuestionsByName from "@/utils/retriver";
import { ChevronLeft } from "lucide-react";

export default async function Quiz({ params }: { params: Promise<{name: string}> }) {
  const name = (await params).name 
  const questions = getQuestionsByName(name) ;

if(questions == -1) return <>the asked question isn&apos;t available</>
  const currentQuestion = (questions as QuestionArray)[0];

  return (
    <>
    <h1 className="text-3xl font-bold mb-6 text-center">
          Quiz sur le Droit du Travail - {name.replace("question","")}
        </h1>
      <Question
        QuestionIndex={0}
        answer={currentQuestion.answer}
        options={currentQuestion.options}
        question={currentQuestion.question}
        key={0}
        selectedOptions={[]}
        totalQuestions={10}
      />
      
      <div className="mt-4 flex justify-between">
          <Button className="flex items-center">
            <ChevronLeft className="mr-2" /> Question précédente
          </Button>
          <Button className="flex items-center">Passer la question</Button>
        </div>

        <div className="mt-4">
          <Button className="w-full">Afficher la reponse</Button>
        </div>
    </>
  );
}
