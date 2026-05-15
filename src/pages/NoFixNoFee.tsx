import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { applySEO } from "@/lib/seo";

const sections = [
  {
    h: "1. The promise",
    b: "If we cannot resolve the fault you brought to us, you do not pay for the labour. No diagnosis fee, no callout charge, no \"we tried\" invoice. You walk away owing nothing for our time. This is the floor of how we operate — not a promotion, not a seasonal offer.",
  },
  {
    h: "2. What \"fix\" means",
    b: "A fix is the resolution of the specific fault recorded on your job sheet at intake. If the agreed fault is resolved — the laptop boots, the data is recovered, the network is back up, the BitLocker volume is unlocked — the job is considered fixed and standard pricing applies. If the agreed fault cannot be resolved, no labour is charged.",
  },
  {
    h: "3. What is always free",
    b: "Initial diagnosis on any job we go on to repair is free. Quotes are free. Advice given during intake is free. If we determine the work is uneconomical or outside our scope before starting, we will tell you plainly and you will not be charged.",
  },
  {
    h: "4. What is not covered",
    b: "Parts ordered specifically for your job at your written approval are not refundable if the repair subsequently fails — you keep the part. Third-party data-recovery laboratory fees, where you have approved escalation in writing, are payable to that laboratory directly. Damage caused by continued use of a device against our written advice is not covered.",
  },
  {
    h: "5. BitLocker recovery",
    b: "BitLocker recovery is performed in person only and is subject to the same no-fix-no-fee floor. If we cannot recover access to your volume after exhausting the agreed recovery path, you do not pay for our time. Proof of ownership is required before any recovery attempt — see our Privacy Policy for detail.",
  },
  {
    h: "6. Remote rescue",
    b: "For remote rescue jobs, the same principle applies: if the fault recorded at intake is not resolved over the session, no labour is charged. Sessions that are paused at your request, or where access is withdrawn before diagnosis is complete, are handled case by case and discussed with you before any charge is raised.",
  },
  {
    h: "7. 15% price-beat guarantee",
    b: "If you obtain a written quote from a comparable local IT practice for the same documented work, we will beat that quote by 15%. The competing quote must be itemised, dated within the last 14 days, and for an equivalent scope (same fault, same parts grade, same warranty terms). This guarantee runs alongside the no-fix-no-fee policy — they are not mutually exclusive.",
  },
  {
    h: "8. How a job runs end-to-end",
    b: "Intake — fault is recorded in writing and agreed with you. Diagnosis — performed at no cost. Quote — issued in writing before any chargeable work begins. Repair — carried out only against your approval. Outcome — if fixed, standard pricing applies; if not fixed, no labour is charged. You are kept informed at each step.",
  },
  {
    h: "9. Why we offer this",
    b: "A sole-operator practice survives on trust, not volume. The no-fix-no-fee floor exists so that the risk of bringing a device to us sits with us, not with you. It also keeps us honest — we only take on work we are confident we can complete.",
  },
  {
    h: "10. Questions",
    b: "If anything in this policy is unclear, ask before you book. We would rather spend ten minutes on the phone setting expectations than have a misunderstanding at the end of a job. Contact: jaleed01@altctrl.run.",
  },
];

const NoFixNoFee = () => {
  const hero = useScrollReveal();
  const body = useScrollReveal();

  useEffect(() => {
    applySEO({
      title: "No Fix No Fee — ALTCTRL IT Services",
      description:
        "If we can't resolve the fault, you don't pay for the labour. Free diagnosis on repair, plus a 15% price-beat guarantee on written quotes.",
      canonical: "https://altctrl.run/no-fix-no-fee",
    });
  }, []);

  const updated = "14 May 2026";

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-surface bg-noise px-6 md:px-20 pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-circuit opacity-50" />
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, transparent 35%, hsl(220 22% 7%) 100%)" }}
        />

        <div ref={hero.ref} className={`relative z-[2] max-w-4xl mx-auto ${hero.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[3px] text-primary uppercase mb-6 border border-primary/40 bg-primary/5 px-3 py-1.5 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-dot" />
            IT Services · Guarantee
          </div>
          <h1 className="font-display text-[clamp(36px,5.4vw,68px)] leading-[1.05] tracking-[-0.02em] mb-5">
            No Fix, <span className="text-primary">No Fee.</span>
          </h1>
          <p className="text-base md:text-lg text-dim leading-relaxed max-w-2xl">
            If we cannot resolve the fault you brought to us, you do not pay for the labour. Free diagnosis on any job we go on to repair, and a 15% price-beat guarantee against any comparable written quote.
          </p>
          <div className="mt-6 text-[12px] tracking-[3px] text-faint uppercase">Effective: {updated}</div>
        </div>
      </section>

      {/* Body */}
      <section className="px-6 md:px-20 py-16 md:py-20 bg-background">
        <div ref={body.ref} className={`max-w-3xl mx-auto ${body.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <div className="bg-surface2 border border-border rounded-md p-6 mb-10">
            <div className="text-[11px] tracking-[3px] text-faint uppercase mb-2">// the floor</div>
            <p className="text-sm text-dim leading-relaxed">
              This is the operating floor of <strong className="text-foreground font-medium">IT Services</strong> at ALTCTRL Solutions — not a promotion. If the agreed fault is not resolved, the labour is not charged.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="font-display text-xl md:text-2xl text-foreground mb-3 tracking-[-0.01em]">{s.h}</h2>
                <p className="text-sm md:text-[15px] text-dim leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-border flex flex-wrap gap-3">
            <Link
              to="/get-help"
              className="font-mono text-[12px] tracking-[3px] uppercase bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/85 transition-colors"
            >
              Book a job →
            </Link>
            <Link
              to="/it-services"
              className="font-mono text-[12px] tracking-[3px] uppercase border border-border text-foreground px-6 py-3 rounded-md hover:border-primary transition-colors"
            >
              Back to IT Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NoFixNoFee;
