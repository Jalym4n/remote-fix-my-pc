import { Link } from "react-router-dom";
import StatusPill from "@/components/StatusPill";

type Status = "live" | "pilot" | "rnd" | "roadmap";

interface ProductCardProps {
  status: Status;
  statusLabel?: string;
  brand?: string;
  name: string;
  body: string;
  tags?: string[];
  linkLabel: string;
  to: string;
  onClick?: () => void;
  accent?: "primary" | "accent";
}

/** Product / track card used on Home and /products. */
const ProductCard = ({
  status,
  statusLabel,
  brand = "ALTCTRL",
  name,
  body,
  tags = [],
  linkLabel,
  to,
  onClick,
  accent = "primary",
}: ProductCardProps) => {
  const accentText = accent === "accent" ? "text-accent" : "text-primary";
  const accentBorder = accent === "accent" ? "hover:border-accent/60" : "hover:border-primary/60";

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`group bg-surface2 border border-border ${accentBorder} rounded-xl p-7 transition-all flex flex-col h-full`}
    >
      <div className="mb-5">
        <StatusPill variant={status} label={statusLabel} />
      </div>
      <div className="font-display text-[24px] md:text-[26px] tracking-[-0.01em] text-foreground mb-3">
        {brand} <span className={accentText}>/ {name}</span>
      </div>
      <p className="text-sm text-dim leading-relaxed mb-5 flex-1">{body}</p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((t) => (
            <span key={t} className="text-[11px] tracking-[1px] text-foreground bg-surface3 border border-border px-2.5 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
      )}
      <div className={`text-[12px] tracking-[3px] ${accentText} uppercase group-hover:translate-x-1 transition-transform`}>
        → {linkLabel}
      </div>
    </Link>
  );
};

export default ProductCard;
