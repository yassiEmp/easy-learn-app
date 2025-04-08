import { addTopicsToDb } from "@/utils/exporter";
import { getQuestionsByNameDb } from "@/utils/retriver";
import { NextRequest } from "next/server";
import { revalidatePath } from "next/cache";
// this is a handler that respond with a Question array
export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;

  const name = params.get("name");

  if (!name)
    return new Response("the name parameter is missing for this request", {
      status: 400,
    });

  //get the questions from the db using name (identifier)
  const Topic = await getQuestionsByNameDb(name);

  if (Topic == -1)
    return new Response("the requested Topics doesn't have a qcm (yet)", {
      status: 404,
    });

  const response = Response.json(Topic);
  response.headers.set("Cache-Control", "max-age=2678400, public"); // Cache for 31 days
  return response;
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
