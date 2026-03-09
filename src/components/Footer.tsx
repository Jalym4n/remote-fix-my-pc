const Footer = () => {
  return (
    <footer className="bg-background border-t border-border px-6 md:px-20 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <span className="font-display text-xl tracking-[3px] text-foreground">
          ALT<span className="text-primary">CTRL</span>
        </span>
      </div>
      <div className="text-[10px] tracking-[2px] text-faint text-center">
        © {new Date().getFullYear()} ALTCTRL — Solo Computer Repair. No fix, no fee.
      </div>
      <div className="flex gap-7">
        {["Services", "Remote", "About", "Contact"].map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="text-[10px] tracking-[3px] text-faint uppercase hover:text-dim transition-colors">
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
