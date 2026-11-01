import { createFileRoute } from "@tanstack/react-router";
import { meta } from "@/components/TabNav";
import { PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/about/board")({
  head: () =>
    meta("Board of Advisors", "The professionals from media, marketing, technology and education who guide Brighton International School, Raipur."),
  component: Board,
});

const board: [string, string, string][] = [
  ["Mr Manav Dhanda", "Media", "Runs his own startup; formerly Group CEO of Shri Adhikari Brothers, Network Programming Head at BIG FM and COO at WorldBand Media in the US. Nearly 17 years in media."],
  ["Mrs Parul Tyagi", "Marketing & early childhood", "Economics (Hons), University of Delhi, and MBA, MICA. Over 11 years with Times of India, Greenpeace International and now Google India. Author of two novels, with a keen interest in early childhood learning."],
  ["Mr Vineet Jain", "Marketing", "General Manager, Marketing, India at Dabur in Dubai; earlier with SAB Miller and ITC. Alumnus of IIM Calcutta and NIT Raipur."],
  ["Mr Akshay Puri", "Technology", "Marketing professional in IT with Cognizant in London; has worked with IBM, Ericsson and Accenture. Believes real education happens outside the classroom. MICA and St. Stephen's alumnus."],
  ["Dr Dhirendra Mishra", "Education", "A teacher for 10 years across CBSE, ICSE, CIE and IB, including Good Shepherd International School, Ooty. Doctorate in Business Management; CBSE teacher trainer who has trained over 2500 teachers."],
  ["Mr Harish Jain", "HR & entrepreneurship", "Founder of Green Rootz Manpower Consulting in Mumbai and gomediajobs.com. MICA alumnus and keen photographer."],
];

function Board() {
  return (
    <>
      <PageHeader
        eyebrow="Board of Advisors"
        title="The think tank"
        intro="Our advisors meet the management regularly, formally and informally, helping Brighton keep growing."
      />
      <section className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {board.map(([n, f, b]) => (
          <article key={n} className="card-shell p-7">
            <span className="grid size-12 place-items-center rounded-full bg-primary font-display text-lg text-primary-foreground">
              {n.split(" ").slice(1).map((w) => w[0]).join("")}
            </span>
            <h3 className="mt-4 font-display text-xl">{n}</h3>
            <p className="text-xs font-semibold uppercase tracking-wider text-highlight">{f}</p>
            <p className="mt-2 text-sm text-muted-foreground">{b}</p>
          </article>
        ))}
      </section>
    </>
  );
}
