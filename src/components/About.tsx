import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="px-6 md:px-20 py-20 md:py-24 bg-surface relative bg-noise bg-circuit">
      <div className="absolute inset-0 glow-red pointer-events-none" />
      <div ref={ref} className={isVisible ? "scroll-visible" : "scroll-hidden"}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[13px] tracking-[4px] text-faint uppercase mb-3">// about</div>
            <div className="font-display text-[clamp(44px,5vw,64px)] text-foreground tracking-[2px] mb-8">
              One person.<br /><span className="text-primary">No nonsense.</span>
            </div>
            <p className="text-sm text-dim leading-relaxed tracking-[0.5px] mb-5">
              I'm a solo technician working from home. No shop overheads, no staff markups — just <strong className="text-foreground font-normal">honest repairs at honest prices</strong>. I fix computers because I'm good at it and I care about doing it right.
            </p>
            <p className="text-sm text-dim leading-relaxed tracking-[0.5px] mb-5">
              <strong className="text-foreground font-normal">No fix, no fee.</strong> If I can't solve it, you don't pay. If you choose to go ahead with the repair after diagnosis, the diagnosis fee is waived. Simple as that.
            </p>
            <p className="text-sm text-dim leading-relaxed tracking-[0.5px] mb-5">
              Whether I visit your home, or fix it remotely by connecting to your screen — you get the same quality service. I specialise in making technology accessible for <strong className="text-foreground font-normal">everyone</strong>, especially those who find it overwhelming.
            </p>

            <div className="grid grid-cols-2 gap-px bg-border border border-border mt-10">
              {[
                { num: "No Fix", label: "No Fee" },
                { num: "15%", label: "Price Beat" },
                { num: "Remote", label: "Available" },
                { num: "100%", label: "Satisfaction" },
              ].map((s) => (
                <div key={s.label} className="bg-surface-2 p-6">
                  <div className="font-display text-[48px] text-primary tracking-[2px] leading-none">{s.num}</div>
                  <div className="text-xs tracking-[2px] text-dim uppercase mt-2">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal */}
          <div className="bg-[#0a0a0a] border border-border-light font-mono">
            <div className="bg-muted border-b border-border px-3.5 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ccaa00]" />
                <div className="w-2.5 h-2.5 rounded-full bg-green" />
              </div>
              <span className="text-[13px] text-dim tracking-[1px] ml-2">altctrl — repair/run_</span>
            </div>
            <div className="p-6 text-sm leading-[2]">
              <div className="flex gap-3 mb-0.5"><span className="text-green flex-shrink-0">▶</span><span className="text-foreground">scan --device "client-laptop-01"</span></div>
              <div className="text-dim pl-6">Scanning hardware...</div>
              <div className="text-dim pl-6">[ CPU: Intel i5-12th Gen — OK ]</div>
              <div className="text-dim pl-6">[ RAM: 8GB DDR4 — OK ]</div>
              <div className="text-primary pl-6">[ Storage: SSD — FAILING ]</div>
              <div className="text-primary pl-6">[ Thermal: CPU 98°C — WARNING ]</div>
              <div className="flex gap-3 mt-2 mb-0.5"><span className="text-green flex-shrink-0">▶</span><span className="text-foreground">diagnose --full</span></div>
              <div className="text-dim pl-6">→ Thermal paste needs replacing.</div>
              <div className="text-dim pl-6">→ SSD showing bad sectors.</div>
              <div className="text-dim pl-6">→ Backup recommended before repair.</div>
              <div className="flex gap-3 mt-2 mb-0.5"><span className="text-green flex-shrink-0">▶</span><span className="text-foreground">repair --remote --connect</span></div>
              <div className="text-green pl-6">✓ Remote session started. Fixing now...</div>
              <div className="flex gap-3 mt-2"><span className="text-green flex-shrink-0">▶</span><span className="text-foreground"><span className="inline-block w-2 h-3.5 bg-green animate-blink align-middle ml-0.5" /></span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
