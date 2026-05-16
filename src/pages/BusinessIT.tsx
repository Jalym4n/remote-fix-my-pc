import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { applySEO, faqJsonLd, localBusinessJsonLd } from "@/lib/seo";

/**
 * Business IT — Google Ads-safe landing page.
 * Strictly B2B copy: managed services, fleet, compliance, on-site.
 * No consumer trigger words (no "home", "laptop screen", "virus", "locked").
 */

const trustItems = [
  { k: "Insured", v: "Professional liability cover" },
  { k: "NDA-ready", v: "Standard confidentiality" },
  { k: "Audit trail", v: "Documented work record" },
  { k: "GTA-based", v: "Mississauga · Ontario" },
];

const services = [
  {
    t: "Managed IT support",
    d: "Ongoing technical support for small and mid-sized organisations across the Greater Toronto Area. Defined response windows, single point of contact, monthly engagement reporting.",
  },
  {
    t: "Workstation fleet management",
    d: "Procurement guidance, standard build deployment, lifecycle replacement planning and asset documentation for office workstations.",
  },
  {
    t: "Network & Wi-Fi for offices",
    d: "Site survey, structured cabling, business-grade router and access-point deployment, segmented guest networks, VPN configuration.",
  },
  {
    t: "Account & tenant migrations",
    d: "Microsoft 365 and Google Workspace tenant setup, migration, and identity hardening. SSO and MFA enforcement across user populations.",
  },
  {
    t: "On-site triage & remediation",
    d: "Same-day on-site response across the GTA for business-impacting incidents. Documented findings and a written remediation plan for every visit.",
  },
  {
    t: "Compliance-aware data handling",
    d: "Procedures aligned with HIPAA-style data-handling expectations for clinical and professional practices: encrypted-in-transit transfer, access logging, and secure media disposal.",
  },
];

const steps = [
  { n: "01", t: "Discovery", d: "30-minute scoping call to understand your environment, pain points, and the outcomes you need." },
  { n: "02", t: "Statement of work", d: "Written scope, deliverables and a fixed engagement fee. No hourly creep, no surprises." },
  { n: "03", t: "Onboarding", d: "Documentation hand-over, agent / asset inventory, and an agreed escalation path." },
  { n: "04", t: "Ongoing engagement", d: "Recurring support against the agreed response windows, with monthly written summaries." },
];

const faqs = [
  {
    q: "What size organisations do you work with?",
    a: "Professional practices and small-to-mid sized organisations across the Greater Toronto Area — typically 5 to 75 seats. Larger engagements are accepted on a project basis under NDA.",
  },
  {
    q: "Are you insured?",
    a: "Yes. ALTCTRL Solutions carries professional liability cover and operates with a documented audit trail for every engagement.",
  },
  {
    q: "Where are you based?",
    a: "Mississauga, Ontario. Our on-site coverage extends across Toronto, Mississauga, Brampton, Vaughan, Markham and surrounding GTA municipalities.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Standard. We provide a mutual NDA on first contact, and we work to your paper for larger engagements.",
  },
  {
    q: "How does the 15% price-beat work for business engagements?",
    a: "On equivalent scope, send us any comparable written proposal from a GTA provider. We will beat it by 15%. Verbal estimates and unrelated services are excluded.",
  },
];

const BusinessIT = () => {
  const hero = useScrollReveal();
  const cat = useScrollReveal();
  const proc = useScrollReveal();
  const faq = useScrollReveal();
  const cta = useScrollReveal();

  useEffect(() => {
    applySEO({
      title: "Business IT — Managed Services for the GTA | ALTCTRL",
      description:
        "Managed IT, workstation fleet, network and on-site support for Greater Toronto Area businesses. Insured, NDA-ready, documented audit trail.",
      canonical: "https://altctrl.run/business-it",
      jsonLd: [localBusinessJsonLd(), faqJsonLd(faqs)],
    });
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-surface bg-noise px-6 md:px-20 pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-circuit opacity-50" />
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 25% 20%, hsla(180,70%,50%,0.10) 0%, transparent 55%)" }}
        />
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, transparent 35%, hsl(220 22% 7%) 100%)" }}
        />

        <div ref={hero.ref} className={`relative z-[2] max-w-5xl mx-auto ${hero.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[3px] text-primary uppercase mb-6 border border-primary/40 bg-primary/5 px-3 py-1.5 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-dot" />
            Business division · GTA-based
          </div>
          <h1 className="font-display text-[clamp(40px,6.4vw,80px)] leading-[1.04] tracking-[-0.02em] mb-6">
            Managed IT for <span className="text-primary">Greater Toronto businesses.</span>
          </h1>
          <p className="text-base md:text-lg text-dim leading-relaxed max-w-2xl mb-10">
            ALTCTRL Solutions provides managed IT, workstation fleet support, network deployment, and on-site response for professional practices and small organisations across the Greater Toronto Area. Insured, NDA-ready, and documented end-to-end.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <Link
              to="/get-help?from=business"
              className="font-mono text-[13px] tracking-[3px] uppercase bg-primary text-primary-foreground px-7 py-4 rounded-md hover:bg-primary/85 transition-colors"
            >
              Request consultation →
            </Link>
            <a
              href="mailto:jaleed01@altctrl.run?subject=Business%20IT%20enquiry"
              className="font-mono text-[13px] tracking-[3px] uppercase border border-border text-foreground px-7 py-4 rounded-md hover:border-primary transition-colors"
            >
              Email the practice
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl">
            {trustItems.map((t) => (
              <div key={t.k} className="bg-surface2 border border-border rounded-md p-4">
                <div className="tracking-[3px] text-faint uppercase mb-1 text-xs font-thin">{t.k}</div>
                <div className="font-display text-base text-foreground">{t.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service catalogue */}
      <section className="px-6 md:px-20 py-20 md:py-24 bg-background">
        <div ref={cat.ref} className={`max-w-6xl mx-auto ${cat.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <div className="text-[12px] tracking-[4px] text-faint uppercase mb-3">// engagement types</div>
          <h2 className="font-display text-[clamp(30px,4vw,46px)] tracking-[-0.02em] mb-12 max-w-3xl">
            Built for the way your <span className="text-primary">organisation runs.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.t} className="bg-surface2 border border-border rounded-md p-7 hover:border-primary/60 transition-colors">
                <div className="font-display text-xl text-foreground mb-3">{s.t}</div>
                <p className="text-sm text-dim leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 md:px-20 py-20 md:py-24 bg-surface bg-noise">
        <div ref={proc.ref} className={`max-w-6xl mx-auto ${proc.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <div className="text-[12px] tracking-[4px] text-faint uppercase mb-3">// engagement process</div>
          <h2 className="font-display text-[clamp(30px,4vw,46px)] tracking-[-0.02em] mb-12 max-w-3xl">
            From <span className="text-primary">discovery</span> to <span className="text-primary">ongoing support</span>.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {steps.map((s) => (
              <div key={s.n} className="bg-surface2 border border-border rounded-md p-7">
                <div className="text-[11px] tracking-[3px] text-primary uppercase mb-3">Step {s.n}</div>
                <div className="font-display text-2xl text-foreground mb-3">{s.t}</div>
                <p className="text-sm text-dim leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-20 py-20 md:py-24 bg-background">
        <div ref={faq.ref} className={`max-w-4xl mx-auto ${faq.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <div className="text-[12px] tracking-[4px] text-faint uppercase mb-3">// frequently asked</div>
          <h2 className="font-display text-[clamp(30px,4vw,46px)] tracking-[-0.02em] mb-10">
            Business IT, <span className="text-primary">answered.</span>
          </h2>
          <div className="flex flex-col gap-3">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-surface2 border border-border rounded-md p-5 open:border-primary/60 transition-colors">
                <summary className="cursor-pointer text-foreground text-sm md:text-base font-medium list-none flex items-center justify-between gap-4">
                  <span>{f.q}</span>
                  <span className="text-primary text-xs tracking-[2px] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-sm text-dim leading-relaxed mt-4">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-20 py-20 md:py-24 bg-surface bg-noise bg-circuit relative">
        <div className="absolute inset-0 glow-bottom pointer-events-none" />
        <div ref={cta.ref} className={`relative max-w-3xl mx-auto text-center ${cta.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <div className="text-[12px] tracking-[4px] text-faint uppercase mb-3">// next step</div>
          <h2 className="font-display text-[clamp(32px,4.4vw,52px)] tracking-[-0.02em] mb-4 leading-[1.05]">
            Ready to scope an <span className="text-primary">engagement?</span>
          </h2>
          <p className="text-base text-dim leading-relaxed max-w-xl mx-auto mb-8">
            Request a 30-minute discovery call. We respond within one business day with a written next step.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/get-help?from=business"
              className="font-mono text-[13px] tracking-[3px] uppercase bg-primary text-primary-foreground px-7 py-4 rounded-md hover:bg-primary/85 transition-colors"
            >
              Request consultation →
            </Link>
            <a
              href="tel:+16476437979"
              className="font-mono text-[13px] tracking-[3px] uppercase border border-border text-foreground px-7 py-4 rounded-md hover:border-primary transition-colors"
            >
              +1-647-643-7979
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessIT;
