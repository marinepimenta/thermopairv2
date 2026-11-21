import Link from "next/link";
import { Phone } from "lucide-react";

import { TOWN_BY_SLUG, areaHref, type Town } from "@/lib/areas";
import { SERVICE_BY_SLUG, type Faq } from "@/lib/services";
import { cn } from "@/lib/utils";
import Breadcrumbs from "./Breadcrumbs";
import { FaqList } from "./Faq";
import { ClosingCta } from "./ServiceDetail";
import { ServiceGrid } from "./ServiceCard";
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  SectionHeading,
  btnLight,
  btnOnDark,
  btnOnLight,
  container,
  padEnd,
  padStart,
} from "./ui";

/**
 * Per-town page. Everything town-specific comes from src/lib/areas.ts; the
 * shared parts (what we do, how it works, CTA) are written once here so the
 * nine pages stay consistent and are edited in one place.
 */
/**
 * The town FAQ. Exported so the page can hand the same questions to the
 * FAQPage structured data — the markup and the visible text must match, or
 * the rich result is invalid.
 */
export function areaFaqs(town: Town): Faq[] {
  return [
    {
      q: `Do you charge extra to come out to ${town.name}?`,
      a: `${town.name} is inside our regular service area, so there is no out-of-area surcharge. We give you the price before any work starts, and you approve it first.`,
    },
    {
      q: `Can you handle an emergency in ${town.name} at night or on a weekend?`,
      a: `Yes. We run a 24/7 line for heating, cooling and refrigeration failures. Call ${PHONE_DISPLAY} and tell us what has happened — we will be straight with you about when we can get there.`,
    },
    {
      q: `Do you work on commercial equipment in ${town.name}, or only homes?`,
      a: "Both. Alongside residential heating and cooling we service commercial HVAC and refrigeration — walk-in coolers, reach-ins, rooftop units and draft beer systems.",
    },
  ];
}

export default function AreaDetail({ town }: { town: Town }) {
  const services = town.featured.map((slug) => SERVICE_BY_SLUG[slug]).filter(Boolean);
  const nearby = town.nearby.map((slug) => TOWN_BY_SLUG[slug]).filter(Boolean);

  const facts = [
    { label: "Town", value: `${town.name}, Massachusetts` },
    { label: "County", value: town.county },
    { label: "Who we serve", value: "Homes and businesses" },
    { label: "Emergencies", value: "Call 24/7" },
    { label: "Pricing", value: "You approve the price before work starts" },
  ];

  const faqs = areaFaqs(town);

  return (
    <>
      <section aria-labelledby="area-title" className="tp-dark bg-ink text-white">
        <div className={cn("tp-grad-hero", padStart, padEnd, "py-10 md:py-14 lg:py-16")}>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Service area", href: "/service-area/" },
              { label: town.name },
            ]}
          />
          <p className="mb-3 mt-8 font-body text-[14px] font-semibold uppercase tracking-[0.08em] text-heat">
            {town.county}
          </p>
          <h1
            id="area-title"
            className="max-w-[20ch] font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.01em]"
          >
            HVAC &amp; refrigeration service in {town.name}, MA
          </h1>
          <p className="mt-5 max-w-[56ch] font-body text-[18px] leading-[1.65] text-steel-100">{town.short}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={PHONE_HREF} className={btnLight}>
              <Phone aria-hidden="true" className="h-[18px] w-[18px]" />
              Call <span className="tp-num">{PHONE_DISPLAY}</span>
            </a>
            <a href="#request-service" className={btnOnDark}>Request service</a>
          </div>
        </div>
      </section>

      <section aria-labelledby="area-overview" className="bg-white py-14 md:py-20">
        <div className={cn(container, "grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16")}>
          <div>
            <h2 id="area-overview" className="font-heading text-[clamp(1.5rem,2.8vw,2.125rem)] font-bold leading-[1.2] text-ink">
              What we do in {town.name}
            </h2>
            <div className="mt-5 grid max-w-[68ch] gap-4 font-body text-[17px] leading-[1.7] text-steel-700 md:text-[18px]">
              {town.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <aside aria-label="At a glance" className="self-start">
            <h3 className="border-b-2 border-ink pb-3 font-heading text-[19px] font-bold text-ink">At a glance</h3>
            <dl>
              {facts.map(({ label, value }) => (
                <div key={label} className="border-b border-steel-300 py-4">
                  <dt className="font-body text-[14px] text-steel-600">{label}</dt>
                  <dd className="font-body text-[16px] font-semibold leading-[1.4] text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section aria-labelledby="area-services" className="bg-paper py-14 md:py-20">
        <div className={container}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              id="area-services"
              eyebrow="Services"
              title={`What we're called for most in ${town.name}`}
            />
            <Link href="/services/" className={cn(btnOnLight, "min-h-11 shrink-0 px-5 text-[15px]")}>
              View all services
            </Link>
          </div>
          <ServiceGrid services={services} className="mt-8" />
        </div>
      </section>

      <section aria-labelledby="area-faq" className="bg-white py-14 md:py-20">
        <div className={cn(container, "grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16")}>
          <SectionHeading id="area-faq" eyebrow="FAQ" title={`Working with us in ${town.name}`} />
          <FaqList items={faqs} />
        </div>
      </section>

      <section aria-labelledby="area-nearby" className="bg-paper py-14 md:py-20">
        <div className={container}>
          <SectionHeading
            id="area-nearby"
            eyebrow="Nearby"
            title="We also serve these towns"
            lead={`If you're close to ${town.name} but not in it, we most likely still cover you — and if we don't, we'll say so on the call.`}
          />
          <ul className="mt-8 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {nearby.map((t) => (
              <li key={t.slug}>
                <Link href={areaHref(t.slug)} className="group block border-t-2 border-ink py-5">
                  <h3 className="font-heading text-[20px] font-bold leading-[1.3] text-ink group-hover:underline group-hover:underline-offset-4">
                    {t.name}
                  </h3>
                  <p className="mt-1.5 font-body text-[16px] leading-[1.55] text-steel-600">{t.short}</p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-body text-[16px] text-steel-600">
            <Link href="/service-area/" className="font-semibold text-purple-deep underline underline-offset-4">
              See every town we serve
            </Link>
          </p>
        </div>
      </section>

      <ClosingCta title={`Need an HVAC or refrigeration technician in ${town.name}?`} />
    </>
  );
}
