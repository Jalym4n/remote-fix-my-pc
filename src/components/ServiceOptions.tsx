import { useScrollReveal } from "@/hooks/useScrollReveal";

const options = [
  {
    icon: "🖥️",
    title: "Remote Support",
    highlight: true,
    desc: "I connect to your screen and fix it while you watch. Perfect for anyone who can't leave home — elderly, immobile, or just busy. I'll video-call you first and walk you through setup step by step.",
    tags: ["BitLocker recovery*", "Virus removal", "Slow PC fix", "Software issues"],
    note: "* On eligible devices",
    cta: "Most popular — works from anywhere",
  },
  {
    icon: "🏠",
    title: "In-Home Visit",
    highlight: false,
    desc: "I come to your door with everything needed. No lugging your PC to a shop. Free diagnosis on-site — if I can't fix it, you pay nothing.",
    tags: ["Hardware repair", "Full diagnostics", "Setup & install", "Network fixes"],
    note: null,
    cta: "Within reasonable distance",
  },
  {
    icon: "📦",
    title: "Drop-Off",
    highlight: false,
    desc: "Bring your device to me if you're nearby. Fastest turnaround for hardware repairs, upgrades, or deep cleans. Same no-fix-no-fee guarantee.",
    tags: ["Component swaps", "SSD upgrades", "Deep clean", "Screen repair"],
    note: null,
    cta: "Fastest for hardware work",
  },
];

const ServiceOptions = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="px-6 md:px-20 py-20 md:py-24 relative bg-noise bg-circuit">
      <div className="absolute inset-0 glow-green pointer-events-none" />
      <div ref={ref} className={isVisible ? "scroll-visible" : "scroll-hidden"}>
        <div className="text-[14px] tracking-[4px] text-faint uppercase mb-3">// how I help</div>
        <div className="font-display text-[clamp(44px,5vw,64px)] text-foreground tracking-[2px] mb-12">
          Three Ways to <span className="text-primary">Get Fixed</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border border border-border">
          {options.map((o) => (
            <div key={o.title} className={`bg-surface p-8 md:p-10 relative overflow-hidden group transition-colors hover:bg-surface-2 ${o.highlight ? "border-l-2 border-l-primary" : ""}`}>
              {o.highlight && (
                <div className="absolute top-3 right-3 bg-primary/10 border border-primary/30 px-3 py-1">
                  <span className="text-xs tracking-[2px] text-primary uppercase font-medium">★ Recommended</span>
                </div>
              )}
              <span className="text-4xl mb-5 block">{o.icon}</span>
              <div className="font-display text-[32px] tracking-[2px] text-foreground mb-4">{o.title}</div>
              <p className="text-sm text-dim leading-relaxed tracking-[0.5px] mb-5">{o.desc}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {o.tags.map((tag) => (
                  <span key={tag} className="text-xs tracking-[1px] text-foreground bg-surface-3 border border-border px-3 py-1.5">{tag}</span>
                ))}
              </div>
              {o.note && <p className="text-xs text-faint tracking-[0.5px] mb-3">{o.note}</p>}
              <div className="text-[13px] tracking-[2px] text-green mt-4 uppercase">→ {o.cta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOptions;
