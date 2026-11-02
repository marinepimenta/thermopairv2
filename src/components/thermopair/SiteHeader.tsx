"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Menu, Phone, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { LOGO_SRC, PHONE_DISPLAY, PHONE_HREF, btnPrimary, container } from "./ui";

/**
 * Single-page anchors only: no hover-only dropdowns (they fail keyboard and
 * touch). The header is sticky (not fixed), so it never covers the first
 * section, and it is always solid white so the logo and phone stay legible.
 */
const NAV = [
  { label: "Services", href: "/services/" },
  { label: "Refrigeration", href: "/services/commercial-refrigeration/" },
  { label: "How we work", href: "/#how-we-work" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Service area", href: "/#service-area" },
  { label: "FAQ", href: "/#faq" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Esc closes the mobile menu and returns focus to the toggle.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Utility bar: urgency + location, desktop/tablet only. */}
      <div className="tp-dark hidden bg-steel-950 text-steel-300 md:block">
        <div
          className={cn(
            container,
            "flex h-10 items-center justify-between font-body text-[14px]",
          )}
        >
          <p className="flex items-center gap-5">
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-heat" />
              <span className="font-semibold text-white">24/7 emergency service</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin aria-hidden="true" className="h-4 w-4" />
              Based in Dracut, Massachusetts
            </span>
          </p>
          <p className="inline-flex items-center gap-1.5">
            <Clock aria-hidden="true" className="h-4 w-4" />
            <span className="tp-num">Office: Mon–Fri, 8 AM – 5 PM</span>
          </p>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-steel-200 bg-white">
        <div className={cn(container, "flex h-[68px] items-center gap-4 md:h-[76px]")}>
          <Link href="/" className="flex shrink-0 items-center" aria-label="Thermopair HVAC-R, home">
            <Image
              src={LOGO_SRC}
              alt=""
              width={268}
              height={45}
              loading="eager"
              className="h-[26px] w-auto md:h-[32px]"
            />
          </Link>

          <nav aria-label="Main" className="ml-auto hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-md px-3 py-2 font-body text-[15px] font-medium text-steel-700 transition-colors duration-200 hover:bg-steel-100 hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-4">
            <a
              href={PHONE_HREF}
              className="hidden min-h-11 items-center gap-2 rounded-md px-3 font-body text-[16px] font-semibold text-ink transition-colors duration-200 hover:bg-steel-100 sm:inline-flex"
            >
              <Phone aria-hidden="true" className="h-[18px] w-[18px] text-heat-text" />
              <span className="tp-num">{PHONE_DISPLAY}</span>
            </a>
            <a href="#request-service" className={cn(btnPrimary, "hidden min-h-11 px-5 text-[15px] md:inline-flex")}>
              Request service
            </a>
            <a
              href={PHONE_HREF}
              aria-label={`Call Thermopair at ${PHONE_DISPLAY}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-steel-300 text-ink sm:hidden"
            >
              <Phone aria-hidden="true" className="h-5 w-5" />
            </a>
            <button
              ref={toggleRef}
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-steel-300 text-ink lg:hidden"
            >
              {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          hidden={!open}
          className="max-h-[calc(100svh-68px)] overflow-y-auto border-t border-steel-200 bg-white lg:hidden"
        >
          <nav aria-label="Mobile" className={cn(container, "py-3")}>
            <ul>
              {NAV.map((item) => (
                <li key={item.href} className="border-b border-steel-200 last:border-b-0">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-12 items-center font-body text-[17px] font-medium text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 grid gap-2 pb-2">
              <a href="#request-service" onClick={() => setOpen(false)} className={btnPrimary}>
                Request service
              </a>
              <p className="pt-2 text-center font-body text-[14px] text-steel-600">
                24/7 emergency service · Based in Dracut, MA
              </p>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
