import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

const faqs = [
  {
    q: "How does remote help actually work?",
    a: "I'll video-call you first (FaceTime, WhatsApp, or regular call) and walk you through downloading a simple screen-sharing app. Once connected, I can see your screen and control your mouse/keyboard to fix the problem — you watch the entire time. Even if you've never done anything like this, I'll guide you through every click.",
  },
  {
    q: "How does BitLocker recovery work on eligible devices?",
    a: "BitLocker is a Windows security feature that can lock you out of your own PC after updates, resets, or hardware changes. On eligible devices, I can recover your access remotely by walking you through the recovery process. If remote recovery isn't possible, I'll arrange a house visit or drop-off. You only pay if I fix it.",
  },
  {
    q: "What's your service area for house visits?",
    a: "I cover a reasonable radius for in-home visits. If you're further out, remote support is always available — I can fix most software issues without being physically present. Get in touch with your postcode and I'll let you know straight away.",
  },
  {
    q: "Is rush / same-day service really available?",
    a: "Yes. If I have availability, I can often help the same day you call — especially for remote fixes. For urgent situations (locked out of your work PC, business-critical issue), let me know and I'll prioritise you.",
  },
  {
    q: "What does 'no fix, no fee' actually mean?",
    a: "Exactly what it says. If I can't solve your problem, you don't pay a penny. The diagnosis is free. If you go ahead with the repair, the diagnosis fee is waived entirely. Zero risk to you.",
  },
  {
    q: "I'm not tech-savvy at all — can you still help me?",
    a: "Absolutely — that's who I primarily help. I speak plain English, I'm extremely patient, and I'll walk you through everything step by step. Many of my clients are seniors or people who have never done remote help before. You don't need to understand computers. That's my job.",
  },
];

const FAQ = () => {
  const { ref, isVisible } = useScrollReveal();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 md:px-20 py-20 md:py-24 bg-background relative bg-noise">
      <div className="absolute inset-0 glow-center pointer-events-none" />
      <div ref={ref} className={isVisible ? "scroll-visible" : "scroll-hidden"}>
        <div className="text-[14px] tracking-[4px] text-faint uppercase mb-3">// questions</div>
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
