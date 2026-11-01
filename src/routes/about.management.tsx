import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { meta } from "@/components/TabNav";
import { PageHeader } from "@/components/SiteLayout";
import principal from "@/assets/jayshree-nair.png";
import vicePrincipal from "@/assets/neha-sethi.png";
import headMistress from "@/assets/asha-sharma.png";
import chairman from "@/assets/rp-singh.png";
import managingDirector from "@/assets/abhiney-singh.png";

export const Route = createFileRoute("/about/management")({
  head: () =>
    meta("Management", "Meet the people who lead Brighton International School, Raipur — Principal, Vice Principal, Head Mistress, Chairman and Managing Director."),
  component: Management,
});

const people = [
  {
    name: "Mrs Jayshree Nair",
    role: "Principal",
    photo: principal,
    bio: "27 years in education. A graduate of Regional College of Education, Bhopal, with Masters in English, Economics, Education and Business Administration. A goal-oriented leader, team builder and problem solver.",
    msg: "The school should be a secure, pleasant and supportive place where everyone treats others as they want to be treated. Alongside academics, we help every student become a well-rounded individual. Parents are part of the team, and we consider our job done only when they see Brighton as a halo around their child's dream.",
  },
  {
    name: "Mrs Neha Sethi",
    role: "Vice Principal",
    photo: vicePrincipal,
    bio: "Over 15 years as a teacher, Academic Coordinator and Vice Principal, specialising in Mathematics, Science and English. Recently completed a Master's in Educational Psychology as University Topper.",
    msg: "Brighton is your child's next home, and we keep making it safer, happier and more beautiful. Your ward is our child. Our dedicated teachers set high academic and co-curricular goals, and regular contact with parents keeps each child on the right path. To our young minds: it always seems impossible until it's done.",
  },
  {
    name: "Mrs Asha Sharma",
    role: "Head Mistress",
    photo: headMistress,
    bio: "At Brighton since 2015, with deep experience in early childhood education. BA in English Literature, BEd, and a Diploma in Child Education & Applied Psychology. An advocate of learning by doing.",
    msg: "Our value-based pastoral system makes respect and kindness part of every day. A blend of academics and activities makes our students self-reliant and ready for a diverse world. Welcome to our Pre-Primary and Primary wing — you will be amazed at how much learning takes place.",
  },
  {
    name: "Mr R P Singh",
    role: "Chairman",
    photo: chairman,
    bio: "A visionary in education since 1991, he has set up several institutions across Chhattisgarh and Madhya Pradesh, with a spotless record and a name synonymous with quality education.",
    msg: "At Brighton, we see lifelong learning as a goal for all, with quality at its heart. We aim to give every student the chance to fulfil their ambitions and to recognise every achievement, small or big. We seek to build responsible citizens with tolerance, understanding and integrity — and we seek our parents as partners, within and beyond the school gates.",
  },
  {
    name: "Mr Abhiney Singh",
    role: "Managing Director",
    photo: managingDirector,
    bio: "Teacher, consultant and media professional turned entrepreneur, with experience at Mindshare WPP, Zapak.com and Big Broadcasting. An MBA from MICA Ahmedabad and an engineer from NIT Raipur, and an active Rotarian.",
    msg: "School is where the true DNA of a person's personality takes shape. Parents share this huge responsibility with us, and it is our duty to do justice to their trust, time and money. We bring in the best practices from around the world and try to improve every day, keeping Brighton open, frank and centred on every child.",
  },
];

function Management() {
  return (
    <>
      <PageHeader eyebrow="Management" title="The people behind Brighton" intro="Tap a name to read their message to parents." />
      <Accordion type="single" collapsible defaultValue="p-0" className="mt-6">
        {people.map((p, i) => (
          <AccordionItem key={p.name} value={`p-${i}`}>
            <AccordionTrigger className="text-left">
              <span className="flex items-center gap-4">
                {"photo" in p && p.photo ? (
                  <img src={p.photo} alt="" className="h-16 w-12 shrink-0 rounded-lg object-cover object-top" />
                ) : null}
                <span>
                  <span className="block font-display text-xl">{p.name}</span>
                  <span className="text-sm text-highlight">{p.role}</span>
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className={`grid gap-4 ${"photo" in p && p.photo ? "md:grid-cols-[9rem_1fr_1fr]" : "md:grid-cols-2"}`}>
                {"photo" in p && p.photo ? (
                  <img src={p.photo} alt={`${p.name}, ${p.role}`} className="w-full rounded-2xl object-cover object-top" />
                ) : null}
                <p className="text-muted-foreground">{p.bio}</p>
                <blockquote className="rounded-2xl bg-blush p-5 text-sm">
                  <p className="mb-2 font-display text-primary">{p.role}'s message</p>
                  {p.msg}
                </blockquote>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <section className="card-shell mt-6 p-7">
        <h2 className="font-display text-2xl text-primary">School Management Committee</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {smc.map(([role, names]) => (
            <div key={role} className="rounded-2xl bg-blush p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-highlight">{role}</p>
              <ul className="mt-2 space-y-1 text-sm">
                {names.map((n) => <li key={n}>{n}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

// From brightoninternational.in/school-management-committee
const smc: [string, string[]][] = [
  ["Principals", ["Mrs. Jayshree Nair", "Mrs. Hemali Singh", "Mrs. Vandana Singh"]],
  ["Teachers", ["Mrs. Reena Shukla", "Mrs. Namrata Dayal", "Mr. Rohit Shukla", "Mrs. Harshi Sidana"]],
  ["Parents", ["Mr. Mitendra Singh", "Mrs. Ritu Jha", "Mrs. Varshika Jayendra Vakhariya", "Mr. Jagdish Baitha", "Mrs. Ruchi Singh", "Mrs. Sheetal Tanikhela"]],
];
