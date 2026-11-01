import { createFileRoute } from "@tanstack/react-router";
import { Bus, GraduationCap, HeartPulse, PiggyBank, Users } from "lucide-react";
import { meta } from "@/components/TabNav";
import { PageHeader } from "@/components/SiteLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import office from "@/assets/school/office-meeting.jpg";

export const Route = createFileRoute("/about/careers")({
  head: () =>
    meta(
      "Work at Brighton — Careers",
      "Teach at Brighton International School, Raipur: health insurance, PF & ESIC, free transport, subsidised fees for staff children and classes capped at 30.",
    ),
  component: Careers,
});

const perks = [
  { icon: HeartPulse, t: "Health insurance", b: "A minimum Rs 2 lakh health insurance cover" },
  { icon: PiggyBank, t: "PF & ESIC", b: "Mandatory Provident Fund and ESIC contribution" },
  { icon: Bus, t: "Free transport", b: "Free conveyance from your residence to school" },
  { icon: GraduationCap, t: "Your children", b: "Heavily subsidised school fee, zero bus fee and zero admission fee" },
  { icon: Users, t: "Manageable workload", b: "Only 26 classes a week, with a maximum of 30 students per class" },
];

const roles = [
  {
    r: "PRT – Primary Teacher",
    q: [
      "Senior Secondary (10+2) or equivalent with at least 50% marks; a Bachelor's degree preferred in relevant subjects.",
      "D.El.Ed., B.El.Ed., or B.Ed. with a focus on primary education (as per NCTE guidelines).",
    ],
  },
  {
    r: "TGT – Middle School",
    q: [
      "A Bachelor's degree in the relevant subject(s) with at least 50% marks — e.g. BA English for TGT English, BSc Mathematics (or Physics, Statistics) for TGT Maths, BSc Physics, Chemistry or Biology for TGT Science.",
      "B.Ed. with the subject combination being taught.",
    ],
  },
  {
    r: "PGT – Secondary & Higher Secondary",
    q: [
      "A postgraduate degree in the relevant subject with at least 50% marks — e.g. MA English, MSc Mathematics or Applied Mathematics, MSc Physics, MA/MSc Economics, MA/MSc Psychology.",
      "B.Ed. or equivalent with the subject of specialisation.",
    ],
  },
];

function Careers() {
  return (
    <>
      <PageHeader
        eyebrow="Jobs@Brighton"
        title="We are always looking for the Bright ones"
        intro="Brighton is always seeking passionate educators who bring fresh perspectives to teaching — a vibrant work environment, inspiring colleagues and top-notch facilities."
      />

      <section className="mt-6 rounded-[1.75rem] bg-primary px-7 py-10 text-primary-foreground md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">Apply</p>
        <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-6xl">Email your CV</h2>
        <a
          href="mailto:jobs@brightoninternational.in"
          className="mt-3 block font-display text-2xl font-bold text-coral underline decoration-coral/40 underline-offset-4 hover:decoration-coral md:text-4xl"
        >
          jobs@brightoninternational.in
        </a>
        <p className="mt-5 max-w-2xl text-base text-primary-foreground/85">
          If you wish to be considered for any vacancies opening up at Brighton International School, Raipur, kindly
          send your CV to this address.
        </p>
      </section>

      <section className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {perks.map((p) => (
          <div key={p.t} className="card-shell p-5">
            <span className="grid size-10 place-items-center rounded-xl bg-blush text-primary">
              <p.icon className="size-5" />
            </span>
            <p className="mt-3 font-display text-lg leading-tight">{p.t}</p>
            <p className="mt-1 text-sm text-muted-foreground">{p.b}</p>
          </div>
        ))}
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <div className="card-shell p-7">
          <h2 className="font-display text-2xl text-primary">Qualifications</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            We look for candidates who have the requisite degree for the subject and grade they apply for, a great
            command of English, and preferably experience.
          </p>
          <div className="mt-4">
            <Accordion type="single" collapsible defaultValue="r0">
              {roles.map((r, i) => (
                <AccordionItem key={r.r} value={`r${i}`}>
                  <AccordionTrigger>{r.r}</AccordionTrigger>
                  <AccordionContent>
                    <ol className="list-decimal space-y-1.5 pl-5">
                      <li><b>Educational:</b> {r.q[0]}</li>
                      <li><b>Professional:</b> {r.q[1]}</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <img
            src={office}
            alt="A teacher meeting students in a Brighton office"
            width={1600}
            height={1067}
            className="aspect-[3/2] w-full rounded-[1.75rem] object-cover object-center"
          />
          <div className="rounded-[1.75rem] bg-primary p-7 text-primary-foreground">
            <h2 className="font-display text-2xl">Work hours</h2>
            <p className="mt-1 text-sm text-primary-foreground/80">Monday – Saturday</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>7:30 am – 1:00 pm · Class VI – XII</li>
              <li>9:30 am – 1:00 pm · Nursery – KG II</li>
              <li>9:30 am – 3:00 pm · Class I – V</li>
            </ul>
          </div>
          <blockquote className="card-shell p-7 text-sm text-muted-foreground">
            "At Brighton International School we believe that magic happens to those who believe. We invite people who
            are looking to learn and grow, who are ready to sow the seeds of joy and harvest a crop of faces full of
            curiosity, wonder and amazement."
            <footer className="mt-3 font-display text-foreground">Mrs Jayshree Nair, Principal</footer>
          </blockquote>
        </div>
      </section>

      <section className="card-shell mt-6 p-7">
        <h2 className="font-display text-2xl text-primary">Salary</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The salary is at par with industry standards and is based on the candidate and their work experience.
        </p>
      </section>
    </>
  );
}
