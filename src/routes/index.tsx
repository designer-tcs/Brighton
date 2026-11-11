import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Star } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { ProgramsSection } from "@/components/ProgramsSection";
import { DifferenceSection } from "@/components/DifferenceSection";
import { CampusTourSection } from "@/components/CampusTourSection";
import { InsideBrightonSection } from "@/components/InsideBrightonSection";
import { TeamSection } from "@/components/TeamSection";
import { BehindScenesSection } from "@/components/BehindScenesSection";
import { JournalSection } from "@/components/JournalSection";
import { FaqSection } from "@/components/FaqSection";
import heroKids from "@/assets/hero-kids.jpg";
import { HowBrightonDoesIt } from "@/components/story/BrightonStory";
import { CoCurricularCalendar } from "@/components/CoCurricularCalendar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brighton International School, Raipur | CBSE School for Life" },
      {
        name: "description",
        content:
          "Brighton International School, Raipur is a CBSE school on an 8-acre green campus offering Nursery to Class XII with a progressive curriculum and innovative pedagogy.",
      },
      { property: "og:title", content: "Brighton International School, Raipur" },
      {
        property: "og:description",
        content:
          "A CBSE school in Raipur where learning happens by doing — Nursery to Class XII on an 8-acre campus.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});


function Home() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden rounded-[1.75rem]">
        <img
          src={heroKids}
          alt="A Brighton student with her hand raised in class"
          width={1600}
          height={2400}
          className="aspect-[4/5] w-full object-cover object-[center_42%] md:aspect-[3/2]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/55 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center gap-4 p-7 md:p-14">
          <h1 className="max-w-2xl font-display text-4xl leading-[1.02] text-background md:text-6xl lg:text-7xl">
            Where every
            <br />
            child is <span className="italic text-coral">known.</span>
          </h1>
          <p className="max-w-xl text-base leading-snug text-background/90 md:text-xl">
            Meeting the education needs of TODAY with the traditional wisdom of YESTERDAY and the technology of TOMORROW.
          </p>
          <ul className="space-y-1.5 text-background/90">
            <li className="flex items-center gap-2">
              <MapPin className="size-4" /> Nardaha, Baloda Bazar Road, Raipur
            </li>
            <li className="flex items-center gap-2">
              <Star className="size-4" /> Admissions open for Session 2027–28
            </li>
          </ul>
          <Link
            to="/admissions"
            className="mt-2 w-fit rounded-full border border-background/60 bg-background/15 px-7 py-3 font-display text-lg text-background backdrop-blur transition-colors hover:bg-background/25"
          >
            Apply Now
          </Link>
        </div>
      </section>

      <ProgramsSection />

      <DifferenceSection />

      <HowBrightonDoesIt />

      <CoCurricularCalendar />

      <CampusTourSection />

      <InsideBrightonSection />

      <TeamSection />

      <BehindScenesSection />

      <JournalSection />

      <FaqSection />

    </SiteLayout>
  );
}
