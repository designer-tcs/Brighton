import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { YouTubeCard } from "./YouTubeCard";

export function InsideBrightonSection() {
  return (
    <section className="mt-6 rounded-[1.75rem] bg-primary p-5 text-primary-foreground md:p-10">
      <div className="grid gap-4 md:grid-cols-2 md:items-start">
        <h2 className="font-display text-4xl md:text-5xl">Inside Brighton</h2>
        <p className="text-primary-foreground/85 md:pt-2">
          An introduction to Brighton International School, Raipur, and what parents say about it.
        </p>
      </div>
      <div className="mt-6 grid gap-4 text-foreground lg:grid-cols-[1.6fr_1fr]">
        <YouTubeCard id="Q1YxmxqcyCg" title="Brighton International School, CBSE School Raipur – Introduction" />
        <div className="flex flex-col gap-4">
          <YouTubeCard id="rTq3ELUNBC0" title="Parents' feedback about Brighton International School" />
          <Link
            to="/admissions/parents-speak"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-coral px-5 py-3 font-display text-coral-foreground"
          >
            Hear more parents <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
