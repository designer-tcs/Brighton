import { useState } from "react";
import { Clock, PencilLine, Users, MapPin, BellRing, Wallet, Baby, GraduationCap } from "lucide-react";
import { BEST_SYLLABUS } from "./best-syllabus";

// Every line below is from brightoninternational.in/BEST
const testDay = [
  { Icon: PencilLine, t: "Paper-and-pencil test, then an interaction with the student" },
  { Icon: MapPin, t: "Every alternate Sunday at the Brighton campus" },
  { Icon: Clock, t: "Slot I: 11 AM – 12 PM · Slot II: 12:30 – 1:30 PM" },
  { Icon: Users, t: "Arrive 30 minutes early. While their ward is taking the exam, parents can take a guided tour of the campus." },
  { Icon: BellRing, t: "Parents of students who clear BEST are told by phone, email and message" },
  { Icon: Wallet, t: "Pay the admission fee and caution money within six days of results to guarantee the seat" },
];

export function BestGuide() {
  const [i, setI] = useState(0);
  const c = BEST_SYLLABUS[i] ?? BEST_SYLLABUS[0]!;
  return (
    <section className="mt-6 space-y-3">
      <div className="card-shell border border-border p-7">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Know about BEST</p>
        <h3 className="mt-1 font-display text-2xl text-primary">Test day, step by step</h3>
        <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {testDay.map(({ Icon, t }, n) => (
            <li key={t} className="flex gap-3 rounded-2xl bg-blush p-4">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-sm"><b className="mr-1 text-primary">{n + 1}.</b>{t}</span>
            </li>
          ))}
        </ol>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="flex gap-3 rounded-2xl border border-border p-4 text-sm">
            <Baby className="h-5 w-5 shrink-0 text-highlight" />
            Nursery, KG I and KG II: BEST is a physical interaction with the child.
          </div>
          <div className="flex gap-3 rounded-2xl border border-border p-4 text-sm">
            <GraduationCap className="h-5 w-5 shrink-0 text-highlight" />
            Class XI: selection is on the Class X mark sheet. Students may also take BEST before board results.
          </div>
        </div>
      </div>

      <div className="card-shell border border-border p-7">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">What to expect</p>
        <h3 className="mt-1 font-display text-2xl text-primary">BEST syllabus, class by class</h3>
        <div role="tablist" className="mt-5 flex flex-wrap gap-2">
          {BEST_SYLLABUS.map((s, n) => (
            <button
              key={s.cls}
              role="tab"
              aria-selected={n === i}
              onClick={() => setI(n)}
              className={`rounded-full px-4 py-2 font-display text-sm transition-colors ${
                n === i ? "bg-primary text-primary-foreground" : "bg-blush text-foreground hover:bg-accent"
              }`}
            >
              {s.cls}
            </button>
          ))}
        </div>
        <div key={c.cls} className="story-pop mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {c.subjects.map((s) => (
            <div key={s.subject} className="rounded-2xl border border-border p-5">
              <h4 className="font-display text-lg text-primary">{s.subject}</h4>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {s.topics.map((t) => (
                  <li key={t} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
