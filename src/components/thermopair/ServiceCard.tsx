import Link from "next/link";

import { cn } from "@/lib/utils";
import { serviceHref, type Service } from "@/lib/services";

/**
 * A ruled list entry: title, one line, link. No icon, no box.
 * `compact` is the quieter home-page variant: hairline rule, smaller title,
 * link inline under the text so rows never carry dead space.
 */
export function ServiceCard({ service, compact = false }: { service: Service; compact?: boolean }) {
  return (
    <Link
      href={serviceHref(service.slug)}
      className={cn("group block", compact ? "border-t border-steel-300 py-4" : "border-t-2 border-ink py-5")}
    >
      <h3
        className={cn(
          "font-heading font-bold leading-[1.3] text-ink group-hover:underline group-hover:underline-offset-4",
          compact ? "text-[18px]" : "text-[20px]",
        )}
      >
        {service.title}
      </h3>
      <p className="mt-1.5 font-body text-[16px] leading-[1.55] text-steel-600">{service.short}</p>
      <span className="mt-2 inline-block font-body text-[15px] font-semibold text-purple-deep underline underline-offset-4">
        Learn more
        <span className="sr-only"> about {service.title}</span>
      </span>
    </Link>
  );
}

export function ServiceGrid({
  services,
  compact = false,
  className,
}: {
  services: Service[];
  compact?: boolean;
  className?: string;
}) {
  return (
    <ul className={cn("grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {services.map((s) => (
        <li key={s.slug}>
          <ServiceCard service={s} compact={compact} />
        </li>
      ))}
    </ul>
  );
}
