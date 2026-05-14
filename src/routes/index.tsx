import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-illustration.png";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useReferralDialog } from "@/components/ReferralDialog";
import {
  Building2, Scale, Briefcase, GraduationCap, Landmark, HeartPulse,
  Video, Languages, CalendarClock, Workflow, ArrowRight, CheckCircle2,
  Brain, Stethoscope, ClipboardList, Pill, MessageSquareHeart, Users,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jersey Behavioral Care — Outpatient Behavioral Health Referral Support in NJ" },
      { name: "description", content: "Therapy, counseling, evaluations and structured outpatient behavioral health referral coordination across New Jersey. Telehealth and bilingual providers available." },
    ],
  }),
  component: HomePage,
});

const audiences = [
  { icon: Building2, label: "Hospitals & Discharge Teams" },
  { icon: Scale, label: "Courts & Legal Professionals" },
  { icon: Briefcase, label: "HR Departments & Employers" },
  { icon: GraduationCap, label: "Schools & Colleges" },
  { icon: Landmark, label: "Government & Social Services" },
  { icon: HeartPulse, label: "Community & Healthcare Providers" },
];

const services = [
  { icon: MessageSquareHeart, title: "Individual Therapy", desc: "Personalized one-on-one therapy tailored to each client's clinical needs." },
  { icon: Brain, title: "Behavioral Counseling", desc: "Structured counseling for adolescents, adults, and families." },
  { icon: Stethoscope, title: "Psychiatric Evaluations", desc: "Comprehensive psychiatric assessments by licensed providers." },
  { icon: ClipboardList, title: "Psychological Evaluations", desc: "Detailed psychological testing and clinical recommendations." },
  { icon: Pill, title: "Medication Management", desc: "Ongoing medication oversight aligned with treatment plans." },
  { icon: Video, title: "Telehealth Appointments", desc: "Secure virtual sessions for accessible behavioral health care." },
  { icon: ClipboardList, title: "Behavioral Assessments", desc: "Targeted assessments to inform care planning and referrals." },
  { icon: Users, title: "Care Coordination", desc: "Coordinated communication with referring teams and families." },
];

const partners = [
  {
    icon: Building2,
    title: "Discharge & Care Coordination",
    intro: "For hospitals, discharge planners, social workers, and behavioral health units seeking outpatient referral options.",
    items: ["Post-discharge outpatient follow-up", "Therapy & counseling referrals", "Behavioral health evaluations", "Coordinated intake communication", "Telehealth scheduling options"],
    sources: "Emergency departments · Psychiatric screening units · Social work · PHP/IOP step-down · Case management",
  },
  {
    icon: Scale,
    title: "Legal & Court-Related Cases",
    intro: "Structured clinical support and coordinated outpatient services alongside legal case management.",
    items: ["Behavioral health evaluations", "Therapy & counseling", "Anger management support", "Care coordination", "Structured documentation when appropriate"],
    sources: "Attorneys · Courts · Probation programs · Reentry services · Community professionals",
  },
  {
    icon: Briefcase,
    title: "Workplace & Employee Support",
    intro: "Outpatient behavioral health resources for employees during challenging periods.",
    items: ["Individual counseling", "Stress & burnout support", "Behavioral health evaluations", "Therapy services", "Telehealth availability"],
    sources: "HR teams · Employee assistance programs · Organizational leaders",
  },
  {
    icon: GraduationCap,
    title: "Students & Education",
    intro: "Referral coordination with educational professionals, counselors, and student support teams.",
    items: ["Therapy & counseling", "Behavioral assessments", "Emotional support services", "ADHD-related behavioral support", "Family & school care coordination"],
    sources: "School counselors · College wellness centers · Student support teams",
  },
  {
    icon: Landmark,
    title: "Agencies & Community Programs",
    intro: "Coordinated outpatient resources for government agencies, social services, and community programs.",
    items: ["Behavioral health evaluations", "Therapy & counseling services", "Coordinated intake communication", "Structured documentation processes", "Telehealth support when appropriate"],
    sources: "State & county agencies · Nonprofits · Community health programs",
  },
];

const reasons = [
  "Timely appointment availability",
  "Telehealth services available",
  "Bilingual providers available",
  "Organized intake coordination",
  "Responsive communication",
  "Structured referral process",
  "Outpatient behavioral health support",
  "Coordination with professionals and organizations",
];

const steps = [
  { n: "01", title: "Submit a Referral", desc: "Submit a referral inquiry or contact the intake team directly." },
  { n: "02", title: "Clinical Review", desc: "The case is reviewed and appropriate services are identified." },
  { n: "03", title: "Scheduling & Intake", desc: "Coordination begins based on provider availability and clinical fit." },
  { n: "04", title: "Ongoing Communication", desc: "Documentation and communication coordinated when applicable." },
];

function HomePage() {
  const { open: openReferral } = useReferralDialog();
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-1/4 size-96 rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 size-96 rounded-full bg-accent/15 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
          <div className="relative">
            <div className="absolute -left-6 -bottom-10 dot-grid size-32 opacity-60" aria-hidden />
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="size-1.5 rounded-full bg-accent animate-pulse" />
              Outpatient Behavioral Health · Union, NJ
            </span>
            <h1 className="mt-6 font-display font-extrabold leading-[1.02] text-5xl sm:text-6xl lg:text-7xl">
              <span className="text-foreground">Behavioral Health</span>
              <br />
              <span className="text-gradient">Referral Support</span>
              <br />
              <span className="text-foreground">Built for New Jersey.</span>
            </h1>
            <div className="mt-6 h-px w-24 bg-gradient-cta" />
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Jersey Behavioral Care delivers outpatient therapy, counseling, evaluations, and coordinated
              referral support for hospitals, courts, employers, schools, and agencies across the state.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button onClick={openReferral} className="inline-flex items-center gap-2 rounded-full bg-gradient-cta px-7 py-3.5 font-semibold text-primary-foreground shadow-glow hover:shadow-[0_25px_70px_-15px_oklch(0.55_0.22_295_/_0.7)] transition cursor-pointer">
                Request Referral Information <ArrowRight className="size-4" />
              </button>
              <a href="tel:+19738472464" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-7 py-3.5 font-semibold text-foreground hover:bg-card transition cursor-pointer">
                Call +1 973-847-2464
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              {[
                { icon: Video, t: "Telehealth" },
                { icon: Languages, t: "Bilingual" },
                { icon: CalendarClock, t: "Timely Access" },
                { icon: Workflow, t: "Coordinated" },
              ].map(({ icon: I, t }) => (
                <div key={t} className="flex items-center gap-2 rounded-xl border border-border/50 bg-card/40 backdrop-blur px-3 py-2.5">
                  <I className="size-4 text-accent" />
                  <span className="text-xs font-medium">{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-cta opacity-20 blur-3xl rounded-full" aria-hidden />
            <img
              src={heroImg}
              alt="Coordinated behavioral health referral team illustration"
              width={1024}
              height={1024}
              className="relative w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="mx-auto max-w-7xl px-6 py-20" id="partners">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Who Refers to Us</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
            Organizations sending referrals to <span className="text-gradient">JBC Clinic</span> include:
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {audiences.map(({ icon: I, label }) => (
            <div key={label} className="group relative rounded-2xl border border-border/60 bg-card/40 backdrop-blur p-6 hover:border-primary/50 transition">
              <div className="size-11 rounded-xl bg-gradient-cta grid place-items-center text-primary-foreground shadow-glow">
                <I className="size-5" />
              </div>
              <p className="mt-4 font-semibold text-foreground">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-20" id="services">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Behavioral Health Services</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
              Outpatient care, <span className="text-gradient">individualized</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Services are tailored based on clinical evaluation and provider recommendations for adolescents,
            adults, families, and referred clients.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map(({ icon: I, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur p-6 hover:bg-card/70 transition group">
              <div className="size-10 rounded-lg bg-secondary grid place-items-center text-accent group-hover:bg-gradient-cta group-hover:text-primary-foreground transition">
                <I className="size-5" />
              </div>
              <h3 className="mt-5 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNER VERTICALS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Coordinated Support</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">Specialized referral pathways</h2>
        </div>
        <div className="space-y-4">
          {partners.map(({ icon: I, title, intro, items, sources }, i) => (
            <div key={title} className="grid lg:grid-cols-[1fr_1.4fr] gap-8 rounded-3xl border border-border/60 bg-card/40 backdrop-blur p-8 lg:p-10">
              <div>
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-xl bg-gradient-cta grid place-items-center text-primary-foreground shadow-glow">
                    <I className="size-6" />
                  </div>
                  <span className="text-sm font-mono text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-5 text-2xl font-bold">{title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{intro}</p>
                <p className="mt-5 text-xs text-muted-foreground/80 leading-relaxed border-l-2 border-accent/60 pl-3">
                  {sources}
                </p>
              </div>
              <ul className="grid sm:grid-cols-2 gap-3 content-start">
                {items.map((it) => (
                  <li key={it} className="flex items-start gap-3 rounded-xl bg-secondary/40 px-4 py-3">
                    <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-border/60 bg-gradient-to-br from-card/70 to-card/30 backdrop-blur p-10 lg:p-14 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 size-80 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="relative grid lg:grid-cols-[1fr_1.3fr] gap-10">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Why Organizations Choose Us</p>
              <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
                Built for <span className="text-gradient">responsive coordination</span>
              </h2>
              <p className="mt-5 text-muted-foreground max-w-md">
                Our infrastructure is designed to simplify outpatient referral coordination and support continuity of care.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {reasons.map((r) => (
                <div key={r} className="flex items-start gap-3 rounded-xl border border-border/50 bg-background/40 px-4 py-3.5">
                  <CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-20" id="process">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Referral Process</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">A clear path from <span className="text-gradient">inquiry to care</span></h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {steps.map(({ n, title, desc }) => (
            <div key={n} className="relative rounded-2xl border border-border/60 bg-card/40 backdrop-blur p-7">
              <div className="text-5xl font-display font-extrabold text-gradient">{n}</div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INSURANCE */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur p-8">
            <h3 className="text-2xl font-bold">Insurance & Accessibility</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Jersey Behavioral Care works with various insurance plans and referral sources. Insurance
              participation and coverage may vary. Telehealth availability may vary based on clinical
              appropriateness and licensing requirements.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Contact the clinic to verify scheduling availability and accepted plans.
            </p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur p-8">
            <h3 className="text-2xl font-bold">About the Clinic</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              An outpatient behavioral health organization based in Union, New Jersey, providing therapy,
              counseling, evaluations, and coordinated outpatient support for adolescents, adults, families,
              and referred clients requiring structured behavioral health services.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-[2.5rem] p-10 lg:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-cta opacity-95" aria-hidden />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%)]" aria-hidden />
          <div className="relative">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-primary-foreground max-w-3xl mx-auto leading-[1.05]">
              Looking for a reliable behavioral health provider for referrals?
            </h2>
            <p className="mt-6 text-primary-foreground/85 max-w-2xl mx-auto text-lg">
              Submit referral information directly through the referral form below:
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button onClick={openReferral} className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 font-semibold text-foreground hover:bg-background/90 transition cursor-pointer">
                Submit Referral Information <ArrowRight className="size-4" />
              </button>
            </div>
            <p className="mt-8 text-sm text-primary-foreground/80">
              Union, New Jersey · Therapy · Counseling · Evaluations · Telehealth
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
