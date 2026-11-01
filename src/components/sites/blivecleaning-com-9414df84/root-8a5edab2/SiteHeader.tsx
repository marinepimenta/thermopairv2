"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const ASSET_BASE =
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/sites/blivecleaning-com-9414df84/root-8a5edab2/images`;

type NavItem = {
  label: string;
  href: string;
  sub: string[];
};

const NAV: NavItem[] = [
  {
    label: "Residential HVAC",
    href: "/residential-hvac/",
    sub: [
      "Residential HVAC",
      "Heating Installation",
      "Heating Repair",
      "AC Installation",
      "AC Repair",
      "Seasonal Maintenance",
    ],
  },
  {
    label: "Commercial HVAC",
    href: "/commercial-hvac/",
    sub: [
      "Commercial HVAC",
      "Restaurant Climate Systems",
      "Office Heating & Cooling",
      "Retail Climate Systems",
      "Preventive Maintenance",
    ],
  },
  { label: "Maintenance Plans", href: "/maintenance-plans/", sub: [] },
  {
    label: "Areas We Serve",
    href: "/areas-we-serve/",
    sub: [
      "Areas We Serve",
      "Boston, MA",
      "Cambridge, MA",
      "Somerville, MA",
      "Newton, MA",
      "Brookline, MA",
      "Quincy, MA",
      "Waltham, MA",
      "Medford, MA",
      "Malden, MA",
      "Everett, MA",
      "Revere, MA",
      "Lynn, MA",
      "Salem, MA",
      "Peabody, MA",
      "Woburn, MA",
      "Framingham, MA",
      "Natick, MA",
      "Dedham, MA",
      "Needham, MA",
      "Watertown, MA",
    ],
  },
  {
    label: "About Us",
    href: "/about-us/",
    sub: ["About Us", "Our Story", "Join Our Team"],
  },
  { label: "Contact Us", href: "/contact-us/", sub: [] },
];

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2C2E33"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </svg>
  );
}


export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  /* Três estados:
     "top"   — parada no topo da hero: totalmente transparente;
     "dark"  — rolando ainda sobre a hero: barra escura com blur, para que o
               conteúdo da hero não passe por baixo e colida com o logo;
     "light" — passada a hero: barra clara com blur. */
  const [mode, setMode] = useState<"top" | "dark" | "light">("top");

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        // Vira sólida quando o pé da hero encosta na navbar, para que nada
        // do conteúdo da hero passe por baixo de uma barra transparente.
        const hero = document.querySelector<HTMLElement>("[data-hero]");
        const pastHero = hero
          ? hero.offsetTop + hero.offsetHeight - 140
          : window.innerHeight * 0.72;
        const y = window.scrollY;
        setMode(y > pastHero ? "light" : y > 24 ? "dark" : "top");
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const light = mode === "light" || mobileOpen;
  // Enquanto o fundo é escuro, links, telefone e hamburger ficam claros.
  const onDark = !light;

  return (
    <header
      className={cn(
        "fixed top-0 z-50 flex w-full flex-row items-center justify-between gap-2 px-4 md:gap-[10px] md:px-6",
        "transition-[background-color,height,box-shadow,backdrop-filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        light
          ? "h-[72px] bg-white/90 shadow-[0_1px_0_rgba(19,19,19,0.08)] backdrop-blur-md md:h-[88px]"
          : mode === "dark"
            ? "h-[72px] bg-[#0b0b10]/85 shadow-[0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md md:h-[88px]"
            : "nav-scrim h-[88px] bg-transparent md:h-[104px]",
      )}
    >
      <Link href="/" className="flex shrink-0 items-center">
        <Image
          src={`${ASSET_BASE}/logo-thermopair-horizontal-gradient.svg`}
          alt="Thermopair — Climate Care"
          width={268}
          height={45}
          className="h-[26px] w-auto transition-[height] duration-500 sm:h-[30px] md:h-[40px]"
          priority
        />
      </Link>

      {/* Desktop nav */}
      <nav className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center">
        <ul className="flex flex-row items-center gap-7">
          {NAV.map((item) => (
            <li key={item.label} className="group relative">
              <Link
                href={item.href}
                className={cn(
                  "link-underline font-body text-[13px] font-medium transition-colors duration-300 hover:text-thermo-orange",
                  onDark ? "text-white/85" : "text-[#2C2E33]",
                )}
              >
                {item.label}
              </Link>
              {item.sub.length > 0 && (
                <div className="invisible absolute left-0 top-full z-50 max-h-[420px] min-w-[248px] translate-y-1 overflow-y-auto rounded-xl bg-white p-1.5 opacity-0 shadow-xl ring-1 ring-black/5 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.sub.map((sub) => (
                    <Link
                      key={sub}
                      href="#"
                      className="block rounded-lg px-3.5 py-2 font-body text-[13px] text-[#2C2E33] transition-colors hover:bg-thermo-orange hover:text-white"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* CTA buttons */}
      <div className="flex shrink-0 flex-row items-center gap-2 md:gap-[10px]">
        <Link
          href="#schedule-service"
          className="hidden rounded-full bg-thermo-orange px-6 py-3 text-center font-body text-[13px] font-semibold uppercase tracking-[0.05em] leading-[15px] text-white transition-colors duration-300 hover:bg-thermo-orange-deep lg:inline-block"
        >
          Schedule Service
        </Link>
        <Link
          href="tel:+17744980528"
          className={cn(
            "inline-block rounded-full border px-3 py-2 text-center font-body text-[12px] font-semibold uppercase leading-[15px] transition-colors duration-300 sm:px-4 lg:px-5 lg:py-3 lg:text-[13px]",
            onDark
              ? "border-white/25 text-white hover:border-thermo-orange hover:text-thermo-orange"
              : "border-[#2C2E33]/20 text-[#2C2E33] hover:border-thermo-orange hover:text-thermo-orange",
          )}
        >
          (774) 498-0528
        </Link>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className={cn(
            "flex items-center justify-center transition-colors duration-300 lg:hidden",
            onDark ? "text-white" : "text-[#2C2E33]",
          )}
        >
          <HamburgerIcon open={mobileOpen} />
        </button>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="absolute left-0 top-full max-h-[calc(100svh-72px)] w-full overflow-y-auto bg-white shadow-lg lg:hidden">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.label} className="border-b border-black/10">
                <Link
                  href={item.href}
                  className="block px-6 py-3 font-body text-[13px] font-medium text-[#2C2E33]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.sub.length > 0 && (
                  <ul className="pb-2">
                    {item.sub.map((sub) => (
                      <li key={sub}>
                        <Link
                          href="#"
                          className="block px-10 py-1.5 font-body text-[13px] text-[#6B7280]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <Link
                href="#schedule-service"
                className="block bg-thermo-orange px-6 py-4 text-center font-body text-[13px] font-semibold uppercase text-white"
                onClick={() => setMobileOpen(false)}
              >
                Schedule Service
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
