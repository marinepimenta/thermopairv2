import type { MetadataRoute } from "next";

import { TOWNS, areaHref } from "@/lib/areas";
import { SERVICES, serviceHref } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";

/**
 * Generated from the same arrays that build the pages, so a new service or
 * town appears in the sitemap automatically and can never drift out of sync.
 *
 * Priorities reflect commercial value rather than depth: the emergency and
 * commercial-refrigeration pages are the ones worth crawling often, because
 * they are the differentiated, high-intent services.
 */

/** Services whose search intent is urgent or commercially distinctive. */
const PRIORITY_SERVICES = new Set([
  "commercial-refrigeration",
  "emergency-hvac",
  "commercial-hvac",
  "residential-hvac",
]);

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/services/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/service-area/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...SERVICES.map((s) => ({
      url: absoluteUrl(serviceHref(s.slug)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: PRIORITY_SERVICES.has(s.slug) ? 0.9 : 0.7,
    })),
    ...TOWNS.map((t) => ({
      url: absoluteUrl(areaHref(t.slug)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: absoluteUrl("/join-our-team/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: absoluteUrl("/privacy-policy/"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
