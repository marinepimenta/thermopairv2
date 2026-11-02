import { Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import { PHONE_HREF, btnPrimary } from "./ui";

/**
 * Sticky bottom bar on phones: one tap to call, one tap to the form.
 * The page adds matching bottom padding so content never hides behind it.
 */
export default function MobileCallBar() {
  return (
    <div
      className="tp-dark fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-steel-950 px-4 pt-3 lg:hidden"
      style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto grid max-w-[560px] grid-cols-2 gap-3">
        <a
          href={PHONE_HREF}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-steel-400/60 font-body text-[16px] font-semibold text-white"
        >
          <Phone aria-hidden="true" className="h-[18px] w-[18px]" />
          Call now
        </a>
        <a href="#request-service" className={cn(btnPrimary, "px-3")}>
          Request service
        </a>
      </div>
    </div>
  );
}
