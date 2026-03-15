import { useScrollReveal } from "@/hooks/useScrollReveal";

const options = [
  {
    icon: "🔒",
    title: "BitLocker Recovery",
    highlight: true,
    desc: "Locked out of your PC by BitLocker? This service requires in-person access — either via a house visit or drop-off. On eligible devices, access can typically be restored the same day. Not available remotely.",
    tags: ["In-person only", "Eligible devices", "Same-day available"],
    note: "Requires physical access to the device. Not available via remote support.",
    cta: "House visit or drop-off required",
  },
  {
    icon: "🖥️",
    title: "Remote Support",
    highlight: false,
    desc: "For software issues, virus removal, slow performance, and general troubleshooting. A secure screen-sharing session is established via video call — clear guidance is provided throughout, regardless of technical experience.",
    tags: ["Virus removal", "Slow PC", "Software issues", "Setup help"],
    note: null,
    cta: "Available anywhere — no travel required",
  },
  {
    icon: "🏠",
    title: "In-Home Visit / Drop-Off",
    highlight: false,
    desc: "For hardware repairs, complex diagnostics, or any issue requiring physical access. All tools and equipment provided on-site. Drop-off is also available for faster turnaround on component work.",
    tags: ["Hardware repair", "Full diagnostics", "Network setup", "Upgrades"],
    note: null,
    cta: "Within reasonable service area",
  },
];

const ServiceOptions = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="px-6 md:px-20 py-20 md:py-24 relative bg-noise bg-circuit">
      <div className="absolute inset-0 glow-green pointer-events-none" />
      <div ref={ref} className={isVisible ? "scroll-visible" : "scroll-hidden"}>
        <div className="text-[14px] tracking-[4px] text-faint uppercase mb-3">// service options</div>
        <div className="font-display text-[clamp(44px,5vw,64px)] text-foreground tracking-[2px] mb-12">
          How We Can <span className="text-primary">Help</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border border border-border">
          {options.map((o) => (
            <div key={o.title} className={`bg-surface p-8 md:p-10 relative overflow-hidden group transition-colors hover:bg-surface-2 ${o.highlight ? "border-l-2 border-l-primary" : ""}`}>
              {o.highlight && (
                <div className="absolute top-3 right-3 bg-primary/10 border border-primary/30 px-3 py-1">
                  <span className="text-xs tracking-[2px] text-primary uppercase font-medium">★ #1 Service</span>
                </div>
              )}
              <span className="text-4xl mb-5 block">{o.icon}</span>
              <div className="font-display text-[32px] tracking-[2px] text-foreground mb-4">{o.title}</div>
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
