import { Topic } from "@/db/schema/questionSchema";
import TopicComponent from "@/components/TopicComponent";

export default async function Quiz({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const name = (await params).name;

  try {
    const apiUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const res = await fetch(`${apiUrl}/api/questions?name=${name}`, {
      method: "GET",
      cache: "force-cache",
    });

    if (!res.ok) {
      if (res.status === 404) {
        return <p className="text-center text-red-500">⚠️ Ce quiz n&apos;existe pas encore.</p>;
      }
      return <p className="text-center text-red-500">⚠️ Une erreur est survenue.</p>;
    }

    const TopicE: Topic = await res.json();
    const questions = TopicE.questions;
    const length = questions.length;

    if (length === 0) {
      return <p className="text-center text-gray-500">📭 Aucun questionnaire disponible.</p>;
    }

    return (
      <>
        <h1 className="text-3xl font-bold mb-6 text-center">
          Quiz sur le Droit du Travail - {name.replace("question", "")}
        </h1>
        <TopicComponent topic={TopicE} />
      </>
    );
  } catch (err) {
    console.error(err);
    return <p className="text-center text-red-500">⚠️ Une erreur est survenue.</p>;
  }
}
