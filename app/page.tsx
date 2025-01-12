"use client";
import { useState } from "react";
import ThemeSelector from "@/components/ThemeSelector";
import Quiz from "@/components/Quiz";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [selectedTheme, setSelectedTheme] = useState<number | null>(null);

  const handleThemeSelect = (theme: number) => {
    setSelectedTheme(theme);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {selectedTheme === null ? (
        <ThemeSelector onThemeSelect={handleThemeSelect} />
      ) : (
        <>
          <Quiz theme={selectedTheme} mode='apprentissage'/>
          <Button onClick={() => setSelectedTheme(null)} className="mb-8">Choisir le theme</Button>
        </>
      )}
    </main>
  );
}

