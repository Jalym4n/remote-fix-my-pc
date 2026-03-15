import { useScrollReveal } from "@/hooks/useScrollReveal";

const problems = [
  { icon: "🔒", title: "BitLocker Locked*", desc: "Locked out following an update, reset, or hardware change. Recovery is available on eligible devices via house visit or drop-off. In-person service only.", primary: true },
  { icon: "🐌", title: "Slow / Freezing PC", desc: "Extended boot times, unresponsive applications, excessive fan noise. Comprehensive tune-up including bloatware removal and system optimisation.", primary: false },
  { icon: "💀", title: "Won't Boot / Blue Screen", desc: "Blue screen errors, boot loops, or blank displays. Root cause diagnosis and repair — not just a temporary workaround.", primary: false },
  { icon: "🦠", title: "Virus & Malware", desc: "Pop-ups, ransomware, suspicious activity. Full removal with system hardening to prevent recurrence.", primary: false },
  { icon: "💾", title: "Software Problems", desc: "Failed updates, driver conflicts, application crashes, operating system errors. Resolved remotely or on-site.", primary: false },
  { icon: "🛠️", title: "Setup & Configuration", desc: "New device setup, printer installation, email configuration, data migration. Handled efficiently with minimal disruption.", primary: false },
];

const TopProblems = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="px-6 md:px-20 py-20 md:py-24 bg-background relative bg-noise">
      <div className="absolute inset-0 glow-red pointer-events-none" />
      <div ref={ref} className={isVisible ? "scroll-visible" : "scroll-hidden"}>
        <div className="text-[14px] tracking-[4px] text-faint uppercase mb-3">// common issues resolved</div>
        <div className="font-display text-[clamp(44px,5vw,64px)] text-foreground tracking-[2px] mb-4">
          Problems We <span className="text-primary">Resolve</span>
        </div>
        <p className="text-sm text-dim tracking-[0.5px] mb-12 max-w-lg">
          These represent the most frequent issues clients contact us about. If your problem is not listed, please get in touch — it is very likely something we have encountered before.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {problems.map((p) => (
            <div key={p.title} className={`bg-surface p-8 relative overflow-hidden group transition-colors hover:bg-surface-2 ${p.primary ? "border-l-2 border-l-primary" : ""}`}>
              {p.primary && (
                <div className="absolute top-3 right-3 bg-primary/10 border border-primary/30 px-3 py-1">
                  <span className="text-xs tracking-[2px] text-primary uppercase font-medium">Most Requested</span>
                </div>
              )}
              <div className="absolute top-0 left-0 w-[2px] h-0 bg-primary transition-all duration-300 group-hover:h-full" />
              <span className="text-4xl mb-4 block">{p.icon}</span>
              <div className="font-display text-[28px] tracking-[2px] text-foreground mb-3">{p.title}</div>
              <p className="text-sm text-dim leading-relaxed tracking-[0.5px]">{p.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-faint tracking-[0.5px] mt-4">* BitLocker recovery is available on eligible devices only and requires in-person service (house visit or drop-off). Remote BitLocker recovery is not offered.</p>
      </div>
    </section>
  );
};

export default TopProblems;
