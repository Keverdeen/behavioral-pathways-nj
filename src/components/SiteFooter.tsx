export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 mt-32">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <div className="size-9 rounded-lg bg-gradient-cta grid place-items-center text-primary-foreground font-bold text-sm">JBC</div>
            <div className="font-display font-bold">Jersey Behavioral Care</div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            Outpatient behavioral health services and coordinated referral support for organizations,
            professionals, and individuals across New Jersey.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Location</h4>
          <p className="text-sm text-muted-foreground">Union, New Jersey</p>
          <p className="text-sm text-muted-foreground mt-1">Telehealth available statewide</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Services</h4>
          <ul className="text-sm text-muted-foreground space-y-1.5">
            <li>Therapy & Counseling</li>
            <li>Evaluations</li>
            <li>Medication Management</li>
            <li>Care Coordination</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Jersey Behavioral Care. All rights reserved.
      </div>
    </footer>
  );
}
