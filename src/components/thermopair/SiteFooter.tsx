import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { SERVICE_BY_SLUG, serviceHref } from "@/lib/services";
import { cn } from "@/lib/utils";
import { EMAIL, LOGO_SRC, PHONE_DISPLAY, PHONE_HREF, container } from "./ui";

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
  { label: "Service area", href: "/#service-area" },
  { label: "FAQ", href: "/#faq" },
];

const linkCls =
  "inline-flex min-h-9 items-center font-body text-[15px] text-steel-300 transition-colors duration-200 hover:text-white";

export default function SiteFooter() {
  return (
    <footer className="tp-dark bg-steel-950 pt-14 text-white md:pt-20">
      <div className={cn(container, "grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]")}>
        <div>
          <Image src={LOGO_SRC} alt="Thermopair HVAC-R" width={268} height={45} className="h-[34px] w-auto" />
          <p className="mt-5 max-w-[36ch] font-body text-[15px] leading-[1.6] text-steel-400">
            Heating, cooling and refrigeration service for homes and businesses across Central Massachusetts.
          </p>
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

        <div>
          <h2 className="font-heading text-[16px] font-semibold text-white">Contact</h2>
          <ul className="mt-4 grid gap-3 font-body text-[15px] text-steel-300">
            <li className="flex items-start gap-2.5">
              <Phone aria-hidden="true" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-heat" />
              <a href={PHONE_HREF} className="tp-num font-semibold text-white hover:underline">{PHONE_DISPLAY}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail aria-hidden="true" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-heat" />
              <a href={`mailto:${EMAIL}`} className="hover:text-white hover:underline">{EMAIL}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin aria-hidden="true" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-heat" />
              Dracut, Massachusetts
            </li>
            <li className="flex items-start gap-2.5">
              <Clock aria-hidden="true" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-heat" />
              <span className="tp-num">
                Mon–Fri, 8 AM – 5 PM
                <br />
                <span className="font-semibold text-white">Emergency service 24/7</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className={cn(container, "mt-12 flex flex-col gap-2 border-t border-white/10 py-6 font-body text-[14px] text-steel-400 sm:flex-row sm:justify-between")}>
        <p>© 2026 Thermopair HVAC-R. All rights reserved.</p>
        <a href="#" className="hover:text-white">Privacy Policy</a>
      </div>
    </footer>
  );
}
