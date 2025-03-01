import mongoose from "mongoose";
//haven't put a lot ow work to do this (not a good quality db schema)
const question_schema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
      autoIncrement: true
    },
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
    },
    topics: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);
export default question_schema;
