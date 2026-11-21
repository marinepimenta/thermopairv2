import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import { IMG, PHONE_DISPLAY, PHONE_HREF, SectionHeading, btnLight, btnOnDark, padEnd } from "./ui";

/**
 * Commercial refrigeration — the differentiator. Full-bleed photo beside a
 * solid dark panel, symptom list in plain language, urgent call path first.
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
    <section id="refrigeration" aria-labelledby="refrigeration-title" className="tp-dark grid bg-steel-900 text-white lg:grid-cols-2">
      <div className="relative order-2 aspect-[4/3] lg:order-1 lg:aspect-auto lg:min-h-[600px]">
        <Image
          src={`${IMG}/hvac/technician-plant.jpg`}
          alt="Thermopair technician inspecting commercial rooftop refrigeration and HVAC equipment"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div className={cn("tp-grad-cool order-1 px-4 py-16 sm:px-6 lg:order-2 lg:py-20 lg:pl-16", padEnd)}>
        <SectionHeading
          id="refrigeration-title"
          surface="dark"
          showEyebrow
          eyebrow="Commercial refrigeration"
          title="When your cooler goes down, your business can’t wait"
          lead="Restaurants, bars and food-service businesses depend on refrigeration every hour they’re open. We repair and maintain walk-in coolers, freezers, reach-in units and draft beer systems — and we understand what’s at stake when product is on the line."
        />

        <h3 className="mt-8 font-heading text-[19px] font-bold text-white">Call us if you notice:</h3>
        <ul className="mt-3">
          {SYMPTOMS.map((s) => (
            <li key={s} className="border-t border-white/15 py-3 font-body text-[16px] leading-[1.5] text-steel-300 last:border-b">
              {s}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={PHONE_HREF} className={btnLight}>
            <Phone aria-hidden="true" className="h-[18px] w-[18px]" />
            Call for emergency service
          </a>
          <Link href="/services/commercial-refrigeration/" className={btnOnDark}>
            Refrigeration services
          </Link>
        </div>
        <p className="mt-4 font-body text-[15px] text-steel-300">
          24/7 emergency line: <a href={PHONE_HREF} className="tp-num font-semibold text-white underline underline-offset-4">{PHONE_DISPLAY}</a>
        </p>
      </div>
    </section>
  );
}
