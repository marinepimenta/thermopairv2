const greaterBostonCities = [
  "Boston",
  "Cambridge",
  "Somerville",
  "Newton",
  "Brookline",
  "Quincy",
  "Waltham",
  "Medford",
  "Malden",
  "Everett",
  "Revere",
  "Lynn",
  "Watertown",
  "Dedham",
  "Needham",
  "Milton",
  "Arlington",
  "Belmont",
  "Chelsea",
  "Winthrop",
];

const centralNorthShoreCities = [
  "Worcester",
  "Framingham",
  "Natick",
  "Marlborough",
  "Woburn",
  "Salem",
  "Peabody",
  "Beverly",
  "Danvers",
  "Andover",
  "Lowell",
  "Leominster",
  "Fitchburg",
  "Gloucester",
  "Ipswich",
];

function CityList({
  heading,
  cities,
  index,
}: {
  heading: string;
  cities: string[];
  index: number;
}) {
  return (
    <div
      className="reveal"
      style={{ "--i": index } as React.CSSProperties}
    >
      <h3 className="font-heading text-[clamp(1.15rem,1.6vw,1.45rem)] font-medium leading-[1.15] text-thermo-ink">
        {heading}
      </h3>
      <div className="mt-5 mb-6 h-px w-full bg-black/8" />
      <ul className="grid grid-cols-2 gap-x-8 gap-y-3.5">
        {cities.map((city) => (
          <li key={city}>
            <a
              href="#"
              className="link-underline font-body text-[15px] text-thermo-graphite transition-colors hover:text-thermo-orange"
            >
              {city}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AreasWeServeSection() {
  return (
    <section className="w-full px-5 py-24 md:px-8 md:py-32 lg:py-40">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col lg:flex-row lg:gap-20">
        <div
          className="reveal mb-10 lg:mb-0 lg:w-[34%]"
          style={{ "--i": 0 } as React.CSSProperties}
        >
          <h2 className="mb-5 max-w-[16ch] text-balance font-heading text-[clamp(2rem,4.4vw,3.5rem)] font-medium leading-[1.06] text-thermo-ink">
            Areas We Serve
          </h2>
          <p className="max-w-[56ch] font-body text-[17px] leading-[1.65] text-thermo-graphite md:text-[19px]">
            From Greater Boston to Central Massachusetts and the North
            Shore, we&rsquo;re there when your heating or cooling needs
            attention.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:flex-1">
          <CityList
            heading="Greater Boston:"
            cities={greaterBostonCities}
            index={1}
          />
          <CityList
            heading="Central & North Shore:"
            cities={centralNorthShoreCities}
            index={2}
          />
        </div>
      </div>
    </section>
  );
}
