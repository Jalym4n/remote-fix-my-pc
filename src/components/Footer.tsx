const Footer = () => {
  return (
    <footer className="bg-background border-t border-border px-6 md:px-20 py-12 flex flex-col md:flex-row items-center justify-between gap-6 relative bg-noise">
      <div className="flex items-center gap-3">
        <span className="font-display text-2xl tracking-[3px] text-foreground">
          ALT<span className="text-primary">CTRL</span>
        </span>
        <span className="text-[10px] tracking-[3px] text-faint uppercase border border-border px-2 py-0.5">Solutions</span>
      </div>
      <div className="text-xs tracking-[1px] text-faint text-center">
        © {new Date().getFullYear()} ALTCTRL Solutions — Clinical AI Infrastructure. HIPAA-aligned · SOC2-ready.
      </div>
      <div className="flex gap-7">
        {[
          { label: "Capabilities", href: "#services" },
          { label: "Stack", href: "#stack" },
          { label: "FAQ", href: "#faq" },
          { label: "Contact", href: "#contact" },
        ].map((link) => (
          <a key={link.label} href={link.href} className="text-xs tracking-[2px] text-faint uppercase hover:text-dim transition-colors">
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
