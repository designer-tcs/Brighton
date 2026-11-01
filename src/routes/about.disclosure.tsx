import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Building2,
  ExternalLink,
  FileCheck2,
  FlameKindling,
  GraduationCap,
  Droplets,
  Landmark,
  CalendarDays,
  Users,
  Receipt,
  ClipboardList,
  Youtube,
  Globe,
  ShieldCheck,
} from "lucide-react";
import { meta } from "@/components/TabNav";
import { PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/about/disclosure")({
  head: () =>
    meta(
      "Mandatory Public Disclosure",
      "CBSE mandatory public disclosure for Brighton International School, Raipur: affiliation 3330153, school code 15033, certificates, staff and campus facts.",
    ),
  component: Disclosure,
});

const U = "/files/";

const identity = [
  ["Affiliation Code", "3330153"],
  ["School Code", "15033"],
  ["UDISE Code", "22112220913"],
  ["ATL Code", "289517"],
];

type Doc = { t: string; href: string; icon: typeof FileCheck2; group: "Recognition" | "Safety" | "School" };
const docs: Doc[] = [
  { t: "Website information", href: `${U}2024/04/Mandatory-Disclosure-Details-SARAS-5.0.pdf`, icon: Globe, group: "School" },
  { t: "Affiliation Letter", href: `${U}2026/05/Extension-of-Affiliation-Brighton-International-School-_-2027-2032.pdf`, icon: GraduationCap, group: "Recognition" },
  { t: "Society's Registration", href: `${U}2021/04/AReg-Letter-of-Society-1.jpg`, icon: Landmark, group: "Recognition" },
  { t: "No Objection Certificate", href: `${U}2021/04/NOC-Education_Brighton-Raipur.pdf`, icon: FileCheck2, group: "Recognition" },
  { t: "State Board Recognition", href: `${U}2026/04/State-Board-Affiliation-Brighton-International-School-Raipur.pdf`, icon: ShieldCheck, group: "Recognition" },
  { t: "Building Safety Certificate", href: `${U}2026/02/Builing-Safety-Certificate-25-26_compressed-2.pdf`, icon: Building2, group: "Safety" },
  { t: "Fire Safety Certificate", href: `${U}2026/02/Fire-safety-certificate-Brighton-International-School-Raipur_compressed.pdf`, icon: FlameKindling, group: "Safety" },
  { t: "Water & Sanitation Certificate", href: `${U}2026/02/Water-And-Sanitary-Certificate-25-26_compressed.pdf`, icon: Droplets, group: "Safety" },
  { t: "Fee Structure", href: "/admissions/fee", icon: Receipt, group: "School" },
  { t: "Annual Academic Calendar", href: `${U}2025/06/Download-Merged_SKED_2024_2026.pdf`, icon: CalendarDays, group: "School" },
  { t: "School Management Committee", href: "/about/management", icon: Users, group: "School" },
  { t: "Parent Teacher Association", href: "https://brightoninternational.in/wp-content/uploads/2022/12/SKED-Brighton-International-School-.pdf", icon: Users, group: "School" },
  { t: "Board Exam Results", href: "/curriculum/board-results", icon: GraduationCap, group: "School" },
  { t: "Information about Staff Members", href: `${U}2025/06/Staff-Details.pdf`, icon: ClipboardList, group: "School" },
  { t: "YouTube Video", href: "https://youtu.be/Q1YxmxqcyCg", icon: Youtube, group: "School" },
];

const groups = ["All", "Recognition", "Safety", "School"] as const;

const campus = [
  ["20,748.6", "sq metres", "Total area (5 acres)"],
  ["76", "classrooms", "22×18, 22×24 and 25×20 feet"],
  ["8", "labs", "600 sq feet each"],
  ["50", "Mbps", "Leased-line internet"],
  ["1.67", "teachers", "per section"],
  ["54 / 90", "toilets", "Girls / Boys"],
];

function Disclosure() {
  const [g, setG] = useState<(typeof groups)[number]>("All");
  const shown = docs.filter((d) => g === "All" || d.group === g);

  return (
    <>
      <PageHeader
        eyebrow="Mandatory Public Disclosure"
        title="Everything CBSE asks us to share"
        intro="Brighton International School is affiliated to CBSE. Here is the list of information and mandatory public disclosure as mandated by the board."
      />

      <section className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {identity.map(([l, v]) => (
          <div key={l} className="rounded-[1.75rem] bg-primary p-6 text-primary-foreground">
            <p className="text-xs uppercase tracking-wider text-primary-foreground/70">{l}</p>
            <p className="mt-2 font-display text-3xl text-coral">{v}</p>
          </div>
        ))}
      </section>

      <section className="card-shell mt-6 grid gap-6 p-8 md:grid-cols-2">
        <dl className="grid gap-4 text-sm">
          {[
            ["Name of the School", "Brighton International School"],
            ["Address", "12th KM, Zero Point, Near Vidhan Sabha, Off Baloda Bazar Road, Village: Nardaha, Raipur 493111, Chhattisgarh"],
            ["Email", "info@brightoninternational.in"],
            ["Contact", "+91 99934 66111"],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-xs font-semibold uppercase tracking-wider text-highlight">{k}</dt>
              <dd className="mt-1">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="grid gap-3">
          {[
            ["Principal", "Mrs Jayshree Nair", "M.Com, MA, MBA, B.Ed"],
            ["Counsellor & Wellness Teacher", "Dr Sharmila Palai", "BHMS, CHW, BSc, MA (Psychology)"],
            ["Special Educator", "Mrs Chavvi Singh", "B.Ed Special Education"],
          ].map(([r, n, q]) => (
            <div key={r} className="rounded-2xl bg-blush p-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">{r}</p>
              <p className="font-display text-lg text-primary">{n}</p>
              <p className="text-sm text-muted-foreground">{q}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-display text-3xl text-primary">Documents</h2>
          <div className="flex gap-2" role="tablist">
            {groups.map((x) => (
              <button
                key={x}
                type="button"
                onClick={() => setG(x)}
                aria-pressed={g === x}
                className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                  g === x ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-blush"
                }`}
              >
                {x}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((d) => (
            <a
              key={d.t}
              href={d.href}
              target="_blank"
              rel="noreferrer"
              className="group card-shell flex items-center gap-4 p-5 transition-transform hover:-translate-y-0.5"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-blush text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <d.icon className="size-5" />
              </span>
              <span className="flex-1">
                <span className="block font-display">{d.t}</span>
                <span className="text-xs text-muted-foreground">{d.group}</span>
              </span>
              <ExternalLink className="size-4 text-muted-foreground" />
            </a>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-[1.75rem] bg-blush p-8 md:p-10">
        <h2 className="font-display text-3xl text-primary">The campus in numbers</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {campus.map(([n, u, l]) => (
            <div key={l} className="rounded-2xl bg-card p-6">
              <p className="font-display text-4xl text-primary">
                {n} <span className="text-base text-highlight">{u}</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card-shell mt-6 p-7 md:p-9">
        <p className="text-xs font-semibold uppercase tracking-wider text-highlight">Safe working · PoSH</p>
        <h2 className="mt-1 font-display text-2xl text-primary">Internal Complaints Committee</h2>
        <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
          Equal opportunity and fair treatment are an essential part of our code and work ethics. Brighton is
          committed to a safe workplace for all employees, especially women, and complies with the Prevention of
          Sexual Harassment (PoSH) Act, 2013. If you believe you have been discriminated against, harassed or not
          given equal opportunities at work, please submit a complaint to the Internal Complaints Committee (ICC),
          which has the powers under the PoSH Act and Rules to investigate and redress it.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {icc.map(([role, n, d, e]) => (
            <div key={role + n} className="rounded-2xl bg-blush p-5 text-sm">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">{role}</p>
              <p className="mt-1 font-display text-lg">{n}</p>
              <p className="text-muted-foreground">{d}</p>
              <a href={`mailto:${e}`} className="mt-1 block break-all text-primary underline-offset-2 hover:underline">{e}</a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

// From brightoninternational.in/posh
const icc: [string, string, string, string][] = [
  ["Presiding Officer", "Mrs Jayshree Nair", "Principal", "principal@brightoninternational.in"],
  ["Employee Member", "Mrs Neha Sethi", "Vice Principal", "mentor@brightoninternational.in"],
  ["Employee Member", "Mrs Asha Sharma", "Head Master", "asha@brightoninternational.in"],
  ["External Member", "Mrs Samiksha Singh Gidronia", "Independent Advocate", "samikshas.at.08@gmail.com"],
];
