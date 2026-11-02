import Image from "next/image";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { IMG, SectionHeading, btnOnLight, container } from "./ui";

const STEPS = [
  {
    title: "Tell us what’s happening",
    text: "Call or send a request. We answer, ask the right questions and schedule a visit.",
  },
  {
    title: "We diagnose the root cause",
    text: "A technician tests the system to find what’s actually wrong — not just the symptom.",
  },
  {
    title: "You approve the price",
    text: "We explain the fix in plain language and quote it before any work starts.",
  },
  {
    title: "We fix it and verify",
    text: "We repair, test performance and make sure it’s running right before we leave.",
  },
];

const MAINTENANCE = [
  "Clean coils and key components",
  "Check refrigerant charge and pressures",
  "Test electrical connections and controls",
  "Inspect airflow, filters and drains",
  "Findings and recommendations explained clearly",
];

export default function HowWeWork() {
  return (
    <>
      <section id="how-we-work" aria-labelledby="process-title" className="bg-white py-16 md:py-24">
        <div className={container}>
          <SectionHeading
            id="process-title"
            eyebrow="How we work"
            title="A clear process, with no surprises"
            lead="Whether it’s your living room or your kitchen line, every visit follows the same four steps."
          />
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <li key={step.title} className="border-t-2 border-steel-200 pt-6">
                <span className="tp-num font-heading text-[15px] font-semibold text-heat-text">
                  Step {i + 1}
                </span>
                <h3 className="mt-2 font-heading text-[19px] font-semibold leading-[1.3] text-ink">{step.title}</h3>
                <p className="mt-2 font-body text-[16px] leading-[1.6] text-steel-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="maintenance-title" className="border-t border-steel-200 bg-paper py-16 md:py-24">
        <div className={cn(container, "grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16")}>
          <div>
            <SectionHeading
              id="maintenance-title"
              eyebrow="Maintenance & efficiency"
              title="Prevent the breakdown instead of paying for it"
              lead="Regular maintenance keeps heating, cooling and refrigeration equipment running efficiently, extends its life and lowers the odds of a failure on the coldest night — or the busiest Friday."
            />
            <div className="mt-8 rounded-lg border border-steel-200 bg-white p-6">
              <h3 className="font-heading text-[18px] font-semibold text-ink">A maintenance visit includes</h3>
              <ul className="mt-4 grid gap-3">
                {MAINTENANCE.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 font-body text-[16px] leading-[1.5] text-steel-700">
                    <Check aria-hidden="true" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-ok" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <a href="#request-service" className={cn(btnOnLight, "mt-6")}>
              Ask about maintenance
            </a>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-steel-200 lg:aspect-[5/6]">
            <Image
              src={`${IMG}/hvac/technician-split-install.jpg`}
              alt="Thermopair technician servicing an indoor air conditioning unit"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
