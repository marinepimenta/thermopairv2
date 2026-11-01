const ASSET_BASE =
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/sites/blivecleaning-com-9414df84/root-8a5edab2/images`;

export default function AboutGreenSection() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-12 px-5 md:px-8 lg:flex-row lg:items-center lg:gap-16">
        <div
          className="reveal relative w-full lg:w-[46%]"
          style={{ "--i": 0 } as React.CSSProperties}
        >
          <div className="absolute -bottom-8 -left-8 h-[60%] w-[60%] -z-10 grad-signature opacity-20 blur-[60px]" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] ring-1 ring-white/10 lg:rounded-[36px]">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${ASSET_BASE}/hvac/technician-split-install.jpg)`,
              }}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center lg:w-[54%]">
          <h5
            className="reveal mb-6 font-body text-[12px] font-medium uppercase tracking-[0.22em] text-thermo-orange"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            <span className="block">THERMOPAIR IS A TRUSTED PROVIDER OF</span>
            <span className="block">HEATING AND COOLING CARE IN MA</span>
          </h5>

          <h2
            className="reveal mb-6 max-w-[20ch] text-balance font-heading text-[clamp(2rem,4.4vw,3.5rem)] font-medium leading-[1.06] text-white"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            Stay warm in winter, cool in summer, and{" "}
            <span className="italic">worry-free</span>
          </h2>

          <p
            className="reveal mb-10 max-w-[56ch] font-body text-[17px] leading-[1.65] text-thermo-mist/70 md:text-[19px]"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            At Thermopair, we install, repair, and maintain heating and
            cooling systems for homes and businesses across Massachusetts.
            From a furnace that quit on the coldest night to a rooftop unit
            that keeps your restaurant running, we show up quickly, explain
            the fix in plain language, and tell you what it costs before we
            start.
          </p>

          <div className="reveal" style={{ "--i": 4 } as React.CSSProperties}>
            <a
              href="/about-us/"
              className="inline-flex items-center justify-center rounded-full bg-thermo-orange px-7 py-4 font-body text-[14px] font-semibold uppercase tracking-[0.06em] text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-thermo-orange-deep"
            >
              ABOUT US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
