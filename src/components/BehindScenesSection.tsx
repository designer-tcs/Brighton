import { PhotoSlot } from "@/components/PhotoSlot";
import tinkering from "@/assets/school/middle-robots.jpg";
import makersFair from "@/assets/makers-fair.jpg";
import parentsYear from "@/assets/parents-year.jpg";

const videos: { title: string; body: string; label: string; image?: string }[] = [
  {
    title: "Build. Brand. Sell at the Brighton Makers Fair",
    body: "Students design, build and sell real products — creativity, problem-solving and enterprise learnt by doing.",
    label: "Makers fair — students with what they made",
    image: makersFair,
  },
  {
    title: "They built THIS in the Tinkering Lab?",
    body: "From idea to working model — see what students put together through teamwork and stubborn curiosity.",
    label: "Tinkering lab — students building a model",
    image: tinkering,
  },
  {
    title: "What parents said about their child's year",
    body: "Honest reflections from Brighton parents on growth, confidence and everyday life skills.",
    label: "Parents talking about the school year",
    image: parentsYear,
  },
];

function PatternBand() {
  const bars = ["bg-primary/70", "bg-highlight", "bg-coral", "bg-highlight", "bg-primary/70", "bg-primary/40"];
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

export function BehindScenesSection() {
  return (
    <section className="mt-6">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-primary px-7 py-6 text-primary-foreground md:px-9">
        <PatternBand />
        <div className="relative">
          <h2 className="max-w-sm font-display text-2xl md:text-3xl">Behind the Scenes</h2>
          <p className="mt-1.5 max-w-md text-sm text-primary-foreground/85">
            Step inside a Brighton day — unfiltered, hands-on and full of joy.
          </p>
        </div>
      </div>

      <div className="mt-3 grid gap-3 md:grid-cols-3">
        {videos.map((v) => (
          <article key={v.title} className="card-shell overflow-hidden border border-border">
            <PhotoSlot label={v.label} src={v.image} className="aspect-[3/2] rounded-none" />
            <div className="p-6">
              <h3 className="font-display text-lg leading-snug">{v.title}</h3>
              <hr className="my-4 border-border" />
              <p className="text-sm text-muted-foreground">{v.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
