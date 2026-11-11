import { Link } from "@tanstack/react-router";
import { CalendarDays } from "lucide-react";

const file = "https://brightoninternational.in/wp-content/uploads/2025/06";

const groups: { title: string; items: { label: string; href: string }[] }[] = [
  {
    title: "Pre-Primary",
    items: [
      { label: "Nursery", href: `${file}/SKED-2025-26-Nursery.pdf` },
      { label: "KG I", href: `${file}/SKED-2025-26-KG-I.pdf` },
      { label: "KG II", href: `${file}/SKED-2025-26-KG-II.pdf` },
    ],
  },
  {
    title: "Primary",
    items: [
      { label: "Class I", href: `${file}/SKED-2025-26-I.pdf` },
      { label: "Class II", href: `${file}/SKED-2025-26-II.pdf` },
      { label: "Class III", href: `${file}/SKED-2025-26-III.pdf` },
      { label: "Class IV", href: `${file}/SKED-2025-26-IV.pdf` },
      { label: "Class V", href: `${file}/SKED-2025-26-V.pdf` },
    ],
  },
  {
    title: "Middle",
    items: [
      { label: "Class VI", href: `${file}/SKED-2025-26-VI.pdf` },
      { label: "Class VII", href: `${file}/SKED-2025-26-VII.pdf` },
      { label: "Class VIII", href: `${file}/SKED-2025-26-VIII.pdf` },
    ],
  },
  {
    title: "Secondary",
    items: [{ label: "Class X", href: `${file}/SKED-2025-26-X.pdf` }],
  },
  {
    title: "Senior Secondary",
    items: [{ label: "Class XII", href: `${file}/SKED-2025-26-XII.pdf` }],
  },
];

export function SkedMention() {
  return (
    <section className="card-shell mt-6 p-7 md:p-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-highlight">A systematic calendar</p>
      <h2 className="mt-1 font-display text-3xl text-primary">SKED</h2>
      <p className="mt-3 max-w-3xl text-muted-foreground">
        SKED is Brighton's year-long calendar for every class. It lays out the syllabus and the activities of the year, and it weaves in values such as empathy, patriotism, teamwork, courage, saving and conservation. With the year planned in this way, academic work and co-curricular learning stay in balance, and children can see the road ahead. That steady plan is part of how Brighton supports holistic development.
      </p>
      <Link
        to="/curriculum/sked"
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-display text-primary-foreground"
      >
        <CalendarDays className="size-4" /> See the SKED calendars
      </Link>
    </section>
  );
}

export function SkedCalendars() {
  return (
    <section className="card-shell p-7 md:p-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-highlight">Year-long class calendars</p>
      <h1 className="mt-1 font-display text-3xl text-primary md:text-4xl">SKED</h1>
      <p className="mt-3 max-w-3xl text-muted-foreground">
        SKED is the year-long calendar for each class, detailing the syllabus and the activities for students throughout the year. It takes the disciplines of the year into account, and builds in values such as empathy, patriotism, teamwork, courage, the importance of saving and conservation. Alongside the co-curricular calendar, it keeps a balance between academics and co-curricular learning, so children grow with a clear plan for the year.
      </p>
      <div className="mt-8 space-y-8">
        {groups.map((group) => (
          <div key={group.title}>
            <h2 className="font-display text-2xl text-primary">{group.title}</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-border p-4 transition-colors hover:bg-blush"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <CalendarDays className="size-4" />
                  </span>
                  <span>
                    <span className="block font-display text-lg text-primary">{item.label}</span>
                    <span className="text-sm text-muted-foreground">SKED 2025–26</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
