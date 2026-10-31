import { Link } from "react-router-dom";
import { CONTACT_EMAIL, PHONE_DISPLAY, PHONE_TEL, PRODUCT_NAME, PRODUCT_PATH } from "@/lib/site";

const columns = [
  {
    title: "Products",
    links: [
      { label: PRODUCT_NAME, to: PRODUCT_PATH },
      { label: "All products", to: "/products" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Business IT", to: "/business-it" },
      { label: "Home IT", to: "/it-services" },
      { label: "BitLocker", to: "/bitlocker-recovery" },
      { label: "Data recovery", to: "/data-recovery" },
      { label: "Get help", to: "/get-help" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/company" },
      { label: "Labs", to: "/ai-labs" },
      { label: "Security", to: "/security" },
      { label: "Privacy", to: "/privacy" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border px-6 md:px-20 py-14 relative bg-noise">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto relative z-[1]">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="font-display text-2xl tracking-[2px] text-foreground">
              ALT<span className="text-primary">CTRL</span>
            </span>
            <span className="text-[10px] tracking-[3px] text-faint uppercase border border-border px-2 py-0.5 rounded">Solutions</span>
          </div>
          <p className="text-xs text-dim leading-relaxed mb-4 max-w-xs">
            Clinical workflow software, built in Ontario. Plus hands-on IT across the GTA.
          </p>
          <ul className="flex flex-col gap-2">
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-xs text-dim hover:text-foreground transition-colors">{CONTACT_EMAIL}</a>
            </li>
            <li>
              <a href={PHONE_TEL} className="text-xs text-dim hover:text-foreground transition-colors">{PHONE_DISPLAY}</a>
            </li>
          </ul>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <div className="text-[11px] tracking-[3px] text-foreground uppercase mb-4">{col.title}</div>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-xs text-dim hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border mt-10 pt-6 text-xs tracking-[1px] text-faint text-center flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 relative z-[1]">
        <span>© {new Date().getFullYear()} ALTCTRL Solutions. Clinical workflow software and IT services.</span>
        <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
