import { useScrollReveal } from "@/hooks/useScrollReveal";

const audiences = [
  {
    icon: "👴",
    title: "Seniors & Elderly",
    desc: "Can't leave the house? Never done remote help before? I'll FaceTime or video-call you and walk you through every single step — patiently, clearly, no jargon.",
  },
  {
    icon: "♿",
    title: "Immobile / Housebound",
    desc: "Physical limitations shouldn't mean you're stuck with a broken computer. I connect remotely and fix it while you sit comfortably. Or I come to your door.",
  },
  {
    icon: "⏰",
    title: "Busy Professionals",
    desc: "No time to visit a repair shop? I fix it remotely during your lunch break or after hours. Rush and same-day service available.",
  },
  {
    icon: "😰",
    title: "Non-Tech-Savvy Users",
    desc: "Intimidated by technology? That's literally why I exist. I explain everything in plain English. You don't need to understand computers — I do that for you.",
  },
];

const WhoItsFor = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="px-6 md:px-20 py-20 md:py-24 bg-surface relative bg-noise bg-circuit">
      <div className="absolute inset-0 glow-green pointer-events-none" />
      <div ref={ref} className={isVisible ? "scroll-visible" : "scroll-hidden"}>
        <div className="text-[14px] tracking-[4px] text-faint uppercase mb-3">// who I help</div>
        <div className="font-display text-[clamp(44px,5vw,64px)] text-foreground tracking-[2px] mb-4">
          Built for People Who<br /><span className="text-green">Need It Most</span>
        </div>
        <p className="text-sm text-dim tracking-[0.5px] mb-12 max-w-lg">
          My service is designed around people who can't easily get to a repair shop — or don't know where to start.
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
