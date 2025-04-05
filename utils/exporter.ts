import connectDb from "@/db/connectDb";
import Topics from "@/db/model/Topics.model";
import { QuestionArray } from "@/components/Question";
export async function addTopicsToDb(ques: QuestionArray, topicName: string) {
  try {
    const connected = await connectDb();
    if (!connected) {
      console.error("Failed to connect to the database.");
      throw new Error("connection to db failed")
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

