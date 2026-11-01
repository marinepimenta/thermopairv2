# Shared conventions for all Blive clone components

- Component dir: `src/components/sites/blivecleaning-com-9414df84/root-8a5edab2/`
- Asset base: `/sites/blivecleaning-com-9414df84/root-8a5edab2/images/<file>`
- Fonts (Tailwind v4 theme tokens already registered in `src/app/globals.css`):
  `font-sofia` (Sofia Sans, h2–h6), `font-sofia-sc` (Sofia Sans Semi Condensed, h1), `font-work` (Work Sans, body/buttons)
- Colors: `blive-green` #50C970, `blive-lime` #BDE872, `blive-yellow` #FFBF40,
  `blive-dark` #081E19, `blive-cream` #F4F2EF, `blive-cream-2` #F4F2EE, `blive-ink` #333333
  Use as `bg-blive-green`, `text-blive-lime`, etc.
- Content container: `mx-auto w-full max-w-[1320px] px-5`
- Breakpoints (Elementor defaults): mobile ≤767px, tablet 768–1024px, desktop ≥1025px.
  Use Tailwind `md:` (768) and `lg:` (1024) to match.
- Buttons: `.blive-btn` pattern — `inline-block px-6 py-3 text-[15px] font-medium uppercase leading-[15px] font-work text-center`
  - Primary (black): `bg-black text-white`
  - Phone (yellow): `bg-blive-yellow text-black`
- All images use `next/image` with explicit width/height, or a plain `<img>` where the
  original was a CSS background (then use a `bg-[url(...)] bg-cover bg-center` div).
- Every component is a server component unless it needs state; add `"use client"` only then.
- Verify `npx tsc --noEmit` passes before finishing.
