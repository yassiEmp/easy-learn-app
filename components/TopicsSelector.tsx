import Link from "next/link";
import { Button } from "./ui/button";
import ChangeMode from "./changeMode";
export const dynamic = "force-dynamic";
export default async function TopicsSelector( ) {
  const apiUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const mode: "apprentissage" | "devoir" = "apprentissage";
  try {
    // Ensure fetch runs at request time, not build time
    const res = await fetch(`${apiUrl}/api/allQuestions`, {
      cache: "no-store", // Ensures fresh data
    });

    if (!res.ok) throw new Error("Failed to fetch themes");

    const themes: string[] = await res.json();

    return (
      <>
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Choisissez un thème
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {themes.map((theme) => (
              <Button
                key={theme}
                className="w-full text-lg py-4 overflow-hidden"
              >
                <Link
                  href={`/quiz/${theme}?mode=apprentissage`}
                  className="min-w-[150%] h-fit p-10 text-wrap apprentissage block"
                >
                  {theme}
                </Link>
                <Link
                  href={`/quiz/${theme}?mode=devoir`}
                  className="min-w-[150%] h-fit p-10 text-wrap devoir hidden"
                >
                  {theme}
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <ChangeMode />
      </>
    );
  } catch (err) {
    console.error(err);
    return (
      <h2>
        Une erreur s&apos;est produite lors de la récupération des thèmes.
      </h2>
    );
  }
}
