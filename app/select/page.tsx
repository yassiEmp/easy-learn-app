import TopicsSelector from "@/components/TopicsSelector";
import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ["latin"], weight: ["400", "700"] });

export default async function Home() {
  return (
    <>
      <main className={`${unbounded.className} flex min-h-full flex-col items-center justify-between lg:p-24 md:p-16 p-4`}>
        <TopicsSelector />
      </main>
    </>
  );
}
