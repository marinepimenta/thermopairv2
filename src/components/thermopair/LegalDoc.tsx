import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import { cn } from "@/lib/utils";
import { container, padEnd, padStart } from "./ui";

export type LegalSection = {
  /** Anchor id — also the target of the contents list. */
  id: string;
  heading: string;
  body: React.ReactNode;
};

/**
 * Shared layout for long-form legal pages: hero, sticky contents list and a
 * prose column. `prose` below is a deliberate, small set of rules rather than
 * a plugin — the only elements these documents use are paragraphs, lists and
 * links, and the site has no other long-form text to justify more.
 */
const prose = cn(
  "max-w-[68ch] font-body text-[17px] leading-[1.75] text-steel-700",
  "[&_p]:mt-4 [&_p:first-child]:mt-0",
  "[&_ul]:mt-4 [&_ul]:grid [&_ul]:gap-2.5 [&_li]:relative [&_li]:pl-5",
  "[&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.7em] [&_li]:before:h-[5px] [&_li]:before:w-[5px] [&_li]:before:rounded-full [&_li]:before:bg-heat",
  "[&_a]:font-semibold [&_a]:text-purple-deep [&_a]:underline [&_a]:underline-offset-4",
  "[&_strong]:font-semibold [&_strong]:text-ink",
);

export default function LegalDoc({
  title,
  lead,
  updated,
  crumbs,
  sections,
}: {
  title: string;
  lead: string;
  /** Human-readable date, e.g. "21 November 2026". */
  updated: string;
  crumbs: Crumb[];
  sections: LegalSection[];
}) {
  return (
    <>
      <section aria-labelledby="legal-title" className="tp-dark tp-grad-hero text-white">
        <div className={cn(padStart, padEnd, "pb-12 pt-8 md:pb-16 md:pt-10")}>
          <Breadcrumbs items={crumbs} />
          <p className="mb-3 mt-8 font-body text-[14px] font-semibold uppercase tracking-[0.08em] text-heat">
            Last updated {updated}
          </p>
          <h1
            id="legal-title"
            className="max-w-[22ch] font-heading text-[clamp(2.125rem,4.4vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.01em]"
          >
            {title}
          </h1>
          <p className="mt-5 max-w-[60ch] font-body text-[18px] leading-[1.65] text-steel-100">{lead}</p>
        </div>
      </section>

      <section aria-labelledby="legal-body" className="bg-white py-14 md:py-20">
        <h2 id="legal-body" className="sr-only">{title}</h2>
        <div className={cn(container, "grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16")}>
          <nav aria-labelledby="legal-toc" className="lg:sticky lg:top-24 lg:self-start">
            <h2 id="legal-toc" className="border-b-2 border-ink pb-3 font-heading text-[17px] font-bold text-ink">
              Contents
            </h2>
            <ol className="mt-1">
              {sections.map((s, i) => (
                <li key={s.id} className="border-b border-steel-200">
                  <a
                    href={`#${s.id}`}
                    className="flex gap-3 py-3 font-body text-[15px] leading-[1.45] text-steel-600 underline-offset-4 hover:text-ink hover:underline"
                  >
                    <span className="tp-num shrink-0 text-steel-400">{String(i + 1).padStart(2, "0")}</span>
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div>
            {sections.map((s, i) => (
              <section
                key={s.id}
                id={s.id}
                aria-labelledby={`${s.id}-h`}
                className={cn("scroll-mt-24", i > 0 && "mt-12 border-t border-steel-200 pt-12")}
              >
                <h2
                  id={`${s.id}-h`}
                  className="font-heading text-[clamp(1.375rem,2.4vw,1.75rem)] font-bold leading-[1.25] text-ink"
                >
                  {s.heading}
                </h2>
                <div className={cn(prose, "mt-4")}>{s.body}</div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
