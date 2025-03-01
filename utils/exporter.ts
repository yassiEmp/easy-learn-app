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
import Topics from "@/db/model/Topics.model";

export async function addTopicsToDb(ques: QuestionArray, topicName: string) {
  try {
    const connected = await connectDb();
    if (!connected) {
      console.error("Failed to connect to the database.");
      throw new Error("connection to db failed")
    }

    // Check if the topic already exists
    const existingTopic = await Topics.findOne({ name: topicName });
    if (existingTopic) {
      console.log(`Topic ${topicName} already exists.`);
      return;
    }

    const topic = new Topics({
      questions: ques,
      name: topicName,
    });

    // Save the topic and wait for completion
    await topic.save();
    console.log(`Topic ${topicName} saved successfully.`);
    return "ok"
  } catch (err) {
    console.error(`Error adding topic ${topicName}:`, err);
    return -1
  }
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
  "OSI",
];

// export async function addThem(TopicsName:string[]) {
//   for (const name of TopicsName) {
//     try {
//       const QuestionArr = await getQuestionsByName(name);
//       if (typeof QuestionArr === "number") continue; // Skip if the result is an error code
//       await addTopicsToDb(QuestionArr, name);
//     } catch (err) {
//       console.log(`Error retrieving questions for ${name}:`, err);
//     }
//   }
// }

