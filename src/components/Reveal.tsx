import type { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/** Wraps children in the site's standard scroll-reveal transition. */
const Reveal = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`${className} ${isVisible ? "scroll-visible" : "scroll-hidden"}`}>
      {children}
    </div>
  );
};

export default Reveal;
