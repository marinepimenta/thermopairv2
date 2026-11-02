import MobileCallBar from "./MobileCallBar";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

/** Shared chrome for every page: skip link, header, main landmark, footer, mobile call bar. */
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="tp-page flex min-h-full flex-col overflow-x-clip pb-[76px] lg:pb-0">
      <a
        href="#main"
        className="sr-only z-[60] rounded-md bg-ink px-4 py-3 font-body text-[16px] font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>
      <SiteFooter />
      <MobileCallBar />
    </div>
  );
}
