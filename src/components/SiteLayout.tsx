import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SideNav } from "./SideNav";
import { PaletteSwitcher } from "./PaletteSwitcher";
import logo from "@/assets/brighton-logo-mark.png";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto flex max-w-[1500px] flex-col lg:flex-row lg:gap-6 lg:px-6 lg:pt-4">
        <SideNav />
        <main className="min-w-0 w-full flex-1 px-4 pb-10 lg:px-0">{children}</main>
      </div>
      <footer className="mx-auto mt-6 max-w-[1500px] px-4 pb-10 lg:mt-10 lg:px-6">
        <div className="card-shell grid gap-8 p-8 md:grid-cols-3">
          <div>
            <img
              src={logo}
              alt="Brighton International School, Raipur"
              className="h-16 w-auto"
            />
            <p className="mt-3 text-sm text-muted-foreground">
              12th KM, Zero Point, Near Vidhan Sabha, Off Baloda Bazar Road, Village Nardaha,
              Raipur, Chhattisgarh 493111
            </p>
          </div>
          <div className="text-sm">
            <h4 className="font-display text-base">Reach us</h4>
            <p className="mt-2 text-muted-foreground">Admissions: +91 999 34 66 111</p>
            <p className="text-muted-foreground">Landline: +91 97525 97535</p>
            <p className="text-muted-foreground">info@brightoninternational.in</p>
          </div>
          <div className="text-sm">
            <h4 className="font-display text-base">Quick links</h4>
            <ul className="mt-2 space-y-1 text-muted-foreground">
              <li>
                <Link to="/admissions" className="hover:text-foreground">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/curriculum" className="hover:text-foreground">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          CBSE Affiliation No. 3330153 &middot; A School for Life &middot;{" "}
          <Link to="/privacy" className="underline-offset-2 hover:underline">
            Privacy Policy
          </Link>
        </p>
      </footer>
      <PaletteSwitcher />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <header className="card-shell p-8 md:p-12">
      <p className="text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">
        {eyebrow}
      </p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.05] md:text-5xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{intro}</p>
    </header>
  );
}
