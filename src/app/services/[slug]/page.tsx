import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PageShell from "@/components/thermopair/PageShell";
import RequestForm from "@/components/thermopair/RequestForm";
import ServiceDetail from "@/components/thermopair/ServiceDetail";
import { SERVICES, SERVICE_BY_SLUG } from "@/lib/services";

// Static export: only the slugs below exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICE_BY_SLUG[slug];
  if (!service) return {};
  return {
    title: `${service.title} | Thermopair HVAC-R`,
    description: service.metaDescription,
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
      <ServiceDetail service={service} />
      <RequestForm defaultService={service.title} />
    </PageShell>
  );
}
