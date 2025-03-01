import mongoose from "mongoose"
import question_schema from "../schema/questionSchema"

const QuestionModel = mongoose.model("Question",question_schema)

export default QuestionModel