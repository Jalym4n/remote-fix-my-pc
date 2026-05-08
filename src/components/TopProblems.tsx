import { useScrollReveal } from "@/hooks/useScrollReveal";

const problems = [
  { icon: "🩺", title: "Patient Triage & Intake", desc: "Conversational intake that structures unstructured patient narratives into clinician-ready summaries with urgency scoring and citation-backed reasoning.", primary: true },
  { icon: "📚", title: "Guideline-Grounded Q&A", desc: "Retrieval over institution-specific protocols, formularies, and clinical guidelines — answers cite source documents and revision dates.", primary: false },
  { icon: "📝", title: "Clinical Documentation", desc: "Ambient and asynchronous note generation with structured output (SOAP, HPI, A/P) optimised for EHR integration.", primary: false },
  { icon: "🧪", title: "Research & Cohort Discovery", desc: "Semantic search over de-identified records and literature to accelerate cohort identification and evidence synthesis.", primary: false },
  { icon: "🛡️", title: "PHI-Safe Inference", desc: "Private model serving inside customer VPCs with no data egress, audit logs, and configurable redaction at the edge.", primary: false },
  { icon: "📊", title: "Evaluation & Guardrails", desc: "Continuous evaluation against clinical benchmarks, hallucination detection, and human-in-the-loop review workflows.", primary: false },
];

const TopProblems = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="px-6 md:px-20 py-20 md:py-24 bg-background relative bg-noise">
      <div className="absolute inset-0 glow-red pointer-events-none" />
      <div ref={ref} className={isVisible ? "scroll-visible" : "scroll-hidden"}>
        <div className="text-[14px] tracking-[4px] text-faint uppercase mb-3">// use cases</div>
        <div className="font-display text-[clamp(44px,5vw,64px)] text-foreground tracking-[2px] mb-4">
          Problems We <span className="text-primary">Solve</span>
        </div>
        <p className="text-sm text-dim tracking-[0.5px] mb-12 max-w-xl">
          Targeted clinical workflows where retrieval-augmented generation, fine-tuned domain models, and rigorous evaluation deliver measurable operational impact.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {problems.map((p) => (
            <div key={p.title} className={`bg-surface p-8 relative overflow-hidden group transition-colors hover:bg-surface-2 ${p.primary ? "border-l-2 border-l-primary" : ""}`}>
              {p.primary && (
                <div className="absolute top-3 right-3 bg-primary/10 border border-primary/30 px-3 py-1">
                  <span className="text-xs tracking-[2px] text-primary uppercase font-medium">Flagship</span>
                </div>
              )}
              <div className="absolute top-0 left-0 w-[2px] h-0 bg-primary transition-all duration-300 group-hover:h-full" />
              <span className="text-4xl mb-4 block">{p.icon}</span>
              <div className="font-display text-[26px] tracking-[2px] text-foreground mb-3">{p.title}</div>
              <p className="text-sm text-dim leading-relaxed tracking-[0.5px]">{p.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-faint tracking-[0.5px] mt-4">All systems operate under clinician-in-the-loop supervision. ALTCTRL platforms are decision-support tools and are not regulated medical devices.</p>
      </div>
    </section>
  );
};

export default TopProblems;
