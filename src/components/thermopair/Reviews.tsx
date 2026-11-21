"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { GOOGLE_REVIEWS_URL, GoogleGlyph, ReviewAvatar, Stars, VerifiedGlyph } from "./SocialProof";
import { SectionHeading, container } from "./ui";

/**
 * Real Google reviews, provided by Thermopair, shown verbatim (spelling and
 * grammar untouched). Owner replies are intentionally left out.
 * Note: Sabato Depasquale's review was cut off ("… More") in the copy we
 * received, so it keeps the longer text previously transcribed from the
 * Google profile. Star ratings were not included in the copy; all reviews
 * are shown as 5 stars.
 *
 * To add a new review: append `{ author, quote }` here — the carousel, the
 * card sizing and the arrows all follow the array length on their own.
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

/** Above this, the card clamps the quote and offers “Read more”. */
const CLAMP_AT = 190;

function ReviewCard({ author, quote }: { author: string; quote: string }) {
  const [open, setOpen] = useState(false);
  const long = quote.length > CLAMP_AT;

  return (
    <li className="flex w-[290px] shrink-0 snap-start sm:w-[340px]">
      <figure className="flex w-full flex-col rounded-2xl border border-steel-200 bg-white p-6 shadow-[0_1px_2px_rgba(19,19,19,0.04),0_12px_28px_-18px_rgba(19,19,19,0.28)]">
        <div className="flex items-center gap-3">
          <ReviewAvatar name={author} />
          <figcaption className="min-w-0 flex-1">
            <span className="block truncate font-body text-[15px] font-semibold text-ink">{author}</span>
            <span className="font-body text-[13px] text-steel-600">Google review</span>
          </figcaption>
          <GoogleGlyph size={18} />
        </div>

        <div className="mt-4 flex items-center gap-2">
          <Stars size={15} className="text-heat" />
          <VerifiedGlyph />
          <span className="sr-only">Rated 5 out of 5 stars on Google</span>
        </div>

        <blockquote
          className={cn(
            "mt-3 whitespace-pre-line font-body text-[15px] leading-[1.6] text-steel-700",
            !open && "line-clamp-5",
          )}
        >
          {quote}
        </blockquote>

        {long && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="mt-3 cursor-pointer self-start font-body text-[14px] font-semibold text-purple-deep underline underline-offset-4 hover:text-purple"
          >
            {open ? "Read less" : "Read more"}
            <span className="sr-only"> of {author}’s review</span>
          </button>
        )}
      </figure>
    </li>
  );
}

function ArrowButton({
  dir,
  disabled,
  onClick,
}: {
  dir: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  const Icon = dir === "prev" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "prev" ? "Previous reviews" : "Next reviews"}
      className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-steel-300 bg-white text-ink transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-white disabled:cursor-default disabled:border-steel-200 disabled:bg-white disabled:text-steel-300"
    >
      <Icon aria-hidden="true" className="h-5 w-5" />
    </button>
  );
}

export default function Reviews() {
  const track = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 2);
  }, []);

  // Card widths change at the sm breakpoint, so recheck on resize too.
  useEffect(() => {
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [sync]);

  const nudge = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    // One card plus its gap, so a click always lands on a card edge.
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="bg-paper py-16 md:py-24">
      <div className={container}>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="reviews-title"
            eyebrow="Customer reviews"
            title="What homeowners and business owners say"
          />
          <div className="hidden shrink-0 gap-3 md:flex">
            <ArrowButton dir="prev" disabled={atStart} onClick={() => nudge(-1)} />
            <ArrowButton dir="next" disabled={atEnd} onClick={() => nudge(1)} />
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[232px_minmax(0,1fr)] lg:items-center lg:gap-12">
          {/* Rating rail: the verdict, stated once and large. No review count —
              the rating is the claim, not the volume. */}
          <div className="text-center lg:text-left">
            <p className="font-heading text-[clamp(2.125rem,4vw,2.75rem)] font-bold uppercase leading-none tracking-[-0.01em] text-ink">
              Excellent
            </p>
            <Stars size={28} className="mt-3 justify-center text-heat lg:justify-start" />
            <p className="mt-3 font-body text-[16px] leading-[1.5] text-steel-600">
              <span className="font-semibold text-ink">5-star rated</span> by homeowners and
              business owners on Google.
            </p>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 items-center gap-2 font-body text-[15px] font-semibold text-purple-deep underline underline-offset-4 hover:text-purple"
            >
              <GoogleGlyph size={17} />
              Read reviews on Google
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>

          {/* Scroller is focusable so the arrows aren't the only way through. */}
          <ul
            ref={track}
            onScroll={sync}
            tabIndex={0}
            role="region"
            aria-label="Customer reviews from Google, scrollable"
            className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0"
          >
            {REVIEWS.map((r) => (
              <ReviewCard key={r.author} {...r} />
            ))}
          </ul>
        </div>

        <div className="mt-2 flex justify-center gap-3 md:hidden">
          <ArrowButton dir="prev" disabled={atStart} onClick={() => nudge(-1)} />
          <ArrowButton dir="next" disabled={atEnd} onClick={() => nudge(1)} />
        </div>
      </div>
    </section>
  );
}
