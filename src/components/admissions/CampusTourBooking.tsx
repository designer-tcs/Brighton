import { Clock, Mail, MapPin, ParkingCircle, Phone, Timer } from "lucide-react";

const classOptions = [
  "Nursery",
  "KG I",
  "KG II",
  "Class I",
  "Class II",
  "Class III",
  "Class IV",
  "Class V",
  "Class VI",
  "Class VII",
  "Class VIII",
  "Class IX",
  "Class X",
  "Class XI",
  "Class XII",
];

const inputClass = "w-full rounded-xl border border-input bg-surface px-4 py-3 text-sm";

const facts = [
  {
    icon: Clock,
    title: "Days & timings",
    body: "Monday to Saturday, 3:30 pm to 4:30 pm. Sunday, 10:00 am to 12:00 pm.",
  },
  {
    icon: Timer,
    title: "How long is the tour?",
    body: "About 15 to 20 minutes with an admission counsellor, longer if you have questions.",
  },
  {
    icon: ParkingCircle,
    title: "Parking",
    body: "Yes — the campus has a large parking area right at the entrance.",
  },
  {
    icon: MapPin,
    title: "Where we are",
    body: "Nardaha, Baloda Bazar Road, Raipur, Chhattisgarh — an 8-acre campus.",
  },
];

export function CampusTourBooking() {
  return (
    <div className="grid gap-3 lg:grid-cols-[1.05fr_1fr]">
      <div className="card-shell border border-border p-7 md:p-9">
        <p className="text-sm text-muted-foreground">
          Campus tours are designed for prospective students and parents. Meet an admissions
          counsellor to understand our pedagogy, the curricular and co-curricular programmes and the
          fee structure.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {facts.map((f) => (
            <div key={f.title} className="rounded-2xl bg-surface-2/70 p-5">
              <f.icon className="size-5 text-primary" />
              <h4 className="mt-2 font-display text-base">{f.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-2xl bg-blush p-5">
          <p className="nav-index text-primary">Contact person</p>
          <h4 className="mt-1 font-display text-lg text-primary">Admission Counsellor</h4>
          <div className="mt-2 grid gap-1.5 text-sm">
            <a href="mailto:info@brightoninternational.in" className="flex items-center gap-2">
              <Mail className="size-4 text-primary" /> info@brightoninternational.in
            </a>
            <a href="tel:+919993466111" className="flex items-center gap-2">
              <Phone className="size-4 text-primary" /> +91 999 3466 111
            </a>
          </div>
        </div>
      </div>

      <form className="card-shell border border-border p-7" onSubmit={(e) => e.preventDefault()}>
        <h3 className="font-display text-xl">Make an appointment</h3>
        <div className="mt-4 grid gap-4">
          <label className="text-sm">
            Parent name
            <input className={`${inputClass} mt-1`} />
          </label>
          <label className="text-sm">
            Mobile number
            <input type="tel" className={`${inputClass} mt-1`} />
          </label>
          <label className="text-sm">
            Email
            <input type="email" className={`${inputClass} mt-1`} />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm">
              Preferred date
              <input type="date" className={`${inputClass} mt-1`} />
            </label>
            <label className="text-sm">
              Preferred time
              <select className={`${inputClass} mt-1`} defaultValue="">
                <option value="" disabled>
                  Select time
                </option>
                <option>Weekday · 3:30 pm</option>
                <option>Weekday · 4:00 pm</option>
                <option>Sunday · 10:00 am</option>
                <option>Sunday · 11:00 am</option>
              </select>
            </label>
          </div>
          <label className="text-sm">
            Class of interest
            <select className={`${inputClass} mt-1`} defaultValue="">
              <option value="" disabled>
                Please choose an option
              </option>
              {classOptions.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </label>
        </div>
        <button
          type="submit"
          className="mt-5 rounded-full bg-coral px-6 py-2.5 font-display text-coral-foreground transition-opacity hover:opacity-90"
        >
          Request appointment
        </button>
        <p className="mt-3 text-xs text-muted-foreground">
          This form is a placeholder — call +91 999 3466 111 to fix a slot today.
        </p>
      </form>
    </div>
  );
}
