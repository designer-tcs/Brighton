import { createFileRoute } from "@tanstack/react-router";
import { SectionBanner } from "@/components/SectionBanner";
import { CampusTourBooking } from "@/components/admissions/CampusTourBooking";
import campus from "@/assets/school/campus-approach.jpg";

export const Route = createFileRoute("/admissions/campus-tour")({
  head: () => ({
    meta: [
      { title: "Campus Tour | Brighton International School, Raipur" },
      {
        name: "description",
        content:
          "Campus visit at Brighton International School, Raipur: 3:30 pm to 4:30 pm, Monday to Saturday, and 10:00 am to 12:00 pm on Sunday.",
      },
      { property: "og:title", content: "Book a Campus Tour — Brighton International School" },
      {
        property: "og:description",
        content:
          "Campus visit, 3:30 pm to 4:30 pm Monday to Saturday, and 10:00 am to 12:00 pm on Sunday.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CampusTourPage,
});

function CampusTourPage() {
  return (
    <section>
      <SectionBanner
        title="Campus Tour"
        subtitle="Monday to Saturday, 3:30 pm to 4:30 pm. Sunday, 10:00 am to 12:00 pm."
        tone="dark"
      />
      <div className="mt-3">
        <CampusTourBooking />
      </div>
      <div className="mt-4 grid gap-3 lg:grid-cols-[1.6fr_1fr]">
        <iframe
          title="Map to Brighton International School, Nardaha, Raipur"
          src="https://www.google.com/maps?q=Brighton+International+School+Nardaha+Raipur&output=embed"
          className="h-80 w-full rounded-[1.75rem] border-0 md:h-[26rem]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="flex flex-col rounded-[1.75rem] bg-primary p-7 text-primary-foreground">
          <p className="nav-index text-primary-foreground/70">Find us</p>
          <h3 className="mt-1 font-display text-2xl">Getting to campus</h3>
          <p className="mt-3 text-sm text-primary-foreground/85">
            12th KM, Zero Point, Near Vidhan Sabha, Off Baloda Bazar Road, Village: Nardaha, Raipur, 493111
          </p>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Brighton+International+School+Nardaha+Raipur"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex w-fit rounded-full bg-coral px-6 py-3 font-display text-coral-foreground"
          >
            Get directions
          </a>
          <img src={campus} alt="The Brighton school building from the front drive" loading="lazy" width={1600} height={1067} className="mt-6 h-auto w-full rounded-2xl" />
        </div>
      </div>
    </section>
  );
}
