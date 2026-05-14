import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const GetHelpPage = () => {
  const top = useScrollReveal();

  useEffect(() => {
    document.title = "Get Help — ALTCTRL Solutions";
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
      "Contact ALTCTRL Solutions — call +1-647-643-7979 or email jaleed01@altctrl.run. Free diagnosis, no-fix-no-fee, response within one business day."
    );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://altctrl.run/get-help";
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navbar />

      {/* Form-first hero */}
      <section className="relative bg-surface bg-noise bg-circuit px-6 md:px-20 pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 glow-bottom pointer-events-none" />
        <div ref={top.ref} className={`relative z-[2] max-w-5xl mx-auto ${top.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <div className="text-[12px] tracking-[4px] text-faint uppercase mb-3 text-center">// contact</div>
          <h1 className="font-display text-[clamp(36px,5.4vw,64px)] tracking-[-0.02em] mb-4 text-center leading-[1.05]">
            Get your device <span className="text-primary">sorted.</span>
          </h1>
          <p className="text-base md:text-lg text-dim leading-relaxed text-center max-w-2xl mx-auto mb-10">
            Send a few details about your device and the issue. We respond within one business day — sooner for rush requests.
          </p>

          <form
            action="mailto:jaleed01@altctrl.run"
            method="post"
            encType="text/plain"
            className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-surface2 border-2 border-primary/40 shadow-[0_0_60px_-15px_hsl(var(--primary)/0.35)] rounded-lg p-7 md:p-10"
          >
            <div className="flex flex-col gap-2">
              <label className="text-[11px] tracking-[3px] text-faint uppercase">Your name</label>
              <input name="name" type="text" required placeholder="Full name" className="bg-background border border-border text-foreground text-base p-4 outline-none focus:border-primary transition-colors rounded-md" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] tracking-[3px] text-faint uppercase">Contact</label>
              <input name="contact" type="text" required placeholder="Email or phone" className="bg-background border border-border text-foreground text-base p-4 outline-none focus:border-primary transition-colors rounded-md" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] tracking-[3px] text-faint uppercase">Client type</label>
              <select name="clientType" className="bg-background border border-border text-foreground text-base p-4 outline-none focus:border-primary transition-colors rounded-md">
                <option>Household / individual</option>
                <option>Small business</option>
                <option>Enterprise</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] tracking-[3px] text-faint uppercase">Urgency</label>
              <select name="urgency" className="bg-background border border-border text-foreground text-base p-4 outline-none focus:border-primary transition-colors rounded-md">
                <option>Standard</option>
                <option>Same-day / rush</option>
                <option>Critical</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-[11px] tracking-[3px] text-faint uppercase">What's wrong?</label>
              <textarea name="message" required placeholder="Device, symptoms, error messages, when it started…" className="bg-background border border-border text-foreground text-base p-4 outline-none focus:border-primary transition-colors resize-none h-36 rounded-md" />
            </div>
            <button type="submit" className="md:col-span-2 w-full font-mono text-[14px] tracking-[3px] text-primary-foreground bg-primary py-5 uppercase cursor-pointer hover:bg-primary/85 transition-colors border-none rounded-md">
              Send request →
            </button>
          </form>
        </div>
      </section>

      {/* Direct contact */}
      <section className="px-6 md:px-20 py-16 md:py-20 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-border" />
            <span className="text-[11px] tracking-[3px] text-faint uppercase">Or reach out directly</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <a
              href="tel:+16476437979"
              className="group flex items-center gap-4 bg-surface2 border border-border hover:border-primary rounded-md p-6 transition-colors"
            >
              <span className="text-3xl">📞</span>
              <div className="flex flex-col">
                <span className="text-[11px] tracking-[3px] text-faint uppercase">Call</span>
                <span className="font-display text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">+1-647-643-7979</span>
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
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetHelpPage;
