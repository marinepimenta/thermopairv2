import type { MetadataRoute } from "next";

import { IS_STAGING, absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // The review build must stay out of the index entirely, so it never
  // competes with thermopair.com for the same content.
  if (IS_STAGING) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
