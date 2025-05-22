import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StructuredOutputParser } from "@langchain/core/output_parsers";
import { z } from "zod";

const token = process.env["GITHUB_TOKEN"];
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";

const zodQcmQuestionSchema = z.object({
  question: z.string()
    .describe("the question"),
  options: z.array(z.string()
    .describe("one of the options of the question"))
    .describe("the options of the question"),
  answer: z.number().min(0).describe("the good answer index (starts at 0)"),
  explanation: z.string().describe("the explanation of the answer"),
});

const zodQuestionnarySchema = z.object({
  name: z.string()
    .max(30)
    .describe("the name of the questionnary (max 30 characters)"),
  questions: z.array(zodQcmQuestionSchema)
    .describe("the questions of the questionnary"),
});

export async function generateQuestionnaryFromText(text: string, language: string) {
  const chatModel = new ChatOpenAI({
    openAIApiKey: token,
    modelName: model,
    temperature: 0.4,
    configuration: {
      baseURL: endpoint,
    },
  });

  const prompt = ChatPromptTemplate.fromTemplate(`
    generate questions about the following text
    format instructions: {format_instructions}
    text: {text}
    the questionnary should be in the following language: {language}
  `);

  const parser = StructuredOutputParser.fromZodSchema(zodQuestionnarySchema);
  const chain = prompt.pipe(chatModel).pipe(parser);

  const response = await chain.invoke({
    text: text,
    language: language,
    format_instructions: parser.getFormatInstructions()
  });

  return response;
}

export default async function getQuestionnaryFromText(text: string, language: string) {
  try {
    console.log("generating questionnary from text");
    return await generateQuestionnaryFromText(text, language);
  } catch (err) {
    console.error("an error occured while generating the questionnary at connectToAI.ts:", err);
    return null;
  }
} 