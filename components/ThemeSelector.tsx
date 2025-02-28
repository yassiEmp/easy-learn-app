import { TopicsName } from "@/utils/retriver";
import Link from "next/link";
import { Button } from "./ui/button";

export default function ThemeSelector() {
  const themes = TopicsName;
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Choisissez un thème
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {themes.map((theme) => (
          <Button
              key={theme}
              className="w-full text-lg py-4 ">
            <Link
              href={`/quiz/${theme}`}
            >
              {theme}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
