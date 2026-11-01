import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Banner, meta } from "@/components/TabNav";
import { GalleryTour } from "@/components/GalleryTour";
import block from "@/assets/school/academic-side.jpg";
import library from "@/assets/tour-library.jpg";
import classroom from "@/assets/tour-classroom.jpg";

export const Route = createFileRoute("/infrastructure")({
  head: () =>
    meta(
      "Infrastructure",
      "Brighton's 8-acre Raipur campus: air-conditioned smart classrooms, library, 3 computer labs, robotics lab, 300-seat auditorium, GPS school buses and 2.5 acres of sports.",
    ),
  component: Infrastructure,
});

const facilities = [
  ["Air-conditioned classrooms", "Touch display boards and Teach Next digital learning, colourful furniture, and every room opening onto the central courtyard and greenery."],
  ["Computer labs", "Three labs with 70+ desktops — one per student — on a Wi-Fi campus, with Brighton's own project-based computer curriculum."],
  ["Robotics lab", "Modern gadgets and qualified staff. Watching young Brightonites engrossed in building solutions is a sight to behold."],
  ["Kala-Kriti auditorium", "A 300-seat indoor space that hosts events all through the school year."],
  ["The Junior Wing", "Next to the school lawns, with an activity area, colourful furniture, a central aisle and play rooms for young learners."],
  ["School buses", "Buses with speed governors, CCTV and GPS cover a 35 km radius. Parents can track the bus on the school's mobile app."],
];

const sports = [
  ["Cricket", "Ground with two pitches and three practice nets with a coach"],
  ["Football", "A full ground with goal posts of different sizes"],
  ["Basketball", "International-size court at the entrance"],
  ["Volleyball", "Two courts that host district and inter-school events"],
  ["Tennis", "A new clay court at the corner of the ground"],
  ["Boxing", "International-size arena; Brighton boxers win medals"],
  ["Table tennis & indoor games", "Time and space for every indoor game"],
  ["Adventure zone", "Tyres and ropes to test agility"],
  ["Play garden", "Almost an acre of green for the junior wing"],
  ["Kids' play area", "Slides, see-saws, swings and a merry-go-round"],
  ["Courtyard", "10,000 sq ft for assembly, events and games"],
];

function Infrastructure() {
  return (
    <SiteLayout>
      <Banner
        eyebrow="Infrastructure"
        title="Eight acres built for learning"
        intro="Off Baloda Bazaar Road, 1.5 km from the state Legislative Assembly — lush lawns, a modern academic block and courts and grounds for every sport."
        img={block}
        frame="aspect-[3/2]"
      />

      <section className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[["8", "Acres of campus"], ["80+", "Classrooms"], ["12+", "Labs"], ["300+", "Trees"]].map(([n, l]) => (
          <div key={l} className="rounded-[1.75rem] bg-primary p-6 text-primary-foreground">
            <p className="font-display text-4xl text-coral">{n}</p>
            <p className="mt-1 text-sm text-primary-foreground/80">{l}</p>
          </div>
        ))}
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <img src={library} alt="Students reading together in the library" loading="lazy" width={1600} height={1067} className="aspect-[3/2] w-full rounded-[1.75rem] object-cover object-center" />
        <article className="card-shell p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-highlight">Library</p>
          <h2 className="mt-1 font-display text-3xl text-primary">More than a place to borrow books</h2>
          <p className="mt-3 text-muted-foreground">
            Brighton's library is a lively hub for readers of every class, built to grow independent
            thinkers and lifelong learners. It holds more than 5 books per student, plus digital
            content and reference books.
          </p>
          <div className="mt-5 grid gap-2 sm:grid-cols-3">
            {["Two library classes every week", "A new library theme every month", "Reader's Badge"].map((x) => (
              <div key={x} className="rounded-2xl bg-blush p-4 font-display">{x}</div>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {facilities.map(([t, b]) => (
          <article key={t} className="card-shell p-7">
            <h3 className="font-display text-xl">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{b}</p>
          </article>
        ))}
      </section>

      <section className="mt-6 rounded-[1.75rem] bg-primary p-8 text-primary-foreground md:p-10">
        <h2 className="font-display text-3xl md:text-4xl">Sports — 2.5 acres of dedicated space</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {sports.map(([t, b]) => (
            <div key={t} className="rounded-2xl bg-primary-foreground/10 p-5">
              <h3 className="font-display text-lg text-coral">{t}</h3>
              <p className="mt-1 text-sm text-primary-foreground/85">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        <article className="card-shell p-8">
          <h2 className="font-display text-2xl">The campus experience</h2>
          <p className="mt-2 text-muted-foreground">
            Brighton began with 15 classrooms and 110 students. Today it has over 80 classrooms,
            12+ labs and more than 300 trees, home to all kinds of plants and birds. Many visitors say
            it brings them a sense of calm — come and see for yourself.
          </p>
        </article>
        <img src={classroom} alt="A classroom with an interactive board" loading="lazy" width={1600} height={1067} className="aspect-[3/2] w-full rounded-[1.75rem] object-cover object-center" />
      </section>

      <GalleryTour />
    </SiteLayout>
  );
}
