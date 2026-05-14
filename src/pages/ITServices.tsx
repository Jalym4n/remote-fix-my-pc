import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const trustItems = [
  { k: "No Fix — No Fee", v: "Fixed within 1 week or we don't charge." },
  { k: "Free Diagnosis", v: "Waived on Repair" },
  { k: "Price-Beat Guarantee", v: "15% under written quotes" },
  { k: "Same-day", v: "Waived on Repair" },
];

const services = [
  { t: "Laptop & desktop repair", d: "Cracked screens, dead batteries, won't boot, overheating, OS reinstalls, component upgrades.", p: "From CA$30" },
  { t: "Remote rescue", d: "Global remote support for software issues — virus removal, slow PC, setup, configuration. Guided onboarding for non-technical users.", p: "From CA$30" },
  { t: "BitLocker recovery", d: "In-person recovery for eligible Windows devices. Our flagship service — handled with verified ownership.", p: "In-person only", href: "/bitlocker-recovery" },
  { t: "Data recovery", d: "Accidentally deleted files, corrupted drives, failed SSDs. Assessment first — quote on findings.", p: "Quote on assessment" },
  { t: "Virus & malware removal", d: "Ransomware, adware, spyware. Full clean-up plus hardening to prevent re-infection.", p: "From CA$25" },
  { t: "Speed & tune-up", d: "Slow boot, lag, storage pressure. Deep clean, optimisation, bloatware removal.", p: "From CA$25" },
  { t: "Network & Wi-Fi", d: "Dead zones, slow speeds, router and printer configuration. Home and small-business networks.", p: "From CA$30" },
  { t: "Setup & onboarding", d: "New device setup, data migration, account configuration, peripheral installation.", p: "From CA$25" },
];

const steps = [
  { n: "01", t: "Free diagnosis", d: "Tell us what's happening. We assess the issue and confirm whether a repair is feasible before you commit." },
  { n: "02", t: "Fixed written quote", d: "You receive a fixed price up front — no surprises, no hourly creep. We honour our 15% price-beat against any comparable written quote." },
  { n: "03", t: "Repair", d: "Performed at our workshop, on-site for enterprise, or remotely for software issues. Same-day capacity for urgent cases." },
  { n: "04", t: "Handover", d: "Device returned with a written summary of work performed, parts used, and any recommendations for prevention." },
];

const audiences = [
  { t: "Households & individuals", d: "Personal laptops, family desktops, home Wi-Fi, account recovery and setup. Friendly, jargon-free communication and guided remote support for non-technical users." },
  { t: "Small businesses", d: "Workstation repair, network configuration, account migrations and ad-hoc IT support without the overhead of a managed-service contract." },
  { t: "Enterprise clients", d: "On-site triage, fleet recovery, and bulk repair under NDA. Documented audit trail, professional liability cover, and dedicated point of contact." },
];

const faqs = [
  { q: "Where are you based?", a: "Our workshop is UK-based. In-person work covers London and surrounding areas; remote rescue is available globally." },
  { q: "What does no-fix-no-fee mean?", a: "If we can't resolve the issue, you don't pay for the repair. The free diagnosis is also waived entirely when a repair proceeds." },
  { q: "How does the 15% price-beat work?", a: "Send us any comparable written quote from a UK provider. We will beat it by 15% on equivalent scope. Verbal estimates and unrelated services are excluded." },
  { q: "Do you handle enterprise contracts?", a: "Yes. We work with SMEs and larger organisations on ad-hoc and ongoing engagements, including NDAs and on-site work. Get in touch to discuss scope." },
  { q: "How quickly can you start?", a: "Most jobs are triaged within one business day. Same-day rush capacity is held for time-sensitive and business-critical cases." },
  { q: "Is BitLocker recovery handled here too?", a: "Yes — BitLocker recovery is our flagship service and is in-person only. See the dedicated BitLocker recovery page for details." },
];

const ITServices = () => {
  const hero = useScrollReveal();
  const aud = useScrollReveal();
  const cat = useScrollReveal();
  const proc = useScrollReveal();
  const faq = useScrollReveal();
  const cta = useScrollReveal();

  useEffect(() => {
    document.title = "IT Services & Repair — ALTCTRL Solutions";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta(
      "description",
      "ALTCTRL IT Services: laptop & desktop repair, remote rescue, data recovery, network setup. Households, small business, and enterprise. No-fix-no-fee. 15% price-beat."
    );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://altctrl.run/it-services";
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
          <img src={logoKey} alt="" aria-hidden="true" className="h-14 w-14 object-contain opacity-70 mb-5" />
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[3px] text-primary uppercase mb-6 border border-primary/40 bg-primary/5 px-3 py-1.5 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-dot" />
            IT Solutions · Live division
          </div>
          <h1 className="font-display text-[clamp(40px,6.4vw,80px)] leading-[1.04] tracking-[-0.02em] mb-6">
            IT repair done <span className="text-primary">properly.</span>
          </h1>
          <p className="text-base md:text-lg text-dim leading-relaxed max-w-2xl mb-10">
            ALTCTRL Solutions is a specialised IT practice serving households, small businesses, and enterprise clients.
            Free diagnosis, no-fix-no-fee, and a written 15% price-beat against any comparable quote.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <a
              href="#it-contact"
              className="font-mono text-[13px] tracking-[3px] uppercase bg-primary text-primary-foreground px-7 py-4 rounded-md hover:bg-primary/85 transition-colors"
            >
              Request free diagnosis →
            </a>
            <Link
              to="/bitlocker-recovery"
              className="font-mono text-[13px] tracking-[3px] uppercase border border-border text-foreground px-7 py-4 rounded-md hover:border-primary transition-colors"
            >
              BitLocker recovery →
            </Link>
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

      {/* Audiences */}
      <section className="px-6 md:px-20 py-20 md:py-24 bg-background">
        <div ref={aud.ref} className={`max-w-6xl mx-auto ${aud.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <div className="text-[12px] tracking-[4px] text-faint uppercase mb-3">// who we serve</div>
          <h2 className="font-display text-[clamp(30px,4vw,46px)] tracking-[-0.02em] mb-12 max-w-3xl">
            From a single laptop to a <span className="text-primary">fleet</span>.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {audiences.map((c) => (
              <div key={c.t} className="bg-surface2 border border-border rounded-md p-6 hover:border-primary/60 transition-colors">
                <div className="font-display text-xl text-foreground mb-3">{c.t}</div>
                <p className="text-sm text-dim leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service catalogue */}
      <section className="px-6 md:px-20 py-20 md:py-24 bg-surface bg-noise">
        <div ref={cat.ref} className={`max-w-6xl mx-auto ${cat.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <div className="text-[12px] tracking-[4px] text-faint uppercase mb-3">// service catalogue</div>
          <h2 className="font-display text-[clamp(30px,4vw,46px)] tracking-[-0.02em] mb-12 max-w-3xl">
            What we <span className="text-primary">fix.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-md overflow-hidden">
            {services.map((s) => {
              const inner = (
                <>
                  <div className="font-display text-[20px] tracking-[-0.01em] text-foreground mb-2">{s.t}</div>
                  <p className="text-sm text-dim leading-relaxed mb-4">{s.d}</p>
                  <div className="text-[12px] tracking-[2px] text-primary uppercase">
                    {s.href ? "→ Get help now" : `→ ${s.p}`}
                  </div>
                </>
              );
              const cls = "bg-surface2 p-7 relative transition-colors hover:bg-surface block";
              return s.href ? (
                <Link key={s.t} to={s.href} className={cls}>{inner}</Link>
              ) : (
                <div key={s.t} className={cls}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 md:px-20 py-20 md:py-24 bg-background">
        <div ref={proc.ref} className={`max-w-6xl mx-auto ${proc.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <div className="text-[12px] tracking-[4px] text-faint uppercase mb-3">// process</div>
          <h2 className="font-display text-[clamp(30px,4vw,46px)] tracking-[-0.02em] mb-12 max-w-3xl">
            From <span className="text-primary">broken</span> to <span className="text-primary">back on your desk</span>.
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
      <section className="px-6 md:px-20 py-20 md:py-24 bg-surface bg-noise">
        <div ref={faq.ref} className={`max-w-4xl mx-auto ${faq.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <div className="text-[12px] tracking-[4px] text-faint uppercase mb-3">// frequently asked</div>
          <h2 className="font-display text-[clamp(30px,4vw,46px)] tracking-[-0.02em] mb-10">
            IT services, <span className="text-primary">answered.</span>
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

      {/* CTA — link to dedicated contact page */}
      <section id="it-contact" className="px-6 md:px-20 py-20 md:py-24 bg-surface bg-noise bg-circuit relative">
        <div className="absolute inset-0 glow-bottom pointer-events-none" />
        <div ref={cta.ref} className={`relative max-w-3xl mx-auto text-center ${cta.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <div className="text-[12px] tracking-[4px] text-faint uppercase mb-3">// next step</div>
          <h2 className="font-display text-[clamp(32px,4.4vw,52px)] tracking-[-0.02em] mb-4 leading-[1.05]">
            Ready to get your device <span className="text-primary">sorted?</span>
          </h2>
          <p className="text-base text-dim leading-relaxed max-w-xl mx-auto mb-8">
            Request a free diagnosis or reach out directly by phone or email — we respond within one business day.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/get-help"
              className="font-mono text-[13px] tracking-[3px] uppercase bg-primary text-primary-foreground px-7 py-4 rounded-md hover:bg-primary/85 transition-colors"
            >
              Contact us →
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

export default ITServices;
