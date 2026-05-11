const Hero = () => {
  return (
    <section className="w-full bg-background relative overflow-hidden px-6 md:px-20 py-16 md:py-20">
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 15% 30%, hsla(180,70%,50%,0.10) 0%, transparent 55%)" }} />
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 85% 80%, hsla(160,60%,50%,0.08) 0%, transparent 55%)" }} />

      <div className="relative z-[2] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[3px] uppercase border px-3 py-1 rounded-full mb-5" style={{ color: "hsl(40 90% 60%)", borderColor: "hsla(40,90%,60%,0.4)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "hsl(40 90% 60%)" }} />
            Private Beta · In Development
          </div>

          <h2 className="font-display text-[clamp(34px,4.8vw,56px)] leading-[1.05] text-foreground tracking-[-0.02em] mb-5">
            Clinical AI infrastructure, <span className="text-accent">engineered for trust.</span>
          </h2>

          <p className="text-base text-dim leading-relaxed max-w-xl mb-6">
            ALTCTRL / AI Labs is our R&amp;D division. We build secure, <strong className="text-foreground font-medium">HIPAA-aligned RAG architectures</strong> and fine-tune open-weight models for clinical decision support — deployed inside our partners' own cloud tenancies.
          </p>

          <div className="border border-accent/40 bg-accent/5 px-5 py-4 mb-8 max-w-lg rounded-md">
            <span className="text-accent font-display text-lg tracking-[1px]">Closed beta — design partners only</span>
            <p className="text-sm text-dim mt-2 leading-relaxed">
              Not a live commercial product yet. The platform is currently onboarding a small number of clinical and research design partners.
            </p>
          </div>

          <div className="flex gap-3 items-center flex-wrap">
            <a href="#contact" className="font-mono text-[13px] tracking-[3px] text-primary-foreground bg-accent border border-accent px-6 py-3.5 uppercase hover:bg-transparent hover:text-accent transition-colors rounded-md">
              → Join the waitlist
            </a>
            <a href="#stack" className="font-mono text-[13px] tracking-[3px] text-foreground border border-border px-6 py-3.5 uppercase hover:border-accent hover:text-accent transition-colors rounded-md">
              View architecture
            </a>
          </div>
        </div>

        {/* Dashboard card */}
        <div className="hidden lg:block" style={{ filter: "drop-shadow(0 24px 60px rgba(0,0,0,0.5))" }}>
          <div className="bg-surface border border-border rounded-xl overflow-hidden">
            <div className="px-5 py-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-green animate-pulse-dot" />
                <span className="text-[13px] text-foreground font-medium tracking-tight">Triage Inference</span>
              </div>
              <span className="text-[11px] text-faint font-mono uppercase tracking-wider">beta · simulated</span>
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
                  <span className="text-accent font-semibold">High</span>
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
      </div>
    </section>
  );
};

export default Hero;
