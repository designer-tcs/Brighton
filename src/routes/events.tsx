import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mic } from "lucide-react";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";
import { EventVideos, MindsparkSection } from "@/components/EventsExtra";
import { lectureSpeakers } from "@/data/lecture-speakers";
import award2016 from "@/assets/awards/2016.jpg";
import award2023 from "@/assets/awards/2023.jpg";
import award2024 from "@/assets/awards/2024.jpg";
import award2025 from "@/assets/awards/2025.jpg";
import award2026 from "@/assets/awards/2026.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events, Media & Lecture Series | Brighton International School, Raipur" },
      {
        name: "description",
        content:
          "Brighton in the news — No. 1 co-ed school in Chhattisgarh — and the Brighton Lecture Series, where professionals guide Secondary and Senior students.",
      },
      { property: "og:title", content: "Events at Brighton International School, Raipur" },
      { property: "og:description", content: "Rankings, media coverage and the Brighton Lecture Series." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Events,
});

const news = [
  { y: "2026", t: "Education World India School Rankings 2026", b: "No. 1 in Chhattisgarh", img: award2026 },
  { y: "2025", t: "Education World India School Rankings 2025", b: "No. 1 in Chhattisgarh", img: award2025 },
  { y: "2024", t: "Education World India School Rankings 2024", b: "No. 1 in Chhattisgarh", img: award2024 },
  { y: "2023", t: "Education World India School Rankings 2023", b: "No. 1 in Chhattisgarh", img: award2023 },
  { y: "2016", t: "Education World India School Rankings 2016", b: "No. 1 in 2016. Also No. 1 in 2017 and in 2018.", img: award2016 },
];

const speakers: [string, string, string][] = [
  ["Ankita Sharma", "First female IPS Officer in Chhattisgarh", "Public service"],
  ["Mr O P Chaudhary", "Former IAS, Indian Politician", "Public service"],
  ["Ms Aishwarya Diwan", "Civil Judge & Judicial Magistrate", "Law"],
  ["Adv. Samiksha Singh", "Lawyer", "Law"],
  ["Mr Rohit Sharma", "Advocate", "Law"],
  ["Mr Abhinav Shukla", "Assistant Professor, HNLU", "Academia"],
  ["Mr Naveed Shujauddin", "Indian Forest Services", "Public service"],
  ["Mr V C Pandey", "G.T. Instructor, Indian Air Force", "Public service"],
  ["Dr Avichal Sharma", "Assistant Professor, School of Sciences, Christ University, Pune", "Academia"],
  ["Dr Shubhajit Sarkhel", "Professor, College of Food Technology, IGKV", "Academia"],
  ["Dr Rajeev Choudhary", "Professor, Pt. Ravishankar Shukla University, Raipur", "Academia"],
  ["Dr Krishna Kumar Sahu", "Professor, Indira Gandhi Agriculture University", "Academia"],
  ["Dr Beena Gidwani", "Associate Professor", "Academia"],
  ["Mr Sohail Mateen", "Associate Director, Atlas University & Career Coach", "Academia"],
  ["Mr Prashant Kawishwar", "Scientist", "Science & health"],
  ["Dr Aradhana Singh", "Veterinarian", "Science & health"],
  ["Dr Uma Chintal", "Physiotherapist", "Science & health"],
  ["Dr Seema Dengra", "Dentist", "Science & health"],
  ["Nancy Verma", "Product Designer", "Business & tech"],
  ["Mr Tushar Vadera", "Entrepreneur", "Business & tech"],
  ["Mr Madhav Rathor", "Business Development Manager", "Business & tech"],
  ["Ms Bharti Kaushik", "Data Analyst", "Business & tech"],
  ["Ms Priyanka Singh", "Business Partner, CL Educate Limited", "Business & tech"],
  ["Mr Kahna Khatri", "Software Engineer", "Business & tech"],
  ["Mr Priyank Patel", "Founder of Nukad Cafe", "Business & tech"],
  ["Mr Rahul Gupta", "Professional mountaineer and Entrepreneur", "Business & tech"],
  ["Mr Joseph John", "Coordinating Editor, Times of India", "Media & arts"],
  ["Ms Rishika Agarwal", "Fashion Designer", "Media & arts"],
  ["Ms Anuradha Dubey", "Renowned Makeup Artist", "Media & arts"],
  ["Mr Animesh Shukla", "Radio Jockey", "Media & arts"],
  ["Mr Anuj Sharma", "Actor, Director in Chhattisgarhi movies", "Media & arts"],
];
const fields: string[] = ["All", ...Array.from(new Set(speakers.map((s) => s[2])))];

function speakerKey(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

const speakerImage = new Map<string, string>();
for (const speaker of lectureSpeakers) {
  const key = speakerKey(speaker.name);
  if (!speakerImage.has(key) && speaker.images[0]) speakerImage.set(key, speaker.images[0]);
}

function Events() {
  const [f, setF] = useState("All");
  const shown = speakers.filter((s) => f === "All" || s[2] === f);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Events & Media"
        title="Brighton in the news"
        intro="Innovation, limitless care for students, progressive pedagogy and the support of our parents — snippets of the accolades and activities covered in local and national media."
      />

      <section className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((n) => (
          <article key={n.t} className="card-shell overflow-hidden">
            <img src={n.img} alt="" className="aspect-[4/3] w-full object-cover" />
            <div className="p-5">
              <p className="font-display text-sm text-highlight">{n.y}</p>
              <h2 className="font-display text-lg">{n.t}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{n.b}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-6 rounded-[1.75rem] bg-primary p-8 text-primary-foreground md:p-10">
        <p className="font-display text-sm uppercase tracking-widest text-coral">Listen · Learn · Inspire</p>
        <h2 className="mt-2 font-display text-4xl">Brighton Lecture Series</h2>
        <p className="mt-3 max-w-3xl text-primary-foreground/85">
          Regular interactions for Secondary and Higher Secondary students. Professionals from many backgrounds
          offer guidance on career selection and life paths, and Brightonites keep asking questions about their own growth.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-6">
          <p className="font-display text-6xl text-coral">{speakers.length}</p>
          <p className="max-w-xs text-sm text-primary-foreground/80">speakers so far, from judges and IPS officers to scientists, designers and radio jockeys.</p>
        </div>
      </section>

      <section className="mt-6">
        <div className="flex flex-wrap gap-2">
          {fields.map((x) => (
            <button key={x} type="button" onClick={() => setF(x)} aria-pressed={f === x}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${f === x ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-blush"}`}>
              {x}
            </button>
          ))}
        </div>
        <div key={f} className="mt-4 grid animate-in fade-in gap-4 duration-300 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map(([n, r, c]) => {
            const photo = speakerImage.get(speakerKey(n));
            return (
            <article key={n + r} className="card-shell overflow-hidden">
              {photo ? (
                <img src={photo} alt="" className="aspect-[4/3] w-full object-cover object-top" />
              ) : (
                <div className="grid aspect-[4/3] w-full place-items-center bg-blush">
                  <span className="grid size-16 place-items-center rounded-full bg-card text-primary">
                    <Mic className="size-7" />
                  </span>
                </div>
              )}
              <div className="p-5">
                <p className="font-display text-lg text-primary">{n}</p>
                <p className="mt-1 text-sm text-muted-foreground">{r}</p>
                <p className="mt-2 text-xs text-highlight">{c}</p>
              </div>
            </article>
            );
          })}
        </div>
      </section>

      <section className="card-shell mt-6 p-8">
        <h2 className="font-display text-2xl">Feature in the Brighton Lecture Series</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Brighton invites professionals, motivators, innovators, achievers, outliers and anyone who can inspire young minds.
        </p>
        <a href="/contact" className="mt-4 inline-block rounded-full bg-coral px-6 py-3 font-display font-semibold text-coral-foreground">Show your interest</a>
      </section>
      <MindsparkSection />
      <EventVideos />
    </SiteLayout>
  );
}
