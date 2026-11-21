---
name: Thermopair HVAC-R
description: Thermopair Climate Care on the web: brand gradients and purple-led actions over Brand Black and paper, photo-first and plain like an established local service company, built strictly from the official palette, typefaces and logo rules.
colors:
  purple: "#694cfc"
  purple-deep: "#5021e0"
  purple-soft: "#9487fe"
  purple-pale: "#b7b2ff"
  purple-ink: "#2a1180"
  purple-night: "#1d0d5c"
  purple-dusk: "#3b1aa8"
  heat: "#ff6512"
  heat-hover: "#f04806"
  heat-soft: "#ff8537"
  heat-tint: "#ffb170"
  heat-text: "#c2410c"
  heat-pale: "#fff1e8"
  ink: "#131313"
  steel-950: "#131313"
  steel-900: "#131313"
  steel-800: "#2c2e33"
  steel-700: "#2c2e33"
  steel-600: "#4f535b"
  steel-400: "#8f97a2"
  steel-300: "#c9cdd2"
  steel-200: "#e1e3e6"
  steel-100: "#ebecee"
  paper: "#f8f9fa"
  white: "#ffffff"
  ok: "#15803d"
  err: "#b91c1c"
typography:
  display:
    fontFamily: "Sentient, 'Libre Baskerville', Georgia, serif"
    fontSize: "clamp(2.25rem, 4.6vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Sentient, 'Libre Baskerville', Georgia, serif"
    fontSize: "clamp(1.875rem, 3.2vw, 2.625rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.005em"
  title:
    fontFamily: "Sentient, 'Libre Baskerville', Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
  title-sm:
    fontFamily: "Sentient, 'Libre Baskerville', Georgia, serif"
    fontSize: "1.1875rem"
    fontWeight: 700
    lineHeight: 1.3
  title-lg:
    fontFamily: "Sentient, 'Libre Baskerville', Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Figtree, Inter, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: "Figtree, Inter, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
  lead:
    fontFamily: "Figtree, Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  subhead:
    fontFamily: "Figtree, Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.4
  label:
    fontFamily: "Figtree, Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.08em"
rounded:
  none: "0px"
  control: "4px"
spacing:
  section-y: "96px"
  section-y-mobile: "64px"
  gutter: "32px"
  gutter-mobile: "16px"
components:
  button-primary:
    backgroundColor: "{colors.purple}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "0 28px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.purple-deep}"
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 28px"
    height: "48px"
  button-outline:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 28px"
    height: "48px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 14px"
    height: "48px"
---

# Design System: Thermopair HVAC-R

## Overview

**Creative North Star: "The Service Truck"**

Thermopair looks like its own van from the brand guideline: a black body washed with a purple-to-orange glow, a big serif line, a clear phone number on the side. The big bands are Brand Black lit by the brand's gradients, alternating with white and paper sections where content is read. Large real photographs of technicians and equipment carry the credibility; type and thin rules carry the information. The voice is the brand's own: warm and caring in Sentient headlines, clear and functional in Figtree body, built to be read quickly by someone who may have a dead furnace or a warm walk-in cooler.

**Brand foundations (Visual Identity Guidelines, ANDE studio).** Modern, clean, reliable and professional. Two archetypes drive the type pairing: the *Caregiver* (Sentient serif) and the *Hero* (Figtree sans). The tagline lockup is "Climate Care". The guideline's gradients translate temperature control (warm orange to deep purple), so the site uses them literally: warm glows where heat is the subject, purple glows where cold is.

**Key Characteristics:**
- Purple and orange mixed through brand gradients on dark bands; no large flat-orange fills.
- Brand Purple carries actions; orange is the warm accent (eyebrows on dark, stars, step labels, glows).
- Photography runs full-bleed beside a gradient or neutral block.
- Ruled lists and columns instead of cards; icons only where they carry meaning.
- Flat interface chrome: no shadows, no glass, no decorative shapes; depth comes from the gradients and band changes.

**Alignment status (guideline vs. current code):**
- Done: Sentient headings (Regular, Medium, Bold from `public/fonts`), Figtree body.
- Done: `ink` and `steel-*` tokens resolve to the brand neutrals plus two palette-derived text tints (#4f535b, #c9cdd2).
- Done: brand gradients built in CSS from the palette with the guideline's film grain (`tp-grad-hero`, `tp-grad-cool`, `tp-grad-warm`, `tp-grad-form` in `globals.css`).
- Done: header and footer use the horizontal gradient logo (the orange-to-purple lockup seen on the guideline's uniforms and van).
- Open: real team and founder photography (client dependency). The About van image is the guideline's CGI mockup and prints a placeholder phone number, (978) 555-0143.

## Colors

The official palette is orange and purple highlights over black and light-grey bases, with three secondary greys. Digital uses HEX/RGB; print uses CMYK/Pantone (orange 0/66/91/0, purple 77/71/0/0).

### Primary
- **Brand Purple** (#694cfc): Primary action color (white label, about 5.2:1) and the cool side of every gradient. Hover and pressed: Purple Deep (#5021e0), which is also the text-link color on light surfaces (about 7.6:1). Purple Soft (#9487fe) appears only inside gradients; Purple Pale (#b7b2ff) is also the secondary text color on purple surfaces (about 8:1). Purple Ink, Night and Dusk are deep shades of the brand purple used only as the base of the warm gradient.

### Secondary
- **Heat Orange** (#ff6512): Warm accent. Glows inside gradients (never above 0.6 alpha under text), eyebrows on dark surfaces, review stars, the underline of the linked trust item. Never a large flat fill, never a text or button color on white.
- **Heat Text** (#c2410c): Orange as small text on white and paper, used only for step labels ("Step 1").
- **Heat Pale** (#fff1e8): Checked-option and emergency-note tint inside the form.
- **Heat Hover / Soft / Tint** (#f04806, #ff8537, #ffb170): palette tints, available inside gradients.

### Neutral
- **Ink** (Brand Black #131313): text on light surfaces, base of every gradient band, utility bar, footer, mobile call bar, 2px rules.
- **Steel 800 / 700** (Brand Graphite): strong body text and navigation on light surfaces.
- **Steel 600** (graphite-to-slate tint, about 8:1 on white): secondary body text on light surfaces.
- **Steel 400** (Brand Slate): secondary text on dark only (fails as text on white).
- **Steel 300 / 200 / 100**: light text on dark, hairlines on light, Brand Mist fills.
- **Paper** (Brand Paper) and **White**: alternate light bands and the form panel.
- **OK Green** (#15803d), **Error Red** (#b91c1c): form feedback only; not brand colors.

### Named Rules
**The Mixed Temperature Rule.** Orange and purple appear together, the way the brand's gradients mix them. No section is painted flat orange; orange lives as glow and accent, purple as action and depth.

**The Contrast-Under-Glow Rule.** Text on gradient bands is white or mist on black-based bands, and white or Purple Pale on the purple band (never grey on color), and it sits over the dark or purple part of the field. Orange glows stay at or below 0.6 alpha and are placed in corners away from body copy (white on full #ff6512 is about 3:1).

**The Brand Palette Rule.** New colors, gradients and tints come only from the official palette. No yellow, no cold blue, no off-palette accents.

## Typography

**Headline Font:** Sentient (with Libre Baskerville, Georgia, serif)
**Body Font:** Figtree (with Inter, system-ui, sans-serif)

**Character:** Sentient is the warm, human voice of the "Caregiver"; Figtree is the clear, functional voice of the "Hero". Libre Baskerville and Inter are the manual's alternates, used only when the primary faces are unavailable.

### Hierarchy
- **Display** (Sentient Bold, clamp(2.25rem, 4.6vw, 3.5rem), 1.08): page H1 only; max about 18–22ch.
- **Headline** (Sentient Medium, clamp(1.875rem, 3.2vw, 2.625rem), 1.12): every section H2, including the path chooser.
- **Title** (Sentient Bold, 19–24px, 1.2–1.3): column titles, list titles, trust items, FAQ questions at 18px.
- **Body** (Figtree Regular, 17px, 1.65): paragraphs and list text; leads 18px; max 56–68ch.
- **Small** (Figtree, 15px): captions, meta, "Google review".
- **Subhead** (Figtree Medium/Semibold, 16px): buttons, link labels.
- **Label** (Figtree Semibold, 14px, 0.08em, uppercase): eyebrows (see the Earned Eyebrow Rule).

### Named Rules
**The Two Voices Rule.** Sentient speaks (headlines and titles); Figtree informs (everything else). No third family.

**The Earned Eyebrow Rule.** The uppercase label above a heading is rendered only where it orients a visitor who lands with a specific need: the home hero, the services hub and service-page heroes, and the commercial refrigeration section. Elsewhere the label stays in the data but is not drawn. No section numbers.

## Layout

A single 1240px content column (16/24/32px gutters) with section padding of 64px on mobile and 96px from md up. Heroes and the refrigeration, maintenance and about sections are two equal columns on large screens: text on a gradient or dark panel aligned to the column edge, a photo flush to the viewport edge on the other side; on small screens text first, photo below at 4:3. Everything else is a plain grid: two columns for the path chooser and the home services list, three for hub lists and reviews, four for process steps.

Home order: hero (gradient) with trust strip (black) → path chooser (white) → commercial refrigeration (cool gradient) → recent work (white) → services (paper) → process (white) → maintenance (warm gradient) → reviews (paper) → about (black) → service area (white) → FAQ (paper) → request form (gradient) → footer (black).

A sticky white header (68–76px) carries the gradient logo, one row of text links, the phone and a purple "Request service" button; a 40px black utility bar sits above it on md and up. On phones a fixed black bar holds a purple "Call now" (with phone icon) and an outline "Request service"; the page reserves 76px under the content.

## Elevation & Depth

No shadows. Depth comes from the brand gradients on dark bands, from band changes, from 1px hairlines between list items and from 2px ink rules above columns and lists.

### Brand gradients
- **Hero** (`tp-grad-hero`): Brand Black, a large purple glow rising from the lower right of the text panel, an orange core in the bottom-right corner, a faint purple wash top-left.
- **Cool** (`tp-grad-cool`): Brand Black with a purple arc rising from the bottom. Used for commercial refrigeration.
- **Warm** (`tp-grad-warm`): deep purple diagonal (#1d0d5c → #5021e0) with an orange glow in the bottom-right corner. Used for maintenance.
- **Form** (`tp-grad-form`): Brand Black, purple top-left, orange-into-purple bottom-right behind the white form panel.
- All gradients carry the guideline's film grain as a tiled noise layer. Gradients are applied to the text panel, never under a photograph.

### Named Rules
**The Gradient-As-Surface Rule.** Gradients fill whole band panels only. Never on buttons, text, cards, borders or icons.

## Shapes

Mostly square. Photographs and bands have 0px radius and run edge to edge. Buttons and form fields use a 4px radius, the only radius in the system. No pills, circles, arches, blobs or decorative shapes. Rules are straight lines: 2px ink above a list or column, 1px between rows.

## Components

Firm and direct.

### Logo
- **Versions:** Horizontal, Vertical and Super-vertical, each with or without the "Climate Care" tagline; plus Symbol alone and Wordmark alone. The site uses the horizontal gradient lockup in the header (white) and footer (black).
- **Color:** On white or black, the gradient or primary orange lockup; on orange use purple, dark or white; on purple use orange, dark or white. Never pure black, never off-palette.
- **Clear space:** the height of the "o" (horizontal, vertical, wordmark) or a quarter of the symbol height (symbol, super-vertical).
- **Minimum size (screen):** symbol or wordmark 15px; horizontal with tagline 20px; vertical versions 40px; super-vertical with large symbol 75px.
- **Never:** change colors, proportions, spacing or typeface; deface it; place it on low contrast.

### Buttons
- **Shape:** 4px corners, 48px minimum height, 28px side padding, Figtree Semibold 16px.
- **Primary:** Brand Purple fill, white label; hover Purple Deep. On white, paper and flat black surfaces (header, mobile bar, form submit, closing CTA).
- **Light:** white fill, ink label; hover Mist. The primary action on gradient bands.
- **Outline on dark:** 1px white/60 border, white label; hover full white border and a faint white fill.
- **Outline on light:** 1px ink border, ink label; fills ink with white label on hover.
- **Icons in buttons:** a phone icon on every button that dials; a chevron on the reviews disclosure. Nothing else.

### Ruled lists (replace cards)
- **Service rows:** 2px ink rule (1px steel in the compact home variant), Sentient Bold title, Figtree description, then a purple-deep underlined "Learn more". The whole row is one link; hover underlines the title.
- **Path chooser rows:** each row is a link to the service that answers it, 48px tall, with a purple chevron on the right that nudges on hover.
- **Simple lists:** 1px rows (white 15–25% on dark) with 12–16px vertical padding; no bullets.

### Inputs / Fields
- **Style:** 48px tall, 1px steel 300 border, white fill, 4px radius, Figtree 16px.
- **Focus:** border turns ink plus a 3px ink outline (white on dark and gradient bands).
- **Error:** red border, red message beneath with a small alert icon, and a summary box on submit.
- **Choices:** radios and checkboxes use an ink accent; the checked option gets an ink border and Heat Pale fill.

### Navigation
- **Style:** Figtree Medium 15px links in graphite; hover underlines. The phone number is a plain semibold text link. The mobile menu is a bordered full-width list opened by a bordered 44px icon button.

### Reviews
- **Style:** masonry columns of verbatim reviews on paper, each under a 2px ink rule with orange stars. Six show; the rest sit behind a native disclosure labeled "Show N more reviews" / "Show fewer reviews".

### FAQ
- **Style:** native details/summary on a 2px ink top rule, 1px rows, Sentient Bold 18px question, and a bare plus icon that rotates 45° when open.

### Photography
- **Treatment:** full-bleed beside a color block, object-cover, no border, radius or overlay. Gallery tiles share a 4:5 ratio. Prefer real technicians, equipment and installations.

## Do's and Don'ts

### Do:
- **Do** mix purple and orange the way the brand gradients do, on dark bands, with text over the dark or purple part of the field.
- **Do** use Brand Purple for primary actions and white buttons on gradient bands.
- **Do** set headlines and titles in Sentient and everything else in Figtree.
- **Do** put a phone icon on every button that dials, and a chevron on rows that navigate.
- **Do** run photos to the viewport edge beside a gradient or neutral block, alternating sides.
- **Do** separate list items with 1px hairlines and top a list with a 2px ink rule.
- **Do** keep the phone number and "Request service" visible in the header and, on phones, the sticky bar, with calling as the primary action.
- **Do** use at most the 4px control radius, and 0 on images and bands.

### Don't:
- **Don't** paint large areas flat orange, or set white text on pure #ff6512.
- **Don't** put gradients on buttons, text, cards or icons, or under photographs.
- **Don't** use pure black (#000) or off-palette colors.
- **Don't** recolor, stretch, respace or retype the logo, or place it on a low-contrast background.
- **Don't** use Inter for headlines, or introduce a third typeface.
- **Don't** add shadows, glows outside the gradient bands, glass, blur or decorative shapes.
- **Don't** wrap content in rounded, bordered, shadowed cards or pill containers.
- **Don't** add icons for decoration; keep them to phone, chevrons, menu, FAQ plus, external-link marks and form feedback.
