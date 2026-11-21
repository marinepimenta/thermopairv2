import Link from "next/link";

import { cn } from "@/lib/utils";

export type Crumb = { label: string; href?: string };

/** Default is the dark/gradient hero surface; `heat` is kept for legacy solid-orange bands. */
export default function Breadcrumbs({
  items,
  surface = "dark",
}: {
  items: Crumb[];
  surface?: "dark" | "heat";
}) {
  const heat = surface === "heat";
  return (
    <nav aria-label="Breadcrumb">
      <ol className={cn("flex flex-wrap items-center gap-2 font-body text-[14px]", heat ? "text-ink" : "text-steel-400")}>
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.label} className="flex items-center gap-2">
              {c.href && !last ? (
                <Link href={c.href} className={cn("underline underline-offset-4", !heat && "hover:text-white")}>
                  {c.label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined} className={cn(last && (heat ? "font-semibold" : "text-steel-300"))}>
                  {c.label}
                </span>
              )}
              {!last && <span aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
