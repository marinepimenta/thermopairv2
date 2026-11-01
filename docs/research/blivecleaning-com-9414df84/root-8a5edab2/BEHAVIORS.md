# blivecleaning.com — Behavior Bible (/)

## Global
- **No smooth-scroll library.** Checked for Lenis (`.lenis`, `window.Lenis`) and Locomotive — both absent. Native scrolling.
- No scroll-snap containers.
- WP Rocket lazy-loads both `<img>` (`data-lazy-src`) and Elementor CSS backgrounds (class `e-lazyloaded` added on viewport entry). In the clone, images load eagerly/normally — this is a fidelity improvement, not a regression.
- Global transition on the header container: `background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s`.

## Scroll sweep findings
| Section | Behavior | Trigger | Implementation |
|---|---|---|---|
| Header | Stays pinned to top. Captured computed styles at scrollY 0 and 600 — **background, height, shadow, and transform are identical** in both states. The only change is the pinning itself. | Elementor sticky | `position: sticky; top: 0; z-50` — no scrolled-state restyle needed |
| Badge strip | `animated fadeIn` class present on the container | viewport entry | optional `blive-fade-up` keyframe (defined in globals.css) |
| Stats counters | Numbers count up 0 → target. At rest before entry they read `0 K+`, `0 +`, `0 %`, `0 +`; final values are **2K+, 7+, 98%, 140+** | viewport entry, fires once | `IntersectionObserver` threshold 0.3 + rAF ease-out over 2000ms |
| Service cards | Overlap upward into the green intro section above them | static layout | `relative z-10 -mt-32 lg:-mt-40` |

## Click sweep findings
| Element | Behavior |
|---|---|
| FAQ accordion | Click-driven, **all items closed on page load** — an inline script explicitly removes `elementor-active` and sets tab content to `display:none` 100ms after ready. One open at a time. |
| Testimonials | Trustindex third-party review slider (carousel). Reimplemented as a click-driven dot carousel with a 300ms opacity fade. |
| Nav dropdowns | Open on hover, not click. Underline pointer effect (`e--pointer-underline`) with a slide-in animation. |
| Service cards / CTA tiles | Whole tile is a link; hover zooms the photo. |

## Hover sweep findings
- Nav links: text → `#50C970`, 2px green underline slides in from the left, `transition 0.3s`.
- Buttons (black / yellow): opacity dip, `transition-opacity`.
- Footer links: underline on hover.
- Area-list city links: text → `#50C970`.
- Photo tiles: inner background layer `scale(1.05)`, `transition-transform 500ms`, clipped by `overflow-hidden`.
- FAQ trigger: question text → `#50C970`; the `+` icon rotates 45° to a `×` when open.

## Responsive sweep
Elementor default breakpoints apply: **mobile ≤767px, tablet 768–1024px, desktop ≥1025px** (mapped to Tailwind `md:` = 768 and `lg:` = 1024).

Layout changes at each width:
- **Header** — below 1025px the nav list and the black CTA collapse into a hamburger panel; the yellow phone button stays. Header height 133px → 84px below 768px.
- **Hero** — two columns → stacked; the sofa photo becomes a full-width band (420px tablet / 300px mobile); h1 64px → 48px → 40px.
- **Quote form** — 3-up and 2-up field rows collapse to a single column below 768px.
- **About (green)** — photo column becomes a full-width band above the copy.
- **Areas We Serve** — intro moves above the lists; city lists stay two-up.
- **Testimonials** — photo moves above the carousel.
- **Service cards** — 4 → 2 → 1 column.
- **Stats** — left copy stacks above the dark card; the 2×2 stat grid becomes 1 column on mobile.
- **CTA grid** — 3-column mosaic becomes a single stacked column.
- **FAQ** — heading moves above the accordion.
- **Footer** — 3 link columns → 1.

## Elements deliberately NOT built
- The "Blog & Learning Resources" section carries `elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile` (height 0 at every breakpoint) — hidden on the live site.
- A duplicate mobile sticky call bar (`elementor-hidden-desktop elementor-hidden-tablet`, height 0) — superseded by the header's responsive treatment.
- Third-party widgets: Trustindex badge, Google Tag Manager, Lucky Orange, Gift Up, Gravity Forms runtime.
