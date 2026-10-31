import type { LucideIcon } from "lucide-react";

interface FeatureTileProps {
  icon: LucideIcon;
  title: string;
  body: string;
}

/** Icon, title, one line. */
const FeatureTile = ({ icon: Icon, title, body }: FeatureTileProps) => (
  <div className="bg-surface2 border border-border rounded-xl p-6 h-full">
    <div className="w-10 h-10 rounded-lg border border-primary/40 bg-primary/5 flex items-center justify-center mb-4">
      <Icon className="w-5 h-5 text-primary" aria-hidden />
    </div>
    <div className="font-display text-lg text-foreground mb-2">{title}</div>
    <p className="text-sm text-dim leading-relaxed">{body}</p>
  </div>
);

export default FeatureTile;
