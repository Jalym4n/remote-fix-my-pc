import { useScrollReveal } from "@/hooks/useScrollReveal";

const RemoteSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="remote" className="px-6 md:px-20 py-20 md:py-24 bg-background relative bg-noise">
      <div className="absolute inset-0 glow-red pointer-events-none" />
      <div className="absolute inset-0 glow-green pointer-events-none" />
      <div ref={ref} className={isVisible ? "scroll-visible" : "scroll-hidden"}>
        <div className="text-[13px] tracking-[4px] text-faint uppercase mb-3">// remote support</div>
        <div className="font-display text-[clamp(44px,5vw,64px)] text-foreground tracking-[2px] mb-6">
          Can't Come to <span className="text-primary">Us?</span><br />
          We Come to <span className="text-green">You.</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-10">
          <div className="border border-primary/30 bg-primary/5 p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            <span className="text-4xl mb-4 block">🖥️</span>
            <h3 className="font-display text-[32px] tracking-[2px] text-foreground mb-4">Remote Desktop Repair</h3>
            <p className="text-sm text-dim leading-relaxed tracking-[0.5px] mb-4">
              <strong className="text-foreground font-normal">Too far for a house visit? No problem.</strong> I can fix almost any software issue by remotely connecting to your computer. Screen sharing, remote desktop — I guide you through every step.
            </p>
            <p className="text-sm text-dim leading-relaxed tracking-[0.5px] mb-4">
              Not sure how to set it up? I'll <strong className="text-foreground font-normal">FaceTime or video-call you</strong> and walk you through the initial connection step-by-step. Even if you've never done anything like this before.
            </p>
            <div className="border border-border bg-surface p-5 mt-4">
              <div className="font-display text-xl text-green tracking-[2px] mb-3">PERFECT FOR:</div>
              <ul className="text-sm text-dim leading-[2] tracking-[0.5px] space-y-1">
                <li>→ Elderly or immobile individuals who can't leave home</li>
                <li>→ Anyone who isn't tech-savvy and needs clear guidance</li>
                <li>→ People too far away for an on-site visit</li>
                <li>→ Quick fixes that don't need physical access</li>
                <li>→ Virus removal, slow PC, software issues, setup help</li>
              </ul>
            </div>
            <div className="text-[13px] tracking-[2px] text-primary mt-6 uppercase">
              → Same no-fix-no-fee guarantee applies
            </div>
          </div>

          <div className="border border-border bg-surface p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-0 bg-primary transition-all duration-300 group-hover:h-full" />
            <span className="text-4xl mb-4 block">🏠</span>
            <h3 className="font-display text-[32px] tracking-[2px] text-foreground mb-4">House Visits</h3>
            <p className="text-sm text-dim leading-relaxed tracking-[0.5px] mb-4">
              Within a reasonable distance, I'll come directly to your home and fix it on-site. No lugging your PC anywhere — I bring everything needed.
            </p>
            <div className="border border-border bg-background p-5 mt-4">
              <div className="font-display text-xl text-primary tracking-[2px] mb-3">HOW IT WORKS:</div>
              <ul className="text-sm text-dim leading-[2] tracking-[0.5px] space-y-1">
                <li>→ <strong className="text-foreground font-normal">Free diagnosis</strong> — I assess the problem first</li>
                <li>→ <strong className="text-foreground font-normal">No fix, no fee</strong> — if I can't fix it, you pay nothing</li>
                <li>→ If you choose to repair, <strong className="text-foreground font-normal">the diagnosis fee is waived</strong></li>
                <li>→ Flat, transparent pricing before any work starts</li>
                <li>→ Most repairs completed same visit</li>
              </ul>
            </div>
            <div className="text-[13px] tracking-[2px] text-green mt-6 uppercase">
              → Diagnosis fee waived with repair
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemoteSection;
