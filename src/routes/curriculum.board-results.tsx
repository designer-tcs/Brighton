import { createFileRoute } from "@tanstack/react-router";
import { Banner, meta } from "@/components/TabNav";

export const Route = createFileRoute("/curriculum/board-results")({
  head: () =>
    meta(
      "Board Exam Results",
      "CBSE Class X and Class XII board results for Brighton International School, Raipur: students appeared, pass percentage, distinctions and toppers.",
    ),
  component: BoardExamResults,
});

type YearBlock = { label: string; lines: string[] };
type YearResult = {
  year: string;
  appeared: string;
  pass: string;
  notes: string[];
  blocks: YearBlock[];
};

// Figures copied from https://brightoninternational.in/board-results/
// Pass cells are shown as published. Some years print a bare number under
// "Pass Percentage (% of students passed)"; others include a % sign.
const classX: YearResult[] = [
  {
    year: "2025-26",
    appeared: "142",
    pass: "100",
    notes: ["Number of students scoring above 90 % – 49 Students"],
    blocks: [
      {
        label: "Top 5 Students",
        lines: [
          "PRAGYA DESHMUKH – 98.8",
          "SUSMIT NAYAK – 98.6",
          "ZUNERA FIRDAUS – 98.6",
          "SRINJAY GHOSH – 98.6",
          "SAKET ROY – 98.2",
          "AASTHA SHARMA – 98.2",
        ],
      },
    ],
  },
  {
    year: "2024-25",
    appeared: "125",
    pass: "100",
    notes: ["Number of students scoring above 90 % 34"],
    blocks: [
      {
        label: "Top 5 Students",
        lines: [
          "RENEE YADAV 98.2",
          "B. MANIKYAVEENA REDDY 97.2",
          "LAKSHYA AGRAWAL 97.2",
          "ANUPRIYA KUMARI 96.6",
          "ISHIKA JAISINGHANI 95.2",
        ],
      },
    ],
  },
  {
    year: "2023-24",
    appeared: "93",
    pass: "100",
    notes: ["SESSION: 2023-24", "Number of students appeared 93"],
    blocks: [
      {
        label: "Top 5 students",
        lines: [
          "HIMANSHI AGRAWAL 97.2",
          "SHREYANSH ROY 96.2",
          "ARUSH TIWARY 95.8",
          "RITIKA MAHLA 95",
          "ARPIT AGRWAL 94.8",
        ],
      },
    ],
  },
  {
    year: "2022-23",
    appeared: "79",
    pass: "100",
    notes: ["13 students scored above 90%"],
    blocks: [
      {
        label: "Top 5",
        lines: [
          "Gurbani Kaur Chhabra – 97.6%",
          "Aanya Sharma – 95.6%",
          "Ayush Singh – 94.4%",
          "Kumkum Dewangan – 94.4%",
          "Vaibhav Arpit Singh – 94%",
        ],
      },
    ],
  },
  {
    year: "2021-22",
    appeared: "94",
    pass: "98",
    notes: ["17 students scored above 90%"],
    blocks: [
      {
        label: "Top 5",
        lines: [
          "Surbhi Sahu – 97.6%",
          "Tanishka Chakraborty – 97%",
          "Rudraksh Khatwani – 96.6%",
          "Karthik Jindal – 95.8%",
          "Samriddhi Chobey – 95.6%",
        ],
      },
    ],
  },
  {
    year: "2020-21",
    appeared: "87",
    pass: "97%",
    notes: ["8 students scored above 90%"],
    blocks: [
      {
        label: "Top 5",
        lines: [
          "Spandini Tiwari – 96.4%",
          "Vinayak Shrivastava – 93.6%",
          "Sanjana Mandal – 93.2%",
          "Aditya Sharma – 92.6 %",
          "Aditi Devangan – 92.2 %",
        ],
      },
    ],
  },
  {
    year: "2018-19",
    appeared: "74",
    pass: "98.6%",
    notes: ["9 students scored above 90%"],
    blocks: [
      {
        label: "Top 5",
        lines: [
          "Dhananjay Tamrkar – 95.8 %",
          "Shrajoy Sur – 93.6 %",
          "Shreyansh Murathia – 93.6 %",
          "Harsh Prithwani – 94.8 %",
          "Manya Ahuja – 93.2 %",
        ],
      },
    ],
  },
  {
    year: "2017-18",
    appeared: "58",
    pass: "78%",
    notes: ["1 students scored above 90%"],
    blocks: [
      {
        label: "Top 3",
        lines: [
          "Taquee Mahmood – 90.4%",
          "Chanchal Chaturvedi – 86.4%",
          "Khushi Chandra – 87%",
        ],
      },
    ],
  },
];

const classXII: YearResult[] = [
  {
    year: "2025-26",
    appeared: "90",
    pass: "100",
    notes: [],
    blocks: [
      {
        label: "Science",
        lines: ["Arush Tiwary – 94.2%", "Harshita Verma – 93%", "Arpit Agrawal – 90.8%"],
      },
      {
        label: "Commerce",
        lines: ["Girik Kochar – 96.4%", "Khushi Begwani – 94.6%", "Tanisha Kedia – 94.4%"],
      },
      {
        label: "HSBA",
        lines: ["Arundhati Raghuvanshi – 94.6%", "Aayush Sagar – 91%", "Shrestha Hotwani – 90%"],
      },
      {
        label: "Humanities",
        lines: ["Mannat Vidhani – 95.8%", "Archit Upadhyay – 90.6%", "Amisha Kumari Yadav – 89.4%"],
      },
    ],
  },
  {
    year: "2024-25",
    appeared: "64",
    pass: "100",
    notes: [],
    blocks: [
      {
        label: "Science",
        lines: ["DIVYANSH OJHA 91", "AANYA SHARMA 89.8", "AYUSHI SINGH 87.8"],
      },
      {
        label: "Commerce",
        lines: ["KARISHMA AGRAWAL 96.4", "GULAB RAM JHAMBIA 93.8", "VANSHIKA VIVEK BHUTIA 90.4"],
      },
      {
        label: "HSBA",
        lines: ["PREYA SINGH RAJPUT 92.6", "YASH MAKHIJA 78", "AYUSH SAHU 77.8"],
      },
      {
        label: "Humanities",
        lines: ["PRERNA SINGH VERMA 94.2", "SAACHI KHANDELWAL 87.6", "NISHIKA SAXENA 87"],
      },
      {
        label: "Top 5 students",
        lines: [
          "KARISHMA AGRAWAL 96.4 COMMERCE",
          "PRERNA SINGH VERMA 94.2 HUMANITIES",
          "GULAB RAM JHAMBIA 93.8 COMMERCE",
          "PREYA SINGH RAJPUT 92.6 HSBA",
          "DIVYANSH OJHA 91 SCIENCE",
        ],
      },
    ],
  },
  {
    year: "2023-24",
    appeared: "94",
    pass: "100",
    notes: [],
    blocks: [
      {
        label: "Science",
        lines: ["SURBHI SAHU 93.2", "ANSHU VERMA 87.4", "MAHI KOSAM 86.2"],
      },
      {
        label: "Commerce",
        lines: ["PRACHI AGRAWAL 96", "SONIYA 94.8", "KRITIKA JIWNANI 93.6"],
      },
      {
        label: "HSBA",
        lines: ["SUKHPREET KAUR TUTEJA 95.6", "NAITIK DANODIA 91.4", "DIKSHANT DUBEY 90.4"],
      },
      {
        label: "Humanities",
        lines: ["POOJA SHUKLA 95.2", "ADITI DEWANGAN 89.4", "NEHA VERMA 89.4"],
      },
      {
        label: "Top 5 students",
        lines: [
          "PRACHI AGRAWAL 96 COMMERCE",
          "SUKHPREET KAUR TUTEJA 95.6 HSBA",
          "POOJA SHUKLA 95.2 HUMANITIES",
          "SONIYA 94.8 COMMERCE",
          "KRITIKA JIWNANI 93.6 COMMERCE",
        ],
      },
    ],
  },
  {
    year: "2022-23",
    appeared: "66",
    pass: "95",
    notes: [],
    blocks: [
      {
        label: "Humanities",
        lines: ["Kanishq Lakhani – 92.2 %", "Priya Kumari Shah- 88.2 %", "Harshvardhan Bhaskar- 84 %"],
      },
      {
        label: "Commerce",
        lines: ["Ayush Tulsyan- 92 %", "Diksha Makhijani- 90.2 %", "Dhananjay Kochar- 89.2 %"],
      },
      {
        label: "Science",
        lines: ["Sanskriti Likhmania- 92.2 %", "Sonakshi Singh – 89.6 %", "Mahek Batra – 89 %"],
      },
    ],
  },
  {
    year: "2021-22",
    appeared: "93",
    pass: "98%",
    notes: [],
    blocks: [
      {
        label: "Humanities",
        lines: [
          "Ashvin Agrawal – 95.8 %",
          "Gaurav Chandrakar – 91.4 %",
          "Aishvarya Vishwakarma – 90.8 %",
          "Ashutosh Singh – 90.8 %",
        ],
      },
      {
        label: "Commerce",
        lines: ["Mayank Tayal – 91.2 %", "Prerna Singh – 91 %", "Khusi Vaghani- 88.2 %"],
      },
      {
        label: "Science",
        lines: ["Akshat Mishra – 94.2 %", "Aditi Devangan – 83.4 %", "Rishika Nirala – 83.8 %"],
      },
    ],
  },
  {
    year: "2020-21",
    appeared: "91",
    pass: "98.9%",
    notes: [],
    blocks: [
      {
        label: "Humanities",
        lines: ["Khushi Chandra – 96.4 %", "Arun Kumar Mahilane – 94 %", "Raghav Agrawal – 92.4 %"],
      },
      {
        label: "Commerce",
        lines: ["Samarjeet Singh Khurana – 94.4 %", "Ayushi Chaurasia – 93.4 %", "Tushar Verma – 91.8 %"],
      },
      {
        label: "Science",
        lines: ["Hitesh Verma – 94.2 %", "Prateek – 92.6 %", "Alisha Fazal – 91.8 %"],
      },
    ],
  },
];

function YearCard({ year }: { year: YearResult }) {
  return (
    <article className="card-shell p-6 md:p-7">
      <h3 className="font-display text-2xl text-primary">{year.year}</h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-blush p-4">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Appeared (No of students)</p>
          <p className="font-display text-4xl text-primary">{year.appeared}</p>
        </div>
        <div className="rounded-2xl bg-coral p-4 text-coral-foreground">
          <p className="text-xs uppercase tracking-wider">Pass Percentage (% of students passed)</p>
          <p className="font-display text-4xl">{year.pass}</p>
        </div>
      </div>
      {year.notes.length > 0 && (
        <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
          {year.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      )}
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {year.blocks.map((block) => (
          <div key={block.label} className="rounded-2xl bg-blush p-4">
            <p className="font-display text-primary">{block.label}</p>
            <ol className="mt-2 space-y-1 text-sm">
              {block.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </article>
  );
}

function ClassSection({ title, years }: { title: string; years: YearResult[] }) {
  return (
    <section className="mt-8">
      <h2 className="font-display text-3xl text-primary md:text-4xl">{title}</h2>
      <div className="mt-4 grid gap-4">{years.map((year) => <YearCard key={year.year} year={year} />)}</div>
    </section>
  );
}

function BoardExamResults() {
  return (
    <>
      <Banner
        eyebrow="School"
        title="Board Exam Results"
        intro="Brighton International School’s track record in the exams conducted by the CBSE."
      />

      <section className="card-shell mt-6 p-7 md:p-9">
        <p className="text-xs font-semibold uppercase tracking-wider text-highlight">Class X & Class XII</p>
        <p className="mt-3 text-sm text-muted-foreground">
          Excellence is part of the core philosophy at Brighton International School. The School is known for its
          academic rigour coupled with innovative pedagogy and pursuit of excellence. The school started in 2010-11
          upto Class VII, and from there on the organically the school grew class wise, adding one new class every
          subsequent year. Affiliated to CBSE, the first batch to give All India Secondary School Certificate
          Examination (Class X) was in the academic session 2013-14 and the first batch to give All India Senior
          Secondary School Certificate Examination (Class XII) was the batch of 2015-16.
        </p>
      </section>

      <ClassSection title="Class X" years={classX} />
      <ClassSection title="Class XII" years={classXII} />
    </>
  );
}
