import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Banner, meta } from "@/components/TabNav";
import { lectureSpeakers } from "@/data/lecture-speakers";
import lectureImg from "@/assets/lecture-series.jpg";

export const Route = createFileRoute("/lecture-series/")({
  head: () =>
    meta(
      "Brighton Lecture Series",
      "Professionals meet Secondary and Senior Secondary students at Brighton International School, Raipur, for career guidance and real-world conversations.",
    ),
  component: LectureSeries,
});

function LectureSeries() {
  return (
    <SiteLayout>
      <Banner
        eyebrow="Listen · Learn · Inspire"
        title="Brighton Lecture Series"
        intro="Regular conversations for Secondary and Senior Secondary students. Open a speaker to see the session as it was published: the portrait, the photographs, and the write-up."
        img={lectureImg}
        objectPosition="center"
        frame="aspect-[3/2]"
      />

      <section className="mt-6 grid gap-3 md:grid-cols-3">
        {[
          ["For older students", "Sessions are arranged for Secondary and Higher Secondary classes."],
          ["Many kinds of work", "Judges, IPS officers, scientists, designers, editors and founders have all taken a seat."],
          ["Questions welcome", "Students ask about careers, choices and what a working life actually looks like."],
        ].map(([t, b]) => (
          <article key={t} className="card-shell p-7">
            <h2 className="font-display text-xl text-primary">{t}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{b}</p>
          </article>
        ))}
      </section>

      <section className="mt-6 rounded-[1.75rem] bg-primary p-8 text-primary-foreground md:p-10">
        <p className="font-display text-6xl text-coral">{lectureSpeakers.length}</p>
        <p className="mt-2 max-w-md text-primary-foreground/85">
          sessions so far, each one opening to the photographs and notes from that visit.
        </p>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {lectureSpeakers.map((speaker) => (
          <Link
            key={speaker.slug}
            to="/lecture-series/$slug"
            params={{ slug: speaker.slug }}
            className="card-shell group overflow-hidden"
          >
            {speaker.images[0] ? (
              <img
                src={speaker.images[0]}
                alt=""
                className="aspect-[4/3] w-full object-cover object-top"
              />
            ) : null}
            <span className="block p-5">
              <span className="block font-display text-lg text-primary group-hover:text-coral">{speaker.name}</span>
              {speaker.role ? <span className="mt-1 block text-sm text-muted-foreground">{speaker.role}</span> : null}
            </span>
          </Link>
        ))}
      </section>

      <section className="card-shell mt-6 p-8">
        <h2 className="font-display text-2xl text-primary">Feature in the series</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Brighton invites professionals, motivators, innovators and anyone who can inspire young minds.
        </p>
        <Link
          to="/contact"
          className="mt-5 inline-flex rounded-full bg-coral px-6 py-3 font-display text-coral-foreground"
        >
          Show your interest
        </Link>
      </section>
    </SiteLayout>
  );
}
