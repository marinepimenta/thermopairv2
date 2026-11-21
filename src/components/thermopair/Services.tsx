import Image from "next/image";
import Link from "next/link";

import { SERVICES, SERVICE_BY_SLUG } from "@/lib/services";
import { ServiceGrid } from "./ServiceCard";
import { IMG, SectionHeading, btnPrimary, container, textLink } from "./ui";

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
    <section id="services" aria-labelledby="services-title" className="bg-paper py-16 md:py-24">
      <div className={container}>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <SectionHeading
              id="services-title"
              eyebrow="Services"
              title={<>Complete <span className="whitespace-nowrap">HVAC-R</span> service, from diagnosis to done</>}
              lead="One team for the systems that keep your home comfortable and your business running. Every job starts with a proper diagnosis, so the fix is the right one."
            />
            <Link href="/services/" className={`${textLink} mt-6 inline-block text-purple-deep`}>
              View all {SERVICES.length} services
            </Link>
            <div className="relative mt-8 hidden aspect-square overflow-hidden lg:block">
              <Image
                src={`${IMG}/hvac/technician-ceiling-install.jpg`}
                alt="Thermopair technician installing an HVAC unit above kitchen cabinets"
                fill
                sizes="(max-width: 1024px) 100vw, 32vw"
                className="object-cover"
              />
            </div>
          </div>

          <ServiceGrid compact services={FEATURED.map((slug) => SERVICE_BY_SLUG[slug])} className="self-start lg:grid-cols-2" />
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t-2 border-ink pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-[18px] text-steel-700">
            <span className="font-bold text-ink">Not sure what you need?</span> Describe the problem and we’ll take it from there.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/services/" className={`${textLink} inline-flex min-h-12 items-center px-2 text-ink`}>Browse all services</Link>
            <a href="#request-service" className={btnPrimary}>Request service</a>
          </div>
        </div>
      </div>
    </section>
  );
}
