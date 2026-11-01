import AboutGreenSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/AboutGreenSection";
import AreasWeServeSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/AreasWeServeSection";
import BadgesStrip from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/BadgesStrip";
import CtaGridSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/CtaGridSection";
import FaqSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/FaqSection";
import FeaturesHandSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/FeaturesHandSection";
import HeroSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/HeroSection";
import QuickServiceSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/QuickServiceSection";
import QuoteFormSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/QuoteFormSection";
import Reveal from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/Reveal";
import SectionMorph from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/SectionMorph";
import ServiceCards from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/ServiceCards";
import ServicesIntroSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/ServicesIntroSection";
import SiteFooter from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/SiteFooter";
import SiteHeader from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/SiteHeader";
import StatsSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/StatsSection";
import TestimonialsSection from "@/components/sites/blivecleaning-com-9414df84/root-8a5edab2/TestimonialsSection";

/**
 * Narrativa visual da home, em bandas alternadas:
 *
 *   dark  → hero + formulário rápido/autoridade
 *   dark  → serviços · cards · depoimentos
 *   light → áreas
 *   dark  → sobre · diferenciais · números
 *   light → CTA · FAQ · selos
 *   light → formulário completo (id="schedule-service")
 *   dark  → rodapé
 *
 * Estrutura de conversão em duas camadas: o QuickServiceSection (nome,
 * telefone, CEP) captura o lead rápido logo abaixo da hero; todo CTA
 * "Schedule Service" do site rola até o formulário completo no fim da
 * página, que preserva os campos e a lógica originais.
 *
 * O card do QuickServiceSection sobe por cima do rodapé da hero via margem
 * negativa — mesma cor de fundo dos dois lados, sem costura visível; o
 * contraste fica só por conta do card branco. Fora esse ponto, cada troca
 * de banda passa por um <SectionMorph>, que sobe por cima da anterior com
 * raio elíptico e achata durante o scroll — a mudança acontece como
 * transformação, não como corte.
 */
export default function Home() {
  return (
    <div className="thermo-page flex min-h-full flex-col overflow-x-clip">
      <Reveal />
      <SiteHeader />

      <main className="flex-1">
        <HeroSection />
        <QuickServiceSection />

        {/* Mesma cor de fundo do QuickServiceSection — nenhum morph
            necessário aqui. */}
        <div className="band-dark">
          <ServicesIntroSection />
          <ServiceCards />
          <TestimonialsSection />
        </div>

        <SectionMorph to="light" />
        <div className="band-light">
          <AreasWeServeSection />
        </div>

        <SectionMorph to="dark" />
        <div className="band-dark">
          <AboutGreenSection />
          <FeaturesHandSection />
          <StatsSection />
        </div>

        <SectionMorph to="light" />
        <div className="band-light">
          <CtaGridSection />
          <FaqSection />
          <BadgesStrip />
        </div>

        {/* Formulário completo — destino de todo CTA "Schedule Service" do
            site. Última seção principal antes do rodapé, como pedido. */}
        <div className="band-light">
          <QuoteFormSection />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
