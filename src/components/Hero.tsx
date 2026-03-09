const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-surface relative overflow-hidden flex flex-col lg:flex-row items-center justify-between px-6 md:px-20 pt-28 pb-20 gap-10 lg:gap-16">
      {/* Grid bg */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Vignette */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 30%, hsl(0 0% 5%) 100%)" }} />

      <div className="flex-1 z-[2] animate-fade-up">
        <div className="text-[10px] tracking-[5px] text-faint uppercase mb-4">
          // Solo Tech — Remote & On-Site
        </div>
        <h1 className="font-display text-[clamp(60px,10vw,120px)] leading-[0.88] text-foreground tracking-[3px] mb-7">
          ALT<span className="text-primary">CTRL</span>
        </h1>
        <p className="text-[13px] text-dim tracking-[2px] leading-[2.2] max-w-xs mb-5">
          One-person computer repair. House visits. Remote fixes via screen-share. No fix, no fee. Price-beat guarantee.
        </p>

        {/* Price beat badge */}
        <div className="border border-primary/40 bg-primary/5 px-4 py-3 mb-8 max-w-sm">
          <span className="text-primary font-display text-xl tracking-[2px]">15% PRICE-BEAT GUARANTEE</span>
          <p className="text-[11px] text-dim tracking-[1px] mt-1">
            Show us any competitor's written quote — we'll beat it by at least 15%. Every time.
          </p>
        </div>

        <div className="flex gap-4 items-center flex-wrap">
          <a href="#contact" className="font-mono text-[10px] tracking-[5px] text-primary-foreground bg-primary border border-primary px-7 py-3 uppercase hover:bg-transparent hover:text-primary transition-colors">
            Get Help Now
          </a>
          <a href="#remote" className="font-mono text-[10px] tracking-[5px] text-dim border border-border px-7 py-3 uppercase hover:border-dim hover:text-foreground transition-colors">
            Remote Support
          </a>
        </div>
      </div>

      {/* Dialog box */}
      <div className="flex-shrink-0 z-[2] animate-fade-up-delay hidden lg:block" style={{ filter: "drop-shadow(0 12px 40px rgba(0,0,0,0.9))" }}>
        <div className="w-[360px] bg-surface-3 border-t border-l border-border-light border-r border-b border-r-[#111] border-b-[#111]">
          <div className="h-6 flex items-center justify-between px-2 pl-3" style={{ background: "linear-gradient(90deg, #000080 55%, #1084d0 100%)" }}>
            <span className="text-[11px] text-primary-foreground tracking-[1px]">System Diagnostic</span>
            <div className="flex gap-[2px]">
              <div className="w-[15px] h-[13px] bg-muted border-t border-l border-border-light border-r border-b border-r-[#111] border-b-[#111] text-[9px] text-dim flex items-center justify-center">✕</div>
            </div>
          </div>
          <div className="p-5 flex gap-4 items-start border-b border-border">
            <span className="text-4xl flex-shrink-0">⚠️</span>
            <div>
              <div className="text-xs text-foreground font-bold mb-2 tracking-[0.5px]">Your PC needs help.</div>
              <div className="text-[11px] text-dim leading-[1.8]">
                Don't worry — whether you're across town or across the country, <strong className="text-foreground/80 font-normal">ALTCTRL can fix it remotely</strong> or come to your door.
              </div>
              <div className="text-[10px] text-faint mt-3 tracking-[1px]">NO_FIX_NO_FEE — 0x000_GUARANTEED</div>
            </div>
          </div>
          <div className="p-3 flex justify-center">
            <a href="#contact" className="w-20 h-6 bg-muted border-t border-l border-border-light border-r border-b border-r-[#111] border-b-[#111] font-mono text-[11px] text-dim flex items-center justify-center cursor-pointer hover:bg-surface-3 hover:text-foreground" style={{ outline: "1px dashed hsl(var(--text-faint))", outlineOffset: "-4px" }}>
              OK
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
