import { createFileRoute } from "@tanstack/react-router";
import { StagePage } from "@/components/curriculum/StagePage";
import { BoardResults } from "@/components/curriculum/BoardResults";
import { YouTubeCard } from "@/components/YouTubeCard";
import { stageBySlug } from "@/components/curriculum/stages";
import { ScienceStreams } from "@/components/curriculum/ScienceStreams";
import { SeniorCareers } from "@/components/story/BrightonStory";

export const Route = createFileRoute("/curriculum/senior-secondary")({
  head: () => ({
    meta: [
      { title: "Senior Secondary Curriculum | Brighton International School, Raipur" },
      { name: "description", content: "Classes 11 and 12 at Brighton, Raipur: Science, Commerce and Humanities streams with internships and career guidance." },
      { property: "og:title", content: "Senior Secondary Curriculum at Brighton International School" },
      { property: "og:description", content: "Classes 11 and 12 at Brighton, Raipur: Science, Commerce and Humanities streams with internships and career guidance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <StagePage
        stage={stageBySlug("senior-secondary")}
        afterOverview={
          <>
            <ScienceStreams />
            <SeniorCareers />
            <section className="card-shell mt-6 p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-highlight">Careers</p>
              <h2 className="mt-1 font-display text-3xl text-primary">Career Fair 2025</h2>
              <YouTubeCard id="YEVLZgb9hzw" title="Career Fair 2025 at Brighton International School" className="mt-4 max-w-3xl" />
            </section>
          </>
        }
      />
      <BoardResults cls="XII" />
    </>
  ),
});
