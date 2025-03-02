import { TopicsName } from "@/utils/retriver";
import Link from "next/link";
import { Button } from "./ui/button";

export default async function ThemeSelector() {
  const apiUrl = process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL
    : "http://localhost:3000";
    let themes:string[]
  try{
    const res = await fetch(`${apiUrl}/api/allQuestions`,{method: "get"});
    themes= await res.json()
    console.log(themes)
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Choisissez un thème
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {themes.map((theme) => (
          <Button key={theme} className="w-full text-lg py-4 ">
            <Link href={`/quiz/${theme}/0`}>
              {theme.replace("question", "")}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
  }  catch(err){
    console.error(err)
    return <h2>a strange thing just happen</h2>
  }
}
