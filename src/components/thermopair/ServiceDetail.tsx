import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import { DEFAULT_PROCESS, SERVICE_BY_SLUG, type Service } from "@/lib/services";
import Breadcrumbs from "./Breadcrumbs";
import { FaqList } from "./Faq";
import { ServiceGrid } from "./ServiceCard";
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  SectionHeading,
  btnLight,
  btnOnDark,
  btnOnLight,
  btnPrimary,
  container,
  padEnd,
  padStart,
} from "./ui";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const SITE_IMG = `${BASE}/sites/blivecleaning-com-9414df84/root-8a5edab2/images/hvac`;
const WORK_IMG = `${BASE}/thermopair/work`;

export function ClosingCta({ title = "Ready to get started?" }: { title?: string }) {
  return (
    <section aria-labelledby="closing-cta" className="tp-dark bg-steel-900 py-14 text-white md:py-20">
      <div className={cn(container, "flex flex-col gap-6 md:flex-row md:items-center md:justify-between")}>
        <div className="max-w-[640px]">
          <h2 id="closing-cta" className="font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.15]">
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

/** Ruled, icon-free list used for "what's included" and "when to call". */
function RuledList({ items, columns = false }: { items: string[]; columns?: boolean }) {
  return (
    <ul className={cn(columns && "grid gap-x-10 sm:grid-cols-2")}>
      {items.map((item) => (
        <li key={item} className="border-t border-steel-300 py-4 font-body text-[17px] leading-[1.5] text-steel-700 last:border-b sm:[&:nth-last-child(2):nth-child(odd)]:border-b">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ServiceDetail({ service }: { service: Service }) {
  const steps = service.process ?? DEFAULT_PROCESS;
  const related = service.related.map((slug) => SERVICE_BY_SLUG[slug]).filter(Boolean);
  const imgSrc = service.image
    ? `${service.image.folder === "work" ? WORK_IMG : SITE_IMG}/${service.image.file}`
    : null;

  const facts = [
    { label: "Who it’s for", value: service.audience },
    { label: "Where", value: "Worcester County and nearby towns" },
    { label: "Emergencies", value: "Call 24/7" },
    { label: "Pricing", value: "You approve the price before work starts" },
  ];

  const hasImage = Boolean(imgSrc && service.image);

  return (
    <>
      {/* Hero: solid orange, photo flush right when the service has one */}
      <section aria-labelledby="service-title" className={cn("tp-dark grid bg-ink text-white", hasImage && "lg:grid-cols-2")}>
        <div className={cn("tp-grad-hero", padStart, padEnd, "py-10 md:py-14 lg:py-16", hasImage && "lg:pr-16")}>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services/" },
              { label: service.title },
            ]}
          />
          <p className="mb-3 mt-8 font-body text-[14px] font-semibold uppercase tracking-[0.08em] text-heat">
            {service.eyebrow}
          </p>
          <h1
            id="service-title"
            className="max-w-[20ch] font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.01em]"
          >
            {service.h1}
          </h1>
          <p className="mt-5 max-w-[56ch] font-body text-[18px] leading-[1.65] text-steel-100">{service.short}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={PHONE_HREF} className={btnLight}>
              <Phone aria-hidden="true" className="h-[18px] w-[18px]" />
              Call <span className="tp-num">{PHONE_DISPLAY}</span>
            </a>
            <a href="#request-service" className={btnOnDark}>Request service</a>
          </div>
        </div>

        {imgSrc && service.image && (
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px]">
            <Image
              src={imgSrc}
              alt={service.image.alt}
              fill
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        )}
      </section>

      {/* Overview + at a glance */}
      <section aria-labelledby="overview-title" className="bg-white py-14 md:py-20">
        <div className={cn(container, "grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16")}>
          <div>
            <h2 id="overview-title" className="font-heading text-[clamp(1.5rem,2.8vw,2.125rem)] font-bold leading-[1.2] text-ink">
              What we do
            </h2>
            <div className="mt-5 grid max-w-[68ch] gap-4 font-body text-[17px] leading-[1.7] text-steel-700 md:text-[18px]">
              {service.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <aside aria-label="At a glance" className="self-start">
            <h3 className="border-b-2 border-ink pb-3 font-heading text-[19px] font-bold text-ink">At a glance</h3>
            <dl>
              {facts.map(({ label, value }) => (
                <div key={label} className="border-b border-steel-300 py-4">
                  <dt className="font-body text-[14px] text-steel-600">{label}</dt>
                  <dd className="font-body text-[16px] font-semibold leading-[1.4] text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* What's included */}
      <section aria-labelledby="included-title" className="bg-paper py-14 md:py-20">
        <div className={container}>
          <SectionHeading id="included-title" eyebrow="What’s included" title="What this covers" />
          <div className="mt-8">
            <RuledList items={service.included} columns />
          </div>
        </div>
      </section>

      {/* Why Thermopair */}
      <section aria-labelledby="why-title" className="bg-white py-14 md:py-20">
        <div className={container}>
          <SectionHeading id="why-title" eyebrow="Why Thermopair" title="How we approach it" />
          <ul className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-3">
            {service.why.map((w) => (
              <li key={w.title} className="border-t-2 border-ink pt-5">
                <h3 className="font-heading text-[19px] font-bold text-ink">{w.title}</h3>
                <p className="mt-2 font-body text-[16px] leading-[1.6] text-steel-600">{w.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Signs */}
      <section aria-labelledby="signs-title" className="bg-paper py-14 md:py-20">
        <div className={cn(container, "grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16")}>
          <SectionHeading id="signs-title" eyebrow="When to call" title={service.signsHeading} />
          <RuledList items={service.signs} />
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="process-title" className="bg-white py-14 md:py-20">
        <div className={container}>
          <SectionHeading id="process-title" eyebrow="How it works" title="A clear process, with no surprises" />
          <ol className="mt-10 grid gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title} className="border-t-2 border-ink pt-5">
                <span className="tp-num font-heading text-[15px] font-bold text-heat-text">Step {i + 1}</span>
                <h3 className="mt-2 font-heading text-[20px] font-bold leading-[1.3] text-ink">{step.title}</h3>
                <p className="mt-2 font-body text-[16px] leading-[1.6] text-steel-600">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 font-body text-[16px] text-steel-600">
            We serve Worcester County and nearby towns.{" "}
            <Link href="/#service-area" className="font-semibold text-purple-deep underline underline-offset-4">
              See the towns we serve
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-title" className="bg-paper py-14 md:py-20">
        <div className={cn(container, "grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16")}>
          <SectionHeading id="faq-title" eyebrow="FAQ" title="Questions we often hear" />
          <FaqList items={service.faqs} />
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
          <ServiceGrid services={related} className="mt-8" />
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
