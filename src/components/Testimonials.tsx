import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  {
    label: "Architecture",
    title: "Tenant-Isolated by Default",
    text: "Every deployment is provisioned inside the customer's own cloud tenancy — no shared inference layer, no cross-tenant data, no surprises in a security review.",
  },
  {
    label: "Evaluation",
    title: "Measured, Not Marketed",
    text: "Models are continuously evaluated against clinical benchmarks for faithfulness, citation coverage, and hallucination rate. Results are reported to design partners on every release.",
  },
  {
    label: "Operations",
    title: "Reproducible & Audited",
    text: "All infrastructure is defined as code and version-controlled. Audit logs, IAM policy, and model lineage are queryable artefacts — not tribal knowledge.",
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="px-6 md:px-20 py-20 md:py-24 bg-surface relative bg-noise bg-circuit">
      <div className="absolute inset-0 glow-green pointer-events-none" />
      <div ref={ref} className={isVisible ? "scroll-visible" : "scroll-hidden"}>
        <div className="text-[13px] tracking-[4px] text-faint uppercase mb-3">// engineering principles</div>
        <div className="font-display text-[clamp(44px,5vw,64px)] text-foreground tracking-[2px] mb-12">
          How We <span className="text-green">Operate</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {items.map((t, i) => (
            <div key={i} className="bg-background p-8">
              <div className="text-xs tracking-[3px] text-green uppercase mb-3">// {t.label}</div>
              <div className="font-display text-[24px] tracking-[2px] text-foreground mb-4">{t.title}</div>
              <p className="text-sm text-dim leading-relaxed tracking-[0.5px]">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
