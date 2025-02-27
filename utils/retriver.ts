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

export default function getQuestionsByName(
  name: string
): QuestionArray | number {
  switch (name) {
    case "questionTheme1":
      return questionTheme1;
    case "questionTheme2":
      return questionTheme2;
    case "questionTheme3":
      return questionTheme3;
    case "questionTheme4":
      return questionTheme4;
    case "questionTheme5":
      return questionTheme5;
    case "questionTheme6":
      return questionTheme6;
    case "questionTheme7":
      return questionTheme7;
    case "formules":
      return formules;
    case "mathQuestions":
      return mathQuestions;
    case "OSI":
      return OSI;
    default:
      return -1;
  }
}
