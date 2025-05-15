import TopicsSelector from "@/components/TopicsSelector";

export default async function Home() {
  return (
    <>
      <main className="flex min-h-full flex-col items-center justify-between lg:p-24 md:p-16 p-4">
        <TopicsSelector />
      </main>
    </>
  );
}
