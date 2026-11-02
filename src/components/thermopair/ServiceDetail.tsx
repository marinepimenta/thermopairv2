import Image from "next/image";
import Link from "next/link";
import { Check, CircleAlert, Clock, MapPin, Phone, Users, BadgeDollarSign, Plus } from "lucide-react";

import { cn } from "@/lib/utils";
import { DEFAULT_PROCESS, SERVICE_BY_SLUG, type Service } from "@/lib/services";
import Breadcrumbs from "./Breadcrumbs";
import { SERVICE_ICONS, ServiceGrid, isCold } from "./ServiceCard";
import { PHONE_DISPLAY, PHONE_HREF, SectionHeading, btnOnDark, btnOnLight, btnPrimary, container } from "./ui";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const SITE_IMG = `${BASE}/sites/blivecleaning-com-9414df84/root-8a5edab2/images/hvac`;
const WORK_IMG = `${BASE}/thermopair/work`;

export function ClosingCta({ title = "Ready to get started?" }: { title?: string }) {
  return (
    <section aria-labelledby="closing-cta" className="tp-dark bg-steel-900 py-14 text-white md:py-20">
      <div className={cn(container, "flex flex-col gap-6 md:flex-row md:items-center md:justify-between")}>
        <div className="max-w-[640px]">
          <h2 id="closing-cta" className="font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.15]">
            {title}
          </h2>
          <p className="mt-3 font-body text-[17px] leading-[1.6] text-steel-300">
            Tell us what’s going on. We diagnose first and give you the price before any work starts. Emergency? Call us
            any time.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
          <a href="#request-service" className={btnPrimary}>Request service</a>
          <a href={PHONE_HREF} className={btnOnDark}>
            <Phone aria-hidden="true" className="h-[18px] w-[18px]" />
            <span className="tp-num">{PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function ServiceDetail({ service }: { service: Service }) {
  const Icon = SERVICE_ICONS[service.icon];
  const cold = isCold(service);
  const steps = service.process ?? DEFAULT_PROCESS;
  const related = service.related.map((slug) => SERVICE_BY_SLUG[slug]).filter(Boolean);
  const imgSrc = service.image
    ? `${service.image.folder === "work" ? WORK_IMG : SITE_IMG}/${service.image.file}`
    : null;

  const facts = [
    { icon: Users, label: "Who it’s for", value: service.audience },
    { icon: MapPin, label: "Where", value: "Worcester County and nearby towns" },
    { icon: Clock, label: "Emergencies", value: "Call 24/7" },
    { icon: BadgeDollarSign, label: "Pricing", value: "You approve the price before work starts" },
  ];

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="service-title" className="tp-dark bg-steel-900 text-white">
        <div className={cn(container, "grid gap-10 pb-12 pt-8 md:pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14 lg:pb-16")}>
          <div>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services/" },
                { label: service.title },
              ]}
            />
            <p className="mb-3 mt-8 font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-heat">
              {service.eyebrow}
            </p>
            <h1
              id="service-title"
              className="max-w-[20ch] font-heading text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.02em]"
            >
              {service.h1}
            </h1>
            <p className="mt-5 max-w-[56ch] font-body text-[18px] leading-[1.65] text-steel-300">{service.short}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#request-service" className={btnPrimary}>Request service</a>
              <a href={PHONE_HREF} className={btnOnDark}>
                <Phone aria-hidden="true" className="h-[18px] w-[18px]" />
                Call <span className="tp-num">{PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>

          {imgSrc && service.image ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
              <Image
                src={imgSrc}
                alt={service.image.alt}
                fill
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          ) : (
            <div
              aria-hidden="true"
              className="hidden aspect-[4/3] items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] lg:flex"
            >
              <Icon className={cn("h-24 w-24", cold ? "text-cold-light" : "text-heat")} strokeWidth={1.25} />
            </div>
          )}
        </div>
      </section>

      {/* Overview + at a glance */}
      <section aria-labelledby="overview-title" className="bg-white py-14 md:py-20">
        <div className={cn(container, "grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16")}>
          <div>
            <h2 id="overview-title" className="font-heading text-[clamp(1.5rem,2.8vw,2.125rem)] font-semibold leading-[1.2] text-ink">
              What we do
            </h2>
            <div className="mt-5 grid max-w-[68ch] gap-4 font-body text-[17px] leading-[1.7] text-steel-700 md:text-[18px]">
              {service.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <aside aria-label="At a glance" className="self-start rounded-lg border border-steel-200 bg-paper p-6">
            <h3 className="font-heading text-[17px] font-semibold text-ink">At a glance</h3>
            <dl className="mt-4 grid gap-4">
              {facts.map(({ icon: FIcon, label, value }) => (
                <div key={label} className="flex gap-3">
                  <FIcon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-heat-text" />
                  <div>
                    <dt className="font-body text-[14px] text-steel-600">{label}</dt>
                    <dd className="font-body text-[16px] font-semibold leading-[1.4] text-ink">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* What's included */}
      <section aria-labelledby="included-title" className="border-t border-steel-200 bg-paper py-14 md:py-20">
        <div className={container}>
          <SectionHeading id="included-title" eyebrow="What’s included" title="What this covers" />
          <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {service.included.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-lg border border-steel-200 bg-white p-4 font-body text-[16px] leading-[1.5] text-steel-700">
                <Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-ok" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Thermopair */}
      <section aria-labelledby="why-title" className="bg-white py-14 md:py-20">
        <div className={container}>
          <SectionHeading id="why-title" eyebrow="Why Thermopair" title="How we approach it" />
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {service.why.map((w) => (
              <li key={w.title} className={cn("rounded-lg border border-steel-200 border-t-4 bg-white p-6", cold ? "border-t-cold" : "border-t-heat")}>
                <h3 className="font-heading text-[18px] font-semibold text-ink">{w.title}</h3>
                <p className="mt-2 font-body text-[16px] leading-[1.6] text-steel-600">{w.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Signs */}
      <section aria-labelledby="signs-title" className="border-t border-steel-200 bg-paper py-14 md:py-20">
        <div className={cn(container, "grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16")}>
          <SectionHeading id="signs-title" eyebrow="When to call" title={service.signsHeading} />
          <ul className="grid gap-3">
            {service.signs.map((s) => (
              <li key={s} className="flex items-start gap-3 rounded-lg border border-steel-200 bg-white p-4 font-body text-[16px] leading-[1.5] text-steel-700">
                <CircleAlert aria-hidden="true" className={cn("mt-0.5 h-5 w-5 shrink-0", cold ? "text-cold" : "text-heat-text")} />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="process-title" className="bg-white py-14 md:py-20">
        <div className={container}>
          <SectionHeading id="process-title" eyebrow="How it works" title="A clear process, with no surprises" />
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title} className="border-t-2 border-steel-200 pt-6">
                <span className="tp-num font-heading text-[15px] font-semibold text-heat-text">Step {i + 1}</span>
                <h3 className="mt-2 font-heading text-[19px] font-semibold leading-[1.3] text-ink">{step.title}</h3>
                <p className="mt-2 font-body text-[16px] leading-[1.6] text-steel-600">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 font-body text-[16px] text-steel-600">
            We serve Worcester County and nearby towns.{" "}
            <Link href="/#service-area" className="font-semibold text-heat-text underline underline-offset-4">
              See the towns we serve
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-title" className="border-t border-steel-200 bg-paper py-14 md:py-20">
        <div className={cn(container, "grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16")}>
          <SectionHeading id="faq-title" eyebrow="FAQ" title="Questions we often hear" />
          <div className="border-t border-steel-200">
            {service.faqs.map((f) => (
              <details key={f.q} className="group border-b border-steel-200">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                  <span className="font-heading text-[18px] font-semibold leading-[1.4] text-ink">{f.q}</span>
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-steel-300 text-steel-700 transition-colors duration-200 group-open:border-heat group-open:bg-heat group-open:text-ink">
                    <Plus aria-hidden="true" className="h-[18px] w-[18px] transition-transform duration-200 group-open:rotate-45" />
                  </span>
                </summary>
                <p className="max-w-[68ch] pb-6 font-body text-[16px] leading-[1.7] text-steel-700 md:text-[17px]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section aria-labelledby="related-title" className="bg-white py-14 md:py-20">
        <div className={container}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading id="related-title" eyebrow="Related services" title="You might also need" />
            <Link href="/services/" className={cn(btnOnLight, "min-h-11 shrink-0 px-5 text-[15px]")}>
              View all services
            </Link>
          </div>
          <ServiceGrid services={related} className="mt-8 lg:grid-cols-3" />
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
