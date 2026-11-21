import { TOWNS } from "@/lib/areas";
import { SERVICES, serviceHref, type Faq } from "@/lib/services";
import { BUSINESS, absoluteUrl } from "@/lib/site";
import { EMAIL, PHONE_DISPLAY } from "./ui";

/**
 * JSON-LD structured data.
 *
 * Everything here is derived from facts already published on the site — no
 * invented address, coordinates, rating or review count. Two deliberate
 * omissions:
 *   - `aggregateRating` / `review`: we have no verified rating and count, and
 *     reviews hosted on your own site are not eligible for rich results
 *     anyway. Fabricating them risks a structured-data manual action.
 *   - `geo` and `streetAddress`: unresolved while the Dracut vs Worcester
 *     County question is open with the client.
 *
 * The business node carries a stable @id so the Service and WebPage nodes can
 * reference the same entity rather than describing nine separate businesses.
 */

const BUSINESS_ID = absoluteUrl("/#business");

/** Renders a JSON-LD block. Next keeps this in the static HTML. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Content is ours, built from typed constants — no user input reaches it.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * HVACBusiness — a Schema.org LocalBusiness subtype, which is more specific
 * (and therefore stronger) than plain LocalBusiness for this trade.
 */
export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": BUSINESS_ID,
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: absoluteUrl("/"),
    telephone: PHONE_DISPLAY,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.locality,
      addressRegion: BUSINESS.region,
      addressCountry: BUSINESS.country,
    },
    // A service-area business: we travel to customers rather than receiving
    // them, so the towns are areaServed, not extra locations.
    areaServed: TOWNS.map((t) => ({
      "@type": "City",
      name: t.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: t.name,
        addressRegion: "MA",
        addressCountry: "US",
      },
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    // The 24/7 emergency line is the real differentiator; state it explicitly.
    specialOpeningHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      description: "24/7 emergency service for heating, cooling and refrigeration failures",
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [BUSINESS.instagram, BUSINESS.mapUrl],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "HVAC and refrigeration services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          url: absoluteUrl(serviceHref(s.slug)),
        },
      })),
    },
  };
}

/** A single service, tied back to the business entity. */
export function serviceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    url: absoluteUrl(url),
    provider: { "@id": BUSINESS_ID },
    areaServed: TOWNS.map((t) => ({ "@type": "City", name: t.name })),
  };
}

/**
 * FAQPage. Every service and town page already has a real FAQ, so this is the
 * cheapest rich-result win on the site.
 */
export function faqSchema(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Mirrors the visible breadcrumb trail, which was markup-only until now. */
export function breadcrumbSchema(items: { name: string; path?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.path ? { item: absoluteUrl(item.path) } : {}),
    })),
  };
}
