import { useState } from "react";
import { PhotoSlot } from "@/components/PhotoSlot";
import frontLawn from "@/assets/school/front-lawn.jpg";
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
import boxing from "@/assets/school/boxing-ring.jpg";
import tennis from "@/assets/school/tennis-court.jpg";
import indoorPlay from "@/assets/school/indoor-play.jpg";
import cricket from "@/assets/school/cricket-ground.jpg";
import corridor from "@/assets/school/corridor.jpg";
import physics from "@/assets/school/physics-laser.jpg";
import chemistry from "@/assets/school/chemistry-lab.jpg";
import computerLab from "@/assets/school/computer-lab.jpg";
import glance from "@/assets/rays-cover.jpg";
import interactive from "@/assets/school/from-gallery/interactive.jpg";
import acDigital from "@/assets/school/from-gallery/ac-digital.jpg";
import juniorAc from "@/assets/school/from-gallery/junior-ac.jpg";
import coding from "@/assets/school/from-gallery/coding.jpg";
import biology from "@/assets/school/from-gallery/biology.jpg";
import activity from "@/assets/school/from-gallery/activity.jpg";
import adventure from "@/assets/school/from-gallery/adventure.jpg";
import juniorsPlay from "@/assets/school/from-gallery/juniors-play.jpg";
import juniorsBlock from "@/assets/school/from-gallery/juniors-block.jpg";
import funZone from "@/assets/school/from-gallery/fun-zone.jpg";
import juniorsIndoor from "@/assets/school/from-gallery/juniors-indoor.jpg";
import sickBay from "@/assets/school/from-gallery/sick-bay.jpg";

// Areas exactly as listed in Brighton's own gallery ("A Visual Tour").
const areas: Record<string, { label: string; src?: string; objectPosition?: string }[]> = {
  Campus: [
    { label: "School at a glance", src: glance },
    { label: "Front of the Academic Block", src: front, objectPosition: "center 40%" },
    { label: "Front Lawn", src: frontLawn },
    { label: "Assembly Area", src: assembly },
    { label: "School Gallery", src: galleryWall },
    { label: "Briscafe – School Canteen", src: canteen },
    { label: "Academic Block – inside", src: corridor },
    { label: "Wellness / Sick Bay", src: sickBay },
  ],
  Classrooms: [
    { label: "Classrooms with interactive panels", src: interactive, objectPosition: "center 45%" },
    { label: "AC Digital Classrooms", src: acDigital, objectPosition: "center 40%" },
    { label: "Junior's AC Classroom", src: juniorAc, objectPosition: "center 42%" },
    { label: "Library", src: library },
    { label: "Computer Lab", src: computerLab },
    { label: "Coding Classes", src: coding, objectPosition: "58% center" },
  ],
  Labs: [
    { label: "Robotics Lab", src: robotics },
    { label: "Chemistry Lab", src: chemistry },
    { label: "Biology Lab", src: biology },
    { label: "Physics Lab", src: physics },
  ],
  Studios: [
    { label: "Music Studio", src: music },
    { label: "Art Studio", src: art, objectPosition: "center 32%" },
    { label: "Dance Studio", src: dance },
    { label: "Activity Area", src: activity, objectPosition: "center 55%" },
  ],
  Sports: [
    { label: "Football Ground", src: football },
    { label: "Cricket Ground", src: cricket },
    { label: "Boxing Ring", src: boxing },
    { label: "Lawn Tennis Clay Court", src: tennis },
    { label: "Indoor Play Area", src: indoorPlay },
    { label: "Adventure Zone", src: adventure },
  ],
  Juniors: [
    { label: "Juniors' Play Zone", src: juniorsPlay },
    { label: "Children's Play Area", src: playGarden },
    { label: "Juniors' Academic Block", src: juniorsBlock, objectPosition: "42% center" },
    { label: "Junior's Fun Zone", src: funZone },
    { label: "Juniors' Play Area – indoor", src: juniorsIndoor },
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
