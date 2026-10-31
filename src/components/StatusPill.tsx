type Variant = "live" | "pilot" | "rnd" | "roadmap";

const AMBER = "hsl(40 90% 60%)";

const config: Record<Variant, { color: string; dot: "full" | "half" | "hollow"; pulse?: boolean }> = {
  live: { color: "hsl(var(--green))", dot: "full", pulse: true },
  pilot: { color: "hsl(var(--primary))", dot: "half" },
  rnd: { color: AMBER, dot: "half" },
  roadmap: { color: "hsl(var(--text-faint))", dot: "hollow" },
};

const defaultLabels: Record<Variant, string> = {
  live: "Live",
  pilot: "Pilot · Ontario",
  rnd: "R&D",
  roadmap: "Roadmap",
};

interface StatusPillProps {
  variant: Variant;
  label?: string;
  className?: string;
}

/** Status pill: ● LIVE, ◐ PILOT, ◐ R&D, ○ ROADMAP. */
const StatusPill = ({ variant, label, className = "" }: StatusPillProps) => {
  const { color, dot, pulse } = config[variant];
  const dotStyle =
    dot === "full"
      ? { background: color }
      : dot === "half"
        ? { background: `linear-gradient(90deg, ${color} 50%, transparent 50%)`, border: `1px solid ${color}` }
        : { border: `1px solid ${color}` };

  return (
    <span
      className={`inline-flex items-center gap-2 text-[11px] tracking-[2px] uppercase border px-2.5 py-1 rounded-full whitespace-nowrap ${className}`}
      style={{ color, borderColor: `color-mix(in srgb, ${color} 45%, transparent)` }}
    >
      <span aria-hidden className={`w-2 h-2 rounded-full box-border ${pulse ? "animate-pulse-dot" : ""}`} style={dotStyle} />
      {label ?? defaultLabels[variant]}
    </span>
  );
};

export default StatusPill;
