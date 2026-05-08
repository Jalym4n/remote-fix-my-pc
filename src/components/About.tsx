import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="px-6 md:px-20 py-20 md:py-24 bg-surface relative bg-noise bg-circuit">
      <div className="absolute inset-0 glow-red pointer-events-none" />
      <div ref={ref} className={isVisible ? "scroll-visible" : "scroll-hidden"}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[13px] tracking-[4px] text-faint uppercase mb-3">// the lab</div>
            <div className="font-display text-[clamp(44px,5vw,64px)] text-foreground tracking-[2px] mb-8">
              A focused lab.<br /><span className="text-primary">Not a consultancy.</span>
            </div>
            <p className="text-sm text-dim leading-relaxed tracking-[0.5px] mb-5">
              ALTCTRL Solutions is an independent technical lab focused exclusively on <strong className="text-foreground font-normal">clinical AI infrastructure</strong>. We design, deploy, and maintain the systems that allow healthcare teams to use modern language models safely and accountably.
            </p>
            <p className="text-sm text-dim leading-relaxed tracking-[0.5px] mb-5">
              Our work spans the full stack — from GPU provisioning and model fine-tuning, through retrieval pipelines and evaluation harnesses, up to the clinician-facing interfaces that gate model output behind human review.
            </p>
            <p className="text-sm text-dim leading-relaxed tracking-[0.5px] mb-5">
              The lab is led by a <strong className="text-foreground font-normal">Founder &amp; Lead AI Architect</strong> with deep systems engineering roots. Engagements are intentionally limited to preserve technical depth and direct accountability on every deployment.
            </p>

            <div className="grid grid-cols-2 gap-px bg-border border border-border mt-10">
              {[
                { num: "HIPAA", label: "Aligned design" },
                { num: "SOC2", label: "Ready controls" },
                { num: "Multi", label: "Cloud (GCP·AWS·Azure)" },
                { num: "IaC", label: "Terraform-managed" },
              ].map((s) => (
                <div key={s.label} className="bg-surface-2 p-6">
                  <div className="font-display text-[40px] text-primary tracking-[2px] leading-none">{s.num}</div>
                  <div className="text-xs tracking-[2px] text-dim uppercase mt-2">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal */}
          <div className="bg-[#0a0a0a] border border-border-light font-mono">
            <div className="bg-muted border-b border-border px-3.5 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ccaa00]" />
                <div className="w-2.5 h-2.5 rounded-full bg-green" />
              </div>
              <span className="text-[13px] text-dim tracking-[1px] ml-2">altctrl — deploy/triage_</span>
            </div>
            <div className="p-6 text-sm leading-[2]">
              <div className="flex gap-3 mb-0.5"><span className="text-green flex-shrink-0">▶</span><span className="text-foreground">terraform apply -target=module.triage</span></div>
              <div className="text-dim pl-6">Provisioning isolated VPC (us-east1)...</div>
              <div className="text-dim pl-6">[ Vertex AI endpoint — READY ]</div>
              <div className="text-dim pl-6">[ pgvector (PHI-tier) — READY ]</div>
              <div className="text-green pl-6">[ IAM least-privilege — APPLIED ]</div>
              <div className="text-green pl-6">[ Audit logs → Cloud Logging — ON ]</div>
              <div className="flex gap-3 mt-2 mb-0.5"><span className="text-green flex-shrink-0">▶</span><span className="text-foreground">eval --suite clinical-qa --model gemma-ft</span></div>
              <div className="text-dim pl-6">→ accuracy: 0.87 · faithfulness: 0.93</div>
              <div className="text-dim pl-6">→ hallucination_rate: 0.04</div>
              <div className="text-dim pl-6">→ citation_coverage: 0.96</div>
              <div className="flex gap-3 mt-2 mb-0.5"><span className="text-green flex-shrink-0">▶</span><span className="text-foreground">deploy --canary 10%</span></div>
              <div className="text-green pl-6">✓ Canary live. Awaiting clinician review.</div>
              <div className="flex gap-3 mt-2"><span className="text-green flex-shrink-0">▶</span><span className="text-foreground"><span className="inline-block w-2 h-3.5 bg-green animate-blink align-middle ml-0.5" /></span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
