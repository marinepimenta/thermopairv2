import { Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import { PHONE_HREF, btnOnDark, btnPrimary } from "./ui";

/**
 * Sticky bottom bar on phones: calling is the primary action (as in the
 * hero), the form is secondary. The page adds matching bottom padding so
 * content never hides behind it.
 */
export default function MobileCallBar() {
  return (
    <div
      className="tp-dark fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-steel-950 px-4 pt-3 lg:hidden"
      style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto grid max-w-[560px] grid-cols-2 gap-3">
        <a href={PHONE_HREF} className={cn(btnPrimary, "px-3")}>
          <Phone aria-hidden="true" className="h-[18px] w-[18px]" />
          Call now
        </a>
        <a href="#request-service" className={cn(btnOnDark, "px-3")}>
          Request service
        </a>
      </div>
    </div>
  );
}
