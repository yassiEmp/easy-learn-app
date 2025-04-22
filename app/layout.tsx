import type { Metadata } from "next";
import { Unbounded, Poppins } from "next/font/google";
import "./globals.css";
import ErrorBoundary from "@/components/ErrorBoundary";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
  title: "QCM - Quizz",
  description:
    "this is a quizz app to learn all your lesson and improve your level and knowledge for school or life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-svh ">
      <body
        className={`${poppins.className} flex antialiased w-full h-full
        `}
      >
        <SpeedInsights />
        <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  );
}
