import getQuestionsByName from "@/utils/retriver";
import { NextRequest } from "next/server";

// this is a handler that respond with a Question array
export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  
  const name = params.get("name");
  
  if (!name)
    return new Response("the name parameter is missing for this request",{status:400});
  
  //get the questions from the db using name (identifier) 
  const question = await getQuestionsByName(name);
  
  if (question == -1)
    return new Response("the requested questions doesn't exist (yet)",{status: 404,});

  return Response.json(question);
}
