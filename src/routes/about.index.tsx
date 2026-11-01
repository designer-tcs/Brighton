import { createFileRoute, Link } from "@tanstack/react-router";
import { Banner, meta } from "@/components/TabNav";
import { HistoryTimeline } from "@/components/about/HistoryTimeline";
import { FifteenYears } from "@/components/about/FifteenYears";
import courtyard from "@/assets/school/courtyard-angle.jpg";
import { HowWeThink, SmallThings } from "@/components/story/BrightonStory";
import faculty from "@/assets/faculty-group.jpg";

export const Route = createFileRoute("/about/")({
  head: () =>
    meta(
      "The School",
      "Brighton International School, Raipur: founded 2010, CBSE affiliated (3330153), 3,000+ students and 200+ teachers, with life skills at the core of its philosophy.",
    ),
  component: School,
});

function School() {
  return (
    <>
      <Banner
        eyebrow="The School"
        title="Bright + Nation"
        intro="Brighton's name joins two words, Bright and Nation — and that order is our whole purpose. Life skills sit at the core of how we teach."
        img={courtyard}
        frame="aspect-[3/2]"
      />

      <section className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <article className="card-shell p-8">
          <h2 className="font-display text-3xl text-primary">Our history</h2>
          <p className="mt-3 text-muted-foreground">
            Brighton opened in the summer of 2010, but its founder had been shaping the idea for
            decades: a school that attracts the best teachers and students, who learn to respect each
            other and to become better people every day — not only to pass lessons.
          </p>
          <p className="mt-3 text-muted-foreground">
            We began in the summer of 2010 with 110 students. The school is affiliated with CBSE
            (No. 3330153). Today there are 3,000+ students and 200+ teachers, and a franchise school
            in Shahdol. The blue and the pen nibs in our emblem stand for the lasting impact education
            has on a child's life.
          </p>
        </article>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["2010", "Founded"],
            ["3,000+", "Students"],
            ["200+", "Teachers"],
            ["3330153", "CBSE affiliation"],
          ].map(([n, l]) => (
            <div key={l} className="rounded-[1.75rem] bg-primary p-6 text-primary-foreground">
              <p className="font-display text-4xl text-coral">{n}</p>
              <p className="mt-1 text-sm text-primary-foreground/80">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <HistoryTimeline />

      <section className="mt-6 rounded-[1.75rem] bg-blush p-8 md:p-10">
        <h2 className="font-display text-3xl text-primary">Our vision</h2>
        <p className="mt-3 max-w-3xl text-lg">
          To build our nation and our children's future by meeting the needs of <b>today</b> with
          the wisdom of <b>yesterday</b> and the technology of <b>tomorrow</b>.
        </p>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Tomorrow's world will be faster and harder. We want every Brighton student not just to
          survive it, but to flourish.
        </p>
      </section>

      <section className="card-shell mt-6 p-8 md:p-12">
        <p className="text-xs font-semibold uppercase tracking-wider text-highlight">The Brighton Way</p>
        <h2 className="mt-2 max-w-3xl font-display text-3xl text-primary md:text-4xl">How we go about things</h2>
        <div className="mt-6 max-w-3xl space-y-4 text-lg">
          <p>We will always teach in the best way possible and do whatever it takes for our students to learn.</p>
          <p>We will always make ourselves available to students and parents, and address any concerns.</p>
          <p>We will always protect the safety, interests and rights of everyone in the classroom.</p>
        </div>
      </section>

      <section className="mt-6">
        <img
          src={faculty}
          alt="Brighton faculty together on campus"
          loading="lazy"
          className="w-full rounded-[1.75rem]"
        />
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <article className="card-shell p-8">
            <h2 className="font-display text-2xl">Faculty</h2>
            <p className="mt-2 text-muted-foreground">
              200+ teachers, one mission. They build each child's self-esteem, deepen their engagement
              with learning, and remove whatever stands in the way. No class has more than 30 children.
            </p>
          </article>
          <article className="card-shell p-8">
            <h2 className="font-display text-2xl">The curriculum</h2>
            <p className="mt-2 text-muted-foreground">
              Based on CBSE and NCERT, taught in English. Every lesson is planned the Brighton Way,
              with activity, assignment, classwork and personality development built in — blending
              academics and co-curricular learning.
            </p>
          </article>
        </div>
      </section>

      <HowWeThink />
      <SmallThings />
      <FifteenYears />

      <Link to="/about/disclosure" className="card-shell mt-6 flex items-center justify-between gap-4 p-8 transition-colors hover:bg-blush">
        <div>
          <h2 className="font-display text-2xl">Mandatory public disclosure</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Affiliation, recognition, safety certificates, fee structure and staff details, as mandated by CBSE.
          </p>
        </div>
        <span className="font-display text-primary">View →</span>
      </Link>
    </>
  );
}
