import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SERVICES, SERVICE_BY_SLUG } from "@/lib/services";
import { ServiceGrid } from "./ServiceCard";
import { SectionHeading, btnOnLight, btnPrimary, container } from "./ui";

/** Home-page services: the most requested, each linking to its own page. */
const FEATURED = [
  "residential-hvac",
  "commercial-hvac",
  "heat-pump-installation",
  "mini-split-installation",
  "preventive-maintenance",
  "emergency-hvac",
  "commercial-refrigeration",
  "mass-save-rebate",
];

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="border-t border-steel-200 bg-paper py-16 md:py-24">
      <div className={container}>
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="services-title"
            eyebrow="Services"
            title="Complete HVAC-R service, from diagnosis to done"
            lead="One team for the systems that keep your home comfortable and your business running. Every job starts with a proper diagnosis, so the fix is the right one."
          />
          <Link href="/services/" className="inline-flex min-h-11 shrink-0 items-center gap-1.5 font-body text-[16px] font-semibold text-heat-text underline-offset-4 hover:underline">
            View all {SERVICES.length} services
            <ArrowRight aria-hidden="true" className="h-[18px] w-[18px]" />
          </Link>
        </div>

        <ServiceGrid services={FEATURED.map((slug) => SERVICE_BY_SLUG[slug])} className="mt-10" />

        <div className="mt-12 flex flex-col gap-3 rounded-lg border border-steel-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
          <p className="font-body text-[17px] text-steel-700">
            <span className="font-semibold text-ink">Not sure what you need?</span> Describe the problem and we’ll take it from there.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/services/" className={btnOnLight}>Browse all services</Link>
            <a href="#request-service" className={btnPrimary}>Request service</a>
          </div>
        </div>
      </div>
    </section>
  );
}
