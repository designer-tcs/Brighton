import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Brighton International School, Raipur" },
      {
        name: "description",
        content:
          "Call +91 999 34 66 111 or visit Brighton International School at 12th KM Zero Point, Off Baloda Bazar Road, Nardaha, Raipur, Chhattisgarh 493111.",
      },
      { property: "og:title", content: "Contact Brighton International School, Raipur" },
      {
        property: "og:description",
        content: "Phone, email and campus address for Brighton International School, Raipur.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact Us"
        title="Come and see the campus"
        intro="We welcome parents on weekdays between 9 am and 3 pm. Call ahead so a coordinator can walk you around."
      />

      <section className="mt-6 grid gap-3 md:grid-cols-3">
        <article className="card-shell p-7">
          <MapPin className="size-5 text-primary" />
          <h2 className="mt-3 font-display text-xl">Campus</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            12th KM, Zero Point, Near Vidhan Sabha, Off Baloda Bazar Road, Village Nardaha, Raipur,
            Chhattisgarh 493111
          </p>
        </article>
        <article className="card-shell p-7">
          <Phone className="size-5 text-primary" />
          <h2 className="mt-3 font-display text-xl">Phone</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Admissions: +91 999 34 66 111
            <br />
            Landline: +91 97525 97535
            <br />
            Manager: +91 94 255 08894
          </p>
        </article>
        <article className="card-shell p-7">
          <Mail className="size-5 text-primary" />
          <h2 className="mt-3 font-display text-xl">Email</h2>
          <p className="mt-2 text-sm text-muted-foreground">info@brightoninternational.in</p>
        </article>
      </section>

      <section className="card-shell mt-6 p-8">
        <h2 className="font-display text-2xl">Send us a message</h2>
        <form
          className="mt-6 grid gap-4 sm:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label className="text-sm">
            Your name
            <input
              required
              className="mt-1 w-full rounded-xl border border-input bg-surface px-4 py-3"
            />
          </label>
          <label className="text-sm">
            Phone or email
            <input
              required
              className="mt-1 w-full rounded-xl border border-input bg-surface px-4 py-3"
            />
          </label>
          <label className="text-sm sm:col-span-2">
            I'm getting in touch about
            <select className="mt-1 w-full rounded-xl border border-input bg-surface px-4 py-3">
              <option>Admissions</option>
              <option>Alumni Connect</option>
              <option>Franchise @ Brighton</option>
              <option>Brighton Lecture Series</option>
              <option>Something else</option>
            </select>
          </label>
          <label className="text-sm sm:col-span-2">
            Message
            <textarea
              rows={4}
              className="mt-1 w-full rounded-xl border border-input bg-surface px-4 py-3"
            />
          </label>
          <button
            type="submit"
            className="w-fit rounded-full bg-primary px-7 py-3 font-display text-lg text-primary-foreground sm:col-span-2"
          >
            Send message
          </button>
        </form>
        <p className="mt-3 text-xs text-muted-foreground">
          The form does not deliver mail yet — please phone the school office meanwhile.
        </p>
      </section>
    </SiteLayout>
  );
}
