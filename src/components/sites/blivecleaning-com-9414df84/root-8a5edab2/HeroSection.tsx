import Image from "next/image";
import Link from "next/link";

import { GoogleReviewsBadge } from "./SocialProof";

const ASSET_BASE = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/sites/blivecleaning-com-9414df84/root-8a5edab2/images`;

export default function HeroSection() {
  return (
    /* min-height em svh evita o salto da barra de endereço no Safari iOS.
       O padding-top abre espaço para a navbar, que flutua sobre a hero. */
    <section data-hero className="band-dark relative isolate w-full overflow-hidden pt-[104px] md:pt-[128px] lg:min-h-[92svh]">
      {/* Halo laranja→roxo. Um gradiente só, sem blur filter. */}
      <div
        aria-hidden="true"
        className="hero-halo pointer-events-none absolute -right-[18%] -top-[22%] -z-10 h-[110vw] w-[110vw] max-h-[1000px] max-w-[1000px] opacity-70 lg:right-[2%] lg:top-[-14%]"
      />

      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-12 px-5 pb-20 md:px-8 lg:flex-row lg:items-center lg:gap-16 lg:pb-24">
        {/* Coluna editorial */}
        <div className="w-full lg:w-[52%]">
          <p
            className="reveal mb-6 font-body text-[12px] font-medium uppercase tracking-[0.22em] text-thermo-orange"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            Climate Care · Massachusetts
          </p>

          <h1
            className="reveal max-w-[15ch] text-balance font-heading text-[clamp(2.75rem,7.2vw,5.25rem)] font-medium leading-[1.02] !tracking-[-0.02em] text-white"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            Comfort you can count on in{" "}
            <em className="text-grad-signature not-italic">every season</em>
          </h1>

          <p
            className="reveal mt-7 max-w-[52ch] font-body text-[17px] leading-[1.65] text-thermo-mist/75 md:text-[19px]"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            Thermopair installs and maintains heating and cooling systems across
            Massachusetts. We handle the hard part, so your home stays
            comfortable and you always know what it costs.
          </p>

          <div
            className="reveal mt-10 flex flex-wrap items-center gap-3"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            <Link
              href="#schedule-service"
              className="inline-flex items-center justify-center rounded-full bg-thermo-orange px-7 py-4 font-body text-[14px] font-semibold uppercase tracking-[0.06em] text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-thermo-orange-deep"
            >
              Schedule Service
            </Link>
            <Link
              href="tel:+17744980528"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-thermo-mist/25 px-7 py-4 font-body text-[14px] font-semibold uppercase tracking-[0.06em] text-white transition-colors duration-300 hover:border-thermo-orange hover:text-thermo-orange"
            >
              <PhoneIcon />
              (774) 498-0528
            </Link>
          </div>

          {/* Selo de 5 estrelas logo abaixo dos CTAs — primeira coisa que
              valida a empresa, sem competir com o botão principal. A barra
              de autoridade (15+ anos, preço fechado, local, técnicos
              certificados) fica na seção seguinte, então os antigos chips
              de "Serving Massachusetts / Residential & Commercial / Fast
              emergency response" saíram daqui para não duplicar mensagem. */}
          <div
            className="reveal mt-8"
            style={{ "--i": 4 } as React.CSSProperties}
          >
            <GoogleReviewsBadge label="5-Star Rated" />
          </div>
        </div>

        {/* Arco: a foto sai do retângulo e vira uma janela editorial. */}
        <div className="relative w-full lg:w-[48%]">
          <div
            className="reveal hero-arch relative mx-auto aspect-[4/5] w-full max-w-[380px] sm:max-w-[440px] lg:mr-0 lg:max-w-none"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            <Image
              src={`${ASSET_BASE}/hvac/technician-ceiling-install.jpg`}
              alt="Thermopair technician installing a ceiling air outlet"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 48vw"
              className="object-cover"
            />
            {/* Fusão do pé da imagem com o fundo escuro. */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0b0b10] via-[#0b0b10]/45 to-transparent"
            />
          </div>

          {/* Selo sobreposto, ancorado na borda do arco. */}
          <div
            className="reveal absolute -bottom-4 left-1/2 flex w-max -translate-x-1/2 items-center gap-3 rounded-full border border-thermo-mist/15 bg-[#0b0b10]/85 px-5 py-3 backdrop-blur-sm lg:left-auto lg:right-6 lg:translate-x-0"
            style={{ "--i": 4 } as React.CSSProperties}
          >
            <span className="grad-signature h-8 w-8 shrink-0 rounded-full" />
            <span className="font-body text-[13px] leading-tight text-thermo-mist/85">
              Licensed, insured
              <br />
              and local to MA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 1.9.6 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.8 2Z" />
    </svg>
  );
}
