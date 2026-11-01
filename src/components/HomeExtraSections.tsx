import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PhotoSlot } from "@/components/PhotoSlot";

// Parked sections: previously shown below the FAQ on the homepage.
// Kept here so the content is not lost — render <HomeExtraSections /> to bring it back.

const highlights = [
  { value: "8 acres", label: "Green campus at Nardaha, Raipur" },
  { value: "Nursery–XII", label: "One continuous learning journey" },
  { value: "CBSE", label: "Affiliation No. 3330153" },
  { value: "ATL Lab", label: "Atal Tinkering Lab on campus" },
];

const pillars = [
  {
    title: "Progressive Curriculum",
    body: "CBSE framework taught through projects, questions and real-world context rather than rote recall.",
  },
  {
    title: "Innovative Pedagogy",
    body: "Air-conditioned, interactive classrooms where teachers act as facilitators of thinking.",
  },
  {
    title: "Life Skills First",
    body: "Communication, empathy and resilience are timetabled, not left to chance.",
  },
];

export function HomeExtraSections() {
  return (
    <>
      <section className="mt-6 grid gap-6 md:grid-cols-2">
        <article className="relative overflow-hidden rounded-[1.75rem]">
          <PhotoSlot label="Campus lawn and building" className="h-72 md:h-80" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/85 to-transparent p-6">
            <h2 className="font-display text-2xl text-background">An 8-acre campus to grow in</h2>
            <p className="mt-1 text-sm text-background/85">
              Open lawns, shaded courtyards and space to run — right outside the classroom.
            </p>
          </div>
        </article>
        <article className="relative overflow-hidden rounded-[1.75rem]">
          <PhotoSlot label="Atal Tinkering Lab" className="h-72 md:h-80" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/85 to-transparent p-6">
            <h2 className="font-display text-2xl text-background">Ideas become prototypes</h2>
            <p className="mt-1 text-sm text-background/85">
              Our Atal Tinkering Lab turns curiosity into circuits, code and working models.
            </p>
          </div>
        </article>
      </section>

      <section className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((h) => (
          <div key={h.value} className="card-shell p-6">
            <p className="font-display text-3xl">{h.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{h.label}</p>
          </div>
        ))}
      </section>

      <section className="card-shell mt-6 p-8 md:p-12">
        <h2 className="max-w-2xl font-display text-3xl md:text-4xl">
          A school for life, not just for exams
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Brighton International School blends the CBSE curriculum with hands-on pedagogy so every
          child leaves able to think, question and do.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl bg-surface-2/60 p-6">
              <h3 className="font-display text-xl">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
        <Link
          to="/curriculum"
          className="mt-8 inline-flex items-center gap-2 font-display text-lg text-primary"
        >
          Explore the curriculum <ArrowUpRight className="size-5" />
        </Link>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        <div className="card-shell p-8 md:p-10">
          <h2 className="font-display text-3xl">Life beyond the classroom</h2>
          <p className="mt-3 text-muted-foreground">
            Multiple sports courts, house competitions, clubs, and the Brighton Lecture Series where
            students meet people who do remarkable work.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            {["Basketball", "Cricket", "Athletics", "Music", "Theatre", "Robotics", "Debate"].map(
              (t) => (
                <span key={t} className="rounded-full bg-surface-2 px-4 py-1.5">
                  {t}
                </span>
              ),
            )}
          </div>
          <Link
            to="/infrastructure"
            className="mt-7 inline-flex items-center gap-2 font-display text-lg text-primary"
          >
            See life at Brighton <ArrowUpRight className="size-5" />
          </Link>
        </div>
        <PhotoSlot label="Students on a sports court" className="h-72 lg:h-full" />
      </section>

      <section className="mt-6 overflow-hidden rounded-[1.75rem] bg-primary p-8 text-primary-foreground md:p-12">
        <h2 className="max-w-xl font-display text-3xl md:text-4xl">
          Admissions for Nursery to Class XII are open
        </h2>
        <p className="mt-3 max-w-xl text-primary-foreground/85">
          Visit the campus, meet our teachers, and see a Brighton classroom in action.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            to="/admissions"
            className="rounded-full bg-highlight px-7 py-3 font-display text-lg text-highlight-foreground"
          >
            Start an application
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-primary-foreground/50 px-7 py-3 font-display text-lg"
          >
            Book a campus visit
          </Link>
        </div>
      </section>
    </>
  );
}
