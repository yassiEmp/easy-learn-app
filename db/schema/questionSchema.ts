import { Document, Schema } from "mongoose";

interface Question {
  question: string;
  options: string[];
  answer: number;
}

// Extend Mongoose Document for type safety
export interface QuestionDocument extends Question, Document {}

export interface Topic {
  name: string;
  questions: Question[];
}

// Extend Mongoose Document for Topics
export interface TopicDocument extends Topic, Document {}
// Define Mongoose schema for questions
const questionSchema = new Schema<QuestionDocument>(
  {
    question: {
      type: String,
      required: true,
    },
    options: {
      type: [String],
      required: true,
    },
    answer: {
      type: Number,
      required: true,
      min: 0, // Ensure valid index
    },
  },
  { timestamps: true }
);

// Define Mongoose schema for topics
const topicsSchema = new Schema<TopicDocument>({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  questions: {
    type: [questionSchema], // Correctly define an array of subdocuments
    required: true,
  },
});

export default topicsSchema;