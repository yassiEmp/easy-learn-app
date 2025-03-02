import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const mode = "apprentissage";
  return (
    <main className="flex min-h-full flex-col items-center justify-between lg:p-24 md:p-16 p-4">
      
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
      <Button className="mb-8 overflow-hidden">
        <Link href="/" className="min-w-[150%] h-fit p-10 text-wrap">Choisir le theme</Link>
      </Button>
    </main>
  );
}
