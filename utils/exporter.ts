import {
  questionTheme1,
  questionTheme2,
  questionTheme3,
  questionTheme4,
  questionTheme5,
  questionTheme6,
  questionTheme7,
  formules,
  mathQuestions,
  OSI,
  Question,
  QuestionArray,
} from "@/assets/question";
import connectDb from "@/db/connectDb";
import QuestionModel from "@/db/model/Question.model";
import getQuestionsByName from "./retriver";

function addQuestionToDb(ques: Question, topics: string) {
  const connected = connectDb();
  if(!connected){
    return -1}
  const question = new QuestionModel({
    question: ques.question,
    answer: ques.answer,
    options: ques.options,
    topics: topics,
  });
  question.save();
  return;
}

export const TopicsName = [
  "questionTheme1",
  "questionTheme2",
  "questionTheme3",
  "questionTheme4",
  "questionTheme5",
  "questionTheme6",
  "questionTheme7",
  "formules",
  "mathQuestions",
  "OSI"
];

for(const name of TopicsName){
  const QuestionArr = getQuestionsByName(name)
  console.log(QuestionArr)
}