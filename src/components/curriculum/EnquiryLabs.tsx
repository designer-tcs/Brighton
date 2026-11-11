import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { VideoGrid } from "@/components/YouTubeCard";
import soldering from "@/assets/curiosity/curiosity-soldering.jpg";
import modelPair from "@/assets/curiosity/curiosity-09892.jpg";
import laser from "@/assets/curiosity/curiosity-09921.jpg";

const middleVideos = [
  { id: "V-Msv7fozcY", title: "Potato generate electricity" },
  { id: "gsX-4rMtFJg", title: "Colour of shadows" },
];

const secondaryVideos = [
  { id: "mk1c5llStdk", title: "Newton's Third Law" },
  { id: "dMxrv1M3qTk", title: "Magnetic Effect of Electricity" },
  { id: "66ihIq_4nnE", title: "Salt water generates electricity" },
  { id: "75pzQOjA4lI", title: "Simple electric circuit" },
];

const labVideos = [
  {
    src: "/videos/testing-an-idea.mp4",
    poster: "/videos/testing-an-idea.jpg",
    caption: "Students watch a green laser fountain",
  },
  {
    src: "/videos/testing-an-idea-2.mp4",
    poster: "/videos/testing-an-idea-2.jpg",
    caption: "A student tests red laser light through a row of rods",
  },
];

const playlist = "https://www.youtube.com/playlist?list=PLUacnczd9pX0";

function LabClip({ src, poster, caption }: { src: string; poster: string; caption: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  return (
    <figure className="overflow-hidden rounded-[1.25rem] bg-card ring-1 ring-border">
      <div className="relative aspect-[1280/576] bg-black">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          playsInline
          preload="metadata"
          controls={playing}
          className="absolute inset-0 h-full w-full object-contain"
        />
        {!playing && (
          <button
            type="button"
            aria-label={`Play: ${caption}`}
            onClick={() => {
              setPlaying(true);
              void videoRef.current?.play();
            }}
            className="group absolute inset-0 block"
          >
            <img src={poster} alt="" className="h-full w-full object-contain" />
            <span className="absolute inset-0 grid place-items-center bg-foreground/15 transition-colors group-hover:bg-foreground/5">
              <span className="grid size-14 place-items-center rounded-2xl bg-coral shadow-lg transition-transform group-hover:scale-105">
                <Play className="size-6 fill-current text-coral-foreground" />
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="px-4 py-3 text-sm font-medium">{caption}</figcaption>
    </figure>
  );
}

function LabClips() {
  return (
    <div className="mt-6 grid gap-4">
      {labVideos.map((clip) => (
        <LabClip key={clip.src} {...clip} />
      ))}
    </div>
  );
}

function PlaylistLink() {
  return (
    <a
      href={playlist}
      target="_blank"
      rel="noreferrer"
      className="mt-4 inline-flex font-display text-sm text-primary hover:underline"
    >
      Robotics & Curiosity at Brighton — full playlist
    </a>
  );
}

export function EnquiryLabs({ stage }: { stage: "middle" | "secondary" }) {
  if (stage === "secondary") {
    return (
      <section className="card-shell mt-6 overflow-hidden p-7 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-highlight">Classes IX and X</p>
        <h2 className="mt-1 font-display text-3xl text-primary">Testing an idea in the lab</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          In Classes IX and X, enquiry stays at the centre of the week, now beside the Physics, Chemistry and Biology laboratories. The Curiosity Lab and the Robotics Lab are where a lesson becomes something students build and test, and some of that work still happens beyond the classroom.
        </p>
        <LabClips />
        <div className="mt-6">
          <VideoGrid videos={secondaryVideos} cols={2} />
        </div>
        <PlaylistLink />
      </section>
    );
  }

  return (
    <section className="card-shell mt-6 p-7 md:p-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-highlight">Classes VI to VIII</p>
      <h2 className="mt-1 font-display text-3xl text-primary">Enquiry-based learning</h2>
      <p className="mt-3 max-w-3xl text-muted-foreground">
        From Class VI to Class VIII, enquiry-based learning carries greater weight. The hands-on Curiosity Lab and the Robotics Lab make a real difference, alongside a lesson plan that is activity-led and sometimes takes learning beyond the classroom.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <img src={soldering} alt="Students building a circuit in the Curiosity Lab" className="aspect-[4/3] w-full rounded-2xl object-cover object-center" />
        <img src={modelPair} alt="Students working with a model in the Curiosity Lab" className="aspect-[4/3] w-full rounded-2xl object-cover object-[center_30%]" />
        <img src={laser} alt="A student studying a light experiment in the Curiosity Lab" className="aspect-[4/3] w-full rounded-2xl object-cover object-[78%_42%]" />
      </div>
      <div className="mt-6">
        <VideoGrid videos={middleVideos} cols={2} />
      </div>
      <PlaylistLink />
    </section>
  );
}
