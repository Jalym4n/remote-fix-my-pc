/**
 * RetinaLoop workflow diagram. Inline SVG, theme colours, two layouts:
 * a wide one for tablet/desktop and a compact one that stays readable at 375 px.
 */

type Node = { x: number; y: number; w: number; h: number; label: string; sub: string; accent?: boolean };
type Edge = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  dir: "out" | "back";
  label: string[];
  lx: number;
  ly: number;
  anchor: "start" | "middle" | "end";
};

const ARIA =
  "RetinaLoop workflow. The optometry clinic sits at the centre. The family doctor sends a referral to the optometry clinic, and the clinic sends a report back. The optometry clinic sends a triaged referral to the retina clinic, and the retina clinic sends the treatment plan back. The optometry clinic sends a recall text to the overdue diabetic patient, and the patient books an exam.";

const wide: { vb: [number, number]; nodes: Node[]; edges: Edge[] } = {
  vb: [820, 380],
  nodes: [
    { x: 20, y: 60, w: 160, h: 64, label: "Family doctor", sub: "PRIMARY CARE" },
    { x: 330, y: 60, w: 160, h: 64, label: "Optometry clinic", sub: "YOUR CLINIC", accent: true },
    { x: 640, y: 60, w: 160, h: 64, label: "Retina clinic", sub: "SPECIALIST" },
    { x: 300, y: 290, w: 220, h: 64, label: "Overdue diabetic patient", sub: "RECALL" },
  ],
  edges: [
    { x1: 180, y1: 80, x2: 330, y2: 80, dir: "out", label: ["Referral →"], lx: 255, ly: 70, anchor: "middle" },
    { x1: 330, y1: 104, x2: 180, y2: 104, dir: "back", label: ["← Report-back"], lx: 255, ly: 124, anchor: "middle" },
    { x1: 490, y1: 80, x2: 640, y2: 80, dir: "out", label: ["Triaged referral →"], lx: 565, ly: 70, anchor: "middle" },
    { x1: 640, y1: 104, x2: 490, y2: 104, dir: "back", label: ["← Plan back"], lx: 565, ly: 124, anchor: "middle" },
    { x1: 395, y1: 124, x2: 395, y2: 290, dir: "out", label: ["Recall text ↓"], lx: 385, ly: 212, anchor: "end" },
    { x1: 425, y1: 290, x2: 425, y2: 124, dir: "back", label: ["Books exam ↑"], lx: 435, ly: 212, anchor: "start" },
  ],
};

const compact: { vb: [number, number]; nodes: Node[]; edges: Edge[] } = {
  vb: [360, 492],
  nodes: [
    { x: 8, y: 8, w: 150, h: 58, label: "Family doctor", sub: "PRIMARY CARE" },
    { x: 202, y: 8, w: 150, h: 58, label: "Retina clinic", sub: "SPECIALIST" },
    { x: 95, y: 214, w: 170, h: 62, label: "Optometry clinic", sub: "YOUR CLINIC", accent: true },
    { x: 60, y: 424, w: 240, h: 62, label: "Overdue diabetic patient", sub: "RECALL" },
  ],
  edges: [
    { x1: 115, y1: 66, x2: 115, y2: 214, dir: "out", label: ["Referral ↓"], lx: 105, ly: 124, anchor: "end" },
    { x1: 145, y1: 214, x2: 145, y2: 66, dir: "back", label: ["Report-back ↑"], lx: 105, ly: 164, anchor: "end" },
    { x1: 215, y1: 214, x2: 215, y2: 66, dir: "out", label: ["Triaged", "referral ↑"], lx: 255, ly: 118, anchor: "start" },
    { x1: 245, y1: 66, x2: 245, y2: 214, dir: "back", label: ["Plan back ↓"], lx: 255, ly: 172, anchor: "start" },
    { x1: 165, y1: 276, x2: 165, y2: 424, dir: "out", label: ["Recall", "text ↓"], lx: 155, ly: 344, anchor: "end" },
    { x1: 195, y1: 424, x2: 195, y2: 276, dir: "back", label: ["Books", "exam ↑"], lx: 205, ly: 344, anchor: "start" },
  ],
};

/** Shorten a segment at its end so the arrowhead doesn't overlap the box border. */
const trim = (e: Edge, by = 4) => {
  const dx = e.x2 - e.x1;
  const dy = e.y2 - e.y1;
  const len = Math.hypot(dx, dy) || 1;
  return { x1: e.x1 + (dx / len) * 2, y1: e.y1 + (dy / len) * 2, x2: e.x2 - (dx / len) * by, y2: e.y2 - (dy / len) * by };
};

const Diagram = ({ layout, idPrefix, className }: { layout: typeof wide; idPrefix: string; className: string }) => {
  const [w, h] = layout.vb;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label={ARIA} className={className} preserveAspectRatio="xMidYMid meet">
      <defs>
        <marker id={`${idPrefix}-out`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" className="fill-primary" />
        </marker>
        <marker id={`${idPrefix}-back`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" className="fill-accent" />
        </marker>
      </defs>

      {layout.edges.map((e, i) => {
        const t = trim(e);
        return (
          <g key={i}>
            <line
              x1={t.x1}
              y1={t.y1}
              x2={t.x2}
              y2={t.y2}
              strokeWidth={1.75}
              strokeDasharray={e.dir === "back" ? "5 4" : undefined}
              className={e.dir === "out" ? "stroke-primary" : "stroke-accent"}
              markerEnd={`url(#${idPrefix}-${e.dir})`}
            />
            <text
              x={e.lx}
              y={e.ly}
              textAnchor={e.anchor}
              className={e.dir === "out" ? "fill-primary" : "fill-accent"}
              style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 500 }}
            >
              {e.label.map((line, j) => (
                <tspan key={j} x={e.lx} dy={j === 0 ? 0 : 15}>
                  {line}
                </tspan>
              ))}
            </text>
          </g>
        );
      })}

      {layout.nodes.map((n) => (
        <g key={n.label}>
          <rect
            x={n.x}
            y={n.y}
            width={n.w}
            height={n.h}
            rx={10}
            strokeWidth={n.accent ? 2 : 1}
            className={n.accent ? "fill-surface-2 stroke-primary" : "fill-surface-2 stroke-border-light"}
          />
          <text
            x={n.x + n.w / 2}
            y={n.y + n.h / 2 - 6}
            textAnchor="middle"
            className={n.accent ? "fill-primary" : "fill-foreground"}
            style={{ fontFamily: "'Space Grotesk', Inter, sans-serif", fontSize: 15, fontWeight: 600 }}
          >
            {n.label}
          </text>
          <text
            x={n.x + n.w / 2}
            y={n.y + n.h / 2 + 14}
            textAnchor="middle"
            className="fill-faint"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9.5, letterSpacing: 2 }}
          >
            {n.sub}
          </text>
        </g>
      ))}
    </svg>
  );
};

const LoopDiagram = () => (
  <figure className="bg-surface border border-border rounded-xl p-4 sm:p-6 md:p-8">
    <div className="flex items-center justify-between gap-3 mb-4">
      <span className="font-mono text-[11px] tracking-[3px] text-faint uppercase">// workflow diagram</span>
      <span className="flex items-center gap-4 text-[11px] text-dim">
        <span className="flex items-center gap-1.5">
          <span className="w-4 h-0.5 bg-primary inline-block" aria-hidden /> Sent
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-4 h-0 border-t-2 border-dashed border-accent inline-block" aria-hidden /> Returned
        </span>
      </span>
    </div>
    <Diagram layout={wide} idPrefix="loop-wide" className="hidden md:block w-full h-auto" />
    <Diagram layout={compact} idPrefix="loop-compact" className="md:hidden w-full h-auto max-w-[420px] mx-auto" />
    <figcaption className="text-sm text-dim text-center mt-5 leading-relaxed">
      Every arrow is a handoff that happens by phone, fax, or not at all today.
    </figcaption>
  </figure>
);

export default LoopDiagram;
