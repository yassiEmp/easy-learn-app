import { getAllNames } from "@/utils/retriver";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const TopicsName = await getAllNames();
  if (TopicsName == -1) {
    return new Response("no topic found ", { status: 404 });
  }
  return Response.json(TopicsName);
}
