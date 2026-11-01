import { createFileRoute } from "@tanstack/react-router";
import { SectionBanner } from "@/components/SectionBanner";
import { VideoGrid, YouTubeCard } from "@/components/YouTubeCard";
import { meta } from "@/components/TabNav";

export const Route = createFileRoute("/admissions/parents-speak")({
  head: () =>
    meta(
      "Parents Speak",
      "Brighton International School parents share their experience in their own words — video reviews from families in Raipur.",
    ),
  component: ParentsSpeak,
});

const reviews = [
  { id: "t5V0vRptzA8", title: "Mr Gunjan Kohli" },
  { id: "wbtNsh1fzaU", title: "Dr Divya Tyagi" },
  { id: "hNGlHLjY1Xo", title: "Mrs Sirisha Gorti" },
  { id: "69neu0rsLXM", title: "Mr Prince Grover, father of Shaurya Grover" },
  { id: "U7cVdKBNh18", title: "Mrs Namrata Khelwani & Mr Dinesh Agrawal" },
  { id: "4tBGp1wSAfI", title: "Mrs Tripti Jain, mother of Advik" },
  { id: "ZL22cS7Gtxw", title: "Sardar Baljeet Singh Khalsa" },
  { id: "ea05Q_OLPz0", title: "Mrs Minakshi Sharma" },
  { id: "g7B1EIvlwXs", title: "Mrs Vichitra Sharma" },
  { id: "Swf5F-sd2ds", title: "Mrs Bindu Xavier" },
  { id: "XmoSmf-iZRw", title: "Mr Amandeep Singh Bhatia" },
  { id: "q9axQIWzlh8", title: "Mr Tarun Pradhanani" },
];

function ParentsSpeak() {
  return (
    <section>
      <SectionBanner title="Parents Speak" subtitle="Brighton families on their experience, in their own words." tone="dark" />
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <YouTubeCard id="EeMwICND6So" title="Why Parents Choose Brighton International School Raipur" />
        <YouTubeCard id="rTq3ELUNBC0" title="Parents' feedback about Brighton International School Raipur" />
      </div>
      <h2 className="mt-8 mb-4 font-display text-2xl text-primary">Parent reviews</h2>
      <VideoGrid videos={reviews} />
    </section>
  );
}
