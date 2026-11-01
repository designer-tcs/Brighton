import { YouTubeCard } from "@/components/YouTubeCard";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Mail, MapPin, Phone, Star } from "lucide-react";
import { SectionBanner } from "@/components/SectionBanner";
import { AdmissionFlowInfographic } from "@/components/AdmissionFlowInfographic";
import { BestResults } from "@/components/admissions/BestResults";
import { BestGuide } from "@/components/admissions/BestGuide";
import { classOptions, Field, inputClass, Td, Th } from "@/components/admissions/ui";
import admissionsHero from "@/assets/school/campus-gate.jpg";
import { WhatYourChildWalksInto } from "@/components/story/BrightonStory";

export const Route = createFileRoute("/admissions/")({
  head: () => ({
    meta: [
      { title: "Admission at Brighton International School, Raipur | 2027-28" },
      {
        name: "description",
        content:
          "Admission process, BEST entrance test, Class XI streams, documents required and Annual Open House details for Brighton International School, Raipur.",
      },
      { property: "og:title", content: "Admission at Brighton International School, Raipur" },
      {
        property: "og:description",
        content:
          "Apply for Nursery to Class XII at Brighton International School, Raipur — process, test, documents and open house in one place.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdmissionsIndex,
});

const testTable = [
  { cls: "Nursery to KG II", test: "Oral", format: "A friendly interaction" },
  { cls: "Class I and onwards", test: "BEST and an interview", format: "Online as well as offline" },
  {
    cls: "Class XI",
    test: "Written test and an interaction",
    format: "After the Class X board results, selection is on the mark sheet. Before the results, a student may also take BEST.",
  },
];

const streams = [
  {
    title: "Science Maths",
    body: "English, Mathematics, Physics, Chemistry. Fifth subject: Physical Education, Informatics Practices or Psychology.",
  },
  {
    title: "Science Biology",
    body: "English, Biology, Physics, Chemistry. Fifth subject: Physical Education, Informatics Practices or Psychology.",
  },
  {
    title: "Commerce",
    body: "English, Accountancy, Business Studies, Economics. Fifth subject from the electives offered that year.",
  },
  {
    title: "Higher Secondary Business Administration",
    body: "English, Financial Market Management, and Business Studies or Business Administration. Plus Entrepreneurship, Economics or Psychology, and one of Physical Education, Informatics Practices, Legal Studies, Applied Maths or Marketing.",
  },
  {
    title: "Humanities",
    body: "English, Political Science, Geography. Plus Entrepreneurship, Economics or Psychology, and one of Physical Education, Applied Maths, Marketing or Legal Studies.",
  },
];

const documents = [
  "Report card or passing certificate of the last class attended (when changing schools)",
  "Aadhaar card of the child",
  "Birth certificate (for fresh admission in Nursery or KG I)",
  "Transfer Certificate (TC)*",
  "Migration Certificate, if mandated by law",
];

function AdmissionsIndex() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden rounded-[1.75rem]">
        <img
          src={admissionsHero}
          alt="The Brighton entrance, with the school name above the doors"
          width={1600}
          height={1067}
          className="aspect-[3/2] w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/55 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center gap-4 p-7 md:p-14">
          <p className="nav-index text-background/70">Admissions</p>
          <h1 className="max-w-2xl font-display text-4xl leading-[1.02] text-background md:text-6xl">
            Admission at <span className="text-coral">Brighton</span>
          </h1>
          <p className="max-w-xl font-display text-lg text-coral md:text-2xl">
            We welcome you to our campus and to the Brighton community.
          </p>
          <ul className="space-y-1.5 text-background/90">
            <li className="flex items-center gap-2">
              <Star className="size-4" /> Nursery to Class XII · Session 2027–28
            </li>
            <li className="flex items-center gap-2">
              <CalendarDays className="size-4" /> Applications open every 1 November
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4" /> Nardaha, Baloda Bazar Road, Raipur
            </li>
          </ul>
          <a
            href="#apply"
            className="mt-2 w-fit rounded-full border border-background/60 bg-background/15 px-7 py-3 font-display text-lg text-background backdrop-blur transition-colors hover:bg-background/25"
          >
            Apply for Admission
          </a>
        </div>
      </section>

      <WhatYourChildWalksInto />

      {/* Apply form */}
      <section className="mt-4 grid gap-4 lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <YouTubeCard id="EeMwICND6So" title="Why Parents Choose Brighton International School Raipur" />
        <div className="card-shell p-7">
          <h2 className="font-display text-2xl text-primary">Hear it from parents</h2>
          <p className="mt-2 text-sm text-muted-foreground">Brighton families share their experience in their own words.</p>
          <Link to="/admissions/parents-speak" className="mt-4 inline-block rounded-full bg-coral px-5 py-2.5 font-display text-coral-foreground">
            Parents Speak
          </Link>
        </div>
      </section>

      <section id="apply" className="mt-4">
        <SectionBanner
          title="Apply for Admission"
          subtitle="Tell us a little about your child and our admissions team will get back to you."
          tone="dark"
        />
        <form
          className="card-shell mt-3 border border-border p-7 md:p-9"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Your name">
              <input required className={inputClass} />
            </Field>
            <Field label="Your contact number">
              <input required type="tel" className={inputClass} />
            </Field>
            <Field label="Email">
              <input type="email" className={inputClass} />
            </Field>
            <Field label="I am looking for admission in">
              <select className={inputClass} defaultValue="">
                <option value="" disabled>
                  Please choose an option
                </option>
                {classOptions.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Any special request" wide>
              <textarea rows={4} className={inputClass} />
            </Field>
          </div>
          <button
            type="submit"
            className="mt-6 rounded-full bg-coral px-7 py-3 font-display text-lg text-coral-foreground transition-opacity hover:opacity-90"
          >
            Submit enquiry
          </button>
          <p className="mt-3 text-xs text-muted-foreground">
            This form is not connected yet — call +91 999 3466 111 to reach admissions today.
          </p>
        </form>
      </section>

      {/* Procedure */}
      <section className="mt-6">
        <SectionBanner
          title="The Admission Procedure"
          subtitle="Online or offline, the steps are the same — and every one of them is about knowing your child better."
        />
        <div className="mt-3">
          <AdmissionFlowInfographic />
        </div>

        <div className="card-shell mt-3 border border-border p-7">
          <h3 className="font-display text-xl">Age</h3>
          <ul className="mt-3 grid gap-2 text-sm">
            <li className="rounded-2xl bg-surface-2/60 px-4 py-3">
              The age for Nursery is 3½ years as on 31 July of the year of admission.
            </li>
            <li className="rounded-2xl bg-surface-2/60 px-4 py-3">
              All valid applications — meeting the age criteria, and complete in all respects — are considered for admission.
            </li>
          </ul>
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-[1.3fr_1fr]">
          <div className="card-shell overflow-hidden border border-border">
            <div className="p-7 pb-4">
              <h3 className="font-display text-xl">How students are assessed</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Admission is based on performance in the admission test and the interaction that
                follows.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-surface-2/60">
                  <tr>
                    <Th>Class</Th>
                    <Th>Test</Th>
                    <Th>Format</Th>
                  </tr>
                </thead>
                <tbody>
                  {testTable.map((r) => (
                    <tr key={r.cls}>
                      <Td>{r.cls}</Td>
                      <Td>{r.test}</Td>
                      <Td>{r.format}</Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card-shell border border-border p-7">
            <h3 className="font-display text-xl">Brighton Entrance Scholastic Test (BEST)</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Students of Class I and above register for BEST, which can be taken online or at
              school. It looks at how a child thinks and reasons, not how much they have memorised.
            </p>
            <a
              href="https://pgpay.icici.bank.in/pg/portal/pay/initiatePayOrder?merchantID=100000000543884"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-full bg-primary px-6 py-2.5 font-display text-primary-foreground transition-opacity hover:opacity-90"
            >
              Register for BEST
            </a>
          </div>
        </div>
      </section>

      {/* BEST results */}
      <section className="mt-6">
        <SectionBanner
          title="Brighton Entrance Scholastic Test"
          subtitle="Results will be listed here once they are out."
          tone="dark"
        />
        <div className="mt-3">
          <BestResults />
        </div>
      </section>

      <BestGuide />

      {/* Class XI streams */}
      <section className="mt-6">
        <SectionBanner
          title="Subjects on Offer in Class XI"
          subtitle="Heroes are made by the paths they choose, not the powers they are graced with. We are our choices — make the right one."
        />
        <div className="mt-3 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {streams.map((s) => (
            <article key={s.title} className="card-shell flex flex-col border border-border p-7">
              <h3 className="border-b border-border pb-3 font-display text-xl">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Documents */}
      <section className="mt-6">
        <SectionBanner
          title="Documents Required"
          subtitle="Keep these ready to make confirmation quick and painless."
        />
        <div className="card-shell mt-3 border border-border p-7 md:p-9">
          <ul className="grid gap-3 md:grid-cols-2">
            {documents.map((d, i) => (
              <li key={d} className="flex gap-3 rounded-2xl bg-surface-2/60 p-4 text-sm">
                <span className="nav-index shrink-0 pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">
            *A Transfer Certificate is not required if the child is attending school for the first
            time.
          </p>
        </div>
      </section>

      <section className="mt-6">
        <SectionBanner
          title="Annual Open House"
          subtitle="On the day of the BEST."
          tone="dark"
        />
        <div className="card-shell mt-3 border border-border p-7 md:p-9">
          <div className="max-w-3xl space-y-3 text-sm text-muted-foreground">
            <p>
              Come to our Open House on the day of the BEST (Brighton Entrance Scholastic Test). It is
              designed to give you a comprehensive insight into what makes our school a unique and
              nurturing environment for your child’s education.
            </p>
            <p>
              During the Open House, you will have the opportunity to learn more about our admission
              process, explore our state-of-the-art infrastructure, and understand our student code of
              conduct. We will also provide you with an overview of the wide range of facilities we offer
              to support your child’s academic and extracurricular development.
            </p>
            <p>
              Our dedicated team will guide you on a personalized tour of our campus, showcasing the
              vibrant learning spaces, sports facilities, and recreational areas. You will also have the
              chance to meet and interact with our Principal and Headmaster, who will be available to
              answer any questions you may have.
            </p>
            <p>
              Additionally, detailed information about our fee structure will be shared, ensuring
              transparency and clarity as you consider joining our school community.
            </p>
            <p>
              We look forward to welcoming you and sharing what makes Brighton International School,
              Raipur a place where your child can thrive.
            </p>
          </div>
          <a
            href="https://pgpay.icici.bank.in/pg/portal/pay/initiatePayOrder?merchantID=100000000543884"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-primary px-6 py-2.5 font-display text-primary-foreground transition-opacity hover:opacity-90"
          >
            Register for BEST — Admission Test
          </a>
          <p className="mt-3 text-sm text-muted-foreground">Registration fee — Rs 1,500</p>
        </div>
      </section>

      {/* Contact */}
      <section className="mt-6">
        <SectionBanner
          title="Talk to Admissions"
          subtitle="The admission process opens on 1 November each year, and seats fill first come, first serve."
        />
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          <a
            href="tel:+919993466111"
            className="card-shell flex items-center gap-3 border border-border p-7 font-display text-lg"
          >
            <Phone className="size-5 text-primary" /> +91 999 3466 111
          </a>
          <a
            href="mailto:info@brightoninternational.in"
            className="card-shell flex items-center gap-3 border border-border p-7 font-display text-lg"
          >
            <Mail className="size-5 text-primary" /> info@brightoninternational.in
          </a>
          <Link
            to="/contact"
            className="flex items-center gap-3 rounded-[1.75rem] bg-coral p-7 font-display text-lg text-coral-foreground transition-opacity hover:opacity-90"
          >
            <MapPin className="size-5" /> Book a campus visit
          </Link>
        </div>
      </section>
    </>
  );
}
