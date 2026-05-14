import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: "IT Services", to: "/it-services" },
    { label: "BitLocker", to: "/bitlocker-recovery", flag: "Sitelink" },
    { label: "AI Labs", to: "/ai-labs", soon: true },
    { label: "Contact", to: "/it-services#it-contact" },
  ] as const;

  const renderItem = (item: typeof links[number], onClick?: () => void) => {
    const inner = (
      <>
        {item.label}
        {"soon" in item && item.soon && (
          <span className="text-[9px] tracking-[2px] uppercase border px-1.5 py-0.5 rounded" style={{ color: "hsl(40 90% 60%)", borderColor: "hsla(40,90%,60%,0.5)" }}>Beta</span>
        )}
      </>
    );
    const cls = "text-[12px] tracking-[2px] text-dim uppercase hover:text-foreground transition-colors flex items-center gap-2";
    return (
      <Link key={item.label} to={item.to} className={cls} onClick={onClick}>{inner}</Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] h-14 bg-background/95 border-b border-border flex items-center justify-between px-6 md:px-12 backdrop-blur-md">
      <Link to="/" className="flex items-center gap-3">
        <span className="font-display text-2xl tracking-[2px] text-foreground">
          ALT<span className="text-primary">CTRL</span>
        </span>
        <span className="hidden sm:inline text-[10px] tracking-[3px] text-faint uppercase border border-border px-2 py-0.5 rounded">Solutions</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {links.map((item) => renderItem(item))}
        <a href="/#it-contact" className="text-[12px] tracking-[3px] text-foreground border border-primary px-5 py-2 uppercase hover:bg-primary hover:text-primary-foreground transition-colors rounded">
          → Get help
        </a>
      </div>

      <button className="md:hidden text-foreground text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </button>

      {menuOpen && (
        <div className="absolute top-14 left-0 right-0 bg-background border-b border-border flex flex-col items-center gap-5 py-6 md:hidden">
          {links.map((item) => renderItem(item, () => setMenuOpen(false)))}
          <a href="/#it-contact" className="text-[14px] tracking-[2px] text-primary uppercase" onClick={() => setMenuOpen(false)}>
            → Get help
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
