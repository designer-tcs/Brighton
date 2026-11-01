import assembly from "@/assets/prog-senior.jpg";

const reasons = [
  {
    n: "01",
    title: "Students per Class",
    body: "Never more than 30 children in a section, so no one gets lost.",
  },
  {
    n: "02",
    title: "Learning by doing",
    body: "No grammar books, no computer textbook. Children code in Scratch and Python and build with LEGO and Arduino.",
  },
  {
    n: "03",
    title: "Life skills, on the timetable",
    body: "Brighton Kindle builds confidence, speaking and character from the early years.",
  },
  {
    n: "04",
    title: "Results that hold up",
    body: "100% pass in both Class X and Class XII board exams, year on year",
  },
  {
    n: "05",
    title: "Unique Pedagogy",
    body: "No two students write the same answers, independent thinkers",
  },
  {
    n: "06",
    title: "Safe from gate to gate",
    body: "GPS-tracked buses with CCTV and lady attendants, and a nurse on secure campus.",
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

export function DifferenceSection() {
  return (
    <section className="mt-6">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-primary px-7 py-6 text-primary-foreground md:px-9">
        <PatternBand />
        <div className="relative">
          <h2 className="max-w-xl font-display text-2xl md:text-4xl">The Brighton Difference</h2>
          <p className="mt-2 max-w-xl font-display text-xl md:text-2xl">
            Six reasons parents <span className="italic text-coral">choose us</span>
          </p>
        </div>
      </div>

      <img
        src={assembly}
        alt="Morning assembly in the courtyard"
        loading="lazy"
        width={1600}
        height={1067}
        className="mt-3 aspect-[3/2] w-full rounded-[1.75rem] object-cover"
      />

      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason) => (
          <article key={reason.n} className="card-shell flex flex-col overflow-hidden border border-border">
            <div className="p-7">
              <p className="font-display text-3xl italic leading-none text-primary">{reason.n}</p>
              <h3 className="mt-2 font-display text-2xl">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.body}</p>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-6 font-display text-xl italic text-primary md:text-2xl">
        The best way to judge a school is to walk through it. Come and see us.
      </p>
    </section>
  );
}
