import type { Metadata } from "next";
import Link from "next/link";

import LegalDoc, { type LegalSection } from "@/components/thermopair/LegalDoc";
import PageShell from "@/components/thermopair/PageShell";
import { EMAIL, PHONE_DISPLAY, PHONE_HREF } from "@/components/thermopair/ui";

/**
 * NOT LEGAL ADVICE — this must be reviewed by a lawyer before launch.
 *
 * It is written to describe what this site actually does today, which is the
 * only way a privacy policy is worth anything:
 *   - no analytics, no advertising pixels, no tracking scripts (verified:
 *     nothing in src/ references gtag, GA, Meta pixel, Hotjar or Clarity);
 *   - no cookies set by us — fonts are self-hosted by next/font at build
 *     time, so there is no runtime request to Google Fonts;
 *   - the one third-party embed is the Google Maps iframe in the footer and
 *     on /service-area, which can set its own cookies;
 *   - the service request form currently has no backend (see RequestForm),
 *     so this describes the intended live behaviour.
 *
 * IF ANY OF THAT CHANGES — adding Google Analytics, a Meta pixel, a chat
 * widget or a CRM — sections "Cookies and similar technologies" and "Who we
 * share information with" must be updated in the same change.
 */

const UPDATED = "21 November 2026";

const SECTIONS: LegalSection[] = [
  {
    id: "who-we-are",
    heading: "Who we are",
    body: (
      <>
        <p>
          Thermopair HVAC-R (“Thermopair”, “we”, “us”, “our”) provides heating, cooling and commercial refrigeration
          services to homes and businesses in Worcester County and nearby towns in Massachusetts.
        </p>
        <p>
          This policy explains what personal information we collect through this website and when you contact us, how we
          use it, who we share it with and what choices you have. It applies to this website and to the service
          enquiries that come through it.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    heading: "Information we collect",
    body: (
      <>
        <p>
          <strong>Information you give us.</strong> When you send a service request through this site, we ask for:
        </p>
        <ul>
          <li>your name;</li>
          <li>your phone number;</li>
          <li>your email address (optional);</li>
          <li>your town or ZIP code;</li>
          <li>whether the property is a home or a business;</li>
          <li>the service you need and how soon you need it;</li>
          <li>any details you choose to add about the problem.</li>
        </ul>
        <p>
          If you call or email us instead, we collect whatever you tell us — typically the same details, plus the
          service address and anything relevant about your equipment.
        </p>
        <p>
          <strong>Information from doing the work.</strong> If you become a customer, we keep records relating to the
          job: the service address, the equipment we worked on, what we diagnosed and did, quotes, invoices and payment
          records.
        </p>
        <p>
          <strong>Technical information.</strong> Like most websites, the servers that host this site record standard
          request data such as IP address, browser type, the pages requested and the date and time. We use this for
          security and to keep the site running, not to build a profile of you.
        </p>
        <p>
          We do not ask for and do not want sensitive personal information — government identifiers, financial account
          numbers, or health information. Please do not send these through the form.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-it",
    heading: "How we use your information",
    body: (
      <>
        <p>We use personal information to:</p>
        <ul>
          <li>respond to your enquiry and confirm an appointment;</li>
          <li>diagnose the problem, quote the work and carry it out;</li>
          <li>invoice you and keep accounting and tax records;</li>
          <li>contact you about work in progress, follow-up or warranty matters;</li>
          <li>keep service history so a future technician knows what was done before;</li>
          <li>keep the website secure and working;</li>
          <li>meet our legal and regulatory obligations.</li>
        </ul>
        <p>
          We do not sell your personal information. We do not share it with third parties for their own marketing, and
          we do not use it for automated decision-making or profiling.
        </p>
      </>
    ),
  },
  {
    id: "calls-and-texts",
    heading: "Phone calls and text messages",
    body: (
      <>
        <p>
          When you submit a service request you are asked to agree that we may contact you by text message and email
          about that request. We use this to confirm appointments, tell you when a technician is on the way and follow
          up on the job.
        </p>
        <p>
          <strong>Message frequency varies and message and data rates may apply.</strong> You can stop text messages at
          any time by replying STOP to any message from us, or by telling us by phone or email. Stopping texts will not
          stop us contacting you by phone about work you have asked us to do.
        </p>
        <p>
          If we ever want to send you marketing or promotional messages rather than messages about your job, we will ask
          for your agreement to that separately, and you will be able to withdraw it at any time.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    heading: "Cookies and similar technologies",
    body: (
      <>
        <p>
          <strong>This website does not set cookies of its own, and we do not run analytics or advertising trackers on
          it.</strong> There is no Google Analytics, no advertising pixel and no session cookie.
        </p>
        <p>
          The one exception is the Google Maps that appears in our footer and on our service-area page. That map is
          loaded from Google and Google may set its own cookies or similar identifiers in your browser when it loads.
          That processing is governed by Google’s privacy policy, not ours. If you would rather it did not load, most
          browsers and content blockers can block third-party frames.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    heading: "Who we share information with",
    body: (
      <>
        <p>We share personal information only where we need to:</p>
        <ul>
          <li>
            <strong>Service providers</strong> who run things on our behalf — website hosting, email, phone and text
            messaging, invoicing and accounting. They may only use the information to provide that service to us.
          </li>
          <li>
            <strong>Google</strong>, where the embedded map loads in your browser, as described above.
          </li>
          <li>
            <strong>Suppliers and manufacturers</strong>, where it is needed to order a part or process a warranty claim
            for your equipment.
          </li>
          <li>
            <strong>Professional advisers</strong> such as our accountant or lawyer, where needed.
          </li>
          <li>
            <strong>Authorities</strong>, where we are legally required to disclose information, or to establish or
            defend legal claims.
          </li>
        </ul>
        <p>
          If our business is ever sold or merged, customer records may transfer as part of it. We would tell you if that
          changed how your information is handled.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    heading: "How long we keep it",
    body: (
      <>
        <p>
          We keep enquiries that do not become jobs only as long as we need them to follow up, and then delete them.
        </p>
        <p>
          For customers, we keep service and equipment records for as long as you are a customer and afterwards for as
          long as they are useful for servicing the same equipment or needed for warranty purposes. Invoices and
          accounting records are kept for the period required by tax and company law.
        </p>
      </>
    ),
  },
  {
    id: "security",
    heading: "How we protect your information",
    body: (
      <>
        <p>
          This site is served over an encrypted connection (HTTPS). We limit access to customer records to the people
          who need it to do their job, and we use reputable providers for the systems that hold them.
        </p>
        <p>
          No method of transmission or storage is completely secure, and we cannot guarantee absolute security. If a
          breach occurs that affects your personal information, we will notify you and the appropriate authorities as
          required by Massachusetts law.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    heading: "Your choices and your rights",
    body: (
      <>
        <p>You can, at any time:</p>
        <ul>
          <li>ask us what personal information we hold about you and get a copy of it;</li>
          <li>ask us to correct anything that is wrong or out of date;</li>
          <li>ask us to delete information we no longer need to keep;</li>
          <li>stop text messages by replying STOP, or unsubscribe from any email we send;</li>
          <li>ask us not to contact you again.</li>
        </ul>
        <p>
          To make any of these requests, contact us using the details below. We may need to confirm who you are before
          we act, and we will respond as quickly as we reasonably can. We will not treat you differently for exercising
          any of these rights.
        </p>
        <p>
          Depending on where you live, you may have additional rights under your state’s privacy law. Tell us which law
          you are relying on and we will deal with your request under it.
        </p>
      </>
    ),
  },
  {
    id: "children",
    heading: "Children’s privacy",
    body: (
      <p>
        This website is intended for adults arranging work on a property. We do not knowingly collect personal
        information from children under 13. If you believe a child has given us personal information, contact us and we
        will delete it.
      </p>
    ),
  },
  {
    id: "other-sites",
    heading: "Links to other sites",
    body: (
      <p>
        Our site links to places we do not control, including our Google Business Profile, our Instagram page and
        Google Maps. This policy does not cover them. We suggest reading the privacy policy of any site you visit from
        here.
      </p>
    ),
  },
  {
    id: "changes",
    heading: "Changes to this policy",
    body: (
      <p>
        We may update this policy as our business or the law changes. The date at the top shows when it was last
        revised, and the current version is always the one on this page. If a change materially affects how we handle
        your information, we will make that clear on the site.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "Contact us",
    body: (
      <>
        <p>For any question about this policy or about your personal information:</p>
        <ul>
          <li>
            Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </li>
          <li>
            Call <a href={PHONE_HREF} className="tp-num">{PHONE_DISPLAY}</a>, Monday to Friday, 8 AM – 5 PM
          </li>
        </ul>
        <p>
          Thermopair HVAC-R, Dracut, Massachusetts. You can also{" "}
          <Link href="/#request-service">send us a message</Link> through the site.
        </p>
      </>
    ),
  },
];

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Thermopair HVAC-R collects, uses, shares and protects personal information from this website and from customers in Worcester County, Massachusetts.",
  alternates: { canonical: "/privacy-policy/" },
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <LegalDoc
        title="Privacy Policy"
        lead="What we collect, why we collect it, who sees it and how to tell us to stop. Written in plain language, and kept to what this site and our service actually do."
        updated={UPDATED}
        crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        sections={SECTIONS}
      />
    </PageShell>
  );
}
