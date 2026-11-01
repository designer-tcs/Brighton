# Reorganise Curriculum, About Brighton and a new Infrastructure page

## Answers from Brighton's live site (Curriculum page)
- **Brighton Kindle** — for everyone: "financial literacy for seniors, ironing clothes for fifth graders, tying shoelaces for kindergarteners". Goes in the shared area.
- **Track at Brighton (TAB)** — for every student across all years. Shared area.
- **Google Classroom + MyClassBoard** — whole school. Shared area.
- **Maximum 30 students per class** — whole school. Shared area.
- **Class Event** — Nursery to Class V only. Added to both Pre-Primary and Primary.

## 1. Curriculum page — tab bar
```text
Pre-Primary | Primary | Middle | Secondary | Senior Secondary | Across Brighton | Robotics
```
- **Pre-Primary**: rename LKG/UKG to **Nursery, KG I, KG II** everywhere (text, FAQs, class dropdown in the form). Add a "Class Event" block.
- **Primary**: add the same "Class Event" block (Classes I–V).
- **Across Brighton** (new tab, for things common to every stage): Brighton Kindle, Track at Brighton (what it is, the quarterly strengths/weaknesses/goals notes, checked by counsellor, Academic Head and Principal, passed on each year), Max 30 students per class, Staying in touch through Google Classroom and MyClassBoard.
- **Robotics** (new tab): content from Brighton's Robotics page (award-winning robotics programme, Atal Tinkering Lab), in the same card style.

## 2. About Brighton — tab bar
```text
The School | Management | Board of Advisors | School Uniform
```
- Each becomes its own page with content taken from the matching page on Brighton's site (The School, Management, Board of Advisors, Uniform).
- Same sticky tab style as Admissions and Curriculum.

## 3. New Infrastructure page (new menu item)
- Added to the left menu after About Brighton, so the numbering shifts by one.
- Sections taken from Brighton's Infrastructure page: 8-acre campus, air-conditioned classrooms with interactive boards, Wi-Fi, computer lab, science labs, auditorium, sports facilities, canteen — plus **Library** (from Brighton's Library page: reading programme, fun library).
- Uses the existing photos as stand-ins until real ones are provided.

## Still waiting on the school
- Real photos for Robotics, Library, Infrastructure and Uniform.
- Anything on Brighton's pages that is only an image (e.g. uniform charts) will be summarised, and flagged if unreadable.

## Technical details
- `stages.ts`: new `classEvent` optional field on Stage; rename classes in pre-primary data.
- New routes: `curriculum.across-brighton.tsx`, `curriculum.robotics.tsx`; convert `about.tsx` to a layout with `about.index.tsx`, `about.management.tsx`, `about.board.tsx`, `about.uniform.tsx`; new `infrastructure.tsx`. Each gets its own head() metadata.
- Update tab arrays in `curriculum.tsx`, new about tab bar, `SideNav.tsx` menu list.
- Content scraped from brightoninternational.in pages at build time.
