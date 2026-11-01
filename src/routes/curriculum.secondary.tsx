import { createFileRoute } from "@tanstack/react-router";
import { StagePage } from "@/components/curriculum/StagePage";
import { BoardResults } from "@/components/curriculum/BoardResults";
import { stageBySlug } from "@/components/curriculum/stages";

export const Route = createFileRoute("/curriculum/secondary")({
  head: () => ({
    meta: [
      { title: "Secondary Curriculum | Brighton International School, Raipur" },
      { name: "description", content: "Classes 9 and 10 at Brighton, Raipur: CBSE board preparation, science labs, financial literacy and career counselling." },
      { property: "og:title", content: "Secondary Curriculum at Brighton International School" },
      { property: "og:description", content: "Classes 9 and 10 at Brighton, Raipur: CBSE board preparation, science labs, financial literacy and career counselling." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <StagePage stage={stageBySlug("secondary")} />
      <BoardResults cls="X" />
    </>
  ),
});
