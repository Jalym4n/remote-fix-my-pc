import { Link } from "react-router-dom";
import logoBracket from "@/assets/logo-bracket.png";

const BrandHero = () => {
  return (
    <section className="w-full bg-surface bg-noise relative overflow-hidden px-6 md:px-20 pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="absolute inset-0 z-0 bg-circuit opacity-60" />
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 20% 20%, hsla(180,70%,50%,0.10) 0%, transparent 55%)" }} />
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 85% 90%, hsla(160,60%,50%,0.08) 0%, transparent 55%)" }} />
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 30%, hsl(220 22% 7%) 100%)" }} />

      <div className="relative z-[2] max-w-6xl mx-auto">
        <img src={logoBracket} alt="" aria-hidden="true" className="h-16 w-auto object-contain opacity-75 mx-auto mb-6" />
        <div className="text-[13px] tracking-[4px] text-faint uppercase mb-5 text-center">
          // ALTCTRL — Two divisions, one operator
        </div>
        <h1 className="font-display text-[clamp(40px,6vw,76px)] leading-[1.05] text-foreground tracking-[-0.02em] mb-6 text-center">
          Engineering trust into <span className="text-primary">every system we touch.</span>
        </h1>
        <p className="text-base md:text-lg text-dim leading-relaxed max-w-2xl mx-auto text-center mb-12">
          ALTCTRL operates two specialised divisions: a live <strong className="text-foreground font-medium">IT Solutions venture</strong> serving household and enterprise clients today, and an emerging <strong className="text-foreground font-medium">AI startup</strong> developing next-generation clinical infrastructure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {/* IT Services — Operational */}
          <div className="group bg-surface2 border border-border hover:border-primary/60 rounded-xl p-7 transition-all">
            <div className="flex items-center justify-between mb-5">
              <span className="text-[11px] tracking-[3px] text-faint uppercase">Division 01</span>
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[2px] text-primary uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-dot" />
                Operational
              </span>
            </div>
            <div className="font-display text-[32px] tracking-[-0.01em] text-foreground mb-3">
              ALTCTRL <span className="text-primary">/ IT Services</span>
            </div>
            <p className="text-sm text-dim leading-relaxed mb-6">
              Computer repair, BitLocker recovery, remote rescue and managed IT for individuals, professional practices and small enterprises. Insured, no-fix-no-fee, same-day capacity.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Link
                to="/bitlocker-recovery"
                className="text-[11px] tracking-[1px] text-primary bg-primary/10 border border-primary/40 px-2.5 py-1 rounded hover:bg-primary/20 transition-colors"
              >
                BitLocker Recovery →
              </Link>
              {["Remote Rescue", "Managed IT", "Data Recovery"].map((t) => (
                <span key={t} className="text-[11px] tracking-[1px] text-foreground bg-surface3 border border-border px-2.5 py-1 rounded">{t}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/it-services" className="text-[12px] tracking-[3px] text-primary uppercase hover:translate-x-1 transition-transform">
                → Explore IT Services
              </Link>
              <Link to="/bitlocker-recovery" className="text-[12px] tracking-[3px] text-foreground uppercase border-l border-border pl-3 hover:text-primary transition-colors">
                → BitLocker landing page
              </Link>
            </div>
          </div>

          {/* AI Labs — In Development */}
          <Link to="/ai-labs" className="group bg-surface2 border border-border hover:border-accent/60 rounded-xl p-7 transition-all">
            <div className="flex items-center justify-between mb-5">
              <span className="text-[11px] tracking-[3px] text-faint uppercase">Division 02</span>
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[2px] uppercase" style={{ color: "hsl(40 90% 60%)" }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "hsl(40 90% 60%)" }} />
                In Development
              </span>
            </div>
            <div className="font-display text-[32px] tracking-[-0.01em] text-foreground mb-3">
              ALTCTRL <span className="text-accent">/ AI Labs</span>
            </div>
            <p className="text-sm text-dim leading-relaxed mb-6">
              An R&amp;D arm building HIPAA-aligned clinical AI infrastructure: secure RAG, fine-tuned open-weight models, and tenant-isolated deployments. Currently in private beta.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Clinical RAG", "LLM Fine-tuning", "GCP · AWS · Azure", "Private Beta"].map((t) => (
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
