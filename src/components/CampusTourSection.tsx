import { useState } from "react";
import { Link } from "@tanstack/react-router";
import campus from "@/assets/campus.jpg";
import classroom from "@/assets/school/classroom-screen.jpg";
import robots from "@/assets/school/robots-class.jpg";
import library from "@/assets/school/library-boy.jpg";
import music from "@/assets/school/music-drums.jpg";
import football from "@/assets/school/football-team.jpg";
import play from "@/assets/tour-outdoors.jpg";

const gallery = [
  { image: campus, alt: "The Brighton school entrance", caption: "The school building", position: "center 40%" },
  { image: classroom, alt: "A teacher teaching from the interactive board", caption: "Interactive classrooms", position: "center" },
  { image: robots, alt: "Students building a robot in the tinkering lab", caption: "Atal Tinkering Lab", position: "center 42%" },
  { image: library, alt: "A student reading in the library", caption: "Library", position: "center" },
  { image: music, alt: "Students playing drums in the music studio", caption: "Music studio", position: "center" },
  { image: football, alt: "The football team lined up on the ground", caption: "Football ground", position: "center" },
  { image: play, alt: "Slides and swings in the junior play garden", caption: "Play garden", position: "center" },
];

export function CampusTourSection() {
  const [active, setActive] = useState(0);
  const featured = gallery[active]!;

  return (
    <section className="mt-6 rounded-[1.75rem] border border-border bg-blush p-4 md:p-6">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <figure className="overflow-hidden rounded-[1.5rem]">
          <img
            key={featured.caption}
            src={featured.image}
            alt={featured.alt}
            loading="lazy"
            width={1200}
            height={900}
            className="aspect-[3/2] w-full object-cover"
            style={{ objectPosition: featured.position }}
          />
        </figure>

        <div className="px-2 md:px-6">
          <svg
            aria-hidden
            viewBox="0 0 80 60"
            className="h-12 w-16 text-highlight"
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
          >
            <path d="M6 6c22 4 38 18 48 40" />
            <path d="M39 42l15 6 3-16" />
          </svg>
          <h2 className="mt-4 font-display text-3xl text-primary md:text-4xl">
            Take a Tour of the Brighton Campus
          </h2>
          <p className="mt-3 max-w-md text-muted-foreground">
            Thoughtfully designed to spark curiosity, our spaces embrace the modern role of
            technology in education while encouraging everyday exploration, movement, and joy.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-full bg-coral px-7 py-3 font-display text-lg text-coral-foreground transition-opacity hover:opacity-90"
          >
            Take a Campus Tour
          </Link>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-7">
        {gallery.map((g, i) => (
          <button
            key={g.caption}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show ${g.caption}`}
            aria-current={i === active}
            className={`overflow-hidden rounded-[1rem] transition-all ${
              i === active ? "ring-2 ring-primary" : "opacity-85 hover:opacity-100"
            }`}
          >
            <img
              src={g.image}
              alt={g.alt}
              loading="lazy"
              width={1200}
              height={900}
              className="aspect-[3/2] w-full object-cover"
              style={{ objectPosition: g.position }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
