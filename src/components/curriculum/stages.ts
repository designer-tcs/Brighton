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
  ListOrdered,
  Microscope,
  Music,
  Palette,
  PersonStanding,
  Scale,
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

type Item = { t: string; b: string };
type Box = Item & { icon: LucideIcon; subjects?: string[] };

export type Stage = {
  slug: string;
  name: string;
  label: string;
  classesText: string;
  headline: string;
  subline: string;
  heroAlt: string;
  tabs: [string, string, string];
  images: { hero?: string; heroPosition?: string; overview?: string; experience?: string; approach?: string; support?: string };
  overview: { title: string; intro: string; boxes: Box[]; extra?: { title: string; body: string[] } };
  experience: { title: string; sub: string; items: Item[] };
  approach: { title: string; intro: string; items: Item[] };
  support: { title: string; sub: string; items: Item[] };
  form: { title: string; sub: string; formTitle: string; classes: string[] };
  week: { title: string; sub: string; facts: (Item & { icon: LucideIcon })[] };
  faqs: { q: string; a: string }[];
};

const senior7 = (last: Item & { icon: LucideIcon }) => [
  { icon: Clock, t: "School hours", b: "7:15 AM – 1:00 PM" },
  { icon: CalendarDays, t: "School days", b: "Monday – Saturday" },
  { icon: ListOrdered, t: "Daily periods", b: "Seven periods of 40 minutes" },
  last,
];
const classSize = { icon: Users, t: "Class size", b: "Maximum 30 students" };

export const stages: Stage[] = [
  {
    slug: "pre-primary",
    name: "Pre-Primary",
    label: "Pre-Primary · Nursery to KG II",
    classesText: "Nursery, KG I and KG II",
    headline: "A Thoughtful Beginning to Your Child's Life at School",
    subline: "Montessori-style learning, daily phonics and structured play lay the foundation for reading, working with numbers and learning independently.",
    heroAlt: "Two pre-primary girls in Brighton uniform working at a table",
    tabs: ["Our Curriculum", "Learning Through Play", "Your Child's Day"],
    images: {
      hero: prePrimary,
      heroPosition: "object-center",
      overview: firstDiscoveries,
      experience: learningTakingPart,
      approach: earlyLearning,
      support: familiarFaces,
    },
    overview: {
      title: "First Discoveries, Lasting Foundations",
      intro: "Early learning at Brighton brings language, numbers and everyday understanding together through a Montessori-style approach.",
      boxes: [
        { icon: BookOpen, t: "Language & Literacy", b: "English and Hindi introduce children to language, with daily phonics supporting their first steps in reading." },
        { icon: Calculator, t: "Early Mathematics", b: "Children explore mathematical ideas through classroom activities, developing familiarity with numbers and confidence in their understanding." },
        { icon: Leaf, t: "Understanding Our Surroundings", b: "Environmental Studies introduces children to their surroundings and gives their everyday curiosity a place in the classroom." },
        { icon: Music, t: "Creative Expression", b: "Weekly access to art, music and dance spaces gives children opportunities to explore different forms of expression." },
        { icon: PersonStanding, t: "Movement & Play", b: "Two physical education periods each week, yoga and structured play make movement part of the early learning experience." },
        { icon: Heart, t: "Values & Life Skills", b: "Value education and life skills introduce children to considerate behaviour and the responsibilities of being part of a group." },
      ],
    },
    experience: {
      title: "Learning Begins with Taking Part",
      sub: "Classroom activities and shared experiences give young children an active role in their learning.",
      items: [
        { t: "Purposeful Play", b: "Structured play takes place each week, supported by dedicated early-years activity and play areas." },
        { t: "Learning Together", b: "Weekly group activities give children opportunities to participate alongside their classmates and become comfortable learning together." },
        { t: "Time for Books", b: "Children visit the junior library twice a week, making books a familiar part of school life." },
      ],
    },
    approach: {
      title: "A Considered Approach to Early Learning",
      intro: "Daily Montessori-style teaching and phonics provide a consistent foundation, supported by activities that respond to children's developing abilities.",
      items: [
        { t: "Montessori-Style Learning", b: "Practical engagement forms part of everyday teaching, allowing children to take an active part in their early learning." },
        { t: "Daily Phonics", b: "Regular phonics teaching introduces the relationships between sounds and letters, supporting children as they begin to read." },
        { t: "Responsive Classroom Work", b: "Teachers adapt work where needed and use regular classroom assessments to identify areas requiring further attention." },
      ],
    },
    support: {
      title: "Familiar Faces, Thoughtful Support",
      sub: "A designated class teacher and regular conversations with parents provide continuity through the early years.",
      items: [
        { t: "Individual Attention", b: "Each group has a designated class teacher, with a maximum of 30 children in a class." },
        { t: "Additional Support", b: "Extra help, a special educator and counselling support are available according to each child's needs." },
        { t: "Parent Conversations", b: "Four parent–teacher meetings each year give families opportunities to discuss their child's learning and development." },
      ],
    },
    form: {
      title: "Your Child's First Chapter at Brighton",
      sub: "Speak with our admissions team about the Pre-Primary programme and the application process.",
      formTitle: "Pre-Primary Admissions Enquiry",
      classes: ["Nursery", "KG I", "KG II"],
    },
    week: {
      title: "A Week at Brighton – Pre-Primary",
      sub: "A look at how learning, play and activity come together through your child's week.",
      facts: [
        { icon: Clock, t: "School hours", b: "9:15 AM – 1:00 PM" },
        { icon: CalendarDays, t: "School days", b: "Monday – Saturday" },
        { icon: ListOrdered, t: "Daily periods", b: "Four periods of 40 minutes" },
        { icon: Backpack, t: "Homework", b: "No homework" },
      ],
    },
    faqs: [
      { q: "Which classes does the Pre-Primary programme cover?", a: "The programme includes Nursery, KG I and KG II." },
      { q: "What is the minimum age for Nursery?", a: "Children must be three years old as on 31 March, 2027." },
      { q: "How many children are in each class?", a: "Each class has a maximum of 30 children and a designated class teacher." },
      { q: "What are the school timings?", a: "Pre-Primary runs from 9:15 AM to 1:00 PM, Monday to Saturday." },
      { q: "Do children receive homework?", a: "No homework is assigned in Pre-Primary." },
      { q: "Is additional learning support available?", a: "Yes. Extra help, a special educator and counselling support are available according to the child's needs." },
    ],
  },
  {
    slug: "primary",
    name: "Primary",
    label: "Primary · Classes 1 to 5",
    classesText: "Classes 1 to 5",
    headline: "Strong Foundations for Children Beginning to Explore Bigger Ideas",
    subline: "Core subjects, creative activities and early experiences with technology give children a diverse foundation for the years ahead.",
    heroAlt: "Students working at computers",
    tabs: ["Our Curriculum", "Classroom Experiences", "The School Day"],
    images: {
      hero: primary,
      heroPosition: "object-[center_42%]",
      experience: primarySupport,
      approach: primaryClassroom,
      support: primaryWriting,
    },
    overview: {
      title: "Building Understanding Across Subjects",
      intro: "The Primary curriculum develops essential academic skills while introducing children to new academic interests and ways of learning.",
      boxes: [
        { icon: Languages, t: "English & Hindi", b: "Both languages remain central to the curriculum, supported by opportunities for public speaking and monthly student presentations." },
        { icon: Calculator, t: "Mathematics", b: "Mathematics combines classroom study with activity-based learning, helping children work through ideas and strengthen their understanding." },
        { icon: Leaf, t: "Environmental Studies", b: "EVS introduces children to the world around them, with weekly themes connecting learning across subjects." },
        { icon: Cpu, t: "Computing & Robotics", b: "Computer Science, robotics and coding begin in Primary, giving children an early introduction to technology and its possibilities." },
        { icon: Globe, t: "General Knowledge", b: "General Knowledge broadens children's awareness, while quiz activities offer opportunities to explore and share what they know." },
        { icon: Palette, t: "Creative & Personal Development", b: "Art, craft, music, dance and drama complement value education and life skills throughout the Primary years." },
      ],
    },
    experience: {
      title: "Interests Have Room to Grow",
      sub: "Books, practical experiences and wider participation give children opportunities to discover what interests them.",
      items: [
        { t: "Books & Reading", b: "Two library periods each week give children regular time to explore books and develop their reading interests." },
        { t: "Technology in Practice", b: "The computer, robotics and Atal Tinkering labs provide practical settings for children's growing interest in technology." },
        { t: "Discovery & Participation", b: "Olympiads, a yearly field visit and weekly club or activity periods extend children's experiences beyond regular lessons." },
      ],
    },
    approach: {
      title: "An Active Role in Learning",
      intro: "Children participate through classroom activities, shared tasks and opportunities to present their own understanding.",
      items: [
        { t: "Connections Across Subjects", b: "Weekly thematic teaching helps children see relationships between subjects and bring different ideas together." },
        { t: "Questions and Discussion", b: "Flipped-classroom sessions take place twice a week, while daily inquiry-based learning begins in Class 3." },
        { t: "Ideas Shared with Others", b: "Weekly group work and monthly presentations give children practice in contributing, listening and explaining their thoughts." },
      ],
    },
    support: {
      title: "Attention That Supports Steady Progress",
      sub: "Regular assessment and communication help teachers and families understand how each child is progressing.",
      items: [
        { t: "Classroom Continuity", b: "Each class has a designated class teacher and a maximum of 30 students." },
        { t: "Help Where Needed", b: "Teachers provide additional help and adapt classroom work according to students' learning needs." },
        { t: "Parent Partnership", b: "Four parent–teacher meetings each year provide opportunities to discuss progress and areas requiring further support." },
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
      ],
    },
    faqs: [
      { q: "Which subjects are taught in Primary?", a: "Students study English, Hindi, Mathematics, EVS, Computer Science and General Knowledge, alongside skill subjects and creative activities." },
      { q: "When do robotics and coding begin?", a: "Robotics and coding are offered from Class 1." },
      { q: "How often do students visit the library?", a: "Primary students have two library periods each week." },
      { q: "Do Primary students receive homework?", a: "No homework is assigned in Classes 1 to 5 under the school's current policy." },
      { q: "What are the school timings?", a: "Classes run from 9:15 AM to 3:00 PM, Monday to Saturday." },
      { q: "How is my child's progress supported?", a: "Regular assessments, additional help where needed and four parent–teacher meetings each year support ongoing communication about learning." },
    ],
  },
  {
    slug: "middle",
    name: "Middle",
    label: "Middle · Classes 6 to 8",
    classesText: "Classes 6 to 8",
    headline: "Deeper Understanding Begins with the Questions Students Learn to Ask",
    subline: "A wider subject curriculum, weekly case studies and practical learning encourage students to examine ideas with greater depth.",
    heroAlt: "A girl in a light blue Brighton shirt and glasses building a stick-and-ball science model",
    tabs: ["Our Curriculum", "Applied Learning", "The School Day"],
    images: { hero: middle, heroPosition: "object-[68%_32%]", experience: middleMap, approach: scienceEmc, support: middleEmc },
    overview: {
      title: "A Broader Academic Perspective",
      intro: "The Middle years introduce new disciplines while strengthening the knowledge and learning habits students will carry into Secondary school.",
      boxes: [
        { icon: Languages, t: "Languages", b: "English and Hindi continue, with Sanskrit joining the curriculum as the third language." },
        { icon: Calculator, t: "Mathematics", b: "Mathematics develops alongside classroom inquiry and activities, with the Maths Club offering further opportunities to pursue the subject." },
        { icon: FlaskConical, t: "Science", b: "Science is taught as a combined subject, with access to the science laboratory for practical work as required." },
        { icon: Landmark, t: "Social Science", b: "Social Science develops students' understanding of people and society, alongside the wider curriculum's emphasis on discussion and analysis." },
        { icon: Cpu, t: "Computing & AI", b: "Artificial Intelligence joins Computer Science as a subject, while robotics and coding continue through the Middle years." },
        { icon: Heart, t: "Personal Development", b: "General Knowledge, value education, life skills and yoga complement academic study and students' wider participation in school." },
      ],
    },
    experience: {
      title: "A Wider Circle of Experiences",
      sub: "Clubs, shared responsibilities and experiences beyond the classroom give students new settings in which to learn.",
      items: [
        { t: "Clubs & Interests", b: "Science, mathematics, robotics and coding clubs allow students to pursue interests alongside creative and debating opportunities." },
        { t: "Voice & Responsibility", b: "Model United Nations, student council participation and monthly presentations create opportunities to contribute ideas and take on responsibility." },
        { t: "Learning Beyond School", b: "One field visit a year and opportunities for educational tours extend students' learning into different settings." },
      ],
    },
    approach: {
      title: "Examining Ideas in Greater Depth",
      intro: "Inquiry, discussion and practical work help students take a more considered approach to what they learn.",
      items: [
        { t: "Daily Inquiry", b: "Inquiry-based learning forms part of everyday teaching across Classes 6 to 8, encouraging students to question and investigate." },
        { t: "Weekly Case Studies", b: "Case studies give students opportunities to examine situations, discuss different perspectives and apply their understanding." },
        { t: "Practical Exploration", b: "Computer, robotics and Atal Tinkering labs provide regular opportunities to engage with technology through practical work." },
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
      { q: "Which languages are taught in Middle School?", a: "Students study English, Hindi and Sanskrit." },
      { q: "Is Artificial Intelligence taught as a subject?", a: "Yes. Artificial Intelligence is listed as a subject for Classes 6 to 8, alongside Computer Science." },
      { q: "Are practical learning opportunities available?", a: "Students have access to computer, robotics and Atal Tinkering labs, with science laboratory access as required." },
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
    approach: {
      title: "Understanding Through Study and Application",
      intro: "Classroom activities, case studies and laboratory experience give students different ways to examine and apply their subject knowledge.",
      items: [
        { t: "Case-Based Discussion", b: "Weekly case studies provide opportunities to analyse situations, consider evidence and discuss different interpretations." },
        { t: "Practical Science", b: "Access to Physics, Chemistry and Biology laboratories allows practical work to accompany the combined Science curriculum." },
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
