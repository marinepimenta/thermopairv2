import { MapPin } from "lucide-react";

import { cn } from "@/lib/utils";
import { PHONE_DISPLAY, PHONE_HREF, SectionHeading, container } from "./ui";

/** Service area confirmed by Thermopair. */
const TOWNS = [
  "Worcester",
  "Shrewsbury",
  "Marlborough",
  "Leominster",
  "Fitchburg",
  "Lancaster",
  "Westminster",
  "Gardner",
  "Lunenburg",
];

export default function ServiceArea() {
  return (
    <section id="service-area" aria-labelledby="area-title" className="border-t border-steel-200 bg-paper py-16 md:py-24">
      <div className={cn(container, "grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16")}>
        <div>
          <SectionHeading
            id="area-title"
            eyebrow="Service area"
            title="Serving Worcester County and nearby towns"
            lead="We repair and maintain heating, cooling and refrigeration systems for homes and businesses across Central Massachusetts."
          />
          <div className="mt-6 flex items-start gap-3 rounded-lg border border-steel-200 bg-white p-5">
            <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-heat-text" />
            <p className="font-body text-[16px] leading-[1.55] text-steel-700">
              Don’t see your town? Call{" "}
              <a href={PHONE_HREF} className="tp-num font-semibold text-ink underline underline-offset-4">
                {PHONE_DISPLAY}
              </a>{" "}
              — we’ll tell you right away if we can help.
            </p>
          </div>
        </div>

        <div>
          <h3 className="border-b border-steel-200 pb-3 font-heading text-[17px] font-semibold text-ink">
            Towns we serve
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
            {TOWNS.map((town) => (
              <li key={town} className="flex items-center gap-2 font-body text-[17px] text-steel-700">
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-heat" />
                {town}
              </li>
            ))}
          </ul>
          <p className="mt-5 font-body text-[16px] text-steel-600">
            …and throughout Worcester County.
          </p>
        </div>
      </div>
    </section>
  );
}
