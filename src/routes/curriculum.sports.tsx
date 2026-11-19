import { createFileRoute } from "@tanstack/react-router";
import { Clock, IndianRupee, MapPin, CalendarDays } from "lucide-react";
import { SectionBanner } from "@/components/SectionBanner";
import { meta } from "@/components/TabNav";
import cricket from "@/assets/sports/cricket.jpg";
import football from "@/assets/sports/football.jpg";
import volleyball from "@/assets/sports/volleyball.png";
import basketball from "@/assets/sports/basketball.jpg";
import boxing from "@/assets/sports/boxing.jpg";
import outdoorMultiplay from "@/assets/sports/outdoor-multiplay.jpg";

export const Route = createFileRoute("/curriculum/sports")({
  head: () =>
    meta(
      "Sports — Cricket Academy & Summer Camp",
      "Brighton Cricket Academy on a 4-acre ground with former Ranji player Sanjeev Prasad, and the Brighton Summer Sports Camp for cricket, football and volleyball.",
    ),
  component: Sports,
});

const why = [
  "Expert coaches with professional cricket experience",
  "Comprehensive training for all aspects of the game",
  "Focus on physical fitness, technique, and game awareness",
  "Safe and supportive environment for learning and growth",
  "Opportunities for competitive match play and performance evaluation",
];

const facts = [
  { icon: Clock, k: "Timings", v: "16:00 – 18:00 hrs" },
  { icon: CalendarDays, k: "Schedule", v: "5 days a week – Tue, Wed, Thu, Sat, Sun" },
  { icon: MapPin, k: "Venue", v: "A sprawling 4-acre ground at Brighton" },
  { icon: IndianRupee, k: "Fee", v: "Rs 7,000 for 3 months" },
];

const coaches = [
  {
    n: "Mr. Sanjeev Prasad",
    b: "A former Ranji Trophy player (1997-2001) with over two decades in cricket. PGT Physical Education at Brighton since 2012, member of the CG Veterans Team, Assistant Coach for the Under-14 Odisha Boys' team and Assistant Coach of Delhi Daredevils Cricket Academy, Raipur.",
  },
  {
    n: "Miss Kajal Meshram",
    b: "BCCI Level-1 certified coach (2022-23) and Assistant Coach at the academy. Assistant Coach of the Chhattisgarh State Cricket Sangh U-15 & U-19 teams (2023-24), Head Coach of a university team (2023-24) and a former CSCS player.",
  },
];

const programme = [
  {
    k: "Objective",
    body: "At Brighton International School, the sports programme grows with the child. It begins with building gross motor skills in the early years and progresses to advanced skills and a deeper understanding of a wide range of sports and games. The programme aims to introduce students to different sports through first-hand experience, help every child reach a healthy level of fitness, and instil a lifelong appreciation of sport and fitness as part of daily life. It also nurtures our most talented players into strong teams that represent the school at every level, and gives students who wish to excel the platform and opportunities to do so.",
  },
  {
    k: "Infrastructure",
    body: "Our campus has more than four acres dedicated to sports, with facilities for cricket, football, volleyball, basketball and boxing, along with indoor games such as table tennis, chess and carrom. An indoor sports academy is also planned for the near future.",
  },
  {
    k: "Faculty",
    body: "The programme is led by a team of more than ten qualified coaches, both men and women, each holding a B.P.Ed. degree and specialising in the sports Brighton offers. Under their guidance, our students have achieved outstanding results in school-level competitions at regional and national levels.",
  },
  {
    k: "Classes",
    body: "Primary classes have at least three sports periods a week, while the Middle section and above have at least two. Students can also choose sports as their hobby, and those representing the school receive dedicated training after school hours ahead of competitions. For students seeking high-intensity training, the school runs a Cricket Academy beyond school hours, with fees charged separately from the school fee, as well as a sports camp during the summer vacation.",
  },
];

const gallery = [
  { label: "Cricket", src: cricket, position: "object-center" },
  { label: "Football", src: football, position: "object-center" },
  { label: "Volleyball", src: volleyball, position: "object-center" },
  { label: "Basketball", src: basketball, position: "object-center" },
  { label: "Boxing", src: boxing, position: "object-[center_42%]" },
  { label: "Outdoor Multiplay", src: outdoorMultiplay, position: "object-center" },
];

const camp = [
  { s: "Cricket", age: "5 – 19 years", fee: "Rs 3,500", coach: "Sanjeev Prasad (Mentor, former Ranji Trophy player, BCCI/NCA Level I); Ms. Pooja Dhusiya (former CSCS player, CSCS Panel Umpire); Ms. Kajal Meshram (former CSCS player, BCCI Level 1 coach)" },
  { s: "Football", age: "14 – 19 years", fee: "Rs 2,500", coach: "Madhur Deshpande (D & E certificate holder, AIFF; Junior Asst. Coach, DFA Raipur)" },
  { s: "Volleyball", age: "10 – 19 years", fee: "Rs 2,500", coach: "Mr. Sunil Nayak (NIS certified, NSNIS Patiala; Asst. Coach RDBA; National Player, Gold Medalist; SGFI Referee)" },
];

function Sports() {
  return (
    <>
      <SectionBanner
        title="Brighton Cricket Academy"
        subtitle="Expert coaching for school-going students in batting, bowling, fielding and game strategy, building confidence, teamwork and leadership. Open to boys and girls aged 5 to 19."
        tone="dark"
      />
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((f) => (
          <div key={f.k} className="card-shell p-5">
            <f.icon className="size-5 text-highlight" />
            <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{f.k}</p>
            <p className="font-display text-lg">{f.v}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <section className="card-shell p-7">
          <h2 className="font-display text-2xl text-primary">Why choose us?</h2>
          <ul className="mt-4 space-y-2">
            {why.map((w, i) => (
              <li key={w} className="flex gap-3 text-sm">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-coral font-display text-xs text-coral-foreground">{i + 1}</span>
                {w}
              </li>
            ))}
          </ul>
          <p className="mt-5 rounded-2xl bg-blush p-4 text-sm">
            <b>Our mission:</b> to identify, develop and nurture young cricketing talent in a top-class training
            environment that fosters excellence, sportsmanship and character.
          </p>
        </section>
        <section className="grid gap-4">
          {coaches.map((c) => (
            <article key={c.n} className="card-shell p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-highlight">Coach</p>
              <h3 className="font-display text-xl">{c.n}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.b}</p>
            </article>
          ))}
        </section>
      </div>

      <div className="mt-8">
        <SectionBanner title="Sports at Brighton" />
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {programme.map((p) => (
            <article key={p.k} className="card-shell p-6">
              <h2 className="font-display text-2xl text-primary">{p.k}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g) => (
            <figure key={g.label} className="card-shell overflow-hidden">
              <img
                src={g.src}
                alt={g.label}
                className={`aspect-[3/2] w-full object-cover ${g.position}`}
              />
              <figcaption className="px-5 py-3 font-display text-lg">{g.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <SectionBanner
          title="Brighton Summer Sports Camp"
          subtitle="A summer to remember, run by Brighton's top sports coaches, with AC bus conveyance available."
        />
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {camp.map((c) => (
            <article key={c.s} className="card-shell flex flex-col p-6">
              <h3 className="font-display text-2xl text-primary">{c.s}</h3>
              <div className="mt-3 flex gap-2 text-sm">
                <span className="rounded-full bg-blush px-3 py-1">{c.age}</span>
                <span className="rounded-full bg-coral px-3 py-1 text-coral-foreground">{c.fee}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{c.coach}</p>
            </article>
          ))}
        </div>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <div className="card-shell p-6 text-sm">
            <h3 className="font-display text-lg">Dates & times</h3>
            <p className="mt-2">15 April – 30 April · 4:30 pm – 6:30 pm</p>
            <p>1 May – 15 May · 6:30 am – 8:30 am</p>
            <h3 className="mt-4 font-display text-lg">Bus conveyance fee</h3>
            <p className="mt-2">0–6 km: Rs 2,500 · 6–10 km: Rs 3,000 · 10 km+: Rs 3,500</p>
            <p className="mt-4">Queries: call or WhatsApp Mr Sanjeev Prasad, +91 98278 84519</p>
          </div>
          <div className="card-shell p-6 text-sm text-muted-foreground">
            <h3 className="font-display text-lg text-foreground">Terms & conditions</h3>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>Each child must be registered on or before the first day. Arrive 15 minutes early on the first day with the registration money, paid in advance for the full camp.</li>
              <li>Camps are non-refundable, even if the child has attended only one day.</li>
              <li>There are no spectator facilities, so parents are encouraged to leave children during camp times. You may stay a short while on the first day until activities begin.</li>
              <li>Send a packed lunch with at least one drink. Every participant gets a reusable water bottle.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
