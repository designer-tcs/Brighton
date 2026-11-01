import { createFileRoute } from "@tanstack/react-router";
import { Banner, meta } from "@/components/TabNav";
import robots from "@/assets/lab.jpg";

export const Route = createFileRoute("/curriculum/robotics")({
  head: () =>
    meta(
      "Robotics & STEM",
      "Brighton's award-winning robotics programme in Raipur: hands-on building and coding, national competitions and work with IIT Bhilai.",
    ),
  component: Robotics,
});

const highlights: Record<string, string[]> = {
  "2025–26": [
    "Top 20 at BIGBANG 2026, Coimbatore",
    "First prize, Junior and Senior categories — Scientific 2026",
    "Super Winner at Xplora 5.0, KPS Dunda",
    "Success at INSEF Science Fair 2026",
    "CBSE Regional Science Exhibition 2026",
    "National Award at STEM Innovation League",
    "Selected for INSPIRE MANAK Awards 2026",
  ],
  "2024–25": [
    "Win at a global competition in the USA",
    "Gold at the INSEF National Fair",
    "Super winner at CPS Excella Fest 2024",
    "Selected in the Top 100 at IIT Delhi",
    "Top 500 in India — Ideathon 2024",
    "Workshops on Arduino, PCB design and AI",
  ],
  "2023–24": [
    "Regional Level Science Exhibition 2023",
    "Tinkerthon 2023 — ATL-AIM Bilaspur",
    "Aurora 2023 winners — DPS Raipur",
    "NEXUS 2023 — SSIPMT Raipur",
  ],
};

function Robotics() {
  return (
    <>
      <Banner
        eyebrow="Robotics & STEM"
        title="Not just learning about the future — building it"
        intro="Students build, program and test their own robots, learning to think, work in teams and solve real problems along the way."
        img={robots}
        objectPosition="center 66%"
        frame="aspect-[5/4] md:aspect-video"
        align="start"
      />

      <section className="mt-6 grid gap-3 md:grid-cols-3">
        {[
          ["Hands-on", "Students work with real robotics kits, programming and engineering — from first programs to advanced robot design."],
          ["Life skills first", "Critical thinking, teamwork and problem-solving, practised on real-world uses of science, technology, engineering and maths."],
          ["Beyond the classroom", "National and international competitions, workshops, and work with IIT Bhilai and other tech innovators."],
        ].map(([t, b]) => (
          <article key={t} className="card-shell p-7">
            <h3 className="font-display text-xl">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{b}</p>
          </article>
        ))}
      </section>

      <section className="mt-6 rounded-[1.75rem] bg-primary p-8 text-primary-foreground md:p-10">
        <h2 className="font-display text-3xl md:text-4xl">Highlights</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {Object.entries(highlights).map(([year, list]) => (
            <div key={year} className="rounded-2xl bg-primary-foreground/10 p-5">
              <h3 className="font-display text-xl text-coral">{year}</h3>
              <ul className="mt-3 space-y-2 text-sm text-primary-foreground/85">
                {list.map((x) => <li key={x}>• {x}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
