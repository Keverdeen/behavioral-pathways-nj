import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

type Ctx = { open: () => void; close: () => void };
const ReferralCtx = createContext<Ctx>({ open: () => {}, close: () => {} });

export function useReferralDialog() {
  return useContext(ReferralCtx);
}

export function ReferralDialogProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (document.querySelector('script[data-jbc-form-embed]')) return;
    const s = document.createElement("script");
    s.src = "https://link.msgsndr.com/js/form_embed.js";
    s.async = true;
    s.setAttribute("data-jbc-form-embed", "true");
    document.body.appendChild(s);
  }, []);

  return (
    <ReferralCtx.Provider value={{ open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl w-[95vw] p-0 overflow-hidden h-[90vh] sm:h-[85vh]">
          <VisuallyHidden>
            <DialogTitle>Jersey Behavioral Care — Referral Form</DialogTitle>
            <DialogDescription>Submit a referral inquiry to our intake team.</DialogDescription>
          </VisuallyHidden>
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/OgDIPpboASPfryBVlBkn"
            style={{ width: "100%", height: "100%", border: "none", borderRadius: 3 }}
            id="popup-OgDIPpboASPfryBVlBkn"
            data-layout="{'id':'POPUP'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="JERSEY BEHAVIORAL CARE (JBC) – REFERRAL FORM"
            data-height="911"
            data-layout-iframe-id="popup-OgDIPpboASPfryBVlBkn"
            data-form-id="OgDIPpboASPfryBVlBkn"
            title="JERSEY BEHAVIORAL CARE (JBC) – REFERRAL FORM"
          />
        </DialogContent>
      </Dialog>
    </ReferralCtx.Provider>
  );
}
