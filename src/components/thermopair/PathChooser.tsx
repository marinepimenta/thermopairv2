import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { serviceHref } from "@/lib/services";
import { container, textLink } from "./ui";

/**
 * Two-path chooser right after the hero: homeowners and businesses scan
 * for different things. Every row is a link to the service that answers it,
 * so the question "What do you need help with?" always leads somewhere.
 */
const PATHS = [
  {
    title: "For your home",
    href: "/services/residential-hvac/",
    cta: "See home services",
    items: [
      { label: "No heat or no cooling", slug: "emergency-hvac" },
      { label: "Heating and AC repair or replacement", slug: "residential-hvac" },
      { label: "Seasonal maintenance", slug: "preventive-maintenance" },
      { label: "Lower energy bills", slug: "mass-save-rebate" },
    ],
  },
  {
    title: "For your business",
    href: "/services/commercial-hvac/",
    cta: "See commercial services",
    items: [
      { label: "Walk-in coolers and freezers", slug: "commercial-refrigeration" },
      { label: "Reach-in units", slug: "commercial-refrigeration" },
      { label: "Draft beer refrigeration", slug: "commercial-refrigeration" },
      { label: "Commercial HVAC and maintenance", slug: "commercial-hvac" },
    ],
  },
];

export default function PathChooser() {
  return (
    <section aria-labelledby="paths-title" className="bg-white py-14 md:py-20">
      <div className={container}>
        <h2 id="paths-title" className="font-heading text-[clamp(1.875rem,3.2vw,2.625rem)] font-medium leading-[1.12] text-ink">
          What do you need help with?
        </h2>
        <div className="mt-8 grid md:grid-cols-2 md:divide-x md:divide-steel-300">
          {PATHS.map(({ title, href, cta, items }, i) => (
            <div key={title} className={cn("border-t-2 border-ink py-8 md:border-t-0 md:py-2", i === 0 ? "md:pr-12" : "md:pl-12")}>
              <h3 className="font-heading text-[24px] font-bold text-ink">{title}</h3>
              <ul className="mt-5">
                {items.map((item) => (
                  <li key={item.label} className="border-t border-steel-200 last:border-b">
                    <Link
                      href={serviceHref(item.slug)}
                      className="group flex min-h-12 items-center justify-between gap-4 py-3 font-body text-[17px] text-steel-700 transition-colors duration-200 hover:text-ink"
                    >
                      <span className="underline-offset-4 group-hover:underline">{item.label}</span>
                      <ChevronRight
                        aria-hidden="true"
                        className="h-5 w-5 shrink-0 text-purple transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href={href} className={cn(textLink, "mt-6 inline-block text-purple-deep")}>
                {cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
