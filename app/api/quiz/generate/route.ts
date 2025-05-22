import { NextResponse } from "next/server";
import getQuestionnaryFromText from "@/utils/generateQuestionWithAi";
import { addTopicsToDb } from "@/utils/exporter";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
    try {
        const { text, language } = await request.json();

        if (!text || !language) {
            return NextResponse.json(
                { error: "Text and language are required" },
                { status: 400 }
            );
        }

        if (text.length>10000){
          return new Response("the text is too long please retry with a shorter text",{status: 400})
        }

        // Generate the questionnaire
        const questionnaire = await getQuestionnaryFromText(text, language);

        if (!questionnaire) {
            return NextResponse.json(
                { error: "Failed to generate questionnaire" },
                { status: 500 }
            );
        }

        const res = await addTopicsToDb(questionnaire.questions,questionnaire.name)
        if(res==-1){return new Response("error while interacting with the db retry later",{status: 500})}
        revalidatePath("/api/allQuestions")

        return NextResponse.json({ 
            name: questionnaire.name,
            message: "Quiz generated successfully" 
        });
    } catch (error) {
        console.error("Error in quiz generation:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}