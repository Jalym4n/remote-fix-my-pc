import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { applySEO, faqJsonLd, localBusinessJsonLd } from "@/lib/seo";

const scenarios = [
  {
    h: "Accidentally deleted files",
    b: "Documents, photos, or project folders emptied from the recycle bin or wiped during a cleanup. Recovery is most successful when the drive has not been heavily written to since deletion — bring the device in as soon as possible.",
  },
  {
    h: "Corrupted drives & file systems",
    b: "Drives that mount as RAW, throw CRC errors, or refuse to open. We assess the file system, recover what is intact, and rebuild directory structures where the underlying data survives.",
  },
  {
    h: "Failed SSDs & hard drives",
    b: "Clicking drives, drives that no longer spin up, SSDs that disappear from BIOS. Logical-level recovery is performed in-house; severe physical failures are escalated to a partner laboratory with your written approval.",
  },
  {
    h: "Formatted or repartitioned disks",
    b: "Drives quick-formatted, accidentally repartitioned, or initialised by Windows on first connection. Most data is recoverable provided the surface has not been overwritten.",
  },
  {
    h: "Water, drop, & power damage",
    b: "Drives exposed to liquid, dropped while running, or damaged by a power surge. Logical recovery first, with a clear escalation path if the controller or platters require lab work.",
  },
  {
    h: "BitLocker-locked volumes",
    b: "Volumes locked behind BitLocker after a hardware change or motherboard failure. Handled in-person under our flagship BitLocker recovery service with verified ownership.",
  },
];

const process = [
  { n: "01", t: "Free assessment", d: "Bring the device or drive in. We assess the failure mode at no cost and tell you whether recovery is realistic before you commit." },
  { n: "02", t: "Written quote", d: "Fixed price up front based on the assessment. No hourly creep, no surprises. Lab escalation, if needed, is quoted separately and only proceeds with your written approval." },
  { n: "03", t: "Recovery", d: "Imaged in a read-only environment first. Recovery is performed against the image — your original media is never written to during the process." },
  { n: "04", t: "Handover", d: "Recovered data delivered on a fresh drive of your choosing, with a written summary of what was recovered, what was not, and recommendations for future resilience." },
];

const faqs = [
  {
    q: "What does recovery cost?",
    a: "Logical recovery is quoted on the assessment — most jobs fall in a predictable band, and you receive a fixed written quote before any work proceeds. Physical lab escalation is quoted separately and only with your written approval.",
  },
  {
    q: "Is the assessment really free?",
    a: "Yes. We assess the failure mode and tell you whether recovery is feasible at no cost. You are under no obligation to proceed.",
  },
  {
    q: "Can you recover from a dropped or clicking drive?",
    a: "We perform logical recovery in-house. Drives with severe mechanical damage are escalated to a partner laboratory, with the cost and timeline confirmed in writing before escalation.",
  },
  {
    q: "Will my original drive be written to?",
    a: "No. We image the failed drive in a read-only environment and perform recovery against the image. Your original media is preserved untouched throughout the process.",
  },
  {
    q: "How long does recovery take?",
    a: "Most logical recoveries complete within a few business days of the quote being approved. Lab escalations take longer and are scheduled with the partner facility — typically one to three weeks depending on complexity.",
  },
  {
    q: "What about data confidentiality?",
    a: "All recovery work is handled by a single operator under NDA on request. Recovered data is delivered to you and securely wiped from our equipment after handover unless you instruct otherwise in writing.",
  },
];

const DataRecovery = () => {
  const hero = useScrollReveal();
  const list = useScrollReveal();
  const proc = useScrollReveal();
  const faq = useScrollReveal();
  const cta = useScrollReveal();

  useEffect(() => {
    applySEO({
      title: "Data Recovery — ALTCTRL IT Services",
      description:
        "Recover lost or corrupted files from failed drives, SSDs, formatted disks, and BitLocker volumes. Free diagnosis and upfront written quotes.",
      canonical: "https://altctrl.run/data-recovery",
      jsonLd: [localBusinessJsonLd(), faqJsonLd(faqs)],
    });
  }, []);

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
            IT Services · Data Recovery
          </div>
          <h1 className="font-display text-[clamp(36px,5.4vw,68px)] leading-[1.05] tracking-[-0.02em] mb-5">
            Recover what you <span className="text-primary">thought was gone.</span>
          </h1>
          <p className="text-base md:text-lg text-dim leading-relaxed max-w-2xl mb-8">
            Deleted files, corrupted volumes, failed SSDs, formatted disks. Free diagnosis, fixed written quotes before any work proceeds, and a strict read-only imaging workflow that protects your original media.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/get-help"
              className="font-mono text-[13px] tracking-[3px] uppercase bg-primary text-primary-foreground px-7 py-4 rounded-md hover:bg-primary/85 transition-colors"
            >
              Request free assessment →
            </Link>
            <Link
              to="/it-services"
              className="font-mono text-[13px] tracking-[3px] uppercase border border-border text-foreground px-7 py-4 rounded-md hover:border-primary transition-colors"
            >
              All IT services
            </Link>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="px-6 md:px-20 py-20 md:py-24 bg-background">
        <div ref={list.ref} className={`max-w-6xl mx-auto ${list.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <div className="text-[12px] tracking-[4px] text-faint uppercase mb-3">// what we recover</div>
          <h2 className="font-display text-[clamp(30px,4vw,46px)] tracking-[-0.02em] mb-12 max-w-3xl">
            Common <span className="text-primary">failure modes.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {scenarios.map((s) => (
              <div key={s.h} className="bg-surface2 border border-border rounded-md p-6 hover:border-primary/60 transition-colors">
                <div className="font-display text-xl text-foreground mb-3">{s.h}</div>
                <p className="text-sm text-dim leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 md:px-20 py-20 md:py-24 bg-surface bg-noise">
        <div ref={proc.ref} className={`max-w-6xl mx-auto ${proc.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <div className="text-[12px] tracking-[4px] text-faint uppercase mb-3">// process</div>
          <h2 className="font-display text-[clamp(30px,4vw,46px)] tracking-[-0.02em] mb-12 max-w-3xl">
            Read-only first. <span className="text-primary">Always.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {process.map((s) => (
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
            Data recovery, <span className="text-primary">answered.</span>
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
            Lost something <span className="text-primary">important?</span>
          </h2>
          <p className="text-base text-dim leading-relaxed max-w-xl mx-auto mb-8">
            The sooner we assess the drive, the better the recovery odds. Request a free assessment and we will respond within one business day.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/get-help"
              className="font-mono text-[13px] tracking-[3px] uppercase bg-primary text-primary-foreground px-7 py-4 rounded-md hover:bg-primary/85 transition-colors"
            >
              Request assessment →
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

export default DataRecovery;
