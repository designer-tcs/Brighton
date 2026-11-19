import { createFileRoute, Link } from "@tanstack/react-router";
import { RoboticsHighlightCard } from "@/components/curriculum/RoboticsHighlightCard";
import { meta } from "@/components/TabNav";
import {
  findRoboticsHighlight,
  relatedRoboticsHighlights,
  roboticsHighlightSlug,
  type RoboticsWriteUpList,
} from "@/data/robotics-highlights";

export const Route = createFileRoute("/curriculum/robotics/$slug")({
  loader: ({ params }) => findRoboticsHighlight(params.slug),
  head: ({ loaderData }) => {
    const card = loaderData?.card;
    const lead = card?.writeUp?.find((block) => typeof block === "string");
    return meta(
      card?.title ?? "Robotics highlight",
      typeof lead === "string" ? lead : (card?.title ?? "A robotics highlight from Brighton International School, Raipur."),
    );
  },
  component: HighlightPage,
});

function HighlightPage() {
  const found = Route.useLoaderData();

  if (!found) {
    return (
      <section className="card-shell p-8">
        <h1 className="font-display text-3xl">This highlight is not on the list.</h1>
        <Link to="/curriculum/robotics" className="mt-4 inline-block font-display text-coral">
          All highlights
        </Link>
      </section>
    );
  }

  const { year, card } = found;
  const related = relatedRoboticsHighlights(roboticsHighlightSlug(card));

  return (
    <>
      <Link
        to="/curriculum/robotics"
        activeOptions={{ exact: true }}
        className="font-display text-sm text-primary hover:text-coral"
      >
        All highlights
      </Link>

      <article className="card-shell mt-4 overflow-hidden">
        <img
          src={card.image}
          alt=""
          width={1600}
          height={1067}
          className="aspect-[3/2] w-full object-cover"
          style={{ objectPosition: card.objectPosition ?? "center" }}
        />
        <div className="p-7 md:p-10">
          <p className="font-display text-sm text-coral">{year}</p>
          <h1 className="mt-2 font-display text-3xl leading-tight md:text-4xl">{card.title}</h1>
          {card.writeUp?.length ? <WriteUp blocks={card.writeUp} /> : null}
        </div>
      </article>

      {related.length > 0 ? (
        <section className="mt-8">
          <h2 className="font-display text-2xl">More highlights</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <RoboticsHighlightCard key={item.title} card={item} />
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}

function WriteUp({ blocks }: { blocks: Array<string | RoboticsWriteUpList> }) {
  return (
    <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
      {blocks.map((block, index) => {
        if (typeof block === "string") {
          return (
            <p key={index} className="whitespace-pre-line">
              {block}
            </p>
          );
        }
        const ListTag = block.list === "ol" ? "ol" : "ul";
        return (
          <ListTag
            key={index}
            className={block.list === "ol" ? "list-decimal space-y-2 pl-5" : "list-disc space-y-2 pl-5"}
          >
            {block.items.map((item) => (
              <li key={item} className="whitespace-pre-line">
                {item}
              </li>
            ))}
          </ListTag>
        );
      })}
    </div>
  );
}
