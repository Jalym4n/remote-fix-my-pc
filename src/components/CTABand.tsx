import { useScrollReveal } from "@/hooks/useScrollReveal";

interface CTABandProps {
  headline?: string;
  subtext?: string;
  variant?: "primary" | "green";
}

const CTABand = ({ headline = "Ready to deploy clinical AI?", subtext = "Request Beta access or join the waitlist. Limited design-partner capacity.", variant = "primary" }: CTABandProps) => {
  const { ref, isVisible } = useScrollReveal();
  const accentClass = variant === "green" ? "text-green" : "text-primary";

  return (
    <section className="px-6 md:px-20 py-16 md:py-20 bg-surface relative bg-noise border-y border-border">
      <div className="absolute inset-0 pointer-events-none" style={{ background: variant === "green" ? "radial-gradient(ellipse at 50% 50%, hsla(145,100%,40%,0.08) 0%, transparent 60%)" : "radial-gradient(ellipse at 50% 50%, hsla(0,100%,40%,0.08) 0%, transparent 60%)" }} />
      <div ref={ref} className={`text-center relative z-[1] ${isVisible ? "scroll-visible" : "scroll-hidden"}`}>
        <div className="font-display text-[clamp(32px,4vw,52px)] tracking-[2px] text-foreground mb-4">
          {headline.split(/(\*[^*]+\*)/).map((part, i) =>
            part.startsWith("*") && part.endsWith("*")
              ? <span key={i} className={accentClass}>{part.slice(1, -1)}</span>
              : part
          )}
        </div>
        <p className="text-sm text-dim tracking-[0.5px] mb-8 max-w-md mx-auto">{subtext}</p>

        <div className="flex gap-4 items-center justify-center flex-wrap">
          <a href="#contact" className="font-mono text-[14px] tracking-[3px] text-primary-foreground bg-primary border border-primary px-7 py-4 uppercase hover:bg-transparent hover:text-primary transition-colors">
            → Request Beta Access
          </a>
          <a href="#contact" className="font-mono text-[14px] tracking-[3px] text-green border border-green px-7 py-4 uppercase hover:bg-green hover:text-background transition-colors">
            Join Waitlist
          </a>
          <a href="mailto:jaleed01@altctrl.run" className="font-mono text-[14px] tracking-[3px] text-dim border border-border px-7 py-4 uppercase hover:border-dim hover:text-foreground transition-colors">
            Contact the Lab
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABand;
