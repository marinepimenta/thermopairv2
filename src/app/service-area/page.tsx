import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";

import Breadcrumbs from "@/components/thermopair/Breadcrumbs";
import PageShell from "@/components/thermopair/PageShell";
import RequestForm from "@/components/thermopair/RequestForm";
import { ClosingCta } from "@/components/thermopair/ServiceDetail";
import {
  MAP_EMBED,
  MAP_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  SectionHeading,
  btnLight,
  btnOnDark,
  container,
  padEnd,
  padStart,
} from "@/components/thermopair/ui";
import { TOWNS, areaHref } from "@/lib/areas";
import { cn } from "@/lib/utils";

// Was 203 characters and truncated; trimmed to ~155.
export const metadata: Metadata = {
  title: { absolute: "HVAC Service Area | Worcester County, MA | Thermopair" },
  description:
    "Thermopair HVAC-R serves Worcester, Shrewsbury, Leominster, Fitchburg, Gardner and more — heating, cooling and commercial refrigeration across Central MA.",
  alternates: { canonical: "/service-area/" },
};

export default function ServiceAreaPage() {
  return (
    <PageShell>
      <section aria-labelledby="area-hub-title" className="tp-dark tp-grad-hero text-white">
        <div className={cn(padStart, padEnd, "pb-12 pt-8 md:pb-16 md:pt-10")}>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Service area" }]} />
          <p className="mb-3 mt-8 font-body text-[14px] font-semibold uppercase tracking-[0.08em] text-heat">
            Worcester County &amp; Central Massachusetts
          </p>
          <h1
            id="area-hub-title"
            className="max-w-[22ch] font-heading text-[clamp(2.125rem,4.4vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.01em]"
          >
            The towns we serve
          </h1>
          <p className="mt-5 max-w-[60ch] font-body text-[18px] leading-[1.65] text-steel-100">
            Heating, cooling and commercial refrigeration across Worcester County and nearby towns. Don’t see yours? Call
            and we’ll tell you right away whether we can help.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={PHONE_HREF} className={btnLight}>
              <Phone aria-hidden="true" className="h-[18px] w-[18px]" />
              Call <span className="tp-num">{PHONE_DISPLAY}</span>
            </a>
            <a href="#request-service" className={btnOnDark}>Request service</a>
          </div>
        </div>
      </section>

      <section aria-labelledby="towns-title" className="bg-white py-14 md:py-20">
        <div className={container}>
          <SectionHeading
            id="towns-title"
            eyebrow="Service area"
            title="Pick your town"
            lead="Each page covers what we’re called for most there, and who to ring when something fails out of hours."
          />
          <ul className="mt-8 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {TOWNS.map((t) => (
              <li key={t.slug}>
                <Link href={areaHref(t.slug)} className="group block border-t-2 border-ink py-5">
                  <h2 className="font-heading text-[20px] font-bold leading-[1.3] text-ink group-hover:underline group-hover:underline-offset-4">
                    {t.name}
                  </h2>
                  <p className="mt-1.5 font-body text-[16px] leading-[1.55] text-steel-600">{t.short}</p>
                  <span className="mt-2 inline-block font-body text-[15px] font-semibold text-purple-deep underline underline-offset-4">
                    HVAC service in {t.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="area-map-title" className="bg-paper py-14 md:py-20">
        <div className={cn(container, "grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:items-center")}>
          <div>
            <SectionHeading
              id="area-map-title"
              eyebrow="Where we are"
              title="Based in Central Massachusetts"
              lead="We cover Worcester County and the towns around it. Emergency calls are answered 24/7."
            />
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center gap-2 font-body text-[16px] font-semibold text-purple-deep underline underline-offset-4"
            >
              Open in Google Maps
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
          {/* Interactive here, unlike the footer: on a page about where we
              work, panning the map is the point. */}
          <div className="overflow-hidden rounded-xl border border-steel-200">
            <iframe
              src={MAP_EMBED}
              title="Map of the Thermopair HVAC-R service area in Central Massachusetts"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full border-0 md:h-[420px]"
            />
          </div>
        </div>
      </section>

      <ClosingCta title="Need a technician in your town?" />
      <RequestForm />
    </PageShell>
  );
}
