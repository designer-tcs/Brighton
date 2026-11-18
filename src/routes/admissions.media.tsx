import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SectionBanner } from "@/components/SectionBanner";
import { NewsStrip, mediaSections } from "@/components/admissions/NewsStrip";
import campusPhoto from "@/assets/media/Header-for-Brighton-Website.png";

const mediaFiles = import.meta.glob("../assets/media/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function mediaSrc(filename: string) {
  const match = Object.entries(mediaFiles).find(([path]) => path.endsWith(`/${filename}`));
  if (!match) {
    throw new Error(`Missing media image ${filename}`);
  }
  return match[1];
}

export const Route = createFileRoute("/admissions/media")({
  head: () => ({
    meta: [
      { title: "Media & Accolades | Brighton International School, Raipur" },
      {
        name: "description",
        content:
          "Press coverage and accolades of Brighton International School, Raipur in local and national media, including Education World India School Rankings.",
      },
      { property: "og:title", content: "Brighton International School in News — Media" },
      {
        property: "og:description",
        content:
          "Snippets of accolades and activities covered in the local and national media.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MediaPage,
});

function MediaPage() {
  const [open, setOpen] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section>
      <SectionBanner title="Brighton International School in News" tone="dark" />
      <figure className="mt-6 overflow-hidden rounded-2xl">
        <img
          src={campusPhoto}
          alt="Brighton International School campus"
          className="h-auto w-full object-cover object-center"
        />
      </figure>
      <div className="mt-6">
        <NewsStrip />
      </div>
      <div className="mt-8 space-y-10">
        {mediaSections.map((section) => (
          <section key={section.title}>
            <h3 className="font-display text-xl leading-tight md:text-2xl">{section.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{section.caption}</p>
            <div className="mt-4 columns-1 gap-3 sm:columns-2 lg:columns-3">
              {section.images.map((filename, index) => {
                const src = mediaSrc(filename);
                const alt = `${section.title}, press clipping ${index + 1}`;
                return (
                  <button
                    key={filename}
                    type="button"
                    onClick={() => setOpen({ src, alt })}
                    className="mb-3 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card text-left"
                  >
                    <img src={src} alt={alt} loading="lazy" className="h-auto w-full object-cover object-center" />
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </div>
      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={open.alt}
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-primary-foreground px-3 py-1 font-display text-sm text-primary"
            onClick={() => setOpen(null)}
          >
            Close
          </button>
          <img
            src={open.src}
            alt={open.alt}
            className="max-h-[90vh] max-w-full object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </section>
  );
}
