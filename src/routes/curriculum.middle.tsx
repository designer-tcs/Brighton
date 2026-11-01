import { createFileRoute } from "@tanstack/react-router";
import { StagePage } from "@/components/curriculum/StagePage";
import { stageBySlug } from "@/components/curriculum/stages";

export const Route = createFileRoute("/curriculum/middle")({
  head: () => ({
    meta: [
      { title: "Middle School Curriculum | Brighton International School, Raipur" },
      { name: "description", content: "Classes 6 to 8 at Brighton, Raipur: Sanskrit, AI, combined Science, weekly case studies, clubs and Model United Nations." },
      { property: "og:title", content: "Middle School Curriculum at Brighton International School" },
      { property: "og:description", content: "Classes 6 to 8 at Brighton, Raipur: Sanskrit, AI, combined Science, weekly case studies, clubs and Model United Nations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <StagePage stage={stageBySlug("middle")} />,
});
