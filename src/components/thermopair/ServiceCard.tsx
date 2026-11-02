import Link from "next/link";
import {
  AirVent,
  ArrowRight,
  Building2,
  Cable,
  ClipboardCheck,
  Fan,
  House,
  Network,
  PiggyBank,
  Refrigerator,
  Siren,
  Thermometer,
  Wind,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { serviceHref, type IconKey, type Service } from "@/lib/services";

export const SERVICE_ICONS: Record<IconKey, LucideIcon> = {
  house: House,
  building: Building2,
  heatpump: Thermometer,
  minisplit: Wind,
  vrf: Network,
  ventilation: AirVent,
  ductwork: Cable,
  rooftop: Fan,
  thermostat: Thermometer,
  maintenance: ClipboardCheck,
  emergency: Siren,
  rebate: PiggyBank,
  refrigeration: Refrigerator,
};

/** Refrigeration uses the "cold" accent; everything else uses "heat". */
export const isCold = (s: Service) => s.category === "refrigeration";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = SERVICE_ICONS[service.icon];
  const cold = isCold(service);
  return (
    <Link
      href={serviceHref(service.slug)}
      className="group flex h-full flex-col rounded-lg border border-steel-200 bg-white p-6 transition-colors duration-200 hover:border-steel-400"
    >
      <span
        className={cn(
          "inline-flex h-11 w-11 items-center justify-center rounded-md",
          cold ? "bg-cold-pale text-cold" : "bg-heat-pale text-heat-text",
        )}
      >
        <Icon aria-hidden="true" className="h-[22px] w-[22px]" />
      </span>
      <h3 className="mt-4 font-heading text-[18px] font-semibold leading-[1.3] text-ink">{service.title}</h3>
      <p className="mt-2 flex-1 font-body text-[16px] leading-[1.6] text-steel-600">{service.short}</p>
      <span
        className={cn(
          "mt-5 inline-flex items-center gap-1.5 font-body text-[15px] font-semibold",
          cold ? "text-cold" : "text-heat-text",
        )}
      >
        Learn more
        <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        <span className="sr-only"> about {service.title}</span>
      </span>
    </Link>
  );
}

export function ServiceGrid({
  services,
  className,
}: {
  services: Service[];
  className?: string;
}) {
  return (
    <ul className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {services.map((s) => (
        <li key={s.slug}>
          <ServiceCard service={s} />
        </li>
      ))}
    </ul>
  );
}
