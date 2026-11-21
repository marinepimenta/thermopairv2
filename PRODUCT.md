# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Homeowners and business owners (restaurants, bars, food service, commercial spaces) in Worcester County and Central Massachusetts. Some arrive with a system down right now (no heat, no cooling, a walk-in cooler that stopped holding temperature) and need to call or request service fast. Others are planning: comparing installation, maintenance or replacement before hiring. Emergency and planning visitors carry similar weight, and homes and businesses are both primary.

## Product Purpose
Marketing and lead-generation site for Thermopair HVAC-R, a local HVAC and commercial refrigeration company based in Dracut, Massachusetts. It exists so visitors can understand the services, trust the company and either call or send a service request. Success is a phone call or a submitted request form.

## Positioning
Four things together that a generic HVAC competitor could not truthfully claim: commercial refrigeration expertise (walk-in coolers, freezers, reach-ins, draft beer systems) alongside residential and commercial HVAC; 24/7 emergency service; a diagnosis first and a price the customer approves before any work starts; and a locally owned company where the founder, Wanderson, is personally accountable (he started Thermopair after a broken heating system and a service company that never called back).

## Operating Context
- Static Next.js export hosted on GitHub Pages under basePath `/thermopairv2`.
- This repository is a UI/UX redesign lab. The final site is expected later; content and form are not yet wired to production.
- The request form has no backend; submission is client-side only and must be connected to a real endpoint before launch.
- The visual reference the client likes is Blive House Cleaning (solid brand-color sections, large real photography, simple service-business presentation). It is a reference for principles only; Thermopair keeps its own identity.
- Phone (774) 498-0528, hello@thermopair.com, office Mon–Fri 8 AM–5 PM, emergency service 24/7.
- Service area towns: Worcester, Shrewsbury, Marlborough, Leominster, Fitchburg, Lancaster, Westminster, Gardner, Lunenburg, and Worcester County generally.

## Capabilities and Constraints
- Pages: home, services hub, and 13 service detail pages (data in `src/lib/services.ts`).
- Service page copy is draft content and must avoid unverifiable claims (licenses, brands, warranties, response times, rebate amounts). Thermopair should review before launch.
- Redesign work is design-only: do not rewrite, shorten or rephrase existing copy, headlines, CTAs or service names, and do not add or remove sections or change business information, forms, integrations or navigation behavior.
- Brand colors and the logo are fixed. Orange (#ff6512) is the primary brand color; purple appears in the logo only.

## Brand Commitments
Existing Thermopair logo and color palette stay unchanged. The client wants the site to feel like an established American local home-service company, not a SaaS template: simpler components, real photography, ruled lists instead of cards. The brand Visual Identity Guidelines (ANDE studio) are binding for logo, palette and typefaces (Sentient headlines, Figtree body). Confirmed preference (2026-11-06): use the brand gradient and a mix of purple and orange tones rather than large solid-orange areas; icons are welcome only where they carry meaning.

## Evidence on Hand
- Real Google reviews from customers, shown verbatim in `src/components/thermopair/Reviews.tsx`.
- Real job photos in `public/thermopair/work/` (low resolution, about 360–615 px wide).
- Technician and van photos in `public/sites/blivecleaning-com-9414df84/root-8a5edab2/images/hvac/`; they look somewhat AI-generated and real photography would improve credibility.
- Not available, so do not fabricate: license numbers, certifications, years in business, customer counts, warranties, response-time guarantees, pricing.

## Product Principles
1. The phone number and the request form are always one tap away; emergencies never have to hunt for them.
2. Say it plainly. Explain the problem and the price in language a non-technical customer understands.
3. Credibility comes from real people, real equipment and real reviews, not decoration.
4. Serve homes and businesses equally, with commercial refrigeration as the visible differentiator.
5. Never claim what Thermopair has not confirmed.

## Accessibility & Inclusion
Target WCAG AA. Ink text on brand orange (about 6:1); white text on orange is not allowed for labels. Visible form labels, keyboard-operable navigation and FAQ, mobile-first sticky call bar, reduced-motion respected.
