import { createFileRoute } from "@tanstack/react-router";
import { StagePage } from "@/components/curriculum/StagePage";
import { stageBySlug } from "@/components/curriculum/stages";

export const Route = createFileRoute("/curriculum/")({
  head: () => ({
    meta: [
      { title: "Pre-Primary Curriculum | Brighton International School, Raipur" },
      { name: "description", content: "Brighton's Pre-Primary programme for Nursery to KG II: Jolly Phonics, early mathematics, purposeful play and daily practice in Raipur." },
      { property: "og:title", content: "Pre-Primary Curriculum at Brighton International School" },
      { property: "og:description", content: "Brighton's Pre-Primary programme for Nursery to KG II: Jolly Phonics, early mathematics, purposeful play and daily practice in Raipur." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <StagePage stage={stageBySlug("pre-primary")} />
      <a
        href="https://bubbles.kids/preschool/"
        target="_blank"
        rel="noreferrer"
        className="card-shell mt-6 flex items-center justify-between gap-4 p-7 transition-colors hover:bg-blush"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-highlight">Before Nursery</p>
          <h2 className="font-display text-2xl text-primary">Bubbles Preschool and Activity Hub</h2>
          <p className="mt-1 text-sm text-muted-foreground">Brighton's own preschool at Ashoka Ratna, Raipur.</p>
        </div>
        <span className="font-display text-primary">Visit →</span>
      </a>
    </>
  ),
});
