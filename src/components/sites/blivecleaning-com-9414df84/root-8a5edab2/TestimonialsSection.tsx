import { GOOGLE_REVIEWS_URL, GoogleGlyph, Stars } from "./SocialProof";

type Review = {
  author: string;
  quote: string;
};

/**
 * Avaliações reais de clientes, transcritas do perfil da Thermopair no Google.
 * As respostas da empresa e os metadados do Google (Local Guide, data,
 * curtidas) foram deixados de fora de propósito.
 */
const REVIEWS: Review[] = [
  {
    author: "Rafael Klipp Borges",
    quote:
      "Thermopair did a great job. Very professional, responsive, and easy to work with throughout the entire process. The quality of the work was excellent, and everything was completed on time. I would definitely recommend them to anyone looking for refrigeration services.",
  },
  {
    author: "Sabato Depasquale",
    quote:
      "I highly recommend Thermopair HVAC-R. They are extremely knowledgeable when it comes to commercial refrigeration and understand how important it is to keep restaurant equipment running properly. Their team was responsive and professional.",
  },
  {
    author: "Cal Santos",
    quote:
      "This week I hired Thermopair to repair my refrigerator after it stopped working, and Wanderson was extremely proactive and attentive throughout the entire process.",
  },
  {
    author: "Eduardo Braga",
    quote:
      "Great company, fast service, 24 hours 7 days a week. When I have a problem, it's the first one I call.",
  },
  {
    author: "Ricardo",
    quote:
      "It's very good. He worked very hard and did a great job. Good price. Thank you.",
  },
];

function initialsOf(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function ReviewCard({ review, featured }: { review: Review; featured?: boolean }) {
  return (
    <figure
      className={[
        // h-full + flex mantém as alturas iguais na grade, mesmo com textos
        // de tamanhos bem diferentes.
        "flex h-full w-full min-w-[82vw] snap-center flex-col rounded-[24px] border border-white/10 bg-white/[0.04] p-7 sm:min-w-[420px] lg:min-w-0 lg:p-8",
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-4">
        <Stars size={16} className="text-thermo-orange" />
        {/* Só o selo é clicável, não o card inteiro — mantém a leitura da
            avaliação limpa e ainda deixa fácil verificar no Google. */}
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-body text-[12px] text-thermo-mist/50 transition-colors duration-300 hover:text-white"
        >
          <GoogleGlyph size={14} />
          Google Review
        </a>
      </div>

      <blockquote
        className={[
          "mt-6 flex-1 font-body text-thermo-mist/80",
          featured
            ? "text-[18px] leading-[1.65] lg:text-[21px] lg:leading-[1.6]"
            : "text-[17px] leading-[1.65]",
        ].join(" ")}
      >
        {review.quote}
      </blockquote>

      <figcaption className="mt-7 flex items-center gap-3 border-t border-white/10 pt-6">
        <span
          aria-hidden="true"
          className="grad-signature flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-body text-[13px] font-semibold text-white"
        >
          {initialsOf(review.author)}
        </span>
        <span className="font-heading text-[16px] font-medium text-white">
          {review.author}
        </span>
      </figcaption>
    </figure>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="w-full py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-12">
          <div>
            <p
              className="reveal mb-4 font-body text-[12px] font-medium uppercase tracking-[0.22em] text-thermo-orange"
              style={{ "--i": 0 } as React.CSSProperties}
            >
              Customer Reviews
            </p>
            <h2
              id="testimonials-heading"
              className="reveal max-w-[18ch] text-balance font-heading text-[clamp(2rem,4.4vw,3.5rem)] font-medium leading-[1.06] text-white"
              style={{ "--i": 1 } as React.CSSProperties}
            >
              Trusted by homes and businesses across Massachusetts
            </h2>
          </div>

          <div
            className="reveal mt-6 lg:mt-0 lg:shrink-0 lg:text-right"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            <p className="max-w-[42ch] font-body text-[17px] leading-[1.65] text-thermo-mist/70 lg:ml-auto">
              What people say after we have been to their home or business.
            </p>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-3 inline-flex items-center gap-1.5 font-body text-[14px] font-semibold text-thermo-orange transition-colors duration-300 hover:text-thermo-orange-deep"
            >
              Read our Google Reviews
              <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Mobile: trilho horizontal com scroll-snap. Desktop: grade 3 colunas,
            com o primeiro card ocupando duas para dar hierarquia. */}
        {/* tabIndex torna o trilho rolável pelo teclado enquanto ele estiver
            em overflow (mobile/tablet), como pede o WCAG 2.1.1. */}
        <ul
          tabIndex={0}
          role="group"
          aria-label="Customer reviews"
          className="scrollbar-hide -mx-5 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 md:-mx-8 md:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0"
          style={{ "--i": 3 } as React.CSSProperties}
        >
          {REVIEWS.map((review, i) => (
            <li
              key={review.author}
              className={`reveal flex${i === 0 ? " lg:col-span-2" : ""}`}
              style={{ "--i": Math.min(i, 4) + 3 } as React.CSSProperties}
            >
              <ReviewCard review={review} featured={i === 0} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
