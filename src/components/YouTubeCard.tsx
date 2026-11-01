import { useState } from "react";
import { Play } from "lucide-react";

export type Video = { id: string; title: string };

export function YouTubeCard({ id, title, className = "" }: Video & { className?: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <figure className={`overflow-hidden rounded-[1.25rem] bg-card ring-1 ring-border ${className}`}>
      <div className="relative aspect-video bg-foreground/10">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play: ${title}`}
            className="group absolute inset-0 block"
          >
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 grid place-items-center bg-foreground/15 transition-colors group-hover:bg-foreground/5">
              <span className="grid size-14 place-items-center rounded-2xl bg-coral shadow-lg transition-transform group-hover:scale-105">
                <Play className="size-6 fill-current text-coral-foreground" />
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="px-4 py-3 text-sm font-medium">{title}</figcaption>
    </figure>
  );
}

export function VideoGrid({ videos, cols = 3 }: { videos: Video[]; cols?: 2 | 3 }) {
  return (
    <div className={`grid gap-4 sm:grid-cols-2 ${cols === 3 ? "lg:grid-cols-3" : ""}`}>
      {videos.map((v) => (
        <YouTubeCard key={v.id} {...v} />
      ))}
    </div>
  );
}
