import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

export const aiLabsFaqs = [
  {
    q: "Are ALTCTRL systems regulated medical devices?",
    a: "No. Our platforms are clinical decision-support and workflow tools operated under clinician-in-the-loop supervision. They are not intended to provide autonomous diagnosis or treatment and are not registered as medical devices.",
  },
  {
    q: "How is protected health information (PHI) handled?",
    a: "All inference, retrieval, and storage occur within isolated, customer-tenanted environments — typically a dedicated VPC inside the customer's own cloud account. There is no data egress to third-party model providers, audit logs are enabled by default, and least-privilege IAM is enforced via Infrastructure-as-Code.",
  },
  {
    q: "Which cloud providers do you support?",
    a: "Deployments are multi-cloud by design: Google Cloud (Vertex AI, GKE), AWS (Bedrock, SageMaker, EKS), and Microsoft Azure (Azure OpenAI, AI Studio, AKS). All infrastructure is provisioned via Terraform for reproducibility and auditability.",
  },
  {
    q: "Which models do you fine-tune?",
    a: "We focus on open-weight models suitable for private deployment — primarily Gemma 2, Llama-3, and Mistral families — using parameter-efficient techniques (LoRA / QLoRA). For managed inference, we also integrate with Gemini, Claude (via Bedrock), and Azure OpenAI where customer policy permits.",
  },
  {
    q: "What is the engagement model?",
    a: "We work with a small number of design partners under a Beta programme. Engagements typically begin with a scoped architecture review, followed by a pilot deployment and an evaluation phase before broader rollout. Capacity is intentionally limited.",
  },
  {
    q: "How do I request access?",
    a: "Use the contact form, or email the team directly. Please include a short description of your clinical workflow, target deployment environment (cloud provider and region), and any compliance constraints relevant to your organisation.",
  },
];

const FAQ = () => {
  const { ref, isVisible } = useScrollReveal();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 md:px-20 py-20 md:py-24 bg-background relative bg-noise">
      <div className="absolute inset-0 glow-center pointer-events-none" />
      <div ref={ref} className={isVisible ? "scroll-visible" : "scroll-hidden"}>
        <div className="text-[14px] tracking-[4px] text-faint uppercase mb-3">// frequently asked</div>
        <div className="font-display text-[clamp(44px,5vw,64px)] text-foreground tracking-[2px] mb-12">
          Common <span className="text-primary">Questions</span>
        </div>

        <div className="max-w-3xl">
          {aiLabsFaqs.map((faq, i) => (
            <div key={i} className="border-b border-border">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left py-6 flex items-center justify-between gap-4 group cursor-pointer"
              >
                <span className="text-base text-foreground tracking-[0.5px] group-hover:text-primary transition-colors font-medium">{faq.q}</span>
                <span className="font-display text-2xl text-primary flex-shrink-0 transition-transform duration-200" style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? "400px" : "0px", opacity: open === i ? 1 : 0 }}
              >
                <p className="text-sm text-dim leading-relaxed tracking-[0.5px] pb-6 pr-8">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
