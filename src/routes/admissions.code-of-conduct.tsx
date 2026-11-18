import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionBanner } from "@/components/SectionBanner";

export const Route = createFileRoute("/admissions/code-of-conduct")({
  head: () => ({
    meta: [
      { title: "Code of Conduct | Brighton International School, Raipur" },
      {
        name: "description",
        content:
          "At Brighton International School, the code of conduct governs the conduct, rules, behaviour and discipline of the pupil, teachers and all those involved.",
      },
      { property: "og:title", content: "Code of Conduct — Brighton International School" },
      {
        property: "og:description",
        content:
          "Upon Joining the Brighton International School, all Students and Parents must read, understand and agree by the school’s code of conduct.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CodeOfConductPage,
});

type ConductSection = {
  title: string;
  intro?: string;
  points?: string[];
  closing?: string;
};

const dressCode: ConductSection = {
  title: "DRESS CODE & TURNOUT",
  intro:
    "There is a uniform at the school, which requires neatness, modesty and standards generally accepted at educational institutions. At all times, the school respects local communities by dressing appropriately so that it does not hurt their sensibilities. The dress code for various occasions is described below:",
  points: [
    "Classes: Prescribed school uniform. Kindly read the school almanac for more details.",
    "Trips: as indicated by school authorities.",
    "When representing School within the city or outstation: uniform or as indicated by school authorities.",
    "Hair Cut: Students are supposed to keep their hairstyle as per norms laid down by the school authorities. In the case of repetitive notices to a particular student, the barber called by the authority at he school will be asked to cut hair of the student.",
  ],
};

const generalSections: ConductSection[] = [
  {
    title: "Electronic Items",
    intro:
      "No electronic items (viz Mobile, Laptop, Camera, I-pods etc.) will be allowed in the school premises during school hours. Only those permitted with prior permission will be allowed, any violation of these rules will attract penalties and the items will be confiscated. The school does not take responsibility for any such items, which may be misplaced or stolen.",
  },
  {
    title: "Academic Practices",
    intro:
      "Integrity, honour and discipline should form the basis of all academic practices. The following acts of non-compliance / violation will invite consequences as deemed fit by relevant authorities:",
    points: [
      "Plagiarism",
      "Not meeting deadlines for submission of assignments.",
      "Willful destruction of fellow students work, both academic and non-academic.",
      "Passing off fellow students work as one’s own.",
      "Using unfair means during examination. The person found copying and the one willfully aiding it will both be held responsible.",
    ],
  },
  {
    title: "Language",
    intro:
      "Use of obscene language or profanities are not expected of students of the school. Using words that are hurtful, harmful, demeaning, offensive, or embarrassing, including words that are crude or vulgar, and name-calling shall amount to violation of the school code of conduct.",
  },
  {
    title: "Physical Violence",
    intro:
      "Students need to conduct themselves with dignity at all times. Physical violence violates a person. Brighton International School has a zero tolerance policy for any such issue pertaining to manhandling or physical violence.",
  },
  {
    title: "Potentially Lethal Weapons",
    intro:
      "Possession of pistols/guns/sling shots/knives or weapons of any kind is not permitted. It is serious offence under the existing Indian Law. The item in question will be immediately impounded and the student will be expelled.",
  },
  {
    title: "Coercion",
    intro:
      "Forcing a fellow student to do things that violates integrity or privacy or against his/her wishes is against the code of conduct of the school, constitutes coercion. This will be viewed very seriously and dealt with accordingly.",
  },
  {
    title: "Sexual Harassment",
    intro:
      "Sexual harassment or inappropriate sexually motivated words or actions are unwelcome. Unwarranted touching can be embarrassing and humiliating. Unwanted or inappropriate touching of another person’s body such that the person is uncomfortable by the behavior. Students should avoid all words or action, which could be taken as sexual, advances. The School is safe, protective and nurturing environment. We intend to remain so. Therefore we regard all forms of harassment and in particular, sexual harassment as inappropriate. Violation will invite consequences as deemed fit by the code of conduct committee.",
  },
  {
    title: "Bullying",
    intro:
      "The act of bullying of intimidation goes against all tenets of socially accepted behaviour. Offenses of this nature are considered serious and there is zero tolerance for this within an outside of the school.",
  },
  {
    title: "Acts of Vandalism, Theft and Disruption",
    intro:
      "Students must respect school property. Vandalism and theft will not be tolerated. Offences of this nature are considered serious, and dealt with severely.",
  },
  {
    title: "Library Books",
    intro:
      "Books are a treasure house if information and a shared legacy of the school. They need to be cherished. Defacing, stealing of library books is an offence and will invite consequences.",
  },
  {
    title: "Pornography",
    intro:
      "The School defines pornography as viewing, being in possession of or downloading material that is sexually explicit and against the values and ethos of the School. Students violating this norm will face disciplinary action. The School Authorities have discretion to decide what materials are considered inappropriate and run counter to the values and ethos of the school.",
  },
  {
    title: "Substance Use",
    intro:
      "The possession, consumption, dealing with E-Cigarettes, Cigarettes, Cigars, Pan Masala, Alcohol or Tobacco by students is a serious offence under the Indian law and will invite a serious consequence. Smoking anything is not permitted in the school building, on the school grounds, in the neighborhood of the school, at any school function or during the school sponsored trips and excursions. The possession, consumption or dealing in drugs is an offence under the Indian Law and will lead to immediate expulsion.",
  },
  {
    title: "Cameras",
    intro:
      "Photographing people at school or at school functions using still or video cameras can be a privacy issue and should not be done without appropriate permission.",
  },
  {
    title: "Litter",
    intro:
      "The school environment should be neat and litter free. There should be no damage to school resources, property or equipment. If such damage creates an expense to the school, then the person who does the damages will be expected to reimburse the school for costs.",
  },
  {
    title: "Acceptable Use of Internet Technology",
    intro:
      "Inappropriate use of Internet communications including the sending of threatening or harassing comments or cyberbullying are unacceptable. Any incidents will be addressed as a very serious issue. Students will not publish tag and write about the school without taking appropriate permission and various social media website/blogging website.",
  },
  {
    title: "Money Raising / Lending or otherwise",
    intro:
      "No student should involve in raising money for any cause not permitted by the school authorities and shall not ask any of the fellow students to contribute to the same. The students are prohibited to lend money to each other without prior parents’ consent.",
  },
  {
    title: "Motor Cycle / Scooter or any geared or un-geared vehicle",
    intro:
      "No student is allowed to bring any vehicle to the school without the prior permission from the school. Any non-permitted vehicle shall be confiscated without any notice.",
  },
];

const laterSections: ConductSection[] = [
  {
    title: "ATTENDANCE",
    intro:
      "All students are required to participate in the daily routine as indicated in the yearly calendar. Prior sanction by the relevant authority is required for any kind of absence. The students are expected to adhere to CBSE’s guidelines regarding attendance at the school. Students must attend all school activities, (assembly) and on time. There should be ‘No Absenteeism’ from examinations without permission from Vice Principal/ Principal.",
  },
  {
    title: "Intimidation and interference in the operation of schools",
    intro: "Interfering with the discharge of the official duties of district staff by:",
    points: [
      "Using force or violence that is non-deliberate and not focused on the staff person, such as attempting to continue a fight when a staff person is trying to stop the fight and inadvertently striking that person;",
      "Disobeying the orders of school officials to leave school property or disperse as instructed; or",
      "Heckling or harassing school authorities engaged in any lawful task, function, process, or procedure of the school such that it interferes with their ability to maintain order or complete their lawful duties. This includes, but is not limited to:",
      "Persistent use of abusive or foul language directed at a School employee;",
      "Use of any electronic means (e.g., cameras, cell phone cameras, videos, or other recording devices) that foreseeably causes school staff to be embarrassed, denigrated, or demeaned; or",
      "Hindering the investigation of an incident by school staff, including but not limited to any of the following: refusing to submit to a reasonable search or respond to reasonable questions, or deliberately lying about, or encouraging others to lie deliberately about, the facts of the incident.",
    ],
  },
  {
    title: "Intimidation of School Authorities",
    intro:
      "Interfering, or attempting to interfere, with the discharge of the official duties of school personnel by using direct, deliberate, or focused threats, force, or violence, such that the staff person believes his or her safety or the well-being of his or her property is in danger. All of this will be considered as a serious offence and violation of the code.",
  },
  {
    title: "DISCIPLINARY RESPONSES",
    intro:
      "The purpose of the disciplinary policy and the code of conduct at the school is to ensure high safety standards and personal growth of students. Recognizing that students tend to respond differently, the policy allows for variable consequence within the frame of reference. The objective is to help students reflect, take responsibility and change behaviour. Repeated violation of the same disciplinary infraction will be considered disobedience. This defiance in accepting correction for having poor choices will result in more severe disciplinary action.",
  },
  {
    title: "Process for every disciplinary situation",
    intro:
      "In response to any major code violation the Principal will appoint a disciplinary sub-committee. This committee will include the Principal / Vice Principal, Head Master and Teacher. The School Head Boy / Girl or House Prefect or a student representative may be invited at the discretion of the Principal to join the committee. The Committee will conduct an investigation by contacting relevant people, in order to get as complete a picture of the situation, as possible. From the information gathered, an appropriate disciplinary action plan will be drawn up by the committee and subsequently enforced.",
  },
  {
    title: "DISCIPLINARY CONSEQUENCES",
    intro:
      "The consequences are based on the recommendation of the committee and the severity of the violation. These may include but are not limited to any of the following:",
    points: [
      "Counseling followed by a letter of apology.",
      "Work assignment: written self-reflection on topics that will raise a student’s knowledge or ethical awareness.",
      "Community service and social welfare.",
      "Writing a letter of apology to parent and staff and / or other student stating what the misbehavior was, why it happened, what has been learned and what will be done to change the behaviour.",
      "Forfeiting the right to participate in house/school activities or representing School.",
      "Mobile Message/ Letter to / Meeting with / Telephone Call to the parents informing them of the situation and if required a meeting with them in the school.",
      "Suspension from school where student will not be allowed to conduct classes for a duration of time.",
      "Parents to withdraw the student but allowed to sit for examination in the following academic term if permitted.",
      "Expulsion of the student.",
    ],
    closing:
      "Addition consequences may also be included at the discretion of the school if the situation arises. The Code of conduct is aimed at creating a harmonious community, for which self-discipline is vital. Hence, apart from what is mentioned in the code, rules and regulation communicated by the School from time to time need to be adhered to The Code of Conduct of the school is subject to amendment in keeping with the interest of the school and changing times.",
  },
];

function ConductAccordion({ sections }: { sections: ConductSection[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {sections.map((section, i) => (
        <AccordionItem key={section.title} value={`conduct-${section.title}-${i}`}>
          <AccordionTrigger className="text-left text-base">{section.title}</AccordionTrigger>
          <AccordionContent>
            {section.intro ? (
              <p className="mb-2 text-sm text-muted-foreground">{section.intro}</p>
            ) : null}
            {section.points ? (
              <ul className="grid gap-2 text-sm text-muted-foreground">
                {section.points.map((point) => (
                  <li key={point} className="rounded-xl bg-surface-2/60 px-4 py-2.5">
                    {point}
                  </li>
                ))}
              </ul>
            ) : null}
            {section.closing ? (
              <p className="mt-2 text-sm italic text-muted-foreground">{section.closing}</p>
            ) : null}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function CodeOfConductPage() {
  return (
    <section>
      <SectionBanner
        title="Code of Conduct"
        subtitle="Upon Joining the Brighton International School, all Students and Parents must read, understand and agree by the school’s code of conduct."
        tone="dark"
      />
      <div className="card-shell mt-3 border border-border p-4 md:p-6">
        <p className="mb-4 text-sm text-muted-foreground">
          At Brighton International School, the code of conduct governs the conduct, rules, behaviour and
          discipline of the pupil, teachers and all those involved. Adherence to the code is paramount and the
          custodian to safe keep the integrity of the code is the school ‘code of conduct’ committee. The
          committee comprises of the Principal, Vice Principal & the Headmaster of Brighton International School.
          The School code of conduct committee is available to any student seeking clarity, help or guidance in
          all matters relating to school conduct. Students are expected to honour the code of conduct, both within
          the school and when they travel outstation to represent the school. When student’s behaviour does not
          meet required standards, the committee will oversee disciplinary action and inform parents, coordinators
          and other administrators as necessary. All disciplinary action is viewed as a learning opportunity for
          students to adopt more responsible behaviour. Ignorance of school code, violation of the school rules or
          disciplinary guidelines will not be accepted and will invite consequences as deemed fit by relevant
          authorities.
        </p>
        <ConductAccordion sections={[dressCode]} />
        <p className="px-5 py-3 font-display text-sm font-medium">GENERAL</p>
        <ConductAccordion sections={generalSections} />
        <div className="mt-3">
          <ConductAccordion sections={laterSections} />
        </div>
      </div>
    </section>
  );
}
