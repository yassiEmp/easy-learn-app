import { getAllNames } from "@/utils/retriver";

export const revalidate = 3600; // Cache for 1 hour (in seconds)

export async function GET() {
  const TopicsName = await getAllNames();
  if (TopicsName == -1) {
    return new Response("no topic found ", { status: 404 });
  }
  
  const response = Response.json(TopicsName);
  response.headers.set("Cache-Control", "max-age=2678400, public"); // Cache for 31 days
  return response;
}
