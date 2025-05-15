import { getAllNames } from "@/utils/retriver";

export async function GET() {
  const TopicsName = await getAllNames();
  if (TopicsName == -1) {
    return new Response("no topic found ", { status: 404 });
  }
  
  return Response.json(TopicsName);
}
