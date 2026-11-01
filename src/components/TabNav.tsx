import { Link } from "@tanstack/react-router";

export type Tab = { to: string; label: string; exact?: boolean };

export function TabNav({ tabs }: { tabs: readonly Tab[] }) {
  return (
    <nav className="sticky top-0 z-40 -mx-2 mb-4 flex gap-2 overflow-x-auto rounded-full bg-background/85 px-2 py-2 backdrop-blur">
      {tabs.map((t) => (
        <Link
          key={t.to}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          to={t.to as any}
          activeOptions={{ exact: t.exact ?? true }}
          className="shrink-0 whitespace-nowrap rounded-full border border-border bg-card px-5 py-2 font-display text-sm transition-colors hover:bg-blush data-[status=active]:border-primary data-[status=active]:bg-primary data-[status=active]:text-primary-foreground"
        >
          {t.label}
        </Link>
      ))}
    </nav>
  );
}

export function InfoCard({ title, body, tag }: { title: string; body: string; tag?: string }) {
  return (
    <article className="card-shell p-7">
      {tag && <p className="text-xs font-semibold uppercase tracking-wider text-highlight">{tag}</p>}
      <h3 className="mt-1 font-display text-xl">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </article>
  );
}

export function Banner({
  eyebrow,
  title,
  intro,
  img,
  objectPosition = "center",
  frame = "aspect-[4/5] md:aspect-[3/2]",
  align = "center",
}: {
  eyebrow: string;
  title: string;
  intro: string;
  img?: string;
  objectPosition?: string;
  frame?: string;
  align?: "center" | "start";
}) {
  if (!img) {
    return (
      <section className="rounded-[1.75rem] bg-primary px-8 py-16 text-primary-foreground md:px-12 md:py-20">
        <div className="max-w-2xl">
          <p className="font-display text-sm uppercase tracking-widest text-coral">{eyebrow}</p>
          <h1 className="mt-3 font-display text-4xl leading-tight md:text-5xl">{title}</h1>
          <p className="mt-4 text-primary-foreground/85">{intro}</p>
        </div>
      </section>
    );
  }
  return (
    <section className="relative overflow-hidden rounded-[1.75rem]">
      <img
        src={img}
        alt=""
        width={1600}
        height={1067}
        className={`w-full object-cover ${frame}`}
        style={{ objectPosition }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent/60 to-transparent" />
      <div
        className={`absolute inset-0 flex max-w-2xl flex-col px-8 text-primary-foreground md:px-12 ${
          align === "start" ? "justify-start py-6 md:py-8" : "justify-center py-10"
        }`}
      >
        <p className="font-display text-sm uppercase tracking-widest text-coral">{eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl leading-tight md:text-5xl">{title}</h1>
        <p className="mt-4 text-primary-foreground/85">{intro}</p>
      </div>
    </section>
  );
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title: `${title} | Brighton International School, Raipur` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} — Brighton International School` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
