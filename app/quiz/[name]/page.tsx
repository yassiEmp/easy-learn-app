import TopicComponent from "@/components/TopicComponent";
import { getAllNames, getTopic } from "@/utils/retriver";

// Generate static paths for all topics
export async function generateStaticParams() {
  const topics = await getAllNames();
  if (topics === -1) return [];
  
  return topics.map((name) => ({
    name: encodeURIComponent(name),
  }));
}

export default async function Quiz({
  params,
}: {
  params: { name: string };
}) {
  const name = decodeURIComponent(params.name);
  
  try {
    const topic = await getTopic(name);
    
    if (!topic) {
      return <p className="text-center text-red-500">⚠️ Ce quiz n&apos;existe pas encore.</p>;
    }

    const questions = topic.questions;
    const length = questions.length;

    if (length === 0) {
      return <p className="text-center text-gray-500">📭 Aucun questionnaire disponible.</p>;
    }

    return (
      <>
        <h1 className="text-3xl font-bold mb-6 text-center">
          Quiz sur - {name.replace("question", "").replace("%20"," ")}
        </h1>
        <TopicComponent topic={topic} />
      </>
    );
  } catch (err) {
    console.error(err);
    return <p className="text-center text-red-500">⚠️ Une erreur est survenue.</p>;
  }
}
