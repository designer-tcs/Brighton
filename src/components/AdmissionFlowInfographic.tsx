import {
  Banknote,
  BookUser,
  ClipboardList,
  Globe,
  GraduationCap,
  Landmark,
  MessagesSquare,
  PencilRuler,
  School,
  UserRoundCheck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = {
  n: number;
  title: string;
  body: string;
  icon: LucideIcon;
  tag?: string;
};

const phases: {
  key: string;
  label: string;
  note: string;
  tone: "violet" | "coral" | "navy";
  steps: Step[];
}[] = [
  {
    key: "reach",
    label: "Reach out",
    note: "Admissions open every 1 November",
    tone: "violet",
    steps: [
      {
        n: 1,
        title: "Register your interest",
        body: "Parents register their ward for BEST, online or at the school office.",
        icon: ClipboardList,
        tag: "Class I & onwards",
      },
      {
        n: 2,
        title: "Counselling & information",
        body: "Our counselling team shares details about the school, hands over the brochure and communicates the BEST date.",
        icon: Users,
      },
      {
        n: 3,
        title: "Campus visit / enquiry",
        body: "Parent and student approach the school at the campus, or through a call or website enquiry.",
        icon: School,
        tag: "Nursery to KG II",
      },
    ],
  },
  {
    key: "assess",
    label: "Open House & assessment",
    note: "Recommended for every family",
    tone: "coral",
    steps: [
      {
        n: 4,
        title: "The Open House",
        body: "The Open House happens on the same dates as BEST. Parents meet school leaders, hear a structured presentation, and take a guided tour of the campus.",
        icon: Landmark,
      },
      {
        n: 5,
        title: "BEST — entrance assessment",
        body: "The student sits the Brighton Entrance Scholastic Test at the campus, pencil and paper. There are two slots; the times are sent after the registration form is filled. There is no spot registration on the day.",
        icon: PencilRuler,
      },
      {
        n: 6,
        title: "Results & communication",
        body: "For the 17 January 2027 test, results are released by 4:00 pm on Tuesday 19 January 2027. Parents are told by phone, email and message. Pay the admission fee and caution money within six days to guarantee the seat.",
        icon: Globe,
      },
    ],
  },
  {
    key: "onboard",
    label: "On-boarding",
    note: "Seats are first come, first admit",
    tone: "navy",
    steps: [
      {
        n: 7,
        title: "Admission on-boarding",
        body: "Essential documents as per the admission handbook, the code of conduct and the remaining forms.",
        icon: BookUser,
      },
      {
        n: 8,
        title: "Meet the Academic Head",
        body: "The student is invited to meet the Academic Head, if required.",
        icon: MessagesSquare,
      },
      {
        n: 9,
        title: "Fee confirmation",
        body: "The parent deposits the fee, and the admission stands confirmed.",
        icon: Banknote,
      },
      {
        n: 10,
        title: "Student onboarding",
        body: "The parent is given the student onboarding handbook, and the first day is set.",
        icon: UserRoundCheck,
      },
    ],
  },
];

const toneStyles: Record<
  "violet" | "coral" | "navy",
  { rail: string; badge: string; chip: string; icon: string }
> = {
  violet: {
    rail: "bg-primary",
    badge: "bg-primary text-primary-foreground",
    chip: "bg-blush text-primary",
    icon: "bg-primary/10 text-primary",
  },
  coral: {
    rail: "bg-coral",
    badge: "bg-coral text-coral-foreground",
    chip: "bg-coral/25 text-accent",
    icon: "bg-coral/25 text-accent",
  },
  navy: {
    rail: "bg-accent",
    badge: "bg-accent text-accent-foreground",
    chip: "bg-surface-2 text-foreground",
    icon: "bg-accent/10 text-accent",
  },
};

function Chevrons({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`flex items-center gap-1 ${className}`}>
      {[0, 1, 2].map((i) => (
        <svg key={i} viewBox="0 0 12 20" className="h-3 w-2 fill-current opacity-70">
          <path d="M0 0l10 10L0 20l3-10z" />
        </svg>
      ))}
    </span>
  );
}

export function AdmissionFlowInfographic() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-border bg-surface">
      {/* Head */}
      <div className="grid gap-4 p-5 md:p-9 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="nav-index">Admission process flow</p>
          <h3 className="mt-1 font-display text-3xl leading-[1.05] md:text-4xl">
            From first enquiry to <span className="text-highlight">the first day</span>
          </h3>
          <div className="mt-4 rounded-2xl bg-primary/8 p-5 text-sm leading-relaxed text-muted-foreground">
            <span className="mb-3 block h-1 w-8 rounded-full bg-coral" />
            Each year Brighton announces that admissions open on 1 November. For students entering
            Class I and above, the school schedules the entrance assessment on one or multiple dates,
            typically on Sundays. Admissions for Nursery, KG I and KG II commence concurrently.
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl bg-accent p-6 text-accent-foreground md:p-7">
          <div aria-hidden className="absolute -right-4 top-0 flex gap-2 opacity-80">
            <span className="h-16 w-4 skew-x-12 bg-primary" />
            <span className="h-24 w-4 skew-x-12 bg-coral" />
            <span className="h-14 w-4 skew-x-12 bg-highlight" />
          </div>
          <h4 className="font-display text-xl">What is an Open House?</h4>
          <p className="mt-3 max-w-md text-sm leading-relaxed opacity-85">
            An Open House is an invitation for parents and students to explore the school’s learning
            environment. It is a chance to meet school leaders and faculty, hear the school’s offerings
            in a structured presentation, and take a guided tour of the facilities. It happens on the
            same dates as BEST.
          </p>
        </div>
      </div>

      {/* Phases */}
      <div className="space-y-3 px-5 pb-5 md:px-9 md:pb-9">
        {phases.map((phase, pi) => {
          const t = toneStyles[phase.tone];
          return (
            <div key={phase.key}>
              <div className="rounded-2xl border border-border bg-card p-5 md:p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`h-6 w-1.5 rounded-full ${t.rail}`} />
                  <h4 className="font-display text-lg">{phase.label}</h4>
                  <span className={`rounded-full px-3 py-1 text-xs ${t.chip}`}>{phase.note}</span>
                </div>

                <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {phase.steps.map((s) => {
                    const Icon = s.icon;
                    return (
                      <li
                        key={s.n}
                        className="flex h-full flex-col rounded-2xl bg-surface-2/50 p-5 transition-colors hover:bg-surface-2"
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`grid size-11 shrink-0 place-items-center rounded-full ${t.icon}`}
                          >
                            <Icon className="size-5" />
                          </span>
                          <span
                            className={`grid size-7 shrink-0 place-items-center rounded-full font-display text-xs ${t.badge}`}
                          >
                            {s.n}
                          </span>
                        </div>
                        <h5 className="mt-4 font-display text-base leading-snug">{s.title}</h5>
                        <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.body}</p>
                        {s.tag ? (
                          <span className="mt-3 w-fit rounded-full bg-card px-3 py-1 text-xs text-muted-foreground">
                            {s.tag}
                          </span>
                        ) : null}
                      </li>
                    );
                  })}
                </ol>
              </div>

              {pi < phases.length - 1 ? (
                <div className="flex items-center justify-center gap-3 py-2 text-highlight">
                  <span className="h-px w-10 bg-border" />
                  <Chevrons />
                  <span className="h-px w-10 bg-border" />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      {/* Welcome */}
      <div className="flex flex-wrap items-center gap-5 bg-primary px-6 py-7 text-primary-foreground md:px-9">
        <span className="grid size-16 shrink-0 place-items-center rounded-full bg-primary-foreground/15">
          <GraduationCap className="size-7" />
        </span>
        <div className="min-w-[15rem] flex-1">
          <p className="font-display text-2xl leading-tight">
            Welcome to Brighton International School
          </p>
          <p className="mt-1 text-sm opacity-85">
            Learn today, lead tomorrow — every step above exists to understand how your child thinks,
            not what they have memorised.
          </p>
        </div>
        <a
          href="#apply"
          className="rounded-full bg-coral px-7 py-3 font-display text-coral-foreground transition-opacity hover:opacity-90"
        >
          Start the process
        </a>
      </div>
    </div>
  );
}
