import Image from "next/image";
import { MessageSquareText, PhoneCall, ShieldCheck } from "lucide-react";

import { cn } from "@/lib/utils";
import { IMG, SectionHeading, container } from "./ui";

const VALUES = [
  { icon: PhoneCall, title: "We answer and call back", text: "Responsiveness is the reason we exist." },
  { icon: MessageSquareText, title: "Plain-language answers", text: "You’ll understand the problem and your options." },
  { icon: ShieldCheck, title: "Care for your property", text: "Your home or business is treated with respect." },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="tp-dark bg-steel-900 py-16 text-white md:py-24">
      <div className={cn(container, "grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16")}>
        <div>
          <SectionHeading
            id="about-title"
            dark
            eyebrow="About Thermopair"
            title="Locally owned. Personally accountable."
            lead="Our founder, Wanderson, started Thermopair after dealing with a broken heating system — and a service company that never called back. So we built the opposite: a team that answers promptly, explains your options clearly and treats every home and business with care."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, text }) => (
              <li key={title}>
                <Icon aria-hidden="true" className="h-6 w-6 text-heat" />
                <h3 className="mt-3 font-heading text-[17px] font-semibold text-white">{title}</h3>
                <p className="mt-1 font-body text-[15px] leading-[1.55] text-steel-400">{text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
          <Image
            src={`${IMG}/hvac/service-van.jpg`}
            alt="Thermopair service van"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
