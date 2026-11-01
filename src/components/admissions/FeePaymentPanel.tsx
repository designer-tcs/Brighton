import { Banknote, CreditCard, Headset, RotateCcw } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const methods = [
  {
    icon: CreditCard,
    title: "Cards & net banking",
    body: "Debit and credit cards, net banking and other payment networks, processed through the Atom Technologies Limited payment gateway.",
  },
  {
    icon: Banknote,
    title: "At the school office",
    body: "Cash and cheque are accepted at the accounts counter during office hours.",
  },
  {
    icon: RotateCcw,
    title: "Refunds",
    body: "Any refund initiated is credited back to the same account or card the payment came from.",
  },
  {
    icon: Headset,
    title: "Trouble paying?",
    body: "Call +91 999 3466 111 or write to accounts@brightoninternational.in and the accounts team will help.",
  },
];

const legal = [
  {
    title: "Terms of use",
    body: "Using any current or future service offered on brightoninternational.in means you agree to abide by these terms and conditions, along with the guidelines applicable to that service. Please read them carefully before you pay.",
  },
  {
    title: "Fee amounts",
    body: "All fees posted online are subject to change without notice. The fee prevailing at the commencement of the session, as informed to the parent, applies. Posted fees do not include the convenience fee; any additional charges or taxes appear on the final payment page.",
  },
  {
    title: "Changes, cancellation & refund",
    body: "Changes and cancellations are not allowed once a payment has been made. Refunds, where applicable, follow the school's fee and refund policy above and are credited to the originating account.",
  },
  {
    title: "Electronic communication",
    body: "When you visit the website or email us, you are communicating with us electronically and consent to receive communication from us by email or through notices posted on the website.",
  },
  {
    title: "Website licence",
    body: "You get a limited licence to access and personally use the website. Reselling, reproducing, framing, data mining, using hidden metatags or any commercial use of the site or its content requires express written consent.",
  },
  {
    title: "Content you submit",
    body: "Any content you post must not be illegal, obscene, threatening, defamatory or infringing, and must not contain spam or malicious software. False email addresses and impersonation are not permitted; the school may remove or edit posted content.",
  },
];

export function FeePaymentPanel() {
  return (
    <div className="grid gap-3 lg:grid-cols-[1fr_1.1fr]">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-primary p-7 text-primary-foreground md:p-9">
        <p className="nav-index text-primary-foreground/70">Online</p>
        <h3 className="mt-1 font-display text-2xl md:text-3xl">Pay your ward's fee online</h3>
        <p className="mt-3 max-w-sm text-sm text-primary-foreground/85">
          Secure payments through the school's gateway, any day and any hour. Keep the student's name
          and class handy before you begin.
        </p>
        <a
          href="https://ssolive.myclassboard.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DX6TTZZ6K9NNUBAF5L0P7%26redirect_uri%3Dhttps%253A%252F%252Fbrightonraipur.myclassboard.com%252Fsso%252FCallback%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520offline_access"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex rounded-full bg-coral px-7 py-3 font-display text-lg text-coral-foreground transition-opacity hover:opacity-90"
        >
          Pay School Fee
        </a>
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {methods.map((m) => (
            <div key={m.title} className="rounded-2xl bg-primary-foreground/10 p-5">
              <m.icon className="size-5 text-highlight" />
              <h4 className="mt-2 font-display text-base">{m.title}</h4>
              <p className="mt-1 break-words text-sm text-primary-foreground/80 [overflow-wrap:anywhere]">{m.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card-shell border border-border p-4 md:p-6">
        <h3 className="px-3 pt-2 font-display text-xl">Terms & conditions for online payment</h3>
        <Accordion type="single" collapsible className="mt-2 w-full">
          {legal.map((l, i) => (
            <AccordionItem key={l.title} value={`pay-${i}`}>
              <AccordionTrigger className="text-left text-base">{l.title}</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">{l.body}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
