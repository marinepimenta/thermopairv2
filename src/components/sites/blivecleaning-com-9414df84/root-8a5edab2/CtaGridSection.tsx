const ASSET_BASE =
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/sites/blivecleaning-com-9414df84/root-8a5edab2/images`;

export default function CtaGridSection() {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid w-full max-w-[1320px] gap-5 px-5 md:px-8 lg:grid-cols-3 lg:grid-rows-2">
        {/* Tile 1 - text CTA card (dark accent moment) */}
        <div
          className="reveal flex min-h-[300px] flex-col justify-center rounded-[28px] overflow-hidden bg-[#131313] px-6 py-8 md:px-10 md:py-12 lg:col-span-1 lg:row-span-2 lg:min-h-[340px]"
          style={{ "--i": 0 } as React.CSSProperties}
        >
          <h2 className="font-heading text-[clamp(1.5rem,2.2vw,2rem)] font-medium leading-[1.2] text-white">
            <span className="block">
              Need heating or cooling help? We&rsquo;re on it.
            </span>
            <span className="mt-6 block">
              Book your visit with us today!
            </span>
          </h2>
          <a
            href="#schedule-service"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-thermo-orange px-7 py-4 font-body text-[14px] font-semibold uppercase tracking-[0.06em] text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-thermo-orange-deep w-fit"
          >
            Schedule Service
          </a>
        </div>

        {/* Tile 2 - photo tile with headline */}
        <div
          className="reveal group relative min-h-[300px] overflow-hidden rounded-[28px] ring-1 ring-black/5 lg:col-span-2 lg:row-span-1 lg:min-h-[340px]"
          style={{ "--i": 1 } as React.CSSProperties}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${ASSET_BASE}/hvac/technician-plant.jpg)` }}
          />
          {/* Dois scrims: um vertical para assentar a foto, outro da esquerda
              para o texto, que cai sobre a área clara do capacete. */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
          <h2 className="absolute bottom-6 left-6 right-6 font-heading text-[clamp(1.75rem,3.4vw,3rem)] font-medium leading-[1.1] text-white max-w-[16ch] md:bottom-10 md:left-10 md:right-10">
            At Thermopair, we care for your comfort.
          </h2>
        </div>

        {/* Tiles 3 & 4 - plain photo tiles */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-2">
          <div
            role="img"
            aria-label="Thermopair service van"
            className="reveal group relative min-h-[240px] overflow-hidden rounded-[28px] ring-1 ring-black/5 lg:min-h-[340px]"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: `url(${ASSET_BASE}/hvac/service-van.jpg)`,
              }}
            />
          </div>
          <div
            role="img"
            aria-label="Thermopair storefront window"
            className="reveal group relative min-h-[240px] overflow-hidden rounded-[28px] ring-1 ring-black/5 lg:min-h-[340px]"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: `url(${ASSET_BASE}/hvac/storefront-window.jpg)`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
