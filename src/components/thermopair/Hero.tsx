import Image from "next/image";
import { ArrowUpRight, Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import { GOOGLE_REVIEWS_URL, GoogleGlyph, Stars } from "./SocialProof";
import { IMG, PHONE_DISPLAY, PHONE_HREF, btnLight, btnOnDark, container, padEnd, padStart } from "./ui";

/**
 * Hero: brand gradient (purple and orange glow over Brand Black) beside a
 * full-bleed photograph. Says who we are,
 * who we serve (homes AND businesses) and gives two clear paths — request
 * service or call now. The trust strip underneath only states things the
 * current site already claims.
 */
const TRUST: { title: string; text: string; href?: string }[] = [
  { title: "24/7 emergency service", text: "Heating, cooling and refrigeration failures don’t wait." },
  { title: "Price before work starts", text: "You approve the quote before we begin." },
  { title: "Locally owned", text: "Based in Dracut, Massachusetts." },
  { title: "Commercial refrigeration", text: "Walk-ins, reach-ins and draft beer systems.", href: "#refrigeration" },
];

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title">
      <div className="tp-dark grid bg-ink text-white lg:grid-cols-2">
        <div className={cn("tp-grad-hero", padStart, padEnd, "py-12 md:py-16 lg:py-20 lg:pr-16")}>
          <p className="mb-4 font-body text-[14px] font-semibold uppercase tracking-[0.08em] text-heat">
            HVAC-R service · Homes &amp; businesses
          </p>
          <h1
            id="hero-title"
            className="max-w-[18ch] font-heading text-[clamp(2.25rem,4.6vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.01em]"
          >
            Heating, cooling and refrigeration service you can count on
          </h1>
          <p className="mt-5 max-w-[56ch] font-body text-[18px] leading-[1.65] text-steel-100">
            Thermopair diagnoses, repairs and maintains HVAC and refrigeration
            systems across Central Massachusetts — from a furnace that quits overnight to
            a walk-in cooler that stops holding temperature. We find the real
            cause, explain it in plain language and tell you the price before we
            start.
          </p>

          {/* Emergencies first: the call is the primary action, labeled. */}
          <p className="mt-8 font-body text-[15px] font-semibold text-heat">24/7 emergency service</p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <a href={PHONE_HREF} className={btnLight}>
              <Phone aria-hidden="true" className="h-[18px] w-[18px]" />
              Call <span className="tp-num">{PHONE_DISPLAY}</span>
            </a>
            <a href="#request-service" className={btnOnDark}>
              Request service
            </a>
          </div>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2.5 py-1 font-body text-[15px] text-steel-100 underline-offset-4 hover:underline"
          >
            <Stars size={16} className="text-heat" />
            <GoogleGlyph size={16} />
            <span>
              Rated 5 stars by customers on Google
              <span className="sr-only"> (opens in a new tab)</span>
            </span>
            <ArrowUpRight aria-hidden="true" className="h-4 w-4 opacity-70" />
          </a>
        </div>

        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[560px]">
          <Image
            src={`${IMG}/hvac/technician-diagnostics.jpg`}
            alt="Thermopair technician testing an HVAC control panel with a multimeter"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="tp-dark border-t border-white/10 bg-steel-900 text-white">
        <ul className={cn(container, "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4")}>
          {TRUST.map(({ title, text, href }) => (
            <li key={title} className="border-b border-white/15 py-7 sm:pr-8 lg:border-b-0 lg:border-r lg:px-8 lg:py-8 lg:first:pl-0 lg:last:border-r-0">
              {href ? (
                <a href={href} className="block font-heading text-[19px] font-bold leading-[1.3] text-white underline decoration-heat decoration-2 underline-offset-[6px] hover:decoration-white">
                  {title}
                </a>
              ) : (
                <span className="block font-heading text-[19px] font-bold leading-[1.3] text-white">{title}</span>
              )}
              <span className="mt-2 block font-body text-[16px] leading-[1.5] text-steel-300">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
