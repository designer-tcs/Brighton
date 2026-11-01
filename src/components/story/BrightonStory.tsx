import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BookX,
  CakeSlice,
  CalendarDays,
  Check,
  Flame,
  GraduationCap,
  HeartPulse,
  IndianRupee,
  Keyboard,
  Mic,
  Pause,
  Play,
  Sparkles,
  Store,
  Users,
  X,
} from "lucide-react";

/** Entrance test registration link — "#" until Abhinay sends the real one. */
const ENTRANCE_TEST_LINK =
  "https://pgpay.icici.bank.in/pg/portal/pay/initiatePayOrder?merchantID=100000000543884";

/* ------------------------------------------------------------------ */
/* Shared bits                                                         */
/* ------------------------------------------------------------------ */

function SkillChip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-coral px-3.5 py-1.5 text-xs font-semibold text-coral-foreground">
      <Sparkles className="size-3.5" /> Life skill · {children}
    </span>
  );
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => entries[0]?.isIntersecting && setOn(true), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${on ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Chapter visuals (each one is the infographic for a practice)        */
/* ------------------------------------------------------------------ */

function OwnAnswersVisual() {
  const notebooks = [
    [90, 70, 82, 40],
    [60, 88, 50, 75, 30],
    [80, 45, 92],
  ];
  return (
    <div className="flex h-full items-end justify-center gap-4">
      {notebooks.map((lines, i) => (
        <div
          key={i}
          className="story-pop w-28 rounded-2xl border border-border bg-card p-3 shadow-sm"
          style={{ animationDelay: `${i * 140}ms`, transform: `rotate(${(i - 1) * 5}deg)` }}
        >
          <div className="mb-2 flex items-center gap-1.5">
            <span className="grid size-6 place-items-center rounded-full bg-highlight/20 text-[10px] font-bold text-primary">
              {String.fromCharCode(65 + i)}
            </span>
            <span className="h-1.5 w-10 rounded bg-muted" />
          </div>
          <div className="space-y-2">
            {lines.map((w, j) => (
              <span
                key={j}
                className="story-line block h-1.5 rounded bg-primary/70"
                style={{ width: `${w}%`, animationDelay: `${300 + i * 140 + j * 120}ms` }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function TypingVisual() {
  const keys = ["T", "Y", "P", "E"];
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="relative">
        <span className="font-serif text-5xl italic text-muted-foreground/60">abc</span>
        <span className="story-strike absolute left-[-8%] top-1/2 h-1 w-[116%] rounded bg-coral" />
      </div>
      <div className="flex gap-2">
        {keys.map((k, i) => (
          <span
            key={k}
            className="story-key grid size-14 place-items-center rounded-xl border-b-4 border-primary bg-card font-display text-2xl text-primary shadow"
            style={{ animationDelay: `${400 + i * 180}ms` }}
          >
            {k}
          </span>
        ))}
      </div>
      <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
        <Keyboard className="size-3.5" /> since 2010
      </span>
    </div>
  );
}

function CraftVisual() {
  const steps = [
    { icon: CakeSlice, label: "Make" },
    { icon: IndianRupee, label: "Price" },
    { icon: Store, label: "Sell" },
  ];
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-2 md:gap-3">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center gap-2 md:gap-3">
            <div className="story-pop flex flex-col items-center gap-2" style={{ animationDelay: `${i * 220}ms` }}>
              <span className="grid size-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg md:size-20">
                <s.icon className="size-7 md:size-8" />
              </span>
              <span className="font-display text-sm text-primary">{s.label}</span>
            </div>
            {i < steps.length - 1 && <ArrowRight className="story-pop mb-6 size-5 text-highlight" style={{ animationDelay: `${i * 220 + 110}ms` }} />}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        {[
          { icon: CakeSlice, t: "Pastries" },
          { icon: Flame, t: "Candles" },
          { icon: Sparkles, t: "Diyas" },
        ].map((x, i) => (
          <span
            key={x.t}
            className="story-pop inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground"
            style={{ animationDelay: `${800 + i * 120}ms` }}
          >
            <x.icon className="size-3.5 text-coral" /> {x.t}
          </span>
        ))}
      </div>
    </div>
  );
}

function ComputersVisual() {
  const now = ["Canva", "Coding", "AI"];
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-4">
        <span className="relative grid size-20 place-items-center rounded-2xl bg-muted">
          <BookX className="size-9 text-muted-foreground" />
        </span>
        <ArrowRight className="size-6 text-highlight" />
        <div className="flex gap-1.5">
          {["’24", "’25", "’26"].map((y, i) => (
            <span
              key={y}
              className="story-pop grid h-20 w-12 place-items-end rounded-lg bg-primary pb-2 text-center text-xs font-semibold text-primary-foreground"
              style={{ animationDelay: `${i * 160}ms`, opacity: 0.55 + i * 0.22 }}
            >
              <span className="w-full">{y}</span>
            </span>
          ))}
        </div>
      </div>
      <p className="text-xs uppercase tracking-widest text-muted-foreground">new syllabus · every year</p>
      <div className="flex gap-2">
        {now.map((t, i) => (
          <span
            key={t}
            className="story-pop rounded-full bg-coral px-4 py-1.5 font-display text-sm text-coral-foreground"
            style={{ animationDelay: `${500 + i * 150}ms` }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

const themes = ["Brands", "Colours", "Wonders", "Monuments", "Scientists"];
function AttendanceVisual() {
  const [t, setT] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setT((v) => (v + 1) % themes.length), 1600);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-1.5">
        {themes.map((x, i) => (
          <span
            key={x}
            className={`rounded-full px-3 py-1 text-xs transition-all duration-500 ${i === t ? "scale-110 bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
          >
            {x}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-10 gap-1.5" key={t}>
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="story-pop grid size-5 place-items-center rounded-full bg-highlight/80 md:size-6"
            style={{ animationDelay: `${i * 30}ms` }}
          >
            <Mic className="size-2.5 text-primary-foreground md:size-3" />
          </span>
        ))}
      </div>
      <p className="font-display text-lg text-primary">
        30 children · <span className="text-coral">30 new things</span> a month
      </p>
    </div>
  );
}

function CelebrateVisual() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-3">
        <span className="grid size-12 place-items-center rounded-full border-2 border-dashed border-muted-foreground/40 text-xs text-muted-foreground">
          1 day
        </span>
        <ArrowRight className="size-5 text-highlight" />
        <div className="flex gap-1">
          {Array.from({ length: 7 }).map((_, i) => (
            <span
              key={i}
              className="story-pop grid h-14 w-7 place-items-center rounded-full bg-coral font-display text-xs text-coral-foreground md:w-9"
              style={{ animationDelay: `${i * 110}ms` }}
            >
              D{i + 1}
            </span>
          ))}
        </div>
      </div>
      <p className="text-xs uppercase tracking-widest text-muted-foreground">Any important day · given a full week</p>
      <span className="story-pop inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground" style={{ animationDelay: "900ms" }}>
        <HeartPulse className="size-4" /> + Health Week · January
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 1. HOME — "How Brighton does it" story stepper                      */
/* ------------------------------------------------------------------ */

const chapters = [
  { key: "answers", title: "Their own answers", line: "From KG I, nothing is dictated. Every answer is the child's own.", skill: "Independent thinking", Visual: OwnAnswersVisual },
  { key: "typing", title: "No cursive. We type.", line: "Since 2010. The world types, so our children learn to type.", skill: "Skills for the world they will work in", Visual: TypingVisual },
  { key: "craft", title: "Craft that sells", line: "Children make things that can be sold — pastries, candles and diyas — at their own stalls.", skill: "Making, pricing, selling", Visual: CraftVisual },
  { key: "computers", title: "Computers, no textbooks", line: "The syllabus is rewritten every year. Today: Canva, coding and AI.", skill: "Staying current", Visual: ComputersVisual },
  { key: "attendance", title: "Attendance that teaches", line: "A new theme each month. Each child answers roll call with their own item.", skill: "General awareness", Visual: AttendanceVisual },
  { key: "celebrate", title: "Celebrations with purpose", line: "Important days are never just a ceremony. A day becomes a week.", skill: "Meaning over ritual", Visual: CelebrateVisual },
];

export function HowBrightonDoesIt() {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(true);
  const touch = useRef<number | null>(null);
  const go = (n: number) => setI((n + chapters.length) % chapters.length);

  useEffect(() => {
    if (!playing) return;
    const id = setTimeout(() => go(i + 1), 6500);
    return () => clearTimeout(id);
  }, [i, playing]);

  const c = chapters[i]!;
  return (
    <section className="mt-6" aria-label="How Brighton does it">
      <div className="overflow-hidden rounded-[1.75rem] bg-card shadow-sm">
        <div className="flex flex-wrap items-end justify-between gap-4 bg-primary px-7 py-6 text-primary-foreground md:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">How Brighton does it</p>
            <h2 className="mt-1 font-display text-2xl md:text-4xl">
              No life skill? <span className="text-coral">We don&rsquo;t do it.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setPlaying((p) => !p)} aria-label={playing ? "Pause story" : "Play story"} className="grid size-10 place-items-center rounded-full bg-primary-foreground/15 hover:bg-primary-foreground/25">
              {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
            </button>
            <button onClick={() => go(i - 1)} aria-label="Previous" className="grid size-10 place-items-center rounded-full bg-primary-foreground/15 hover:bg-primary-foreground/25">
              <ArrowLeft className="size-4" />
            </button>
            <button onClick={() => go(i + 1)} aria-label="Next" className="grid size-10 place-items-center rounded-full bg-coral text-coral-foreground">
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        {/* chapter rail */}
        <div className="grid grid-cols-6 gap-1 bg-blush px-3 pt-3">
          {chapters.map((ch, n) => (
            <button
              key={ch.key}
              onClick={() => { setI(n); setPlaying(false); }}
              className="group flex flex-col gap-2 rounded-t-xl px-2 pb-3 pt-2 text-left"
              aria-current={n === i}
            >
              <span className="relative h-1 overflow-hidden rounded bg-primary/15">
                <span
                  key={n === i ? `${i}-${playing}` : n}
                  className={`absolute inset-y-0 left-0 bg-primary ${n < i ? "w-full" : n === i ? (playing ? "story-progress" : "w-full") : "w-0"}`}
                />
              </span>
              <span className={`hidden text-xs leading-tight md:block ${n === i ? "font-semibold text-primary" : "text-muted-foreground group-hover:text-primary"}`}>
                {String(n + 1).padStart(2, "0")} {ch.title}
              </span>
            </button>
          ))}
        </div>

        <div
          className="grid min-h-[26rem] gap-6 p-7 md:grid-cols-[1.1fr_1fr] md:p-10"
          onTouchStart={(e) => (touch.current = e.touches[0]!.clientX)}
          onTouchEnd={(e) => {
            if (touch.current == null) return;
            const d = e.changedTouches[0]!.clientX - touch.current;
            if (Math.abs(d) > 40) { go(d < 0 ? i + 1 : i - 1); setPlaying(false); }
            touch.current = null;
          }}
        >
          <div key={c.key} className="relative h-72 rounded-3xl bg-blush p-6 md:h-auto">
            <span className="absolute left-5 top-4 font-display text-6xl text-primary/10">{String(i + 1).padStart(2, "0")}</span>
            <c.Visual />
          </div>
          <div key={`${c.key}-t`} className="story-rise flex flex-col justify-center gap-4">
            <h3 className="font-display text-3xl text-primary md:text-5xl">{c.title}</h3>
            <p className="max-w-md text-lg text-muted-foreground">{c.line}</p>
            <div><SkillChip>{c.skill}</SkillChip></div>
            {c.key === "celebrate" && (
              <Link to="/about" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
                See Independence Week &amp; Health Week →
              </Link>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border px-7 py-5 md:px-10">
          <p className="font-display text-xl text-primary">See it for yourself.</p>
          <Link to="/admissions/campus-tour" className="rounded-full bg-coral px-6 py-2.5 font-display text-coral-foreground">
            Book a campus tour
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 2. ADMISSIONS — "What your child walks into"                        */
/* ------------------------------------------------------------------ */

function ClassOf30() {
  return (
    <div className="grid grid-cols-6 gap-1.5">
      {Array.from({ length: 30 }).map((_, i) => (
        <span key={i} className="story-pop size-4 rounded-full bg-primary" style={{ animationDelay: `${i * 25}ms` }} />
      ))}
    </div>
  );
}

export function WhatYourChildWalksInto() {
  const tiles = [
    {
      k: "Own words",
      v: <OwnAnswersMini />,
      cap: "No dictated answers from KG I",
    },
    {
      k: "Homework",
      v: (
        <div className="w-full">
          <div className="h-3 overflow-hidden rounded-full bg-muted"><span className="block h-full w-[8%] rounded-full bg-coral" /></div>
          <p className="mt-2 text-xs text-muted-foreground">only occasional maths</p>
        </div>
      ),
      cap: "Learning happens in school",
    },
    {
      k: "Two calendars",
      v: (
        <div className="flex gap-2">
          {["Academic", "Co-curricular"].map((t, n) => (
            <span key={t} className={`flex w-20 flex-col items-center gap-1 rounded-xl p-2 text-[10px] ${n ? "bg-coral text-coral-foreground" : "bg-primary text-primary-foreground"}`}>
              <CalendarDays className="size-5" /> {t}
            </span>
          ))}
        </div>
      ),
      cap: "Every family knows what's coming",
    },
    {
      k: "Partners in Progress",
      v: (
        <div className="flex items-center gap-1">
          <Users className="size-9 text-primary" />
          <span className="font-display text-2xl text-coral">+</span>
          <GraduationCap className="size-9 text-primary" />
        </div>
      ),
      cap: "Our name for the parent–teacher meet",
    },
    { k: "Max 30", v: <ClassOf30 />, cap: "students per class" },
  ];
  return (
    <section className="mt-6">
      <Reveal>
        <div className="rounded-[1.75rem] bg-blush p-7 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">Before you apply</p>
          <h2 className="mt-1 font-display text-3xl text-primary md:text-4xl">What your child walks into</h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {tiles.map((t) => (
              <div key={t.k} className="group flex flex-col rounded-2xl bg-card p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="font-display text-lg text-primary">{t.k}</p>
                <div className="my-5 flex min-h-20 flex-1 items-center justify-center">{t.v}</div>
                <p className="text-xs text-muted-foreground">{t.cap}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <div className="inline-flex flex-wrap items-center gap-3 rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground">
              <CalendarDays className="size-4 text-coral" /> BEST · Session 2027–28 ·
              <span className="font-display text-coral">17 January 2027</span>
            </div>
            <a
              href={ENTRANCE_TEST_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-2.5 font-display text-coral-foreground transition-transform hover:-translate-y-0.5"
            >
              Register for the test · ₹1,500 <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function OwnAnswersMini() {
  return (
    <div className="flex gap-2">
      {[[80, 50, 70], [55, 85], [70, 40, 90]].map((l, i) => (
        <span key={i} className="w-10 space-y-1.5 rounded-lg border border-border p-1.5">
          {l.map((w, j) => <span key={j} className="block h-1 rounded bg-primary/70" style={{ width: `${w}%` }} />)}
        </span>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 3. ABOUT — think / prepare / celebrate                              */
/* ------------------------------------------------------------------ */

const filterItems = [
  { t: "Cursive writing", ok: false },
  { t: "Craft that sells", ok: true },
  { t: "Old computer textbook", ok: false },
  { t: "Yearly new syllabus", ok: true },
  { t: "A day of ceremony", ok: false },
  { t: "A week with purpose", ok: true },
];

function ThinkPanel() {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    setShown(0);
    const id = setInterval(() => setShown((s) => (s >= filterItems.length ? s : s + 1)), 450);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
      <div className="space-y-2">
        {filterItems.map((f, n) => (
          <div key={f.t} className={`rounded-full border border-border bg-card px-4 py-2 text-sm transition-all duration-500 ${n < shown ? (f.ok ? "translate-x-0 opacity-100" : "translate-x-0 opacity-40 line-through") : "-translate-x-4 opacity-0"}`}>
            {f.t}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-2 text-center">
        <div className="grid size-28 place-items-center rounded-full bg-primary p-4 font-display text-sm leading-tight text-primary-foreground shadow-lg">
          Is it a life skill?
        </div>
        <ArrowRight className="size-6 rotate-90 text-highlight md:rotate-0" />
      </div>
      <div className="space-y-2">
        {filterItems.filter((f) => f.ok).map((f, n) => (
          <div key={f.t} className={`flex items-center gap-2 rounded-full bg-coral px-4 py-2 font-display text-coral-foreground transition-all duration-500 ${shown >= filterItems.length ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${n * 150}ms` }}>
            <Check className="size-4" /> {f.t}
          </div>
        ))}
        <div className={`flex items-center gap-2 px-4 pt-2 text-xs text-muted-foreground transition-opacity ${shown >= filterItems.length ? "opacity-100" : "opacity-0"}`}>
          <X className="size-3.5" /> the rest, we don&rsquo;t teach
        </div>
      </div>
    </div>
  );
}

function PreparePanel() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-3">
        {["Academic", "Co-curricular"].map((t, n) => (
          <div key={t} className={`story-pop w-36 rounded-2xl p-4 text-center ${n ? "bg-coral text-coral-foreground" : "bg-primary text-primary-foreground"}`} style={{ animationDelay: `${n * 200}ms` }}>
            <CalendarDays className="mx-auto size-8" />
            <p className="mt-2 font-display">{t}</p>
            <div className="mt-3 grid grid-cols-7 gap-0.5">
              {Array.from({ length: 21 }).map((_, d) => (
                <span key={d} className={`h-1.5 rounded-sm ${d % 4 === n ? "bg-current" : "bg-current/25"}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs uppercase tracking-widest text-muted-foreground">planned in advance · shared with</p>
      <div className="flex flex-wrap justify-center gap-2">
        {["Teachers", "Children", "Parents"].map((t, n) => (
          <span key={t} className="story-pop rounded-full border border-primary/30 bg-card px-4 py-1.5 text-sm text-primary" style={{ animationDelay: `${500 + n * 150}ms` }}>
            {t}
          </span>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">All of our schools, including Wellspring, work the same way.</p>
    </div>
  );
}

function CelebratePanel() {
  const steps = [
    { icon: CalendarDays, t: "An important day" },
    { icon: Sparkles, t: "Does it make sense? What will children learn?" },
    { icon: ArrowRight, t: "A day becomes a week" },
    { icon: Users, t: "Children take part, not just watch" },
  ];
  const examples = [
    { k: "ind", t: "Independence Week", items: ["Special assembly every day", "Class activities", "Fancy dress as freedom fighters", "Learning their slogans"] },
    { k: "health", t: "Health Week", items: ["Races", "Talks on food", "Menstrual & sexual health", "Medical check-up"] },
  ];
  const [ex, setEx] = useState(0);
  const E = examples[ex]!;
  return (
    <div className="space-y-8">
      <div className="grid gap-3 md:grid-cols-4">
        {steps.map((st, n) => (
          <div key={st.t} className="story-pop relative flex flex-col items-center gap-3 rounded-2xl bg-card p-5 text-center" style={{ animationDelay: `${n * 180}ms` }}>
            <span className={`grid size-12 place-items-center rounded-full ${n === 3 ? "bg-coral text-coral-foreground" : "bg-primary text-primary-foreground"}`}>
              <st.icon className="size-5" />
            </span>
            <span className="text-sm text-primary">{st.t}</span>
            <span className="absolute left-3 top-2 font-display text-xs text-muted-foreground">0{n + 1}</span>
          </div>
        ))}
      </div>
      <div>
        <p className="mb-3 text-center text-xs uppercase tracking-widest text-muted-foreground">How this looks at Brighton</p>
        <div className="mb-5 flex justify-center gap-2">
          {examples.map((e, n) => (
            <button key={e.k} onClick={() => setEx(n)} className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${n === ex ? "bg-primary text-primary-foreground" : "bg-card text-primary"}`}>
              {e.t}
            </button>
          ))}
        </div>
        <div key={E.k} className="story-rise flex flex-wrap justify-center gap-3">
          {E.items.map((it, n) => (
            <div key={it} className="story-pop grid w-36 place-items-center gap-2 rounded-2xl bg-card p-4 text-center text-sm text-primary" style={{ animationDelay: `${n * 100}ms` }}>
              {E.k === "ind" ? <Mic className="size-5 text-highlight" /> : <HeartPulse className="size-5 text-coral" />} {it}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HowWeThink() {
  const tabs = [
    { k: "think", t: "How we think", P: ThinkPanel },
    { k: "prepare", t: "How we prepare", P: PreparePanel },
    { k: "celebrate", t: "How we celebrate", P: CelebratePanel },
  ];
  const [a, setA] = useState(0);
  const T = tabs[a]!;
  return (
    <section className="mt-6">
      <Reveal>
        <div className="rounded-[1.75rem] bg-blush p-7 md:p-10">
          <h2 className="font-display text-3xl text-primary md:text-4xl">Think · Prepare · Celebrate</h2>
          <div className="mt-5 grid grid-cols-3 gap-2 rounded-full bg-card p-1.5">
            {tabs.map((t, n) => (
              <button key={t.k} onClick={() => setA(n)} className={`rounded-full px-3 py-2.5 text-xs font-semibold transition-colors md:text-sm ${n === a ? "bg-primary text-primary-foreground" : "text-primary hover:bg-blush"}`}>
                <span className="mr-1 opacity-60">0{n + 1}</span> {t.t}
              </button>
            ))}
          </div>
          <div key={T.k} className="story-rise mt-8 min-h-[18rem]">
            <T.P />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function SmallThings() {
  return (
    <>
      <section className="card-shell mt-6 p-7 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">Small things, done differently</p>
        <h3 className="mt-1 font-display text-2xl text-primary">Themed attendance</h3>
        <div className="mt-6"><AttendanceVisual /></div>
      </section>
      <section className="card-shell mt-6 p-7 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">Small things, done differently</p>
        <h3 className="mt-1 font-display text-3xl text-primary">Partners in Progress</h3>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Partners in Progress is our parent–teacher meeting, held three to four times a year, to talk about
          progress, not just marks. Students put up stalls at the meeting. They make, price and sell what they
          have made, including pastries, candles and diyas.
        </p>
        <div className="mt-8"><CraftVisual /></div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* 4. CURRICULUM — Across Brighton practices + Senior careers           */
/* ------------------------------------------------------------------ */

export function AcrossPractices() {
  const items = [
    { t: "Their own words", s: "From KG I, answers are never dictated.", V: OwnAnswersVisual },
    { t: "Homework", s: "None, apart from occasional maths practice.", V: () => (
      <div className="flex h-full flex-col items-center justify-center gap-3">
        <div className="h-4 w-48 overflow-hidden rounded-full bg-card"><span className="block h-full w-[8%] rounded-full bg-coral" /></div>
        <p className="text-xs text-muted-foreground">occasional maths</p>
      </div>
    ) },
    { t: "Computers, rewritten yearly", s: "No textbooks. Today: Canva, coding and AI.", V: ComputersVisual },
    { t: "Craft that can be sold", s: "Pastries, candles and diyas, made to be sold at student stalls.", V: CraftVisual },
    { t: "Typing, not cursive", s: "A choice Brighton has kept since 2010.", V: TypingVisual },
  ];
  const [a, setA] = useState(0);
  const I = items[a]!;
  return (
    <section className="mt-6 rounded-[1.75rem] bg-blush p-7 md:p-10">
      <h2 className="font-display text-3xl text-primary">How every class learns</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-2">
          {items.map((it, n) => (
            <button key={it.t} onClick={() => setA(n)} className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all ${n === a ? "bg-primary text-primary-foreground shadow-lg" : "bg-card text-primary hover:translate-x-1"}`}>
              <span className="font-display text-sm opacity-60">0{n + 1}</span>
              <span className="font-display">{it.t}</span>
            </button>
          ))}
        </div>
        <div key={I.t} className="story-rise flex flex-col rounded-3xl bg-card p-6">
          <div className="h-64"><I.V /></div>
          <p className="mt-4 text-center text-muted-foreground">{I.s}</p>
        </div>
      </div>
    </section>
  );
}

export function SeniorCareers() {
  return (
    <section className="mt-6 grid gap-4 md:grid-cols-2">
      <Reveal>
        <div className="card-shell h-full p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">Classes IX–XII</p>
          <h3 className="mt-1 font-display text-2xl text-primary">Brighton Lecture Series</h3>
          <div className="my-6 flex items-end justify-center gap-1.5">
            {Array.from({ length: 10 }).map((_, n) => (
              <span key={n} className={`story-pop grid size-9 place-items-center rounded-full ${n < 8 ? "bg-primary text-primary-foreground" : "bg-primary/30 text-primary"}`} style={{ animationDelay: `${n * 80}ms` }}>
                <Mic className="size-4" />
              </span>
            ))}
          </div>
          <p className="text-center font-display text-xl text-primary">8–10 outside professionals <span className="text-coral">every year</span></p>
        </div>
      </Reveal>
      <Reveal>
        <div className="card-shell h-full p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">Careers</p>
          <h3 className="mt-1 font-display text-2xl text-primary">Career &amp; university fair</h3>
          <div className="my-6 grid grid-cols-12 gap-1">
            {Array.from({ length: 60 }).map((_, n) => (
              <span key={n} className="story-pop grid aspect-square place-items-center rounded bg-coral" style={{ animationDelay: `${n * 15}ms` }}>
                <GraduationCap className="size-3 text-coral-foreground" />
              </span>
            ))}
          </div>
          <p className="text-center font-display text-xl text-primary"><span className="text-coral">60</span> universities, recently</p>
        </div>
      </Reveal>
    </section>
  );
}
