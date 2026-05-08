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

          {/* Architecture diagram card */}
          <div className="bg-surface border border-border rounded-xl overflow-hidden">
            <div className="px-5 py-4 border-b border-border flex items-center justify-between">
              <span className="text-sm text-foreground font-medium">Reference Architecture</span>
              <span className="text-[11px] text-faint font-mono uppercase tracking-wider">v1.4</span>
            </div>
            <div className="p-6 space-y-4">
              {[
                { label: "Ingest", desc: "De-identification · chunking · embeddings", tone: "primary" },
                { label: "Retrieve", desc: "pgvector · hybrid BM25 + dense", tone: "primary" },
                { label: "Reason", desc: "Fine-tuned LLM · guardrails · citations", tone: "green" },
                { label: "Review", desc: "Clinician-in-the-loop · audit log", tone: "green" },
              ].map((step, i) => (
                <div key={step.label} className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-9 h-9 rounded-lg border flex items-center justify-center text-sm font-semibold ${step.tone === "primary" ? "border-primary/40 text-primary bg-primary/5" : "border-green/40 text-green bg-green/5"}`}>
                    {i + 1}
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="text-sm text-foreground font-medium">{step.label}</div>
                    <div className="text-xs text-dim mt-0.5">{step.desc}</div>
                  </div>
                </div>
              ))}
              <div className="pt-3 mt-2 border-t border-border/60 grid grid-cols-3 gap-3">
                {["GCP", "AWS", "Azure"].map((c) => (
                  <div key={c} className="text-center bg-surface2 border border-border/60 rounded-md py-2 text-xs text-dim font-medium">{c}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
