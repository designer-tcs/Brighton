import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BookOpen, CalendarCheck, MessagesSquare, ShieldCheck } from "lucide-react";
import { SectionBanner } from "@/components/SectionBanner";
import { meta } from "@/components/TabNav";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { bookList, faqGroups } from "@/components/admissions/beginnings-data";
import { PhotoSlot } from "@/components/PhotoSlot";

export const Route = createFileRoute("/admissions/beginnings")({
  head: () =>
    meta(
      "Beginnings — Starting at Brighton",
      "Everything new Brighton parents need to know: curriculum, exams, attendance, transport, canteen, tiffin, communication, discipline and the book list.",
    ),
  component: Beginnings,
});

const icons = [BookOpen, CalendarCheck, MessagesSquare, ShieldCheck];

function Beginnings() {
  const [g, setG] = useState(0);
  const [t, setT] = useState(0);
  const [cls, setCls] = useState(0);
  const group = faqGroups[g]!;
  const topic = group.topics[t] ?? group.topics[0]!;
  const books = bookList[cls]!;

  return (
    <section>
      <SectionBanner
        title="Starting at Brighton"
        subtitle="Transitioning to a new school involves a lot of moving parts. To make your start as smooth as possible, here is all the essential need-to-know information in one place."
        tone="dark"
      />

      <PhotoSlot label="Children on their first days at Brighton" className="mt-6 aspect-[3/2]" />

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {faqGroups.map((x, i) => {
          const Icon = icons[i]!;
          const on = i === g;
          return (
            <button
              key={x.group}
              type="button"
              onClick={() => {
                setG(i);
                setT(0);
              }}
              aria-pressed={on}
              className={`flex flex-col gap-3 rounded-[1.5rem] border p-5 text-left transition-all ${
                on ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-blush"
              }`}
            >
              <span className={`grid size-10 place-items-center rounded-xl ${on ? "bg-coral text-coral-foreground" : "bg-blush text-primary"}`}>
                <Icon className="size-5" />
              </span>
              <span className="font-display text-lg leading-tight">{x.group}</span>
              <span className={`text-xs ${on ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{x.intro}</span>
            </button>
          );
        })}
      </div>

      <div className="card-shell mt-4 grid gap-6 p-5 md:grid-cols-[14rem_1fr] md:p-7">
        <div className="flex gap-2 overflow-x-auto md:flex-col">
          {group.topics.map((x, i) => (
            <button
              key={x.title}
              type="button"
              onClick={() => setT(i)}
              aria-pressed={i === t}
              className={`shrink-0 rounded-xl px-4 py-2.5 text-left text-sm transition-colors ${
                i === t ? "bg-blush font-semibold text-primary ring-1 ring-primary/30" : "hover:bg-surface-2"
              }`}
            >
              {x.title}
              <span className="ml-2 text-xs text-muted-foreground">{x.qa.length}</span>
            </button>
          ))}
        </div>
        <div key={`${g}-${t}`} className="animate-in fade-in duration-300">
          <h3 className="mb-4 font-display text-2xl text-primary">{topic.title}</h3>
          <Accordion type="single" collapsible>
            {topic.qa.map(([q, a], i) => (
              <AccordionItem key={q} value={`q${i}`}>
                <AccordionTrigger>{q}</AccordionTrigger>
                <AccordionContent>{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <PhotoSlot label="Students reading in the library" className="aspect-[3/2]" />
        <PhotoSlot label="Students in the music studio" className="aspect-[3/2]" />
      </div>

      <div className="mt-6">
        <SectionBanner title="Book List" subtitle="Pick a class to see its books and publishers." />
        <div className="mt-3 flex flex-wrap gap-2">
          {bookList.map((b, i) => (
            <button
              key={b.cls}
              type="button"
              onClick={() => setCls(i)}
              aria-pressed={i === cls}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                i === cls ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-blush"
              }`}
            >
              {b.cls}
            </button>
          ))}
        </div>
        <div key={cls} className="card-shell mt-3 animate-in fade-in overflow-x-auto p-2 duration-300">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="px-4 py-3">Subject</th>
                <th className="px-4 py-3">Book</th>
                <th className="px-4 py-3">Publication</th>
              </tr>
            </thead>
            <tbody>
              {books.rows.flatMap((r) =>
                r.books.map(([b, p], j) => (
                  <tr key={r.subject + b} className="border-t border-border">
                    <td className="px-4 py-3 font-display">{j === 0 ? r.subject : ""}</td>
                    <td className="px-4 py-3">{b}</td>
                    <td className="px-4 py-3 text-muted-foreground">{p}</td>
                  </tr>
                )),
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
