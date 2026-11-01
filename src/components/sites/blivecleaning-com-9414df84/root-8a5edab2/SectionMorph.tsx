import { cn } from "@/lib/utils";

/**
 * Transição entre uma banda escura e uma clara (ou o inverso).
 *
 * Renderiza uma forma com raio elíptico grande, pintada com a cor da seção
 * SEGUINTE, que sobe por cima da anterior via margin-bottom negativa. Durante
 * o scroll ela achata e cresce (scaleY + raio), animada por
 * `animation-timeline: view()` — CSS puro, sem scroll listener.
 *
 * Onde não há suporte, ou com prefers-reduced-motion, o estado estático já é a
 * curva final. Puramente decorativo: aria-hidden e fora do fluxo de foco.
 *
 * Uso: colocar IMEDIATAMENTE antes da seção de destino.
 *   <SectionMorph to="light" />
 *   <section className="band-light"> … </section>
 */
export default function SectionMorph({
  to,
  className,
}: {
  to: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "morph",
        to === "light" ? "morph-light" : "morph-dark",
        className,
      )}
    />
  );
}
