import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

const faqs = [
  {
    q: "How does remote support work?",
    a: "A video call is arranged first (via FaceTime, WhatsApp, or a standard phone call) to guide you through downloading a secure screen-sharing application. Once connected, the technician can view your screen and operate your device to resolve the issue — you observe the entire process. Full guidance is provided regardless of technical experience.",
  },
  {
    q: "How does BitLocker recovery work?",
    a: "BitLocker is a Windows security feature that can lock users out of their own device following updates, resets, or hardware changes. On eligible devices, access can be recovered via an in-person appointment — either a house visit or drop-off. BitLocker recovery is not available as a remote service due to the nature of the process. You only pay if the issue is resolved.",
  },
  {
    q: "What is the service area for house visits?",
    a: "House visits are available within a reasonable radius. For clients further afield, remote support covers most software-related issues without requiring physical presence. Please provide your postcode when enquiring and availability will be confirmed promptly.",
  },
  {
    q: "Is same-day or rush service available?",
    a: "Yes. Subject to availability, same-day appointments can often be accommodated — particularly for remote support. For urgent matters such as a locked work device or business-critical issue, priority scheduling is available upon request.",
  },
  {
    q: "What does 'no fix, no fee' mean in practice?",
    a: "If the issue cannot be resolved, no charge is made. Diagnosis is provided free of charge. Should you proceed with the repair, the diagnosis fee is waived entirely. There is no financial risk to the client.",
  },
  {
    q: "What if I have limited technical knowledge?",
    a: "The majority of our clients have limited technical experience, and the service is designed accordingly. All communication is in plain language, every step is guided, and patience is guaranteed. Prior technical knowledge is not required — that is our responsibility.",
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
          {faqs.map((faq, i) => (
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
                style={{ maxHeight: open === i ? "300px" : "0px", opacity: open === i ? 1 : 0 }}
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
