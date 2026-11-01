# blivecleaning.com — Page Topology (/)

Platform: WordPress 7.0.4 + Elementor + Hello Elementor theme. No smooth-scroll library (no Lenis/Locomotive).
Desktop page height at 1440px: 8893px. Content container max-width: 1320px (some sections 1340px).

## Design tokens
| Token | Value |
|---|---|
| Brand green | `rgb(80,201,112)` #50C970 |
| Lime accent | `rgb(189,232,114)` #BDE872 |
| Yellow (phone CTA) | `rgb(255,191,64)` #FFBF40 |
| Dark green (copyright / stats card) | `rgb(8,30,25)` #081E19 |
| Cream (form bg) | `rgb(244,242,239)` #F4F2EF |
| Cream 2 (areas bg) | `rgb(244,242,238)` #F4F2EE |
| Body text | `rgb(51,51,51)` #333 |
| Muted (FAQ answers) | `rgb(111,111,111)` #6F6F6F |

Fonts: `Sofia Sans Semi Condensed` (h1), `Sofia Sans` (h2–h6), `Work Sans` (body/buttons).

## Section order (top → bottom)
| # | Name | Component | top/h @1440 | Background |
|---|---|---|---|---|
| 0 | Sticky header | `SiteHeader` | 0 / 133 | white, `position: fixed` |
| 1 | Hero | `HeroSection` | 133 / 889 | white + sofa photo right |
| 2 | Quote form (#request-a-quote) | `QuoteFormSection` | 1042 / 658 | #F4F2EF |
| 3 | Certification badge strip | `BadgesStrip` | 1701 / 223 | white |
| 4 | About (green) | `AboutGreenSection` | 1924 / 875 | #50C970 + photo |
| 5 | Two features + hand image | `FeaturesHandSection` | 2799 / 495 | white |
| 6 | Areas We Serve | `AreasWeServeSection` | 3294 / 830 | #F4F2EE |
| 7 | Testimonials | `TestimonialsSection` | 4124 / 868 | white + photo |
| 8 | Choose your service (green) | `ServicesIntroSection` | 4992 / 500 | #50C970 |
| 9 | Service cards (overlap up) | `ServiceCards` | 5272 / 408 | photo tiles |
| 10 | Stats / "Get some relief" | `StatsSection` | 5760 / 660 | white + #081E19 card |
| 11 | CTA photo grid | `CtaGridSection` | 6420 / 730 | 3 photo tiles |
| 12 | FAQ accordion | `FaqSection` | 7150 / 974 | white |
| 13 | Footer | `SiteFooter` | 8128 / 848 | #50C970, copyright bar #081E19 |

Overlay: fixed back-to-top button, bottom-right, z-index 20, 56px.
Hidden at all breakpoints (do not build): blog/resources section, mobile sticky bar duplicate.

## Interaction model
Every section is **static** except:
- `SiteHeader` — scroll-driven sticky (Elementor sticky-effects), plus hover dropdown menus.
- `FaqSection` — click-driven accordion, all items collapsed on load (a script force-closes them).
- `StatsSection` — counters animate 0 → target when scrolled into view.
- `TestimonialsSection` — Trustindex review slider (auto/manual carousel).
