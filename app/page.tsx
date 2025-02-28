import ThemeSelector from "@/components/ThemeSelector";

export default async function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="container mx-auto px-4 py-8">
          <ThemeSelector />
        </div>
      </main>
    </>
  );
}
