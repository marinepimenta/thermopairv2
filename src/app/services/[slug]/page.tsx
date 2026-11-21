import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PageShell from "@/components/thermopair/PageShell";
import RequestForm from "@/components/thermopair/RequestForm";
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/components/thermopair/Schema";
import ServiceDetail from "@/components/thermopair/ServiceDetail";
import { SERVICES, SERVICE_BY_SLUG, serviceHref } from "@/lib/services";

// Static export: only the slugs below exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

/**
 * Search titles, which are not the same as the on-page titles.
 *
 * These pages were titled "Commercial HVAC | Thermopair HVAC-R" — 35
 * characters, no location and no intent, on the pages that earn the money.
 * Each title below leads with the phrase someone actually types, adds the
 * county, and stays inside the ~60 characters Google renders. The layout's
 * `%s | Thermopair HVAC-R` template is bypassed here (title.absolute) so the
 * location is not pushed past the truncation point by the brand name.
 */
const SEO_TITLES: Record<string, string> = {
  "commercial-refrigeration": "Commercial Refrigeration Repair | Worcester County, MA",
  "emergency-hvac": "24/7 Emergency HVAC Repair in Worcester County, MA",
  "commercial-hvac": "Commercial HVAC Service in Worcester County, MA",
  "residential-hvac": "Residential HVAC Installation | Worcester County, MA",
  "heat-pump-installation": "Heat Pump Installation in Worcester County, MA",
  "mini-split-installation": "Mini Split Installation in Worcester County, MA",
  "rooftop-unit-service": "Rooftop HVAC Unit Service | Worcester County, MA",
  "preventive-maintenance": "HVAC Preventive Maintenance | Worcester County, MA",
  "ductwork-installation": "Ductwork Installation & Repair | Worcester County, MA",
  "erv-hrv-ventilation": "ERV & HRV Ventilation Systems | Worcester County, MA",
  "vrf-vrv-systems": "VRF & VRV System Install & Service | Worcester County, MA",
  "smart-thermostat": "Smart Thermostat Installation | Worcester County, MA",
  "mass-save-rebate": "Mass Save Rebates for HVAC Upgrades | Worcester County, MA",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICE_BY_SLUG[slug];
  if (!service) return {};

  const title = SEO_TITLES[slug] ?? `${service.title} in Worcester County, MA`;

  return {
    title: { absolute: title },
    description: service.metaDescription,
    alternates: { canonical: serviceHref(slug) },
    openGraph: {
      type: "article",
      title,
      description: service.metaDescription,
      url: serviceHref(slug),
    },
    twitter: { title, description: service.metaDescription },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICE_BY_SLUG[slug];
  if (!service) notFound();

  return (
    <PageShell>
      <JsonLd
        data={serviceSchema({
          name: service.title,
          description: service.metaDescription,
          url: serviceHref(slug),
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
          { name: service.title, path: serviceHref(slug) },
        ])}
      />
      {service.faqs.length > 0 && <JsonLd data={faqSchema(service.faqs)} />}

      <ServiceDetail service={service} />
      <RequestForm defaultService={service.title} />
    </PageShell>
  );
}
