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
  btnOnDark,
  btnPrimary,
  container,
} from "@/components/thermopair/ui";
import { CATEGORIES, servicesByCategory } from "@/lib/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "HVAC & Refrigeration Services | Thermopair HVAC-R",
  description:
    "Residential and commercial HVAC installation, heat pumps, mini splits, VRF/VRV, ventilation, ductwork, rooftop units, maintenance, emergency service and commercial refrigeration in Worcester County, MA.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <section aria-labelledby="services-hub-title" className="tp-dark bg-steel-900 text-white">
        <div className={cn(container, "pb-12 pt-8 md:pb-16 md:pt-10")}>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
          <p className="mb-3 mt-8 font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-heat">
            HVAC-R services · Worcester County, MA
          </p>
          <h1
            id="services-hub-title"
            className="max-w-[22ch] font-heading text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.02em]"
          >
            Full-service HVAC and refrigeration for homes and businesses
          </h1>
          <p className="mt-5 max-w-[60ch] font-body text-[18px] leading-[1.65] text-steel-300">
            From a new heat pump to an emergency cooler repair, one team handles installation, service and maintenance —
            and explains the price before any work starts.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#request-service" className={btnPrimary}>Request service</a>
            <a href={PHONE_HREF} className={btnOnDark}>
              <Phone aria-hidden="true" className="h-[18px] w-[18px]" />
              Call <span className="tp-num">{PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </section>

      {CATEGORIES.map((cat, i) => (
        <section
          key={cat.id}
          aria-labelledby={`cat-${cat.id}`}
          className={cn("py-14 md:py-20", i % 2 === 0 ? "bg-paper" : "border-y border-steel-200 bg-white")}
        >
          <div className={container}>
            <SectionHeading
              id={`cat-${cat.id}`}
              eyebrow={`${String(i + 1).padStart(2, "0")}`}
              tone={cat.id === "refrigeration" ? "cold" : "heat"}
              title={cat.title}
              lead={cat.blurb}
            />
            <ServiceGrid services={servicesByCategory(cat.id)} className="mt-8" />
          </div>
        </section>
      ))}

      <section aria-labelledby="unsure-title" className="bg-paper py-14 md:py-20">
        <div className={container}>
          <div className="flex flex-col gap-5 rounded-lg border border-steel-200 bg-white p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <h2 id="unsure-title" className="font-heading text-[22px] font-semibold text-ink">
                Not sure which service you need?
              </h2>
              <p className="mt-2 max-w-[56ch] font-body text-[16px] leading-[1.6] text-steel-600">
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
