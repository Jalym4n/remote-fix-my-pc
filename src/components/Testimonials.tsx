const testimonials = [
  {
    text: "My nan couldn't leave the house and her laptop was riddled with viruses. He FaceTimed her, walked her through connecting, and had it sorted within the hour. Absolute legend.",
    name: "— J. Williams, Remote Client",
  },
  {
    text: "Came to my house, diagnosed the issue, gave me a fair price on the spot. Laptop was fixed before he left. No fix no fee policy gave me complete peace of mind.",
    name: "— R. Ahmed, House Visit",
  },
  {
    text: "Three shops quoted me over £200. ALTCTRL beat the cheapest by more than 15% and did a better job. Will never go anywhere else.",
    name: "— T. Brennan, Price Beat",
  },
];

const Testimonials = () => {
  return (
    <section className="px-6 md:px-20 py-20 md:py-24 bg-surface">
      <div className="text-[10px] tracking-[6px] text-faint uppercase mb-3">// client logs</div>
      <div className="font-display text-[clamp(40px,5vw,60px)] text-foreground tracking-[2px] mb-12">
        What People <span className="text-green">Say</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-background p-8">
            <div className="font-display text-5xl text-primary leading-none opacity-40 mb-3">"</div>
            <div className="flex gap-1 mb-3.5">
              {Array.from({ length: 5 }).map((_, j) => (
                <div key={j} className="w-2.5 h-2.5 bg-primary" style={{ clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }} />
              ))}
            </div>
            <p className="text-xs text-dim leading-[2] tracking-[0.5px] mb-5">{t.text}</p>
            <div className="text-[10px] tracking-[4px] text-faint uppercase">{t.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
