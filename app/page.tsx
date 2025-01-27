"use client";
import { useState } from "react";
import ThemeSelector from "@/components/ThemeSelector";
import Quiz from "@/components/Quiz";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [selectedTheme, setSelectedTheme] = useState<number | null>(null);
  const [mode, setMode] = useState<"apprentissage" | "devoir">("apprentissage");
  const [themeName, setThemeName] = useState<string>("");
  const handleThemeSelect = (theme: number,themeName:string) => {
    setSelectedTheme(theme);
    setThemeName(themeName);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {selectedTheme === null ? (
        <>
          <ThemeSelector onThemeSelect={handleThemeSelect} />
          <div>
            <h2 className="text-2xl">Activer le :</h2>
          <Button
            onClick={() =>
              setMode(mode === "apprentissage" ? "devoir" : "apprentissage")
            }
          >
            {mode === "apprentissage" ? "Mode devoir" : "Mode apprentissage"}
          </Button>

          </div>
        </>
      ) : (
        <>
          <h3> vous etes en mode <span className="text-red-700">{mode}</span></h3>
          <Quiz theme={selectedTheme} mode={mode} themeName={themeName} />
          <Button onClick={() => setSelectedTheme(null)} className="mb-8">
            Choisir le theme
          </Button>
        </>
      )}
    </main>
  );
}
