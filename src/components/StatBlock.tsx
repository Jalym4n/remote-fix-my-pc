interface StatBlockProps {
  value: string;
  claim: string;
  sourceLabel: string;
  sourceUrl: string;
}

/** Big number, one-line claim, visible source link. */
const StatBlock = ({ value, claim, sourceLabel, sourceUrl }: StatBlockProps) => (
  <div className="bg-surface2 border border-border rounded-xl p-7 flex flex-col h-full">
    <div className="font-display text-[clamp(36px,4.4vw,52px)] text-primary leading-none tracking-[-0.02em] mb-4">{value}</div>
    <p className="text-sm text-foreground leading-relaxed flex-1 mb-5">{claim}</p>
    <div className="text-[11px] tracking-[1px] text-faint">
      Source:{" "}
      <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-primary transition-colors">
        {sourceLabel}
      </a>
    </div>
  </div>
);

export default StatBlock;
