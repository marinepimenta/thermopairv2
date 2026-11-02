/**
 * Thermopair service catalog — single source of truth for the /services hub,
 * every /services/[slug] page, home-page cards, footer links and form options.
 *
 * Structure and topics were informed by a partner HVAC site (neairhvac.com);
 * the copy is original and written for Thermopair. DRAFT CONTENT: it avoids
 * claims we can't verify (licenses, brands, warranties, response times,
 * rebate amounts). Thermopair should review every page before launch.
 */

export type IconKey =
  | "house"
  | "building"
  | "heatpump"
  | "minisplit"
  | "vrf"
  | "ventilation"
  | "ductwork"
  | "rooftop"
  | "thermostat"
  | "maintenance"
  | "emergency"
  | "rebate"
  | "refrigeration";

export type CategoryId = "install" | "specialty" | "support" | "refrigeration";

export const CATEGORIES: { id: CategoryId; title: string; blurb: string }[] = [
  {
    id: "install",
    title: "Installation & new systems",
    blurb: "Complete heating and cooling systems for homes and commercial spaces.",
  },
  {
    id: "specialty",
    title: "Specialty systems",
    blurb: "Zoned comfort, fresh-air ventilation, airflow and controls.",
  },
  {
    id: "support",
    title: "Ongoing service & support",
    blurb: "Keeping systems running — and helping you pay less for the right upgrade.",
  },
  {
    id: "refrigeration",
    title: "Commercial refrigeration",
    blurb: "Repair and maintenance for restaurants, bars and food-service businesses.",
  },
];

export type Faq = { q: string; a: string };
export type Step = { title: string; text: string };

export type Service = {
  slug: string;
  title: string;
  /** One line for cards. */
  short: string;
  category: CategoryId;
  audience: "Homes" | "Businesses" | "Homes & businesses";
  icon: IconKey;
  eyebrow: string;
  h1: string;
  metaDescription: string;
  /** 2 short paragraphs under "What this service is". */
  intro: string[];
  included: string[];
  why: { title: string; text: string }[];
  signsHeading: string;
  signs: string[];
  process?: Step[];
  faqs: Faq[];
  related: string[];
  image?: { folder: "work" | "hvac"; file: string; alt: string };
};

export const DEFAULT_PROCESS: Step[] = [
  {
    title: "Tell us what you need",
    text: "Call or send a request. We ask the right questions and schedule a visit.",
  },
  {
    title: "We assess and quote",
    text: "We look at the space and the equipment, explain your options in plain language and give you the price before any work starts.",
  },
  {
    title: "We schedule the work",
    text: "We agree on a time that fits your home or business, and coordinate around other trades when needed.",
  },
  {
    title: "We do it and walk you through it",
    text: "We complete the work, test performance and show you how everything operates before we leave.",
  },
];

export const SERVICES: Service[] = [
  /* ───────────────────────── Installation & new systems ───────────────── */
  {
    slug: "residential-hvac",
    title: "Residential HVAC Installation",
    short: "Complete home heating and cooling systems, installed and tested.",
    category: "install",
    audience: "Homes",
    icon: "house",
    eyebrow: "Residential · Installation",
    h1: "Residential HVAC installation in Central Massachusetts",
    metaDescription:
      "Complete home heating and cooling system installation and replacement in Worcester County and Central Massachusetts by Thermopair HVAC-R.",
    intro: [
      "A new system should keep your home comfortable for years, not just survive the first winter. We install complete heating and cooling systems for homes — replacements, additions and upgrades — sized to the space instead of guessed from the old unit.",
      "Every installation starts with a look at your home and ends with a test of the finished system. You get a clear price up front, and we explain what we’re doing at each step.",
    ],
    included: [
      "Central air conditioning systems",
      "Heating system replacement and upgrades",
      "Heat pumps (ducted and ductless)",
      "Air handlers and indoor units",
      "Ductwork modifications and connections",
      "Thermostat installation and setup",
      "Start-up, testing and performance check",
      "Walkthrough so you know how to run your system",
    ],
    why: [
      {
        title: "Sized to your home",
        text: "An oversized or undersized system wastes energy and wears out early. We size to your space and how you use it.",
      },
      {
        title: "Clean, careful work",
        text: "We treat your home with respect — protecting floors and finishes and cleaning up when we’re done.",
      },
      {
        title: "Price before work starts",
        text: "You review and approve the quote first, so there are no surprises when the work is finished.",
      },
    ],
    signsHeading: "Signs it may be time for a new system",
    signs: [
      "Your system is old and repairs keep getting more frequent or more expensive",
      "Energy bills keep climbing with no change in how you use your home",
      "Some rooms are always too hot or too cold",
      "Loud, unusual noises or frequent on-and-off cycling",
      "You’re finishing an addition or renovating and need new heating and cooling",
    ],
    faqs: [
      {
        q: "How long does a residential installation take?",
        a: "It depends on the equipment and the home. Many replacements can be completed in a day or two, while projects that add ductwork or several zones take longer. We give you a realistic schedule when we quote the job.",
      },
      {
        q: "Should I repair or replace my system?",
        a: "We’ll take an honest look and tell you. If a repair makes sense, we’ll say so. If the system is near the end of its life and repairs are adding up, we’ll explain your replacement options.",
      },
      {
        q: "Can you help with rebates?",
        a: "Yes. Some efficient equipment, like heat pumps, may qualify for Massachusetts rebates. We’ll help you understand what may apply — see our Mass Save rebate page for details.",
      },
    ],
    related: ["heat-pump-installation", "mini-split-installation", "ductwork-installation"],
    image: {
      folder: "hvac",
      file: "technician-ceiling-install.jpg",
      alt: "Thermopair technician installing a ceiling air outlet",
    },
  },
  {
    slug: "commercial-hvac",
    title: "Commercial HVAC",
    short: "Heating and cooling for offices, retail, restaurants and light commercial buildings.",
    category: "install",
    audience: "Businesses",
    icon: "building",
    eyebrow: "Commercial · HVAC",
    h1: "Commercial HVAC service in Central Massachusetts",
    metaDescription:
      "Commercial HVAC installation, repair and maintenance for offices, retail, restaurants and light commercial buildings in Worcester County and Central Massachusetts.",
    intro: [
      "When your heating or cooling fails, customers and employees notice immediately. We install, repair and maintain commercial HVAC systems for offices, retail spaces, restaurants, tenant spaces and other light commercial buildings.",
      "We plan work around your business hours where we can, communicate clearly, and focus on keeping your space comfortable and your equipment running.",
    ],
    included: [
      "Rooftop units — installation, service and replacement",
      "Split systems and ductless systems",
      "VRF/VRV systems",
      "Ventilation (ERV/HRV) for fresh air",
      "Controls and thermostats",
      "Tenant space heating and cooling",
      "Preventive maintenance",
      "Emergency repair when a system fails",
    ],
    why: [
      {
        title: "Built around your business",
        text: "We schedule work to limit disruption and keep your doors open wherever possible.",
      },
      {
        title: "Diagnosis first",
        text: "We find the real cause of a problem before recommending a repair, so you only pay for what’s needed.",
      },
      {
        title: "One team for everything",
        text: "HVAC and commercial refrigeration from the same company — useful for restaurants and food-service businesses.",
      },
    ],
    signsHeading: "When to call a commercial HVAC technician",
    signs: [
      "Customers or staff complain about hot or cold spots",
      "A rooftop unit is noisy, leaking or short-cycling",
      "Energy bills are rising without a clear reason",
      "Equipment has no regular maintenance schedule",
      "You’re opening, expanding or renovating a space",
    ],
    faqs: [
      {
        q: "Do you work with property managers and multi-tenant buildings?",
        a: "Yes. We work with business owners, tenants and property managers. Tell us about the building and who to coordinate with, and we’ll plan accordingly.",
      },
      {
        q: "Can you work outside business hours?",
        a: "Where the job allows, we plan around your hours to limit disruption. Tell us your constraints when you request service.",
      },
      {
        q: "Do you offer maintenance contracts for commercial equipment?",
        a: "Yes. Regular preventive maintenance is the best way to avoid emergency breakdowns. See our preventive maintenance page or ask us about a schedule that fits your equipment.",
      },
    ],
    related: ["rooftop-unit-service", "vrf-vrv-systems", "preventive-maintenance"],
    image: {
      folder: "hvac",
      file: "technician-plant.jpg",
      alt: "Thermopair technician looking over commercial rooftop mechanical equipment",
    },
  },
  {
    slug: "heat-pump-installation",
    title: "Heat Pump Installation",
    short: "High-efficiency heat pumps for year-round heating and cooling.",
    category: "install",
    audience: "Homes & businesses",
    icon: "heatpump",
    eyebrow: "Installation · Heat pumps",
    h1: "Heat pump installation and replacement",
    metaDescription:
      "Heat pump installation and replacement for homes and businesses in Worcester County and Central Massachusetts, with help understanding rebates.",
    intro: [
      "A heat pump heats and cools with one efficient system, moving heat instead of generating it. For many homes and small businesses, that means lower operating costs and one system to maintain instead of two.",
      "We help you decide whether a heat pump is the right fit, choose the right type for your space, and install it properly — including testing the finished system.",
    ],
    included: [
      "Ducted heat pump systems",
      "Ductless (mini split) heat pump systems",
      "Replacement of existing heating and cooling equipment",
      "Indoor and outdoor unit installation",
      "Electrical and refrigerant connections",
      "Thermostat or control setup",
      "Start-up, testing and walkthrough",
      "Guidance on potential rebates",
    ],
    why: [
      {
        title: "Heating and cooling in one",
        text: "One efficient system for all seasons, with one service relationship.",
      },
      {
        title: "Right-sized and right-placed",
        text: "Placement and sizing drive comfort and efficiency. We plan both before installing.",
      },
      {
        title: "Rebate-aware",
        text: "Many heat pump projects may qualify for incentives. We help you understand what may apply.",
      },
    ],
    signsHeading: "A heat pump may be a good fit if",
    signs: [
      "You’re replacing an aging air conditioner or heating system",
      "You want one system for heating and cooling",
      "You’re adding comfort to a room or addition without new ductwork",
      "You want to lower energy use and operating cost",
      "You’re interested in available rebates and incentives",
    ],
    faqs: [
      {
        q: "Do heat pumps work in Massachusetts winters?",
        a: "Modern cold-climate heat pumps are designed for cold weather. Whether one is right for your building depends on the space, insulation and what you have now. We’ll talk through your options honestly.",
      },
      {
        q: "Will I still need my old heating system?",
        a: "It depends on the building and your goals. In some cases a heat pump replaces the old system; in others it works alongside it. We’ll explain the options for your situation.",
      },
      {
        q: "Are heat pumps eligible for rebates?",
        a: "Many qualifying heat pumps are eligible for Massachusetts incentives, but eligibility and amounts change. See our Mass Save rebate page, and we’ll help you check current details.",
      },
    ],
    related: ["mini-split-installation", "mass-save-rebate", "residential-hvac"],
  },
  {
    slug: "mini-split-installation",
    title: "Mini Split Installation",
    short: "Ductless heating and cooling for rooms, additions, garages and offices.",
    category: "install",
    audience: "Homes & businesses",
    icon: "minisplit",
    eyebrow: "Installation · Ductless",
    h1: "Mini split (ductless) installation and service",
    metaDescription:
      "Ductless mini split installation and service for rooms, additions, garages and offices in Worcester County and Central Massachusetts.",
    intro: [
      "Mini splits heat and cool a space without ductwork. They’re a good fit for bedrooms, additions, garages, finished basements, offices and any room that never gets comfortable on your existing system.",
      "We plan the placement, install the indoor and outdoor units, and make sure the finished system is clean, quiet and working properly. We also service ductless systems that need attention.",
    ],
    included: [
      "Single-zone and multi-zone ductless systems",
      "Indoor unit placement planning",
      "Outdoor unit installation",
      "Refrigerant line and electrical connections",
      "Condensate drainage",
      "Remote and control setup",
      "Start-up, testing and walkthrough",
      "Repair and cleaning of existing mini splits",
    ],
    why: [
      {
        title: "No ductwork required",
        text: "Add comfort to a room or addition without opening walls for ducts.",
      },
      {
        title: "Room-by-room control",
        text: "Heat or cool only the spaces you use, with separate settings by zone.",
      },
      {
        title: "Neat installation",
        text: "Careful line routing and clean finishing, so the system looks as good as it performs.",
      },
    ],
    signsHeading: "A mini split is worth considering if",
    signs: [
      "One room is always too hot or too cold",
      "You’ve added a room, garage or finished basement",
      "Your home has no ductwork, or ducts are hard to extend",
      "You want to cool or heat an office or small business space",
      "An existing mini split isn’t cooling or heating as it should",
    ],
    faqs: [
      {
        q: "How many rooms can one mini split handle?",
        a: "A single indoor unit is best for one room or open area. For several rooms, a multi-zone system connects multiple indoor units to one outdoor unit. We’ll recommend what fits your layout.",
      },
      {
        q: "Do mini splits heat as well as cool?",
        a: "Most are heat pumps, which do both. We’ll confirm the right model for how you plan to use it.",
      },
      {
        q: "Can you service a mini split someone else installed?",
        a: "Yes. If your ductless system isn’t performing, we can diagnose it, clean it and repair it.",
      },
    ],
    related: ["heat-pump-installation", "residential-hvac", "mass-save-rebate"],
    image: {
      folder: "hvac",
      file: "technician-split-install.jpg",
      alt: "Thermopair technician installing a wall-mounted ductless indoor unit",
    },
  },

  /* ───────────────────────── Specialty systems ────────────────────────── */
  {
    slug: "vrf-vrv-systems",
    title: "VRF/VRV Systems",
    short: "Zoned, high-efficiency comfort for larger homes and commercial buildings.",
    category: "specialty",
    audience: "Businesses",
    icon: "vrf",
    eyebrow: "Specialty · VRF/VRV",
    h1: "VRF/VRV system installation and service",
    metaDescription:
      "VRF/VRV zoned heating and cooling system installation and service for commercial buildings and larger properties in Central Massachusetts.",
    intro: [
      "Variable refrigerant flow (VRF, also called VRV) systems use one outdoor unit to serve many indoor units, with each zone controlled on its own. They’re common in offices, retail, restaurants and larger properties that need flexible, efficient comfort control.",
      "We install and service VRF/VRV equipment, from planning and refrigerant piping to commissioning and ongoing maintenance.",
    ],
    included: [
      "System planning and zone layout",
      "Outdoor condensing unit installation",
      "Indoor unit installation",
      "Refrigerant piping and connections",
      "Controls and zone setup",
      "Commissioning and performance testing",
      "Preventive maintenance",
      "Diagnostics and repair of existing systems",
    ],
    why: [
      {
        title: "Comfort by zone",
        text: "Different areas can run at different temperatures, so people aren’t fighting over one thermostat.",
      },
      {
        title: "Efficient operation",
        text: "Variable-capacity equipment adjusts output to demand instead of constantly cycling on and off.",
      },
      {
        title: "Flexible layouts",
        text: "Good for buildings where ductwork is limited or spaces are divided into many rooms.",
      },
    ],
    signsHeading: "VRF/VRV may be the right fit when",
    signs: [
      "A building has many rooms or tenant spaces with different comfort needs",
      "Running ductwork throughout is impractical",
      "You want efficiency and zone-by-zone control",
      "You’re renovating or expanding a commercial space",
      "An existing VRF/VRV system needs service or isn’t performing",
    ],
    faqs: [
      {
        q: "What’s the difference between VRF and VRV?",
        a: "They describe the same type of technology. VRV is a brand name used by one manufacturer, while VRF is the general industry term.",
      },
      {
        q: "Can you service an existing VRF/VRV system?",
        a: "Yes. We can diagnose and repair existing systems and set up regular preventive maintenance.",
      },
      {
        q: "Is VRF/VRV suitable for a home?",
        a: "It can be for larger homes with many zones, though for most homes a heat pump or mini split system is simpler. We’ll recommend what makes sense.",
      },
    ],
    related: ["commercial-hvac", "rooftop-unit-service", "preventive-maintenance"],
    image: {
      folder: "work",
      file: "work-2.jpg",
      alt: "Large commercial outdoor condensing unit mounted on a steel frame",
    },
  },
  {
    slug: "erv-hrv-ventilation",
    title: "ERV/HRV Ventilation",
    short: "Fresh-air ventilation that improves indoor air while saving energy.",
    category: "specialty",
    audience: "Homes & businesses",
    icon: "ventilation",
    eyebrow: "Specialty · Ventilation",
    h1: "ERV/HRV ventilation systems",
    metaDescription:
      "ERV and HRV fresh-air ventilation system installation and service for homes and businesses in Worcester County and Central Massachusetts.",
    intro: [
      "Tight, well-insulated buildings keep heat in — and can trap stale air, moisture and odors too. Energy and heat recovery ventilators (ERV and HRV) bring in fresh outdoor air while recovering most of the energy from the air they exhaust.",
      "We help you choose the right ventilation approach for your building, install it, and make sure it’s balanced and working as intended.",
    ],
    included: [
      "ERV and HRV unit installation",
      "Ventilation ductwork and connections",
      "Integration with existing heating and cooling",
      "Controls and scheduling",
      "System balancing and testing",
      "Filter and maintenance guidance",
      "Service of existing ventilation equipment",
    ],
    why: [
      {
        title: "Fresher indoor air",
        text: "Continuous ventilation helps reduce stale air, odors and excess moisture.",
      },
      {
        title: "Saves energy",
        text: "Recovering energy from outgoing air means less work for your heating and cooling.",
      },
      {
        title: "Fits your system",
        text: "We plan ventilation to work with your existing equipment and ductwork instead of fighting it.",
      },
    ],
    signsHeading: "Ventilation may help if you notice",
    signs: [
      "Stuffy or stale air indoors",
      "Persistent odors, humidity or window condensation",
      "A newly sealed or renovated space with little fresh air",
      "A business with many people in a closed space",
      "An existing ventilator that’s noisy, clogged or not working",
    ],
    faqs: [
      {
        q: "What’s the difference between an ERV and an HRV?",
        a: "Both bring in fresh air and recover heat from the outgoing air. An ERV also helps manage moisture, while an HRV focuses on heat. We’ll recommend the right one for your building.",
      },
      {
        q: "Do I need ventilation if I open my windows?",
        a: "Opening windows works occasionally but lets in outdoor temperature and humidity. A ventilator provides controlled fresh air year-round with far less energy loss.",
      },
      {
        q: "Does a ventilator need maintenance?",
        a: "Yes. Filters need regular cleaning or replacement. We can show you what to do or include it in a maintenance visit.",
      },
    ],
    related: ["ductwork-installation", "residential-hvac", "preventive-maintenance"],
  },
  {
    slug: "ductwork-installation",
    title: "Ductwork Installation",
    short: "New, modified and improved ductwork for balanced airflow.",
    category: "specialty",
    audience: "Homes & businesses",
    icon: "ductwork",
    eyebrow: "Specialty · Ductwork",
    h1: "Ductwork installation and airflow improvements",
    metaDescription:
      "Ductwork installation, modification and airflow improvement for homes and businesses in Worcester County and Central Massachusetts.",
    intro: [
      "Even a great system performs poorly with the wrong ductwork. Poorly sized, leaky or badly routed ducts cause hot and cold spots, noise and wasted energy.",
      "We install new ductwork, modify existing runs and fix airflow problems — whether you’re building an addition, replacing equipment or just trying to make a room comfortable.",
    ],
    included: [
      "New ductwork for additions and renovations",
      "Duct modifications and extensions",
      "Duct sealing and insulation",
      "Return and supply air improvements",
      "Airflow balancing",
      "Connections to new or existing equipment",
      "Troubleshooting hot and cold spots",
    ],
    why: [
      {
        title: "Balanced airflow",
        text: "Properly sized and routed ducts deliver the right air to the right rooms.",
      },
      {
        title: "Quieter, more efficient",
        text: "Sealed, well-designed duct runs reduce noise and wasted energy.",
      },
      {
        title: "Works with your equipment",
        text: "We match ductwork to your system so you get its full performance.",
      },
    ],
    signsHeading: "Your ductwork may need attention if",
    signs: [
      "Some rooms are always hotter or colder than others",
      "Airflow from vents is weak or uneven",
      "You hear whistling, rattling or banging in the ducts",
      "Energy bills are high for your home’s size",
      "You’re adding a room or replacing your heating and cooling system",
    ],
    faqs: [
      {
        q: "Can you add ductwork to an addition?",
        a: "Yes. We plan and install duct runs for additions and renovations, and make sure your equipment can handle the added load. In some cases a ductless system is the better choice — we’ll tell you which.",
      },
      {
        q: "How do I know if my ducts are leaking?",
        a: "Common signs are uneven room temperatures, dust problems and high bills. We can inspect the ductwork and recommend sealing or repairs.",
      },
      {
        q: "Will new ductwork fix my hot and cold rooms?",
        a: "Sometimes. Airflow problems can also come from equipment sizing or controls, so we diagnose the cause before recommending work.",
      },
    ],
    related: ["residential-hvac", "erv-hrv-ventilation", "mini-split-installation"],
  },
  {
    slug: "rooftop-unit-service",
    title: "Rooftop Unit Service",
    short: "Diagnostics, repair, maintenance and replacement for commercial rooftop units.",
    category: "specialty",
    audience: "Businesses",
    icon: "rooftop",
    eyebrow: "Specialty · Rooftop units",
    h1: "Rooftop unit service and replacement",
    metaDescription:
      "Commercial rooftop unit (RTU) diagnostics, repair, maintenance and replacement in Worcester County and Central Massachusetts.",
    intro: [
      "Rooftop units carry the heating and cooling load for many stores, restaurants and offices — and they work in the weather all year. When one struggles, your whole space feels it.",
      "We diagnose and repair rooftop units, keep them on a maintenance schedule and replace them when repair no longer makes sense.",
    ],
    included: [
      "Rooftop unit diagnostics and repair",
      "Seasonal and preventive maintenance",
      "Coil, filter and component cleaning",
      "Electrical and control checks",
      "Refrigerant system service",
      "Rooftop unit replacement",
      "Emergency repair when a unit fails",
    ],
    why: [
      {
        title: "Diagnosis before repair",
        text: "We test the unit to find the real cause so you don’t pay for guesswork.",
      },
      {
        title: "Fewer breakdowns",
        text: "Regular maintenance catches worn parts before they fail on a hot or cold day.",
      },
      {
        title: "Honest repair-or-replace advice",
        text: "If a unit is at the end of its life, we’ll say so and explain your options.",
      },
    ],
    signsHeading: "Call us about your rooftop unit if",
    signs: [
      "The unit isn’t cooling or heating the space well",
      "It’s noisy, vibrating, leaking or short-cycling",
      "Energy use has gone up without explanation",
      "It hasn’t been serviced regularly",
      "It’s old and repairs are becoming frequent",
    ],
    faqs: [
      {
        q: "How often should a rooftop unit be serviced?",
        a: "At least once or twice a year — often before the heating and cooling seasons. Units in demanding environments may benefit from more frequent visits.",
      },
      {
        q: "Can you replace a rooftop unit?",
        a: "Yes. We can help you choose and install a replacement and coordinate the work to limit disruption to your business.",
      },
      {
        q: "What if my rooftop unit fails on a busy day?",
        a: "Call us. We offer emergency service and will talk through the problem and get someone out as quickly as we can.",
      },
    ],
    related: ["commercial-hvac", "preventive-maintenance", "emergency-hvac"],
    image: {
      folder: "work",
      file: "work-1.jpg",
      alt: "Rooftop commercial HVAC condensing units on steel rails",
    },
  },
  {
    slug: "smart-thermostat",
    title: "Smart Thermostat",
    short: "Smart thermostat installation, setup and control upgrades.",
    category: "specialty",
    audience: "Homes & businesses",
    icon: "thermostat",
    eyebrow: "Specialty · Controls",
    h1: "Smart thermostat installation and setup",
    metaDescription:
      "Smart thermostat installation, wiring, setup and troubleshooting for homes and businesses in Worcester County and Central Massachusetts.",
    intro: [
      "A smart thermostat lets you schedule and control heating and cooling from your phone, and helps avoid conditioning an empty space. It only works well if it’s compatible with your system and set up correctly.",
      "We check compatibility, install and wire the thermostat, and set it up so it works the way you want.",
    ],
    included: [
      "Compatibility check with your system",
      "Thermostat installation and wiring",
      "Wi-Fi and app setup",
      "Schedules and temperature settings",
      "Zoned system and multi-stage equipment setup",
      "Replacement of old or failing thermostats",
      "Troubleshooting thermostat problems",
      "A walkthrough on how to use it",
    ],
    why: [
      {
        title: "Compatibility first",
        text: "Not every thermostat works with every system. We confirm before installing.",
      },
      {
        title: "Set up properly",
        text: "Correct wiring and settings make the difference between a gadget and real savings.",
      },
      {
        title: "Easy to use",
        text: "We show you how to use your schedule and controls so it fits your routine.",
      },
    ],
    signsHeading: "A thermostat upgrade may help if",
    signs: [
      "You want to control heating and cooling remotely",
      "Your current thermostat is old, inaccurate or unreliable",
      "You want schedules that match when you’re home or open",
      "You’re installing a new heating or cooling system",
      "Your smart thermostat won’t connect or behaves oddly",
    ],
    faqs: [
      {
        q: "Will a smart thermostat work with my system?",
        a: "Usually, but not always. Some systems need specific controls or extra wiring. We’ll check before installing.",
      },
      {
        q: "Can you install a thermostat I already bought?",
        a: "In most cases, yes. Tell us the model when you request service and we’ll confirm it will work with your equipment.",
      },
      {
        q: "Does a smart thermostat save energy?",
        a: "It can, mainly by reducing heating and cooling when no one needs it. Results depend on your home, your habits and how it’s set up.",
      },
    ],
    related: ["residential-hvac", "heat-pump-installation", "mini-split-installation"],
  },

  /* ───────────────────────── Ongoing service & support ────────────────── */
  {
    slug: "preventive-maintenance",
    title: "Preventive Maintenance",
    short: "Scheduled maintenance that prevents breakdowns and keeps systems efficient.",
    category: "support",
    audience: "Homes & businesses",
    icon: "maintenance",
    eyebrow: "Service · Maintenance",
    h1: "Preventive maintenance for homes and businesses",
    metaDescription:
      "Scheduled HVAC and refrigeration preventive maintenance for homes and businesses in Worcester County and Central Massachusetts.",
    intro: [
      "Most breakdowns start small — a dirty coil, a worn part, a loose connection. Preventive maintenance finds those problems early, when they’re cheaper to fix and before they leave you without heat, cooling or refrigeration.",
      "We offer scheduled maintenance for heating, cooling and commercial refrigeration equipment, so your systems run efficiently and last longer.",
    ],
    included: [
      "Cleaning of coils and key components",
      "Refrigerant charge and pressure checks",
      "Electrical connection and control testing",
      "Airflow, filter and drain inspection",
      "Performance testing",
      "Clear findings and recommendations",
      "Heating, cooling and refrigeration equipment",
      "Seasonal or scheduled visits",
    ],
    why: [
      {
        title: "Fewer emergencies",
        text: "Catching worn parts early means fewer surprise failures on the coldest night or busiest day.",
      },
      {
        title: "Lower operating cost",
        text: "Clean, well-adjusted equipment runs more efficiently, which helps keep energy bills predictable.",
      },
      {
        title: "Longer equipment life",
        text: "Regular care helps equipment last longer, which protects the money you’ve invested.",
      },
    ],
    signsHeading: "Maintenance is especially worth it if",
    signs: [
      "Your system hasn’t been serviced in over a year",
      "You depend on equipment for your business, like refrigeration or rooftop units",
      "Your system is older and you want to extend its life",
      "Energy bills have been creeping up",
      "You want to be ready before heating or cooling season",
    ],
    faqs: [
      {
        q: "How often should my system be serviced?",
        a: "Most heating and cooling systems benefit from a checkup once a year, before the season they work hardest. Commercial refrigeration often needs more frequent visits because it runs constantly.",
      },
      {
        q: "What does a maintenance visit include?",
        a: "We clean key components, check refrigerant and airflow, test electrical connections and controls, inspect filters and drains, and explain what we find.",
      },
      {
        q: "Do you offer maintenance for commercial equipment?",
        a: "Yes — HVAC and commercial refrigeration. Ask us about a schedule that fits your equipment and business.",
      },
    ],
    related: ["emergency-hvac", "rooftop-unit-service", "commercial-refrigeration"],
    image: {
      folder: "hvac",
      file: "technician-diagnostics.jpg",
      alt: "Thermopair technician testing an HVAC control panel with a multimeter",
    },
  },
  {
    slug: "emergency-hvac",
    title: "Emergency HVAC",
    short: "24/7 help when heating or cooling fails.",
    category: "support",
    audience: "Homes & businesses",
    icon: "emergency",
    eyebrow: "Service · Emergency",
    h1: "Emergency HVAC service",
    metaDescription:
      "24/7 emergency HVAC service for no heat, no cooling and system failures for homes and businesses in Worcester County and Central Massachusetts.",
    intro: [
      "Heating and cooling failures don’t wait for business hours. If your system stops working, call us. We’ll talk through what’s happening and get a technician out as quickly as we can.",
      "Our goal is to find the cause, restore comfort and explain what we found — and what it will cost — before we do the repair.",
    ],
    included: [
      "No heat",
      "No cooling",
      "Water leaks from HVAC equipment",
      "Unusual noises, smells or smoke from equipment",
      "System failures at homes and businesses",
      "Rooftop unit failures",
      "On-site diagnosis",
      "Repair with the price explained first",
    ],
    process: [
      {
        title: "Call us",
        text: "Call our 24/7 line. A real person will talk through what’s happening.",
      },
      {
        title: "We help you stay safe",
        text: "If there’s a safety concern, like a gas smell or burning smell, we’ll tell you what to do first.",
      },
      {
        title: "We diagnose on site",
        text: "A technician finds the cause and explains your options and the cost before starting.",
      },
      {
        title: "We fix it and verify",
        text: "We repair the problem, test the system and make sure it’s running properly before we leave.",
      },
    ],
    why: [
      {
        title: "Available 24/7",
        text: "Call any time — nights, weekends and holidays.",
      },
      {
        title: "Diagnosis first",
        text: "We find the actual cause so the repair solves the problem.",
      },
      {
        title: "Clear price before work",
        text: "Even in an emergency, you approve the work before we start.",
      },
    ],
    signsHeading: "Call us right away if",
    signs: [
      "There’s no heat in cold weather",
      "There’s no cooling in a heat wave",
      "Equipment is leaking water",
      "You notice unusual noises, burning smells or smoke",
      "A business-critical system, like a rooftop unit, has failed",
    ],
    faqs: [
      {
        q: "Do you really answer 24/7?",
        a: "Yes. Call (774) 498-0528 any time for emergency service. Office hours are Monday to Friday, 8 AM to 5 PM.",
      },
      {
        q: "What should I do if I smell gas?",
        a: "Leave the building and call 911 or your gas utility’s emergency number from a safe place. Once it’s safe, we can help with repairs.",
      },
      {
        q: "Do you handle commercial emergencies?",
        a: "Yes — commercial HVAC and commercial refrigeration. Tell us what’s at stake and we’ll prioritize accordingly.",
      },
    ],
    related: ["preventive-maintenance", "commercial-hvac", "commercial-refrigeration"],
  },
  {
    slug: "mass-save-rebate",
    title: "Mass Save Rebate",
    short: "Help understanding Massachusetts rebates on efficient heating and cooling equipment.",
    category: "support",
    audience: "Homes & businesses",
    icon: "rebate",
    eyebrow: "Support · Rebates",
    h1: "Mass Save rebate support",
    metaDescription:
      "Help understanding Mass Save rebates for heat pumps and efficient heating and cooling equipment in Worcester County and Central Massachusetts.",
    intro: [
      "Mass Save is the Massachusetts energy-efficiency program that offers incentives on qualifying equipment, such as many heat pumps. The right rebate can noticeably lower the cost of an efficient upgrade.",
      "Program rules, eligible equipment and rebate amounts change, so we don’t assume. We help you understand what may apply to your project and plan the installation accordingly.",
    ],
    included: [
      "Help identifying potentially eligible equipment",
      "Guidance on how the rebate process works",
      "Equipment recommendations with efficiency in mind",
      "Installation that meets program requirements",
      "Help gathering the information you need",
      "Heat pump and ductless system projects",
      "Clear explanation of costs before you decide",
    ],
    why: [
      {
        title: "Plan with eligibility in mind",
        text: "Choosing equipment with rebates in mind can save real money on the right project.",
      },
      {
        title: "No overpromising",
        text: "Rebates are set by the program, not by us. We’ll tell you what we know and what you should confirm.",
      },
      {
        title: "Installation done right",
        text: "A rebate only helps if the work is done properly. That’s the part we control.",
      },
    ],
    signsHeading: "This is worth asking about if",
    signs: [
      "You’re considering a heat pump or ductless system",
      "You’re replacing old heating or cooling equipment",
      "You want to lower your long-term energy costs",
      "You’d like to compare the cost of different efficient options",
      "You’re unsure whether your project might qualify for incentives",
    ],
    faqs: [
      {
        q: "Can you guarantee I’ll get a rebate?",
        a: "No. Eligibility and rebate amounts are set by the program and can change. We’ll help you understand what may apply and point out what to confirm with the program.",
      },
      {
        q: "What equipment usually qualifies?",
        a: "Qualifying equipment often includes certain heat pumps and ductless systems, but the list changes. Ask us about your project and we’ll help you check.",
      },
      {
        q: "Does a rebate change the installation?",
        a: "It can. Some programs have equipment and installation requirements. We plan the work with those in mind.",
      },
    ],
    related: ["heat-pump-installation", "mini-split-installation", "residential-hvac"],
  },

  /* ───────────────────────── Commercial refrigeration ─────────────────── */
  {
    slug: "commercial-refrigeration",
    title: "Commercial Refrigeration",
    short: "Repair and maintenance for walk-in coolers, freezers, reach-ins and draft beer systems.",
    category: "refrigeration",
    audience: "Businesses",
    icon: "refrigeration",
    eyebrow: "Commercial · Refrigeration",
    h1: "Commercial refrigeration repair and maintenance",
    metaDescription:
      "Commercial refrigeration repair and maintenance for walk-in coolers, freezers, reach-in units and draft beer systems in Worcester County and Central Massachusetts.",
    intro: [
      "Restaurants, bars and food-service businesses depend on refrigeration every hour they’re open. When a cooler stops holding temperature, product and revenue are on the line.",
      "We diagnose, repair and maintain commercial refrigeration — walk-in coolers and freezers, reach-in units and draft beer systems — and we understand why speed and clear communication matter.",
    ],
    included: [
      "Walk-in coolers and freezers",
      "Reach-in coolers and freezers",
      "Draft beer refrigeration systems",
      "Compressor, evaporator and condenser service",
      "Temperature and defrost problems",
      "Door seal and drain issues",
      "Refrigeration diagnostics",
      "Preventive maintenance",
    ],
    why: [
      {
        title: "Root-cause diagnostics",
        text: "We test to find the real problem so you pay for the right repair, not a guess.",
      },
      {
        title: "Built for busy kitchens and bars",
        text: "We understand service hours, health requirements and what a down cooler costs you.",
      },
      {
        title: "Emergency service",
        text: "Call 24/7. The sooner a failing unit is checked, the less product you put at risk.",
      },
    ],
    signsHeading: "Call us if you notice",
    signs: [
      "A walk-in or reach-in isn’t holding temperature",
      "Ice is building up on the evaporator coil",
      "The compressor runs constantly or cycles on and off",
      "Water is pooling inside or under the unit",
      "Draft beer is pouring warm or foamy",
    ],
    faqs: [
      {
        q: "Do you repair walk-in coolers and freezers?",
        a: "Yes. We diagnose and repair walk-ins and reach-in units for restaurants, bars and other food-service businesses.",
      },
      {
        q: "Can you fix a draft beer system that pours warm or foamy?",
        a: "Yes. Warm or foamy pours usually come down to temperature, gas pressure or the lines. We test each and fix the cause.",
      },
      {
        q: "Do you offer preventive maintenance for refrigeration?",
        a: "Yes. Because refrigeration runs constantly, regular maintenance is one of the best ways to avoid a failure. Ask us about a schedule.",
      },
    ],
    related: ["preventive-maintenance", "emergency-hvac", "commercial-hvac"],
    image: {
      folder: "work",
      file: "work-4.jpg",
      alt: "Commercial retail space with refrigerated display cases along the walls",
    },
  },
];

export const SERVICE_BY_SLUG: Record<string, Service> = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s]),
);

export const servicesByCategory = (id: CategoryId) =>
  SERVICES.filter((s) => s.category === id);

export const serviceHref = (slug: string) => `/services/${slug}/`;
