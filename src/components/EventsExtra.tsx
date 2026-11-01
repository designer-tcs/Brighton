import { SectionBanner } from "@/components/SectionBanner";
import { VideoGrid } from "@/components/YouTubeCard";

// From brightoninternational.in/mindspark
const schedule: [string, string, string, string][] = [
  ["Poem Recitation", "Group A (I-II) – Festivals of Joy · Group B (III-V) – Technology and Me", "30 Oct", "https://docs.google.com/forms/d/1zlzBhqTu8FiiH48BQ9eHUtJ4XJ0bNS8zfhUU-IdgsIA/viewform"],
  ["Quiz", "GK & Current Affairs – Group D (IX-XII)", "30 Oct", "https://docs.google.com/forms/d/1-w4quU2pvpkMioZNOVRLCKNR7UN7N7-wRt3g0PejB2Y/viewform"],
  ["Solo Song Competition", "Groups A-D (one entry I-V, one entry VI-XII) – Theme: Maa", "30 Oct", "https://docs.google.com/forms/d/1aoLeVtpgGXeA3THWlUWUK-WvCYI9vjqi7oFpQ4g-AOY/viewform"],
  ["Scratch – Match", "Group B (III-V) – topic given on the spot", "30 Oct", "https://docs.google.com/forms/d/1NlcLuB3DMUmrPGzYDd-0mvJC-iSmhQUXsZR8sKXFHwU/viewform"],
  ["Cricket Tournament", "Under-17 Boys", "30 & 31 Oct", "https://docs.google.com/forms/d/1e1_xRwp_cIOorBa_ZBpzHiGBB6OWaeLicPClTLDdfXA/viewform"],
  ["Dual Robo Soccer", "Group C & D (VI-XII)", "30 Oct", "https://docs.google.com/forms/d/1And0q5spFXgSxI42K1vfCJa7VNCzcHNwGQJLQEODDWE/viewform"],
  ["Robo Hurdle Race", "Group C & D (VI-XII)", "30 Oct", "https://docs.google.com/forms/d/1MnmtY7TSy0tJCcjbVZB3wxpnKw4olOjfrZifTdl-KWg/viewform"],
  ["Basketball", "Under-16 Girls, Group C & D (VI-XII)", "30 Oct", "https://docs.google.com/forms/d/1ni43R_79KRcbzoLMc910I_lF_duYeYFAmNMdtWvaUD4/viewform"],
  ["Story Narration using Hand Puppets", "Group A & B (I-V) – story based on moral values", "31 Oct", "https://docs.google.com/forms/d/1zR9Linc681oOvcnIm3wXjHwDWNV2hA8X-2WbY6mVn7g/viewform"],
  ["Design.com", "Group C (VI-VIII), Group D (IX-XII)", "31 Oct", "https://docs.google.com/forms/d/1mzStsPboso9gg9wv1L8meaHA7_4qoFP2crDmxVy4ohY/viewform"],
  ["Py-Logic", "Group D (IX-XII) – Python coding", "31 Oct", "https://docs.google.com/forms/d/1g3QB4-Erfn2nI8nGnZgAGb78XCaJWHSKuCw1iPxQQLk/viewform"],
  ["Robo Dangal", "Group C & D (VI-XII)", "31 Oct", "https://docs.google.com/forms/d/1ohDamxqN9wXHu881Jxx77sNsoiTeRdnNNWsUx9QzUu8/viewform"],
  ["Robo Maze", "Group C & D (VI-XII)", "31 Oct", "https://docs.google.com/forms/d/1UNDRM4-E-jRxg_YWUlKRHI0wSElhih7mdOUKO_Wyel8/viewform"],
  ["Dance Drama", "Group dance (VI-XII): Patriotic · Solo dance (I-V): Festivals of India", "31 Oct", "https://docs.google.com/forms/d/1XLEtFVfPQV0i5bP2-3WHRvGWu8-4jD083TZo74ifz0c/viewform"],
  ["Volleyball", "Under-16 Girls, Group C & D (VI-XII)", "31 Oct", "https://docs.google.com/forms/d/1YeukZJeVuJU0NodhXms1NUx3lb2tKpjt5atZ3HOsDlA/viewform"],
];

export function MindsparkSection() {
  return (
    <section className="mt-6">
      <SectionBanner
        title="Mindspark — the inter-school festival"
        subtitle="Brighton's annual inter-school event since 2014-15: literary, cultural, craft, fine arts and sports competitions, and a platform to discover and refine hidden skills."
        tone="dark"
      />
      <div className="card-shell mt-3 p-6 md:p-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-highlight">Mindspark 2026-27</p>
            <h3 className="font-display text-2xl text-primary">30 – 31 October 2026</h3>
          </div>
          <p className="rounded-full bg-coral px-4 py-1.5 text-sm text-coral-foreground">Last date to register: 24 October 2026</p>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          The school with the highest total points across all events is honoured as the Champion School.
        </p>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="py-2 pr-4">Competition</th>
                <th className="py-2 pr-4">Category</th>
                <th className="py-2 pr-4">Date</th>
                <th className="py-2">Register</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map(([c, g, d, form]) => (
                <tr key={c} className="border-t border-border">
                  <td className="py-2.5 pr-4 font-display">{c}</td>
                  <td className="py-2.5 pr-4 text-muted-foreground">{g}</td>
                  <td className="py-2.5 whitespace-nowrap pr-4">{d}</td>
                  <td className="py-2.5 whitespace-nowrap">
                    <a href={form} target="_blank" rel="noreferrer" className="text-primary underline-offset-2 hover:underline">
                      Register here
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <a
          href="/files/2026/09/2026-27-MINDSPARK_Brighton-International-School.pdf"
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-block rounded-full bg-primary px-6 py-3 font-display text-primary-foreground"
        >
          Mindspark brochure
        </a>
      </div>
      <div className="mt-4">
        <VideoGrid
          cols={2}
          videos={[
            { id: "KiVwooBAObU", title: "MindSpark 2025 – Brighton's Annual InterSchool Festival" },
            { id: "L-FxBAtxGaw", title: "Glimpses of MindSpark – The Interschool Competition 2024-25" },
          ]}
        />
      </div>
    </section>
  );
}

export function EventVideos() {
  return (
    <>
      <section className="mt-6">
        <SectionBanner title="Sparkles — the biennial function" subtitle="Brighton's annual showcase on stage." />
        <div className="mt-3">
          <VideoGrid
            videos={[
              { id: "4dSs2nGovVc", title: "Brighton Sparkles '26 – Biennial Function" },
              { id: "QpIWMJi__ek", title: "Sparkles 2023: Shloka Gayan" },
              { id: "jBrecM5dWl0", title: "Sparkles 2023: Eid (Sufi)" },
            ]}
          />
        </div>
      </section>
      <section className="mt-6">
        <SectionBanner title="More from the year" />
        <div className="mt-3">
          <VideoGrid
            videos={[
              { id: "0nAIR2WnRqs", title: "Graduation Day 2024-25 Highlights" },
              { id: "cpKu3NrHJQA", title: "New Youth Parliament Scheme 2022-23" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
