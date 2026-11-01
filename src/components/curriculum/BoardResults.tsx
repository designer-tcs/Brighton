import { useState } from "react";
import { Award } from "lucide-react";

// From brightoninternational.in/board-results
type Year = { y: string; appeared: number; pass: string; above90?: string; groups: [string, string[]][] };

const classX: Year[] = [
  { y: "2025-26", appeared: 142, pass: "100%", above90: "49 students scored above 90%", groups: [["Top students", ["Pragya Deshmukh – 98.8", "Susmit Nayak – 98.6", "Zunera Firdaus – 98.6", "Srinjay Ghosh – 98.6", "Saket Roy – 98.2", "Aastha Sharma – 98.2"]]] },
  { y: "2024-25", appeared: 125, pass: "100%", above90: "34 students scored above 90%", groups: [["Top 5", ["Renee Yadav – 98.2", "B. Manikyaveena Reddy – 97.2", "Lakshya Agrawal – 97.2", "Anupriya Kumari – 96.6", "Ishika Jaisinghani – 95.2"]]] },
  { y: "2023-24", appeared: 93, pass: "100%", groups: [["Top 5", ["Himanshi Agrawal – 97.2", "Shreyansh Roy – 96.2", "Arush Tiwary – 95.8", "Ritika Mahla – 95", "Arpit Agrwal – 94.8"]]] },
  { y: "2022-23", appeared: 79, pass: "100%", above90: "13 students scored above 90%", groups: [["Top 5", ["Gurbani Kaur Chhabra – 97.6", "Aanya Sharma – 95.6", "Ayush Singh – 94.4", "Kumkum Dewangan – 94.4", "Vaibhav Arpit Singh – 94"]]] },
  { y: "2021-22", appeared: 94, pass: "98%", above90: "17 students scored above 90%", groups: [["Top 5", ["Surbhi Sahu – 97.6", "Tanishka Chakraborty – 97", "Rudraksh Khatwani – 96.6", "Karthik Jindal – 95.8", "Samriddhi Chobey – 95.6"]]] },
  { y: "2020-21", appeared: 87, pass: "97%", above90: "8 students scored above 90%", groups: [["Top 5", ["Spandini Tiwari – 96.4", "Vinayak Shrivastava – 93.6", "Sanjana Mandal – 93.2", "Aditya Sharma – 92.6", "Aditi Devangan – 92.2"]]] },
  { y: "2018-19", appeared: 74, pass: "98.6%", above90: "9 students scored above 90%", groups: [["Top 5", ["Dhananjay Tamrkar – 95.8", "Harsh Prithwani – 94.8", "Shrajoy Sur – 93.6", "Shreyansh Murathia – 93.6", "Manya Ahuja – 93.2"]]] },
  { y: "2017-18", appeared: 58, pass: "78%", above90: "1 student scored above 90%", groups: [["Top 3", ["Taquee Mahmood – 90.4", "Khushi Chandra – 87", "Chanchal Chaturvedi – 86.4"]]] },
];

const classXII: Year[] = [
  { y: "2025-26", appeared: 90, pass: "100%", groups: [["Science", ["Arush Tiwary – 94.2", "Harshita Verma – 93", "Arpit Agrawal – 90.8"]], ["Commerce", ["Girik Kochar – 96.4", "Khushi Begwani – 94.6", "Tanisha Kedia – 94.4"]], ["HSBA", ["Arundhati Raghuvanshi – 94.6", "Aayush Sagar – 91", "Shrestha Hotwani – 90"]], ["Humanities", ["Mannat Vidhani – 95.8", "Archit Upadhyay – 90.6", "Amisha Kumari Yadav – 89.4"]]] },
  { y: "2024-25", appeared: 64, pass: "100%", groups: [["Science", ["Divyansh Ojha – 91", "Aanya Sharma – 89.8", "Ayushi Singh – 87.8"]], ["Commerce", ["Karishma Agrawal – 96.4", "Gulab Ram Jhambia – 93.8", "Vanshika Vivek Bhutia – 90.4"]], ["HSBA", ["Preya Singh Rajput – 92.6", "Yash Makhija – 78", "Ayush Sahu – 77.8"]], ["Humanities", ["Prerna Singh Verma – 94.2", "Saachi Khandelwal – 87.6", "Nishika Saxena – 87"]]] },
  { y: "2023-24", appeared: 94, pass: "100%", groups: [["Science", ["Surbhi Sahu – 93.2", "Anshu Verma – 87.4", "Mahi Kosam – 86.2"]], ["Commerce", ["Prachi Agrawal – 96", "Soniya – 94.8", "Kritika Jiwnani – 93.6"]], ["HSBA", ["Sukhpreet Kaur Tuteja – 95.6", "Naitik Danodia – 91.4", "Dikshant Dubey – 90.4"]], ["Humanities", ["Pooja Shukla – 95.2", "Aditi Dewangan – 89.4", "Neha Verma – 89.4"]]] },
  { y: "2022-23", appeared: 66, pass: "95%", groups: [["Humanities", ["Kanishq Lakhani – 92.2", "Priya Kumari Shah – 88.2", "Harshvardhan Bhaskar – 84"]], ["Commerce", ["Ayush Tulsyan – 92", "Diksha Makhijani – 90.2", "Dhananjay Kochar – 89.2"]], ["Science", ["Sanskriti Likhmania – 92.2", "Sonakshi Singh – 89.6", "Mahek Batra – 89"]]] },
  { y: "2021-22", appeared: 93, pass: "98%", groups: [["Humanities", ["Ashvin Agrawal – 95.8", "Gaurav Chandrakar – 91.4", "Aishvarya Vishwakarma – 90.8", "Ashutosh Singh – 90.8"]], ["Commerce", ["Mayank Tayal – 91.2", "Prerna Singh – 91", "Khusi Vaghani – 88.2"]], ["Science", ["Akshat Mishra – 94.2", "Rishika Nirala – 83.8", "Aditi Devangan – 83.4"]]] },
  { y: "2020-21", appeared: 91, pass: "98.9%", groups: [["Humanities", ["Khushi Chandra – 96.4", "Arun Kumar Mahilane – 94", "Raghav Agrawal – 92.4"]], ["Commerce", ["Samarjeet Singh Khurana – 94.4", "Ayushi Chaurasia – 93.4", "Tushar Verma – 91.8"]], ["Science", ["Hitesh Verma – 94.2", "Prateek – 92.6", "Alisha Fazal – 91.8"]]] },
];

export function BoardResults({ cls }: { cls: "X" | "XII" }) {
  const data = cls === "X" ? classX : classXII;
  const [i, setI] = useState(0);
  const y = data[i]!;
  return (
    <section className="mt-6 rounded-[1.75rem] bg-primary p-6 text-primary-foreground md:p-9">
      <p className="font-display text-sm uppercase tracking-widest text-coral">CBSE Board Results</p>
      <h2 className="mt-1 font-display text-3xl md:text-4xl">Class {cls} results</h2>
      <p className="mt-2 max-w-3xl text-sm text-primary-foreground/85">
        {cls === "X"
          ? "Brighton's first batch sat the All India Secondary School Certificate Examination (Class X) in 2013-14."
          : "Brighton's first batch sat the All India Senior Secondary School Certificate Examination (Class XII) in 2015-16."}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {data.map((d, j) => (
          <button
            key={d.y}
            type="button"
            onClick={() => setI(j)}
            aria-pressed={i === j}
            className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
              i === j ? "bg-coral text-coral-foreground" : "bg-primary-foreground/10 hover:bg-primary-foreground/20"
            }`}
          >
            {d.y}
          </button>
        ))}
      </div>
      <div key={y.y} className="mt-5 grid animate-in fade-in gap-4 duration-300 md:grid-cols-[14rem_1fr]">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
          <div className="rounded-2xl bg-primary-foreground/10 p-4">
            <p className="text-xs uppercase tracking-wider text-primary-foreground/70">Appeared</p>
            <p className="font-display text-4xl">{y.appeared}</p>
          </div>
          <div className="rounded-2xl bg-coral p-4 text-coral-foreground">
            <p className="text-xs uppercase tracking-wider">Passed</p>
            <p className="font-display text-4xl">{y.pass}</p>
          </div>
          {y.above90 && <p className="col-span-2 text-sm text-primary-foreground/85 md:col-span-1">{y.above90}</p>}
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {y.groups.map(([g, names]) => (
            <div key={g} className="rounded-2xl bg-card p-4 text-foreground">
              <p className="flex items-center gap-2 font-display text-primary">
                <Award className="size-4 text-highlight" /> {g}
              </p>
              <ol className="mt-2 space-y-1 text-sm">
                {names.map((n) => (
                  <li key={n}>{n}%</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
