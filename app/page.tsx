import TopicsSelector from "@/components/TopicsSelector";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <main className="flex min-h-full flex-col items-center justify-between lg:p-24 md:p-16 p-4">
        <Link href="/quiz/generate" className="bg-blue-500 text-primary-foreground px-4 py-2 rounded-md">
          Générer un quiz
        </Link>
        <TopicsSelector />
      </main>
    </>
  );
}
