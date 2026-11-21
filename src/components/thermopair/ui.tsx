import { cn } from "@/lib/utils";

/**
 * Shared constants and small primitives for the Thermopair HVAC-R site.
 * Source of truth: DESIGN.md (brand Visual Identity Guidelines): Brand
 * Purple carries actions, brand gradients carry the big bands, orange is
 * the warm accent inside the mix.
 */

export const PHONE_DISPLAY = "(774) 498-0528";
export const PHONE_HREF = "tel:+17744980528";
export const EMAIL = "hello@thermopair.com";

/**
 * Google Maps. `MAP_URL` is the share link from the Thermopair profile.
 * `MAP_EMBED` is the key-less embed of the same pin — the coordinates are the
 * ones Google itself resolves that share link to, so the marker lands on the
 * profile's own location. The label in the card is ours, not Google's, so the
 * map never has to render our copy.
 */
/** Instagram is the only social profile Thermopair runs today. */
export const INSTAGRAM_URL = "https://www.instagram.com/thermopair/";

export const MAP_URL = "https://maps.app.goo.gl/7M8eXeCV56Jy5Xvn9";
export const MAP_EMBED =
  "https://www.google.com/maps?q=42.5565565,-71.7825944&z=9&output=embed";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const IMG = `${BASE}/sites/blivecleaning-com-9414df84/root-8a5edab2/images`;
export const LOGO_SRC = `${IMG}/logo-thermopair-horizontal-gradient.svg`;

export const container = "mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8";

/** Aligns a full-bleed half-width panel's content with the 1240px column. */
export const padStart = "pl-4 sm:pl-6 lg:pl-[max(2rem,calc((100vw-1240px)/2+2rem))]";
export const padEnd = "pr-4 sm:pr-6 lg:pr-[max(2rem,calc((100vw-1240px)/2+2rem))]";

const btnBase =
  "inline-flex min-h-12 cursor-pointer items-center justify-center rounded-[4px] px-7 font-body text-[16px] font-semibold leading-none transition-colors duration-200";

/** Primary action on white, paper and flat dark surfaces. White on Brand Purple (≈5.2:1). */
export const btnPrimary = cn(btnBase, "gap-2 bg-purple text-white hover:bg-purple-deep");

/** Primary action on a brand-gradient surface: solid white, ink label. */
export const btnLight = cn(btnBase, "gap-2 bg-white text-ink hover:bg-steel-100");

/** @deprecated kept for older call sites; same as btnLight. */
export const btnDark = btnLight;

/** Secondary action on dark and gradient surfaces. */
export const btnOnDark = cn(btnBase, "gap-2 border border-white/60 text-white hover:border-white hover:bg-white/10");

/** Secondary action on light surfaces. */
export const btnOnLight = cn(btnBase, "border border-ink text-ink hover:bg-ink hover:text-white");

/** @deprecated orange bands were retired; same as btnOnDark. */
export const btnOnHeat = btnOnDark;

/** Surface the text sits on. Drives text colors. Gradient bands use `dark`. */
export type Surface = "light" | "dark" | "heat" | "purple";

export function Eyebrow({
  children,
  surface = "light",
  className,
}: {
  children: React.ReactNode;
  surface?: Surface;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-3 font-body text-[14px] font-semibold uppercase tracking-[0.08em]",
        surface === "light" && "text-heat-text",
        (surface === "dark" || surface === "purple") && "text-heat",
        surface === "heat" && "text-ink",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  id,
  surface = "light",
  showEyebrow = false,
  className,
}: {
  /** Kept as data for every section; only rendered where `showEyebrow` is set (hero and refrigeration). */
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  id?: string;
  surface?: Surface;
  showEyebrow?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-[680px]", className)}>
      {eyebrow && showEyebrow && <Eyebrow surface={surface}>{eyebrow}</Eyebrow>}
      <h2
        id={id}
        className={cn(
          "font-heading text-[clamp(1.875rem,3.2vw,2.625rem)] font-medium leading-[1.12]",
          surface === "dark" || surface === "purple" ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-4 font-body text-[17px] leading-[1.65]",
            surface === "dark" && "text-steel-300",
            surface === "purple" && "text-purple-pale",
            surface === "light" && "text-steel-600",
            surface === "heat" && "text-ink",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

/** Text link, underlined, no icon. */
export const textLink = "font-body text-[16px] font-semibold underline underline-offset-4";
