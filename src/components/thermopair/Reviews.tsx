import { ArrowUpRight } from "lucide-react";

import { GOOGLE_REVIEWS_URL, GoogleGlyph, Stars } from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/SocialProof";
import { SectionHeading, container } from "./ui";

/**
 * Real Google reviews, provided by Thermopair, shown verbatim (spelling and
 * grammar untouched). Owner replies are intentionally left out.
 * Note: Sabato Depasquale's review was cut off ("… More") in the copy we
 * received, so it keeps the longer text previously transcribed from the
 * Google profile. Star ratings were not included in the copy; all reviews
 * are shown as 5 stars.
 */
const REVIEWS = [
  {
    author: "Sabato Depasquale",
    quote:
      "I highly recommend Thermopair HVAC-R. They are extremely knowledgeable when it comes to commercial refrigeration and understand how important it is to keep restaurant equipment running properly. Their team was responsive and professional.",
  },
  {
    author: "Rafael Klipp Borges",
    quote:
      "Thermopair did a great job. Very professional, responsive, and easy to work with throughout the entire process. The quality of the work was excellent, and everything was completed on time. I would definitely recommend them to anyone looking for refrigeration services.",
  },
  {
    author: "Cal Santos",
    quote:
      "This week I hired Thermopair to repair my refrigerator after it stopped working, and Wanderson was extremely proactive and attentive throughout the entire process.\n\nHe got my refrigerator working again and gave me so much confidence in his work that I asked him to inspect all of my other refrigerators as well.\n\nGreat service, professionalism, and attention to detail. Highly recommended!",
  },
  {
    author: "Eduardo Braga",
    quote: "Great company, fast service, 24 hours 7 days a week, when I have a problem it's the first one I call",
  },
  {
    author: "Adam Khan",
    quote:
      "Excellent service from start to finish! He did an outstanding job with our HVAC, electrical, and plumbing work. He has professional, knowledgeable, reliable, and paid great attention to detail.\n\nThe work was completed efficiently and professionally, and everything was done properly and up to code. I really appreciate his hard work, communication, and commitment to quality.\n\nHighly recommend them to anyone looking for dependable HVAC, electrical, and plumbing services. Great service and great workmanship!",
  },
  {
    author: "Danielle Da Silva",
    quote: "Very good professional, he helped us resolve the problem at same day.",
  },
  {
    author: "Utsav Patel",
    quote: "Experienced, very reliable responsive professional, great work at great price",
  },
  {
    author: "Maria A.",
    quote: "Woww he was so professional and does such great and neat work, absolutely exceeded my expectations .",
  },
  {
    author: "Jees Ferreira",
    quote: "Highly profissional, knows What they’re doing.",
  },
  {
    author: "Quintino Carvalho",
    quote: "Great price\nGreat work and great job for myself thanks",
  },
  {
    author: "Ricardo",
    quote: "It’s very good. He worked very hard well. It’s has good price. Thanks for you. Job",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="bg-white py-16 md:py-24">
      <div className={container}>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="reviews-title"
            eyebrow="Customer reviews"
            title="What homeowners and business owners say"
          />
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 font-body text-[16px] font-semibold text-heat-text underline-offset-4 hover:underline"
          >
            <GoogleGlyph size={18} />
            Read all reviews on Google
            <ArrowUpRight aria-hidden="true" className="h-[18px] w-[18px]" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>

        {/* Masonry columns: reviews vary a lot in length. */}
        <ul className="mt-10 columns-1 gap-5 md:columns-2 lg:columns-3">
          {REVIEWS.map((r) => (
            <li key={r.author} className="mb-5 break-inside-avoid">
              <figure className="flex flex-col rounded-lg border border-steel-200 bg-paper p-6">
                <div className="flex items-center gap-2">
                  <Stars size={16} className="text-heat" />
                  <span className="sr-only">5 out of 5 stars on Google</span>
                </div>
                <blockquote className="mt-4 whitespace-pre-line font-body text-[16px] leading-[1.65] text-ink">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-steel-200 pt-4 font-body text-[15px]">
                  <span className="block font-semibold text-ink">{r.author}</span>
                  <span className="text-steel-600">Google review</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
