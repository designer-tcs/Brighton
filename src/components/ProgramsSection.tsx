import { Link } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { PhotoSlot } from "@/components/PhotoSlot";
import prePrimary from "@/assets/prog-pre-primary.jpg";
import primary from "@/assets/prog-middle.jpg";
import middle from "@/assets/middle-science-model.jpg";
import secondary from "@/assets/secondary-study.jpg";
import seniorSecondary from "@/assets/prog-secondary.jpg";

const programs: {
  title: string;
  grades: string;
  body: string;
  image?: string;
  alt: string;
  cta: string;
  to:
    | "/curriculum"
    | "/curriculum/primary"
    | "/curriculum/middle"
    | "/curriculum/secondary"
    | "/curriculum/senior-secondary";
  position?: string;
}[] = [
  {
    title: "Pre-Primary",
    grades: "Nursery to UKG",
    body: "A warm, nurturing start where children learn to speak up, share, and try again — curiosity and confidence as the first life skills.",
    image: prePrimary,
    alt: "Two pre-primary girls in Brighton uniform working at a table",
    cta: "Discover Pre-Primary",
    to: "/curriculum",
  },
  {
    title: "Primary",
    grades: "Class 1 to 5",
    body: "Strong fundamentals built through hands-on learning, so reading, reasoning and listening become habits for life.",
    image: primary,
    alt: "Students working at computers",
    cta: "Discover Primary",
    to: "/curriculum/primary",
    position: "object-[center_42%]",
  },
  {
    title: "Middle",
    grades: "Class 6 to 8",
    body: "Independent thinking, teamwork and problem-solving — students design, build and explain their own work.",
    image: middle,
    alt: "A girl in a light blue Brighton shirt and glasses building a stick-and-ball science model",
    cta: "Discover Middle",
    to: "/curriculum/middle",
    position: "object-[68%_32%]",
  },
  {
    title: "Secondary",
    grades: "Class 9 to 10",
    body: "Board readiness paired with the skills that outlast an exam: research, time management and clear communication.",
    image: secondary,
    alt: "Secondary students in light blue shirts studying at a table, a girl with glasses in the center",
    cta: "Discover Secondary",
    to: "/curriculum/secondary",
    position: "object-[center_42%]",
  },
  {
    title: "Senior Secondary",
    grades: "Class 11 to 12",
    body: "Academic depth, career guidance and real-world readiness for Science, Commerce and Humanities streams.",
    image: seniorSecondary,
    alt: "A student in a lab coat working with glassware",
    cta: "Discover Senior Secondary",
    to: "/curriculum/senior-secondary",
    position: "object-[center_38%]",
  },
];

function PatternBand({ tone }: { tone: "dark" | "light" }) {
  const bars =
    tone === "dark"
      ? ["bg-primary/70", "bg-highlight", "bg-coral", "bg-highlight", "bg-primary/70", "bg-primary/40"]
      : ["bg-primary", "bg-coral", "bg-primary", "bg-coral", "bg-primary", "bg-coral"];

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

export function ProgramsSection() {
  return (
    <>
      <section className="relative mt-4 overflow-hidden rounded-[1.75rem] bg-primary px-7 py-6 text-primary-foreground md:px-9">
        <PatternBand tone="dark" />
        <div className="relative">
          <h2 className="max-w-sm font-display text-2xl md:text-3xl">
            Learn More Through Our Brochure
          </h2>
          <a
            href="/brighton-information-brochure.pdf"
            download="Brighton-Information-Brochure.pdf"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-2.5 font-display text-coral-foreground transition-opacity hover:opacity-90"
          >
            <Download className="size-4" /> Download Brochure
          </a>
        </div>
      </section>

      <section className="mt-3">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-blush px-7 py-6 md:px-9">
          <PatternBand tone="light" />
          <div className="relative">
            <h2 className="max-w-sm font-display text-2xl text-primary md:text-3xl">
              Programs Offered at Brighton
            </h2>
            <p className="mt-1.5 max-w-md text-sm text-muted-foreground">
              A strong foundation for every stage. A brighter tomorrow.
            </p>
          </div>
        </div>

        <div className="mt-3 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <article
              key={p.title}
              className="card-shell flex flex-col overflow-hidden border border-border"
            >
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  width={1600}
                  height={1067}
                  className={`aspect-[3/2] w-full object-cover ${p.position ?? "object-center"}`}
                />
              ) : (
                <PhotoSlot label={`${p.title} photo`} className="aspect-[3/2] rounded-none" />
              )}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="border-b border-border pb-3 font-display text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm font-semibold">{p.grades}</p>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.body}</p>
                <Link
                  to={p.to}
                  className="mt-5 w-fit rounded-full bg-coral px-5 py-2.5 font-display text-coral-foreground transition-opacity hover:opacity-90"
                >
                  {p.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
