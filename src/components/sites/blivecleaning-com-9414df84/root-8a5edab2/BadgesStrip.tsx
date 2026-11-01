// PLACEHOLDER: swap for Thermopair's real certification logos once confirmed.

const BADGES = [
  "Credential 1",
  "Credential 2",
  "Credential 3",
  "Credential 4",
  "Credential 5",
  "Credential 6",
  "Credential 7",
  "Credential 8",
  "Credential 9",
];

export default function BadgesStrip() {
  return (
    <section className="w-full py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8">
        <div
          className="reveal border-t border-black/8 pt-12"
          style={{ "--i": 0 } as React.CSSProperties}
        >
          <div className="flex flex-row flex-wrap items-center justify-center gap-3 md:gap-4">
            {BADGES.map((badge) => (
              <div
                key={badge}
                className="rounded-full border border-dashed border-thermo-slate/40 bg-transparent px-4 py-2 text-center font-body text-[11px] uppercase leading-tight tracking-[0.12em] text-thermo-slate md:px-5 md:py-2.5 md:text-[12px]"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
