import Link from "next/link";
import { ArrowRight, Building2, Check, House } from "lucide-react";

import { cn } from "@/lib/utils";
import { container } from "./ui";

/**
 * Two-path chooser right after the hero: homeowners and businesses scan
 * for different things. Each card is one link to the relevant section.
 */
const PATHS = [
  {
    icon: House,
    title: "For your home",
    href: "/services/residential-hvac/",
    cta: "See home services",
    accent: "heat" as const,
    items: [
      "No heat or no cooling",
      "Heating and AC repair or replacement",
      "Seasonal maintenance",
      "Lower energy bills",
    ],
  },
  {
    icon: Building2,
    title: "For your business",
    href: "/services/commercial-hvac/",
    cta: "See commercial services",
    accent: "cold" as const,
    items: [
      "Walk-in coolers and freezers",
      "Reach-in units",
      "Draft beer refrigeration",
      "Commercial HVAC and maintenance",
    ],
  },
];

export default function PathChooser() {
  return (
    <section aria-labelledby="paths-title" className="bg-paper py-14 md:py-20">
      <div className={container}>
        <h2 id="paths-title" className="font-heading text-[clamp(1.5rem,2.6vw,2rem)] font-semibold text-ink">
          What do you need help with?
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {PATHS.map(({ icon: Icon, title, href, cta, accent, items }) => (
            <Link
              key={title}
              href={href}
              className={cn(
                "group flex flex-col rounded-lg border border-steel-200 bg-white p-6 transition-colors duration-200 hover:border-steel-400 md:p-8",
                "border-t-4",
                accent === "heat" ? "border-t-heat" : "border-t-cold",
              )}
            >
              <span className="flex items-center gap-3">
                <span
                  className={cn(
                    "inline-flex h-11 w-11 items-center justify-center rounded-md",
                    accent === "heat" ? "bg-heat-pale text-heat-text" : "bg-cold-pale text-cold",
                  )}
                >
                  <Icon aria-hidden="true" className="h-[22px] w-[22px]" />
                </span>
                <span className="font-heading text-[22px] font-semibold text-ink">{title}</span>
              </span>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 font-body text-[16px] leading-[1.45] text-steel-700">
                    <Check aria-hidden="true" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-steel-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <span
                className={cn(
                  "mt-6 inline-flex items-center gap-1.5 font-body text-[16px] font-semibold",
                  accent === "heat" ? "text-heat-text" : "text-cold",
                )}
              >
                {cta}
                <ArrowRight aria-hidden="true" className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
