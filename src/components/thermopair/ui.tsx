import { cn } from "@/lib/utils";

/**
 * Shared constants and small primitives for the Thermopair HVAC-R redesign.
 * Source of truth: the design system defined with UI UX Pro Max
 * (flat, high-contrast, heat = action, cold = refrigeration).
 */

export const PHONE_DISPLAY = "(774) 498-0528";
export const PHONE_HREF = "tel:+17744980528";
export const EMAIL = "hello@thermopair.com";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const IMG = `${BASE}/sites/blivecleaning-com-9414df84/root-8a5edab2/images`;
export const LOGO_SRC = `${IMG}/logo-thermopair-horizontal-gradient.svg`;

export const container = "mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8";

const btnBase =
  "inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-md px-6 font-body text-[16px] font-semibold leading-none transition-colors duration-200 active:translate-y-px";

/** Primary action. Ink label on brand orange (≈6:1). */
export const btnPrimary = cn(btnBase, "bg-heat text-ink hover:bg-heat-hover");

/** Secondary action on dark surfaces. */
export const btnOnDark = cn(
  btnBase,
  "border border-steel-400/60 text-white hover:border-white hover:bg-white/5",
);

/** Secondary action on light surfaces. */
export const btnOnLight = cn(
  btnBase,
  "border border-steel-300 bg-white text-ink hover:border-steel-700",
);

export function Eyebrow({
  children,
  tone = "heat",
  className,
}: {
  children: React.ReactNode;
  tone?: "heat" | "cold" | "onDark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-3 font-body text-[13px] font-semibold uppercase tracking-[0.12em]",
        tone === "heat" && "text-heat-text",
        tone === "cold" && "text-cold",
        tone === "onDark" && "text-heat",
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
  tone = "heat",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  id?: string;
  tone?: "heat" | "cold";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-[720px]", className)}>
      {eyebrow && (
        <Eyebrow tone={dark ? "onDark" : tone}>{eyebrow}</Eyebrow>
      )}
      <h2
        id={id}
        className={cn(
          "font-heading text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15]",
          dark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-4 font-body text-[17px] leading-[1.65] md:text-[18px]",
            dark ? "text-steel-300" : "text-steel-600",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
