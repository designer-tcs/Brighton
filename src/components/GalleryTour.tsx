import { useState } from "react";
import { PhotoSlot } from "@/components/PhotoSlot";
import front from "@/assets/school/front-block.jpg";
import playGarden from "@/assets/school/lawn.jpg";
import assembly from "@/assets/school/assembly.jpg";
import galleryWall from "@/assets/school/gallery-wall.jpg";
import canteen from "@/assets/school/canteen.jpg";
import library from "@/assets/school/library-shelves.jpg";
import robotics from "@/assets/school/robots-bench.jpg";
import music from "@/assets/tour-arts.jpg";
import art from "@/assets/school/art.jpg";
import dance from "@/assets/skill-collaboration.jpg";
import football from "@/assets/sports.jpg";
import corridor from "@/assets/school/corridor.jpg";
import physics from "@/assets/school/physics-laser.jpg";
import glance from "@/assets/rays-cover.jpg";

// Areas exactly as listed in Brighton's own gallery ("A Visual Tour").
const areas: Record<string, { label: string; src?: string; objectPosition?: string }[]> = {
  Campus: [
    { label: "School at a glance", src: glance },
    { label: "Front of the Academic Block", src: front, objectPosition: "center 40%" },
    { label: "Front Lawn" },
    { label: "Assembly Area", src: assembly },
    { label: "School Gallery", src: galleryWall },
    { label: "Briscafe – School Canteen", src: canteen },
    { label: "Academic Block – inside", src: corridor },
    { label: "Wellness / Sick Bay" },
  ],
  Classrooms: [
    { label: "Classrooms with interactive panels" },
    { label: "AC Digital Classrooms" },
    { label: "Junior's AC Classroom" },
    { label: "Library", src: library },
    { label: "Computer Lab" },
    { label: "Coding Classes" },
  ],
  Labs: [
    { label: "Robotics Lab", src: robotics },
    { label: "Chemistry Lab" },
    { label: "Biology Lab" },
    { label: "Physics Lab", src: physics },
  ],
  Studios: [
    { label: "Music Studio", src: music },
    { label: "Art Studio", src: art, objectPosition: "center 32%" },
    { label: "Dance Studio", src: dance },
    { label: "Activity Area" },
  ],
  Sports: [
    { label: "Football Ground", src: football },
    { label: "Cricket Practice Nets" },
    { label: "Boxing Ring" },
    { label: "Lawn Tennis Clay Court" },
    { label: "Indoor Play Area" },
    { label: "Adventure Zone" },
  ],
  Juniors: [
    { label: "Juniors' Play Zone" },
    { label: "Children's Play Area", src: playGarden },
    { label: "Juniors' Academic Block" },
    { label: "Junior's Fun Zone" },
    { label: "Juniors' Play Area – indoor" },
  ],
};
const tabs = Object.keys(areas);

export function GalleryTour() {
  const [t, setT] = useState(tabs[0]!);
  const list = areas[t] ?? [];

  return (
    <section className="mt-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-highlight">Gallery</p>
      <h2 className="mt-1 font-display text-3xl text-primary md:text-4xl">A visual tour</h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {tabs.map((x) => (
          <button
            key={x}
            type="button"
            onClick={() => setT(x)}
            aria-pressed={t === x}
            className={`rounded-[1.5rem] p-5 text-left transition-all ${
              t === x ? "bg-primary text-primary-foreground -translate-y-1" : "bg-card ring-1 ring-foreground/10 hover:bg-blush"
            }`}
          >
            <p className="font-display text-lg">{x}</p>
          </button>
        ))}
      </div>
      <div key={t} className="mt-4 grid animate-in fade-in gap-3 duration-300 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((a) => (
          <PhotoSlot
            key={a.label}
            label={a.label}
            src={a.src}
            className="aspect-[3/2]"
            objectPosition={a.objectPosition}
          />
        ))}
      </div>
    </section>
  );
}
