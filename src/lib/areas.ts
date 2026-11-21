/**
 * Thermopair service-area towns — single source of truth for the
 * /service-area hub, every /service-area/[town] page and the home-page
 * "Towns we serve" block.
 *
 * DRAFT CONTENT, same rule as src/lib/services.ts: every line here must be
 * something we can stand behind. The local copy deliberately sticks to
 * geography (county, neighbouring towns, the roads that connect them) and
 * says nothing about population, climate, housing age or market share that
 * we have not verified. Thermopair should review each page before launch and
 * is best placed to add the real local detail — a job they actually did on a
 * given street, an equipment type common in that town — which is also what
 * would make these pages genuinely rank rather than read as filler.
 */

export type Town = {
  slug: string;
  /** Town name on its own, e.g. "Shrewsbury". */
  name: string;
  county: "Worcester County" | "Middlesex County";
  /** One line, used on the hub grid and the home-page list. */
  short: string;
  metaDescription: string;
  /** Two town-specific paragraphs. */
  intro: string[];
  /** Slugs of neighbouring towns we also serve. */
  nearby: string[];
  /** Service slugs featured on this page, most relevant first. */
  featured: string[];
};

export const TOWNS: Town[] = [
  {
    slug: "worcester",
    name: "Worcester",
    county: "Worcester County",
    short: "The county seat and the largest city we serve — heavy on restaurants, bars and commercial kitchens.",
    metaDescription:
      "HVAC and commercial refrigeration service in Worcester, MA. Walk-in coolers, rooftop units, furnaces and heat pumps for homes and businesses. 24/7 emergency service.",
    intro: [
      "Worcester is the seat of Worcester County and the largest city in our service area. It is also where we do most of our commercial refrigeration work: the city's restaurants, bars, markets and institutional kitchens run walk-in coolers, reach-ins, prep tables and draft beer systems that cannot be down for long.",
      "We cover the residential side of the city too — furnaces, boilers, central air, heat pumps and mini splits — but if you run a kitchen in Worcester, refrigeration and rooftop HVAC are what we are called for most, and why we answer the phone at night.",
    ],
    nearby: ["shrewsbury", "marlborough", "leominster"],
    featured: ["commercial-refrigeration", "commercial-hvac", "rooftop-unit-service", "emergency-hvac"],
  },
  {
    slug: "shrewsbury",
    name: "Shrewsbury",
    county: "Worcester County",
    short: "Directly east of Worcester across Lake Quinsigamond — largely residential heating and cooling.",
    metaDescription:
      "HVAC service in Shrewsbury, MA. Furnace and boiler repair, central air, heat pump and mini split installation, and annual maintenance for homes. 24/7 emergency service.",
    intro: [
      "Shrewsbury sits directly east of Worcester, across Lake Quinsigamond, and the work we do there is mostly residential: furnaces and boilers in winter, central air and heat pumps in summer, and the maintenance visits that keep both from failing at the worst moment.",
      "Because Shrewsbury is minutes from Worcester, it is one of the towns we reach fastest on an emergency call. We also install a lot of mini splits here, usually for additions, finished basements and rooms that the existing ducted system never quite reached.",
    ],
    nearby: ["worcester", "marlborough", "leominster"],
    featured: ["residential-hvac", "heat-pump-installation", "mini-split-installation", "preventive-maintenance"],
  },
  {
    slug: "marlborough",
    name: "Marlborough",
    county: "Middlesex County",
    short: "On the I-495 corridor — office buildings, light industrial and commercial rooftop work.",
    metaDescription:
      "Commercial and residential HVAC service in Marlborough, MA. Rooftop units, VRF systems, ventilation and heat pumps for offices, light industrial sites and homes.",
    intro: [
      "Marlborough is the one town on our list outside Worcester County — it sits in Middlesex County, on the I-495 corridor east of us. The building stock there skews commercial: office buildings, light industrial space and the mixed-use sites that come with a highway interchange.",
      "That shapes the work. In Marlborough we are usually on a roof servicing packaged units, commissioning or repairing VRF and VRV systems, or sorting out ventilation and airflow in a space whose use has changed since the system was designed. We take residential calls here as well.",
    ],
    nearby: ["shrewsbury", "worcester", "lancaster"],
    featured: ["commercial-hvac", "rooftop-unit-service", "vrf-vrv-systems", "erv-hrv-ventilation"],
  },
  {
    slug: "leominster",
    name: "Leominster",
    county: "Worcester County",
    short: "North-county city on Route 2 and I-190 — a mix of homes, storefronts and small commercial sites.",
    metaDescription:
      "HVAC and refrigeration service in Leominster, MA. Furnace and heat pump repair, mini splits, commercial systems and 24/7 emergency service for homes and businesses.",
    intro: [
      "Leominster sits in the north of Worcester County where Route 2 meets I-190, paired with Fitchburg as the area's two cities. The mix of work reflects that: single-family homes on one call, a storefront or small commercial kitchen on the next.",
      "It is central to the northern half of our service area, which makes it one of the easier places for us to reach quickly — including after hours, when a furnace quits in January or a cooler stops holding temperature overnight.",
    ],
    nearby: ["fitchburg", "lunenburg", "lancaster"],
    featured: ["residential-hvac", "commercial-hvac", "emergency-hvac", "mini-split-installation"],
  },
  {
    slug: "fitchburg",
    name: "Fitchburg",
    county: "Worcester County",
    short: "On the Nashua River along Route 2 — older building stock and plenty of retrofit work.",
    metaDescription:
      "HVAC service in Fitchburg, MA. Furnace and boiler repair, heat pump and mini split retrofits, ductwork and Mass Save rebate guidance for homes and businesses.",
    intro: [
      "Fitchburg sits on the Nashua River along Route 2, one of the two north-county cities alongside Leominster. A good share of our work there is retrofit rather than new installation — fitting modern equipment into buildings that were not designed around it.",
      "That often means mini splits or heat pumps where adding full ductwork is impractical, repairs to duct runs that have been modified over the years, and helping owners work out which Mass Save incentives actually apply to the upgrade they are considering.",
    ],
    nearby: ["leominster", "lunenburg", "westminster"],
    featured: ["residential-hvac", "heat-pump-installation", "ductwork-installation", "mass-save-rebate"],
  },
  {
    slug: "lancaster",
    name: "Lancaster",
    county: "Worcester County",
    short: "The oldest town in Worcester County — spread out, largely residential, south of Leominster.",
    metaDescription:
      "HVAC service in Lancaster, MA. Heat pump and mini split installation, furnace and boiler repair, and annual maintenance for homes across Worcester County.",
    intro: [
      "Lancaster, incorporated in 1653, is the oldest town in Worcester County. It sits south of Leominster and is spread out and largely residential, with properties set well apart rather than clustered along a main street.",
      "Our work there is almost entirely homes: heating and cooling installation and repair, heat pumps and mini splits, and the yearly maintenance that matters more when you are not somewhere a technician can reach in five minutes.",
    ],
    nearby: ["leominster", "lunenburg", "worcester"],
    featured: ["residential-hvac", "heat-pump-installation", "mini-split-installation", "preventive-maintenance"],
  },
  {
    slug: "westminster",
    name: "Westminster",
    county: "Worcester County",
    short: "Between Fitchburg and Gardner on Route 2 — residential heating, cooling and emergency calls.",
    metaDescription:
      "HVAC service in Westminster, MA. Furnace and boiler repair, heat pump installation, maintenance plans and 24/7 emergency heating and cooling service.",
    intro: [
      "Westminster sits on Route 2 between Fitchburg and Gardner, in the northwest corner of our service area. It is a smaller town, and the calls we take there are mostly residential heating and cooling.",
      "Heat is the priority. A system that fails on a cold night in Westminster is an emergency, not an inconvenience, which is why we run a 24/7 line and why we push annual maintenance here rather than waiting for the breakdown call.",
    ],
    nearby: ["gardner", "fitchburg", "leominster"],
    featured: ["residential-hvac", "heat-pump-installation", "preventive-maintenance", "emergency-hvac"],
  },
  {
    slug: "gardner",
    name: "Gardner",
    county: "Worcester County",
    short: "The Chair City, northwest on Route 2 and Route 140 — commercial and residential both.",
    metaDescription:
      "HVAC and commercial refrigeration service in Gardner, MA. Rooftop units, walk-in coolers, furnaces and heat pumps for businesses and homes. 24/7 emergency service.",
    intro: [
      "Gardner — long known as the Chair City for its furniture-making history — sits where Route 2 meets Route 140 in the northwest of the county. It carries a real commercial centre alongside its residential neighbourhoods.",
      "We work both sides there: rooftop units and refrigeration for restaurants and retail, and furnaces, boilers and heat pumps for homes. It is the furthest point we cover regularly, and we are straight with customers about scheduling rather than promising a window we cannot hold.",
    ],
    nearby: ["westminster", "fitchburg", "leominster"],
    featured: ["commercial-hvac", "commercial-refrigeration", "residential-hvac", "rooftop-unit-service"],
  },
  {
    slug: "lunenburg",
    name: "Lunenburg",
    county: "Worcester County",
    short: "Between Fitchburg and Lancaster — residential work, with mini splits a common ask.",
    metaDescription:
      "HVAC service in Lunenburg, MA. Mini split and heat pump installation, furnace repair, maintenance and Mass Save rebate guidance for homes.",
    intro: [
      "Lunenburg sits between Fitchburg and Lancaster in the north of Worcester County, residential and semi-rural rather than built up. Nearly all of our work there is in homes.",
      "Mini splits come up often — they suit properties where running new ductwork would mean tearing into finished space — along with heat pump upgrades, furnace repair and maintenance. Where a rebate applies to the work, we will point you at it.",
    ],
    nearby: ["fitchburg", "leominster", "lancaster"],
    featured: ["residential-hvac", "mini-split-installation", "heat-pump-installation", "mass-save-rebate"],
  },
];

export const TOWN_BY_SLUG: Record<string, Town> = Object.fromEntries(
  TOWNS.map((t) => [t.slug, t]),
);

/** Trailing slash: next.config.ts sets trailingSlash so every route ends in one. */
export const areaHref = (slug: string) => `/service-area/${slug}/`;
