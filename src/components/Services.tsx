import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  { icon: "💻", title: "Laptop Repair", desc: "Cracked screens, dead batteries, won't turn on, overheating. Hardware and software — I fix it all.", price: "→ From £30" },
  { icon: "🖥️", title: "Desktop / PC", desc: "Custom builds, upgrades, component swaps, OS reinstalls. Tower or all-in-one, old or new.", price: "→ From £30" },
  { icon: "🦠", title: "Virus & Malware", desc: "Ransomware, adware, spyware, pop-ups that won't stop. Full clean + hardening so it doesn't happen again.", price: "→ From £25" },
  { icon: "💾", title: "Data Recovery", desc: "Accidentally deleted files, corrupted drives, failed SSDs. If the data is still there, I'll get it back.", price: "→ Quote on assessment" },
  { icon: "⚡", title: "Speed & Tune-Up", desc: "Slow boot, laggy apps, maxed-out storage. Deep clean, optimisation, bloatware removal.", price: "→ From £25" },
  { icon: "🌐", title: "Network & Wi-Fi", desc: "Dead zones, slow speeds, router config, printer setup. Home network sorted properly.", price: "→ From £30" },
];

const Services = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="px-6 md:px-20 py-20 md:py-24 relative bg-noise bg-circuit">
      <div className="absolute inset-0 glow-green pointer-events-none" />
      <div ref={ref} className={isVisible ? "scroll-visible" : "scroll-hidden"}>
        <div className="text-[13px] tracking-[4px] text-faint uppercase mb-3">// services</div>
        <div className="font-display text-[clamp(44px,5vw,64px)] text-foreground tracking-[2px] mb-12">
          What I <span className="text-primary">Fix</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {services.map((s, i) => (
            <div key={s.title} className="bg-surface p-9 relative overflow-hidden group transition-colors hover:bg-surface-2" style={{ transitionDelay: `${i * 0.05}s` }}>
              <div className="absolute top-0 left-0 w-[2px] h-0 bg-primary transition-all duration-300 group-hover:h-full" />
              <span className="text-4xl mb-4 block">{s.icon}</span>
              <div className="font-display text-[28px] tracking-[2px] text-foreground mb-3">{s.title}</div>
              <p className="text-sm text-dim leading-relaxed tracking-[0.5px]">{s.desc}</p>
              <div className="text-[13px] tracking-[2px] text-primary mt-5 uppercase">{s.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
