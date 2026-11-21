/**
 * Site-level identity and SEO configuration.
 *
 * STAGING vs PRODUCTION
 * The GitHub Pages build (marinepimenta.github.io/thermopairv2/) is a review
 * environment, not the live site. It must never be indexed: if Google picks
 * it up it becomes a duplicate competing with thermopair.com and splits the
 * ranking signals between them. So on that build we emit
 * `robots: noindex, nofollow` and a robots.txt that disallows everything.
 *
 * Canonical URLs always point at the production domain, so even if a staging
 * page is fetched or shared, it names the real site as the original.
 *
 * Switching to production: the live deploy simply runs without
 * GITHUB_ACTIONS=true (or set NEXT_PUBLIC_SITE_ENV=production), which drops
 * the basePath, turns indexing on and publishes the sitemap.
 */

export const PRODUCTION_URL = "https://thermopair.com";

/** True for the GitHub Pages review build. */
export const IS_STAGING =
  process.env.NEXT_PUBLIC_SITE_ENV !== "production" && process.env.GITHUB_ACTIONS === "true";

/** Absolute base for canonicals, Open Graph and the sitemap. Always production. */
export const SITE_URL = PRODUCTION_URL;

/** Join a route onto the canonical origin. Routes keep their trailing slash. */
export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

/**
 * Public business facts used by the structured data and the metadata.
 *
 * NOTE — unresolved with the client: the site says Dracut (Middlesex County)
 * while all the service content targets Worcester County, and the Google
 * Maps pin resolves to central Massachusetts. Left exactly as the rest of
 * the site states it until Thermopair confirms. When it is settled, change
 * `locality`/`region` here and the schema, metadata and sitemap all follow.
 *
 * Deliberately omitted until verified: street address, postal code, geo
 * coordinates and any aggregateRating. Inventing them risks a structured-data
 * manual action, and self-serving review markup is not eligible for rich
 * results anyway.
 */
export const BUSINESS = {
  name: "Thermopair HVAC-R",
  legalName: "Thermopair HVAC-R",
  locality: "Dracut",
  region: "MA",
  country: "US",
  description:
    "Heating, cooling and commercial refrigeration diagnostics, repair and maintenance for homes and businesses across Worcester County and Central Massachusetts.",
  instagram: "https://www.instagram.com/thermopair/",
  mapUrl: "https://maps.app.goo.gl/7M8eXeCV56Jy5Xvn9",
} as const;

/**
 * Default social share image: a real job photo cropped to the 1200x630 that
 * `summary_large_image` expects. Deliberately not one of the AI-generated
 * shots — a link preview is often the first thing a prospect sees, and the
 * generated images carry garbled logo text that does not survive scrutiny.
 */
export const OG_IMAGE_PATH = "/thermopair/og-default.jpg";
export const OG_IMAGE_ALT = "A Rheem commercial rooftop unit installed by Thermopair HVAC-R";
