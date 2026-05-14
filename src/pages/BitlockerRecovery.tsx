import { useEffect } from "react";
import logoShield from "@/assets/logo-shield.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const trustItems = [
  { k: "No fix", v: "no fee" },
  { k: "Diagnosis", v: "Waived on Repair" },
  { k: "Price-beat", v: "15% under written quotes" },
  { k: "Same-day", v: "Waived on Repair" },
];

const steps = [
  {
    n: "01",
    t: "Free initial assessment",
    d: "Send your device details and the screen you're seeing. We confirm whether recovery is feasible before you commit.",
  },
  {
    n: "02",
    t: "Verify ownership",
    d: "We require proof of ownership (purchase receipt, Microsoft account, or original packaging). We do not bypass security on devices we cannot verify.",
  },
  {
    n: "03",
    t: "In-person recovery",
    d: "BitLocker work is performed in person — at our workshop or on-site for enterprise. Remote BitLocker recovery is not offered.",
  },
  {
    n: "04",
    t: "Return & handover",
    d: "Device returned with access restored, data intact where possible, and a written summary of the work performed.",
  },
];

const faqs = [
  {
    q: "Can you recover BitLocker remotely?",
    a: "No. BitLocker recovery is performed in person only — either at our workshop, your home, or your office. This is a deliberate policy: it protects you and us, and it is the only responsible way to verify ownership.",
  },
  {
    q: "What devices are eligible?",
    a: "Most consumer and business Windows laptops and desktops with TPM-backed BitLocker. Devices managed under corporate Intune / Active Directory tenancies must be unlocked through your IT administrator — we cannot bypass enterprise device policies.",
  },
  {
    q: "Do I need my recovery key?",
    a: "Not necessarily. If you have it, the process is faster. If you don't, we work through the legitimate Microsoft account / OEM recovery pathways available for your device. We do not crack drives.",
  },
  {
    q: "How much does it cost?",
    a: "Diagnosis is free and is waived entirely if the recovery proceeds. Recovery itself starts from CA$80 depending on device, time required, and any data-recovery work needed. You receive a fixed quote before any work begins.",
  },
  {
    q: "How long does it take?",
    a: "Most eligible devices are recovered within 24–48 hours. Same-day capacity is available for urgent cases.",
  },
  {
    q: "Will I lose my data?",
    a: "In the majority of recoveries, data is preserved intact. Where the drive itself is failing, we offer additional data-recovery work and quote separately before proceeding.",
  },
];

const BitlockerRecovery = () => {
  const hero = useScrollReveal();
  const why = useScrollReveal();
  const proc = useScrollReveal();
  const faq = useScrollReveal();
  const cta = useScrollReveal();

  useEffect(() => {
    document.title = "BitLocker Recovery — ALTCTRL Solutions";
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
      "Locked out by BitLocker? ALTCTRL provides in-person BitLocker recovery for eligible Windows devices. Free diagnosis, no-fix-no-fee, same-day capacity."
    );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://altctrl.run/bitlocker-recovery";
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
          <img src={logoShield} alt="" aria-hidden="true" className="h-14 w-14 object-contain opacity-70 mb-5" />
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[3px] text-primary uppercase mb-6 border border-primary/40 bg-primary/5 px-3 py-1.5 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-dot" />
            Flagship service · In-person only
          </div>
          <h1 className="font-display text-[clamp(40px,6.4vw,80px)] leading-[1.04] tracking-[-0.02em] mb-6">
            Locked out by <span className="text-primary">BitLocker?</span>
          </h1>
          <p className="text-base md:text-lg text-dim leading-relaxed max-w-2xl mb-10">
            ALTCTRL is a specialised IT practice providing BitLocker recovery for eligible Windows devices.
            Free diagnosis, no-fix-no-fee, and a written 15% price-beat against any comparable quote.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <a
              href="#bl-contact"
              className="font-mono text-[13px] tracking-[3px] uppercase bg-primary text-primary-foreground px-7 py-4 rounded-md hover:bg-primary/85 transition-colors"
            >
              Request free diagnosis →
            </a>
            <a
              href="mailto:jaleed01@altctrl.run?subject=BitLocker%20Recovery"
              className="font-mono text-[13px] tracking-[3px] uppercase border border-border text-foreground px-7 py-4 rounded-md hover:border-primary transition-colors"
            >
              Email the workshop
            </a>
          </div>

          {/* Trust bar */}
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

      {/* Why ALTCTRL */}
      <section className="px-6 md:px-20 py-20 md:py-24 bg-background">
        <div ref={why.ref} className={`max-w-6xl mx-auto ${why.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <div className="text-[12px] tracking-[4px] text-faint uppercase mb-3">// why altctrl</div>
          <h2 className="font-display text-[clamp(30px,4vw,46px)] tracking-[-0.02em] mb-12 max-w-3xl">
            BitLocker recovery done <span className="text-primary">properly</span> — not bypassed.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                t: "Eligible devices only",
                d: "We work with consumer and small-business Windows devices with TPM-backed BitLocker. Enterprise-managed (Intune / AD) devices must go via your IT administrator.",
              },
              {
                t: "Ownership verified",
                d: "Every recovery requires proof of ownership. This protects you, protects us, and is non-negotiable — it is what separates a recovery service from a security threat.",
              },
              {
                t: "In-person, deliberately",
                d: "BitLocker recovery is performed at our workshop or on-site only. We do not offer remote BitLocker work — remote rescue is for separate, non-encryption issues.",
              },
              {
                t: "Transparent pricing",
                d: "Free diagnosis, fixed written quote before work begins, and a 15% price-beat guarantee against any comparable written quote you have received.",
              },
              {
                t: "Same-day capacity",
                d: "Urgent cases can be triaged the same day. We hold rush slots for business-critical and time-sensitive situations.",
              },
              {
                t: "Insured & accountable",
                d: "Operated under ALTCTRL Solutions with professional liability cover and a documented audit trail for every device handled.",
              },
            ].map((c) => (
              <div key={c.t} className="bg-surface2 border border-border rounded-md p-6 hover:border-primary/60 transition-colors">
                <div className="font-display text-xl text-foreground mb-3">{c.t}</div>
                <p className="text-sm text-dim leading-relaxed">{c.d}</p>
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
            Four steps from <span className="text-primary">locked</span> to <span className="text-primary">restored</span>.
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
            BitLocker, <span className="text-primary">answered.</span>
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

      {/* CTA / Contact */}
      <section id="bl-contact" className="px-6 md:px-20 py-20 md:py-24 bg-surface bg-noise bg-circuit relative">
        <div className="absolute inset-0 glow-bottom pointer-events-none" />
        <div ref={cta.ref} className={`relative max-w-4xl mx-auto ${cta.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <div className="text-[12px] tracking-[4px] text-faint uppercase mb-3 text-center">// request diagnosis</div>
          <h2 className="font-display text-[clamp(32px,4.4vw,52px)] tracking-[-0.02em] mb-4 text-center">
            Get your device <span className="text-primary">unlocked.</span>
          </h2>
          <p className="text-sm md:text-base text-dim leading-relaxed text-center max-w-2xl mx-auto mb-10">
            Send a few details about your device and the screen you're seeing. We respond within one business day — sooner for rush requests.
          </p>

          <form
            action="mailto:jaleed01@altctrl.run"
            method="post"
            encType="text/plain"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-surface2 border border-border rounded-md p-6 md:p-8"
          >
            <div className="flex flex-col gap-2">
              <label className="text-[11px] tracking-[3px] text-faint uppercase">Your name</label>
              <input
                name="name"
                type="text"
                required
                placeholder="Full name"
                className="bg-background border border-border text-foreground text-sm p-3.5 outline-none focus:border-primary transition-colors rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] tracking-[3px] text-faint uppercase">Contact</label>
              <input
                name="contact"
                type="text"
                required
                placeholder="Email or phone"
                className="bg-background border border-border text-foreground text-sm p-3.5 outline-none focus:border-primary transition-colors rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] tracking-[3px] text-faint uppercase">Device</label>
              <input
                name="device"
                type="text"
                placeholder="Make & model (e.g. Dell XPS 13)"
                className="bg-background border border-border text-foreground text-sm p-3.5 outline-none focus:border-primary transition-colors rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] tracking-[3px] text-faint uppercase">Urgency</label>
              <select
                name="urgency"
                className="bg-background border border-border text-foreground text-sm p-3.5 outline-none focus:border-primary transition-colors rounded-md"
              >
                <option>Standard</option>
                <option>Same-day / rush</option>
                <option>Critical</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-[11px] tracking-[3px] text-faint uppercase">What does the screen say?</label>
              <textarea
                name="message"
                required
                placeholder="Recovery key prompt, error code, when it started, whether you have the recovery key…"
                className="bg-background border border-border text-foreground text-sm p-3.5 outline-none focus:border-primary transition-colors resize-none h-32 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="md:col-span-2 w-full font-mono text-[13px] tracking-[3px] text-primary-foreground bg-primary py-4 uppercase cursor-pointer hover:bg-primary/85 transition-colors border-none rounded-md"
            >
              Send request →
            </button>
            <p className="md:col-span-2 text-[11px] tracking-[2px] text-faint text-center uppercase">
              Or email directly: jaleed01@altctrl.run
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BitlockerRecovery;
