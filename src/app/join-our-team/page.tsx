import type { Metadata } from "next";
import Image from "next/image";

import Breadcrumbs from "@/components/thermopair/Breadcrumbs";
import CareersForm from "@/components/thermopair/CareersForm";
import PageShell from "@/components/thermopair/PageShell";
import {
  SectionHeading,
  btnLight,
  container,
  padEnd,
  padStart,
} from "@/components/thermopair/ui";
import { cn } from "@/lib/utils";

/**
 * Careers page. Blive’s version is a bare form with no roles, pay or
 * benefits — a candidate learns nothing before being asked for their birth
 * date. This one answers the questions a technician actually has (what work,
 * what kit, what the on-call looks like) before it asks for anything, and
 * asks for less.
 *
 * DRAFT CONTENT: the role descriptions and the "what we offer" list describe
 * how the business presents itself elsewhere on this site. Thermopair must
 * confirm each line — particularly anything about pay, tools, training,
 * vehicles and time off — before this goes live. No specific wage, benefit
 * or hiring commitment has been invented here.
 */

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const ROLES = [
  {
    title: "Service technician — HVAC",
    text: "Diagnose and repair heating and cooling systems in homes and commercial buildings. Furnaces, boilers, split systems, heat pumps, rooftop units. You’ll be the one who finds the real cause rather than swapping parts until it stops.",
  },
  {
    title: "Refrigeration technician",
    text: "Commercial refrigeration for restaurants, bars and markets — walk-ins, reach-ins, prep tables, display cases and draft beer systems. Work that can’t wait, for customers whose stock is on the line.",
  },
  {
    title: "Installation technician",
    text: "New systems start to finish: heat pumps, mini splits, VRF and VRV, ductwork and rooftop equipment. Clean, code-compliant work you’d be happy to photograph when it’s done.",
  },
  {
    title: "Apprentice / helper",
    text: "No trade experience needed. If you’re reliable, willing to learn and not put off by a cold roof in February, we’ll teach you the rest and help you work toward EPA 608 certification.",
  },
];

const OFFER = [
  {
    title: "Varied work, not one repetitive task",
    text: "Residential and commercial, HVAC and refrigeration. You won’t spend every day doing the same filter change.",
  },
  {
    title: "Diagnose properly, then fix",
    text: "We find the real cause and explain it in plain language. You’re given the time to do that rather than being pushed to guess.",
  },
  {
    title: "A shared on-call rotation",
    text: "We run a 24/7 emergency line, and the rotation is shared across the team and paid. It isn’t every night, and it isn’t on one person.",
  },
  {
    title: "A local team",
    text: "Worcester County and nearby towns. You’re home at the end of the day, not three states away.",
  },
];

const LOOKING_FOR = [
  "You show up when you said you would, and you call ahead when you can’t.",
  "You can explain a fault to someone who doesn’t know what a capacitor is.",
  "You hold a valid driver’s licence and are comfortable driving to sites across the county.",
  "You’re EPA Section 608 certified — or willing to work toward it, which we’ll help with.",
  "You’re comfortable on a ladder and on a flat roof, in the weather the job happens in.",
  "You leave a site cleaner than you found it.",
];

export const metadata: Metadata = {
  title: { absolute: "HVAC & Refrigeration Jobs in Worcester County, MA | Thermopair" },
  description:
    "HVAC and commercial refrigeration jobs at Thermopair in Worcester County, MA. Service, refrigeration, installation and apprentice roles. Apply online.",
  alternates: { canonical: "/join-our-team/" },
};

export default function JoinOurTeamPage() {
  return (
    <PageShell>
      <section aria-labelledby="careers-title" className="tp-dark grid bg-ink text-white lg:grid-cols-2">
        <div className={cn("tp-grad-hero", padStart, padEnd, "py-10 md:py-14 lg:py-16 lg:pr-16")}>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Join our team" }]} />
          <p className="mb-3 mt-8 font-body text-[14px] font-semibold uppercase tracking-[0.08em] text-heat">
            Careers · Worcester County, MA
          </p>
          <h1
            id="careers-title"
            className="max-w-[18ch] font-heading text-[clamp(2.125rem,4.4vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.01em]"
          >
            Work with us
          </h1>
          <p className="mt-5 max-w-[56ch] font-body text-[18px] leading-[1.65] text-steel-100">
            We’re a local HVAC and refrigeration team in Central Massachusetts. If you do careful work, explain it
            honestly and want to be trusted to get on with it, we’d like to hear from you — whether you’ve been in the
            trade twenty years or are looking for a way in.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#apply" className={btnLight}>Apply now</a>
          </div>
        </div>

        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[520px]">
          <Image
            src={`${BASE}/thermopair/work/rtu-rheem-commercial.jpg`}
            alt="A commercial rooftop packaged unit installed by the Thermopair team"
            fill
            loading="eager"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      <section aria-labelledby="roles-title" className="bg-white py-14 md:py-20">
        <div className={container}>
          <SectionHeading
            id="roles-title"
            eyebrow="The work"
            title="The kinds of people we hire"
            lead="We’re not always recruiting for every one of these, but we read every application and keep good ones on file. Tell us which fits you."
          />
          <ul className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {ROLES.map((r) => (
              <li key={r.title} className="border-t-2 border-ink pt-5">
                <h3 className="font-heading text-[20px] font-bold leading-[1.3] text-ink">{r.title}</h3>
                <p className="mt-2 font-body text-[16px] leading-[1.6] text-steel-600">{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="offer-title" className="bg-paper py-14 md:py-20">
        <div className={container}>
          <SectionHeading id="offer-title" eyebrow="What it’s like" title="What you can expect from us" />
          <ul className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {OFFER.map((o) => (
              <li key={o.title} className="border-t-2 border-ink pt-5">
                <h3 className="font-heading text-[19px] font-bold leading-[1.3] text-ink">{o.title}</h3>
                <p className="mt-2 font-body text-[16px] leading-[1.6] text-steel-600">{o.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-[70ch] font-body text-[16px] leading-[1.6] text-steel-600">
            Pay depends on your certification and experience, and we’ll talk about it openly on the first call rather
            than making you guess from a range.
          </p>
        </div>
      </section>

      <section aria-labelledby="looking-title" className="bg-white py-14 md:py-20">
        <div className={cn(container, "grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16")}>
          <SectionHeading
            id="looking-title"
            eyebrow="What we look for"
            title="More about how you work than what’s on your résumé"
          />
          <ul>
            {LOOKING_FOR.map((item) => (
              <li
                key={item}
                className="border-t border-steel-300 py-4 font-body text-[17px] leading-[1.5] text-steel-700 last:border-b"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CareersForm />
    </PageShell>
  );
}
