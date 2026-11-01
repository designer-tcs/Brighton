import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import roboticsImg from "@/assets/school/robots-build.jpg";
import lectureImg from "@/assets/lecture-series.jpg";
import raysCover from "@/assets/rays-cover.jpg";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/brighton_raipur/", icon: Instagram },
  { label: "YouTube", href: "https://www.youtube.com/c/BrightonInternationalSchool", icon: Youtube },
  { label: "Facebook", href: "https://www.facebook.com/BrightonRaipur/", icon: Facebook },
  { label: "X", href: "https://twitter.com/Brighton_Raipur", icon: Twitter },
];

const channels: {
  title: string;
  body: string;
  to: "/blogs" | "/curriculum/robotics" | "/lecture-series";
  alt: string;
  image?: string;
}[] = [
  {
    title: "Rays",
    body: "Brighton’s writing journal — the quarterly magazine of school happenings and student writing, since 2013.",
    to: "/blogs" as const,
    image: raysCover,
    alt: "Aerial view of the Brighton campus",
  },
  {
    title: "Robotics",
    body: "Students build, program and test their own robots, then take that work to national and international competitions.",
    to: "/curriculum/robotics" as const,
    image: roboticsImg,
    alt: "Students working with a robotics kit in the innovation lab",
  },
  {
    title: "Brighton Lecture Series",
    body: "Professionals and practitioners meet Secondary and Senior Secondary students for career guidance and real-world conversations.",
    to: "/lecture-series" as const,
    image: lectureImg,
    alt: "A speaker addressing students in the Brighton Lecture Series auditorium",
  },
];

function PatternBand() {
  const bars = ["bg-primary", "bg-coral", "bg-primary/70", "bg-coral", "bg-primary", "bg-primary/80"];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 hidden w-[34%] overflow-hidden md:flex">
      {bars.map((bar, i) => (
        <div key={i} className="flex flex-1 items-stretch gap-1.5 px-1">
          <span className={`flex-1 -skew-x-12 rounded-sm ${bar}`} />
          <span className={`flex-1 skew-x-12 rounded-sm ${bar} opacity-70`} />
        </div>
      ))}
    </div>
  );
}

export function JournalSection() {
  return (
    <section className="mt-6">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-blush px-7 py-6 md:px-9">
        <PatternBand />
        <div className="relative">
          <h2 className="max-w-sm font-display text-2xl text-primary md:text-3xl">Follow Brighton</h2>
          <p className="mt-1.5 max-w-md text-sm text-foreground/80">
            School life lives on social media. Rays, the writing journal, Robotics, and the lecture series are all worth a look.
          </p>
        </div>
      </div>

      <div className="card-shell mt-3 flex flex-wrap items-center gap-3 border border-border p-5 md:px-7">
        <p className="mr-2 font-display text-lg text-primary">On social</p>
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-blush"
          >
            <s.icon className="size-4" />
            {s.label}
          </a>
        ))}
      </div>

      <div className="mt-3 grid gap-3 md:grid-cols-3">
        {channels.map((c) => {
          const inner = (
            <>
              <div className="relative">
                {c.image ? (
                  <img
                    src={c.image}
                    alt={c.alt}
                    loading="lazy"
                    width={1600}
                    height={1067}
                    className="aspect-[3/2] w-full object-cover object-center"
                  />
                ) : (
                  <div className="flex aspect-[3/2] w-full flex-col items-center justify-center bg-blush px-14 text-center">
                    <p className="whitespace-nowrap font-display text-sm text-primary sm:text-base">Photo coming soon</p>
                    <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{c.alt}</p>
                  </div>
                )}
                <span className="absolute right-4 top-4 grid size-9 place-items-center rounded-lg bg-coral text-coral-foreground">
                  <ArrowUpRight className="size-5" />
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl leading-snug text-primary">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.body}</p>
              </div>
            </>
          );
          return (
            <Link
              key={c.title}
              to={c.to}
              className="card-shell overflow-hidden border border-border transition-transform hover:-translate-y-0.5"
            >
              {inner}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
