import { useScrollReveal } from "@/hooks/useScrollReveal";

const options = [
  {
    icon: "🧬",
    title: "Clinical LLM Fine-Tuning",
    highlight: true,
    desc: "Domain adaptation of open-weight models (Gemma, Llama-3, Mistral) on de-identified clinical corpora. Parameter-efficient fine-tuning (LoRA / QLoRA) with rigorous evaluation against medical benchmarks.",
    tags: ["Gemma · Llama-3", "LoRA / QLoRA", "Clinical eval"],
    note: "Training pipelines deployed on Vertex AI, SageMaker, or Azure ML.",
    cta: "Core capability",
  },
  {
    icon: "🔎",
    title: "Secure Data Vectorization",
    highlight: false,
    desc: "Production-grade RAG pipelines for clinical knowledge bases — guideline ingestion, chunking, embeddings, and hybrid retrieval — within isolated, audit-logged environments designed for PHI workloads.",
    tags: ["pgvector · Vertex AI Search", "Hybrid retrieval", "PHI isolation"],
    note: null,
    cta: "Deployed inside customer VPC",
  },
  {
    icon: "🖥️",
    title: "Edge & Resilience Engineering",
    highlight: false,
    desc: "Optimisation of edge-compute hardware for medical deployments — on-prem inference nodes, GPU provisioning, and resilient failover for environments where latency, uptime, and data locality are non-negotiable.",
    tags: ["NVIDIA L4 / A100", "On-prem inference", "Failover & HA"],
    note: null,
    cta: "Hardware-aware deployment",
  },
];

const ServiceOptions = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="px-6 md:px-20 py-20 md:py-24 relative bg-noise bg-circuit">
      <div className="absolute inset-0 glow-green pointer-events-none" />
      <div ref={ref} className={isVisible ? "scroll-visible" : "scroll-hidden"}>
        <div className="text-[14px] tracking-[4px] text-faint uppercase mb-3">// capabilities</div>
        <div className="font-display text-[clamp(44px,5vw,64px)] text-foreground tracking-[2px] mb-12">
          What We <span className="text-primary">Build</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border border border-border">
          {options.map((o) => (
            <div key={o.title} className={`bg-surface p-8 md:p-10 relative overflow-hidden group transition-colors hover:bg-surface-2 ${o.highlight ? "border-l-2 border-l-primary" : ""}`}>
              {o.highlight && (
                <div className="absolute top-3 right-3 bg-primary/10 border border-primary/30 px-3 py-1">
                  <span className="text-xs tracking-[2px] text-primary uppercase font-medium">★ Core</span>
                </div>
              )}
              <span className="text-4xl mb-5 block">{o.icon}</span>
              <div className="font-display text-[28px] tracking-[2px] text-foreground mb-4">{o.title}</div>
              <p className="text-sm text-dim leading-relaxed tracking-[0.5px] mb-5">{o.desc}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {o.tags.map((tag) => (
                  <span key={tag} className="text-xs tracking-[1px] text-foreground bg-surface-3 border border-border px-3 py-1.5">{tag}</span>
                ))}
              </div>
              {o.note && <p className="text-xs text-faint tracking-[0.5px] mb-3 italic">{o.note}</p>}
              <div className="text-[13px] tracking-[2px] text-green mt-4 uppercase">→ {o.cta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOptions;
