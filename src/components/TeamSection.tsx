import principal from "@/assets/jayshree-nair.png";
import vicePrincipal from "@/assets/neha-sethi.png";
import headMistress from "@/assets/asha-sharma.png";
import chairman from "@/assets/rp-singh.png";
import managingDirector from "@/assets/abhiney-singh.png";

const members = [
  { name: "Mrs Jayshree Nair", role: "Principal", image: principal },
  { name: "Mrs Neha Sethi", role: "Vice Principal", image: vicePrincipal },
  { name: "Mrs Asha Sharma", role: "Head Mistress", image: headMistress },
  { name: "Mr R P Singh", role: "Chairman", image: chairman },
  { name: "Mr Abhiney Singh", role: "Managing Director", image: managingDirector },
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

export function TeamSection() {
  return (
    <section className="mt-6">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-primary px-7 py-6 text-primary-foreground md:px-9">
        <PatternBand />
        <div className="relative">
          <h2 className="max-w-sm font-display text-2xl md:text-3xl">The people who lead Brighton</h2>
          <p className="mt-1.5 max-w-md text-sm text-primary-foreground/85">
            Principal, Vice Principal and Head Mistress, then the Chairman and Managing Director.
          </p>
        </div>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((m) => (
          <article key={m.name} className="card-shell border border-border p-4">
            <img
              src={m.image}
              alt={`${m.name}, ${m.role}`}
              loading="lazy"
              width={179}
              height={250}
              className="aspect-[3/4] w-full rounded-2xl object-cover object-top"
            />
            <h3 className="mt-4 font-display text-xl">{m.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
