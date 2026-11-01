import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";
import { meta } from "@/components/TabNav";

export const Route = createFileRoute("/privacy")({
  head: () => meta("Privacy Policy", "How Brighton International School, Raipur collects, uses and protects personal information on its website."),
  component: Privacy,
});

// From brightoninternational.in/privacy-policy
const sections: { h: string; p: string[] }[] = [
 {
  "h": "",
  "p": [
   "This Privacy Policy applies to the website www.brightoninternational.in and other websites associated with such URL (collectively the “Website”) operated by Brighton International School. By using the Website, you consent to the practices described herein. We may update this Privacy Policy from time to time to reflect Schools and its users feedback. You should periodically review this Privacy Policy to stay informed of our practices. Your continued use of the Website following any changes to this Privacy Policy constitutes your acceptance of those changes."
  ]
 },
 {
  "h": "Collection of your Personal Information",
  "p": [
   "Brighton International School may collect through some portions of the Website personal identifiable information, such as your name, address, telephone number, and email address (“Personal Information”). We may also collect anonymous demographic and usage pattern information which is not unique to you, such as your geographic area, age, gender, preferences, interests, favorites, log-in frequency, purchase history, and usage history. This demographic and usage pattern information is not considered Personal Information except when it is used in conjunction with other information that personally identifies you.",
   "When you access or use the Website and any features contained therein, we also automatically collect technical information about your computer hardware and software. This information can include your IP address, browser type, domain names, access times, and referring web site addresses, etc. This technical information is not considered Personal Information except when it is used in conjunction with other information that personally identifies you.",
   "We may aggregate your demographic and/or technical information to help us understand our users’ trends and needs, and to improve the quality of our services. Such aggregated data will remove personally-identifying information and will not be considered Personal Information.",
   "Please keep in mind that any information you post on or send through the Website’s discussion forums, chat rooms, or messaging functions is publicly available and not confidential. If you disclose your Personal Information or other personally sensitive data through such channels, it may be collected and used by others, and Brighton International School or the society running the school shall not be liable for any resulting claims, losses, or damages.",
   "Please also note that when you visit third-party websites linked to or from the Website, any information you disclose on those third-party websites is subject to their privacy policies and practices. Brighton International School shall not be responsible for the practices of any third-party websites. You should carefully review each third-party website’s privacy policy."
  ]
 },
 {
  "h": "Use of your Personal Information",
  "p": [
   "We use your Personal Information to: (a) operate the Website and provide the services we offer; (b) deliver the services you request; (c) provide technical support; (d) verify any online payment, telephone payment, and pre-paid card transactions, which are solely processed through third-party service providers with their own privacy policies for which we are not responsible; (e) investigate alleged fraud, infringement, or other misconduct; (f) send you newsletters; and (g) inform you about other products, services, events, and promotions available from Brighton International School or its affiliates. We may also use your Personal Information to contact you via surveys or other research regarding your opinion of any current and potential services.",
   "We may share Personal Information with our service providers who need access to such information in order to complete the work they have been engaged to do. In some cases, such service providers may directly collect Personal Information from you on our behalf. Although we require such service providers to safeguard any Personal Information received from us or collected on our behalf, we are not responsible or liable in any way for the acts or failure to act by any such service providers.",
   "If you opt-in to receive newsletters, announcements, or advertisements of any kind from our business partners, we may share your Personal Information with such third parties, so that they can directly contact you regarding such offers. You may opt-out of any marketing offers from us or our business partners by informing us during your account sign-up process or through communications to us via email at info@brightoninternational.in. Your opt-out does not apply to communications from Brighton International School regarding any changes or updates to your account, or the non-marketing use of your Personal Information as described elsewhere in this Privacy Policy.",
   "We may disclose your Personal Information without notice if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on us; (b) protect and defend the rights or property of Brighton International School and (c) act under exigent circumstances to protect the personal safety of users of the Website or the public."
  ]
 },
 {
  "h": "Use of Cookies",
  "p": [
   "The Website uses “cookies” to save you time and personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you. A cookie tells the web server that you have returned to a specific page and helps the web server to recall your customized features. Information transmitted through cookies is not considered Personal Information unless it contains information that personally identifies you.",
   "You have the ability to accept or decline cookies; please refer to your web browser’s instructions. However, if you choose to decline cookies, you may not be able to experience certain interactive features of the Website.",
   "We may use third parties to better understand your user preferences and deliver targeted advertisements to you. These third parties may also place cookies on your computer. This policy does not apply to, and Brighton International School is not responsible for, cookies placed or data collected by such third parties."
  ]
 },
 {
  "h": "Monitoring",
  "p": [
   "We may, but are not obligated to, monitor and retain any and all data you transmit through our servers, including without limitation communications sent through or posted on the Website’s discussion forums, chat rooms, and messaging functions, whether or not marked “private” by you. You acknowledge and agree that you have no expectation of privacy with respect to any such data transmitted, and you consent to any monitoring we may conduct."
  ]
 },
 {
  "h": "Security of your Personal Information",
  "p": [
   "We use commercially reasonable efforts to secure your Personal Information from unauthorized access, use, or disclosure. We secure the Personal Information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We also use industry-standard encryption, such as the Secure Socket Layer (SSL) protocol, to protect certain kinds of information transmitted through the Website, such as your account password. Unfortunately, there are many factors beyond our control that could result in disclosure of Personal Information or any other information that you provide to us, and no data transmission over the Internet can be guaranteed to be 100% secure. As a result, we cannot ensure, and we disclaim any warranties or representations relating to, the security of any information you transmit to us, and you do so at your own risk."
  ]
 },
 {
  "h": "Updating your Personal Information",
  "p": [
   "You may review, correct, update, or delete your Personal Information maintained by us. Please provide us with sufficient proof of your identity and appropriate documentation of corrections to be made. You can contact us at: info@brightoninternational.in",
   "Please note that certain Personal Information, such as your date of birth or age, cannot be deleted from a user account unless you cancel your account. We also reserve the right to retain your Personal Information after account cancellation if such information is necessary to resolve any disputes or to comply with legal requirements."
  ]
 },
 {
  "h": "Contact Information",
  "p": [
   "Please contact us at email address: info@brightoninternational.in, If you have any questions or comments regarding this Privacy Policy."
  ]
 }
];

function Privacy() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Privacy" title="Privacy Policy" intro="How we handle information shared through this website." />
      <article className="card-shell mt-6 space-y-6 p-8 md:p-12">
        {sections.map((s, i) => (
          <section key={i}>
            {s.h && <h2 className="font-display text-xl text-primary">{s.h}</h2>}
            {s.p.map((p) => (
              <p key={p.slice(0, 40)} className="mt-2 text-sm leading-relaxed text-muted-foreground">{p}</p>
            ))}
          </section>
        ))}
      </article>
    </SiteLayout>
  );
}
