import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] h-14 bg-background/95 border-b border-border flex items-center justify-between px-6 md:px-12 backdrop-blur-md">
      <a href="#" className="flex items-center gap-3">
        <span className="font-display text-3xl tracking-[3px] text-foreground">
          ALT<span className="text-primary">CTRL</span>
        </span>
      </a>

      <div className="hidden md:flex items-center gap-9">
        {["Services", "FAQ", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[13px] tracking-[2px] text-dim uppercase hover:text-foreground transition-colors"
          >
            {item}
          </a>
        ))}
        <a
          href="tel:+447000000000"
          className="text-[12px] tracking-[3px] text-foreground border border-primary px-5 py-2 uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          📞 Call Now
        </a>
      </div>

      <button
        className="md:hidden text-foreground text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {menuOpen && (
        <div className="absolute top-14 left-0 right-0 bg-background border-b border-border flex flex-col items-center gap-5 py-6 md:hidden">
          {["Services", "FAQ", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[14px] tracking-[2px] text-dim uppercase hover:text-foreground transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a href="tel:+447000000000" className="text-[14px] tracking-[2px] text-primary uppercase" onClick={() => setMenuOpen(false)}>
            📞 Call Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
