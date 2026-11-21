import Image from "next/image";

import { cn } from "@/lib/utils";
import { IMG, SectionHeading, padStart } from "./ui";

const VALUES = [
  { title: "We answer and call back", text: "Responsiveness is the reason we exist." },
  { title: "Plain-language answers", text: "You’ll understand the problem and your options." },
  { title: "Care for your property", text: "Your home or business is treated with respect." },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="tp-dark grid bg-steel-900 text-white lg:grid-cols-2">
      <div className={cn("px-4 py-16 sm:px-6 lg:py-20 lg:pr-16", padStart)}>
        <SectionHeading
          id="about-title"
          surface="dark"
          eyebrow="About Thermopair"
          title="Locally owned. Personally accountable."
          lead="Our founder, Wanderson, started Thermopair after dealing with a broken heating system — and a service company that never called back. So we built the opposite: a team that answers promptly, explains your options clearly and treats every home and business with care."
        />
        <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {VALUES.map(({ title, text }) => (
            <li key={title} className="border-t border-white/25 pt-4">
              <h3 className="font-heading text-[18px] font-bold text-white">{title}</h3>
              <p className="mt-1 font-body text-[15px] leading-[1.55] text-steel-300">{text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[520px]">
        <Image
          src={`${IMG}/hvac/service-van.jpg`}
          alt="Thermopair service van"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
