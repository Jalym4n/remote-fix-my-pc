import { useScrollReveal } from "@/hooks/useScrollReveal";

const audiences = [
  {
    icon: "🏥",
    title: "Independent Practices",
    desc: "Small and mid-sized clinics seeking enterprise-grade AI assistance — clinical documentation, intake automation, and guideline-grounded Q&A — without enterprise-scale overhead.",
  },
  {
    icon: "🔬",
    title: "Research Groups",
    desc: "Academic and translational research teams requiring secure cohort discovery, literature synthesis, and evaluation harnesses for domain-specific model development.",
  },
  {
    icon: "💼",
    title: "Health-Tech Founders",
    desc: "Early-stage teams building clinical products who need a compliance-aware infrastructure partner to accelerate from prototype to production deployment.",
  },
  {
    icon: "🛠️",
    title: "Enterprise IT & Security",
    desc: "Organisations integrating LLMs into existing clinical systems with strict requirements around tenancy, data residency, audit logging, and least-privilege access.",
  },
];

const WhoItsFor = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="px-6 md:px-20 py-20 md:py-24 bg-surface relative bg-noise bg-circuit">
      <div className="absolute inset-0 glow-green pointer-events-none" />
      <div ref={ref} className={isVisible ? "scroll-visible" : "scroll-hidden"}>
        <div className="text-[14px] tracking-[4px] text-faint uppercase mb-3">// design partners</div>
        <div className="font-display text-[clamp(44px,5vw,64px)] text-foreground tracking-[2px] mb-4">
          Built for Teams That<br /><span className="text-green">Take Compliance Seriously</span>
        </div>
        <p className="text-sm text-dim tracking-[0.5px] mb-12 max-w-xl">
          We work with a small number of design partners to ensure each deployment is tailored, supported, and clinically meaningful.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
          {audiences.map((a) => (
            <div key={a.title} className="bg-background p-8 md:p-10 group hover:bg-surface-2 transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 w-[2px] h-0 bg-green transition-all duration-300 group-hover:h-full" />
              <span className="text-4xl mb-5 block">{a.icon}</span>
              <div className="font-display text-[28px] tracking-[2px] text-foreground mb-3">{a.title}</div>
              <p className="text-sm text-dim leading-relaxed tracking-[0.5px]">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
