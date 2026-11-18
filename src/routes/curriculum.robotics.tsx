import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Banner, meta } from "@/components/TabNav";
import robots from "@/assets/lab.jpg";

export const Route = createFileRoute("/curriculum/robotics")({
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

type Block = { kind: "p" | "li" | "h"; text: string };
type LogEntry = { title: string; blocks: Block[] };
type YearLog = { year: string; entries: LogEntry[] };

/**
 * Event log for the robotics page. Each entry is one item from
 * https://brightoninternational.in/robotics/, with the write-up from that
 * item's portfolio page kept in full. Add a new object when the school
 * publishes another achievement.
 */
const log: YearLog[] = [

  {
    year: "2025 - 26",
    entries: [
      {
        title: "Top 20 at BIGBANG 2026, Coimbatore",
        blocks: [
          { kind: "p", text: "Brighton students achieve national recognition at BIGBANG 2026, with their project Talking Stick ranking among the top innovations in India." },
          { kind: "p", text: "Brighton International School, Raipur, proudly celebrates the remarkable achievement of its students at BIGBANG 2026, where their project “Talking Stick” secured a place among the Top 20 projects in the country at the national level." },
          { kind: "p", text: "The project was developed by Arisha Musani, Palash Pandey, and Adityasai B, who designed an assistive device aimed at helping visually impaired individuals navigate their surroundings more safely and independently. The team’s innovation first stood out among more than 500 projects submitted from across India, where it was selected among the Top 100 projects nationwide, qualifying the students for the national round." },
          { kind: "p", text: "The national finals were held at National Model School in Coimbatore, where the Brighton team presented their project and ultimately secured a place in the Top 20 projects in India." },
        ],
      },
      {
        title: "First Prize in Junior and Senior Categories at Scientific 2026",
        blocks: [
          { kind: "p", text: "Brighton students achieve top honors at Scientific 2026, securing First Prize in both junior and senior categories." },
          { kind: "p", text: "Brighton International School, Raipur, proudly celebrates the outstanding achievements of its students at Scientific 2026 held at International Institute of Information Technology Naya Raipur. Competing with talented students from different schools, Brighton participants showcased excellent scientific thinking and innovation." },
          { kind: "p", text: "In the Junior Category, the team of Ishpreet Kaur (Class 4), Swara Goel (Class 4), and Suraksha Makhija (Class 5) secured First Prize for their impressive project presentation. Their work demonstrated creativity, teamwork, and a strong understanding of scientific concepts." },
          { kind: "p", text: "In the Senior Category, Anannya Agarwal (Class 9) also achieved First Prize for her innovative project, standing out among several participants with her clear presentation and thoughtful approach to problem-solving." },
          { kind: "p", text: "Winning the top position in both categories highlights Brighton International School’s strong focus on encouraging scientific curiosity, innovation, and hands-on learning from an early stage." },
        ],
      },
      {
        title: "Super Winner at Xplora 5.0 at KPS Dunda",
        blocks: [
          { kind: "p", text: "Brighton students deliver an outstanding performance at Xplora 5.0, securing multiple victories and the overall championship title. Brighton International School, Raipur, proudly celebrates a remarkable achievement as its students were declared the Overall Super Winner at Xplora 5.0 hosted by Krishna Public School, Dunda." },
          { kind: "p", text: "In the robotics competitions, Manas Nagdeo and Mayank Sahu delivered a dominant performance by securing First Prize in three major events — Hurdle Mania, Robo Dangal, and Robo Kabaddi. Their robots impressed judges with their design, performance, and control, helping Brighton lead the competition." },
          { kind: "p", text: "Adding to the school’s success, the team of Naaz Agarwal, Rudra Jadaun, and Hardik Ghoghare secured the Runner-Up position in the Rally Cross event, showcasing excellent teamwork and technical skills." },
          { kind: "p", text: "With multiple victories across competitions, Brighton International School was proudly awarded the Overall Super Winner Trophy, recognizing the school’s exceptional performance and strong presence in robotics and innovation events." },
        ],
      },
      {
        title: "Success at INSEF Science Fair 2026",
        blocks: [
          { kind: "p", text: "Brighton students achieved remarkable success at the INSEF Science Fair 2026, bringing home multiple medals and a national qualification." },
          { kind: "p", text: "Brighton International School, Raipur, proudly celebrates the outstanding achievements of its young innovators at the INSEF Science Fair 2026. Competing with talented students from various schools, Brighton teams showcased impressive scientific ideas and innovative solutions, earning multiple medals at the event." },
          { kind: "p", text: "Gold Medal and National Qualification achieved by Hitaksh Miri and Darshil Sisodia, whose project Exhocool secured them a place in the National level of the INSEF competition, marking a significant milestone for the school." },
          { kind: "p", text: "Two Silver Medals. One was awarded to Anannya Agrawal, while the other was earned by the team of Tanisha Malani and Renne Yadav, whose project NeuroMove demonstrated strong scientific thinking and practical application." },
          { kind: "p", text: "Tanishq Chaudhary and Pragya Deshmukh were awarded the Bronze Medal for their innovative project Ammon presentation." },
          { kind: "p", text: "The remarkable performance of Brighton students at the INSEF Science Fair highlights the school’s commitment to promoting scientific research, creativity, and hands-on STEM learning." },
        ],
      },
      {
        title: "Won Multiple Awards at Rising Spirit Fest, KPS TULSI",
        blocks: [
          { kind: "p", text: "Brighton students secure multiple top positions at the Rising Spirit Fest, showcasing innovation and strong entrepreneurial thinking." },
          { kind: "p", text: "Brighton International School, Raipur, proudly celebrates the achievements of its students at the Rising Spirit Fest hosted by Krishna Public School, Tulsi. Competing against several schools, Brighton students demonstrated creativity, innovation, and confident presentation across different competition categories." },
          { kind: "p", text: "In the Science Model Competition, Ishpreet Kaur and Swara Goel secured First Prize for their impressive project presentation. Their model stood out for its creativity, practical concept, and clear scientific explanation." },
          { kind: "p", text: "In the Science Model Competition, Ishika Jaisinghani (Class 11) earned the Runner-Up position, presenting an innovative idea that highlighted strong problem-solving skills and entrepreneurial thinking." },
          { kind: "p", text: "Another team from Brighton, Palash Pandey and Arisha Musani (Class 8), secured Second Prize in the Business Model Competition for their innovative project idea, further adding to the school’s success at the event." },
        ],
      },
      {
        title: "CBSE Regional Science Exhibition, 2026",
        blocks: [
          { kind: "p", text: "Brighton students present their innovative projects at the CBSE Regional Science Exhibition, showcasing creativity and scientific thinking." },
          { kind: "p", text: "Brighton International School, Raipur, proudly participated in the CBSE Regional Science Exhibition held at Krishna Public School, Dunda. The event brought together young innovators from various schools to present creative scientific solutions and ideas." },
          { kind: "p", text: "Representing Brighton, Tanisha Malani and Renne Yadav showcased their project “NeuroMove.” The project is a smart healthcare device designed to analyze muscle activity and help detect abnormalities that may indicate conditions such as paralysis or other muscular issues. The system is designed to alert users if irregular muscle patterns are detected, promoting early awareness and timely medical attention." },
          { kind: "p", text: "Another team from Brighton, Tanishq Chaudhary and Pragya Deshmukh, presented their project “Ammon.” Their project focuses on developing an innovative solution related to ammonia detection and monitoring, addressing environmental and safety concerns where ammonia levels may affect health and surroundings." },
        ],
      },
      {
        title: "Brightonites shine at Excella Fest 2025",
        blocks: [
          { kind: "p", text: "Brighton students deliver an exceptional performance at Excella Fest 2025, winning top positions across multiple competitions and securing the Overall Runner-Up Trophy." },
          { kind: "p", text: "Brighton International School, Raipur, proudly celebrates the remarkable achievements of its students at Excella Fest 2025, hosted by Chhattisgarh Public School. Competing with several schools in the city, Brighton students demonstrated outstanding skills in robotics, innovation, and scientific creativity, bringing home multiple top honors." },
          { kind: "p", text: "Robotics category:- Manas Nagdeo and Mayank Sahu (Class 9) secured First Position in both Robo Soccer and Robo Wrestling events. Their robots impressed judges with their design, control, and performance, dominating both competitions." },
          { kind: "p", text: "Science Model Competition:- Divyansh Maheshwari and Siddhesh Pattanayak (Class 9) earned Second Prize for their innovative science model, showcasing strong conceptual understanding and creativity." },
          { kind: "p", text: "Adding to this success, Brighton International School was also honored with the Overall Runner-Up Award at the event, recognizing the school’s outstanding performance across competitions." },
        ],
      },
      {
        title: "Top Honors at SRIJAN 4.0",
        blocks: [
          { kind: "p", text: "Brighton students achieve multiple honors at SRIJAN 4.0, showcasing their innovation and creativity across competitions." },
          { kind: "p", text: "Brighton International School, Raipur, proudly celebrates the outstanding achievements of its students at SRIJAN 4.0, organized by Anjaneya University. Competing against students from over 20 schools across the city, Brighton teams secured top positions in multiple categories." },
          { kind: "p", text: "Business Model Competition" },
          { kind: "li", text: "The First Prize was awarded to Palash Pandey and Arisha Musani (Class 8) for their project “HOPE.” Their idea focuses on a Smart QR Band designed to help locate lost children and elderly individuals. By scanning the QR code on the band, essential identification details can be accessed, helping people quickly reconnect individuals with their families and ensuring their safety." },
          { kind: "li", text: "The Second Prize was secured by Tanishka Khurrana and Palakshi Pandey (Class 9) for their project “Talking Stick.” This assistive device is designed to support visually impaired individuals by providing audio feedback when obstacles are detected nearby, helping users navigate their surroundings more safely and confidently." },
          { kind: "p", text: "Model Making Competition" },
          { kind: "li", text: "Tanisha Malani and Renne Yadav secured Second Prize for their project “NeuroMove.” NeuroMove is a smart healthcare device designed to analyze muscle activity and detect abnormalities that may indicate early signs of paralysis or other muscular issues. The system alerts users whenever irregular muscle patterns are detected, encouraging early awareness and timely medical attention." },
        ],
      },
      {
        title: "Won National Award at STEM Innovation League",
        blocks: [
          { kind: "p", text: "Brighton students shine at a national platform as their innovative healthcare project NeuroMove wins recognition at the STEM Innovation League in Delhi." },
          { kind: "p", text: "Brighton International School, Raipur, proudly celebrates the remarkable achievement of Tanisha Malani (Class 9) and Ishika Jaisinghani (Class 11), who won a National Award at the STEM Innovation League held in New Delhi. Their project, “NeuroMove,” stood out among 100+ innovative projects from across the country, earning recognition for its impactful approach to healthcare technology." },
          { kind: "p", text: "The project was developed with the aim of addressing challenges related to paralysis and muscle health monitoring. NeuroMove is a smart health device designed to help analyze muscle activity and detect possible abnormalities that may indicate early signs of paralysis or other muscular issues. The system works by monitoring muscle signals and analyzing them through smart sensors and processing technology. If any irregularities or abnormal muscle patterns are detected, the device alerts the user, enabling early awareness and encouraging timely medical attention." },
          { kind: "p", text: "Beyond the technical innovation, the project also showcased the spirit of “SheSTEM” highlighting how young women are actively contributing to advancements in science, technology, engineering, and mathematics. Tanisha and Ishika’s work demonstrated how innovation can be used to address real-world health challenges while inspiring more girls to explore STEM fields. Competing against over a hundred teams at the national level, their project impressed the judges with its social relevance, technical approach, and potential impact in healthcare monitoring." },
        ],
      },
      {
        title: "Won First Prize at Kanger Valley Biz-Pitch 2.0",
        blocks: [
          { kind: "p", text: "Brighton International School, Raipur, proudly celebrates another milestone in student innovation as Palash Pandey, Palakshi Pandey, and Tanishka Khurrana secured First Prize at the Kanger Valley Biz-Pitch 2.0 in the junior category for their impactful project titled “Talking Stick.” The project was developed under the school’s Brighton ATL (Atal Tinkering Lab) initiative." },
          { kind: "p", text: "The Talking Stick is an assistive device designed to support visually impaired individuals in navigating their surroundings safely and independently. Inspired by the everyday challenges faced by people with visual impairments, the students set out to create a smart solution that enhances mobility and confidence." },
          { kind: "p", text: "The device works by detecting obstacles or objects near the user and providing real-time audio feedback. This audio guidance alerts the user about objects in their path, helping them move more safely and avoid collisions while walking. By combining simple yet effective technology with thoughtful design, the Talking Stick acts as a helpful companion for individuals who rely on assistive tools for navigation.The project stood out at the competition for its practicality, social impact, and innovative approach, earning the team the top prize at Biz-Pitch 2.0." },
          { kind: "p", text: "This achievement highlights Brighton International School’s commitment to encouraging students to apply technology to solve real-world problems. Through the ATL Lab, students are given the opportunity to explore ideas, build prototypes, and develop solutions that can positively impact society." },
          { kind: "p", text: "We congratulate Palash Pandey, Palakshi Pandey, and Tanishka Khurrana for their outstanding work and for bringing pride to Brighton International School through their innovative thinking and dedication." },
        ],
      },
      {
        title: "Selected for INSPIRE MANAK Awards 2026",
        blocks: [
          { kind: "h", text: "Selected for INSPIRE MANAK Awards 2026 Inspire 2024" },
          { kind: "p", text: "Brighton International School, Raipur, is proud to celebrate the achievements of three of its young innovators Adityasai B, Palash Pandey, and Samariddh Sood who have been selected for the prestigious INSPIRE-MANAK Awards for the year 2026." },
          { kind: "p", text: "The INSPIRE MANAK program, an initiative of the Government of India, encourages students to develop creative ideas that address real-life problems through science and innovation. As part of their selection, each student has received a ₹10,000 grant to further develop and build prototypes of their projects." },
          { kind: "p", text: "Adityasai B proposed a thoughtful project titled “FlexTalk.” The idea focuses on helping paralytic and bedridden patients communicate more easily. The device aims to assist individuals who struggle to speak or move, allowing them to express their needs more effectively. Such a system could be especially valuable in hospitals and home-care environments, improving patient comfort and communication." },
          { kind: "p", text: "Palash Pandey designed “HOPE – A Smart QR Band,” a wearable solution aimed at helping locate lost children and elderly individuals. The band contains a QR code that, when scanned, can provide important identification details and help authorities or nearby people quickly reconnect the individual with their family." },
          { kind: "p", text: "Samariddh Sood introduced a Multi-Purpose Scissor, a practical tool designed to combine several everyday functions in one device. In addition to cutting, the tool can also assist with measuring, screwing, wire cutting, and providing light, making it a versatile solution for both daily and technical tasks." },
          { kind: "p", text: "All three students have successfully cleared the regional round and are now eligible to participate in the district-level round in 2026. Their achievement reflects the spirit of curiosity, creativity, and problem-solving that Brighton International School strives to nurture in its students. We congratulate Adityasai, Palash, and Samariddh on this accomplishment and wish them the very best for the upcoming district-level competition." },
        ],
      },
    ],
  },
  {
    year: "2024 - 25",
    entries: [
      {
        title: "Brighton wins at Global Competition, USA",
        blocks: [
          { kind: "h", text: "Brighton students build ‘Blind Vision’—an AI-powered wearable for the visually impaired, winning global acclaim at the Genius Olympiad USA." },
          { kind: "p", text: "Brighton Students Build ‘Blind Vision’ – An AI-Powered Solution for the Visually Impaired\nBrighton International School, Raipur, is proud to spotlight one of its most impactful student innovations—Blind Vision, an assistive AI-based wearable developed by students Shaurya Grover and Soumya Jain under the school’s Atal Tinkering Lab (ATL) initiative." },
          { kind: "p", text: "Driven by a desire to empower visually impaired individuals, Shaurya and Soumya envisioned a device that could serve as a “third eye”, helping users navigate the world independently using real-time audio feedback. Their innovation combines artificial intelligence, computer vision, and voice technology to detect objects, recognize currency, read printed text, and describe surroundings—all through a compact, camera-enabled wearable." },
          { kind: "p", text: "Blind Vision is more than just a science project—it’s a solution with real-world social impact. The device uses a Raspberry Pi and AI models to process live camera input and deliver clear, spoken feedback in real time, enabling users to move safely and confidently in unfamiliar environments." },
          { kind: "p", text: "This groundbreaking project has already gained national and international recognition. Shaurya and Soumya won Gold at the INSEF National Science Fair 2025, qualifying them to represent India at the prestigious Genius Olympiad in the USA, where they earned a Bronze Medal—a proud moment for Brighton and the nation." },
          { kind: "p", text: "Their journey reflects Brighton’s commitment to fostering purpose-driven innovation and nurturing young minds who aspire to create meaningful change. Through the ATL lab, students are empowered to think critically, solve real problems, and build solutions that matter." },
          { kind: "p", text: "We congratulate Shaurya and Soumya for their exceptional contribution to inclusive innovation and for representing Brighton International School on the global stage." },
        ],
      },
      {
        title: "Big Achievement – Brighton wins GOLD at National Fair at INSEF",
        blocks: [
          { kind: "h", text: "INSEF 2024-25 - NATIONAL ROUND" },
          { kind: "p", text: "Brighton International School Raipur proudly announces that two of its Class X students, Shaurya Grover and Soumya Jain, have achieved a remarkable milestone by winning the prestigious Gold Medal at the Indian Science and Engineering Fair (INSEF) 2025 National Fair, held in Bengaluru on January 11, 2025. Their innovative project, a device designed to assist the visually impaired in navigating urban spaces and day to day chores, has earned them the opportunity to represent India at the GENIUS Olympiad 2025 in the USA." },
          { kind: "p", text: "The GENIUS Olympiad, an international competition addressing global environmental challenges, is organized by Terra Science and Education and hosted by the Rochester Institute of Technology, USA. The event will take place from June 9 to 13, 2025, providing a global platform for young innovators like Shaurya and Soumya to showcase their talents." },
          { kind: "p", text: "A Journey of Excellence" },
          { kind: "p", text: "Shaurya and Soumya’s journey began at the INSEF Regional Fair in Raipur, where their project secured the Gold Medal, propelling them to the INSEF National Fair in Bengaluru. Their innovative device caught the attention of judges for its practicality and potential to empower visually impaired individuals in their daily lives." },
          { kind: "p", text: "INSEF, hosted by the Science Society of India (SSI) since 2010, has been a cornerstone in fostering scientific curiosity and innovation among students. By offering a progression from regional fairs to national-level competitions and eventually international platforms, INSEF enables students to develop and showcase their scientific acumen." },
          { kind: "p", text: "Empowering Innovation Through STEM" },
          { kind: "p", text: "Brighton International School Raipur has long been committed to nurturing young talent in the fields of Science, Technology, Engineering, and Mathematics (STEM). Speaking on the students’ success, Mrs. Jayshree Nair, Principal of Brighton International School Raipur, remarked: “Our school’s Atal Tinkering Lab (ATL) has been instrumental in inspiring students to explore and innovate in STEM. This achievement underscores our dedication to equipping students with the skills and mindset to helm new paths in science and technology.”" },
          { kind: "p", text: "About INSEF and GENIUS Olympiad" },
          { kind: "li", text: "INSEF, organized by the Science Society of India, provides a robust platform for students to develop and showcase their scientific projects, with winners advancing to esteemed international competitions like the GENIUS Olympiad." },
          { kind: "li", text: "The GENIUS Olympiad is a global event promoting solutions to environmental challenges. It gathers talented high school students from around the world to present their ideas and innovations." },
          { kind: "p", text: "A Bright Future Ahead" },
          { kind: "p", text: "Shaurya and Soumya’s achievement exemplifies the dedication and talent of Brighton International School Raipur’s students. As they prepare to represent India at the GENIUS Olympiad 2025, the school and the community stand behind them, proud of their success and inspired by their innovation." },
          { kind: "p", text: "For Brighton International School" },
          { kind: "p", text: "Contact Person: Mr Sagar Sahu – +91 73540 73586" },
          { kind: "p", text: "About the School: https://brightoninternational.in" },
          { kind: "p", text: "Links about the competition" },
          { kind: "p", text: "About Indian Science & Engineering Fair (INSEF) : https://sciencesociety.in" },
          { kind: "p", text: "Results: https://sciencesociety.in/insef/INSEF_NationalFair_Results_2024_25.htm" },
          { kind: "p", text: "About Genius Olympiad: https://geniusolympiad.org" },
        ],
      },
      {
        title: "Success at INSEF 2024",
        blocks: [
          { kind: "h", text: "INSEF 2024" },
          { kind: "p", text: "The Science Society of India (SSI) since 2010, has been fostering innovation and scientific curiosity through the INSEF (Indian Science & Engineering Fair) program. INSEF provides a platform for students to showcase their scientific endeavors, starting with regional fairs held across India. Winners progress to the INSEF National Fair, and top performers gain the opportunity to compete internationally at prestigious events like the Genius Olympiad in the USA. SSI’S INSEF program has a proven track record of empowering students to achieve significant milestones in their scientific pursuits. By providing opportunities for hands-on learning and competition, SSI is nurturing the next generation of scientists and engineers." },
          { kind: "p", text: "In INSEF Regional Rounds held at Raipur on 8th Dec 2024, One of the team from Brighton International School has made it to National Round and all the others were felicitated as well. Here are the results." },
          { kind: "p", text: "Blind Vision – Gold\nTalking Stick – Silver\nAGCS – Bronze\nCurator – Honourable Mention\nAqua Sweeper – Honourable Mention" },
        ],
      },
      {
        title: "Super winner at CPS – EXCELLA Fest 2024",
        blocks: [
          { kind: "h", text: "Sweeping awards at CPS - Excella 2024" },
          { kind: "p", text: "Brighton International School won big at the Chhattisgarh Public School Excella 2024. Brighton International School won all the We won all science and robotics awards with a cash prize of 3000." },
        ],
      },
      {
        title: "First Prize at Anjenya University – Srijan 2024",
        blocks: [
          { kind: "h", text: "First Prize in the Model Making Competition held at Anjaneya University" },
          { kind: "p", text: "Anjenya University, Raipur’s festival ‘Srijan 2024’, happened between October 22nd to 24th at Anjaneya University! It’s was a great opportunity to see school students showcasing their talent, creativity, and ideas. Young Brightonites won the first prize after displaying their inovation." },
        ],
      },
      {
        title: "Winner at Xplora ‘The Robotics Fest’ – KPS Dunda Raipur",
        blocks: [
          { kind: "h", text: "Winners KPS Xplora" },
          { kind: "p", text: "The Robotics fest – Xplora 4.0 is the ultimate Techfest hosted by Krishna Public School, Raipur, in collaboration with ATL and Coders Club! Xplora 4.0 is more than just an event; it’s a celebration of innovation, creativity, and technological excellence. Brighton International School won big at Xplora bagging Hurdle mania, Robo War and at Robo Soccer." },
        ],
      },
      {
        title: "Selection in Top 100 at IIT Delhi",
        blocks: [
        ],
      },
      {
        title: "Selection in Top 500 in india – Ideathon 2024",
        blocks: [
          { kind: "h", text: "Making it to Top 500 in India" },
          { kind: "p", text: "Youth Ideathon encourages our youth to dream big and gives their dreams wings. Organised by ThinkStartup and Management Entrepreneurship Professional Skills Council (MEPSC) in association with Central Board for Secondary Education (CBSE), in 3 editions, the Youth Ideathon is India’s biggest innovation and entrepreneurship competition designed specifically for school students." },
          { kind: "p", text: "Brighton International School is proud to be selected among the TOP 500 in India with two of its models" },
        ],
      },
      {
        title: "5-day workshop on ‘Arduino and PCB Designing’",
        blocks: [
          { kind: "h", text: "Project Title" },
          { kind: "p", text: "The students of Brighton International School have successfully completed a 5-day workshop on Arduino and PCB Designing at SSIPMT, Raipur. This intensive program provided them with valuable hands-on experience in cutting-edge technology, allowing them to design and develop electronic circuits using Arduino and PCB (Printed Circuit Board) platforms." },
          { kind: "p", text: "Throughout the workshop, students not only honed their technical skills but also cultivated a deeper interest in innovation and problem-solving. The knowledge gained during this experience will empower them to take on future challenges with creativity and confidence. At Brighton International School, we remain committed to fostering such opportunities that prepare our students for the future of technology and innovation." },
        ],
      },
      {
        title: "Intelifest 2024 – Interschool Comp – KPS Dunda Raipur",
        blocks: [
          { kind: "h", text: "Winner at KPS Dunda" },
          { kind: "li", text: "First Position – Tanishqa Khurana- VIII & Palakshi Pandey- VIII" },
          { kind: "li", text: "Tanishq Choudhary- IX – Runner up" },
          { kind: "li", text: "Paryavaran Paheli – 2nd Runner up" },
        ],
      },
      {
        title: "ATL Community Day",
        blocks: [
          { kind: "p", text: "ATAL TINKERING LAB COMMUNITY DAY was celebrated at Brighton International School to commemorate the Birth Anniversary of Dr. B. R. Ambedkar and provide equal opportunity to all." },
          { kind: "li", text: "ATL Community Day will introduce children who don’t have access to formal education, to the philosophy of Atal Tinkering Labs." },
          { kind: "li", text: "Schools may conduct a series of tinkering and ideation workshops, trainings and showcase events in their ATL premises." },
          { kind: "li", text: "Mentors of Change, Parents and Teachers are encouragd to support their respective ATLs to conduct the tinkering sessions." },
          { kind: "p", text: "The above was observed at the All at Brighton International School lab." },
        ],
      },
      {
        title: "4 days of workshop on AI",
        blocks: [
          { kind: "h", text: "Workshop on AI at IIT Bhilai" },
          { kind: "p", text: "a group of our talented students successfully completed a 4-day workshop on Artificial Intelligence from May 1 to May 4. The workshop, organized by the Department of Science & Technology, CG Government in collaboration with IIT Bhilai, offered a unique opportunity for our students to explore the world of AI under expert guidance." },
          { kind: "p", text: "The following students represented Brighton International School at the workshop:" },
          { kind: "li", text: "Daksh Jain" },
          { kind: "li", text: "Riddhima Modi" },
          { kind: "li", text: "Heetakshi Shukla" },
          { kind: "li", text: "Adishree Bais" },
          { kind: "li", text: "Aishwarya Pillay" },
          { kind: "p", text: "Their participation in this prestigious event reflects the school’s commitment to nurturing future innovators and tech enthusiasts. We congratulate them for their enthusiasm and dedication!" },
        ],
      },
      {
        title: "Training Program for Teachers",
        blocks: [
          { kind: "h", text: "Teachers Training" },
          { kind: "p", text: "At Brighton International School Raipur, our teachers are continuously equipped with cutting-edge skills to inspire the next generation of learners. A group of educators underwent specialized training in Arduino programming blocks, a hands-on learning experience that integrates technology and creativity into the classroom." },
          { kind: "p", text: "Arduino programming blocks provide an innovative platform to teach students the fundamentals of electronics and coding in an interactive way. Our teachers are now prepared to introduce these concepts, sparking curiosity and fostering problem-solving skills among students. By staying ahead in the technological curve, Brighton International School continues to ensure that both teachers and students are future-ready in this ever-evolving digital world." },
        ],
      },
      {
        title: "IDE Bootcamp 2024, Bhubaneshwar",
        blocks: [
          { kind: "h", text: "Innovation, Design & Entrepreneurship (IDE) Bootcamp" },
          { kind: "p", text: "Brighton International School students proudly joined the Innovation, Design, and Entrepreneurship (IDE) Bootcamp at Gandhi Institute For Technology (GIFT) Autonomous, Bhubaneswar. This exciting two-day residential training program, brought to life by the Ministry of Education’s Innovation Cell (MIC) in collaboration with the All India Council for Technical Education (AICTE), is all about sparking innovation, nurturing creative thinking, and cultivating entrepreneurial skills among both students and teachers. We’re thrilled to see our students embrace this opportunity to learn, grow, and innovate!" },
        ],
      },
    ],
  },
  {
    year: "2023 - 24",
    entries: [
      {
        title: "Business Model Presentation organized by Anjaneya University",
        blocks: [
          { kind: "h", text: "Business Model Presentation" },
          { kind: "p", text: "Date : Jan 2024" },
          { kind: "p", text: "Our students participated in “Business Model Presentation” organized by Anjaneya University Raipur. Where they presented a business model “PenPal” and got 1st Prize there." },
          { kind: "p", text: "Participants : Vidhi Jain & Pratyusha Palasgar" },
        ],
      },
      {
        title: "News Coverage 2023-24",
        blocks: [
          { kind: "h", text: "Newspaper" },
          { kind: "p", text: "2023-24" },
          { kind: "p", text: "Various models and prototypes made by Brightonites were covered time to time by the local dailies in Raipur." },
        ],
      },
      {
        title: "Regional Level Science Exhibition 2023",
        blocks: [
          { kind: "h", text: "CBSE Regional Science Exhibition 2023" },
          { kind: "p", text: "Date : Dec. 2023" },
          { kind: "p", text: "N.H Goel World School conducted CBSE Regional Level Science Exhibition 2023. The organization of the Science Exhibition aims to provide a platform for students to demonstrate such learnings that encourage the construction of knowledge by connecting new ideas to existing concepts as well as enriching one’s understanding of other’s experiences and perspectives. The students and the model post getting selected from the regional rounds make it to the National Round." },
          { kind: "li", text: "Result for Brighton International School – Secured 1st Position and Qualified for Nationals. – Participants : Shourya Grover & Soumya Jain" },
        ],
      },
      {
        title: "Intelifest 2023 – Interschool Comp – KPS Dunda Raipur",
        blocks: [
          { kind: "h", text: "Intelifest 2023" },
          { kind: "p", text: "Date : Nov. 2023" },
          { kind: "p", text: "Brighton International School won all the Robotics Competition which was organised by KPS, DUNDA.\nWhich are as follows." },
          { kind: "p", text: "Hurdle Race – 1st\nRobo soccer – 1st\nRobo war – 1st\n\nParticipants: Prabhleen Singh, Divyansh Bhaurya, Vaibhav Arpit Singh & Vansh." },
        ],
      },
      {
        title: "Science Exhibition 2023 – Interschool Comp – CPS Raipur",
        blocks: [
          { kind: "h", text: "Science Exhibition 23" },
          { kind: "p", text: "Date : Nov. 2023" },
          { kind: "p", text: "CPS, Raipur organized Science Exhibition in the month of Nov. Where we Exhibited two projects and got 1st prize in both projects." },
          { kind: "p", text: "Event : Science Exhibition 23" },
          { kind: "p", text: "Project 1 : Travel Thrills\nResult : Got 1st prize\nParticipants : Vidhi Jain & Heetakshi Shukla" },
          { kind: "p", text: "Project 2 : Sensory Vision\nResult : Got 1st Prize\nParticipants : Gauri Sharma & Sanvi" },
        ],
      },
      {
        title: "NEXUS 2023 – Interschool Comp – SSIPMT, Raipur",
        blocks: [
          { kind: "h", text: "Nexus 2023" },
          { kind: "p", text: "Date : Nov. 2023" },
          { kind: "p", text: "Competitions Organized by the The Shri Shankaracharya Institute of Professional Management and Technology Raipur" },
          { kind: "p", text: "Our achievements there." },
          { kind: "li", text: "Second Postion" },
          { kind: "li", text: "Fourth Position" },
        ],
      },
      {
        title: "Tinkerthon 2023 – Interschool Comp – ATL-AIM Bilaspur",
        blocks: [
          { kind: "h", text: "Chhattisgarh State Level ATL Hackathon (Tinkerathon)" },
          { kind: "p", text: "Date : Aug. 2023" },
          { kind: "p", text: "This pioneering hackathon was held in Bilaspur on August 7th and 8th, 2023, and witnessed active participation from Atal Tinkering Lab schools across all districts of Chhattisgarh. It was organized at Swami Atmanand Government Higher Secondary School, Bilaspur. A total of 110 teams from 78 ATL schools participated in the Tinkerathon, showcasing the remarkable enthusiasm and interest of young innovators. The event provided a platform for students to channel their creativity and apply their knowledge to solve real-world problems. The Chhattisgarh State Level ATL Hackathon marked a significant milestone in the state’s commitment to fostering innovation, creativity, and problem-solving skills among its population." },
          { kind: "p", text: "Winner – Brighton International School Raipur\nProject Name: Blind Vision – Enabling Vision through Sound.\nOur project centers on a unique camera that assists visually impaired individuals in understanding their surroundings. This camera can identify various elements like money, familiar faces, the quantity of people nearby, traffic, objects, and distances, providing this information through audio cues." },
        ],
      },
      {
        title: "Aurora 2023- Interschool Comp – DPS Raipur",
        blocks: [
          { kind: "h", text: "AURORA 23" },
          { kind: "p", text: "Date : Aug. 2023" },
          { kind: "p", text: "Competitions Organized by the Robotics Department of DPS, Raipur in their event “AURORA 23” inter school competition." },
          { kind: "p", text: "Our achievements there.\n1. Robo Soccer – 1st Position – Participants – Prabhaleen Singh & Vaibhav Arpit Singh" },
          { kind: "p", text: "2. Hurdle Race – 1st – Participants – Prabhaleen Singh & Vaibhav Arpit singh" },
          { kind: "p", text: "3. Science Exhibitions :" },
          { kind: "li", text: "3-5th Grade category – 3rd" },
          { kind: "li", text: "6-8th Grade category – 1st" },
          { kind: "li", text: "9-11th Grade category – 1st" },
        ],
      },
    ],
  },
];

function EntryBody({ blocks }: { blocks: Block[] }) {
  const nodes: ReactNode[] = [];
  let i = 0;
  while (i < blocks.length) {
    const block = blocks[i];
    if (block.kind === "li") {
      const items: string[] = [];
      const start = i;
      while (i < blocks.length && blocks[i].kind === "li") {
        items.push(blocks[i].text);
        i += 1;
      }
      nodes.push(
        <ul key={`ul-${start}`} className="list-disc space-y-2 pl-5">
          {items.map((item) => (
            <li key={item} className="whitespace-pre-line">{item}</li>
          ))}
        </ul>,
      );
    } else if (block.kind === "h") {
      nodes.push(
        <h4 key={`h-${i}`} className="font-display text-base text-foreground">{block.text}</h4>,
      );
      i += 1;
    } else {
      nodes.push(
        <p key={`p-${i}`} className="whitespace-pre-line">{block.text}</p>,
      );
      i += 1;
    }
  }
  return <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">{nodes}</div>;
}

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
        {log.map((year) => (
          <div key={year.year} className="mt-8">
            <h3 className="font-display text-2xl text-coral">{year.year}</h3>
            <div className="mt-4 grid gap-4">
              {year.entries.map((entry) => (
                <article key={entry.title} className="card-shell p-7">
                  <h3 className="font-display text-xl">{entry.title}</h3>
                  {entry.blocks.length > 0 && <EntryBody blocks={entry.blocks} />}
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

