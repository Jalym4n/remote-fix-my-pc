import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] h-14 bg-background/95 border-b border-border flex items-center justify-between px-6 md:px-12 backdrop-blur-md">
      <a href="#" className="flex items-center gap-3">
        <span className="font-display text-2xl tracking-[3px] text-foreground">
          ALT<span className="text-primary">CTRL</span>
        </span>
      </a>

      <div className="hidden md:flex items-center gap-9">
        {["Services", "Remote", "About", "Process", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[11px] tracking-[3px] text-dim uppercase hover:text-foreground transition-colors"
          >
            {item}
          </a>
        ))}
        <a
          href="#contact"
          className="text-[10px] tracking-[4px] text-foreground border border-primary px-5 py-2 uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Get Help
        </a>
      </div>

      <button
        className="md:hidden text-foreground text-xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {menuOpen && (
        <div className="absolute top-14 left-0 right-0 bg-background border-b border-border flex flex-col items-center gap-4 py-6 md:hidden">
          {["Services", "Remote", "About", "Process", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[11px] tracking-[3px] text-dim uppercase hover:text-foreground transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
