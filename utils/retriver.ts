// import {
//   questionTheme1,
//   questionTheme2,
//   questionTheme3,
//   questionTheme4,
//   questionTheme5,
//   questionTheme6,
//   questionTheme7,
//   formules,
//   mathQuestions,
//   OSI,
//   Question,
//   QuestionArray,
// } from "@/assets/question";
import connectDb from "@/db/connectDb";
import Topics from "@/db/model/Topics.model";
import { Topic } from "@/db/schema/questionSchema";

// export const TopicsName = [
//   "questionTheme1",
//   "questionTheme2",
//   "questionTheme3",
//   "questionTheme4",
//   "questionTheme5",
//   "questionTheme6",
//   "questionTheme7",
//   "formules",
//   "mathQuestions",
//   "OSI",
// ];

// export default async function getQuestionsByName(
//   name: string
// ): Promise<QuestionArray | number> {
//   console.log("the name is: ", name);
//   switch (name) {
//     case "questionTheme1":
//       return questionTheme1;
//     case "questionTheme2":
//       return questionTheme2;
//     case "questionTheme3":
//       return questionTheme3;
//     case "questionTheme4":
//       return questionTheme4;
//     case "questionTheme5":
//       return questionTheme5;
//     case "questionTheme6":
//       return questionTheme6;
//     case "questionTheme7":
//       return questionTheme7;
//     case "formules":
//       return formules;
//     case "mathQuestions":
//       return mathQuestions;
//     case "OSI":
//       return OSI;
//     default:
//       return -1;
//   }
// }

export async function getQuestionsByNameDb(
  name: string
): Promise<Topic | number> {
  const connected = connectDb();
  if (!connected) {
    return -1;
  }
  const Top = await Topics.findOne<Topic>({ name: name });
  if (!Top) {
    return -1;
  }
  return Top;
}
