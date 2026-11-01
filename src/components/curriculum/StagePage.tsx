import { useState, type FormEvent } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Field, inputClass } from "@/components/admissions/ui";
import { PhotoSlot } from "@/components/PhotoSlot";
import type { Stage } from "./stages";

function Shot({ src, label }: { src?: string; label: string }) {
  if (!src) return <PhotoSlot label={label} className="aspect-[3/2]" />;
  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      width={1600}
      height={1067}
      className="aspect-[3/2] w-full min-w-0 rounded-[1.75rem] object-cover object-center"
    />
  );
}

function Heading({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="max-w-2xl">
      <h2 className="font-display text-3xl text-primary md:text-4xl">{title}</h2>
      <p className="mt-2 text-muted-foreground">{sub}</p>
    </div>
  );
}

export function StagePage({ stage: s }: { stage: Stage }) {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  const ids = ["curriculum", "experience", "day"];

  return (
    <>
      {/* Banner. Min height stays 3:2; longer headlines grow the card so the button is not clipped. */}
      <section className="@container relative overflow-hidden rounded-[1.75rem]">
        {s.images.hero ? (
          <img
            src={s.images.hero}
            alt={s.heroAlt}
            width={1600}
            height={1067}
            className={`absolute inset-0 h-full w-full object-cover ${s.images.heroPosition ?? "object-center"}`}
          />
        ) : (
          <PhotoSlot label={s.heroAlt} className="absolute inset-0 h-full rounded-none" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent/60 to-transparent" />
        <div className="relative z-10 flex min-h-[66.666cqw] max-w-2xl flex-col justify-center px-8 py-12 text-primary-foreground md:px-12">
          <p className="font-display text-sm uppercase tracking-widest text-coral">{s.label}</p>
          <h1 className="mt-3 font-display text-4xl leading-tight md:text-5xl">{s.headline}</h1>
          <p className="mt-4 text-primary-foreground/85">{s.subline}</p>
          <a href="#enquire" className="mt-6 inline-flex w-fit rounded-full bg-coral px-6 py-3 font-display text-coral-foreground hover:opacity-90">
            Enquire Now
          </a>
        </div>
      </section>

      {/* Section links */}
      <div className="mt-3 flex flex-wrap gap-2">
        {s.tabs.map((l, i) => (
          <a key={l} href={`#${ids[i]}`} className="rounded-full border border-border bg-card px-5 py-2 font-display text-sm hover:bg-blush">
            {l}
          </a>
        ))}
      </div>

      {/* Overview */}
      <section id="curriculum" className="card-shell mt-6 scroll-mt-20 p-8">
        <Heading title={s.overview.title} sub={s.overview.intro} />
        {s.images.overview && (
          <div className="mt-6">
            <Shot src={s.images.overview} label={s.overview.title} />
          </div>
        )}
        <div className={`mt-6 grid gap-3 sm:grid-cols-2 ${s.overview.boxes.length === 4 ? "" : "lg:grid-cols-3"}`}>
          {s.overview.boxes.map(({ icon: Icon, t, b, subjects }) => (
            <article key={t} className="flex flex-col rounded-2xl bg-blush p-5">
              <span className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-3 font-display text-lg">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b}</p>
              {subjects && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {subjects.map((x) => (
                    <span key={x} className="rounded-full bg-card px-3 py-1 text-xs font-medium text-primary">{x}</span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
        {s.overview.extra && (
          <Accordion type="single" collapsible className="mt-4">
            <AccordionItem value="extra">
              <AccordionTrigger className="text-base">{s.overview.extra.title}</AccordionTrigger>
              <AccordionContent className="space-y-2 text-muted-foreground">
                {s.overview.extra.body.map((p) => <p key={p}>{p}</p>)}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </section>

      {/* Learning experience */}
      <section id="experience" className="mt-6 grid scroll-mt-20 gap-6 lg:grid-cols-2">
        <Shot src={s.images.experience} label={s.experience.title} />
        <div className="card-shell p-8">
          <Heading title={s.experience.title} sub={s.experience.sub} />
          <div className="mt-6 space-y-4">
            {s.experience.items.map((e, i) => (
              <div key={e.t} className="flex gap-4">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-coral font-display text-coral-foreground">{i + 1}</span>
                <div>
                  <h3 className="font-display text-lg">{e.t}</h3>
                  <p className="text-sm text-muted-foreground">{e.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {(s.slug === "pre-primary" || s.slug === "primary") && (
        <section className="mt-6 grid gap-4 rounded-[1.75rem] bg-coral p-8 text-coral-foreground md:grid-cols-[auto_1fr] md:items-center md:p-10">
          <p className="font-display text-sm uppercase tracking-widest">Nursery – Class V</p>
          <div>
            <h2 className="font-display text-3xl">Class Event</h2>
            <p className="mt-2">
              Every class gets its own chance to put on a show — a lively mix of acts performed in
              front of parents. Children learn to speak up, work as a team and carry a stage with confidence.
            </p>
          </div>
        </section>
      )}

      {/* Approach */}
      <section className="mt-6 overflow-hidden rounded-[1.75rem] bg-primary p-8 text-primary-foreground md:p-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl">{s.approach.title}</h2>
          <p className="mt-2 text-primary-foreground/80">{s.approach.intro}</p>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.2fr)]">
          {s.approach.items.map((p) => (
            <div key={p.t} className="rounded-2xl bg-primary-foreground/10 p-5">
              <h3 className="font-display text-lg text-coral">{p.t}</h3>
              <p className="mt-2 text-sm text-primary-foreground/85">{p.b}</p>
            </div>
          ))}
          <Shot src={s.images.approach} label={s.approach.title} />
        </div>
      </section>

      {/* Educators */}
      <section className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="card-shell p-8">
          <Heading title={s.support.title} sub={s.support.sub} />
          <div className="mt-6 grid gap-3">
            {s.support.items.map((x) => (
              <div key={x.t} className="rounded-2xl border border-border bg-surface p-5">
                <h3 className="font-display text-lg">{x.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{x.b}</p>
              </div>
            ))}
          </div>
        </div>
        <Shot src={s.images.support} label={s.support.title} />
      </section>

      {/* Form */}
      <section id="enquire" className="mt-6 grid scroll-mt-20 gap-6 rounded-[1.75rem] bg-blush p-8 md:p-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="font-display text-3xl text-primary md:text-4xl">{s.form.title}</h2>
          <p className="mt-3 text-muted-foreground">{s.form.sub}</p>
        </div>
        <div className="card-shell p-6">
          <h3 className="font-display text-xl">{s.form.formTitle}</h3>
          {sent ? (
            <p className="mt-4 rounded-xl bg-blush p-4 text-sm">
              Thank you for your interest in Brighton. Our admissions team will contact you about your enquiry.
            </p>
          ) : (
            <form onSubmit={submit} className="mt-4 grid gap-4 sm:grid-cols-2">
              <Field label="Child's First Name"><input required className={inputClass} /></Field>
              <Field label="Child's Last Name"><input required className={inputClass} /></Field>
              <Field label="Date of Birth"><input required type="date" className={inputClass} /></Field>
              <Field label="Parent / Guardian's Name"><input required className={inputClass} /></Field>
              <Field label="Email Address"><input required type="email" className={inputClass} /></Field>
              <Field label="Mobile Number"><input required type="tel" className={inputClass} /></Field>
              <Field label="Admission Sought For" wide>
                <select required className={inputClass} defaultValue="">
                  <option value="" disabled>Select a class</option>
                  {s.form.classes.map((c) => <option key={c}>{c}</option>)}
                </select>
              </Field>
              <Field label="Your Question (optional)" wide><textarea rows={3} className={inputClass} /></Field>
              <label className="flex gap-2 text-sm sm:col-span-2">
                <input required type="checkbox" className="mt-1" />
                I agree to be contacted by Brighton International School regarding my admissions enquiry.
              </label>
              <button className="w-fit rounded-full bg-coral px-6 py-3 font-display text-coral-foreground hover:opacity-90">Submit Enquiry</button>
            </form>
          )}
        </div>
      </section>

      {/* Week */}
      <section id="day" className="card-shell mt-6 scroll-mt-20 p-8">
        <Heading title={s.week.title} sub={s.week.sub} />
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {s.week.facts.map(({ icon: Icon, t, b }) => (
            <div key={t} className="rounded-2xl bg-primary p-5 text-primary-foreground">
              <Icon className="size-6 text-coral" />
              <p className="mt-3 text-xs uppercase tracking-wider text-primary-foreground/70">{t}</p>
              <p className="font-display text-lg">{b}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 rounded-xl border border-dashed border-border p-4 text-sm text-muted-foreground">
          The full Monday–Saturday timetable for {s.classesText} will be added here once confirmed by the school.
        </p>
      </section>

      {/* Monthly culminations */}
      <section className="mt-6">
        <div className="rounded-[1.75rem] bg-blush px-8 py-6">
          <h2 className="font-display text-3xl text-primary">Monthly Culminations</h2>
          <p className="mt-1 text-sm text-muted-foreground">Showcases of students' learning — details coming soon.</p>
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {["Learning showcase 1", "Learning showcase 2", "Learning showcase 3", "Learning showcase 4"].map((label) => (
            <article key={label} className="card-shell overflow-hidden border border-border">
              <PhotoSlot label={label} className="aspect-[3/2] rounded-none" />
              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-highlight">Learning area</p>
                <h3 className="mt-1 font-display text-lg">Activity coming soon</h3>
                <p className="mt-1 text-sm text-muted-foreground">Guiding question, approach and the skills students developed.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="card-shell mt-6 p-8">
        <h2 className="font-display text-3xl text-primary">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible defaultValue="faq-0" className="mt-4">
          {s.faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`}>
              <AccordionTrigger className="text-base md:text-lg">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
