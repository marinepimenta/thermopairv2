import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";
import { PHONE_DISPLAY, PHONE_HREF, SectionHeading, container } from "./ui";

/**
 * Native <details>/<summary>: keyboard and screen-reader support for free,
 * works without JS, and every answer is in the DOM for search engines.
 */
const FAQS = [
  {
    q: "Do you offer emergency service?",
    a: "Yes. Heating, cooling and refrigeration failures don’t wait for business hours, so neither do we. Call us any time — we’ll talk through what’s happening and get a technician out as quickly as we can.",
  },
  {
    q: "Do you repair commercial walk-in coolers and freezers?",
    a: "Yes. We diagnose and repair walk-in coolers, freezers and reach-in units for restaurants, bars and other food-service businesses. If a unit isn’t holding temperature, call right away — the sooner it’s checked, the less product you put at risk.",
  },
  {
    q: "Can you fix a draft beer system that pours warm or foamy?",
    a: "Yes. Warm or foamy beer usually comes down to temperature, gas pressure or the lines themselves. We test each one, find the cause and fix it.",
  },
  {
    q: "How often should my system be serviced?",
    a: "Most heating and cooling systems do best with a checkup once a year, ideally before the season they work hardest. Commercial refrigeration often benefits from more frequent visits because it runs nonstop. Regular service catches small issues early and keeps equipment running efficiently.",
  },
  {
    q: "What does preventive maintenance include?",
    a: "We clean components, check refrigerant and airflow, test electrical connections and controls, and replace filters where needed. It costs less than emergency repairs, helps equipment last longer and keeps energy bills predictable.",
  },
  {
    q: "How do I know if I should repair or replace my system?",
    a: "Common signs are an older system with more frequent, more expensive repairs, rising energy bills, or rooms that never reach the right temperature. We’ll take an honest look and tell you plainly whether repair or replacement makes more sense for your budget.",
  },
  {
    q: "How much will it cost?",
    a: "It depends on the equipment, the problem and the work involved, so we don’t guess over the phone. We diagnose first, explain your options and give you the price before any work starts.",
  },
  {
    q: "Can you help make my system more efficient?",
    a: "Yes. We tune airflow, refrigerant charge and controls, and recommend upgrades only when they make sense for your space, your usage and your budget.",
  },
];

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-white py-16 md:py-24">
      <div className={cn(container, "grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16")}>
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="faq-title"
            eyebrow="FAQ"
            title="Common questions"
            lead={
              <>
                Still unsure? Call{" "}
                <a href={PHONE_HREF} className="tp-num font-semibold text-ink underline underline-offset-4">
                  {PHONE_DISPLAY}
                </a>{" "}
                and talk to a technician.
              </>
            }
          />
        </div>

        <div className="border-t border-steel-200">
          {FAQS.map((item) => (
            <details key={item.q} className="group border-b border-steel-200">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                <span className="font-heading text-[18px] font-semibold leading-[1.4] text-ink">{item.q}</span>
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-steel-300 text-steel-700 transition-colors duration-200 group-open:border-heat group-open:bg-heat group-open:text-ink">
                  <Plus aria-hidden="true" className="h-[18px] w-[18px] transition-transform duration-200 group-open:rotate-45" />
                </span>
              </summary>
              <p className="max-w-[68ch] pb-6 font-body text-[16px] leading-[1.7] text-steel-700 md:text-[17px]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
