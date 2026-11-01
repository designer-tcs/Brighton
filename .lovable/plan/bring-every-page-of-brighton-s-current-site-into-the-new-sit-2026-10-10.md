# Bring every page of Brighton's current site into the new site

I read all 87 pages of brightoninternational.in (55 pages + 32 posts) and pulled out every YouTube video (25 in total). The plan below gives each one a sensible home. No content is made up, and nothing on their site is left out.

## 1. Menu order (as Abhinay wants)

```text
00 Home · 01 About Brighton · 02 Admissions · 03 Curriculum · 04 Infrastructure · 05 Events · 06 Contact Us · 07 Blogs
```

## 2. Where each Brighton page goes

| Brighton page | Goes to | Status |
| --- | --- | --- |
| Home highlights (NEP, No. 1 school, TAB, library, robotics…) | Home | check and fill any gaps |
| The School, About Us | About › The School | done |
| 15 Years Celebration | About › The School, as a "15 years" chapter in the timeline | **new** |
| Management | About › Management | done |
| School Management Committee | About › Management, as a section below | **new** |
| Board of Advisors | About › Board | done |
| School Uniform | About › Uniform | done |
| Mandatory Public Disclosure | About › Disclosure | done |
| POSH committee | About › Disclosure, as a section | **new** |
| Careers (Jobs@Brighton) | About › new "Work at Brighton" tab | **new** |
| Admission 2027-28, Class XI, BEST results | Admissions | done |
| Fee, Campus Tour, Fee Payment, Media, Code of Conduct | Admissions tabs | done |
| Parents' Review (13 videos) | Admissions › new "Parents Speak" tab | **new** |
| Beginnings + 14 FAQ pages + Lunch/Tiffin policy + Book list | Admissions › new "Beginnings" tab: a guide for new parents with all FAQs grouped (Academics, School life, Communication, Rules) | **new** |
| Curriculum, Robotics, Library | Curriculum / Infrastructure | done |
| Board Results (X & XII) | Curriculum › Secondary (Class X) and Senior Secondary (Class XII) | **new** |
| Google Classroom | Curriculum › Across Brighton, expanded | partial |
| Brighton Cricket Academy + Summer Sports Camp | Curriculum › new "Sports" tab | **new** |
| Infrastructure, Gallery photos | Infrastructure | done |
| Brighton Lecture Series (+31 speaker posts) | Events | done |
| Mindspark (inter-school festival) | Events, as its own section | **new** |
| Rays magazine | Blogs | done |
| Brighton Dialogues (monthly parenting articles, Hindi and English) | Blogs, next to Rays | **new** |
| Contact, Franchise, Alumni Connect | Contact Us; Franchise and Alumni become enquiry options | **new** |
| Privacy Policy | A footer link to its own page | **new** |
| Bubbles Preschool | Link from Curriculum › Pre-Primary | check |

The pages "abhiney", "7642-2" and "ankita" are empty or test pages, so they are skipped.

## 3. Where each video goes

No separate video gallery. Each video sits next to what it shows.

| Video | Placement |
| --- | --- |
| Brighton Introduction | Home › "Inside Brighton" (replaces the placeholder video) |
| Parents' feedback | Home, as a short "What parents say" strip linking to Parents Speak |
| Why Parents Choose Brighton | Admissions › Admission 2027-28 |
| 13 parent reviews | Admissions › Parents Speak |
| Independence Week | About › The School, beside "how we celebrate" |
| Health Week | About › The School, same section |
| Career Fair 2025 | Curriculum › Senior Secondary (careers) |
| Mindspark 2025, Mindspark 2024-25 | Events › Mindspark |
| Graduation Day 2024-25 | Events |
| Sparkles '26, Sparkles 2023 (Shloka Gayan, Eid Sufi) | Events › Sparkles (annual function) |
| Youth Parliament 2022-23 | Events |

Videos show a thumbnail and play only when tapped, so pages stay fast.

## 4. Abhinay's meeting points

His practices (own answers, no cursive, sellable craft, themed attendance, Partners in Progress Meet, Independence and Health Weeks) go in only after he approves the text draft.

## Technical notes

- Reorder `navItems` in `SideNav.tsx`.
- Add a shared `YouTubeCard` (click-to-load thumbnail) reused everywhere.
- New routes: `admissions.parents-speak`, `admissions.beginnings`, `about.careers`, `curriculum.sports`, `privacy`; extend the tab arrays and give each new route its own head().
- Content is taken word for word from the scraped pages; anything that exists on the old site only as an image is flagged instead of guessed.
