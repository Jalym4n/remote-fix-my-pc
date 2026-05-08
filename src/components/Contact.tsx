import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="px-6 md:px-20 py-20 md:py-24 bg-surface relative bg-noise bg-circuit">
      <div className="absolute inset-0 glow-bottom pointer-events-none" />
      <div ref={ref} className={isVisible ? "scroll-visible" : "scroll-hidden"}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="text-[13px] tracking-[4px] text-faint uppercase mb-3">// request access</div>
            <div className="font-display text-[clamp(44px,5vw,64px)] text-foreground tracking-[2px] mb-8">
              Beta &amp;<br /><span className="text-green">Design Partners</span>
            </div>
            <p className="text-sm text-dim leading-relaxed tracking-[0.5px] mb-8">
              Our Beta programme is open to a limited number of clinical and research teams. Share a short description of your workflow and target environment, and a member of the lab will be in touch.
            </p>

            <div className="flex flex-col gap-4">
              {[
                { icon: "📧", label: "Direct", val: "jaleed01@altctrl.run" },
                { icon: "🌐", label: "Domain", val: "altctrl.run" },
                { icon: "☁️", label: "Deployment", val: "GCP · AWS · Azure" },
                { icon: "🛡️", label: "Compliance", val: "HIPAA-aligned · SOC2-ready" },
                { icon: "🕐", label: "Response", val: "Within one business day" },
              ].map((m) => (
                <div key={m.label} className="flex items-center gap-4 p-4 bg-surface-2 border border-border hover:border-primary transition-colors">
                  <span className="text-lg flex-shrink-0">{m.icon}</span>
                  <div>
                    <div className="text-xs tracking-[2px] text-dim uppercase">{m.label}</div>
                    <div className="text-sm text-foreground tracking-[0.5px]">{m.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-[3px] text-faint uppercase">Full Name</label>
              <input type="text" placeholder="Dr. Jane Smith" className="bg-surface-2 border border-border text-foreground font-mono text-sm p-3.5 outline-none focus:border-primary transition-colors tracking-[0.5px]" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-[3px] text-faint uppercase">Work Email</label>
              <input type="email" placeholder="jane@clinic.org" className="bg-surface-2 border border-border text-foreground font-mono text-sm p-3.5 outline-none focus:border-primary transition-colors tracking-[0.5px]" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-[3px] text-faint uppercase">Organisation</label>
              <input type="text" placeholder="Practice, hospital, or research group" className="bg-surface-2 border border-border text-foreground font-mono text-sm p-3.5 outline-none focus:border-primary transition-colors tracking-[0.5px]" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-[3px] text-faint uppercase">Area of Interest</label>
              <select className="bg-surface-2 border border-border text-foreground font-mono text-sm p-3.5 outline-none cursor-pointer tracking-[0.5px] focus:border-primary transition-colors appearance-none">
                <option value="">Select an area...</option>
                <option>Patient triage / intake</option>
                <option>Clinical documentation</option>
                <option>Guideline-grounded Q&amp;A</option>
                <option>Research / cohort discovery</option>
                <option>Custom fine-tuning</option>
                <option>Architecture review</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-[3px] text-faint uppercase">Workflow &amp; Environment</label>
              <textarea placeholder="Briefly describe your workflow, target cloud provider, and any compliance constraints..." className="bg-surface-2 border border-border text-foreground font-mono text-sm p-3.5 outline-none focus:border-primary transition-colors tracking-[0.5px] resize-none h-32" />
            </div>
            <button className="w-full font-mono text-[13px] tracking-[3px] text-primary-foreground bg-primary py-4 uppercase cursor-pointer hover:bg-primary/80 transition-colors border-none">
              Request Beta Access →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
