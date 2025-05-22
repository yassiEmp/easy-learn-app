import getQuestionnaryFromText from "@/utils/generateQuestionWithAi";

export async function POST(req: Request) {
    try {
        const { text, language } = await req.json()
        if (!text || !language) {
            return new Response("text and language are required", { status: 400 })
        }
        const questionnary = await getQuestionnaryFromText(text, language);
        if (!questionnary) {
            return new Response("an error occured while generating the questionnary", { status: 500 })
        }
        const jsonQuestion = JSON.stringify(questionnary)
        try {
            const res = await fetch(`/api/questions`, {
                method: "POST",
                body: jsonQuestion
            })
            if (res.ok) {
                return new Response(jsonQuestion, { status: 200 })
            }
        } catch (error) {
            console.error("error while adding the questionnary to the database")
        }
        return new Response("something when wrong while trying to create the questionnary", {
            status: 500
        })
    } catch (error) {
        console.error("an error occured while generating the questionnary please retry at connectToAI.ts ", error)
        return new Response("ERROR while generating the questionnary")
    }
}