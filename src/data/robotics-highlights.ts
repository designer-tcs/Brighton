/**
 * Robotics highlight cards, one photo and title per item, grouped as on
 * https://brightoninternational.in/robotics/.
 *
 * To add a card: save the photo in src/assets/robotics, import it below,
 * and append { title, image } inside that year's cards. For a new year,
 * add another { year, cards } group. objectPosition is optional (default
 * center) — set it when a 3:2 crop would cut faces. portfolio is the old
 * page the write-up was copied from; cards open /curriculum/robotics/$slug
 * (the last segment of that URL). writeUp is the exact text. Leave it off
 * when that page has no write-up. A { list, items } entry is a bullet list.
 */
import top20AtBigbang2026Coimbatore from "@/assets/robotics/top-20-at-bigbang-2026-coimbatore.jpg";
import firstPrizeInJuniorAndSeniorCategoriesAtScientific2026 from "@/assets/robotics/first-prize-in-junior-and-senior-categories-at-scientific-2026.jpg";
import superWinnerAtXplora50AtKpsDunda from "@/assets/robotics/super-winner-at-xplora-5-0-at-kps-dunda.jpg";
import successAtInsefScienceFair2026 from "@/assets/robotics/success-at-insef-science-fair-2026.jpg";
import wonMultipleAwardsAtRisingSpiritFestKpsTulsi from "@/assets/robotics/won-multiple-awards-at-rising-spirit-fest-kps-tulsi.jpg";
import cbseRegionalScienceExhibition2026 from "@/assets/robotics/cbse-regional-science-exhibition-2026.jpg";
import brightonitesShineAtExcellaFest2025 from "@/assets/robotics/brightonites-shine-at-excella-fest-2025.jpg";
import topHonorsAtSrijan40 from "@/assets/robotics/top-honors-at-srijan-4-0.jpg";
import wonNationalAwardAtStemInnovationLeague from "@/assets/robotics/won-national-award-at-stem-innovation-league.jpg";
import wonFirstPrizeAtKangerValleyBizPitch20 from "@/assets/robotics/won-first-prize-at-kanger-valley-biz-pitch-2-0.jpg";
import selectedForInspireManakAwards2026 from "@/assets/robotics/selected-for-inspire-manak-awards-2026.jpg";
import brightonWinsAtGlobalCompetitionUsa from "@/assets/robotics/brighton-wins-at-global-competition-usa.jpeg";
import bigAchievementBrightonWinsGoldAtNationalFairAtInsef from "@/assets/robotics/big-achievement-brighton-wins-gold-at-national-fair-at-insef.jpeg";
import successAtInsef2024 from "@/assets/robotics/success-at-insef-2024.jpeg";
import superWinnerAtCpsExcellaFest2024 from "@/assets/robotics/super-winner-at-cps-excella-fest-2024.jpg";
import firstPrizeAtAnjenyaUniversitySrijan2024 from "@/assets/robotics/first-prize-at-anjenya-university-srijan-2024.jpg";
import winnerAtXploraTheRoboticsFestKpsDundaRaipur from "@/assets/robotics/winner-at-xplora-the-robotics-fest-kps-dunda-raipur.jpg";
import selectionInTop100AtIitDelhi from "@/assets/robotics/selection-in-top-100-at-iit-delhi.jpg";
import selectionIdeathon2024 from "@/assets/robotics/selection-ideathon-2024.jpg";
import card5DayWorkshopOnArduinoAndPcbDesigning from "@/assets/robotics/5-day-workshop-on-arduino-and-pcb-designing.jpg";
import intelifest2024InterschoolCompKpsDundaRaipur from "@/assets/robotics/intelifest-2024-interschool-comp-kps-dunda-raipur.jpeg";
import atlCommunityDay from "@/assets/robotics/atl-community-day.jpeg";
import card4DaysOfWorkshopOnArtificialIntelligence from "@/assets/robotics/4-days-of-workshop-on-artificial-intelligence.jpg";
import trainingProgramForTeachers from "@/assets/robotics/training-program-for-teachers.jpg";
import ideBootcamp2024Bhubaneshwar from "@/assets/robotics/ide-bootcamp-2024-bhubaneshwar.jpeg";
import businessModelPresentationOrganizedByAnjaneyaUniversity from "@/assets/robotics/business-model-presentation-organized-by-anjaneya-university.jpeg";
import newsCoverage202324 from "@/assets/robotics/news-coverage-2023-24.jpg";
import regioanlScienceExhibition2023 from "@/assets/robotics/regioanl-science-exhibition-2023.jpeg";
import kpsIntelifest2023 from "@/assets/robotics/kps-intelifest-2023.jpg";
import scienceExhibition23CpsRaipurInterschoolComp from "@/assets/robotics/science-exhibition-23-cps-raipur-interschool-comp.jpeg";
import nexus2023InterschoolCompBySsipmtRaipur from "@/assets/robotics/nexus-2023-interschool-comp-by-ssipmt-raipur.jpeg";
import tinkerthon2023 from "@/assets/robotics/tinkerthon-2023.jpeg";
import dpsRoboticsWinner from "@/assets/robotics/dps-robotics-winner.jpeg";

export type RoboticsWriteUpList = {
  list: "ul" | "ol";
  items: string[];
};

export type RoboticsHighlight = {
  title: string;
  image: string;
  /** CSS object-position. Keeps faces inside the shared 3:2 crop. */
  objectPosition?: string;
  /** Old portfolio page this card was copied from. Not the click target. */
  portfolio?: string;
  /** Exact live write-up, in page order. Omit when that page has no text. */
  writeUp?: Array<string | RoboticsWriteUpList>;
};

export type RoboticsHighlightYear = {
  year: string;
  cards: RoboticsHighlight[];
};

export const roboticsHighlights: RoboticsHighlightYear[] = [
  {
    year: "2025 - 26",
    cards: [
      {
        title: "Top 20 at BIGBANG 2026, Coimbatore",
        image: top20AtBigbang2026Coimbatore,
        portfolio: "https://brightoninternational.in/portfolio/top-20-at-bigbang-2026-coimbatore/",
        writeUp: [
          "Brighton students achieve national recognition at BIGBANG 2026, with their project Talking Stick ranking among the top innovations in India.",
          "Brighton International School, Raipur, proudly celebrates the remarkable achievement of its students at BIGBANG 2026, where their project “Talking Stick” secured a place among the Top 20 projects in the country at the national level.",
          "The project was developed by Arisha Musani, Palash Pandey, and Adityasai B, who designed an assistive device aimed at helping visually impaired individuals navigate their surroundings more safely and independently. The team’s innovation first stood out among more than 500 projects submitted from across India, where it was selected among the Top 100 projects nationwide, qualifying the students for the national round.",
          "The national finals were held at National Model School in Coimbatore, where the Brighton team presented their project and ultimately secured a place in the Top 20 projects in India.",
        ],
      },
      {
        title: "First Prize in Junior and Senior Categories at Scientific 2026",
        image: firstPrizeInJuniorAndSeniorCategoriesAtScientific2026,
        portfolio: "https://brightoninternational.in/portfolio/first-prize-in-junior-and-senior-categories-at-scientific-2026/",
        writeUp: [
          "Brighton students achieve top honors at Scientific 2026, securing First Prize in both junior and senior categories.",
          "Brighton International School, Raipur, proudly celebrates the outstanding achievements of its students at Scientific 2026 held at International Institute of Information Technology Naya Raipur. Competing with talented students from different schools, Brighton participants showcased excellent scientific thinking and innovation.",
          "In the Junior Category, the team of Ishpreet Kaur (Class 4), Swara Goel (Class 4), and Suraksha Makhija (Class 5) secured First Prize for their impressive project presentation. Their work demonstrated creativity, teamwork, and a strong understanding of scientific concepts.",
          "In the Senior Category, Anannya Agarwal (Class 9) also achieved First Prize for her innovative project, standing out among several participants with her clear presentation and thoughtful approach to problem-solving.",
          "Winning the top position in both categories highlights Brighton International School’s strong focus on encouraging scientific curiosity, innovation, and hands-on learning from an early stage.",
        ],
      },
      {
        title: "Super Winner at Xplora 5.0 at KPS Dunda",
        image: superWinnerAtXplora50AtKpsDunda,
        portfolio: "https://brightoninternational.in/portfolio/super-winner-at-xplora-5-0-at-kps-dunda/",
        writeUp: [
          "Brighton students deliver an outstanding performance at Xplora 5.0, securing multiple victories and the overall championship title. Brighton International School, Raipur, proudly celebrates a remarkable achievement as its students were declared the Overall Super Winner at Xplora 5.0 hosted by Krishna Public School, Dunda.",
          "In the robotics competitions, Manas Nagdeo and Mayank Sahu delivered a dominant performance by securing First Prize in three major events — Hurdle Mania, Robo Dangal, and Robo Kabaddi. Their robots impressed judges with their design, performance, and control, helping Brighton lead the competition.",
          "Adding to the school’s success, the team of Naaz Agarwal, Rudra Jadaun, and Hardik Ghoghare secured the Runner-Up position in the Rally Cross event, showcasing excellent teamwork and technical skills.",
          "With multiple victories across competitions, Brighton International School was proudly awarded the Overall Super Winner Trophy, recognizing the school’s exceptional performance and strong presence in robotics and innovation events.",
        ],
      },
      {
        title: "Success at INSEF Science Fair 2026",
        image: successAtInsefScienceFair2026,
        portfolio: "https://brightoninternational.in/portfolio/success-at-insef-science-fair-2026/",
        writeUp: [
          "Brighton students achieved remarkable success at the INSEF Science Fair 2026, bringing home multiple medals and a national qualification.",
          "Brighton International School, Raipur, proudly celebrates the outstanding achievements of its young innovators at the INSEF Science Fair 2026. Competing with talented students from various schools, Brighton teams showcased impressive scientific ideas and innovative solutions, earning multiple medals at the event.",
          "Gold Medal and National Qualification achieved by Hitaksh Miri and Darshil Sisodia, whose project Exhocool secured them a place in the National level of the INSEF competition, marking a significant milestone for the school.",
          "Two Silver Medals. One was awarded to Anannya Agrawal, while the other was earned by the team of Tanisha Malani and Renne Yadav, whose project NeuroMove demonstrated strong scientific thinking and practical application.",
          "Tanishq Chaudhary and Pragya Deshmukh were awarded the Bronze Medal for their innovative project Ammon presentation.",
          "The remarkable performance of Brighton students at the INSEF Science Fair highlights the school’s commitment to promoting scientific research, creativity, and hands-on STEM learning.",
        ],
      },
      {
        title: "Won Multiple Awards at Rising Spirit Fest, KPS TULSI",
        image: wonMultipleAwardsAtRisingSpiritFestKpsTulsi,
        portfolio: "https://brightoninternational.in/portfolio/won-multiple-awards-at-rising-spirit-fest-kps-tulsi/",
        writeUp: [
          "Brighton students secure multiple top positions at the Rising Spirit Fest, showcasing innovation and strong entrepreneurial thinking.",
          "Brighton International School, Raipur, proudly celebrates the achievements of its students at the Rising Spirit Fest hosted by Krishna Public School, Tulsi. Competing against several schools, Brighton students demonstrated creativity, innovation, and confident presentation across different competition categories.",
          "In the Science Model Competition, Ishpreet Kaur and Swara Goel secured First Prize for their impressive project presentation. Their model stood out for its creativity, practical concept, and clear scientific explanation.",
          "In the Science Model Competition, Ishika Jaisinghani (Class 11) earned the Runner-Up position, presenting an innovative idea that highlighted strong problem-solving skills and entrepreneurial thinking.",
          "Another team from Brighton, Palash Pandey and Arisha Musani (Class 8), secured Second Prize in the Business Model Competition for their innovative project idea, further adding to the school’s success at the event.",
        ],
      },
      {
        title: "CBSE Regional Science Exhibition, 2026",
        image: cbseRegionalScienceExhibition2026,
        portfolio: "https://brightoninternational.in/portfolio/cbse-regional-science-exhibition-2026/",
        writeUp: [
          "Brighton students present their innovative projects at the CBSE Regional Science Exhibition, showcasing creativity and scientific thinking.",
          "Brighton International School, Raipur, proudly participated in the CBSE Regional Science Exhibition held at Krishna Public School, Dunda. The event brought together young innovators from various schools to present creative scientific solutions and ideas.",
          "Representing Brighton, Tanisha Malani and Renne Yadav showcased their project “NeuroMove.” The project is a smart healthcare device designed to analyze muscle activity and help detect abnormalities that may indicate conditions such as paralysis or other muscular issues. The system is designed to alert users if irregular muscle patterns are detected, promoting early awareness and timely medical attention.",
          "Another team from Brighton, Tanishq Chaudhary and Pragya Deshmukh, presented their project “Ammon.” Their project focuses on developing an innovative solution related to ammonia detection and monitoring, addressing environmental and safety concerns where ammonia levels may affect health and surroundings.",
        ],
      },
      {
        title: "Brightonites shine at Excella Fest 2025",
        image: brightonitesShineAtExcellaFest2025,
        portfolio: "https://brightoninternational.in/portfolio/brightonites-shine-at-excella-fest-2025/",
        writeUp: [
          "Brighton students deliver an exceptional performance at Excella Fest 2025, winning top positions across multiple competitions and securing the Overall Runner-Up Trophy.",
          "Brighton International School, Raipur, proudly celebrates the remarkable achievements of its students at Excella Fest 2025, hosted by Chhattisgarh Public School. Competing with several schools in the city, Brighton students demonstrated outstanding skills in robotics, innovation, and scientific creativity, bringing home multiple top honors.",
          "Robotics category:- Manas Nagdeo and Mayank Sahu (Class 9) secured First Position in both Robo Soccer and Robo Wrestling events. Their robots impressed judges with their design, control, and performance, dominating both competitions.",
          "Science Model Competition:- Divyansh Maheshwari and Siddhesh Pattanayak (Class 9) earned Second Prize for their innovative science model, showcasing strong conceptual understanding and creativity.",
          "Adding to this success, Brighton International School was also honored with the Overall Runner-Up Award at the event, recognizing the school’s outstanding performance across competitions.",
        ],
      },
      {
        title: "Top Honors at SRIJAN 4.0",
        image: topHonorsAtSrijan40,
        portfolio: "https://brightoninternational.in/portfolio/top-honors-at-srijan-4-0/",
        writeUp: [
          "Brighton students achieve multiple honors at SRIJAN 4.0, showcasing their innovation and creativity across competitions.",
          "Brighton International School, Raipur, proudly celebrates the outstanding achievements of its students at SRIJAN 4.0, organized by Anjaneya University. Competing against students from over 20 schools across the city, Brighton teams secured top positions in multiple categories.",
          "Business Model Competition",
          {
            list: "ol",
            items: [
              "The First Prize was awarded to Palash Pandey and Arisha Musani (Class 8) for their project “HOPE.” Their idea focuses on a Smart QR Band designed to help locate lost children and elderly individuals. By scanning the QR code on the band, essential identification details can be accessed, helping people quickly reconnect individuals with their families and ensuring their safety.",
              "The Second Prize was secured by Tanishka Khurrana and Palakshi Pandey (Class 9) for their project “Talking Stick.” This assistive device is designed to support visually impaired individuals by providing audio feedback when obstacles are detected nearby, helping users navigate their surroundings more safely and confidently.",
            ],
          },
          "Model Making Competition",
          {
            list: "ol",
            items: [
              "Tanisha Malani and Renne Yadav secured Second Prize for their project “NeuroMove.” NeuroMove is a smart healthcare device designed to analyze muscle activity and detect abnormalities that may indicate early signs of paralysis or other muscular issues. The system alerts users whenever irregular muscle patterns are detected, encouraging early awareness and timely medical attention.",
            ],
          },
        ],
      },
      {
        title: "Won National Award at STEM Innovation League",
        image: wonNationalAwardAtStemInnovationLeague,
        portfolio: "https://brightoninternational.in/portfolio/won-national-award-at-stem-innovation-league/",
        writeUp: [
          "Brighton students shine at a national platform as their innovative healthcare project NeuroMove wins recognition at the STEM Innovation League in Delhi.",
          "Brighton International School, Raipur, proudly celebrates the remarkable achievement of Tanisha Malani (Class 9) and Ishika Jaisinghani (Class 11), who won a National Award at the STEM Innovation League held in New Delhi. Their project, “NeuroMove,” stood out among 100+ innovative projects from across the country, earning recognition for its impactful approach to healthcare technology.",
          "The project was developed with the aim of addressing challenges related to paralysis and muscle health monitoring. NeuroMove is a smart health device designed to help analyze muscle activity and detect possible abnormalities that may indicate early signs of paralysis or other muscular issues. The system works by monitoring muscle signals and analyzing them through smart sensors and processing technology. If any irregularities or abnormal muscle patterns are detected, the device alerts the user, enabling early awareness and encouraging timely medical attention.",
          "Beyond the technical innovation, the project also showcased the spirit of “SheSTEM” highlighting how young women are actively contributing to advancements in science, technology, engineering, and mathematics. Tanisha and Ishika’s work demonstrated how innovation can be used to address real-world health challenges while inspiring more girls to explore STEM fields. Competing against over a hundred teams at the national level, their project impressed the judges with its social relevance, technical approach, and potential impact in healthcare monitoring.",
        ],
      },
      {
        title: "Won First Prize at Kanger Valley Biz-Pitch 2.0",
        image: wonFirstPrizeAtKangerValleyBizPitch20,
        portfolio: "https://brightoninternational.in/portfolio/won-first-prize-at-kanger-valley-biz-pitch-2-0/",
        writeUp: [
          "Brighton International School, Raipur, proudly celebrates another milestone in student innovation as Palash Pandey, Palakshi Pandey, and Tanishka Khurrana secured First Prize at the Kanger Valley Biz-Pitch 2.0 in the junior category for their impactful project titled “Talking Stick.” The project was developed under the school’s Brighton ATL (Atal Tinkering Lab) initiative.",
          "The Talking Stick is an assistive device designed to support visually impaired individuals in navigating their surroundings safely and independently. Inspired by the everyday challenges faced by people with visual impairments, the students set out to create a smart solution that enhances mobility and confidence.",
          "The device works by detecting obstacles or objects near the user and providing real-time audio feedback. This audio guidance alerts the user about objects in their path, helping them move more safely and avoid collisions while walking. By combining simple yet effective technology with thoughtful design, the Talking Stick acts as a helpful companion for individuals who rely on assistive tools for navigation.The project stood out at the competition for its practicality, social impact, and innovative approach, earning the team the top prize at Biz-Pitch 2.0.",
          "This achievement highlights Brighton International School’s commitment to encouraging students to apply technology to solve real-world problems. Through the ATL Lab, students are given the opportunity to explore ideas, build prototypes, and develop solutions that can positively impact society.",
          "We congratulate Palash Pandey, Palakshi Pandey, and Tanishka Khurrana for their outstanding work and for bringing pride to Brighton International School through their innovative thinking and dedication.",
        ],
      },
      {
        title: "Selected for INSPIRE MANAK Awards 2026",
        image: selectedForInspireManakAwards2026,
        portfolio: "https://brightoninternational.in/portfolio/selected-for-inspire-manak-awards-2026/",
        writeUp: [
          "Brighton International School, Raipur, is proud to celebrate the achievements of three of its young innovators Adityasai B, Palash Pandey, and Samariddh Sood who have been selected for the prestigious INSPIRE-MANAK Awards for the year 2026.",
          "The INSPIRE MANAK program, an initiative of the Government of India, encourages students to develop creative ideas that address real-life problems through science and innovation. As part of their selection, each student has received a ₹10,000 grant to further develop and build prototypes of their projects.",
          "Adityasai B proposed a thoughtful project titled “FlexTalk.” The idea focuses on helping paralytic and bedridden patients communicate more easily. The device aims to assist individuals who struggle to speak or move, allowing them to express their needs more effectively. Such a system could be especially valuable in hospitals and home-care environments, improving patient comfort and communication.",
          "Palash Pandey designed “HOPE – A Smart QR Band,” a wearable solution aimed at helping locate lost children and elderly individuals. The band contains a QR code that, when scanned, can provide important identification details and help authorities or nearby people quickly reconnect the individual with their family.",
          "Samariddh Sood introduced a Multi-Purpose Scissor, a practical tool designed to combine several everyday functions in one device. In addition to cutting, the tool can also assist with measuring, screwing, wire cutting, and providing light, making it a versatile solution for both daily and technical tasks.",
          "All three students have successfully cleared the regional round and are now eligible to participate in the district-level round in 2026. Their achievement reflects the spirit of curiosity, creativity, and problem-solving that Brighton International School strives to nurture in its students. We congratulate Adityasai, Palash, and Samariddh on this accomplishment and wish them the very best for the upcoming district-level competition.",
        ],
      },
    ],
  },
  {
    year: "2024 - 25",
    cards: [
      {
        title: "Brighton wins at Global Competition, USA",
        image: brightonWinsAtGlobalCompetitionUsa,
        objectPosition: "center 42%",
        portfolio: "https://brightoninternational.in/portfolio/brighton-wins-at-global-competition-usa/",
        writeUp: [
          "Brighton Students Build ‘Blind Vision’ – An AI-Powered Solution for the Visually Impaired\nBrighton International School, Raipur, is proud to spotlight one of its most impactful student innovations—Blind Vision, an assistive AI-based wearable developed by students Shaurya Grover and Soumya Jain under the school’s Atal Tinkering Lab (ATL) initiative.",
          "Driven by a desire to empower visually impaired individuals, Shaurya and Soumya envisioned a device that could serve as a “third eye”, helping users navigate the world independently using real-time audio feedback. Their innovation combines artificial intelligence, computer vision, and voice technology to detect objects, recognize currency, read printed text, and describe surroundings—all through a compact, camera-enabled wearable.",
          "Blind Vision is more than just a science project—it’s a solution with real-world social impact. The device uses a Raspberry Pi and AI models to process live camera input and deliver clear, spoken feedback in real time, enabling users to move safely and confidently in unfamiliar environments.",
          "This groundbreaking project has already gained national and international recognition. Shaurya and Soumya won Gold at the INSEF National Science Fair 2025, qualifying them to represent India at the prestigious Genius Olympiad in the USA, where they earned a Bronze Medal—a proud moment for Brighton and the nation.",
          "Their journey reflects Brighton’s commitment to fostering purpose-driven innovation and nurturing young minds who aspire to create meaningful change. Through the ATL lab, students are empowered to think critically, solve real problems, and build solutions that matter.",
          "We congratulate Shaurya and Soumya for their exceptional contribution to inclusive innovation and for representing Brighton International School on the global stage.",
        ],
      },
      {
        title: "Big Achievement – Brighton wins GOLD at National Fair at INSEF",
        image: bigAchievementBrightonWinsGoldAtNationalFairAtInsef,
        objectPosition: "center 45%",
        portfolio: "https://brightoninternational.in/portfolio/big-achievement-brighton-wins-gold-at-national-fair-at-insef/",
        writeUp: [
          "Brighton International School Raipur proudly announces that two of its Class X students, Shaurya Grover and Soumya Jain, have achieved a remarkable milestone by winning the prestigious Gold Medal at the Indian Science and Engineering Fair (INSEF) 2025 National Fair, held in Bengaluru on January 11, 2025. Their innovative project, a device designed to assist the visually impaired in navigating urban spaces and day to day chores, has earned them the opportunity to represent India at the GENIUS Olympiad 2025 in the USA.",
          "The GENIUS Olympiad, an international competition addressing global environmental challenges, is organized by Terra Science and Education and hosted by the Rochester Institute of Technology, USA. The event will take place from June 9 to 13, 2025, providing a global platform for young innovators like Shaurya and Soumya to showcase their talents.",
          "A Journey of Excellence",
          "Shaurya and Soumya’s journey began at the INSEF Regional Fair in Raipur, where their project secured the Gold Medal, propelling them to the INSEF National Fair in Bengaluru. Their innovative device caught the attention of judges for its practicality and potential to empower visually impaired individuals in their daily lives.",
          "INSEF, hosted by the Science Society of India (SSI) since 2010, has been a cornerstone in fostering scientific curiosity and innovation among students. By offering a progression from regional fairs to national-level competitions and eventually international platforms, INSEF enables students to develop and showcase their scientific acumen.",
          "Empowering Innovation Through STEM",
          "Brighton International School Raipur has long been committed to nurturing young talent in the fields of Science, Technology, Engineering, and Mathematics (STEM). Speaking on the students’ success, Mrs. Jayshree Nair, Principal of Brighton International School Raipur, remarked: “Our school’s Atal Tinkering Lab (ATL) has been instrumental in inspiring students to explore and innovate in STEM. This achievement underscores our dedication to equipping students with the skills and mindset to helm new paths in science and technology.”",
          "About INSEF and GENIUS Olympiad",
          {
            list: "ul",
            items: [
              "INSEF, organized by the Science Society of India, provides a robust platform for students to develop and showcase their scientific projects, with winners advancing to esteemed international competitions like the GENIUS Olympiad.",
              "The GENIUS Olympiad is a global event promoting solutions to environmental challenges. It gathers talented high school students from around the world to present their ideas and innovations.",
            ],
          },
          "A Bright Future Ahead",
          "Shaurya and Soumya’s achievement exemplifies the dedication and talent of Brighton International School Raipur’s students. As they prepare to represent India at the GENIUS Olympiad 2025, the school and the community stand behind them, proud of their success and inspired by their innovation.",
          "For Brighton International School",
          "Contact Person: Mr Sagar Sahu – +91 73540 73586",
          "About the School: https://brightoninternational.in",
          "Links about the competition",
          "About Indian Science & Engineering Fair (INSEF) : https://sciencesociety.in",
          "Results: https://sciencesociety.in/insef/INSEF_NationalFair_Results_2024_25.htm",
          "About Genius Olympiad: https://geniusolympiad.org",
        ],
      },
      {
        title: "Success at INSEF 2024",
        image: successAtInsef2024,
        objectPosition: "center 42%",
        portfolio: "https://brightoninternational.in/portfolio/success-at-insef-2024/",
        writeUp: [
          "The Science Society of India (SSI) since 2010, has been fostering innovation and scientific curiosity through the INSEF (Indian Science & Engineering Fair) program. INSEF provides a platform for students to showcase their scientific endeavors, starting with regional fairs held across India. Winners progress to the INSEF National Fair, and top performers gain the opportunity to compete internationally at prestigious events like the Genius Olympiad in the USA. SSI’S INSEF program has a proven track record of empowering students to achieve significant milestones in their scientific pursuits. By providing opportunities for hands-on learning and competition, SSI is nurturing the next generation of scientists and engineers.",
          "In INSEF Regional Rounds held at Raipur on 8th Dec 2024, One of the team from Brighton International School has made it to National Round and all the others were felicitated as well. Here are the results.",
          "Blind Vision – Gold\nTalking Stick – Silver\nAGCS – Bronze\nCurator – Honourable Mention\nAqua Sweeper – Honourable Mention",
        ],
      },
      {
        title: "Super winner at CPS – EXCELLA Fest 2024",
        image: superWinnerAtCpsExcellaFest2024,
        objectPosition: "center 40%",
        portfolio: "https://brightoninternational.in/portfolio/super-winner-at-cps-excella-fest-2024/",
        writeUp: [
          "Brighton International School won big at the Chhattisgarh Public School Excella 2024. Brighton International School won all the We won all science and robotics awards with a cash prize of 3000.",
        ],
      },
      {
        title: "First Prize at Anjenya University – Srijan 2024",
        image: firstPrizeAtAnjenyaUniversitySrijan2024,
        objectPosition: "center 42%",
        portfolio: "https://brightoninternational.in/portfolio/first-prize-at-anjenya-university-srijan-2024/",
        writeUp: [
          "Anjenya University, Raipur’s festival ‘Srijan 2024’, happened between October 22nd to 24th at Anjaneya University! It’s was a great opportunity to see school students showcasing their talent, creativity, and ideas. Young Brightonites won the first prize after displaying their inovation.",
        ],
      },
      {
        title: "Winner at Xplora ‘The Robotics Fest’ – KPS Dunda Raipur",
        image: winnerAtXploraTheRoboticsFestKpsDundaRaipur,
        objectPosition: "center 38%",
        portfolio: "https://brightoninternational.in/portfolio/winner-at-xplora-the-robotics-fest-kps-dunda-raipur/",
        writeUp: [
          "The Robotics fest – Xplora 4.0 is the ultimate Techfest hosted by Krishna Public School, Raipur, in collaboration with ATL and Coders Club! Xplora 4.0 is more than just an event; it’s a celebration of innovation, creativity, and technological excellence. Brighton International School won big at Xplora bagging Hurdle mania, Robo War and at Robo Soccer.",
        ],
      },
      {
        title: "Selection in Top 100 at IIT Delhi",
        image: selectionInTop100AtIitDelhi,
        objectPosition: "center 36%",
        portfolio: "https://brightoninternational.in/portfolio/selection-in-top-100-at-iit-delhi/",
      },
      {
        title: "Selection in Top 500 in india – Ideathon 2024",
        image: selectionIdeathon2024,
        portfolio: "https://brightoninternational.in/portfolio/selection-ideathon-2024/",
        writeUp: [
          "Youth Ideathon encourages our youth to dream big and gives their dreams wings. Organised by ThinkStartup and Management Entrepreneurship Professional Skills Council (MEPSC) in association with Central Board for Secondary Education (CBSE), in 3 editions, the Youth Ideathon is India’s biggest innovation and entrepreneurship competition designed specifically for school students.",
          "Brighton International School is proud to be selected among the TOP 500 in India with two of its models",
        ],
      },
      {
        title: "5-day workshop on ‘Arduino and PCB Designing’",
        image: card5DayWorkshopOnArduinoAndPcbDesigning,
        objectPosition: "center 58%",
        portfolio: "https://brightoninternational.in/portfolio/5-day-workshop-on-arduino-and-pcb-designing/",
        writeUp: [
          "The students of Brighton International School have successfully completed a 5-day workshop on Arduino and PCB Designing at SSIPMT, Raipur. This intensive program provided them with valuable hands-on experience in cutting-edge technology, allowing them to design and develop electronic circuits using Arduino and PCB (Printed Circuit Board) platforms.",
          "Throughout the workshop, students not only honed their technical skills but also cultivated a deeper interest in innovation and problem-solving. The knowledge gained during this experience will empower them to take on future challenges with creativity and confidence. At Brighton International School, we remain committed to fostering such opportunities that prepare our students for the future of technology and innovation.",
        ],
      },
      {
        title: "Intelifest 2024 – Interschool Comp – KPS Dunda Raipur",
        image: intelifest2024InterschoolCompKpsDundaRaipur,
        objectPosition: "center 36%",
        portfolio: "https://brightoninternational.in/portfolio/intelifest-2024-interschool-comp-kps-dunda-raipur/",
        writeUp: [
          {
            list: "ul",
            items: [
              "First Position – Tanishqa Khurana- VIII & Palakshi Pandey- VIII",
            ],
          },
          {
            list: "ul",
            items: [
              "Tanishq Choudhary- IX – Runner up",
              "Paryavaran Paheli – 2nd Runner up",
            ],
          },
        ],
      },
      {
        title: "ATL Community Day",
        image: atlCommunityDay,
        portfolio: "https://brightoninternational.in/portfolio/atl-community-day/",
        writeUp: [
          "ATAL TINKERING LAB COMMUNITY DAY was celebrated at Brighton International School to commemorate the Birth Anniversary of Dr. B. R. Ambedkar and provide equal opportunity to all.",
          {
            list: "ul",
            items: [
              "ATL Community Day will introduce children who don’t have access to formal education, to the philosophy of Atal Tinkering Labs.",
              "Schools may conduct a series of tinkering and ideation workshops, trainings and showcase events in their ATL premises.",
              "Mentors of Change, Parents and Teachers are encouragd to support their respective ATLs to conduct the tinkering sessions.",
            ],
          },
          "The above was observed at the All at Brighton International School lab.",
        ],
      },
      {
        title: "4 days of workshop on AI",
        image: card4DaysOfWorkshopOnArtificialIntelligence,
        objectPosition: "center 36%",
        portfolio: "https://brightoninternational.in/portfolio/4-days-of-workshop-on-artificial-intelligence/",
        writeUp: [
          "a group of our talented students successfully completed a 4-day workshop on Artificial Intelligence from May 1 to May 4. The workshop, organized by the Department of Science & Technology, CG Government in collaboration with IIT Bhilai, offered a unique opportunity for our students to explore the world of AI under expert guidance.",
          "The following students represented Brighton International School at the workshop:",
          {
            list: "ol",
            items: [
              "Daksh Jain",
              "Riddhima Modi",
              "Heetakshi Shukla",
              "Adishree Bais",
              "Aishwarya Pillay",
            ],
          },
          "Their participation in this prestigious event reflects the school’s commitment to nurturing future innovators and tech enthusiasts. We congratulate them for their enthusiasm and dedication!",
        ],
      },
      {
        title: "Training Program for Teachers",
        image: trainingProgramForTeachers,
        objectPosition: "center 42%",
        portfolio: "https://brightoninternational.in/portfolio/training-program-for-teachers/",
        writeUp: [
          "At Brighton International School Raipur, our teachers are continuously equipped with cutting-edge skills to inspire the next generation of learners. A group of educators underwent specialized training in Arduino programming blocks, a hands-on learning experience that integrates technology and creativity into the classroom.",
          "Arduino programming blocks provide an innovative platform to teach students the fundamentals of electronics and coding in an interactive way. Our teachers are now prepared to introduce these concepts, sparking curiosity and fostering problem-solving skills among students. By staying ahead in the technological curve, Brighton International School continues to ensure that both teachers and students are future-ready in this ever-evolving digital world.",
        ],
      },
      {
        title: "IDE Bootcamp 2024, Bhubaneshwar",
        image: ideBootcamp2024Bhubaneshwar,
        objectPosition: "center 36%",
        portfolio: "https://brightoninternational.in/portfolio/ide-bootcamp-2024-bhubaneshwar/",
        writeUp: [
          "Brighton International School students proudly joined the Innovation, Design, and Entrepreneurship (IDE) Bootcamp at Gandhi Institute For Technology (GIFT) Autonomous, Bhubaneswar. This exciting two-day residential training program, brought to life by the Ministry of Education’s Innovation Cell (MIC) in collaboration with the All India Council for Technical Education (AICTE), is all about sparking innovation, nurturing creative thinking, and cultivating entrepreneurial skills among both students and teachers. We’re thrilled to see our students embrace this opportunity to learn, grow, and innovate!",
        ],
      },
    ],
  },
  {
    year: "2023 - 24",
    cards: [
      {
        title: "Business Model Presentation organized by Anjaneya University",
        image: businessModelPresentationOrganizedByAnjaneyaUniversity,
        objectPosition: "center 38%",
        portfolio: "https://brightoninternational.in/portfolio/business-model-presentation-organized-by-anjaneya-university/",
        writeUp: [
          "Date : Jan 2024",
          "Our students participated in “Business Model Presentation” organized by Anjaneya University Raipur. Where they presented a business model “PenPal” and got 1st Prize there.",
          "Participants : Vidhi Jain & Pratyusha Palasgar",
        ],
      },
      {
        title: "News Coverage 2023-24",
        image: newsCoverage202324,
        objectPosition: "center 12%",
        portfolio: "https://brightoninternational.in/portfolio/news-coverage-2023-24/",
        writeUp: [
          "2023-24",
          "Various models and prototypes made by Brightonites were covered time to time by the local dailies in Raipur.",
        ],
      },
      {
        title: "Regional Level Science Exhibition 2023",
        image: regioanlScienceExhibition2023,
        objectPosition: "center 40%",
        portfolio: "https://brightoninternational.in/portfolio/regioanl-science-exhibition-2023/",
        writeUp: [
          "Date : Dec. 2023",
          "N.H Goel World School conducted CBSE Regional Level Science Exhibition 2023. The organization of the Science Exhibition aims to provide a platform for students to demonstrate such learnings that encourage the construction of knowledge by connecting new ideas to existing concepts as well as enriching one’s understanding of other’s experiences and perspectives. The students and the model post getting selected from the regional rounds make it to the National Round.",
          {
            list: "ul",
            items: [
              "Result for Brighton International School – Secured 1st Position and Qualified for Nationals. – Participants : Shourya Grover & Soumya Jain",
            ],
          },
        ],
      },
      {
        title: "Intelifest 2023 – Interschool Comp – KPS Dunda Raipur",
        image: kpsIntelifest2023,
        objectPosition: "center 36%",
        portfolio: "https://brightoninternational.in/portfolio/kps-intelifest-2023/",
        writeUp: [
          "Date : Nov. 2023",
          "Brighton International School won all the Robotics Competition which was organised by KPS, DUNDA.\nWhich are as follows.",
          "Hurdle Race – 1st\nRobo soccer – 1st\nRobo war – 1st\n\nParticipants: Prabhleen Singh, Divyansh Bhaurya, Vaibhav Arpit Singh & Vansh.",
        ],
      },
      {
        title: "Science Exhibition 2023 – Interschool Comp – CPS Raipur",
        image: scienceExhibition23CpsRaipurInterschoolComp,
        objectPosition: "center 42%",
        portfolio: "https://brightoninternational.in/portfolio/science-exhibition-23-cps-raipur-interschool-comp/",
        writeUp: [
          "Date : Nov. 2023",
          "CPS, Raipur organized Science Exhibition in the month of Nov. Where we Exhibited two projects and got 1st prize in both projects.",
          "Event : Science Exhibition 23",
          "Project 1 : Travel Thrills\nResult : Got 1st prize\nParticipants : Vidhi Jain & Heetakshi Shukla",
          "Project 2 : Sensory Vision\nResult : Got 1st Prize\nParticipants : Gauri Sharma & Sanvi",
        ],
      },
      {
        title: "NEXUS 2023 – Interschool Comp – SSIPMT, Raipur",
        image: nexus2023InterschoolCompBySsipmtRaipur,
        objectPosition: "center 8%",
        portfolio: "https://brightoninternational.in/portfolio/nexus-2023-interschool-comp-by-ssipmt-raipur/",
        writeUp: [
          "Date : Nov. 2023",
          "Competitions Organized by the The Shri Shankaracharya Institute of Professional Management and Technology Raipur",
          "Our achievements there.",
          {
            list: "ol",
            items: [
              "Second Postion",
              "Fourth Position",
            ],
          },
        ],
      },
      {
        title: "Tinkerthon 2023 – Interschool Comp – ATL-AIM Bilaspur",
        image: tinkerthon2023,
        objectPosition: "center 36%",
        portfolio: "https://brightoninternational.in/portfolio/tinkerthon-2023/",
        writeUp: [
          "Date : Aug. 2023",
          "This pioneering hackathon was held in Bilaspur on August 7th and 8th, 2023, and witnessed active participation from Atal Tinkering Lab schools across all districts of Chhattisgarh. It was organized at Swami Atmanand Government Higher Secondary School, Bilaspur. A total of 110 teams from 78 ATL schools participated in the Tinkerathon, showcasing the remarkable enthusiasm and interest of young innovators. The event provided a platform for students to channel their creativity and apply their knowledge to solve real-world problems. The Chhattisgarh State Level ATL Hackathon marked a significant milestone in the state’s commitment to fostering innovation, creativity, and problem-solving skills among its population.",
          "Winner – Brighton International School Raipur\nProject Name: Blind Vision – Enabling Vision through Sound.\nOur project centers on a unique camera that assists visually impaired individuals in understanding their surroundings. This camera can identify various elements like money, familiar faces, the quantity of people nearby, traffic, objects, and distances, providing this information through audio cues.",
        ],
      },
      {
        title: "Aurora 2023- Interschool Comp – DPS Raipur",
        image: dpsRoboticsWinner,
        objectPosition: "center 38%",
        portfolio: "https://brightoninternational.in/portfolio/dps-robotics-winner/",
        writeUp: [
          "Date : Aug. 2023",
          "Competitions Organized by the Robotics Department of DPS, Raipur in their event “AURORA 23” inter school competition.",
          "Our achievements there.\n1. Robo Soccer – 1st Position – Participants – Prabhaleen Singh & Vaibhav Arpit Singh",
          "2. Hurdle Race – 1st – Participants – Prabhaleen Singh & Vaibhav Arpit singh",
          "3. Science Exhibitions :",
          {
            list: "ul",
            items: [
              "3-5th Grade category – 3rd",
              "6-8th Grade category – 1st",
              "9-11th Grade category – 1st",
            ],
          },
        ],
      },
    ],
  },
];

export function roboticsHighlightSlug(card: RoboticsHighlight) {
  return card.portfolio?.match(/\/portfolio\/([^/]+)\/?$/)?.[1] ?? "";
}

export function findRoboticsHighlight(slug: string) {
  for (const group of roboticsHighlights) {
    const card = group.cards.find((item) => roboticsHighlightSlug(item) === slug);
    if (card) return { year: group.year, card };
  }
  return null;
}

/** Later cards in the same year, then earlier ones. */
export function relatedRoboticsHighlights(slug: string, count = 3) {
  for (const group of roboticsHighlights) {
    const index = group.cards.findIndex((item) => roboticsHighlightSlug(item) === slug);
    if (index === -1) continue;
    return [...group.cards.slice(index + 1), ...group.cards.slice(0, index)].slice(0, count);
  }
  return [];
}
