import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionBanner } from "@/components/SectionBanner";

export const Route = createFileRoute("/admissions/code-of-conduct")({
  head: () => ({
    meta: [
      { title: "Code of Conduct | Brighton International School, Raipur" },
      {
        name: "description",
        content:
          "Dress code, electronics and internet use, academic integrity, respect and safety, and disciplinary responses in the Brighton International School code of conduct.",
      },
      { property: "og:title", content: "Student Code of Conduct — Brighton International School" },
      {
        property: "og:description",
        content:
          "What students and parents agree to on joining Brighton International School, Raipur.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CodeOfConductPage,
});

const conductGroups = [
  {
    title: "Dress code & turnout",
    points: [
      "Prescribed school uniform for classes — details are in the school almanac.",
      "For trips and while representing the school in the city or outstation, dress as indicated by school authorities.",
      "Hairstyles are to follow the norms laid down by the school.",
      "Neatness and modesty at all times, in keeping with local sensibilities.",
    ],
  },
  {
    title: "Electronics & internet use",
    points: [
      "Mobiles, laptops, cameras and music players are not allowed on the premises during school hours without prior permission.",
      "Threatening messages, harassment and cyberbullying are treated as serious offences.",
      "Students may not photograph people at school or post about the school on social media without permission.",
    ],
  },
  {
    title: "Academic integrity",
    points: [
      "Plagiarism, missed submission deadlines and passing off another student's work as one's own invite consequences.",
      "Unfair means in examinations: both the student copying and the one aiding it are held responsible.",
      "Wilful destruction of another student's academic or non-academic work is a violation.",
    ],
  },
  {
    title: "Respect & safety",
    points: [
      "Zero tolerance for physical violence, bullying, intimidation, coercion and sexual harassment.",
      "Obscene or demeaning language, name-calling and profanity violate the code.",
      "Possession of weapons of any kind leads to immediate confiscation and expulsion.",
      "Vandalism, theft, defacing library books, littering and substance use are dealt with severely.",
    ],
  },
  {
    title: "Disciplinary responses",
    points: [
      "Counselling with a letter of apology, written self-reflection or community service.",
      "Forfeiting the right to represent the school or take part in house activities.",
      "Communication with and a meeting with parents.",
      "Suspension, withdrawal with permission to sit examinations, or expulsion in the most serious cases.",
    ],
  },
];

function CodeOfConductPage() {
  return (
    <section>
      <SectionBanner
        title="Code of Conduct"
        subtitle="On joining Brighton, students and parents read, understand and agree to the school's code."
        tone="dark"
      />
      <div className="card-shell mt-3 border border-border p-4 md:p-6">
        <Accordion type="single" collapsible className="w-full">
          {conductGroups.map((g, i) => (
            <AccordionItem key={g.title} value={`conduct-${i}`}>
              <AccordionTrigger className="text-left text-base">{g.title}</AccordionTrigger>
              <AccordionContent>
                <ul className="grid gap-2 text-sm text-muted-foreground">
                  {g.points.map((p) => (
                    <li key={p} className="rounded-xl bg-surface-2/60 px-4 py-2.5">
                      {p}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
