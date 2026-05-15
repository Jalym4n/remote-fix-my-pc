import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { applySEO, localBusinessJsonLd } from "@/lib/seo";

const responseTiers = [
  {
    tier: "Standard",
    sla: "Within 1 business day",
    hours: "Mon–Fri, 09:00–18:00 ET",
    note: "Included with every job. Diagnosis, quote and scheduling within one business day of contact.",
    accent: false,
  },
  {
    tier: "Same-day rush",
    sla: "Within 4 hours",
    hours: "Mon–Fri, 09:00–18:00 ET",
    note: "Priority queue for time-sensitive issues. Triage and dispatch within four hours of confirmation.",
    accent: true,
  },
  {
    tier: "After-hours / Critical",
    sla: "Within 2 hours",
    hours: "Evenings, weekends & holidays",
    note: "Premium tier for business-critical incidents. Engineer reachable outside standard hours.",
    accent: true,
  },
];

const ContactPage = () => {
  const top = useScrollReveal();
  const area = useScrollReveal();
  const sla = useScrollReveal();

  useEffect(() => {
    applySEO({
      title: "Contact — ALTCTRL Solutions",
      description:
        "Contact ALTCTRL Solutions — call +1-647-643-7979 or email jaleed01@altctrl.run. Serving the Greater Toronto & Hamilton Area.",
      canonical: "https://altctrl.run/contact",
      jsonLd: localBusinessJsonLd(),
    });
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navbar />

      {/* Hero — direct contact details */}
      <section className="relative bg-surface bg-noise bg-circuit px-6 md:px-20 pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 glow-bottom pointer-events-none" />
        <div ref={top.ref} className={`relative z-[2] max-w-5xl mx-auto ${top.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <div className="text-[12px] tracking-[4px] text-faint uppercase mb-3 text-center">// contact</div>
          <h1 className="font-display text-[clamp(36px,5.4vw,64px)] tracking-[-0.02em] mb-4 text-center leading-[1.05]">
            Reach the <span className="text-primary">engineer</span>.
          </h1>
          <p className="text-base md:text-lg text-dim leading-relaxed text-center max-w-2xl mx-auto mb-10">
            Direct line to the technician who will handle your job — no call centre, no ticket queue.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
            <a
              href="tel:+16476437979"
              className="group flex items-center gap-4 bg-surface2 border-2 border-primary/40 hover:border-primary rounded-md p-6 transition-colors shadow-[0_0_50px_-15px_hsl(var(--primary)/0.35)]"
            >
              <span className="text-3xl">📞</span>
              <div className="flex flex-col">
                <span className="text-[11px] tracking-[3px] text-faint uppercase">Call directly</span>
                <span className="font-display text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">+1-647-643-7979</span>
                <span className="text-[11px] tracking-[2px] text-dim uppercase mt-1">Tap to call</span>
              </div>
            </a>
            <a
              href="mailto:jaleed01@altctrl.run"
              className="group flex items-center gap-4 bg-surface2 border border-border hover:border-primary rounded-md p-6 transition-colors"
            >
              <span className="text-3xl">✉️</span>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] tracking-[3px] text-faint uppercase">Email</span>
                <span className="font-display text-lg md:text-xl text-foreground group-hover:text-primary transition-colors truncate">jaleed01@altctrl.run</span>
                <span className="text-[11px] tracking-[2px] text-dim uppercase mt-1">Replies same business day</span>
              </div>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/get-help"
              className="font-mono text-[13px] tracking-[3px] uppercase bg-primary text-primary-foreground px-7 py-4 rounded-md hover:bg-primary/85 transition-colors"
            >
              Send a request form →
            </Link>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="px-6 md:px-20 py-20 md:py-24 bg-background">
        <div ref={area.ref} className={`max-w-5xl mx-auto ${area.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <div className="text-[12px] tracking-[4px] text-faint uppercase mb-3">// service area</div>
          <h2 className="font-display text-[clamp(30px,4vw,46px)] tracking-[-0.02em] mb-6 max-w-3xl leading-[1.1]">
            Greater Toronto & <span className="text-primary">Hamilton Area</span>.
          </h2>
          <p className="text-base text-dim leading-relaxed max-w-3xl mb-10">
            On-site, in-home and drop-off service across the GTHA. Remote rescue is available globally — wherever an internet connection reaches.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-surface2 border border-border rounded-md p-6">
              <div className="text-[11px] tracking-[3px] text-primary uppercase mb-3">In-person · Primary</div>
              <div className="font-display text-lg text-foreground mb-3">Toronto core</div>
              <p className="text-sm text-dim leading-relaxed">Downtown, midtown, East York, North York, Scarborough, Etobicoke. Same-day capacity available.</p>
            </div>
            <div className="bg-surface2 border border-border rounded-md p-6">
              <div className="text-[11px] tracking-[3px] text-primary uppercase mb-3">In-person · Extended</div>
              <div className="font-display text-lg text-foreground mb-3">GTA & Hamilton</div>
              <p className="text-sm text-dim leading-relaxed">Mississauga, Brampton, Vaughan, Markham, Richmond Hill, Oakville, Burlington, Hamilton. Travel scheduled per appointment.</p>
            </div>
            <div className="bg-surface2 border border-border rounded-md p-6">
              <div className="text-[11px] tracking-[3px] text-faint uppercase mb-3">Remote · Anywhere</div>
              <div className="font-display text-lg text-foreground mb-3">Global remote rescue</div>
              <p className="text-sm text-dim leading-relaxed">Software issues, configuration, and guided onboarding handled remotely worldwide. No travel charges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Response times */}
      <section className="px-6 md:px-20 py-20 md:py-24 bg-surface bg-noise">
        <div ref={sla.ref} className={`max-w-5xl mx-auto ${sla.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <div className="text-[12px] tracking-[4px] text-faint uppercase mb-3">// response times</div>
          <h2 className="font-display text-[clamp(30px,4vw,46px)] tracking-[-0.02em] mb-6 max-w-3xl leading-[1.1]">
            Standard and <span className="text-primary">premium</span> windows.
          </h2>
          <p className="text-base text-dim leading-relaxed max-w-3xl mb-10">
            Every job is triaged within one business day at no extra cost. Faster response is available for time-sensitive and after-hours work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {responseTiers.map((t) => (
              <div
                key={t.tier}
                className={`bg-surface2 rounded-md p-6 transition-colors ${
                  t.accent ? "border-2 border-primary/40 shadow-[0_0_40px_-20px_hsl(var(--primary)/0.4)]" : "border border-border"
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[11px] tracking-[3px] uppercase ${t.accent ? "text-primary" : "text-faint"}`}>
                    {t.tier}
                  </span>
                  {t.accent && (
                    <span className="text-[9px] tracking-[2px] uppercase border border-primary/50 text-primary px-1.5 py-0.5 rounded">
                      Premium
                    </span>
                  )}
                </div>
                <div className="font-display text-2xl text-foreground mb-2">{t.sla}</div>
                <div className="text-[11px] tracking-[2px] text-dim uppercase mb-4">{t.hours}</div>
                <p className="text-sm text-dim leading-relaxed">{t.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/get-help"
              className="inline-flex items-center gap-2 font-mono text-[13px] tracking-[3px] uppercase border border-primary text-primary px-7 py-4 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Request the engineer →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
