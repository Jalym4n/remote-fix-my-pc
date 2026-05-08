const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-surface bg-noise relative overflow-hidden flex flex-col lg:flex-row items-center justify-between px-6 md:px-20 pt-28 pb-20 gap-10 lg:gap-16">
      <div className="absolute inset-0 z-0 bg-circuit" />
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 15% 30%, hsla(0,100%,40%,0.18) 0%, transparent 50%)" }} />
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 85% 80%, hsla(145,100%,40%,0.10) 0%, transparent 50%)" }} />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/30 z-[1]" />
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 20%, hsl(0 0% 5%) 100%)" }} />

      <div className="flex-1 z-[2] animate-fade-up max-w-2xl">
        <div className="text-[14px] tracking-[4px] text-faint uppercase mb-5">
          // ALTCTRL Solutions — Clinical AI Infrastructure
        </div>

        <h1 className="font-display text-[clamp(42px,6vw,72px)] leading-[1.05] text-foreground tracking-[2px] mb-5">
          Next-Gen AI Infrastructure for <span className="text-primary">Modern Healthcare.</span>
        </h1>

        <p className="text-base text-dim tracking-[0.5px] leading-relaxed max-w-lg mb-6">
          ALTCTRL Solutions is bridging the gap between clinical data and actionable insights. We build secure, <strong className="text-foreground font-normal">HIPAA-aligned RAG architectures</strong> for the future of patient triage and clinical decision support.
        </p>

        {/* Beta box */}
        <div className="border border-primary/40 bg-primary/5 px-5 py-4 mb-8 max-w-lg">
          <span className="text-primary font-display text-2xl tracking-[2px]">CLOSED BETA — PRIVATE PREVIEW</span>
          <p className="text-sm text-dim tracking-[0.5px] mt-2 leading-relaxed">
            Our clinical triage platform is currently onboarding select independent practices and research partners. Beta access is granted on a rolling basis to qualified design partners.
          </p>
        </div>

        <div className="flex gap-4 items-center flex-wrap">
          <a href="#contact" className="font-mono text-[14px] tracking-[3px] text-primary-foreground bg-primary border border-primary px-7 py-4 uppercase hover:bg-transparent hover:text-primary transition-colors">
            → Request Beta Access
          </a>
          <a href="#stack" className="font-mono text-[14px] tracking-[3px] text-green border border-green px-7 py-4 uppercase hover:bg-green hover:text-background transition-colors">
            View Documentation
          </a>
          <a href="#contact" className="font-mono text-[14px] tracking-[3px] text-dim border border-border px-7 py-4 uppercase hover:border-dim hover:text-foreground transition-colors">
            Join Waitlist
          </a>
        </div>
      </div>

      {/* Dashboard card */}
      <div className="flex-shrink-0 z-[2] animate-fade-up-delay hidden lg:block w-[440px]" style={{ filter: "drop-shadow(0 24px 60px rgba(0,0,0,0.5))" }}>
        <div className="bg-surface border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-green animate-pulse-dot" />
              <span className="text-[13px] text-foreground font-medium tracking-tight">Triage Inference</span>
            </div>
            <span className="text-[11px] text-faint font-mono uppercase tracking-wider">live</span>
          </div>

          <div className="p-5 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-surface2 rounded-lg p-3 border border-border/60">
                <div className="text-[10px] text-faint uppercase tracking-wider mb-1">Model</div>
                <div className="text-sm text-foreground font-medium">Gemma-2 · FT</div>
              </div>
              <div className="bg-surface2 rounded-lg p-3 border border-border/60">
                <div className="text-[10px] text-faint uppercase tracking-wider mb-1">Retrieval</div>
                <div className="text-sm text-foreground font-medium">Hybrid · k=8</div>
              </div>
            </div>

            <div className="bg-surface2 rounded-lg p-4 border border-border/60">
              <div className="text-[11px] text-faint uppercase tracking-wider mb-2">Intake</div>
              <p className="text-sm text-dim leading-relaxed">"58F, chest pain on exertion, hx hypertension..."</p>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-dim">Urgency</span>
                <span className="text-primary font-semibold">High</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-dim">Pathway</span>
                <span className="text-foreground">ED escalation</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-dim">Confidence</span>
                <span className="text-foreground">0.91 · 6 citations</span>
              </div>
            </div>

            <div className="pt-3 border-t border-border/60 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green" />
              <span className="text-[11px] text-faint">Clinician-in-the-loop · decision support only</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
