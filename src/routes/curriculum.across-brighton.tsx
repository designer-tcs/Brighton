import { createFileRoute } from "@tanstack/react-router";
import { Banner, meta } from "@/components/TabNav";
import { AcrossPractices } from "@/components/story/BrightonStory";
import hero from "@/assets/school/across-teacher.jpg";

export const Route = createFileRoute("/curriculum/across-brighton")({
  head: () =>
    meta(
      "Across Brighton",
      "What every Brighton student gets from Nursery to Class XII: Brighton Kindle life skills, Track at Brighton, classes of 30 and daily parent updates.",
    ),
  component: Across,
});

const tabPoints = [
  "Act as a counsellor to the student, becoming his or her confidante.",
  "List strengths and weaknesses, and set practical goals for the next quarter.",
  "Review the goals every quarter and keep working on them.",
  "Note anecdotes, performance and participation in a monthly report.",
];

function Across() {
  return (
    <>
      <Banner
        eyebrow="Nursery to Class XII"
        title="The same care at every stage"
        intro="Some things at Brighton don't change with the class. These run through every year, from a child's first day in Nursery to their last in Class XII."
        img={hero}
        frame="aspect-[3/2]"
      />

      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        <article className="card-shell p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-highlight">Life skills</p>
          <h2 className="mt-1 font-display text-3xl text-primary">Brighton Kindle</h2>
          <p className="mt-3 text-muted-foreground">
            Brighton Kindle is all about picking up life skills. They grow with the child — from
            tying shoelaces in kindergarten, to ironing clothes in Class V, to financial literacy for
            seniors.
          </p>
          <div className="mt-5 grid gap-2 sm:grid-cols-3">
            {[
              ["Kindergarten", "Tying shoelaces"],
              ["Class V", "Ironing clothes"],
              ["Seniors", "Financial literacy"],
            ].map(([a, b]) => (
              <div key={a} className="rounded-2xl bg-blush p-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{a}</p>
                <p className="font-display text-lg">{b}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[1.75rem] bg-primary p-8 text-primary-foreground">
          <p className="text-xs font-semibold uppercase tracking-wider text-coral">Every class</p>
          <h2 className="mt-1 font-display text-3xl">Maximum 30 students</h2>
          <p className="mt-3 text-primary-foreground/85">
            No class at Brighton has more than 30 children. Small enough for every child to be known,
            and for feedback to reach each one.
          </p>
        </article>
      </section>

      <section className="card-shell mt-6 p-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-highlight">TAB</p>
        <h2 className="mt-1 font-display text-3xl text-primary">Track at Brighton</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          TAB is a personality questionnaire that teachers fill in for every single student. Its aim
          is the child's all-round development — and keeping that feedback continuous for as long as
          they are at Brighton. The School Counsellor, Academic Head and Principal check it from time
          to time, and it passes from one year's class teacher to the next.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tabPoints.map((p, i) => (
            <div key={p} className="flex gap-3 rounded-2xl bg-blush p-5">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-coral font-display text-coral-foreground">{i + 1}</span>
              <p className="text-sm">{p}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card-shell mt-6 p-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-highlight">Parents</p>
        <h2 className="mt-1 font-display text-3xl text-primary">Staying in touch, every day</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Brighton uses Google Classroom and MyClassBoard so students and parents can follow daily
          classwork and activities. Download the apps on your phone to stay up to date.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-display text-lg">Google Classroom</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Brighton has been granted access to Google Classroom by Google for Education, and all
              lectures, assignments, worksheets and learning resources are on it. Teachers share files,
              grade work and track each student's progress online. Parents are requested to download
              the Google Classroom app on their phones.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-display text-lg">MyClassBoard</h3>
            <p className="mt-1 text-sm text-muted-foreground">Daily school updates, notices and events for parents.</p>
          </div>
        </div>
      </section>
      <AcrossPractices />
    </>
  );
}
