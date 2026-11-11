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
      <section className="mt-6 grid gap-3 lg:grid-cols-2">
        <article className="card-shell p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-highlight">A year of learning, events and experiences at a glance</p>
          <h2 className="mt-1 font-display text-3xl text-primary">Activity Sked</h2>
          <div className="mt-3 space-y-3 text-muted-foreground">
            <p>
              Activity Sked is Brighton International School's comprehensive annual calendar that provides a planned overview of the academic year, keeping students, parents and teachers informed well in advance.
            </p>
            <p>
              It outlines the weekly activities scheduled for each class, from Nursery to Grade XII, along with important dates and details of school events, celebrations, competitions, examinations and holidays. It brings together the entire year's activities in one organised calendar, offering a clear picture of what is planned, when it will take place and which classes will participate.
            </p>
            <p>
              With Activity Sked, every week and every special occasion is mapped out, making the school year's activities transparent, organised and easy to follow.
            </p>
          </div>
        </article>
        <article className="card-shell p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-highlight">A month-by-month academic roadmap</p>
          <h2 className="mt-1 font-display text-3xl text-primary">Academic Sked</h2>
          <div className="mt-3 space-y-3 text-muted-foreground">
            <p>
              Academic Sked provides parents with a month-wise breakdown of the annual syllabus for each class. It offers a clear overview of the topics and portions planned to be covered every month throughout the academic year, helping parents stay informed about their child's academic progress and understand the learning plan in advance.
            </p>
            <p>
              This structured academic roadmap promotes transparency and enables parents to stay connected with the teaching-learning process.
            </p>
          </div>
        </article>
      </section>

      <section className="mt-3 rounded-[1.75rem] bg-primary p-8 text-primary-foreground md:p-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-coral">Strengthening the partnership between home and school</p>
        <h2 className="mt-1 max-w-3xl font-display text-3xl">Partners in Progress Meet</h2>
        <div className="mt-4 grid gap-6 lg:grid-cols-[auto_1fr] lg:items-start">
          <p className="font-display text-5xl leading-none text-coral">4</p>
          <div className="max-w-3xl space-y-3 text-primary-foreground/85">
            <p>
              At Brighton International School, we believe that a child's progress is best supported when parents and teachers work together as partners. The Partners in Progress Meet is an initiative built on this belief, providing a meaningful platform for parents and teachers to connect, exchange insights and work towards a shared goal — the holistic development of every child.
            </p>
            <p>
              Four Partners in Progress Meets are conducted during each academic session, ensuring regular opportunities for meaningful interaction and continuous communication between parents and teachers.
            </p>
            <p>
              These meetings offer an opportunity to discuss a student's academic progress, strengths, areas that need attention, interests and overall development. Parents gain a better understanding of their child's learning journey at school, while teachers benefit from parents' perspectives and insights into the child at home.
            </p>
            <p>
              More than just a parent-teacher interaction, the Partners in Progress Meet encourages open communication, mutual understanding and collective responsibility. By working in partnership, parents and teachers can provide consistent guidance, address challenges effectively and celebrate every milestone in a child's journey.
            </p>
            <p className="font-display text-xl text-coral">
              Together, we create the support system every child needs to learn, grow and progress with confidence.
            </p>
          </div>
        </div>
      </section>

      <AcrossPractices />
    </>
  );
}
