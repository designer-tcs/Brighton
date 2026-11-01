import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BookOpen } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Banner } from "@/components/TabNav";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { dialogue } from "@/components/dialogues-data";
import raysCover from "@/assets/rays-cover.jpg";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Rays Magazine | Brighton International School, Raipur" },
      {
        name: "description",
        content: "Rays — Brighton International School's quarterly magazine of school happenings and student-written gems, from 2013 to today.",
      },
      { property: "og:title", content: "Rays — Brighton's quarterly magazine" },
      { property: "og:description", content: "School happenings and student writing, every quarter since 2013." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Blogs,
});

const pdf = (path: string) => `/files/${path}`;

const issues: { year: number; month: string; href: string; cover?: string }[] = [
  { year: 2026, month: "January", href: pdf("2026/03/RAYS-January-2026.pdf"), cover: pdf("rays-covers/rays-2026-01.jpg") },
  { year: 2025, month: "September", href: pdf("2026/03/RAYS-September-2025.pdf"), cover: pdf("rays-covers/rays-2025-09.jpg") },
  { year: 2025, month: "March", href: pdf("2026/03/RAYS-March-2025.pdf"), cover: pdf("rays-covers/rays-2025-03.jpg") },
  { year: 2024, month: "December", href: pdf("2026/03/RAYS-December-2024.pdf"), cover: pdf("rays-covers/rays-2024-12.jpg") },
  { year: 2024, month: "August", href: pdf("2024/09/Volume-25.pdf"), cover: pdf("rays-covers/rays-2024-08.jpg") },
  { year: 2024, month: "March", href: pdf("2024/09/Volume-22-Brighton-Rays_6-04-2024.pdf"), cover: pdf("rays-covers/rays-2024-03.jpg") },
  { year: 2023, month: "September", href: pdf("2024/09/2023-Rays-Sept.pdf"), cover: pdf("rays-covers/rays-2023-09.jpg") },
  { year: 2023, month: "June", href: pdf("2024/09/2023-Rays-June.pdf"), cover: pdf("rays-covers/rays-2023-06.jpg") },
  { year: 2021, month: "October", href: pdf("2024/09/2021-Rays-Oct_compressed.pdf"), cover: pdf("rays-covers/rays-2021-10.jpg") },
  { year: 2020, month: "December", href: pdf("2024/09/2020-Rays-Dec.pdf"), cover: pdf("rays-covers/rays-2020-12.jpg") },
  { year: 2019, month: "October", href: pdf("2024/09/2019-Rays-Oct.pdf"), cover: pdf("rays-covers/rays-2019-10.jpg") },
  { year: 2019, month: "August", href: pdf("2024/09/2019-Rays-Aug.pdf"), cover: pdf("rays-covers/rays-2019-08.jpg") },
  { year: 2018, month: "September", href: pdf("2024/09/2018-Rays-Sept.pdf"), cover: pdf("rays-covers/rays-2018-09.jpg") },
  { year: 2018, month: "August", href: pdf("2024/09/2018-Rays-Aug.pdf"), cover: pdf("rays-covers/rays-2018-08.jpg") },
  { year: 2018, month: "January", href: pdf("2024/09/2018-Rays-January.pdf"), cover: pdf("rays-covers/rays-2018-01.jpg") },
  { year: 2017, month: "October", href: pdf("2024/09/2017-Rays-Oct.pdf"), cover: pdf("rays-covers/rays-2017-10.jpg") },
  { year: 2016, month: "July", href: pdf("2024/09/2016-Rays-July.pdf"), cover: pdf("rays-covers/rays-2016-07.jpg") },
  { year: 2015, month: "December", href: pdf("2024/09/2015-Rays-Dec.pdf") },
  { year: 2015, month: "November", href: pdf("2024/09/2015-Rays-Nov.pdf"), cover: pdf("rays-covers/rays-2015-11.jpg") },
  { year: 2013, month: "September", href: pdf("2024/09/2013-Rays-Sept.pdf"), cover: pdf("rays-covers/rays-2013-09.jpg") },
];

const years = [...new Set(issues.map((issue) => issue.year))];

function Blogs() {
  const [year, setYear] = useState(years[0]!);
  const months = issues.filter((issue) => issue.year === year);
  const grid =
    months.length <= 1 ? "grid-cols-1" : months.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <SiteLayout>
      <Banner
        eyebrow="Rays"
        title="Brighter than your Monday morning coffee"
        intro="Brighton's writing journal — school happenings and student writing, every quarter since 2013."
        img={raysCover}
        objectPosition="center"
        frame="aspect-[3/2]"
      />

      <section className="card-shell mt-6 p-6 md:p-8">
        <h2 className="font-display text-2xl text-primary">Browse by year</h2>
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {years.map((y) => {
            const count = issues.filter((issue) => issue.year === y).length;
            return (
            <button key={y} type="button" onClick={() => setYear(y)} aria-pressed={year === y}
              className={`flex shrink-0 flex-col items-center rounded-2xl border px-4 py-2 transition-colors ${year === y ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-blush"}`}>
              <span className="font-display">{y}</span>
              <span className="flex gap-0.5 pt-1">{Array.from({ length: count }, (_, i) => <span key={i} className="size-1.5 rounded-full bg-coral" />)}</span>
            </button>
            );
          })}
        </div>
        <div key={year} className={`mt-6 grid animate-in fade-in gap-4 duration-300 ${grid}`}>
          {months.map((issue) => (
            <a
              key={issue.href}
              href={issue.href}
              target="_blank"
              rel="noreferrer"
              className="relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-[1.5rem] bg-primary text-primary-foreground"
            >
              {issue.cover ? (
                <img
                  src={issue.cover}
                  alt={`${issue.month} ${issue.year} Rays magazine cover`}
                  className="absolute inset-0 h-full w-full bg-white object-contain"
                />
              ) : null}
              <div className="relative bg-gradient-to-t from-primary via-primary/80 to-transparent p-6 md:p-8">
                <BookOpen className="size-6" />
                <p className="mt-3 text-xs uppercase tracking-widest">Open the magazine</p>
                <p className="font-display text-3xl">{issue.month}</p>
                <p className="font-display text-lg">{issue.year}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section className="mt-6 rounded-[1.75rem] bg-blush p-7 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-highlight">Brighton Dialogues · {dialogue.month}</p>
        <h2 className="mt-1 font-display text-3xl text-primary">Parenting & child care, every month</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          An endeavour by Brighton International School, Raipur to reach out to parents on parenting and child care.
          Published in Hindi and English every month.
        </p>
        <article className="card-shell mt-6 p-6 md:p-8">
          <h3 className="font-display text-2xl">{dialogue.title}</h3>
          <Accordion type="single" collapsible className="mt-4">
            <AccordionItem value="a">
              <AccordionTrigger>{dialogue.paras[0]!.slice(0, 120)}…</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  {dialogue.paras.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </article>
      </section>
    </SiteLayout>
  );
}
