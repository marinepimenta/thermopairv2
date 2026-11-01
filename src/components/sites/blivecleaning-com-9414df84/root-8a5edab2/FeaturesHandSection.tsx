import Image from "next/image";

const ASSET_BASE =
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/sites/blivecleaning-com-9414df84/root-8a5edab2/images`;

export default function FeaturesHandSection() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-12 px-5 md:px-8 lg:flex-row lg:items-center lg:gap-16">
        <div
          className="reveal w-full lg:w-[40%]"
          style={{ "--i": 0 } as React.CSSProperties}
        >
          <Image
            src={`${ASSET_BASE}/hvac/technician-cap.jpg`}
            alt="Thermopair technician on site"
            width={300}
            height={382}
            className="aspect-[3/4] w-full rounded-[28px] object-cover ring-1 ring-white/10 lg:w-auto"
          />
        </div>

        <div className="flex flex-1 flex-col gap-10 lg:grid lg:grid-cols-2 lg:gap-10">
          <div
            className="reveal border-t border-white/10 pt-8"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            <h3 className="mb-3 font-heading text-[clamp(1.35rem,2.2vw,1.9rem)] font-medium leading-[1.15] text-white">
              Trained &amp; experienced technicians
            </h3>
            <p className="max-w-[56ch] font-body text-[17px] leading-[1.65] text-thermo-mist/70 md:text-[19px]">
              Our technicians are trained, licensed, and experienced, so the
              job gets done right the first time — no callbacks, no
              guesswork.
            </p>
          </div>

          <div
            className="reveal border-t border-white/10 pt-8"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            <h3 className="mb-3 font-heading text-[clamp(1.35rem,2.2vw,1.9rem)] font-medium leading-[1.15] text-white">
              100% <br />
              Guaranteed
            </h3>
            <p className="max-w-[56ch] font-body text-[17px] leading-[1.65] text-thermo-mist/70 md:text-[19px]">
              We stand behind our work. If something isn&apos;t right after
              we leave, we come back and fix it — that is our guarantee to
              you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
