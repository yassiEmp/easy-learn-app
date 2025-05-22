import mongoose from "mongoose";

const QcmQuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: [{
    type: String,
    required: true,
  }],
  answer: {
    type: Number,
    required: true,
    min: 0,
  },
  explanation: {
    type: String,
    required: true,
  },
});

const QuizSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 30,
  },
  questions: [QcmQuestionSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Quiz = mongoose.models.Quiz || mongoose.model("Quiz", QuizSchema); 