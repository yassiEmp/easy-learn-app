"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";

export default function GenerateQuiz() {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("en");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/quiz/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, language }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate quiz");
      }

      const data = await response.json();
      router.push(`/quiz/${data.name}?mode=apprentissage`);
    } catch (error) {
      console.error("Error generating quiz:", error);
      // You might want to add proper error handling UI here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">Generate New Quiz</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="text" className="block text-sm font-medium">
            Text to Generate Questions From
          </label>
          <Textarea 
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter the text you want to generate questions from..."
            className="w-full min-h-[200px] p-2 border rounded-md"
            maxLength={10000}
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="language" className="block text-sm font-medium">
            Language
          </label>
          <input
            id="language"
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            placeholder="en"
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
        >
          {isLoading ? "Generating..." : "Generate Quiz"}
        </button>
      </form>
    </div>
  );
} 