"use client";

import { useEffect } from "react";

/**
 * Ativa as animações de entrada da página.
 *
 * Marca <html> com data-reveal-ready — só a partir daí o CSS aplica o estado
 * inicial (opacity 0). Sem JS, ou antes da hidratação, tudo já está visível:
 * nenhum conteúdo some e não há layout shift.
 *
 * Cada elemento com a classe .reveal é observado uma única vez. O stagger sai
 * da custom property --i, definida no próprio elemento.
 */
export default function Reveal() {
  useEffect(() => {
    const root = document.documentElement;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    root.setAttribute("data-reveal-ready", "");

    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!nodes.length) return;

    // Sem IntersectionObserver, revela tudo de imediato.
    if (typeof IntersectionObserver === "undefined") {
      nodes.forEach((n) => n.setAttribute("data-revealed", "true"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "true");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
    );

    // O que já está na viewport no primeiro paint revela sem esperar scroll.
    nodes.forEach((node) => {
      if (node.getBoundingClientRect().top < window.innerHeight * 0.9) {
        node.setAttribute("data-revealed", "true");
        return;
      }
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
