import type { ReactNode } from "react";

function PatternBand({ tone }: { tone: "dark" | "light" }) {
  const bars =
    tone === "dark"
      ? [
          "bg-primary/70",
          "bg-highlight",
          "bg-coral",
          "bg-highlight",
          "bg-primary/70",
          "bg-primary/40",
        ]
      : ["bg-primary", "bg-coral", "bg-primary", "bg-coral", "bg-primary", "bg-coral"];

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 right-0 hidden w-[34%] overflow-hidden md:flex"
    >
      {bars.map((bar, i) => (
        <div key={i} className="flex flex-1 items-stretch gap-1.5 px-1">
          <span className={`flex-1 -skew-x-12 rounded-sm ${bar}`} />
          <span className={`flex-1 skew-x-12 rounded-sm ${bar} opacity-70`} />
        </div>
      ))}
    </div>
  );
}

export function SectionBanner({
  title,
  subtitle,
  tone = "light",
  children,
}: {
  title: string;
  subtitle?: string;
  tone?: "dark" | "light";
  children?: ReactNode;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`relative overflow-hidden rounded-[1.75rem] px-7 py-6 md:px-9 ${
        dark ? "bg-primary text-primary-foreground" : "bg-blush"
      }`}
    >
      <PatternBand tone={dark ? "dark" : "light"} />
      <div className="relative">
        <h2 className={`max-w-lg font-display text-2xl md:text-3xl ${dark ? "" : "text-primary"}`}>
          {title}
        </h2>
        {subtitle ? (
          <p
            className={`mt-1.5 max-w-md text-sm ${
              dark ? "text-primary-foreground/85" : "text-muted-foreground"
            }`}
          >
            {subtitle}
          </p>
        ) : null}
        {children ? <div className="mt-4">{children}</div> : null}
      </div>
    </div>
  );
}
