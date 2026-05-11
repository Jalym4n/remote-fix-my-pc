interface DivisionHeaderProps {
  id: string;
  number: string;
  name: string;
  status: "operational" | "in-development";
  tagline: string;
}

const DivisionHeader = ({ id, number, name, status, tagline }: DivisionHeaderProps) => {
  const isOps = status === "operational";
  const statusColor = isOps ? "hsl(var(--primary))" : "hsl(40 90% 60%)";
  const statusLabel = isOps ? "Operational" : "In Development";

  return (
    <section id={id} className="px-6 md:px-20 pt-20 md:pt-28 pb-6 bg-background relative">
      <div className="border-t border-border pt-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
          <div>
            <div className="text-[12px] tracking-[4px] text-faint uppercase mb-3">// Division {number}</div>
            <div className="font-display text-[clamp(36px,5vw,56px)] tracking-[-0.02em] text-foreground leading-[1.05]">
              ALTCTRL <span className={isOps ? "text-primary" : "text-accent"}>/ {name}</span>
            </div>
            <p className="text-base text-dim mt-4 max-w-2xl">{tagline}</p>
          </div>
          <div className="flex-shrink-0">
            <span className="inline-flex items-center gap-2.5 text-[11px] tracking-[3px] uppercase border px-4 py-2 rounded-full" style={{ color: statusColor, borderColor: statusColor + "66" }}>
              <span className={`w-2 h-2 rounded-full ${isOps ? "animate-pulse-dot" : ""}`} style={{ background: statusColor }} />
              {statusLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DivisionHeader;
