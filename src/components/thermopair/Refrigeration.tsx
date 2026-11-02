import Image from "next/image";
import Link from "next/link";
import { CircleAlert, Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import { IMG, PHONE_DISPLAY, PHONE_HREF, SectionHeading, btnOnLight, btnPrimary, container } from "./ui";

/**
 * Commercial refrigeration — the differentiator. Cold accent, symptom list
 * in plain language, and an urgent call path first.
 */
const SYMPTOMS = [
  "Walk-in or reach-in not holding temperature",
  "Ice building up on the evaporator coil",
  "Compressor running nonstop or cycling on and off",
  "Water pooling inside or under the unit",
  "Draft beer pouring warm or foamy",
  "Unusual noises, alarms or warm product",
];

export default function Refrigeration() {
  return (
    <section id="refrigeration" aria-labelledby="refrigeration-title" className="bg-cold-pale py-16 md:py-24">
      <div className={cn(container, "grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16")}>
        <div className="order-2 lg:order-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-steel-200">
            <Image
              src={`${IMG}/hvac/technician-plant.jpg`}
              alt="Thermopair technician inspecting commercial rooftop refrigeration and HVAC equipment"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            id="refrigeration-title"
            tone="cold"
            eyebrow="Commercial refrigeration"
            title="When your cooler goes down, your business can’t wait"
            lead="Restaurants, bars and food-service businesses depend on refrigeration every hour they’re open. We repair and maintain walk-in coolers, freezers, reach-in units and draft beer systems — and we understand what’s at stake when product is on the line."
          />

          <h3 className="mt-8 font-heading text-[18px] font-semibold text-ink">Call us if you notice:</h3>
          <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {SYMPTOMS.map((s) => (
              <li key={s} className="flex items-start gap-2.5 font-body text-[16px] leading-[1.5] text-steel-700">
                <CircleAlert aria-hidden="true" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-cold" />
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={PHONE_HREF} className={btnPrimary}>
              <Phone aria-hidden="true" className="h-[18px] w-[18px]" />
              Call for emergency service
            </a>
            <Link href="/services/commercial-refrigeration/" className={btnOnLight}>
              Refrigeration services
            </Link>
          </div>
          <p className="mt-3 font-body text-[15px] text-steel-600">
            24/7 emergency line: <a href={PHONE_HREF} className="tp-num font-semibold text-ink underline underline-offset-4">{PHONE_DISPLAY}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
