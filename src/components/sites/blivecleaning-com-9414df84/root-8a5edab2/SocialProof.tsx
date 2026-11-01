import { cn } from "@/lib/utils";

/**
 * Elementos de prova social compartilhados pela hero e pelos depoimentos.
 *
 * NOTA SOBRE DADOS: não há nota agregada nem contagem de avaliações
 * verificadas no projeto, então nada disso é exibido — apenas o selo
 * "5-Star Rated" / "Google Reviews". Se a Thermopair confirmar a média e o
 * total do perfil do Google, dá para passá-los via props em
 * <GoogleReviewsBadge />.
 *
 * As estrelas são decorativas (aria-hidden): o nome acessível vem do texto
 * ao lado, para não afirmar uma nota que não foi verificada.
 */

export const GOOGLE_REVIEWS_URL = "https://share.google/N2kOZ0X9MujMSPQ1d";

export function Stars({
  size = 16,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          focusable="false"
        >
          <path d="M12 2l2.9 6.26 6.9.6-5.2 4.55 1.57 6.79L12 16.9l-6.17 3.3 1.57-6.79-5.2-4.55 6.9-.6L12 2z" />
        </svg>
      ))}
    </span>
  );
}

export function GoogleGlyph({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
      className="shrink-0"
    >
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}

/**
 * Selo de estrelas — compacto na hero, clicável para o perfil do Google.
 * `rating`/`reviewCount` só devem ser passados quando vierem do perfil real;
 * sem eles, mostra apenas `label` (padrão "Google Reviews").
 */
export function GoogleReviewsBadge({
  rating,
  reviewCount,
  label = "Google Reviews",
  href = GOOGLE_REVIEWS_URL,
  className,
}: {
  rating?: string;
  reviewCount?: number;
  label?: string;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center gap-3 rounded-full border border-thermo-mist/15 bg-white/[0.04] px-4 py-2.5 transition-colors duration-300 hover:border-thermo-orange/40 hover:bg-white/[0.08]",
        className,
      )}
    >
      <Stars size={15} className="text-thermo-orange" />
      <span aria-hidden="true" className="h-4 w-px bg-thermo-mist/20" />
      <span className="inline-flex items-center gap-2 font-body text-[13px] font-medium text-thermo-mist/85 transition-colors duration-300 group-hover:text-white">
        <GoogleGlyph size={15} />
        {rating ? (
          <>
            <span className="text-white">{rating}</span>
            <span>
              on Google
              {typeof reviewCount === "number" && ` · ${reviewCount} reviews`}
            </span>
          </>
        ) : (
          label
        )}
      </span>
    </a>
  );
}
