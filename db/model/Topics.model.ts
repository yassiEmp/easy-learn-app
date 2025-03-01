import mongoose, { Model } from "mongoose";
import topicsSchema from "@/db/schema/questionSchema";
import { TopicDocument } from "@/db/schema/questionSchema";

// Ensure the model is correctly typed
const Topics: Model<TopicDocument> =
  mongoose.models.Topic || mongoose.model<TopicDocument>("Topic", topicsSchema);

export default Topics;
