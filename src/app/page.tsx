import About from "@/components/thermopair/About";
import Faq, { FAQS } from "@/components/thermopair/Faq";
import { JsonLd, faqSchema } from "@/components/thermopair/Schema";
import Hero from "@/components/thermopair/Hero";
import HowWeWork from "@/components/thermopair/HowWeWork";
import PageShell from "@/components/thermopair/PageShell";
import PathChooser from "@/components/thermopair/PathChooser";
import RecentWork from "@/components/thermopair/RecentWork";
import Refrigeration from "@/components/thermopair/Refrigeration";
import RequestForm from "@/components/thermopair/RequestForm";
import Reviews from "@/components/thermopair/Reviews";
import ServiceArea from "@/components/thermopair/ServiceArea";
import Services from "@/components/thermopair/Services";

/**
 * Thermopair HVAC-R home. Other pages: /services (hub) and
 * /services/[slug] (one page per service, data in src/lib/services.ts).
 * The previous clone lives untouched in
 * src/components/sites/blivecleaning-com-9414df84/ for comparison.
 */
export default function Home() {
  return (
    <PageShell>
      {/* Mirrors the FAQ section below — the markup must match the visible text. */}
      <JsonLd data={faqSchema(FAQS)} />
      <Hero />
      <PathChooser />
      {/* The differentiator comes right after the chooser, before the full service list. */}
      <Refrigeration />
      {/* Real job photos right after refrigeration: most of them are refrigeration work. */}
      <RecentWork />
      <Services />
      <HowWeWork />
      <Reviews />
      <About />
      <ServiceArea />
      <Faq />
      <RequestForm />
    </PageShell>
  );
}
