import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { TOWNS, areaHref } from "@/lib/areas";
import { SERVICE_BY_SLUG, serviceHref } from "@/lib/services";
import { cn } from "@/lib/utils";
import { InstagramGlyph } from "./SocialProof";
import { EMAIL, INSTAGRAM_URL, LOGO_SRC, MAP_EMBED, MAP_URL, PHONE_DISPLAY, PHONE_HREF, container } from "./ui";

const SERVICE_LINKS = [
  { label: "All services", href: "/services/" },
  ...["residential-hvac", "commercial-hvac", "heat-pump-installation", "mini-split-installation", "emergency-hvac", "commercial-refrigeration"].map(
    (slug) => ({ label: SERVICE_BY_SLUG[slug].title, href: serviceHref(slug) }),
  ),
];

const COMPANY = [
  { label: "About Thermopair", href: "/#about" },
  { label: "How we work", href: "/#how-we-work" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Service area", href: "/service-area/" },
  { label: "FAQ", href: "/#faq" },
  { label: "Join our team", href: "/join-our-team/" },
];

/** The towns get their own footer column: these are the pages local search lands on. */
const AREA_LINKS = TOWNS.map((t) => ({ label: t.name, href: areaHref(t.slug) }));

const linkCls =
  "inline-flex min-h-9 items-center font-body text-[15px] text-steel-300 transition-colors duration-200 hover:text-white";

export default function SiteFooter() {
  return (
    <footer className="tp-dark bg-steel-950 pt-14 text-white md:pt-20">
      <div className={cn(container, "grid gap-10 md:grid-cols-2 lg:grid-cols-[1.15fr_1fr_0.85fr_0.85fr_1.15fr]")}>
        <div>
          <Image src={LOGO_SRC} alt="Thermopair HVAC-R" width={268} height={45} className="h-[34px] w-auto" />
          <p className="mt-5 max-w-[36ch] font-body text-[15px] leading-[1.6] text-steel-400">
            Heating, cooling and refrigeration service for homes and businesses across Central Massachusetts.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-11 items-center gap-2.5 font-body text-[15px] text-steel-300 transition-colors duration-200 hover:text-white"
          >
            <InstagramGlyph />
            @thermopair
            <span className="sr-only">on Instagram (opens in a new tab)</span>
          </a>
        </div>

        <nav aria-labelledby="footer-services">
          <h2 id="footer-services" className="font-heading text-[16px] font-semibold text-white">Services</h2>
          <ul className="mt-3">
            {SERVICE_LINKS.map((l) => (
              <li key={l.label}><Link href={l.href} className={linkCls}>{l.label}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-company">
          <h2 id="footer-company" className="font-heading text-[16px] font-semibold text-white">Company</h2>
          <ul className="mt-3">
            {COMPANY.map((l) => (
              <li key={l.label}><Link href={l.href} className={linkCls}>{l.label}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-areas">
          <h2 id="footer-areas" className="font-heading text-[16px] font-semibold text-white">Service area</h2>
          <ul className="mt-3">
            {AREA_LINKS.map((l) => (
              <li key={l.label}><Link href={l.href} className={linkCls}>{l.label}</Link></li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-heading text-[16px] font-semibold text-white">Contact</h2>
          <ul className="mt-4 grid gap-3 font-body text-[15px] text-steel-300">
            <li>
              <a href={PHONE_HREF} className="tp-num text-[18px] font-semibold text-white hover:underline">{PHONE_DISPLAY}</a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-white hover:underline">{EMAIL}</a>
            </li>
            <li className="tp-num">
              Mon–Fri, 8 AM – 5 PM
              <br />
              <span className="font-semibold text-white">Emergency service 24/7</span>
            </li>
          </ul>

          {/* The map is decorative (pointer-events-none, aria-hidden): it never
              traps a mobile scroll, and a single stretched link takes the whole
              card to the Google profile. */}
          <div className="group relative mt-6 overflow-hidden rounded-xl border border-white/10">
            <div className="relative h-[150px]">
              <iframe
                src={MAP_EMBED}
                title="Map of the Thermopair HVAC-R service area"
                aria-hidden="true"
                tabIndex={-1}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="tp-map-dark pointer-events-none absolute inset-0 h-full w-full border-0"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_50%_50%,rgba(255,101,18,0.22)_0%,rgba(105,76,252,0.18)_45%,rgba(19,19,19,0.35)_100%)] transition-opacity duration-300 group-hover:opacity-70"
              />
            </div>
            <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-white/[0.04] px-4 py-3 transition-colors duration-200 group-hover:bg-white/[0.08]">
              <div>
                <p className="font-body text-[14px] font-semibold text-white">Dracut, Massachusetts</p>
                <p className="font-body text-[13px] text-steel-400">Serving Worcester County</p>
              </div>
              <ArrowUpRight aria-hidden="true" className="h-[18px] w-[18px] shrink-0 text-steel-300 transition-colors duration-200 group-hover:text-white" />
            </div>
            <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="absolute inset-0 rounded-xl">
              <span className="sr-only">View Thermopair HVAC-R on Google Maps (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>

      <div className={cn(container, "mt-12 flex flex-col gap-2 border-t border-white/10 py-6 font-body text-[14px] text-steel-400 sm:flex-row sm:justify-between")}>
        <p>© 2026 Thermopair HVAC-R. All rights reserved.</p>
        <Link href="/privacy-policy/" className="hover:text-white">Privacy Policy</Link>
      </div>
    </footer>
  );
}
