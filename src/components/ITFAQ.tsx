import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { Link } from "react-router-dom";

type Faq = { q: string; a: string; link?: { label: string; to: string } };

const faqs: Faq[] = [
  { q: "How does the no-fix-no-fee guarantee work?", a: "If we cannot resolve the reported fault, you pay nothing. The diagnosis is performed at no obligation, and the diagnosis fee is waived if you proceed with the repair." },
  { q: "What is the 15% price-beat guarantee?", a: "Provide a written quote from a comparable local engineer for the same scope of work and we will beat it by 15%. Subject to review of the quote." },
  { q: "Do you offer BitLocker recovery remotely?", a: "No. BitLocker recovery requires physical access to the device and is offered in-person or via secure drop-off only. This is a technical constraint of the encryption scheme, not a policy choice.", link: { label: "Get help now →", to: "/bitlocker-recovery" } },
  { q: "What areas do you cover for on-site work?", a: "On-site visits are available within a reasonable travel radius. Remote support — where the issue allows — is available globally over secure remote-desktop tooling." },
  { q: "Do you work with businesses on retainer?", a: "Yes. Managed IT engagements are scoped per environment with defined SLAs, documented systems, and monthly reporting. Contact us for a discovery call." },
  { q: "Are you insured?", a: "Yes — we carry professional indemnity and public liability cover. Documentation is available on request for enterprise procurement." },
];

const ITFAQ = () => {
  const { ref, isVisible } = useScrollReveal();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="it-faq" className="px-6 md:px-20 py-20 md:py-24 bg-background relative bg-noise">
      <div className="absolute inset-0 glow-center pointer-events-none" />
      <div ref={ref} className={isVisible ? "scroll-visible" : "scroll-hidden"}>
        <div className="text-[12px] tracking-[4px] text-faint uppercase mb-3">// IT services FAQ</div>
        <div className="font-display text-[clamp(36px,4.5vw,52px)] text-foreground tracking-[-0.02em] mb-12">
          Common <span className="text-primary">questions</span>
        </div>

        <div className="max-w-3xl">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left py-6 flex items-center justify-between gap-4 group cursor-pointer"
              >
                <span className="text-base text-foreground tracking-[0.2px] group-hover:text-primary transition-colors font-medium">{faq.q}</span>
                <span className="font-display text-2xl text-primary flex-shrink-0 transition-transform duration-200" style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
              </button>
              <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open === i ? "400px" : "0px", opacity: open === i ? 1 : 0 }}>
                <p className="text-sm text-dim leading-relaxed pb-6 pr-8">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITFAQ;
