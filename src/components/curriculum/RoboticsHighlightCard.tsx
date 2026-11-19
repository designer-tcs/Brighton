import { Link } from "@tanstack/react-router";
import { roboticsHighlightSlug, type RoboticsHighlight } from "@/data/robotics-highlights";

export function RoboticsHighlightCard({ card }: { card: RoboticsHighlight }) {
  const slug = roboticsHighlightSlug(card);
  const body = (
    <>
      <img
        src={card.image}
        alt=""
        width={1600}
        height={1067}
        loading="lazy"
        className="aspect-[3/2] w-full object-cover"
        style={{ objectPosition: card.objectPosition ?? "center" }}
      />
      <h4 className="px-5 py-4 font-display text-lg leading-snug">{card.title}</h4>
    </>
  );

  if (!slug) {
    return <article className="card-shell overflow-hidden">{body}</article>;
  }

  return (
    <Link
      to="/curriculum/robotics/$slug"
      params={{ slug }}
      className="card-shell block overflow-hidden outline-none transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring"
    >
      {body}
    </Link>
  );
}
