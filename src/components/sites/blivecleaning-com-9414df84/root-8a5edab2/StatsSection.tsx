"use client";

import { useEffect, useRef, useState } from "react";

const ASSET_BASE =
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/sites/blivecleaning-com-9414df84/root-8a5edab2/images`;

// PLACEHOLDER: replace with Thermopair's real figures before launch.
const STATS = [
  { value: 0, suffix: "K+", label: "Homes Served" },
  { value: 0, suffix: "+", label: "Years Experience" },
  { value: 0, suffix: "%", label: "Repairs Completed" },
  { value: 0, suffix: "+", label: "Five Star Reviews" },
];

// Crosshair hairlines for a 2x2 grid: each cell borders only the
// neighbor(s) above/left of it, so the panel reads as one data grid.
const DIVIDER_CLASSES = [
  "",
  "border-t border-white/10 sm:border-t-0 sm:border-l",
  "border-t border-white/10",
  "border-t border-white/10 sm:border-l",
];

function easeOutQuad(t: number) {
  return 1 - (1 - t) * (1 - t);
}

export default function StatsSection() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);
  const [counts, setCounts] = useState<number[]>(STATS.map(() => 0));

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const animate = () => {
      const start = performance.now();
      const duration = 2000;

      const step = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutQuad(progress);
        setCounts(STATS.map((s) => Math.round(s.value * eased)));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animate();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-24 md:py-32 lg:py-40">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-10 px-5 md:px-8 lg:flex-row lg:items-stretch lg:gap-16">
        <div className="flex flex-col gap-5 pt-10 lg:w-[520px] lg:shrink-0 lg:justify-center lg:pt-0">
          <h3
            className="reveal max-w-[20ch] text-balance font-heading text-[clamp(2rem,4.4vw,3.5rem)] font-medium leading-[1.06] text-white"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            Comfort is closer <br />
            than you think.
          </h3>
          <p
            className="reveal max-w-[56ch] font-body text-[17px] leading-[1.65] text-thermo-mist/70 md:text-[19px]"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            Wanderson started Thermopair after living through a failed
            heating system and service that never called back. We built the
            company we wished we had found: quick to answer, straight about
            cost, and careful with your home or business as if it were our
            own.
          </p>
        </div>

        <div
          ref={cardRef}
          className="reveal min-h-0 rounded-[28px] bg-white/[0.04] px-8 py-12 ring-1 ring-white/10 lg:min-h-[580px] lg:flex-1 lg:px-12 lg:py-[60px]"
          style={{ "--i": 2 } as React.CSSProperties}
        >
          <div className="grid h-full grid-cols-1 place-content-center sm:grid-cols-2">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-4 py-8 text-center sm:px-8 sm:py-10 ${DIVIDER_CLASSES[i]}`}
              >
                <div className="text-grad-signature font-heading text-[clamp(3rem,6vw,5.5rem)] font-medium leading-none">
                  {counts[i]}
                  {stat.suffix}
                </div>
                <div className="mt-3 font-body text-[13px] uppercase tracking-[0.16em] text-thermo-mist/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
