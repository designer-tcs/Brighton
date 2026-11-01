import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Shirt, Snowflake, Sun } from "lucide-react";
import { meta } from "@/components/TabNav";
import { PageHeader } from "@/components/SiteLayout";
import { PhotoSlot } from "@/components/PhotoSlot";
import seniorUniform from "@/assets/school/senior-uniform.jpg";

export const Route = createFileRoute("/about/uniform")({
  head: () => meta("School Uniform", "Brighton International School uniform by day and season, for Nursery–V and VI–XII, plus grooming rules."),
  component: Uniform,
});

// Swatch colours are only illustrations of the named T-shirt colours.
const days = [
  { d: "Mon", full: "Monday", c: "Green", sw: "oklch(0.62 0.15 150)" },
  { d: "Tue", full: "Tuesday", c: "Red", sw: "oklch(0.58 0.2 27)" },
  { d: "Wed", full: "Wednesday", c: "Blue", sw: "oklch(0.55 0.15 255)" },
  { d: "Thu", full: "Thursday", c: "Orange", sw: "oklch(0.72 0.17 55)" },
  { d: "Fri", full: "Friday", c: "Grey", sw: "oklch(0.65 0.01 250)" },
  { d: "Sat", full: "Saturday", c: "House colour", sw: "conic-gradient(oklch(0.62 0.15 150) 0 25%, oklch(0.58 0.2 27) 0 50%, oklch(0.55 0.15 255) 0 75%, oklch(0.8 0.15 90) 0)" },
];

const rules = [
  "Standard black school shoes, as prescribed by the school, with every uniform.",
  "No make-up or jewellery at school.",
  "Carry a handkerchief (preferably white) every day.",
  "Girls with long hair tie two plaits with navy blue ribbons or bands; Sikh boys wear a navy blue patka.",
  "Leggings are not allowed. Girls wear cycling shorts under their skirts.",
  "Boys keep a proper haircut as prescribed by the school.",
];

function Toggle<T extends string>({ value, options, onChange }: { value: T; options: { v: T; label: string; icon: typeof Sun }[]; onChange: (v: T) => void }) {
  return (
    <div className="inline-flex rounded-full bg-surface-2 p-1">
      {options.map((o) => (
        <button
          key={o.v}
          type="button"
          onClick={() => onChange(o.v)}
          aria-pressed={value === o.v}
          className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm transition-colors ${value === o.v ? "bg-primary text-primary-foreground" : "hover:bg-card"}`}
        >
          <o.icon className="size-4" /> {o.label}
        </button>
      ))}
    </div>
  );
}

const seasons = [
  { v: "summer" as const, label: "Summer", icon: Sun },
  { v: "winter" as const, label: "Winter", icon: Snowflake },
];

function Uniform() {
  const [day, setDay] = useState(0);
  const [jr, setJr] = useState<"summer" | "winter">("summer");
  const [sr, setSr] = useState<"summer" | "winter">("summer");
  const [srDay, setSrDay] = useState<"week" | "sat">("week");
  const cur = days[day] ?? days[0]!;
  const bottom = jr === "summer" ? { b: "Navy blue shorts", g: "Navy blue skirt" } : { b: "Navy blue track pants", g: "Navy blue track pants" };

  const senior = {
    week: {
      summer: ["Sky blue shirt", "Navy blue trousers"],
      winter: ["Sky blue shirt", "Navy blue trousers", "Blue school blazer or sweater", "Tie (boys only)"],
    },
    sat: {
      summer: ["House colour T-shirt", "Navy blue track pants"],
      winter: ["House colour T-shirt", "Navy blue track pants", "Blazer or sweater"],
    },
  }[srDay][sr];

  return (
    <>
      <PageHeader
        eyebrow="School Uniform"
        title="Elegance and cosiness"
        intro="Juniors wear a wide range of colours to show their excitement; seniors wear a more refined palette with blue taking centre stage."
      />

      {/* Juniors */}
      <section className="card-shell mt-6 p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-highlight">Nursery – Class V</p>
            <h2 className="font-display text-3xl text-primary">A colour for every day</h2>
          </div>
          <Toggle value={jr} options={seasons} onChange={setJr} />
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2 sm:grid-cols-6">
          {days.map((x, i) => (
            <button
              key={x.d}
              type="button"
              onClick={() => setDay(i)}
              aria-pressed={day === i}
              className={`flex flex-col items-center gap-2 rounded-2xl border p-3 transition-all ${day === i ? "border-primary bg-blush -translate-y-1 shadow-sm" : "border-border bg-card hover:bg-blush/60"}`}
            >
              <span className="size-10 rounded-full ring-2 ring-card" style={{ background: x.sw }} />
              <span className="font-display text-sm">{x.d}</span>
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-[1fr_1fr_0.9fr]">
          {[
            ["Boys", bottom.b],
            ["Girls", bottom.g],
          ].map(([who, b]) => (
            <div key={who} className="rounded-2xl bg-blush p-6">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">{cur.full} · {who}</p>
              <div className="mt-3 flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-xl" style={{ background: cur.sw }}>
                  <Shirt className="size-6 text-primary-foreground" />
                </span>
                <p className="font-display text-xl">{cur.c} T-shirt</p>
              </div>
              <p className="mt-3 text-sm">+ {b}</p>
              {jr === "winter" && <p className="mt-1 text-sm text-muted-foreground">+ Sweater as prescribed by the school</p>}
            </div>
          ))}
          <PhotoSlot label={`Junior uniform · ${cur.full}`} className="aspect-[3/2]" />
        </div>
      </section>

      {/* Seniors */}
      <section className="mt-6 rounded-[1.75rem] bg-primary p-6 text-primary-foreground md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-coral">Class VI – Class XII</p>
            <h2 className="font-display text-3xl">Blue at the centre</h2>
          </div>
          <div className="flex flex-wrap gap-2 text-foreground">
            <div className="inline-flex rounded-full bg-card p-1">
              {(["week", "sat"] as const).map((v) => (
                <button key={v} type="button" onClick={() => setSrDay(v)} aria-pressed={srDay === v}
                  className={`rounded-full px-4 py-1.5 text-sm ${srDay === v ? "bg-coral text-coral-foreground" : ""}`}>
                  {v === "week" ? "Mon – Fri" : "Saturday"}
                </button>
              ))}
            </div>
            <Toggle value={sr} options={seasons} onChange={setSr} />
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-[1.4fr_1fr]">
          <ol className="grid gap-2">
            {senior.map((s, i) => (
              <li key={s} className="flex items-center gap-3 rounded-2xl bg-primary-foreground/10 p-4">
                <span className="grid size-8 place-items-center rounded-full bg-coral font-display text-sm text-coral-foreground">{i + 1}</span>
                {s}
              </li>
            ))}
          </ol>
          <PhotoSlot label="Senior uniform" src={seniorUniform} className="aspect-[3/2] text-foreground" />
        </div>
      </section>

      <section className="mt-6 rounded-[1.75rem] bg-blush p-8">
        <h2 className="font-display text-2xl text-primary">Please note</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {rules.map((r, i) => (
            <li key={r} className="flex gap-3 rounded-xl bg-card p-4 text-sm">
              <span className="font-display text-highlight">{String(i + 1).padStart(2, "0")}</span>
              {r}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
