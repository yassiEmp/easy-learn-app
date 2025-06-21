import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StructuredOutputParser } from "@langchain/core/output_parsers"
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
    .min(5)
    .describe("the name of the questionnary (max 30 characters minimum 5)"),
  questions: z.array(zodQcmQuestionSchema)
    .describe("the questions of the questionnary"),
})

export async function generateQuestionnaryFromText(text: string, language: string) {

  // Initialize the chat model
  const chatModel = new ChatOpenAI({
    openAIApiKey: token,
    modelName: model,
    temperature: 1.0,
    configuration: {
      baseURL: endpoint,
    },
  });


  // initialize the prompt for questionnary generation
  const generateQuestionPrompt = ChatPromptTemplate.fromTemplate(`
    Generate a questionnaire about the following text.
    Important: The questionnaire name MUST be between 5 and 30 characters long.
    
    Format instructions: {format_instructions}
    Text: {text}
    Language: {language}
    
    Remember: Keep the questionnaire name short and concise (5-30 characters).
  `);


  // initialize the parser for the questionnary generation
  const parser = StructuredOutputParser.fromZodSchema(zodQuestionnarySchema);
  // initialize the chain for the questionnary generation
  const generateQuestionChain = generateQuestionPrompt.pipe(chatModel).pipe(parser);



  // generate the questionnary
  try {
    const response = await generateQuestionChain.invoke({
      text: text,
      language: language,
      format_instructions: parser.getFormatInstructions()
    });

    // Validate the response before returning
    const validationResult = zodQuestionnarySchema.safeParse(response);
    if (!validationResult.success) {
      console.error("Validation failed:", validationResult.error);
      throw new Error("Generated questionnaire failed validation");
    }

    console.log(response);
    return response;
  } catch (error) {
    console.error("Error generating questionnaire:", error);
    throw error;
  }
}

export default async function getQuestionnaryFromText(text: string, language: string) {
  try {
    console.log("generating questionnary from text");
    return await generateQuestionnaryFromText(text, language);
  } catch (err) {
    console.error("First attempt failed, retrying once...", err);
    try {
      // Wait for 1 second before retrying
      await new Promise(resolve => setTimeout(resolve, 1000));
      return await generateQuestionnaryFromText(text, language);
    } catch (retryErr) {
      console.error("Retry attempt also failed:", retryErr);
      return null;
    }
  }
} 