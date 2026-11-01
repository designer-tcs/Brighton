import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What curriculum does Brighton International School follow?",
    a: "Brighton follows the CBSE curriculum (Affiliation No. 3330153) from Nursery to Class XII, taught through projects, discussion and hands-on work rather than rote learning.",
  },
  {
    q: "Which classes does the school offer admission to?",
    a: "We admit students from Nursery through Class XII across Pre-Primary, Primary, Middle, Secondary and Senior Secondary stages.",
  },
  {
    q: "What makes Brighton's approach different?",
    a: "We do not run an activity unless it builds a life skill. Communication, collaboration, critical thinking and resilience are timetabled, taught and assessed — not left to chance.",
  },
  {
    q: "Where is the campus and how big is it?",
    a: "The school sits on an 8-acre green campus at Nardaha, Baloda Bazar Road, Raipur, with open lawns, sports courts and air-conditioned classrooms.",
  },
  {
    q: "Does the school have a science and innovation lab?",
    a: "Yes. Our Atal Tinkering Lab lets students turn ideas into circuits, code and working prototypes alongside regular science labs.",
  },
  {
    q: "What sports and activities are available?",
    a: "Basketball, cricket, athletics, music, theatre, robotics and debate, along with house competitions and the Brighton Lecture Series.",
  },
  {
    q: "Is transport available?",
    a: "School transport covers key routes across Raipur. Please contact the school office for the current route list and fees.",
  },
  {
    q: "How do I apply for admission?",
    a: "Start with the admissions page or book a campus visit — we will walk you through the form, documents and interaction process for Session 2026-27.",
  },
];

function PatternBand() {
  const bars = ["bg-primary", "bg-coral", "bg-primary/70", "bg-coral", "bg-primary", "bg-primary/80"];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 hidden w-[34%] overflow-hidden md:flex">
      {bars.map((bar, i) => (
        <div key={i} className="flex flex-1 items-stretch gap-1.5 px-1">
          <span className={`flex-1 -skew-x-12 rounded-sm ${bar}`} />
          <span className={`flex-1 skew-x-12 rounded-sm ${bar} opacity-70`} />
        </div>
      ))}
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="mt-6">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-blush px-7 py-6 md:px-9">
        <PatternBand />
        <div className="relative">
          <h2 className="font-display text-2xl text-primary md:text-3xl">Frequently Asked Questions</h2>
        </div>
      </div>

      <div className="mt-3 rounded-[1.75rem] border border-border p-4 md:p-6">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
