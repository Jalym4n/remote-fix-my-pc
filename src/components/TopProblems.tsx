import { useScrollReveal } from "@/hooks/useScrollReveal";

const problems = [
  { icon: "🔒", title: "BitLocker Locked*", desc: "Locked out after an update or reset? I recover access on eligible devices remotely — even if you're not tech-savvy.", primary: true },
  { icon: "🐌", title: "Slow / Freezing PC", desc: "Sluggish boot, apps hanging, fan screaming. Deep tune-up, bloatware removal, and optimisation.", primary: false },
  { icon: "💀", title: "Won't Boot / Blue Screen", desc: "Stuck on a blue screen, boot loop, or black screen. I diagnose and fix the root cause.", primary: false },
  { icon: "🦠", title: "Virus & Malware", desc: "Pop-ups, ransomware, suspicious activity. Full removal and system hardening so it doesn't happen again.", primary: false },
  { icon: "💾", title: "Software Problems", desc: "Broken updates, driver issues, app crashes, OS errors. I sort the software mess remotely or on-site.", primary: false },
  { icon: "🛠️", title: "Setup & Config Help", desc: "New laptop setup, printer config, email setup, data transfer. I make it painless.", primary: false },
];

const TopProblems = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="px-6 md:px-20 py-20 md:py-24 bg-background relative bg-noise">
      <div className="absolute inset-0 glow-red pointer-events-none" />
      <div ref={ref} className={isVisible ? "scroll-visible" : "scroll-hidden"}>
        <div className="text-[14px] tracking-[4px] text-faint uppercase mb-3">// top problems I fix</div>
        <div className="font-display text-[clamp(44px,5vw,64px)] text-foreground tracking-[2px] mb-4">
          What's <span className="text-primary">Wrong?</span>
        </div>
        <p className="text-sm text-dim tracking-[0.5px] mb-12 max-w-lg">
          These are the most common calls I get. If yours isn't listed, get in touch anyway — chances are I've fixed it before.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {problems.map((p) => (
            <div key={p.title} className={`bg-surface p-8 relative overflow-hidden group transition-colors hover:bg-surface-2 ${p.primary ? "border-l-2 border-l-primary" : ""}`}>
              {p.primary && (
                <div className="absolute top-3 right-3 bg-primary/10 border border-primary/30 px-3 py-1">
                  <span className="text-xs tracking-[2px] text-primary uppercase font-medium">#1 Call</span>
                </div>
              )}
              <div className="absolute top-0 left-0 w-[2px] h-0 bg-primary transition-all duration-300 group-hover:h-full" />
              <span className="text-4xl mb-4 block">{p.icon}</span>
              <div className="font-display text-[28px] tracking-[2px] text-foreground mb-3">{p.title}</div>
              <p className="text-sm text-dim leading-relaxed tracking-[0.5px]">{p.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-faint tracking-[0.5px] mt-4">* BitLocker recovery available on eligible devices only.</p>
      </div>
    </section>
  );
};

export default TopProblems;
