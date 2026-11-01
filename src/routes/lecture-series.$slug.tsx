import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { meta } from "@/components/TabNav";
import { lectureSpeakers } from "@/data/lecture-speakers";

export const Route = createFileRoute("/lecture-series/$slug")({
  loader: ({ params }) => lectureSpeakers.find((speaker) => speaker.slug === params.slug) ?? null,
  head: ({ loaderData }) =>
    meta(
      loaderData ? `${loaderData.name} — Brighton Lecture Series` : "Brighton Lecture Series",
      loaderData
        ? `${loaderData.name}${loaderData.role ? `, ${loaderData.role}` : ""}, speaking at the Brighton Lecture Series.`
        : "A session from the Brighton Lecture Series.",
    ),
  component: SpeakerPage,
});

function SpeakerPage() {
  const speaker = Route.useLoaderData();

  if (!speaker) {
    return (
      <SiteLayout>
        <section className="card-shell p-8">
          <h1 className="font-display text-3xl text-primary">This session is not on the list.</h1>
          <Link to="/lecture-series" className="mt-4 inline-block font-display text-coral">
            Back to the lecture series
          </Link>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <Link to="/lecture-series" className="font-display text-sm text-primary hover:text-coral">
        All speakers
      </Link>
      <header className="mt-4 max-w-3xl">
        <p className="font-display text-sm uppercase tracking-widest text-coral">Brighton Lecture Series</p>
        <h1 className="mt-2 font-display text-4xl text-primary md:text-5xl">{speaker.name}</h1>
        {speaker.role ? <p className="mt-2 text-lg text-muted-foreground">{speaker.role}</p> : null}
      </header>

      <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-6">
        {speaker.images.map((src) => (
          <img key={src} src={src} alt="" className="w-full rounded-[1.5rem] bg-card" />
        ))}
      </div>

      {speaker.text.length > 0 ? (
        <div className="mx-auto mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-foreground/90">
          {speaker.text.map((paragraph) => (
            <p key={paragraph.slice(0, 80)} className="whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}
    </SiteLayout>
  );
}
