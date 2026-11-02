import Image from "next/image";
import { BadgeDollarSign, Clock, MapPin, Phone, Snowflake } from "lucide-react";

import { cn } from "@/lib/utils";
import { GOOGLE_REVIEWS_URL, GoogleGlyph, Stars } from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/SocialProof";
import { IMG, PHONE_DISPLAY, PHONE_HREF, btnOnDark, btnPrimary, container } from "./ui";

/**
 * Hero: says who we are, who we serve (homes AND businesses) and gives two
 * clear paths — request service or call now. Flat dark steel, no gradients.
 * The trust strip underneath only states things the current site already
 * claims (24/7 emergency service, price before work, local, refrigeration).
 */
const TRUST = [
  { icon: Clock, title: "24/7 emergency service", text: "Heating, cooling and refrigeration failures don’t wait." },
  { icon: BadgeDollarSign, title: "Price before work starts", text: "You approve the quote before we begin." },
  { icon: MapPin, title: "Locally owned", text: "Based in Dracut, Massachusetts." },
  { icon: Snowflake, title: "Commercial refrigeration", text: "Walk-ins, reach-ins and draft beer systems." },
];

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="tp-dark bg-steel-900 text-white">
      <div className={cn(container, "grid gap-10 pb-12 pt-10 md:pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14 lg:pb-16 lg:pt-16")}>
        <div>
          <p className="mb-4 font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-heat">
            HVAC-R service · Homes &amp; businesses
          </p>
          <h1
            id="hero-title"
            className="max-w-[18ch] font-heading text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-white"
          >
            Heating, cooling and refrigeration service you can count on
          </h1>
          <p className="mt-5 max-w-[58ch] font-body text-[18px] leading-[1.65] text-steel-300">
            Thermopair diagnoses, repairs and maintains HVAC and refrigeration
            systems across Central Massachusetts — from a furnace that quits overnight to
            a walk-in cooler that stops holding temperature. We find the real
            cause, explain it in plain language and tell you the price before we
            start.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#request-service" className={btnPrimary}>
              Request service
            </a>
            <a href={PHONE_HREF} className={btnOnDark}>
              <Phone aria-hidden="true" className="h-[18px] w-[18px]" />
              Call <span className="tp-num">{PHONE_DISPLAY}</span>
            </a>
          </div>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2.5 rounded-md py-1 font-body text-[15px] text-steel-300 transition-colors duration-200 hover:text-white"
          >
            <Stars size={16} className="text-heat" />
            <GoogleGlyph size={16} />
            <span>
              Rated 5 stars by customers on Google
              <span className="sr-only"> (opens in a new tab)</span>
            </span>
          </a>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 lg:aspect-[5/6]">
            <Image
              src={`${IMG}/hvac/technician-diagnostics.jpg`}
              alt="Thermopair technician testing an HVAC control panel with a multimeter"
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 1024px) 100vw, 44vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <ul className={cn(container, "grid grid-cols-1 gap-x-8 gap-y-5 py-7 sm:grid-cols-2 lg:grid-cols-4")}>
          {TRUST.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-3">
              <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/5 text-heat">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-body text-[16px] font-semibold text-white">{title}</span>
                <span className="block font-body text-[15px] leading-[1.5] text-steel-400">{text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
