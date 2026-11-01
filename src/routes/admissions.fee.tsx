import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionBanner } from "@/components/SectionBanner";
import { Td, Th } from "@/components/admissions/ui";

export const Route = createFileRoute("/admissions/fee")({
  head: () => ({
    meta: [
      { title: "Fee Structure 2026-27 | Brighton International School, Raipur" },
      {
        name: "description",
        content:
          "Class-wise school fee, one-time charges, bus conveyance fee, the four fee terms and the complete fee and refund policy at Brighton International School, Raipur.",
      },
      { property: "og:title", content: "Fee Structure & Refund Policy — Brighton International School" },
      {
        property: "og:description",
        content:
          "Transparent class-wise fees, transport charges and refund rules for Brighton International School, Raipur.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FeePage,
});

const feeRows = [
  { cls: "Nursery", fee: "64,980" },
  { cls: "KG I", fee: "66,940" },
  { cls: "KG II", fee: "69,760" },
  { cls: "Class I", fee: "70,240" },
  { cls: "Class II", fee: "71,980" },
  { cls: "Class III", fee: "73,980" },
  { cls: "Class IV", fee: "74,880" },
  { cls: "Class V", fee: "76,500" },
  { cls: "Class VI", fee: "81,820" },
  { cls: "Class VII", fee: "83,660" },
  { cls: "Class VIII", fee: "85,140" },
  { cls: "Class IX", fee: "89,980" },
  { cls: "Class X", fee: "91,860" },
  { cls: "Class XI", fee: "93,620" },
  { cls: "Class XII", fee: "96,220" },
];

const busRows = [
  { range: "0–2 km", fee: "18,500 / 20,000" },
  { range: "3–5 km", fee: "30,000 / 32,500" },
  { range: "6–10 km", fee: "34,000 / 36,500" },
  { range: "11–20 km", fee: "37,500 / 39,500" },
  { range: "20 km and above", fee: "40,000 / 41,000" },
];

const terms = [
  { n: "1", term: "Term I", duration: "April – June" },
  { n: "2", term: "Term II", duration: "July – September" },
  { n: "3", term: "Term III", duration: "October – December" },
  { n: "4", term: "Term IV", duration: "January – March" },
];

const refundRows = [
  {
    type: "Prospectus, Registration & Admission Fee",
    policy: "Not refunded under any circumstances.",
  },
  {
    type: "Tuition fee",
    policy:
      "If withdrawal is requested after a term has begun, the full fee of the ongoing term is charged. Fees for upcoming terms, if already paid, are refunded in full.",
  },
  {
    type: "Bus conveyance fee",
    policy:
      "If withdrawal is requested after a month has begun, the full month is charged. The rest of the session, if paid in advance, is refunded in full.",
  },
  { type: "Fee for craft and Olympiads", policy: "Non-refundable once paid." },
  {
    type: "Security deposit",
    policy:
      "Refunded after deductions for dues, fines, unreturned identity cards, library fines or damage to school property.",
  },
];

function FeePage() {
  return (
    <>
      <section>
        <SectionBanner
          title="Fee Structure 2026-27"
          subtitle="Class-wise school fee, with common charges and transport listed separately."
          tone="dark"
        />
        <div className="mt-3 grid gap-3 lg:grid-cols-[1fr_1fr]">
          <div className="card-shell overflow-hidden border border-border">
            <div className="p-7 pb-4">
              <h3 className="font-display text-xl">School fee by class</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-surface-2/60">
                  <tr>
                    <Th>Class</Th>
                    <Th>School fee (INR)</Th>
                  </tr>
                </thead>
                <tbody>
                  {feeRows.map((r) => (
                    <tr key={r.cls}>
                      <Td>{r.cls}</Td>
                      <Td>{r.fee}</Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-3">
            <div className="card-shell overflow-hidden border border-border">
              <div className="p-7 pb-4">
                <h3 className="font-display text-xl">One-time charges</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-surface-2/60">
                    <tr>
                      <Th>Details</Th>
                      <Th>Fee (INR)</Th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <Td>Admission fee*</Td>
                      <Td>35,000</Td>
                    </tr>
                    <tr>
                      <Td>Caution money (refundable)</Td>
                      <Td>10,000</Td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="px-7 py-4 text-xs text-muted-foreground">
                *Payable only once at the time of admission and non-refundable.
              </p>
            </div>

            <div className="card-shell overflow-hidden border border-border">
              <div className="p-7 pb-4">
                <h3 className="font-display text-xl">Bus conveyance fee</h3>
                <p className="mt-1 text-sm text-muted-foreground">Non-AC / AC, per session.</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-surface-2/60">
                    <tr>
                      <Th>Distance</Th>
                      <Th>Non-AC / AC</Th>
                    </tr>
                  </thead>
                  <tbody>
                    {busRows.map((r) => (
                      <tr key={r.range}>
                        <Td>{r.range}</Td>
                        <Td>{r.fee}</Td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 rounded-[1.75rem] bg-blush p-7">
          <h3 className="font-display text-xl text-primary">Good to know</h3>
          <ul className="mt-3 grid gap-2 text-sm md:grid-cols-2">
            {[
              "School fee can be paid annually, half-yearly or quarterly.",
              "Cash, cheque and online digital payments are accepted.",
              "Where a route offers only AC or only non-AC buses, that option is charged; alternatives cannot be offered.",
              "Fees do not include books, stationery or uniform.",
            ].map((t) => (
              <li key={t} className="rounded-2xl bg-card px-4 py-3">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-6">
        <SectionBanner
          title="Fee & Refund Policy"
          subtitle="A hassle-free, uniform and transparent process for every withdrawal request."
        />
        <div className="card-shell mt-3 border border-border p-7 md:p-9">
          <p className="text-sm text-muted-foreground">
            Parents who wish to cancel their ward's admission should submit a written application
            signed by both parents, or a formal email to the Principal at
            info@brightoninternational.in. The same rules apply to every request, with no deviation,
            and all requests are processed promptly in the interest of the student.
          </p>

          <h3 className="mt-7 font-display text-xl">The four fee terms</h3>
          <div className="mt-3 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full">
              <thead className="bg-surface-2/60">
                <tr>
                  <Th>S. No</Th>
                  <Th>Term</Th>
                  <Th>Duration</Th>
                </tr>
              </thead>
              <tbody>
                {terms.map((t) => (
                  <tr key={t.n}>
                    <Td>{t.n}</Td>
                    <Td>{t.term}</Td>
                    <Td>{t.duration}</Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-7 font-display text-xl">Refund by type of fee</h3>
          <div className="mt-3 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full">
              <thead className="bg-surface-2/60">
                <tr>
                  <Th>Type of fee</Th>
                  <Th>Policy</Th>
                </tr>
              </thead>
              <tbody>
                {refundRows.map((r) => (
                  <tr key={r.type}>
                    <Td>{r.type}</Td>
                    <Td>{r.policy}</Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-7 font-display text-xl">Other conditions</h3>
          <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
            {[
              "Written notice of withdrawal received on or before 31 March means 100% of the upcoming session's fee is refunded.",
              "Fee for the ongoing academic year is payable even if the student attended online, since the seat remains occupied. Attending even one day in April or October makes that term's fee payable.",
              "The School Leaving Certificate and caution money are refunded within 14 working days of the application or the last day attended, whichever is later.",
              "Refunds and the School Leaving Certificate are issued only once all dues are cleared; the UTR reference is shared with Administration after transfer.",
              "For foreign and NRI candidates, refunds follow RBI and foreign exchange regulations.",
              "Courts at Raipur, Chhattisgarh alone have jurisdiction over any dispute arising from this policy.",
              "The school reserves the right to amend these policies and procedures as necessary.",
            ].map((t) => (
              <li key={t} className="rounded-2xl bg-surface-2/60 px-4 py-3">
                {t}
              </li>
            ))}
          </ul>

          <Link
            to="/admissions/fee-payment"
            className="mt-6 inline-flex rounded-full bg-coral px-6 py-2.5 font-display text-coral-foreground transition-opacity hover:opacity-90"
          >
            Go to fee payment
          </Link>
        </div>
      </section>
    </>
  );
}
