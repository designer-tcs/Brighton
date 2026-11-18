export const mediaIntro =
  "Brighton International School has been a the forefront of innovation, showing limitless care for its students, progressive pedagogy and also bringing together support of its parents whose children are studying at the school. Here are snippets of some of the accolades, round up of activities which were covered in the local and national media.";

/** Copy and clipping order from https://brightoninternational.in/media/ */
export const mediaSections: { title: string; caption: string; images: string[] }[] = [
  {
    title: "EDUCATION WORLD INDIA SCHOOL RANKINGS 2024",
    caption: "Ranked No 1 Coeducational School in Chhattisgarh",
    images: [
      "WhatsApp-Image-2024-11-05-at-11.43.19.jpeg",
      "PHOTO-2024-10-28-09-52-49.jpg",
    ],
  },
  {
    title: "EDUCATION WORLD INDIA SCHOOL RANKINGS 2023",
    caption: "Ranked No 1 Coeducational School in Chhattisgarh",
    images: [
      "75f40c03-0e21-49c7-a7b3-14cf42458b33.jpg",
      "IMG_0148.png",
      "2ddeec1b-2210-4ea9-8b91-853c6a535e1e.jpg",
      "e1de5695-45dc-4613-b28c-d6da1f09ff5b.jpg",
      "IMG_0152.jpg",
      "IMG_0153.jpg",
      "IMG_0151.png",
    ],
  },
  {
    title: "ACHIEVEMENTS",
    caption: "Across various categories",
    images: [
      "Haribhoomi-Boxing-News.jpeg",
      "Screen-Shot-2018-10-11-at-10.33.45-AM.png",
      "designproposal.jpg",
      "Brightonin-Media.jpg",
      "Hitvada.jpeg",
      "Mothers-Day.jpg",
      "Hitvada-InNter-School-Debate-12-Sept-2012.jpg",
      "Debate.png",
      "Patrika-Annual-Function-2013.png",
      "Navbharat-Eye-Camp.jpg",
      "Hitvada-ANNUAL-FEST-2013.png",
      "Haribhoomi-Sparkles-2013.jpg",
      "Drawing-Competition.png",
      "Dainik-Bhaskar-11-Feb-2015.jpg",
      "Haribhoomi-22-August.png",
      "Patrika-3-October-e1507727985105.jpeg",
      "WhatsApp-Image-2025-01-16-at-18.45.06.jpeg",
      "WhatsApp-Image-2025-01-17-at-21.40.04.jpeg",
    ],
  },
  {
    title: "EDUCATION WORLD INDIA SCHOOL RANKINGS",
    caption: "Ranked No 1 School in Chhattisgarh",
    images: [
      "2018-TOI-Education-World-Awards.jpeg",
      "IMG_5900.jpg",
      "Haribhoomi.jpeg",
      "BHartiya-Digital-News.jpeg",
      "Pioneer.jpeg",
    ],
  },
];

export function NewsStrip() {
  return (
    <div className="card-shell border border-border p-7 md:p-9">
      <p className="text-sm text-muted-foreground">{mediaIntro}</p>
    </div>
  );
}
