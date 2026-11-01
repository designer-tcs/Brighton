import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import logoMark from "@/assets/brighton-logo-mark.png";

type NavItem = {
  label: string;
  to: string;
  children?: { label: string; to: string; hash?: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About Brighton", to: "/about" },
  { label: "Admissions", to: "/admissions" },
  { label: "Curriculum", to: "/curriculum" },
  { label: "Infrastructure", to: "/infrastructure" },
  { label: "Events", to: "/events" },
  { label: "Contact Us", to: "/contact" },
  { label: "Rays", to: "/blogs" },
];

function NavList({ onNavigate, fill = false }: { onNavigate?: () => void; fill?: boolean }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState<string | null>(null);

  return (
    <nav
      className={
        fill
          ? "flex h-full min-h-0 flex-col gap-[clamp(0.35rem,0.9vh,0.6rem)]"
          : "flex flex-col gap-2"
      }
      aria-label="Main"
    >
      {navItems.map((item, i) => {
        const active = pathname === item.to;
        const expanded = open === item.label;
        return (
          <div
            key={item.label}
            className={fill ? "flex min-h-0 flex-1 flex-col justify-center" : undefined}
          >
            <div
              className={`flex items-center rounded-2xl px-4 ${
                fill ? "min-h-[2.6rem] flex-1 py-2" : "py-3"
              } ${
                active
                  ? "bg-card ring-1 ring-foreground/12"
                  : "bg-surface-2/70 transition-colors hover:bg-card"
              }`}
            >
              <Link
                to={item.to}
                onClick={onNavigate}
                className="flex min-w-0 flex-1 items-baseline gap-2 text-[0.98rem] font-medium"
              >
                <span className="nav-index shrink-0">{String(i).padStart(2, "0")}</span>
                <span className="truncate font-display">{item.label}</span>
              </Link>
              {item.children && (
                <button
                  type="button"
                  aria-label={`Toggle ${item.label} submenu`}
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? null : item.label)}
                  className="ml-2 shrink-0 text-muted-foreground transition-transform"
                  style={{ transform: expanded ? "rotate(180deg)" : undefined }}
                >
                  <ChevronDown className="size-4" />
                </button>
              )}
            </div>
            {item.children && expanded && (
              <ul className="mt-1 ml-6 flex flex-col gap-1 border-l border-border pl-4">
                {item.children.map((c) => (
                  <li key={c.label}>
                    <Link
                      to={c.to}
                      onClick={onNavigate}
                      className="block py-1.5 text-sm text-muted-foreground hover:text-foreground"
                    >
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}

      <Link
        to="/admissions"
        onClick={onNavigate}
        className={`flex items-center justify-center rounded-2xl bg-primary px-5 text-center font-display font-semibold text-primary-foreground transition-opacity hover:opacity-90 ${
          fill
            ? "mt-[clamp(0.4rem,1.2vh,0.9rem)] min-h-[3rem] shrink-0 flex-[1.2] text-lg"
            : "mt-3 py-4 text-lg"
        }`}
      >
        Apply Now
      </Link>
    </nav>
  );
}


export function SideNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-40 flex items-center justify-between bg-background/95 px-4 py-3 backdrop-blur lg:hidden">
        <Link to="/">
          <img src={logoMark} alt="Brighton International School, Raipur" className="h-11 w-auto" />
        </Link>
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
          className="rounded-xl bg-card p-2 ring-1 ring-foreground/10"
        >
          <Menu className="size-5" />
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-primary/40"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="absolute inset-y-0 left-0 flex w-[min(19rem,86vw)] flex-col overflow-y-auto bg-background p-4 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <img src={logoMark} alt="" className="h-10 w-auto" />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl bg-card p-2 ring-1 ring-foreground/10"
              >
                <X className="size-5" />
              </button>
            </div>
            <NavList onNavigate={() => setMobileOpen(false)} />
          </aside>
        </div>
      )}

      <aside className="hidden w-[16.5rem] shrink-0 lg:block">
        <div className="sticky top-4 flex h-[calc(100vh-2rem)] min-h-0 flex-col">
          <Link to="/" className="mb-[clamp(0.5rem,1.6vh,1.25rem)] flex shrink-0 justify-center">
            <img
              src={logoMark}
              alt="Brighton International School, Raipur"
              className="h-[clamp(3.75rem,8.5vh,6rem)] w-auto"
            />
          </Link>
          <div className="min-h-0 flex-1 pb-1">
            <NavList fill />
          </div>
        </div>
      </aside>
    </>
  );
}
