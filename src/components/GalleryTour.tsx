import { useState } from "react";
import { PhotoSlot } from "@/components/PhotoSlot";
import frontLawn from "@/assets/school/front-lawn.jpg";
import academicFront from "@/assets/school/tour/campus-academic-front.jpg";
import assembly from "@/assets/school/tour/campus-assembly.jpg";
import juniorBlock from "@/assets/school/tour/campus-junior-block.jpg";
import seniorLibrary from "@/assets/school/tour/campus-senior-library.jpg";
import auditorium from "@/assets/school/tour/campus-auditorium.jpg";
import galleryWall from "@/assets/school/gallery-wall.jpg";
import canteen from "@/assets/school/canteen.jpg";
import library from "@/assets/school/library-shelves.jpg";
import robotics from "@/assets/school/tour/robotics-lab.jpg";
import chemistry from "@/assets/school/chemistry-lab.jpg";
import biology from "@/assets/school/tour/lab-biology.jpg";
import physics from "@/assets/school/tour/lab-physics.jpg";
import curiosity from "@/assets/school/tour/lab-curiosity.jpg";
import computerLab from "@/assets/school/tour/lab-computer.jpg";
import music from "@/assets/tour-arts.jpg";
import art from "@/assets/school/art.jpg";
import dance from "@/assets/skill-collaboration.jpg";
import keyboard from "@/assets/school/tour/studio-keyboard.jpg";
import craft from "@/assets/school/tour/studio-craft.jpg";
import activity from "@/assets/school/from-gallery/activity.jpg";
import football from "@/assets/school/tour/sports-football.jpg";
import cricket from "@/assets/school/tour/sports-cricket.jpg";
import boxing from "@/assets/school/tour/sports-boxing.png";
import basketball from "@/assets/school/tour/sports-basketball.jpg";
import volleyball from "@/assets/school/tour/sports-volleyball.png";
import playground from "@/assets/school/tour/sports-playground.jpg";
import multiplay from "@/assets/school/tour/sports-multiplay.jpg";
import indoorPlay from "@/assets/school/indoor-play.jpg";
import primaryRoom from "@/assets/school/tour/class-primary.jpg";
import prePrimaryRoom from "@/assets/school/tour/class-preprimary.jpg";
import prePrimaryBlock from "@/assets/school/tour/class-preprimary-block.jpg";
import seniorRoom from "@/assets/school/tour/class-senior.jpg";
import digitalRoom from "@/assets/school/tour/class-digital.jpg";
import glance from "@/assets/rays-cover.jpg";
import interactive from "@/assets/school/from-gallery/interactive.jpg";
import acDigital from "@/assets/school/from-gallery/ac-digital.jpg";
import juniorAc from "@/assets/school/from-gallery/junior-ac.jpg";
import coding from "@/assets/school/from-gallery/coding.jpg";
import sickBay from "@/assets/school/from-gallery/sick-bay.jpg";
import bus from "@/assets/school/tour/fac-bus.jpg";
import lift from "@/assets/school/tour/fac-lift.jpg";
import cctv from "@/assets/school/tour/fac-cctv.jpg";

// Areas exactly as listed in Brighton's own gallery ("A Visual Tour").
const areas: Record<string, { label: string; src?: string; objectPosition?: string }[]> = {
  Campus: [
    { label: "School at a glance", src: glance },
    { label: "Front of the Academic Block", src: academicFront },
    { label: "Front Lawn", src: frontLawn },
    { label: "Assembly Area", src: assembly },
    { label: "School Gallery", src: galleryWall },
    { label: "Briscafe – School Canteen", src: canteen },
    { label: "Junior Block", src: juniorBlock },
    { label: "Senior Library", src: seniorLibrary, objectPosition: "center 42%" },
    { label: "Auditorium", src: auditorium },
    { label: "Wellness / Sick Bay", src: sickBay },
  ],
  Classrooms: [
    { label: "The Primary Classroom", src: primaryRoom },
    { label: "The Pre Primary Classroom", src: prePrimaryRoom },
    { label: "The Pre Primary Block", src: prePrimaryBlock },
    { label: "Senior Classroom", src: seniorRoom },
    { label: "Digital Classroom", src: digitalRoom },
    { label: "Classrooms with interactive panels", src: interactive, objectPosition: "center 45%" },
    { label: "AC Digital Classrooms", src: acDigital, objectPosition: "center 40%" },
    { label: "Junior's AC Classroom", src: juniorAc, objectPosition: "center 42%" },
    { label: "Library", src: library },
    { label: "Coding Classes", src: coding, objectPosition: "58% center" },
  ],
  Labs: [
    { label: "Robotics Lab", src: robotics },
    { label: "Chemistry Lab", src: chemistry },
    { label: "Biology Lab", src: biology },
    { label: "Physics Lab", src: physics },
    { label: "Curiosity Lab", src: curiosity },
    { label: "The Computer Lab", src: computerLab },
  ],
  Studios: [
    { label: "Music Studio", src: music },
    { label: "Art Studio", src: art, objectPosition: "center 32%" },
    { label: "Dance Studio", src: dance },
    { label: "Keyboard Studio", src: keyboard },
    { label: "The Craft Studio", src: craft },
    { label: "Activity Area", src: activity, objectPosition: "center 55%" },
  ],
  Sports: [
    { label: "Football Ground", src: football },
    { label: "Cricket Ground", src: cricket },
    { label: "Basketball", src: basketball },
    { label: "Volleyball", src: volleyball },
    { label: "Boxing Ring", src: boxing, objectPosition: "center 40%" },
    { label: "The Playground", src: playground },
    { label: "Multiplay Area", src: multiplay },
    { label: "Indoor Play Area", src: indoorPlay },
  ],
  Facilities: [
    { label: "Bus Conveyance", src: bus },
    { label: "Lift", src: lift, objectPosition: "center 42%" },
    { label: "CCTV Secured Campus", src: cctv },
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
