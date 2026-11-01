import { useState } from "react";

// Timeline from the Brighton information brochure.
const steps = [
  { y: "2010", t: "The school opens", b: "Brighton opens in the summer of 2010 with 110 students." },
  { y: "2012", t: "Affiliated to CBSE", b: "Affiliated to CBSE as a Senior Secondary school. Affiliation No. 3330153." },
  { y: "2014", t: "First Mindspark", b: "The first Mindspark, our inter-school festival of ideas and talent." },
  { y: "2016", t: "No. 1 in Chhattisgarh", b: "Education World ranks Brighton No. 1 in Chhattisgarh in 2016, 2017 and 2018." },
  { y: "2019", t: "Shahdol", b: "Brighton starts in Shahdol, Madhya Pradesh." },
  { y: "2023", t: "No. 1 again", b: "Education World: No. 1 in Chhattisgarh in 2023, 2024, 2025 and 2026." },
  { y: "2024", t: "Bubbles", b: "Bubbles Preschool and Activity Hub opens in Raipur." },
  { y: "Today", t: "3,000+ students", b: "3,000+ students and 200+ teachers, and a franchise school in Shahdol." },
];

export function HistoryTimeline() {
  const [i, setI] = useState(0);
  const s = steps[i] ?? steps[0]!;
  return (
    <section className="card-shell mt-6 p-6 md:p-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-highlight">Our journey</p>
      <h2 className="font-display text-3xl text-primary">From 110 students to 3,000+</h2>
      <div className="relative mt-8">
        <div className="absolute top-5 right-5 left-5 h-1 rounded-full bg-blush" />
        <div
          className="absolute top-5 left-5 h-1 rounded-full bg-primary transition-all duration-500"
          style={{ width: `calc((100% - 2.5rem) * ${i / (steps.length - 1)})` }}
        />
        <ol className="relative flex justify-between">
          {steps.map((x, k) => (
            <li key={x.y}>
              <button
                type="button"
                onClick={() => setI(k)}
                aria-pressed={i === k}
                className="flex flex-col items-center gap-2"
              >
                <span
                  className={`grid size-10 place-items-center rounded-full border-2 text-xs font-bold transition-all ${
                    k <= i ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"
                  } ${k === i ? "scale-125 ring-4 ring-coral/40" : ""}`}
                >
                  {k + 1}
                </span>
                <span className="font-display text-xs md:text-sm">{x.y}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
      <div key={i} className="mt-6 animate-in fade-in slide-in-from-bottom-2 rounded-2xl bg-blush p-6 duration-300">
        <p className="font-display text-2xl text-primary">{s.t}</p>
        <p className="mt-2 text-muted-foreground">{s.b}</p>
      </div>
    </section>
  );
}
