import Link from "next/link";

import { TOWNS, areaHref } from "@/lib/areas";
import { cn } from "@/lib/utils";
import { PHONE_DISPLAY, PHONE_HREF, SectionHeading, container } from "./ui";

export default function ServiceArea() {
  return (
    <section id="service-area" aria-labelledby="area-title" className="bg-white py-16 md:py-24">
      <div className={cn(container, "grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16")}>
        <div>
          <SectionHeading
            id="area-title"
            eyebrow="Service area"
            title="Serving Worcester County and nearby towns"
            lead="We repair and maintain heating, cooling and refrigeration systems for homes and businesses across Central Massachusetts."
          />
          <p className="mt-6 max-w-[50ch] font-body text-[17px] leading-[1.6] text-steel-700">
            Don’t see your town? Call{" "}
            <a href={PHONE_HREF} className="tp-num font-semibold text-ink underline underline-offset-4">
              {PHONE_DISPLAY}
            </a>{" "}
            — we’ll tell you right away if we can help.
          </p>
        </div>

        <div>
          <h3 className="border-b-2 border-ink pb-3 font-heading text-[19px] font-bold text-ink">
            Towns we serve
          </h3>
          <ul className="grid grid-cols-2 gap-x-8 sm:grid-cols-3">
            {TOWNS.map((town) => (
              <li key={town.slug} className="border-b border-steel-200">
                <Link
                  href={areaHref(town.slug)}
                  className="block py-3 font-body text-[17px] text-steel-700 underline-offset-4 hover:text-ink hover:underline"
                >
                  {town.name}
                  <span className="sr-only"> — HVAC and refrigeration service</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 font-body text-[16px] text-steel-600">
            …and throughout Worcester County.{" "}
            <Link href="/service-area/" className="font-semibold text-purple-deep underline underline-offset-4">
              See all service areas
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
