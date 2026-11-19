import { createFileRoute } from "@tanstack/react-router";
import { Banner, meta } from "@/components/TabNav";
import { RoboticsHighlightCard } from "@/components/curriculum/RoboticsHighlightCard";
import { roboticsHighlights } from "@/data/robotics-highlights";
import robots from "@/assets/lab.jpg";

export const Route = createFileRoute("/curriculum/robotics/")({
  head: () =>
    meta(
      "Robotics & STEM",
      "Brighton's award-winning robotics programme in Raipur: hands-on building and coding, national competitions and work with IIT Bhilai.",
    ),
  component: Robotics,
});

/** Programme introduction, copied from https://brightoninternational.in/robotics/ */
const intro = [
  "At Brighton International School, our Robotics Program is designed to ignite curiosity, foster innovation, and prepare students for the future of technology. Through hands-on learning, students engage with cutting-edge robotics technologies, programming, and engineering concepts, allowing them to build, program, and test their own robotic creations.",
  "The program emphasizes critical thinking, teamwork, and problem-solving, providing students with practical experience in real-world applications of science, technology, engineering, and mathematics (STEM). From foundational programming languages to advanced robotics design, our curriculum is tailored to challenge and inspire students at every level.",
  "Our Robotics Program goes beyond the classroom, with students participating in national and international competitions, workshops, and collaborations with prestigious institutions like IIT Bhilai and other tech innovators. With access to modern labs and expert guidance, students at Brighton are not just learning about the future—they’re creating it.",
  "Know more by scrolling how we are empowering the next generation of innovators, engineers, and leaders through the exciting world of robotics!",
];

function Robotics() {
  return (
    <>
      <Banner
        eyebrow="Robotics & STEM"
        title="Not just learning about the future — building it"
        intro="Compendium of Robotics & STEM Activities at Brighton International School Raipur"
        img={robots}
        objectPosition="center 88%"
        frame="aspect-[5/4]"
        align="start"
      />

      <section className="card-shell mt-6 p-7 md:p-10">
        {intro.map((paragraph) => (
          <p key={paragraph} className="mt-4 text-sm leading-relaxed text-muted-foreground first:mt-0">{paragraph}</p>
        ))}
        <a
          href="https://atlbrighton.netlify.app"
          className="mt-6 inline-flex rounded-full bg-coral px-6 py-2.5 font-display text-sm text-coral-foreground transition-opacity hover:opacity-90"
        >
          Submit Your Project
        </a>
      </section>

      <section className="mt-6">
        <h2 className="font-display text-3xl md:text-4xl">Highlights</h2>
        {roboticsHighlights.map((group) => (
          <div key={group.year} className="mt-8">
            <h3 className="font-display text-2xl text-coral">{group.year}</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.cards.map((card) => (
                <RoboticsHighlightCard key={card.title} card={card} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
