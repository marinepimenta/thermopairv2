"use client";

import { useState } from "react";

/**
 * Formulário rápido de captação, com a barra de autoridade logo abaixo,
 * dentro de um único card claro. O card sobe por cima do rodapé da hero via
 * margem negativa (mais forte no desktop, sutil no mobile), enquanto o
 * fundo desta seção continua exatamente na mesma cor da hero — sem costura
 * visível, o contraste inteiro fica por conta do card branco.
 *
 * Este é o formulário CURTO (Nome, Telefone, CEP). O formulário completo
 * continua em QuoteFormSection, agora ancorado em #schedule-service no fim
 * da página — os dois convivem como duas experiências de conversão
 * distintas, como pedido.
 *
 * Reaproveita o mesmo padrão do formulário completo: sem backend real no
 * projeto (nenhuma API route, server action ou fetch), então a submissão é
 * client-side com useState, igual ao QuoteFormSection.
 */

type QuickFormState = {
  name: string;
  phone: string;
  zip: string;
};

const initialState: QuickFormState = { name: "", phone: "", zip: "" };

const fieldClasses =
  "h-12 w-full rounded-xl border border-black/10 bg-thermo-paper px-4 font-body text-[15px] text-thermo-graphite outline-none transition-colors placeholder:text-thermo-slate focus:border-thermo-orange focus:bg-white focus:outline-none focus:ring-2 focus:ring-thermo-orange/25";

const TRUST_POINTS = [
  {
    label: "15+ Years of Experience",
    icon: ClockIcon,
  },
  {
    label: "Guaranteed Upfront Pricing",
    icon: ShieldCheckIcon,
  },
  {
    label: "Locally Owned & Operated",
    icon: HomeIcon,
  },
  {
    label: "Expert Service Professionals",
    icon: BadgeIcon,
  },
];

export default function QuickServiceSection() {
  const [form, setForm] = useState<QuickFormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function handleChange<K extends keyof QuickFormState>(
    key: K,
    value: QuickFormState[K],
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="relative w-full bg-[#0b0b10] px-5 pb-20 md:px-8 md:pb-28 lg:pb-16">
      <div className="mx-auto w-full max-w-[1100px]">
        <div
          className="reveal relative z-10 -mt-10 rounded-[28px] bg-white p-6 shadow-[0_24px_64px_-24px_rgba(0,0,0,0.5)] ring-1 ring-black/5 sm:-mt-14 sm:p-8 lg:-mt-28 lg:p-10"
          style={{ "--i": 0 } as React.CSSProperties}
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <h3 className="font-heading text-[22px] font-medium text-thermo-ink">
                Thanks!
              </h3>
              <p className="mt-2 font-body text-[15px] text-thermo-slate">
                We&rsquo;ll call you back shortly.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-5 lg:mb-6">
                <h2 className="font-heading text-[clamp(1.35rem,2vw,1.75rem)] font-medium leading-[1.15] text-thermo-ink">
                  Schedule Service
                </h2>
                <p className="mt-1 font-body text-[14px] text-thermo-slate">
                  Quick form — we&rsquo;ll call you back shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[1.4fr_1.2fr_1fr_auto] lg:gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    aria-label="Name (Required)"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={fieldClasses}
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    aria-label="Phone Number (Required)"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className={fieldClasses}
                  />
                  <input
                    type="text"
                    required
                    inputMode="numeric"
                    placeholder="ZIP Code"
                    aria-label="ZIP Code (Required)"
                    value={form.zip}
                    onChange={(e) => handleChange("zip", e.target.value)}
                    className={fieldClasses}
                  />
                  <button
                    type="submit"
                    className="inline-flex h-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-thermo-orange px-7 font-body text-[14px] font-semibold uppercase tracking-[0.06em] text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-thermo-orange-deep sm:col-span-2 lg:col-span-1"
                  >
                    Request a Call
                  </button>
                </div>
              </form>
            </>
          )}

          <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-6 border-t border-black/8 pt-6 sm:grid-cols-4 sm:gap-6 lg:mt-8 lg:pt-8">
            {TRUST_POINTS.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2.5 text-center"
              >
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-thermo-orange/10 text-thermo-orange"
                >
                  <Icon />
                </span>
                <span className="font-body text-[13px] font-medium leading-[1.3] text-thermo-ink">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 10-4-2.5-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9a1 1 0 0 0 1 1h3v-6h4v6h3a1 1 0 0 0 1-1v-9" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="9" r="5.5" />
      <path d="M9 13.5 7.5 21l4.5-2.5 4.5 2.5-1.5-7.5" />
    </svg>
  );
}
