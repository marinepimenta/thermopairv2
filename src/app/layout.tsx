import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import { JsonLd, businessSchema } from "@/components/thermopair/Schema";
import { IS_STAGING, OG_IMAGE_ALT, OG_IMAGE_PATH, SITE_URL } from "@/lib/site";

// Corpo de texto — Figtree.
// Servida pelo Google Fonts (mesmo desenho dos .ttf enviados, porém em woff2
// já subsetado). Para passar a usar os arquivos locais, troque por localFont
// apontando para public/fonts/Figtree-VariableFont_wght.ttf.
const figtree = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Títulos — Sentient, a serifa da marca (Visual Identity Guidelines).
// Arquivos em public/fonts; Libre Baskerville/Georgia são o fallback oficial.
const sentient = localFont({
  variable: "--font-heading",
  display: "swap",
  src: [
    { path: "../../public/fonts/Sentient-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Sentient-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Sentient-Bold.woff2", weight: "700", style: "normal" },
  ],
  fallback: ["Libre Baskerville", "Georgia", "serif"],
});

/**
 * Title was 77 characters and the description 226 — both truncated in
 * results. Trimmed to the ~60 / ~155 that Google actually shows, leading with
 * the commercial-refrigeration angle because that is the differentiated,
 * lower-competition intent.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "HVAC & Refrigeration Service in Worcester County, MA | Thermopair",
    template: "%s | Thermopair HVAC-R",
  },
  description:
    "Heating, cooling and commercial refrigeration repair for homes and businesses across Worcester County, MA. Walk-in coolers, rooftop units, furnaces. 24/7 emergency service.",
  alternates: { canonical: "/" },
  // The review build stays out of the index so it never competes with the
  // production domain for the same content.
  robots: IS_STAGING
    ? { index: false, follow: false, nocache: true }
    : { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Thermopair HVAC-R",
    locale: "en_US",
    url: SITE_URL,
    title: "HVAC & Refrigeration Service in Worcester County, MA | Thermopair",
    description:
      "Heating, cooling and commercial refrigeration repair for homes and businesses across Worcester County, MA. 24/7 emergency service.",
    images: [{ url: OG_IMAGE_PATH, width: 1200, height: 630, alt: OG_IMAGE_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HVAC & Refrigeration Service in Worcester County, MA | Thermopair",
    description:
      "Heating, cooling and commercial refrigeration repair across Worcester County, MA. 24/7 emergency service.",
    images: [OG_IMAGE_PATH],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${sentient.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* One business entity for the whole site; other pages reference its @id. */}
        <JsonLd data={businessSchema()} />
        {children}
      </body>
    </html>
  );
}
