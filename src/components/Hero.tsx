const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-surface bg-noise relative overflow-hidden flex flex-col lg:flex-row items-center justify-between px-6 md:px-20 pt-28 pb-20 gap-10 lg:gap-16">
      {/* Circuit grid bg */}
      <div className="absolute inset-0 z-0 bg-circuit" />
      {/* Red glow top-left */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 15% 30%, hsla(0,100%,40%,0.07) 0%, transparent 50%)" }} />
      {/* Green glow bottom-right */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 85% 80%, hsla(145,100%,40%,0.04) 0%, transparent 50%)" }} />
      {/* Vignette */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 30%, hsl(0 0% 5%) 100%)" }} />

      <div className="flex-1 z-[2] animate-fade-up">
        <div className="text-[13px] tracking-[4px] text-faint uppercase mb-4">
          // Solo Tech — Remote & On-Site
        </div>
        <h1 className="font-display text-[clamp(70px,10vw,130px)] leading-[0.88] text-foreground tracking-[3px] mb-7">
          ALT<span className="text-primary">CTRL</span>
        </h1>
        <p className="text-base text-dim tracking-[1px] leading-relaxed max-w-md mb-5">
          One-person computer repair. House visits. Remote fixes via screen-share. No fix, no fee. Price-beat guarantee.
        </p>

        {/* Price beat badge */}
        <div className="border border-primary/40 bg-primary/5 px-5 py-4 mb-8 max-w-md">
          <span className="text-primary font-display text-2xl tracking-[2px]">15% PRICE-BEAT GUARANTEE</span>
          <p className="text-sm text-dim tracking-[0.5px] mt-2 leading-relaxed">
            Show us any competitor's written quote — we'll beat it by at least 15%. Every time.
          </p>
        </div>

        <div className="flex gap-4 items-center flex-wrap">
          <a href="#contact" className="font-mono text-[13px] tracking-[3px] text-primary-foreground bg-primary border border-primary px-7 py-3.5 uppercase hover:bg-transparent hover:text-primary transition-colors">
            Get Help Now
          </a>
          <a href="#remote" className="font-mono text-[13px] tracking-[3px] text-dim border border-border px-7 py-3.5 uppercase hover:border-dim hover:text-foreground transition-colors">
            Remote Support
          </a>
        </div>
      </div>

      {/* Dialog box */}
      <div className="flex-shrink-0 z-[2] animate-fade-up-delay hidden lg:block" style={{ filter: "drop-shadow(0 12px 40px rgba(0,0,0,0.9))" }}>
        <div className="w-[380px] bg-surface-3 border-t border-l border-border-light border-r border-b border-r-[#111] border-b-[#111]">
          <div className="h-7 flex items-center justify-between px-2 pl-3" style={{ background: "linear-gradient(90deg, #000080 55%, #1084d0 100%)" }}>
            <span className="text-[13px] text-primary-foreground tracking-[1px]">System Diagnostic</span>
            <div className="flex gap-[2px]">
              <div className="w-[17px] h-[15px] bg-muted border-t border-l border-border-light border-r border-b border-r-[#111] border-b-[#111] text-[10px] text-dim flex items-center justify-center">✕</div>
            </div>
          </div>
          <div className="p-6 flex gap-4 items-start border-b border-border">
            <span className="text-4xl flex-shrink-0">⚠️</span>
            <div>
              <div className="text-sm text-foreground font-bold mb-2 tracking-[0.5px]">Your PC needs help.</div>
              <div className="text-[13px] text-dim leading-relaxed">
                Don't worry — whether you're across town or across the country, <strong className="text-foreground/80 font-normal">ALTCTRL can fix it remotely</strong> or come to your door.
              </div>
              <div className="text-xs text-faint mt-3 tracking-[1px]">NO_FIX_NO_FEE — 0x000_GUARANTEED</div>
            </div>
          </div>
          <div className="p-3 flex justify-center">
            <a href="#contact" className="w-20 h-7 bg-muted border-t border-l border-border-light border-r border-b border-r-[#111] border-b-[#111] font-mono text-[13px] text-dim flex items-center justify-center cursor-pointer hover:bg-surface-3 hover:text-foreground" style={{ outline: "1px dashed hsl(var(--text-faint))", outlineOffset: "-4px" }}>
              OK
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
