import { Link } from "@tanstack/react-router";
import { useReferralDialog } from "@/components/ReferralDialog";

export function SiteHeader() {
  const { open } = useReferralDialog();
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="size-9 rounded-lg bg-gradient-cta shadow-glow grid place-items-center text-primary-foreground font-bold text-sm">
            JBC
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-foreground">Jersey Behavioral Care</div>
            <div className="text-[11px] text-muted-foreground tracking-wide uppercase">Outpatient Clinic · NJ</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#partners" className="hover:text-foreground transition">Who We Serve</a>
          <a href="#process" className="hover:text-foreground transition">Process</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <button onClick={open} className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-cta px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95 transition cursor-pointer">
          Submit Referral →
        </button>
      </div>
    </header>
  );
}
