import { Link } from "react-router-dom";


const BrandHero = () => {
  return (
    <section className="w-full bg-surface bg-noise relative overflow-hidden px-6 md:px-20 pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="absolute inset-0 z-0 bg-circuit opacity-60" />
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 20% 20%, hsla(180,70%,50%,0.10) 0%, transparent 55%)" }} />
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 85% 90%, hsla(160,60%,50%,0.08) 0%, transparent 55%)" }} />
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 30%, hsl(220 22% 7%) 100%)" }} />

      <div className="relative z-[2] max-w-6xl mx-auto">
        
        <div className="text-[13px] tracking-[4px] text-faint uppercase mb-5 text-center">
          // ALTCTRL — Three tracks, one operator · Mississauga &amp; the GTA
        </div>
        <h1 className="font-display text-[clamp(40px,6vw,76px)] leading-[1.05] text-foreground tracking-[-0.02em] mb-6 text-center">
          Engineering trust into <span className="text-primary">every system we touch.</span>
        </h1>
        <p className="text-base md:text-lg text-dim leading-relaxed max-w-2xl mx-auto text-center mb-12">
          ALTCTRL operates three specialised tracks: a live <strong className="text-foreground font-medium">IT Services</strong> practice for households, a dedicated <strong className="text-foreground font-medium">Business IT</strong> arm for organisations across the GTA, and an emerging <strong className="text-foreground font-medium">AI Labs</strong> R&amp;D division building next-generation clinical infrastructure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {/* Track 01 — IT Services (consumer) */}
          <div className="group bg-surface2 border border-border hover:border-primary/60 rounded-xl p-7 transition-all flex flex-col">
            <div className="flex items-center justify-between mb-5">
              <span className="text-[11px] tracking-[3px] text-faint uppercase">Track 01</span>
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[2px] text-primary uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-dot" />
                Same-day
              </span>
            </div>
            <div className="font-display text-[26px] tracking-[-0.01em] text-foreground mb-3">
              ALTCTRL <span className="text-primary">/ IT Services</span>
            </div>
            <p className="text-sm text-dim leading-relaxed mb-5 flex-1">
              Computer repair, BitLocker recovery, data recovery, virus removal and remote rescue for households and individuals across Mississauga and the GTA. No-fix-no-fee.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              <Link to="/bitlocker-recovery" className="text-[11px] tracking-[1px] text-primary bg-primary/10 border border-primary/40 px-2.5 py-1 rounded hover:bg-primary/20 transition-colors">
                BitLocker →
              </Link>
              <Link to="/data-recovery" className="text-[11px] tracking-[1px] text-primary bg-primary/10 border border-primary/40 px-2.5 py-1 rounded hover:bg-primary/20 transition-colors">
                Data Recovery →
              </Link>
              <Link to="/no-fix-no-fee" className="text-[11px] tracking-[1px] text-primary bg-primary/10 border border-primary/40 px-2.5 py-1 rounded hover:bg-primary/20 transition-colors">
                No Fix No Fee →
              </Link>
            </div>
            <Link to="/it-services" className="text-[12px] tracking-[3px] text-primary uppercase hover:translate-x-1 transition-transform">
              → Explore IT Services
            </Link>
          </div>

          {/* Track 02 — Business IT (B2B) */}
          <div className="group bg-surface2 border border-border hover:border-primary/60 rounded-xl p-7 transition-all flex flex-col">
            <div className="flex items-center justify-between mb-5">
              <span className="text-[11px] tracking-[3px] text-faint uppercase">Track 02</span>
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[2px] text-primary uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-dot" />
                NDA-ready
              </span>
            </div>
            <div className="font-display text-[26px] tracking-[-0.01em] text-foreground mb-3">
              ALTCTRL <span className="text-primary">/ Business IT</span>
            </div>
            <p className="text-sm text-dim leading-relaxed mb-5 flex-1">
              Managed IT, workstation fleet, network deployment and on-site response for professional practices and small organisations across the Greater Toronto Area.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {["Managed IT", "Fleet & Network", "On-site GTA", "Compliance-aware"].map((t) => (
                <span key={t} className="text-[11px] tracking-[1px] text-foreground bg-surface3 border border-border px-2.5 py-1 rounded">{t}</span>
              ))}
            </div>
            <Link to="/business-it" className="text-[12px] tracking-[3px] text-primary uppercase hover:translate-x-1 transition-transform">
              → Explore Business IT
            </Link>
          </div>

          {/* Track 03 — AI Labs */}
          <Link to="/ai-labs" className="group bg-surface2 border border-border hover:border-accent/60 rounded-xl p-7 transition-all flex flex-col">
            <div className="flex items-center justify-between mb-5">
              <span className="text-[11px] tracking-[3px] text-faint uppercase">Track 03</span>
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[2px] uppercase" style={{ color: "hsl(40 90% 60%)" }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "hsl(40 90% 60%)" }} />
                In Development
              </span>
            </div>
            <div className="font-display text-[26px] tracking-[-0.01em] text-foreground mb-3">
              ALTCTRL <span className="text-accent">/ AI Labs</span>
            </div>
            <p className="text-sm text-dim leading-relaxed mb-5 flex-1">
              An R&amp;D arm building HIPAA-aligned clinical AI infrastructure: secure RAG, fine-tuned open-weight models, tenant-isolated deployments. Currently in private beta.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {["Clinical RAG", "LLM Fine-tuning", "Private Beta"].map((t) => (
                <span key={t} className="text-[11px] tracking-[1px] text-foreground bg-surface3 border border-border px-2.5 py-1 rounded">{t}</span>
              ))}
            </div>
            <div className="text-[12px] tracking-[3px] text-accent uppercase group-hover:translate-x-1 transition-transform">
              → Follow the lab
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandHero;
