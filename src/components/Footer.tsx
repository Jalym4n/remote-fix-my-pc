import logoMark from "@/assets/logo-neural.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border px-6 md:px-20 py-14 relative bg-noise">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <img src={logoMark} alt="ALTCTRL" className="h-8 w-8 object-contain opacity-80" />
            <span className="font-display text-2xl tracking-[2px] text-foreground">
              ALT<span className="text-primary">CTRL</span>
            </span>
            <span className="text-[10px] tracking-[3px] text-faint uppercase border border-border px-2 py-0.5 rounded">Solutions</span>
          </div>
          <p className="text-xs text-dim leading-relaxed">Two divisions, one operator. Working IT services today, clinical AI infrastructure tomorrow.</p>
        </div>

        <div>
          <div className="text-[11px] tracking-[3px] text-foreground uppercase mb-4 flex items-center gap-2">
            IT Services
            <span className="text-[9px] tracking-[2px] uppercase text-primary">● Live</span>
          </div>
          <ul className="flex flex-col gap-2.5">
            <li><a href="/#services" className="text-xs text-dim hover:text-primary transition-colors">Services</a></li>
            <li><a href="/bitlocker-recovery" className="text-xs text-primary hover:text-primary/80 transition-colors">BitLocker Recovery →</a></li>
            <li><a href="/#enterprise" className="text-xs text-dim hover:text-primary transition-colors">For business</a></li>
            <li><a href="/#process" className="text-xs text-dim hover:text-primary transition-colors">Process</a></li>
            <li><a href="/#it-faq" className="text-xs text-dim hover:text-primary transition-colors">FAQ</a></li>
            <li><a href="/#it-contact" className="text-xs text-dim hover:text-primary transition-colors">Get help</a></li>
          </ul>
        </div>

        <div>
          <div className="text-[11px] tracking-[3px] text-foreground uppercase mb-4 flex items-center gap-2">
            AI Labs
            <span className="text-[9px] tracking-[2px] uppercase" style={{ color: "hsl(40 90% 60%)" }}>◐ Beta</span>
          </div>
          <ul className="flex flex-col gap-2.5">
            <li><a href="#ai-labs" className="text-xs text-dim hover:text-accent transition-colors">Overview</a></li>
            <li><a href="#stack" className="text-xs text-dim hover:text-accent transition-colors">Tech stack</a></li>
            <li><a href="#faq" className="text-xs text-dim hover:text-accent transition-colors">FAQ</a></li>
            <li><a href="#contact" className="text-xs text-dim hover:text-accent transition-colors">Join waitlist</a></li>
          </ul>
        </div>

        <div>
          <div className="text-[11px] tracking-[3px] text-foreground uppercase mb-4">Contact</div>
          <ul className="flex flex-col gap-2.5">
            <li><a href="mailto:jaleed01@altctrl.run" className="text-xs text-dim hover:text-foreground transition-colors">jaleed01@altctrl.run</a></li>
            <li><span className="text-xs text-dim">altctrl.run</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border mt-10 pt-6 text-xs tracking-[1px] text-faint text-center">
        © {new Date().getFullYear()} ALTCTRL Solutions — IT Services & AI Labs.
      </div>
    </footer>
  );
};

export default Footer;
