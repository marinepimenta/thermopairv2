import type { Metadata } from "next";
import { notFound } from "next/navigation";

import AreaDetail, { areaFaqs } from "@/components/thermopair/AreaDetail";
import PageShell from "@/components/thermopair/PageShell";
import RequestForm from "@/components/thermopair/RequestForm";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/thermopair/Schema";
import { TOWNS, TOWN_BY_SLUG, areaHref } from "@/lib/areas";

// Static export: only the towns below exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return TOWNS.map((t) => ({ town: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ town: string }>;
}): Promise<Metadata> {
  const { town: slug } = await params;
  const town = TOWN_BY_SLUG[slug];
  if (!town) return {};

  // Absolute: the town name must survive truncation, so the brand goes last
  // and only if it fits.
  const title = `HVAC & Refrigeration Service in ${town.name}, MA | Thermopair`;

  return {
    title: { absolute: title },
    description: town.metaDescription,
    alternates: { canonical: areaHref(slug) },
    openGraph: {
      type: "article",
      title,
      description: town.metaDescription,
      url: areaHref(slug),
    },
    twitter: { title, description: town.metaDescription },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ town: string }>;
}) {
  const { town: slug } = await params;
  const town = TOWN_BY_SLUG[slug];
  if (!town) notFound();

  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service area", path: "/service-area/" },
          { name: town.name, path: areaHref(slug) },
        ])}
      />
      <JsonLd data={faqSchema(areaFaqs(town))} />

      <AreaDetail town={town} />
      <RequestForm />
    </PageShell>
  );
}
