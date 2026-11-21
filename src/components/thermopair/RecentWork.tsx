import Image from "next/image";

import { SectionHeading, container } from "./ui";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Real Thermopair job photos — nothing generated, nothing stock.
 * The 2026 set (rooftop units, exhaust fans, mini splits) is 1000px square;
 * the earlier five are smaller originals (≈360–615px), so tiles stay under
 * ~400px display width to keep those sharp.
 * Order alternates close-ups and wide site shots, and mixes HVAC with
 * refrigeration so neither side of the business reads as an afterthought.
 * TODO(content): add job context (type of business, scope of work) to the
 * older five once Thermopair confirms it.
 */
const WORK = [
  {
    src: "rtu-rheem-commercial.jpg",
    alt: "Rheem commercial rooftop packaged HVAC unit installed on a flat membrane roof",
    caption: "Commercial rooftop unit",
  },
  {
    src: "work-1.jpg",
    alt: "Rooftop commercial HVAC condensing units mounted on steel rails",
    caption: "Rooftop commercial HVAC units",
  },
  {
    src: "kitchen-exhaust-fans.jpg",
    alt: "Two stainless steel upblast kitchen exhaust fans on roof curbs",
    caption: "Kitchen exhaust fans",
  },
  {
    src: "work-3.jpg",
    alt: "Overhead view of a fenced rooftop refrigeration condenser with four fans",
    caption: "Refrigeration condenser",
  },
  {
    src: "mini-split-condenser.jpg",
    alt: "LG mini split outdoor condenser mounted on a raised roof stand",
    caption: "Mini split condenser",
  },
  {
    src: "work-4.jpg",
    alt: "Commercial store interior with refrigerated display cases along the walls",
    caption: "Commercial refrigeration in a retail space",
  },
  {
    src: "condensing-units-restaurant.jpg",
    alt: "Two commercial condensing units set on timber sleepers above a restaurant",
    caption: "Restaurant condensing units",
  },
  {
    src: "work-5.jpg",
    alt: "Rows of low refrigerated display freezers in a commercial space",
    caption: "Refrigerated display cases",
  },
  {
    src: "rooftop-mini-splits-rtu.jpg",
    alt: "Mini split condensers and a packaged rooftop unit on a shopping plaza roof",
    caption: "Plaza rooftop install",
  },
  {
    src: "work-2.jpg",
    alt: "Large rooftop condensing unit on a steel frame",
    caption: "Commercial condensing unit",
  },
];

export default function RecentWork() {
  return (
    <section id="work" aria-labelledby="work-title" className="bg-white py-16 md:py-24">
      <div className={container}>
        <SectionHeading
          id="work-title"
          eyebrow="Recent work"
          title="Real jobs, real equipment"
          lead="A look at commercial HVAC and refrigeration work by the Thermopair team."
        />
        {/* 10 tiles: 5 rows of 2 on phones, 2 rows of 5 from lg — no stranded
            last row at either end. Square crop suits the square originals. */}
        <ul className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-5">
          {WORK.map((w) => (
            <li key={w.src}>
              <figure>
                <div className="relative aspect-square overflow-hidden bg-steel-100">
                  <Image
                    src={`${BASE}/thermopair/work/${w.src}`}
                    alt={w.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2 font-body text-[15px] leading-[1.4] text-steel-600">{w.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
