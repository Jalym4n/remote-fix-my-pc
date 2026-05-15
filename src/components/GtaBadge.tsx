const GtaBadge = ({ className = "" }: { className?: string }) => (
  <span
    className={`inline-flex items-center gap-1.5 text-[10px] tracking-[2px] uppercase border border-border px-2 py-0.5 rounded text-dim ${className}`}
  >
    <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
    Serving Mississauga &amp; the GTA
  </span>
);

export default GtaBadge;
