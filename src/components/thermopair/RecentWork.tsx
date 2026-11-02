import Image from "next/image";

import { cn } from "@/lib/utils";
import { SectionHeading, container } from "./ui";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Real Thermopair job photos. Source files are small (≈360–615px wide), so
 * tiles are kept to ≤ ~400px display width to stay sharp.
 * TODO(content): replace with higher-resolution originals and add job
 * context (type of business, scope of work) once Thermopair confirms it.
 */
const WORK = [
  {
    src: "work-1.jpg",
    alt: "Rooftop commercial HVAC condensing units mounted on steel rails",
    caption: "Rooftop commercial HVAC units",
    ratio: "aspect-square",
  },
  {
    src: "work-3.jpg",
    alt: "Overhead view of a fenced rooftop refrigeration condenser with four fans",
    caption: "Refrigeration condenser",
    ratio: "aspect-square",
  },
  {
    src: "work-4.jpg",
    alt: "Commercial store interior with refrigerated display cases along the walls",
    caption: "Commercial refrigeration in a retail space",
    ratio: "aspect-[3/4]",
  },
  {
    src: "work-2.jpg",
    alt: "Large rooftop condensing unit on a steel frame",
    caption: "Commercial condensing unit",
    ratio: "aspect-square",
  },
  {
    src: "work-5.jpg",
    alt: "Rows of low refrigerated display freezers in a commercial space",
    caption: "Refrigerated display cases",
    ratio: "aspect-[3/4]",
  },
];

export default function RecentWork() {
  return (
    <section id="work" aria-labelledby="work-title" className="border-t border-steel-200 bg-white py-16 md:py-24">
      <div className={container}>
        <SectionHeading
          id="work-title"
          eyebrow="Recent work"
          title="Real jobs, real equipment"
          lead="A look at commercial HVAC and refrigeration work by the Thermopair team."
        />
        <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {WORK.map((w) => (
            <li key={w.src}>
              <figure>
                <div className={cn("relative overflow-hidden rounded-lg border border-steel-200 bg-steel-100", w.ratio)}>
                  <Image
                    src={`${BASE}/thermopair/work/${w.src}`}
                    alt={w.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2 font-body text-[14px] leading-[1.4] text-steel-600">{w.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
