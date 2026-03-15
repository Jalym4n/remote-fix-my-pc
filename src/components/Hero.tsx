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
          // Emergency Computer Rescue — Remote & On-Site
        </div>

        <h1 className="font-display text-[clamp(42px,6vw,72px)] leading-[1.05] text-foreground tracking-[2px] mb-5">
          Locked out by <span className="text-primary">BitLocker?</span><br />
          Need urgent <span className="text-green">computer help?</span>
        </h1>

        <p className="text-base text-dim tracking-[0.5px] leading-relaxed max-w-lg mb-6">
          I recover BitLocker-locked PCs on eligible devices, fix broken computers, and rescue people who are stuck at home — all via remote screen-share or house visit. <strong className="text-foreground font-normal">No fix, no fee.</strong>
        </p>

        {/* Urgency box */}
        <div className="border border-primary/40 bg-primary/5 px-5 py-4 mb-8 max-w-lg">
          <span className="text-primary font-display text-3xl tracking-[2px]">YOUR PC IS LOCKED OR BROKEN?</span>
          <p className="text-sm text-dim tracking-[0.5px] mt-2 leading-relaxed">
            Don't panic. Even if you're elderly, immobile, or have never done anything like this before — I'll walk you through everything step by step via video call, then fix it remotely.
          </p>
        </div>

        <div className="flex gap-4 items-center flex-wrap">
          <a href="tel:+447000000000" className="font-mono text-[14px] tracking-[3px] text-primary-foreground bg-primary border border-primary px-7 py-4 uppercase hover:bg-transparent hover:text-primary transition-colors">
            📞 Call Now
          </a>
          <a href="sms:+447000000000" className="font-mono text-[14px] tracking-[3px] text-green border border-green px-7 py-4 uppercase hover:bg-green hover:text-background transition-colors">
            💬 Text Now
          </a>
          <a href="#contact" className="font-mono text-[14px] tracking-[3px] text-dim border border-border px-7 py-4 uppercase hover:border-dim hover:text-foreground transition-colors">
            Request Diagnosis
          </a>
        </div>
      </div>

      {/* Dialog box */}
      <div className="flex-shrink-0 z-[2] animate-fade-up-delay hidden lg:block" style={{ filter: "drop-shadow(0 12px 40px rgba(0,0,0,0.9))" }}>
        <div className="w-[400px] bg-surface-3 border-t border-l border-border-light border-r border-b border-r-[#111] border-b-[#111]">
          <div className="h-7 flex items-center justify-between px-2 pl-3" style={{ background: "linear-gradient(90deg, #000080 55%, #1084d0 100%)" }}>
            <span className="text-[13px] text-primary-foreground tracking-[1px]">BitLocker Recovery</span>
            <div className="flex gap-[2px]">
              <div className="w-[17px] h-[15px] bg-muted border-t border-l border-border-light border-r border-b border-r-[#111] border-b-[#111] text-[10px] text-dim flex items-center justify-center">✕</div>
            </div>
          </div>
          <div className="p-6 flex gap-4 items-start border-b border-border">
            <span className="text-4xl flex-shrink-0">🔒</span>
            <div>
              <div className="text-sm text-foreground font-bold mb-2 tracking-[0.5px]">BitLocker has locked your PC.</div>
              <div className="text-[14px] text-dim leading-relaxed">
                Don't worry — <strong className="text-foreground/80 font-normal">ALTCTRL can recover your access remotely</strong> on eligible devices, even if you've never done remote help before.
              </div>
              <div className="text-xs text-faint mt-3 tracking-[1px]">RECOVERY_MODE — 0x000_ALTCTRL_FIX</div>
            </div>
          </div>
          <div className="p-3 flex justify-center gap-3">
            <a href="tel:+447000000000" className="h-7 bg-muted border-t border-l border-border-light border-r border-b border-r-[#111] border-b-[#111] font-mono text-[13px] text-dim flex items-center justify-center cursor-pointer hover:bg-surface-3 hover:text-foreground px-4" style={{ outline: "1px dashed hsl(var(--text-faint))", outlineOffset: "-4px" }}>
              Call Now
            </a>
            <a href="#contact" className="h-7 bg-muted border-t border-l border-border-light border-r border-b border-r-[#111] border-b-[#111] font-mono text-[13px] text-dim flex items-center justify-center cursor-pointer hover:bg-surface-3 hover:text-foreground px-4" style={{ outline: "1px dashed hsl(var(--text-faint))", outlineOffset: "-4px" }}>
              Get Help
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
