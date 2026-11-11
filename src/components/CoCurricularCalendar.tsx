import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import april from "@/assets/cocurricular/april.jpg";
import may from "@/assets/cocurricular/may.jpg";
import june from "@/assets/cocurricular/june.jpg";
import july from "@/assets/cocurricular/july.jpg";
import august from "@/assets/cocurricular/august.jpg";
import september from "@/assets/cocurricular/september.jpg";
import october from "@/assets/cocurricular/october.jpg";
import november from "@/assets/cocurricular/november.jpg";
import december from "@/assets/cocurricular/december.jpg";
import january from "@/assets/cocurricular/january.jpg";
import february from "@/assets/cocurricular/february.jpg";
import march from "@/assets/cocurricular/march.jpg";

const months = [
  { label: "April 2025", src: april },
  { label: "May 2025", src: may },
  { label: "June 2025", src: june },
  { label: "July 2025", src: july },
  { label: "August 2025", src: august },
  { label: "September 2025", src: september },
  { label: "October 2025", src: october },
  { label: "November 2025", src: november },
  { label: "December 2025", src: december },
  { label: "January 2026", src: january },
  { label: "February 2026", src: february },
  { label: "March 2026", src: march },
];

export function CoCurricularCalendar() {
  const [open, setOpen] = useState<(typeof months)[number] | null>(null);

  return (
    <section id="co-curricular-calendar" className="mt-6">
      <div className="card-shell p-7 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-highlight">
          This is Brighton's Philosophy in Action
        </p>
        <h2 className="mt-1 font-display text-3xl text-primary md:text-4xl">Brighton's Co-Curricular Calendar</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Each month names an Activity of the Month and sets it out for every class, with the holidays and school programmes beside it.{" "}
          <Link to="/curriculum/sked" className="font-semibold text-primary underline-offset-4 hover:underline">
            SKED
          </Link>{" "}
          is the year-long calendar of syllabus and class activities. These calendars keep a balance between academics and co-curricular learning.
        </p>
        <div className="mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2">
          {months.map((month) => (
            <button
              key={month.label}
              type="button"
              onClick={() => setOpen(month)}
              className="w-72 shrink-0 snap-start text-left"
            >
              <img
                src={month.src}
                alt={`Activity of the Month, ${month.label}`}
                width={1418}
                height={1329}
                loading="lazy"
                className="aspect-[1418/1329] w-full rounded-2xl border border-border object-contain bg-card"
              />
              <span className="mt-2 block font-display text-lg text-primary">{month.label}</span>
            </button>
          ))}
        </div>
      </div>
      <Dialog open={open !== null} onOpenChange={(next) => !next && setOpen(null)}>
        <DialogContent className="max-h-[92vh] max-w-5xl overflow-y-auto p-3 sm:p-4">
          <DialogTitle className="font-display text-xl text-primary">{open?.label}</DialogTitle>
          {open && (
            <img
              src={open.src}
              alt={`Activity of the Month, ${open.label}`}
              width={1418}
              height={1329}
              className="mt-2 w-full rounded-xl"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
