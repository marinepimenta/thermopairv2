"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "How often should I service my heating system?",
    a: "Most heating systems do best with a checkup once a year, ideally before the cold months start. Regular service catches small issues early, keeps your system running efficiently, and helps you avoid an unexpected breakdown on the coldest night.",
  },
  {
    q: "How do I know when it's time to replace my furnace?",
    a: "A few signs tell you it's time: your furnace is older than 15 years, repairs are getting more frequent and costly, your energy bills keep climbing, or some rooms never quite warm up. If you're noticing more than one of these, we'll come take an honest look and tell you plainly whether repair or replacement makes more sense for your home and budget.",
  },
  {
    q: "When is the best time of year to install an AC system?",
    a: "Spring and early fall are ideal, since demand is lower and we have more flexibility to schedule your installation before the weather turns. Waiting until the middle of summer often means longer waits during our busiest season. Installing ahead of time means your system is tested, running smoothly, and ready before you actually need it.",
  },
  {
    q: "What is preventive HVAC maintenance?",
    a: "Preventive maintenance means we check your heating and cooling system on a regular schedule instead of waiting for something to break. That includes cleaning components, checking refrigerant and airflow, testing electrical connections, and replacing filters. It costs less than emergency repairs, helps your system last longer, keeps energy bills predictable, and lowers the odds of it failing when you're depending on it most, like during a Massachusetts winter.",
  },
  {
    q: "What is the difference between residential and commercial HVAC?",
    a: "Residential systems are sized and designed to heat and cool a single home comfortably. Commercial systems serve larger, busier spaces like restaurants, shops, and offices, often need more zones, and have to keep running reliably through the business day.",
  },
  {
    q: "Why is my heating system making strange noises?",
    a: "Banging, rattling, or squealing usually points to something specific: a loose part, worn belt, dirty burner, or airflow problem. It's rarely something to ignore, since small issues left alone tend to turn into bigger repairs. If your system starts sounding off, give us a call and we'll find out exactly what's going on.",
  },
  {
    q: "How much does a new heating or cooling system cost?",
    a: "Cost depends on the size of your home or business, the type of system you choose, how much ductwork is involved, and the level of efficiency you want. Every property is a little different, so we don't like to guess over the phone. Reach out and we'll come take a look, walk you through your options, and give you a free, straightforward quote.",
  },
  {
    q: "Who offers reliable heating and cooling service near me in Massachusetts?",
    a: "Thermopair provides residential and commercial heating and cooling service across Massachusetts. Our founder, Wanderson, started the company after dealing with a broken heating system and service that never called back, so we focus on answering promptly, explaining your options clearly, and treating your home or business with care. Reach out and we'll take it from there.",
  },
  {
    q: "Do you offer emergency service when a system fails?",
    a: "Yes. A heating or cooling failure doesn't wait for business hours, so neither do we. Call us and we'll get back to you quickly, talk through what's happening, and get someone out to your home or business as fast as we can to get things running again.",
  },
  {
    q: "Can you help me choose a more energy-efficient system?",
    a: "Yes. We'll look at your home or business and recommend a system that fits your space, your usage, and your budget, so you spend less to stay comfortable.",
  },
];

function FaqItem({
  index,
  q,
  a,
  isOpen,
  onToggle,
}: {
  index: number;
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `faq-panel-${index}`;
  const triggerId = `faq-trigger-${index}`;

  return (
    <div className="border-b border-black/8">
      <button
        id={triggerId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className={cn(
          "flex w-full cursor-pointer items-center justify-between gap-4 py-7 text-left transition-colors",
        )}
      >
        <span
          className={cn(
            "font-heading text-[clamp(1.05rem,1.5vw,1.25rem)] font-medium leading-[1.35] text-thermo-ink transition-colors hover:text-thermo-orange",
            isOpen && "text-thermo-orange"
          )}
        >
          {q}
        </span>
        <span
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 transition-colors",
            isOpen && "border-thermo-orange bg-thermo-orange"
          )}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className={cn(
              "shrink-0 transition-transform duration-300",
              isOpen && "rotate-45"
            )}
          >
            <path
              d="M8 1V15M1 8H15"
              stroke={isOpen ? "#ffffff" : "#FF6512"}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        className="grid transition-all duration-300"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div
          id={panelId}
          role="region"
          aria-labelledby={triggerId}
          className="overflow-hidden"
        >
          <p className="font-body text-[16px] md:text-[17px] leading-[1.7] text-thermo-graphite max-w-[68ch] pb-8">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col px-5 md:px-8 lg:flex-row lg:items-start lg:gap-[60px]">
        <div
          className="reveal mb-8 lg:mb-0 lg:w-[376px] lg:shrink-0 lg:sticky lg:top-32 lg:self-start"
          style={{ "--i": 0 } as React.CSSProperties}
        >
          <h2 className="font-heading font-medium text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.06] text-balance max-w-[16ch] text-thermo-ink">
            Frequently Asked Questions
          </h2>
        </div>
        <div
          className="reveal lg:flex-1"
          style={{ "--i": 1 } as React.CSSProperties}
        >
          {FAQS.map((faq, i) => (
            <FaqItem
              key={faq.q}
              index={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
