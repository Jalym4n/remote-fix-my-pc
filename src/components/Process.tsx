import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { num: "01", title: "Get in Touch", desc: "Call, message, or fill in the form. Tell me what's going on — no jargon needed." },
  { num: "02", title: "Diagnose", desc: "Free assessment. I find the root cause, not just the symptom. Remote or on-site." },
  { num: "03", title: "Quote & Approve", desc: "Flat-rate pricing upfront. No surprises. You approve first. Diagnosis fee waived if you proceed." },
  { num: "04", title: "Fixed", desc: "Most repairs same-day. No fix, no fee. 90-day warranty on all work." },
];

const Process = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="process" className="px-6 md:px-20 py-20 md:py-24 bg-background relative bg-noise">
      <div className="absolute inset-0 glow-center pointer-events-none" />
      <div ref={ref} className={isVisible ? "scroll-visible" : "scroll-hidden"}>
        <div className="text-[13px] tracking-[4px] text-faint uppercase mb-3">// how it works</div>
        <div className="font-display text-[clamp(44px,5vw,64px)] text-foreground tracking-[2px] mb-12">
          The <span className="text-primary">Process</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative">
          <div className="absolute top-7 left-[12.5%] right-[12.5%] h-px bg-border z-0 hidden lg:block" />

          {steps.map((step) => (
            <div key={step.num} className="relative z-[1] text-center px-5 group mb-8 lg:mb-0">
              <div className="w-14 h-14 bg-surface border border-border-light flex items-center justify-center mx-auto mb-5 font-display text-2xl text-primary relative">
                {step.num}
                <div className="absolute -inset-1 border border-primary opacity-0 group-hover:opacity-50 transition-opacity" />
              </div>
              <div className="font-display text-[22px] tracking-[2px] text-foreground mb-3">{step.title}</div>
              <p className="text-sm text-dim leading-relaxed tracking-[0.5px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
