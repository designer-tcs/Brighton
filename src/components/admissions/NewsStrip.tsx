import { Award, Newspaper, Trophy } from "lucide-react";

const items = [
  {
    icon: Trophy,
    year: "2026",
    award: "Education World India School Rankings 2026",
    detail: "No. 1 in Chhattisgarh",
  },
  {
    icon: Award,
    year: "2025",
    award: "Education World India School Rankings 2025",
    detail: "No. 1 in Chhattisgarh",
  },
  {
    icon: Newspaper,
    year: "2024",
    award: "Education World India School Rankings 2024",
    detail: "No. 1 in Chhattisgarh. Also 2016, 2017, 2018 and 2023.",
  },
];

export function NewsStrip() {
  return (
    <div className="grid gap-3 lg:grid-cols-[1fr_1.4fr]">
      <div className="card-shell border border-border p-7 md:p-9">
        <p className="text-sm text-muted-foreground">
          Brighton has been at the forefront of innovation — showing limitless care for its students,
          practising progressive pedagogy and bringing parents into the life of the school. Here are
          snippets of the accolades and activities covered in local and national media.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {items.map((i) => (
          <article key={i.award + i.year} className="card-shell border border-border p-6">
            <i.icon className="size-6 text-highlight" />
            <p className="nav-index mt-3">{i.year}</p>
            <h3 className="mt-1 font-display text-base leading-snug">{i.award}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{i.detail}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
