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

      {/* Dialog box */}
      <div className="flex-shrink-0 z-[2] animate-fade-up-delay hidden lg:block" style={{ filter: "drop-shadow(0 12px 40px rgba(0,0,0,0.9))" }}>
        <div className="w-[420px] bg-surface-3 border-t border-l border-border-light border-r border-b border-r-[#111] border-b-[#111]">
          <div className="h-7 flex items-center justify-between px-2 pl-3" style={{ background: "linear-gradient(90deg, #000080 55%, #1084d0 100%)" }}>
            <span className="text-[13px] text-primary-foreground tracking-[1px]">altctrl-triage // inference.log</span>
            <div className="flex gap-[2px]">
              <div className="w-[17px] h-[15px] bg-muted border-t border-l border-border-light border-r border-b border-r-[#111] border-b-[#111] text-[10px] text-dim flex items-center justify-center">✕</div>
            </div>
          </div>
          <div className="p-5 font-mono text-[12px] leading-[1.7] border-b border-border">
            <div className="text-faint">[INFO] vector_store: pgvector (HIPAA-isolated VPC)</div>
            <div className="text-faint">[INFO] base_model: gemma-2-9b (fine-tuned)</div>
            <div className="text-faint">[INFO] retrieval: hybrid BM25 + dense (top_k=8)</div>
            <div className="text-green">[OK]   embeddings: 1.2M clinical notes indexed</div>
            <div className="text-green">[OK]   compliance: SOC2-ready, audit logs on</div>
            <div className="text-foreground mt-2">▶ triage --intake "chest pain, 58F, htn..."</div>
            <div className="text-dim pl-3">→ urgency: <span className="text-primary">HIGH</span></div>
            <div className="text-dim pl-3">→ recommended_pathway: ED escalation</div>
            <div className="text-dim pl-3">→ confidence: 0.91 · citations: 6</div>
            <div className="text-faint mt-3">RUN_MODE — clinician-in-the-loop · not a medical device</div>
          </div>
          <div className="p-3 flex justify-center gap-3">
            <a href="#contact" className="h-7 bg-muted border-t border-l border-border-light border-r border-b border-r-[#111] border-b-[#111] font-mono text-[13px] text-dim flex items-center justify-center cursor-pointer hover:bg-surface-3 hover:text-foreground px-4" style={{ outline: "1px dashed hsl(var(--text-faint))", outlineOffset: "-4px" }}>
              Request Access
            </a>
            <a href="#stack" className="h-7 bg-muted border-t border-l border-border-light border-r border-b border-r-[#111] border-b-[#111] font-mono text-[13px] text-dim flex items-center justify-center cursor-pointer hover:bg-surface-3 hover:text-foreground px-4" style={{ outline: "1px dashed hsl(var(--text-faint))", outlineOffset: "-4px" }}>
              Architecture
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
