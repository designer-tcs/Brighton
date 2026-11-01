import { createFileRoute } from "@tanstack/react-router";
import { SectionBanner } from "@/components/SectionBanner";
import { NewsStrip } from "@/components/admissions/NewsStrip";
import { PhotoSlot } from "@/components/PhotoSlot";

export const Route = createFileRoute("/admissions/media")({
  head: () => ({
    meta: [
      { title: "Media & Accolades | Brighton International School, Raipur" },
      {
        name: "description",
        content:
          "Press coverage, rankings and accolades earned by Brighton International School, Raipur across local and national media.",
      },
      { property: "og:title", content: "Brighton in the News — Media & Accolades" },
      {
        property: "og:description",
        content: "Rankings and press coverage of Brighton International School, Raipur.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MediaPage,
});

function MediaPage() {
  return (
    <section>
      <SectionBanner
        title="Brighton in the News"
        subtitle="Accolades and coverage in local and national media."
        tone="dark"
      />
      <div className="mt-3">
        <NewsStrip />
      </div>
      <PhotoSlot label="Press photo of the campus" className="mt-6 aspect-[3/2]" />
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <PhotoSlot label="Press clipping" className="min-h-40" />
        <PhotoSlot label="Award ceremony" className="min-h-40" />
        <PhotoSlot label="Newspaper feature" className="min-h-40" />
      </div>
    </section>
  );
}
