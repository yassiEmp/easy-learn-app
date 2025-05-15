import { addTopicsToDb } from "@/utils/exporter";
import { getQuestionsByNameDb } from "@/utils/retriver";
import { NextRequest } from "next/server";
import { revalidatePath } from "next/cache";
// this is a handler that respond with a Question array
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");

  if (!name) {
    return new Response("Missing name parameter", { status: 400 });
  }

  const topic = await getQuestionsByNameDb(name);

  if (topic === -1) {
    return new Response("Topic not found", { status: 404 });
  }

  return Response.json(topic);
}

export async function POST(req: Request) {
  try {
    let data;
    try {
      data = await req.json();
    } catch (err) {
      console.error(err)
      return new Response("Invalid or empty JSON body", { status: 400 });
    }
    if (!data.name) {
      return new Response("the name is missing in the request body", {
        status: 400,
      });
    }
    if (!data.questions) {
      return new Response("the questions is missing in the request body", {
        status: 400,
      });
    }
    const { name , questions } = data;
    const res = await addTopicsToDb(questions,name)
    if(res==-1){return new Response("error while interacting with the db retry later",{status: 500})}
    revalidatePath("/api/allQuestions")
    return Response.json("ok");
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify(err), { status: 500 });
  }
}
