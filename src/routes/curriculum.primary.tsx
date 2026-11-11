import { createFileRoute } from "@tanstack/react-router";
import { StagePage } from "@/components/curriculum/StagePage";
import { stageBySlug } from "@/components/curriculum/stages";

export const Route = createFileRoute("/curriculum/primary")({
  head: () => ({
    meta: [
      { title: "Primary Curriculum | Brighton International School, Raipur" },
      { name: "description", content: "Classes 1 to 5 at Brighton, Raipur: English, Hindi, Mathematics, EVS, an in-house computer syllabus, and no written homework." },
      { property: "og:title", content: "Primary Curriculum at Brighton International School" },
      { property: "og:description", content: "Classes 1 to 5 at Brighton, Raipur: English, Hindi, Mathematics, EVS, an in-house computer syllabus, and no written homework." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <StagePage stage={stageBySlug("primary")} />,
});
