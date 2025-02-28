import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const mode = "apprentissage";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3>
        {" "}
        vous etes en mode <span className="text-red-700">{mode}</span>
      </h3>
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
      <Button className="mb-8">
        <Link href="/">Choisir le theme</Link>
      </Button>
    </main>
  );
}
