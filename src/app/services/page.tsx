import type { Metadata } from "next";
import { Phone } from "lucide-react";
import Breadcrumbs from "@/components/thermopair/Breadcrumbs";
import PageShell from "@/components/thermopair/PageShell";
import RequestForm from "@/components/thermopair/RequestForm";
import { ServiceGrid } from "@/components/thermopair/ServiceCard";
import { ClosingCta } from "@/components/thermopair/ServiceDetail";
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  SectionHeading,
  btnLight,
  btnOnDark,
  btnPrimary,
  container,
  padEnd,
  padStart,
} from "@/components/thermopair/ui";
import { CATEGORIES, servicesByCategory } from "@/lib/services";
import { cn } from "@/lib/utils";

// Was 202 characters and truncated; trimmed to ~155.
export const metadata: Metadata = {
  title: { absolute: "HVAC & Refrigeration Services in Worcester County, MA | Thermopair" },
  description:
    "Heat pumps, mini splits, ductwork, rooftop units, maintenance, 24/7 emergency service and commercial refrigeration across Worcester County, MA.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <section aria-labelledby="services-hub-title" className="tp-dark tp-grad-hero text-white">
        <div className={cn(padStart, padEnd, "pb-12 pt-8 md:pb-16 md:pt-10")}>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
          <p className="mb-3 mt-8 font-body text-[14px] font-semibold uppercase tracking-[0.08em] text-heat">
            HVAC-R services · Worcester County, MA
          </p>
          <h1
            id="services-hub-title"
            className="max-w-[22ch] font-heading text-[clamp(2.125rem,4.4vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.01em]"
          >
            Full-service HVAC and refrigeration for homes and businesses
          </h1>
          <p className="mt-5 max-w-[60ch] font-body text-[18px] leading-[1.65] text-steel-100">
            From a new heat pump to an emergency cooler repair, one team handles installation, service and maintenance —
            and explains the price before any work starts.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={PHONE_HREF} className={btnLight}>
              <Phone aria-hidden="true" className="h-[18px] w-[18px]" />
              Call <span className="tp-num">{PHONE_DISPLAY}</span>
            </a>
            <a href="#request-service" className={btnOnDark}>Request service</a>
          </div>
        </div>
      </section>

      {CATEGORIES.map((cat, i) => (
        <section
          key={cat.id}
          aria-labelledby={`cat-${cat.id}`}
          className={cn("py-14 md:py-20", i % 2 === 0 ? "bg-paper" : "bg-white")}
        >
          <div className={container}>
            <SectionHeading
              id={`cat-${cat.id}`}
              eyebrow={`${String(i + 1).padStart(2, "0")}`}
              title={cat.title}
              lead={cat.blurb}
            />
            <ServiceGrid services={servicesByCategory(cat.id)} className="mt-8" />
          </div>
        </section>
      ))}

      <section aria-labelledby="unsure-title" className="bg-white py-14 md:py-20">
        <div className={container}>
          <div className="flex flex-col gap-5 border-t-2 border-ink pt-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 id="unsure-title" className="font-heading text-[24px] font-bold text-ink">
                Not sure which service you need?
              </h2>
              <p className="mt-2 max-w-[56ch] font-body text-[17px] leading-[1.6] text-steel-600">
                Describe the problem and we’ll help you figure it out. A technician will tell you what we recommend and
                why.
              </p>
            </div>
            <a href={PHONE_HREF} className={cn(btnPrimary, "shrink-0")}>
              <Phone aria-hidden="true" className="h-[18px] w-[18px]" />
              Talk to a technician
            </a>
          </div>
        </div>
      </section>

      <ClosingCta title="Ready for reliable comfort?" />
      <RequestForm />
    </PageShell>
  );
}
