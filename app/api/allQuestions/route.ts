import { TopicsName } from "@/utils/exporter";
import { NextRequest } from "next/server";

export async function GET(req:NextRequest){
    return Response.json(TopicsName)
}