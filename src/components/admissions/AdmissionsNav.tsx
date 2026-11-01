import { Link } from "@tanstack/react-router";

type NavLink = {
  to: "/admissions" | "/admissions/fee" | "/admissions/campus-tour" | "/admissions/fee-payment" | "/admissions/media" | "/admissions/code-of-conduct" | "/admissions/parents-speak" | "/admissions/beginnings";
  label: string;
  exact?: boolean;
};

const links: NavLink[] = [
  { to: "/admissions", label: "Admission 2027-28", exact: true },
  { to: "/admissions/parents-speak", label: "Parents Speak" },
  { to: "/admissions/beginnings", label: "Beginnings" },
  { to: "/admissions/fee", label: "Fee" },
  { to: "/admissions/campus-tour", label: "Campus Tour" },
  { to: "/admissions/fee-payment", label: "Fee Payment" },
  { to: "/admissions/media", label: "Media" },
  { to: "/admissions/code-of-conduct", label: "Code of Conduct" },
];

export function AdmissionsNav() {
  return (
    <nav className="sticky top-0 z-40 -mx-2 mb-4 flex gap-2 overflow-x-auto rounded-full bg-background/85 px-2 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      {links.map((l) => (
        <Link
          key={l.to}
          to={l.to}
          activeOptions={{ exact: l.exact ?? false }}
          className="shrink-0 rounded-full border border-border bg-card px-5 py-2 font-display text-sm transition-colors hover:bg-surface-2 data-[status=active]:border-primary data-[status=active]:bg-primary data-[status=active]:text-primary-foreground"
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
