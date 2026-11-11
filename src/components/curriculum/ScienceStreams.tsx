import { useState } from "react";
import { FlaskConical, Sigma } from "lucide-react";

// Verbatim from brightoninternational.in/course/biology and /course/maths
const streams = [
  {
    key: "bio",
    name: "Biology",
    Icon: FlaskConical,
    intro: "Medicine, and careers beyond MBBS — many with immense scope for research.",
    core: ["English", "Biology", "Physics", "Chemistry"],
    fifth: "Physical Education / Informatics Practices / Psychology",
    careers: [
      "Biotechnology", "Environmental Science", "Agriculture", "Microbiology", "Nutrition", "Dietetics",
      "Forensics", "Biochemistry", "Genetics", "Alternative Medicine (Ayurveda, Naturopathy, etc.)", "Audiology",
      "Bioinformatics", "Marine Science & Marine Biology", "Food Technology", "Botany", "Zoology", "Nursing",
      "Veterinary Sciences", "Pharmacy",
    ].map((t) => ({ t }) as { t: string; d?: string }),
  },
  {
    key: "math",
    name: "Mathematics",
    Icon: Sigma,
    intro: "For those who enjoy logic, arithmetic and problem-solving — from IIT JEE to finance.",
    core: ["English", "Mathematics", "Physics", "Chemistry"],
    fifth: "Physical Education / Information Practice / Psychology",
    careers: [
      { t: "Engineering", d: "Computer, mechanical, electrical, aerospace and civil engineering." },
      { t: "Actuarial Science", d: "Evaluating risk in consulting, finance and insurance." },
      { t: "Data Science", d: "Interpreting large, complex data sets for business decisions." },
      { t: "Computer Science", d: "Machine learning, AI, cryptography and algorithms." },
      { t: "Finance", d: "Jobs like risk management." },
      { t: "Teaching and Academics", d: "Maths teacher or researcher." },
      { t: "Operations Research", d: "Streamlining workflows and decision-making." },
      { t: "Economics", d: "Data analysis, model building and economic theory." },
      { t: "Statistics", d: "Government, healthcare and research." },
      { t: "Architecture", d: "Structural design, measurements and computations." },
    ] as { t: string; d?: string }[],
  },
];

export function ScienceStreams() {
  const [k, setK] = useState(0);
  const s = streams[k] ?? streams[0]!;
  return (
    <section className="card-shell mt-6 border border-primary/20 p-7 md:p-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Subject choices and career opportunities</p>
      <h2 className="mt-1 font-display text-3xl text-primary">Pick a stream, see where it leads</h2>
      <div className="mt-5 flex gap-2">
        {streams.map((x, n) => (
          <button
            key={x.key}
            onClick={() => setK(n)}
            aria-pressed={n === k}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-display transition-colors ${
              n === k ? "bg-primary text-primary-foreground" : "bg-blush hover:bg-accent"
            }`}
          >
            <x.Icon className="h-4 w-4" /> {x.name}
          </button>
        ))}
      </div>
      <div key={s.key} className="story-pop mt-6 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-sm text-muted-foreground">{s.intro}</p>
          <p className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">Subject combination</p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {s.core.map((c) => (
              <div key={c} className="rounded-xl bg-primary px-3 py-3 text-center font-display text-sm text-primary-foreground">
                {c}<span className="block text-[10px] uppercase opacity-70">compulsory</span>
              </div>
            ))}
          </div>
          <div className="mt-2 rounded-xl bg-coral px-3 py-3 text-center font-display text-sm text-coral-foreground">
            + {s.fifth}<span className="block text-[10px] uppercase opacity-70">choose one as fifth subject</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Our students have produced 100% results in Class XII at CBSE year on year.</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-highlight">A few career options</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {s.careers.map((c) => (
              <li key={c.t} title={c.d} className="rounded-2xl bg-blush px-3 py-2 text-sm">
                <b className="font-display text-primary">{c.t}</b>
                {c.d && <span className="block text-xs text-muted-foreground">{c.d}</span>}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">This list is not exhaustive but can act as a guide.</p>
        </div>
      </div>
    </section>
  );
}
