import { useScrollReveal } from "@/hooks/useScrollReveal";

const audiences = [
  {
    icon: "👴",
    title: "Seniors & Elderly Clients",
    desc: "Unable to leave the house or unfamiliar with remote support? A video call will be arranged to guide you through the connection process — patiently, clearly, and without jargon.",
  },
  {
    icon: "♿",
    title: "Housebound Individuals",
    desc: "Physical limitations should not prevent access to reliable computer repair. Remote support is available for software issues, or a house visit can be arranged for hands-on work.",
  },
  {
    icon: "⏰",
    title: "Busy Professionals",
    desc: "Unable to visit a repair shop during working hours? Remote sessions can be scheduled around your availability, including evenings. Rush and same-day service is available on request.",
  },
  {
    icon: "📋",
    title: "Non-Technical Users",
    desc: "No technical knowledge is required. Every step is explained in plain language, and the entire process is guided from start to finish. Understanding computers is our responsibility, not yours.",
  },
];

const WhoItsFor = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="px-6 md:px-20 py-20 md:py-24 bg-surface relative bg-noise bg-circuit">
      <div className="absolute inset-0 glow-green pointer-events-none" />
      <div ref={ref} className={isVisible ? "scroll-visible" : "scroll-hidden"}>
        <div className="text-[14px] tracking-[4px] text-faint uppercase mb-3">// who we help</div>
        <div className="font-display text-[clamp(44px,5vw,64px)] text-foreground tracking-[2px] mb-4">
          Designed for Those Who<br /><span className="text-green">Need It Most</span>
        </div>
        <p className="text-sm text-dim tracking-[0.5px] mb-12 max-w-lg">
          Our service is built around clients who cannot easily visit a repair shop — or are unsure where to begin.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
          {audiences.map((a) => (
            <div key={a.title} className="bg-background p-8 md:p-10 group hover:bg-surface-2 transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 w-[2px] h-0 bg-green transition-all duration-300 group-hover:h-full" />
              <span className="text-4xl mb-5 block">{a.icon}</span>
              <div className="font-display text-[28px] tracking-[2px] text-foreground mb-3">{a.title}</div>
              <p className="text-sm text-dim leading-relaxed tracking-[0.5px]">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
