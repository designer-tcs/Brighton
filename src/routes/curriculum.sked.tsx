import { createFileRoute } from "@tanstack/react-router";
import { SkedCalendars } from "@/components/curriculum/SkedCalendars";

export const Route = createFileRoute("/curriculum/sked")({
  head: () => ({
    meta: [
      { title: "SKED | Brighton International School, Raipur" },
      {
        name: "description",
        content:
          "SKED is Brighton's year-long calendar for every class, detailing the syllabus and activities for 2025–26.",
      },
      { property: "og:title", content: "SKED — Brighton International School" },
      {
        property: "og:description",
        content:
          "SKED is Brighton's year-long calendar for every class, detailing the syllabus and activities for 2025–26.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SkedCalendars,
});
