import { cn } from "@/lib/utils";

/**
 * Google review link, stars and Google glyph used by the hero and the
 * reviews section. Stars are decorative (aria-hidden); the accessible name
 * comes from the adjacent text, so no unverified rating is announced.
 */
export const GOOGLE_REVIEWS_URL = "https://share.google/N2kOZ0X9MujMSPQ1d";

export function Stars({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" focusable="false">
          <path d="M12 2l2.9 6.26 6.9.6-5.2 4.55 1.57 6.79L12 16.9l-6.17 3.3 1.57-6.79-5.2-4.55 6.9-.6L12 2z" />
        </svg>
      ))}
    </span>
  );
}

export function GoogleGlyph({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" focusable="false" className="shrink-0">
      <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
      <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z" />
      <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
    </svg>
  );
}

/**
 * Instagram mark. Inline rather than from lucide-react: v1 dropped its brand
 * icons, so the glyph lives here next to the other marks we draw ourselves.
 * Monochrome and currentColor, so it inherits the link's hover state.
 */
export function InstagramGlyph({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="shrink-0"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.4" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Google's "posted by a real account" check. Decorative — the card says it in text. */
export function VerifiedGlyph({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="shrink-0">
      <circle cx="12" cy="12" r="11" fill="#4285F4" />
      <path d="M7 12.4l3.2 3.2L17 8.8" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Initial-letter avatar. Google shows reviewer photos; we don't host them, so
 * each reviewer gets a stable brand-gradient disc instead of a grey blank.
 */
const AVATAR_TINTS = [
  "from-heat to-purple",
  "from-purple to-purple-deep",
  "from-purple-soft to-purple-deep",
  "from-heat to-heat-hover",
  "from-heat-text to-purple-deep",
  "from-purple-deep to-heat",
];

export function ReviewAvatar({ name, className }: { name: string; className?: string }) {
  // Stable per name, so a reviewer keeps the same colour between renders.
  const tint = AVATAR_TINTS[[...name].reduce((n, c) => n + c.charCodeAt(0), 0) % AVATAR_TINTS.length];
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br font-heading text-[15px] font-bold text-white",
        tint,
        className,
      )}
    >
      {initials}
    </span>
  );
}
