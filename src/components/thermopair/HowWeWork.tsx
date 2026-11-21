import Image from "next/image";

import { cn } from "@/lib/utils";
import { IMG, SectionHeading, btnLight, container, padStart } from "./ui";

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
          <ol className="mt-12 grid gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <li key={step.title} className="border-t-2 border-ink pt-5">
                <span className="tp-num font-heading text-[15px] font-bold text-heat-text">
                  Step {i + 1}
                </span>
                <h3 className="mt-2 font-heading text-[20px] font-bold leading-[1.25] text-ink">{step.title}</h3>
                <p className="mt-2 font-body text-[16px] leading-[1.6] text-steel-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="maintenance-title" className="tp-dark grid bg-ink text-white lg:grid-cols-2">
        <div className={cn("tp-grad-warm px-4 py-16 sm:px-6 lg:py-20 lg:pr-16", padStart)}>
          <SectionHeading
            id="maintenance-title"
            surface="purple"
            eyebrow="Maintenance & efficiency"
            title="Prevent the breakdown instead of paying for it"
            lead="Regular maintenance keeps heating, cooling and refrigeration equipment running efficiently, extends its life and lowers the odds of a failure on the coldest night — or the busiest Friday."
          />
          <h3 className="mt-8 font-heading text-[19px] font-bold text-white">A maintenance visit includes</h3>
          <ul className="mt-3">
            {MAINTENANCE.map((item) => (
              <li key={item} className="border-t border-white/25 py-3 font-body text-[16px] leading-[1.5] text-purple-pale last:border-b">
                {item}
              </li>
            ))}
          </ul>
          <a href="#request-service" className={cn(btnLight, "mt-8")}>
            Ask about maintenance
          </a>
        </div>
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[560px]">
          <Image
            src={`${IMG}/hvac/technician-split-install.jpg`}
            alt="Thermopair technician servicing an indoor air conditioning unit"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>
    </>
  );
}
