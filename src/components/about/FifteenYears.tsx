import { YouTubeCard } from "@/components/YouTubeCard";
import award2016 from "@/assets/awards/2016.jpg";
import award2023 from "@/assets/awards/2023.jpg";
import award2024 from "@/assets/awards/2024.jpg";
import award2025 from "@/assets/awards/2025.jpg";
import award2026 from "@/assets/awards/2026.jpg";

const awards = [
  { y: "2016", img: award2016 },
  { y: "2023", img: award2023 },
  { y: "2024", img: award2024 },
  { y: "2025", img: award2025 },
  { y: "2026", img: award2026 },
];

// From brightoninternational.in/15-years-celebration
const growth = [
  { k: "2010", v: "110 students" },
  { k: "Today", v: "3,000+ students and 200+ teachers" },
  { k: "A class", v: "Never more than 30 children" },
  { k: "Transport", v: "A fleet of 50+ buses" },
];

const beliefs = [
  ["Holistic Development", "Academics are important, but so are sports, arts, values and life skills. Our NEP-aligned curriculum develops students intellectually, emotionally, socially and physically."],
  ["Innovation in Pedagogy", "Our award-winning Robotics programme, comprehensive IT education and activity-based learning prepare students for a technology-driven future."],
  ["Individual Attention", "An optimal student-teacher ratio and TRACK, our personalised attention system, make sure every child gets the support they need."],
  ["Value-Based Education", "Beyond textbooks and examinations, we build character, empathy and social responsibility."],
];

export function FifteenYears() {
  return (
    <>
      <section className="mt-6 rounded-[1.75rem] bg-primary p-7 text-primary-foreground md:p-10">
        <p className="font-display text-sm uppercase tracking-widest text-coral">Celebrating 15 years</p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl md:text-4xl">From humble beginnings to educational leadership in Central India</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {growth.map((g) => (
            <div key={g.k} className="rounded-2xl bg-primary-foreground/10 p-5">
              <p className="font-display text-coral">{g.k}</p>
              <p className="mt-1 text-sm">{g.v}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 text-sm text-primary-foreground/85 md:grid-cols-2">
          <p>
            Beyond the flagship Nardaha campus, Brighton International School Shahdol in Madhya Pradesh carries the
            legacy forward, and Bubbles Preschool and Activity Hub at Ashoka Ratna, Raipur gives the youngest
            learners their first foundation.
          </p>
          <p>
            No. 1 in 2016, in 2017, in 2018, in 2023, in 2024, in 2025 and in 2026. Education World, CBSE Day
            School in Chhattisgarh.
          </p>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {awards.map((a) => (
            <figure key={a.y}>
              <img src={a.img} alt={`No. 1 in ${a.y}`} className="aspect-[4/3] w-full rounded-2xl object-cover" />
              <figcaption className="mt-2 font-display text-sm text-coral">No. 1 in {a.y}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-4 text-sm text-primary-foreground/85">No. 1 in 2017 and in 2018 as well. Those two years have no photograph here.</p>
      </section>

      <section className="mt-6 grid gap-3 sm:grid-cols-2">
        {beliefs.map(([t, b]) => (
          <article key={t} className="card-shell p-6">
            <h3 className="font-display text-xl text-primary">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{b}</p>
          </article>
        ))}
      </section>

      <section className="mt-6">
        <h2 className="mb-4 font-display text-2xl text-primary">Weeks that mean something</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <YouTubeCard id="xG_9IxKZU9g" title="Independence Week – an innovative way to engage students with the nation" />
          <YouTubeCard id="SMEx8kVxjFg" title="Health Week" />
        </div>
      </section>
    </>
  );
}
