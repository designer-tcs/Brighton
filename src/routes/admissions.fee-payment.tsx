import { createFileRoute } from "@tanstack/react-router";
import { SectionBanner } from "@/components/SectionBanner";
import { FeePaymentPanel } from "@/components/admissions/FeePaymentPanel";

export const Route = createFileRoute("/admissions/fee-payment")({
  head: () => ({
    meta: [
      { title: "Fee Payment | Brighton International School, Raipur" },
      {
        name: "description",
        content:
          "Pay the Brighton International School fee online — accepted payment methods, refund handling, support contact and the terms that apply to every transaction.",
      },
      { property: "og:title", content: "Online Fee Payment — Brighton International School" },
      {
        property: "og:description",
        content: "Pay school fees online securely, with the full payment terms in plain language.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FeePaymentPage,
});

function FeePaymentPage() {
  return (
    <section>
      <SectionBanner
        title="Fee Payment"
        subtitle="Pay the school fee online, and read the terms that apply to every transaction."
      />
      <div className="mt-3">
        <FeePaymentPanel />
      </div>
    </section>
  );
}
