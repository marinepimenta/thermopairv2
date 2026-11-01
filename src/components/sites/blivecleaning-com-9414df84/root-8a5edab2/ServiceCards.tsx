const ASSET_BASE =
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/sites/blivecleaning-com-9414df84/root-8a5edab2/images`;

const CARDS = [
  {
    title: ["Heating", "Installation"],
    href: "/heating-installation/",
    image: "hvac/technician-ceiling-install.jpg",
  },
  {
    title: ["Heating", "Repair"],
    href: "/heating-repair/",
    image: "hvac/technician-diagnostics.jpg",
  },
  {
    title: ["Air", "Conditioning"],
    href: "/air-conditioning/",
    image: "hvac/technician-split-install.jpg",
  },
  {
    title: ["Commercial", "HVAC"],
    href: "/commercial-hvac/",
    image: "hvac/technician-plant.jpg",
  },
];

export default function ServiceCards() {
  return (
    <section className="relative z-10 -mt-32 w-full lg:-mt-40">
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-5 px-5 md:px-8 sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map((card, i) => (
          <a
            key={card.href}
            href={card.href}
            className="reveal group relative block h-[280px] overflow-hidden rounded-[24px] ring-1 ring-white/10 md:h-[340px] lg:h-[388px]"
            style={{ "--i": i } as React.CSSProperties}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${ASSET_BASE}/${card.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b10] via-[#0b0b10]/35 to-transparent" />
            <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-300 group-hover:border-thermo-orange group-hover:bg-thermo-orange">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </div>
            <h3 className="absolute bottom-[28px] left-6 right-6 max-w-[255px] font-heading text-[clamp(1.25rem,1.6vw,1.6rem)] font-medium leading-[1.1] text-white">
              <span className="block">{card.title[0]}</span>
              <span className="block">{card.title[1]}</span>
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
}
