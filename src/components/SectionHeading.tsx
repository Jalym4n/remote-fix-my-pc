import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  as?: "h1" | "h2";
  center?: boolean;
  className?: string;
}

/** `// EYEBROW` + display heading + optional intro, in the site's house style. */
const SectionHeading = ({ eyebrow, title, intro, as = "h2", center = false, className = "" }: SectionHeadingProps) => {
  const Tag = as;
  const size =
    as === "h1"
      ? "text-[clamp(36px,5.6vw,68px)] leading-[1.05] mb-5"
      : "text-[clamp(30px,4vw,46px)] leading-[1.1] mb-5";
  return (
    <div className={`${center ? "text-center mx-auto" : ""} ${className}`}>
      <div className="font-mono text-[12px] tracking-[3px] text-faint uppercase mb-3">{eyebrow}</div>
      <Tag className={`font-display ${size} tracking-[-0.02em] text-foreground max-w-4xl ${center ? "mx-auto" : ""}`}>{title}</Tag>
      {intro && (
        <p className={`text-base md:text-lg text-dim leading-relaxed max-w-2xl ${center ? "mx-auto" : ""}`}>{intro}</p>
      )}
    </div>
  );
};

export default SectionHeading;
