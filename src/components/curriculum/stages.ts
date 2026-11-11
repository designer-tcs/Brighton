import {
  Backpack,
  BookOpen,
  Briefcase,
  Calculator,
  CalendarDays,
  Clock,
  Cpu,
  FlaskConical,
  Globe,
  Heart,
  Landmark,
  Languages,
  Leaf,
  Lightbulb,
  ListOrdered,
  Monitor,
  Microscope,
  Music,
  Palette,
  PersonStanding,
  Scale,
  Sheet,
  Sigma,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import prePrimary from "@/assets/prog-pre-primary.jpg";
import firstDiscoveries from "@/assets/first-discoveries.jpg";
import earlyLearning from "@/assets/early-learning.jpg";
import familiarFaces from "@/assets/familiar-faces.jpg";
import learningTakingPart from "@/assets/learning-taking-part.jpg";
import primary from "@/assets/prog-middle.jpg";
import primarySupport from "@/assets/primary-support.jpg";
import primaryClassroom from "@/assets/primary-classroom.jpg";
import primaryWriting from "@/assets/primary-writing.jpg";
import middle from "@/assets/middle-science-model.jpg";
import middleMap from "@/assets/middle-map.jpg";
import middleEmc from "@/assets/middle-emc.jpg";
import secondary from "@/assets/secondary-study.jpg";
import secondaryMicroscope from "@/assets/secondary-microscope.jpg";
import seniorSecondary from "@/assets/prog-secondary.jpg";
import scienceEmc from "@/assets/school/science-emc.jpg";
import libraryReading from "@/assets/library-reading.jpg";
import teacherHelp from "@/assets/school/primary-help.jpg";
import seniorRobot from "@/assets/senior-robot.jpg";
import seniorLab from "@/assets/senior-lab.jpg";
import seniorSolder from "@/assets/senior-solder.jpg";

type Item = { t: string; b: string; points?: Item[]; list?: string[] };
type Box = Item & { icon: LucideIcon; subjects?: string[]; kicker?: string; note?: Item; feature?: boolean };
type Note = { q: string; a: string };

export type Stage = {
  slug: string;
  name: string;
  label: string;
  classesText: string;
  headline: string;
  subline: string;
  sublineMore?: string;
  heroAlt: string;
  tabs: [string, string, string];
  images: { hero?: string; heroPosition?: string; overview?: string; experience?: string; approach?: string; support?: string };
  overview: { title: string; intro: string; boxes: Box[]; extra?: { title: string; body: string[]; chips?: string[] } };
  experience: { title: string; sub: string; items: Item[] };
  classEvent?: { kicker: string; title: string; lines: string[] };
  voice?: { title: string; body: string };
  futureReady?: {
    kicker: string;
    title: string;
    intro: string[];
    items: (Item & { icon: LucideIcon; kicker?: string })[];
    close: string;
  };
  approach: { title: string; intro: string; items: Item[] };
  support: { kicker?: string; title: string; sub: string; items: Item[]; notes?: Note[] };
  readiness?: { title: string; lines: string[]; close?: string };
  form: { title: string; sub: string; formTitle: string; classes: string[] };
  week: { title: string; sub: string; facts: (Item & { icon: LucideIcon })[]; pendingTimetable?: boolean };
  faqs: { q: string; a: string }[];
};

const senior7 = (last: Item & { icon: LucideIcon }) => [
  { icon: Clock, t: "School hours", b: "7:15 AM – 1:00 PM" },
  { icon: CalendarDays, t: "School days", b: "Monday – Saturday" },
  { icon: ListOrdered, t: "Daily periods", b: "Seven periods of 40 minutes" },
  last,
];
const classSize = { icon: Users, t: "Class size", b: "Maximum 30 students" };

const futureReady = {
  kicker: "Preparing Students for Tomorrow",
  title: "Future-Ready Skills",
  intro: [
    "Equipping learners with essential 21st-century skills.",
    "At Brighton International School, we believe that education must prepare students not only for academic success but also for the challenges and opportunities of the future.",
    "For students of Grades IX to XII, we conduct dedicated weekly skill-development classes that focus on building practical competencies essential for higher education, careers and everyday life.",
  ],
  items: [
    { icon: Monitor, t: "Digital Literacy", kicker: "Using technology effectively", b: "Students develop the ability to navigate the digital world confidently and responsibly. They learn to use digital tools, access and evaluate information, communicate effectively and understand the importance of digital safety and responsible online behaviour." },
    { icon: Sheet, t: "Excel", kicker: "Developing data management skills", b: "Students are introduced to Microsoft Excel and its practical applications. They learn to organise and manage data, use formulas and functions, perform calculations and present information through tables and charts. These skills help them work with information efficiently and develop analytical abilities." },
    { icon: Lightbulb, t: "Design Thinking", kicker: "Turning ideas into solutions", b: "Students are encouraged to approach challenges creatively and systematically. Through identifying problems, understanding needs, brainstorming ideas and exploring possible solutions, they develop innovation, critical thinking and problem-solving abilities." },
    { icon: Users, t: "Soft Skills", kicker: "Building confidence and interpersonal abilities", b: "These sessions focus on developing effective communication, teamwork, collaboration, leadership, adaptability and interpersonal skills. Students learn to express themselves confidently, work with others and handle different situations constructively." },
    { icon: Wallet, t: "Financial Literacy", kicker: "Making informed financial decisions", b: "Students develop an understanding of basic financial concepts such as budgeting, saving, spending wisely and managing money. These sessions encourage financial awareness, responsible decision-making and the development of healthy financial habits." },
  ],
  close: "Our endeavour is to equip students with practical knowledge, confidence and essential life skills that complement academic learning and prepare them to navigate higher education, the workplace and everyday life successfully.",
};

export const stages: Stage[] = [
  {
    slug: "pre-primary",
    name: "Pre-Primary",
    label: "Pre-Primary · Nursery to KG II",
    classesText: "Nursery, KG I and KG II",
    headline: "A Thoughtful Beginning to School",
    subline:
      "The early years lay the foundation for lifelong learning. Our Pre-Primary programme nurtures curiosity, confidence, communication and independence through structured teaching, guided activities, purposeful play and regular practice in a caring, stimulating environment.",
    heroAlt: "Two pre-primary girls in Brighton uniform working at a table",
    tabs: ["Learning Areas", "Through Experience", "The School Week"],
    images: {
      hero: prePrimary,
      heroPosition: "object-center",
      overview: firstDiscoveries,
      experience: learningTakingPart,
      approach: earlyLearning,
      support: familiarFaces,
    },
    overview: {
      title: "Learning Areas",
      intro: "",
      boxes: [
        {
          icon: BookOpen,
          t: "Language & Literacy",
          b: "English is the medium of instruction from Nursery. Through age-appropriate activities, children develop listening, speaking, reading and writing. Jolly Phonics introduces 42 letter sounds and 72 tricky words; children practise sound recognition, blending and reading sentences and suitable texts, with the aim of becoming increasingly fluent, independent readers by KG II. Conversations, stories, rhymes, show-and-tell and group discussions build vocabulary and expression. Pre-writing, pencil control and letter formation prepare children to write words and simple sentences.",
        },
        {
          icon: Calculator,
          t: "Early Mathematics",
          b: "Practical, concrete experiences develop number recognition, counting, sequencing, quantities, comparisons and basic mathematical relationships. The focus is on conceptual clarity, logical thinking and problem-solving, not memorisation alone.",
        },
        {
          icon: Leaf,
          t: "Understanding Our Surroundings",
          b: "Environmental Studies, observation and discussion help children explore themselves, family, school, community, nature, plants, animals and everyday life. Children are encouraged to observe, ask questions and share experiences.",
        },
        {
          icon: Music,
          t: "Creative Expression, Movement & Play",
          b: "Art, music, dance, rhymes and creative activities nurture imagination, expression, coordination and confidence. Structured play, physical activities and yoga develop balance, body awareness, cooperation, sharing, turn-taking, teamwork and healthy habits.",
        },
        {
          icon: Heart,
          t: "Values & Life Skills",
          b: "Children practise respect, sharing, helping, cleanliness, personal hygiene, care for belongings, following instructions and routines, responsibility, self-discipline and consideration for others. Theme-based assemblies explore kindness, honesty, gratitude, respect and responsibility through performances and presentations.",
        },
      ],
    },
    experience: {
      title: "Learning Through Experience",
      sub: "Purposeful play, guided exploration, experiments and collaborative activities develop communication, problem-solving, patience, cooperation and respect. Regular exposure to books supports vocabulary, comprehension and imagination; parents are encouraged to read with children at home.",
      items: [
        {
          t: "Theme-Based Vocabulary Through Attendance",
          b: "Each month, children learn words around a theme, such as fruits, vegetables, flowers, animals, birds, transport or professions, and recall them during daily attendance. For example, a fruit theme may include around 30 fruit names. Regular practice strengthens word recognition, pronunciation, memory and confidence.",
          list: ["Fruits", "Vegetables", "Flowers", "Animals", "Birds", "Transport", "Professions"],
        },
        { t: "Growing Independence & Communication", b: "Everyday classroom experiences help children follow instructions, manage belongings, complete age-appropriate tasks and express their needs. Storytelling, show-and-tell, discussions, presentations and assemblies build vocabulary, speaking skills and stage confidence." },
      ],
    },
    classEvent: {
      kicker: "Pre-Primary",
      title: "Annual Class Event",
      lines: [
        "Each class presents a yearly theme-based event for parents, showcasing learning and talents. Preparation and performance develop confidence, communication, teamwork, coordination, discipline and responsibility. The stage becomes another classroom for expression and growth.",
      ],
    },
    approach: {
      title: "Teaching & Learning Approach",
      intro: "Activities, demonstrations, discussions, practical experiences and purposeful play connect concepts with familiar situations.",
      items: [
        { t: "Daily Jolly Phonics and Independent Thinking", b: "Daily Jolly Phonics and independent thinking are encouraged. English remains the medium of instruction; textbook and notebook content is not translated into Hindi. Teachers support understanding through explanations, examples, repeated reading and discussion, with smart panels enriching instruction." },
      ],
    },
    support: {
      kicker: "Familiar faces",
      title: "Tracking Progress – TAB & Individual Attention",
      sub: "Track at Brighton (TAB) is a monthly anecdotal record of participation, emerging skills, learning habits, progress and areas needing attention. Each class has a designated mother teacher who observes children and provides age-appropriate guidance.",
      items: [
        {
          t: "Partnership with Parents",
          b: "Parents support learning at home through:",
          list: [
            "Regular reading and daily dictation.",
            "Meaningful conversations, age-appropriate independent tasks and good routines.",
            "Regular school attendance.",
          ],
        },
      ],
      notes: [
        { q: "Homework", a: "No written homework is prescribed. Reading, daily dictation and suitable home practice reinforce learning." },
        { q: "External tuition", a: "External tuition is not encouraged at Pre-Primary. Regular attendance, classroom participation and home practice support steady progress." },
      ],
    },
    readiness: {
      title: "Grade I Readiness",
      lines: [
        "By KG II, we aim to prepare children for Grade I with essential literacy and mathematical skills, confidence, independence, positive social habits and curiosity.",
      ],
    },
    form: {
      title: "Your Child's First Chapter at Brighton",
      sub: "Speak with our admissions team about the Pre-Primary programme and the application process.",
      formTitle: "Pre-Primary Admissions Enquiry",
      classes: ["Nursery", "KG I", "KG II"],
    },
    week: {
      title: "A Week at Brighton",
      sub: "The weekly routine includes classroom learning, phonics, reading, Mathematics, EVS, creative experiences, physical activities and group participation. No written homework is prescribed; reading, dictation and appropriate practice at home are encouraged.",
      pendingTimetable: false,
      facts: [
        { icon: Clock, t: "School timings", b: "9:15 AM – 12:50 PM" },
        { icon: CalendarDays, t: "Working days", b: "Monday to Saturday" },
        { icon: Backpack, t: "Homework", b: "No written homework. Regular reading, daily dictation and practice at home." },
      ],
    },
    faqs: [
      { q: "Which classes are included?", a: "Nursery, KG I and KG II." },
      { q: "What is the minimum age for Nursery admission?", a: "Children must be three years old as on 31 March 2027." },
      { q: "What are the school timings?", a: "9:15 a.m. to 12:50 p.m., Monday to Saturday. Any changes will be communicated officially." },
      { q: "What is the medium of instruction?", a: "English exclusively, from Nursery onwards." },
      { q: "How are early reading and speaking skills developed?", a: "Jolly Phonics introduces 42 letter sounds and 72 tricky words. Conversations, storytelling, rhymes, show-and-tell, discussions and presentations build vocabulary, reading, sentence formation and confidence." },
      { q: "Is written homework given?", a: "No. Regular reading, daily dictation and appropriate home practice are encouraged." },
      { q: "Are English lessons translated into Hindi?", a: "No. Teachers use explanations, examples, repeated reading and discussion to support understanding." },
      { q: "How is Mathematics taught?", a: "Through concept-based practical activities that develop number sense, understanding of quantities, logical thinking and problem-solving." },
      { q: "What is theme-based attendance?", a: "Children recall words related to a monthly theme during attendance, building vocabulary, memory and speaking confidence." },
      { q: "What is the Annual Class Event?", a: "A theme-based presentation for parents, teachers and peers that develops confidence, communication and teamwork." },
      { q: "How is overall progress monitored?", a: "Teachers observe participation, emerging skills and learning habits. Monthly TAB records identify progress and areas needing support." },
      { q: "Is external tuition encouraged?", a: "No. The school emphasises attendance, classroom participation and appropriate home practice." },
      { q: "How do you prepare children for Grade I?", a: "By developing literacy and mathematical skills, independence, communication, confidence and positive social habits." },
      { q: "How can parents support learning?", a: "Through regular reading, daily dictation, meaningful conversations, independent tasks and consistent attendance." },
    ],
  },
  {
    slug: "primary",
    name: "Primary",
    label: "Primary · Classes 1 to 5",
    classesText: "Classes 1 to 5",
    headline: "Building the Foundations for Academic Success",
    subline: "The Primary years move students from foundational skills to deeper subject understanding, complex tasks and greater academic responsibility. We develop subject knowledge, clear thinking, communication, application and ownership of learning.",
    heroAlt: "Students working at computers",
    tabs: ["Our Curriculum", "Classroom Experiences", "The School Day"],
    classEvent: {
      kicker: "Nursery – Class V",
      title: "Class Event",
      lines: [
        "Every class gets its own chance to put on a show — a lively mix of acts performed in front of parents. Children learn to speak up, work as a team and carry a stage with confidence.",
        "Theme-based presentations develop planning, cooperation, commitment and presentation.",
      ],
    },
    images: {
      hero: primary,
      heroPosition: "object-[center_42%]",
      experience: primarySupport,
      approach: primaryClassroom,
      support: primaryWriting,
    },
    overview: {
      title: "A Comprehensive Academic Programme",
      intro: "The Primary curriculum develops essential academic skills while introducing children to new academic interests and ways of learning.",
      boxes: [
        { icon: BookOpen, t: "English", kicker: "Comprehension and expression", b: "Students develop reading fluency, comprehension, vocabulary, grammar, spelling and composition, learning to interpret texts, organise thoughts and express ideas clearly in speech and writing. Public speaking and monthly student presentations continue alongside this work." },
        { icon: Languages, t: "Hindi", kicker: "Reading and language proficiency", b: "Students strengthen vocabulary, grammar, comprehension and written expression through varied texts and oral and written activities." },
        { icon: Calculator, t: "Mathematics", kicker: "Reasoning and application", b: "Progressive concepts, operations and problem-solving develop accuracy, logical reasoning, pattern recognition and practical application. Classroom study is combined with activity-based learning." },
        { icon: Leaf, t: "Environmental Studies", b: "Students explore people, places, living organisms, natural resources and the environment, learning to observe relationships and recognise environmental responsibilities. Weekly themes connect learning across subjects." },
        { icon: Globe, t: "General Knowledge", b: "Age-appropriate exercises develop aptitude and logical reasoning. Students explore people, places, events, discoveries and current topics, connecting classroom learning with everyday life. Quiz activities offer opportunities to explore and share what they know." },
        { icon: Cpu, t: "Computer Education", b: "Practical, hands-on classes develop grade-appropriate digital skills and purposeful technology use. The in-house syllabus is designed to meet students' learning needs; separate computer textbooks are not required. Robotics and coding are offered from Class 1." },
        { icon: Palette, t: "Art, Music & Physical Education", b: "Creative and physical activities develop expression, coordination, discipline and perseverance, while helping students appreciate different talents and regular practice. Experiences are organised by grade. Art, craft, music, dance and drama sit alongside value education and life skills." },
      ],
    },
    experience: {
      title: "Interests Have Room to Grow",
      sub: "Books, practical experiences and wider participation give children opportunities to discover what interests them.",
      items: [
        { t: "Books & Reading", b: "Two library periods each week give children regular time to explore books and develop their reading interests." },
        { t: "Technology in Practice", b: "The computer, robotics and Atal Tinkering labs provide practical settings for children's growing interest in technology." },
        { t: "Discovery & Participation", b: "Olympiads, a yearly field visit and weekly club or activity periods extend children's experiences beyond regular lessons." },
        { t: "Discovering and Demonstrating Talent", b: "Inter-house activities and competitions encourage teamwork, perseverance and sportsmanship. Assemblies build awareness, communication and public speaking. Creative and physical activities develop talents through practice. Projects, presentations and visits connect learning with real-world settings." },
      ],
    },
    approach: {
      title: "From Concepts to Application",
      intro: "Teachers explain concepts systematically, use examples and encourage independent thinking. Interactive panels and digital resources supplement instruction when useful.",
      items: [
        { t: "Explain and Apply", b: "Students learn to understand facts and methods, identify relevant information, explain answers in their own words, apply concepts to unfamiliar questions, correct mistakes and develop reasoning and problem-solving." },
        { t: "Reading, Writing and Communication", b: "Students develop comprehension, interpretation, vocabulary, language usage, clear and grammatically appropriate answers, spelling, sentence construction, logical organisation and confidence in expressing ideas. Reading, dictation, spelling and written exercises reinforce understanding and independent expression." },
        { t: "Academic Discipline", b: "Students maintain neat, systematic notebooks and complete classwork on time. They revise regularly, prepare for assessments through consistent practice, check work, follow instructions, accept corrections and take responsibility for assigned tasks. These habits help students manage their workload and prepare for greater independence." },
        { t: "Connections Across Subjects", b: "Weekly thematic teaching helps children see relationships between subjects and bring different ideas together." },
        { t: "Questions and Discussion", b: "Flipped-classroom sessions take place twice a week, while daily inquiry-based learning begins in Class 3. Weekly group work and monthly presentations give children practice in contributing, listening and explaining their thoughts." },
      ],
    },
    support: {
      kicker: "Track at Brighton",
      title: "Attention That Supports Steady Progress",
      sub: "TAB is a monthly anecdotal record of participation, emerging skills, learning habits, strengths and areas needing attention. It provides a broader view of development and supports continuity between grades. Regular assessment and communication help teachers and families understand how each child is progressing.",
      items: [
        { t: "Classroom Continuity", b: "Each class has a designated class teacher and a maximum of 30 students." },
        { t: "Supporting Different Learning Needs", b: "Teachers review classroom performance and academic work to identify differences in pace, understanding and confidence. Further explanation, revision and appropriate practice help each child progress and approach challenges confidently." },
        { t: "Assessment for Improvement", b: "Written and oral assessments, classwork, notebook work, activities and academic tasks help teachers review understanding, identify errors and gaps, monitor written accuracy, determine where practice is needed and guide improvement. Feedback and correction help students learn from mistakes and build confidence." },
        { t: "Character, Conduct and Responsibility", b: "School routines and shared responsibilities nurture honesty, discipline, respect, empathy and accountability. Students learn to follow rules, care for school property, listen, respect viewpoints and fulfil responsibilities." },
        { t: "Partners in Progress", b: "Four parent–teacher meetings each year provide opportunities to discuss progress and areas requiring further support. Parents support progress through attendance, a consistent study routine, reading and revision.", list: ["Encourage daily classwork revision, independent practice, effort and improvement.", "Provide a suitable study environment and a consistent routine.", "Communicate concerns through the school's prescribed channels."] },
      ],
      notes: [
        { q: "Is written homework assigned?", a: "No written homework is assigned. Students are encouraged to read, revise lessons and practise writing independently at home. Grade-appropriate practice consolidates concepts, accuracy and academic skills." },
      ],
    },
    readiness: {
      title: "Ready for the Next Academic Stage",
      lines: [
        "The Primary years strengthen subject knowledge, comprehension, written expression, mathematical reasoning, organisation and problem-solving, preparing students for Middle School's advanced content and greater independent study.",
      ],
    },
    form: {
      title: "Discover the Primary Years at Brighton",
      sub: "Connect with our admissions team to learn more about the programme and entry requirements.",
      formTitle: "Primary Admissions Enquiry",
      classes: ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"],
    },
    week: {
      title: "A Week at Brighton – Primary",
      sub: "Explore the place of academics, practical learning and wider activities across the school week.",
      facts: [
        { icon: Clock, t: "School hours", b: "9:15 AM – 3:00 PM" },
        { icon: CalendarDays, t: "School days", b: "Monday – Saturday" },
        { icon: ListOrdered, t: "Daily periods", b: "Seven periods of 40 minutes" },
        classSize,
        { icon: Backpack, t: "Homework", b: "No written homework. Reading, revision and writing practice at home." },
      ],
    },
    faqs: [
      { q: "Which grades are included?", a: "Grades I to V." },
      { q: "Which curriculum is followed?", a: "CBSE, organised according to applicable grade-level requirements." },
      { q: "What is the medium of instruction?", a: "English. Hindi is taught as a language subject." },
      { q: "How do teachers ensure conceptual understanding?", a: "Systematic explanations, examples, discussions, exercises and activities encourage students to explain and apply learning independently." },
      { q: "How are reading and writing developed?", a: "Through comprehension, vocabulary, spelling, grammar, written expression, reading, dictation and written exercises." },
      { q: "How is academic progress assessed?", a: "Through written and oral assessments, classwork, notebook work, activities and other academic tasks." },
      { q: "What if a child finds a concept difficult?", a: "Teachers identify areas of difficulty and provide further explanation, revision and suitable practice." },
      { q: "What is TAB?", a: "A monthly record of participation, learning habits, emerging skills, strengths and areas needing attention." },
      { q: "Is written homework assigned?", a: "No. Independent study, reading, revision and writing practice at home are encouraged." },
      { q: "How can parents support learning?", a: "Provide a suitable study environment and encourage daily revision, regular reading and independent writing practice." },
      { q: "How is independent study encouraged?", a: "Students practise revising lessons, organising notebooks, reading instructions, checking work and seeking clarification." },
      { q: "Is a separate Computer textbook required?", a: "No. The in-house syllabus is taught through practical classes; no separate computer textbook is required." },
      { q: "What activities are offered beyond lessons?", a: "Class events, inter-house activities, competitions, assemblies, creative and physical activities, projects and educational experiences, as applicable." },
      { q: "How are values and discipline reinforced?", a: "Through routines, respect for others, care for property, responsibility, honesty, empathy and cooperation." },
      { q: "How does Primary prepare students for Middle School?", a: "By strengthening subject knowledge, comprehension, writing, mathematical reasoning, problem-solving and independent study." },
      { q: "How can parents discuss academic concerns?", a: "Through the school's prescribed communication channels with the appropriate teacher or authority." },
      { q: "Should children be compared with classmates?", a: "No. Each child has an individual pace, strengths and interests. Parents are encouraged to recognise personal progress and effort." },
      { q: "Which subjects are taught in Primary?", a: "Students study English, Hindi, Mathematics, EVS, Computer Science and General Knowledge, alongside skill subjects and creative activities." },
      { q: "When do robotics and coding begin?", a: "Robotics and coding are offered from Class 1." },
      { q: "How often do students visit the library?", a: "Primary students have two library periods each week." },
      { q: "What are the school timings?", a: "Classes run from 9:15 AM to 3:00 PM, Monday to Saturday." },
      { q: "How is my child's progress supported?", a: "Regular assessments, additional help where needed and four parent–teacher meetings each year support ongoing communication about learning." },
    ],
  },
  {
    slug: "middle",
    name: "Middle",
    label: "Middle · Classes 6 to 8",
    classesText: "Classes 6 to 8",
    headline: "Building Strong Foundations for Independent Learning",
    subline: "The Middle curriculum strengthens conceptual understanding and subject skills while preparing students for higher classes. Practical activities, projects, discussions, presentations, experiments and independent thinking extend learning beyond textbooks.",
    heroAlt: "A girl in a light blue Brighton shirt and glasses building a stick-and-ball science model",
    tabs: ["Our Curriculum", "Applied Learning", "The School Day"],
    classEvent: {
      kicker: "Class Event",
      title: "Every student gets an opportunity to take part",
      lines: [
        "Class Events bring two or three sections together for theme-based presentations on social awareness and life values. Every student gets an opportunity to participate. These nurture confidence, creativity, teamwork and social sensitivity.",
        "Special Assemblies address occasions and social issues through speeches, role plays and performances. Sparkles, the biennial cultural function, offers performance, anchoring, coordination and event-management opportunities.",
      ],
    },
    images: { hero: middle, heroPosition: "object-[68%_32%]", experience: middleMap, approach: scienceEmc, support: middleEmc },
    overview: {
      title: "A Broader Academic Perspective",
      intro: "The programme develops conceptual clarity, subject knowledge and independent application. The Middle years introduce new disciplines while strengthening the knowledge and learning habits students will carry into Secondary school.",
      boxes: [
        { icon: Languages, t: "Languages", kicker: "Learning to communicate with confidence", b: "Grammar is integrated into textbook lessons and literature so students understand language in context. Real-life writing, role plays, debates, discussions and interactive activities make learning purposeful. English and Hindi continue, with Sanskrit introduced as a third language from Grade VI." },
        { icon: Calculator, t: "Mathematics", kicker: "Practical and meaningful", b: "Real-life situations and practical examples build conceptual clarity and logical thinking. Varied practice strengthens problem-solving; students explore methods independently and develop confidence by applying mathematics in everyday life. The Maths Club offers further opportunities to pursue the subject." },
        { icon: FlaskConical, t: "Science", kicker: "Exploring and experimenting", b: "Science is taught as a combined subject. Dedicated Physics, Chemistry and Biology laboratories and the Curiosity Lab provide hands-on learning. Experiments, demonstrations, research and presentations deepen understanding, and concept-based questions encourage students to frame their own answers." },
        { icon: Landmark, t: "Social Studies", kicker: "Past, present and future", b: "Role plays, discussions, debates, documentaries, map work and historical-source analysis encourage critical thinking, interpretation and independent answers, while deepening understanding of society and different perspectives." },
        { icon: Cpu, t: "Computing, Robotics & AI", b: "From Grades I to VIII, practical learning includes MS Office, website design and relevant coding languages. Artificial Intelligence joins Computer Science as a subject. The robotics team encourages students to identify real-world problems and design sustainable technology solutions. The Atal Tinkering Lab, STEM projects and design thinking support challenge identification, prototyping and sustainable solutions." },
        { icon: Palette, t: "Weekly Enrichment Classes", feature: true, b: "General Knowledge, value education, life skills and yoga complement academic study.", list: ["Art: imagination, creativity and visual expression.", "Craft: creativity, patience and fine motor skills.", "Music: musical concepts, rhythm, listening and appreciation.", "Dance: expression, coordination, rhythm and confidence.", "Library: reading habits, vocabulary, comprehension and independent learning.", "Robotics: technology, logical thinking, creativity and problem-solving.", "Sports: fitness, discipline, teamwork and sportsmanship."] },
      ],
    },
    experience: {
      title: "A Wider Circle of Experiences",
      sub: "Activities, programmes and platforms help students discover interests, build skills, assume responsibility and grow through leadership, practical learning, innovation, cultural expression, community engagement and competitions.",
      items: [
        { t: "Clubs & Interests", b: "Science, mathematics, robotics and coding clubs allow students to pursue interests alongside creative and debating opportunities. Artisans Club, Green Guardians Cooking Crew, Eco Club, Bake-a-Licious Club and other initiatives encourage creativity, environmental awareness, teamwork, mentoring and service. Donation drives nurture empathy." },
        { t: "Voice & Responsibility", b: "Model United Nations, student council participation and monthly presentations create opportunities to contribute ideas and take on responsibility. Student Council, Badge and Oath Ceremonies develop leadership, teamwork, accountability and decision-making. Youth Parliament uses research, debate and expression to help students understand democracy, governance and responsible citizenship." },
        { t: "Learning Beyond School", b: "One field visit a year and opportunities for educational tours extend students' learning into different settings. Students may represent the school in competitions at regional, state, national and international levels." },
        { t: "KINDLE and Hobby Classes", b: "KINDLE offers hands-on baking, jam and candle making, sewing, pottery, decorative crafts and practical skills such as tyre changing. Students select a hobby for the academic year and may choose another the following year." },
        { t: "Mindspark", b: "The annual inter-school fest features literary, cultural, technical and sporting competitions, fostering collaboration and confidence." },
        { t: "Social, Environmental and Civic Responsibility", b: "Donation drives, kitchen gardening, plantation, recycling and sustainability projects build empathy, environmental awareness and social responsibility. Health Week and Independence Week include themed activities and sessions promoting healthy lifestyles, personal well-being, patriotism, national pride and responsible citizenship. Student-led stalls at Parent Interaction Programmes involve planning, creating, marketing and selling products." },
      ],
    },
    voice: {
      title: "Awareness for Life",
      body: "Age-appropriate interactive sessions address adolescence, personal and menstrual hygiene, stress management and traffic rules. They build essential knowledge, healthy habits, emotional well-being and informed, responsible choices.",
    },
    approach: {
      title: "Examining Ideas in Greater Depth",
      intro: "Inquiry, discussion and practical work help students take a more considered approach to what they learn.",
      items: [
        { t: "Daily Inquiry", b: "From Class VI, enquiry-based learning carries greater weight. Students question and investigate as part of everyday teaching, with a lesson plan that is activity-led and sometimes takes learning beyond the classroom." },
        { t: "Weekly Case Studies", b: "Case studies give students opportunities to examine situations, discuss different perspectives and apply their understanding." },
        { t: "Practical Exploration", b: "The hands-on Curiosity Lab and the Robotics Lab make a real difference, alongside the computer and Atal Tinkering labs." },
      ],
    },
    support: {
      title: "Guidance Through the Middle Years",
      sub: "Consistent classroom support helps students respond to a broader curriculum and increasing academic expectations.",
      items: [
        { t: "Classroom Support", b: "Each class has a designated class teacher, with student numbers capped at 30." },
        { t: "Individual Learning Needs", b: "Additional help classes, doubt-clearing support and work adapted to different ability levels are available according to need." },
        { t: "Communication with Families", b: "Four parent–teacher meetings each year provide opportunities to discuss progress, alongside assessments and the annual report card." },
      ],
    },
    readiness: {
      title: "Learning, leading and creating",
      lines: [
        "Communication, critical thinking, problem-solving, creativity and real-life application are balanced with meaningful experiences and age-appropriate awareness sessions that support well-being and responsible behaviour.",
      ],
      close: "At Brighton, every experience is an opportunity to learn, lead, create and grow — preparing students for examinations and for life.",
    },
    form: {
      title: "Explore the Middle Years at Brighton",
      sub: "Speak with our admissions team about the curriculum, learning support and admission process.",
      formTitle: "Middle School Admissions Enquiry",
      classes: ["Class 6", "Class 7", "Class 8"],
    },
    week: {
      title: "A Week at Brighton – Middle School",
      sub: "See how subject study, practical work and wider participation fit into the school week.",
      facts: senior7(classSize),
    },
    faqs: [
      { q: "How is the transition from Primary managed?", a: "The curriculum gradually strengthens subject knowledge, independent learning and study skills, with teacher guidance as students take greater responsibility." },
      { q: "How is understanding developed beyond memorisation?", a: "Practical examples, discussions, experiments, application questions and activities encourage students to explain concepts in their own words." },
      { q: "Should answers use textbook wording?", a: "Students are encouraged to frame answers independently, focusing on understanding, relevant content and clear expression." },
      { q: "How are students supported in Mathematics?", a: "Practical examples and varied questions develop conceptual understanding, problem-solving and confidence." },
      { q: "How are computer theory concepts taught practically?", a: "Students apply concepts through MS Office, website design and coding tasks, developing usable digital skills rather than memorising textbook content." },
      { q: "Can students use Science laboratories?", a: "Dedicated Physics, Chemistry and Biology labs and the Curiosity Lab support experiments, demonstrations and hands-on exploration. Science remains a combined subject, with laboratory access as required." },
      { q: "How are individual interests and talents nurtured?", a: "Through hobby classes, clubs, skill programmes, competitions, cultural activities and other platforms." },
      { q: "Does every student participate in Class Events?", a: "Every child gets an opportunity; events involve two to three sections and encourage expression and confidence." },
      { q: "What if a student is shy about performing?", a: "Class activities, presentations, discussions, assemblies, Class Events and cultural programmes offer gradual opportunities to build confidence." },
      { q: "Can a hobby be changed during the year?", a: "Students pursue a hobby for the academic year and may select a different one at the start of the next year." },
      { q: "How do Youth Parliament and student stalls help academically?", a: "They provide practical experience in research, communication, decision-making, teamwork, planning and problem-solving." },
      { q: "How are adolescent changes addressed?", a: "Age-appropriate sessions cover adolescence, personal and menstrual hygiene, stress management and relevant concerns, supporting informed and healthy choices." },
      { q: "How is social responsibility developed?", a: "Youth Parliament, community initiatives, donation drives, environmental projects, assemblies and themed events nurture empathy and responsibility." },
      { q: "How do students access competitions beyond school?", a: "Students are encouraged in literary, cultural, technical, STEM, robotics and sports competitions, with opportunities at regional, state, national and international levels." },
      { q: "How does Middle prepare students for higher classes?", a: "It builds subject foundations, independent thinking, communication, research, analysis, problem-solving and responsibility for learning." },
      { q: "Which languages are taught in Middle School?", a: "Students study English, Hindi and Sanskrit." },
      { q: "Is Artificial Intelligence taught as a subject?", a: "Yes. Artificial Intelligence is listed as a subject for Classes 6 to 8, alongside Computer Science." },
      { q: "What are the school timings?", a: "Classes run from 7:15 AM to 1:00 PM, Monday to Saturday." },
      { q: "How are students supported when they need extra help?", a: "Additional help classes, doubt clearing and work adapted to different ability levels are available according to need." },
      { q: "How do parents stay informed?", a: "Four parent–teacher meetings each year provide opportunities to discuss progress, alongside the school's assessments and annual report card." },
    ],
  },
  {
    slug: "secondary",
    name: "Secondary",
    label: "Secondary · Classes 9 to 10",
    classesText: "Classes 9 and 10",
    headline: "Academic Depth and Clear Direction for the Choices Ahead",
    subline: "Subject study, laboratory experience and career guidance support students through their Secondary years and towards the Class 10 board examinations.",
    heroAlt: "Secondary students in light blue shirts studying at a table, a girl with glasses in the center",
    tabs: ["Our Curriculum", "Academic Preparation", "Future Choices"],
    images: { hero: secondary, heroPosition: "object-[center_42%]", experience: secondaryMicroscope, approach: libraryReading, support: teacherHelp },
    overview: {
      title: "Depth Across the Core Disciplines",
      intro: "The Secondary curriculum combines academic study with practical experience, technological learning and preparation for decisions beyond Class 10.",
      boxes: [
        { icon: Languages, t: "Languages", b: "The subject offering includes English, Hindi and Sanskrit, with Sanskrit continuing through Classes 9 and 10." },
        { icon: Calculator, t: "Mathematics", b: "Mathematics is supported by classroom activities, regular assessments and additional guidance when students need further practice or explanation." },
        { icon: Microscope, t: "Science", b: "Science remains a combined subject through Class 10, supported by weekly access to Physics, Chemistry and Biology laboratories." },
        { icon: Landmark, t: "Social Science", b: "Social Science continues as a single subject, within a curriculum that includes discussion, presentations and case-study learning." },
        { icon: Cpu, t: "Computing & Technology", b: "Computer Science or IT, Artificial Intelligence, robotics and coding continue to develop students' engagement with technology." },
        { icon: Wallet, t: "Financial & Life Skills", b: "Financial literacy joins value education, life skills and yoga, with a business or entrepreneurship programme available from Class 9." },
      ],
    },
    experience: {
      title: "Preparing to Make Informed Choices",
      sub: "Career guidance and wider experiences help students consider the direction they would like their education to take.",
      items: [
        { t: "Career Conversations", b: "Career counselling begins in Class 9, helping students explore their interests and consider the options ahead." },
        { t: "Choosing a Stream", b: "Guidance on stream selection after Class 10 and an annual career fair support students as they plan their next stage." },
        { t: "Broader Participation", b: "Two field visits a year, educational tours, Model United Nations and clubs continue alongside academic preparation." },
      ],
    },
    futureReady,
    approach: {
      title: "Understanding Through Study and Application",
      intro: "Classroom activities, case studies and laboratory experience give students different ways to examine and apply their subject knowledge.",
      items: [
        { t: "Case-Based Discussion", b: "Weekly case studies provide opportunities to analyse situations, consider evidence and discuss different interpretations." },
        { t: "Practical Science", b: "The hands-on Curiosity Lab and the Robotics Lab sit alongside Physics, Chemistry and Biology laboratories. Lessons stay activity-led, and some of the work happens beyond the classroom." },
        { t: "Presenting Ideas", b: "Monthly student presentations and weekly group work give students practice in communicating their understanding and working with others." },
      ],
    },
    support: {
      title: "Steady Preparation for Class 10",
      sub: "Regular assessment and access to additional guidance help students recognise their progress and address areas that need attention.",
      items: [
        { t: "Learning Reviewed Regularly", b: "Small classroom assessments and four examinations each year provide opportunities to review understanding throughout the academic session." },
        { t: "Pre-Board Examinations", b: "Class 10 students take pre-board examinations twice a year as part of their preparation for the board examinations." },
        { t: "Help When Needed", b: "Extra help classes and after-school doubt clearing provide additional support according to students' learning needs." },
      ],
    },
    form: {
      title: "Discuss Your Child's Next Academic Step",
      sub: "Our admissions team can help you understand the Secondary programme and its entry requirements.",
      formTitle: "Secondary Admissions Enquiry",
      classes: ["Class 9", "Class 10"],
    },
    week: {
      title: "A Week at Brighton – Secondary",
      sub: "A view of the academic week, including subject lessons, practical sessions and wider school activities.",
      facts: senior7(classSize),
    },
    faqs: [
      { q: "Are Science subjects taught separately in Classes 9 and 10?", a: "Science remains a combined academic subject through Class 10. Students also have access to separate Physics, Chemistry and Biology laboratories." },
      { q: "Does Sanskrit continue in Secondary school?", a: "Yes. The school's subject sheet lists Sanskrit for Classes 9 and 10." },
      { q: "Do both classes take pre-board examinations?", a: "Twice-yearly pre-board examinations are specified for Class 10. Both classes have regular assessments and examinations." },
      { q: "When does career counselling begin?", a: "Career counselling begins in Class 9. Students also receive guidance on choosing a stream after Class 10." },
      { q: "What are the school timings?", a: "Classes run from 7:15 AM to 1:00 PM, Monday to Saturday." },
      { q: "What support is available outside regular lessons?", a: "Extra help classes and after-school doubt clearing are available according to students' needs." },
    ],
  },
  {
    slug: "senior-secondary",
    name: "Senior Secondary",
    label: "Senior Secondary · Classes 11 to 12",
    classesText: "Classes 11 and 12",
    headline: "Study with Purpose and Give Your Ambitions Clear Direction",
    subline: "Science, Commerce and Humanities offer focused subject pathways, supported by career guidance, internships and opportunities to learn beyond school.",
    heroAlt: "A student in a lab coat working with glassware",
    tabs: ["Subject Pathways", "Academic Experience", "Beyond School"],
    images: { hero: seniorSecondary, heroPosition: "object-[center_38%]", experience: seniorRobot, approach: seniorLab, support: seniorSolder },
    overview: {
      title: "Choose Your Academic Direction",
      intro: "Brighton offers Science with Mathematics or Biology, Commerce and Humanities, allowing students to pursue a more focused course of study.",
      boxes: [
        { icon: Sigma, t: "Science with Mathematics", b: "A pathway centred on the physical sciences and mathematics, supported by practical work in the science laboratories.", subjects: ["English", "Physics", "Chemistry", "Mathematics"] },
        { icon: Microscope, t: "Science with Biology", b: "A pathway combining Biology with Physics and Chemistry, with laboratory experience supporting students' understanding of scientific concepts.", subjects: ["English", "Physics", "Chemistry", "Biology"] },
        { icon: Briefcase, t: "Commerce", b: "A course of study focused on accounting, business and economics, supported by opportunities to explore entrepreneurship and financial literacy.", subjects: ["English", "Accountancy", "Business Studies", "Economics"] },
        { icon: Scale, t: "Humanities", b: "A broad subject offering for students interested in society, human behaviour, law and the world around them.", subjects: ["English", "Political Science", "Geography", "Legal Studies", "Psychology", "Physical Education"] },
      ],
      extra: {
        title: "Further Subject Options",
        chips: ["Computer Science", "Informatics Practices", "Financial Markets Management", "Entrepreneurship", "Applied Mathematics", "Business Administration", "Marketing"],
        body: [
          "Brighton's Senior Secondary subject offering also includes Computer Science, Informatics Practices, Financial Markets Management, Entrepreneurship, Applied Mathematics, Business Administration and Marketing.",
          "Speak with the admissions team about the combinations available within your chosen stream.",
        ],
      },
    },
    experience: {
      title: "A More Informed View of What Comes Next",
      sub: "Career conversations and experiences beyond school help students consider their interests in a wider context.",
      items: [
        { t: "Career Guidance", b: "Career counselling and the annual career fair help students explore possibilities as they consider their next stage of education." },
        { t: "Internship Opportunities", b: "Internships are offered in Classes 11 and 12, creating opportunities for students to encounter work beyond the school environment." },
        { t: "Field Experiences", b: "Selected groups in Classes 11 and 12 participate in approximately eight field visits a year. Educational tours are also offered." },
      ],
    },
    futureReady,
    approach: {
      title: "Subject Knowledge with Practical Perspective",
      intro: "Focused academic study is complemented by case discussions, laboratory work and opportunities to engage with a wider range of ideas.",
      items: [
        { t: "Case Studies & Presentations", b: "Weekly case studies and monthly student presentations give students opportunities to analyse situations and communicate their understanding." },
        { t: "Specialist Learning Spaces", b: "Physics, Chemistry and Biology laboratories support science study, while Geography students have access to a dedicated laboratory twice a week." },
        { t: "Brighton Lecture Series", b: "The Brighton Lecture Series gives senior students opportunities to engage with invited speakers, according to availability." },
      ],
    },
    support: {
      title: "Preparation with Consistent Support",
      sub: "Regular review and additional guidance support students through the demands of specialised study and board preparation.",
      items: [
        { t: "Class 12 Pre-Boards", b: "Two rounds of pre-board examinations each year support preparation for the Class 12 board examinations." },
        { t: "Additional Guidance", b: "Extra help classes and after-school doubt clearing are available according to students' needs." },
        { t: "Progress Conversations", b: "Four parent–teacher meetings across the year provide opportunities to discuss academic progress and areas requiring attention." },
      ],
    },
    form: {
      title: "Find the Right Direction at Brighton",
      sub: "Discuss subject combinations, programme details and admission requirements with our admissions team.",
      formTitle: "Senior Secondary Admissions Enquiry",
      classes: ["Class 11", "Class 12"],
    },
    week: {
      title: "A Week at Brighton – Senior Secondary",
      sub: "Explore how subject lessons, practical sessions and wider learning opportunities are organised across the week.",
      facts: senior7(classSize),
    },
    faqs: [
      { q: "Which streams are offered?", a: "Brighton offers Science with Mathematics, Science with Biology, Commerce and Humanities. The admissions team can explain the available subject combinations." },
      { q: "Are internships offered?", a: "Yes. Internship opportunities are offered to students in Classes 11 and 12." },
      { q: "Do all students attend eight field visits annually?", a: "Approximately eight visits are specified for selected groups in Classes 11 and 12. The programme varies by group." },
      { q: "How is Class 12 board preparation supported?", a: "Students take pre-board examinations twice a year, with extra help and doubt-clearing support available according to need." },
      { q: "Is career guidance available?", a: "Yes. Senior Secondary students have access to career counselling and the annual career fair." },
      { q: "What are the school timings?", a: "Classes run from 7:15 AM to 1:00 PM, Monday to Saturday." },
    ],
  },
];

export const stageBySlug = (slug: string) => stages.find((s) => s.slug === slug)!;
