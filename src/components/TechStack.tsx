import { useScrollReveal } from "@/hooks/useScrollReveal";

const groups = [
  {
    label: "Cloud & Infrastructure",
    items: ["Google Cloud · Vertex AI", "AWS · Bedrock · SageMaker", "Microsoft Azure · AI Studio", "Terraform · IaC", "Kubernetes · GKE / EKS"],
  },
  {
    label: "Models & AI Frameworks",
    items: ["Gemini · Gemma 2", "Llama-3 · Mistral", "Azure OpenAI · Semantic Kernel", "LangChain · LlamaIndex", "vLLM · Ollama (edge)"],
  },
  {
    label: "Data, Retrieval & Compute",
    items: ["pgvector · Vertex AI Search", "BigQuery · Snowflake", "NVIDIA L4 / A100 GPUs", "Hybrid BM25 + dense retrieval", "PHI-isolated VPC architectures"],
  },
];

const TechStack = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="stack" className="px-6 md:px-20 py-20 md:py-24 bg-background relative bg-noise">
      <div className="absolute inset-0 glow-center pointer-events-none" />
      <div ref={ref} className={isVisible ? "scroll-visible" : "scroll-hidden"}>
        <div className="text-[14px] tracking-[4px] text-faint uppercase mb-3">// technical stack</div>
        <div className="font-display text-[clamp(44px,5vw,64px)] text-foreground tracking-[2px] mb-4">
          Cloud-Native by <span className="text-primary">Design</span>
        </div>
        <p className="text-sm text-dim tracking-[0.5px] mb-12 max-w-xl">
          Our architecture is multi-cloud and provider-agnostic, deployed via Infrastructure-as-Code with strict tenancy isolation suitable for protected health information.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {groups.map((g) => (
            <div key={g.label} className="bg-surface p-8 md:p-10">
              <div className="text-xs tracking-[3px] text-green uppercase mb-5">{g.label}</div>
              <ul className="flex flex-col gap-3">
                {g.items.map((it) => (
                  <li key={it} className="text-sm text-foreground tracking-[0.5px] flex items-start gap-3">
                    <span className="text-primary mt-0.5">▸</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-xs text-faint tracking-[1px] mt-6 uppercase">// All deployments provisioned via Terraform · audit-logged · least-privilege IAM</p>
      </div>
    </section>
  );
};

export default TechStack;
