import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, PILOT_PATH, PRODUCT_NAME, PRODUCT_PATH } from "@/lib/site";
import { trackGetItHelpClick, trackJoinPilotClick } from "@/lib/analytics";

type NavLinkItem = { label: string; to: string; badge?: string };
type NavGroup = { label: string; items: NavLinkItem[] };
type NavEntry = NavLinkItem | NavGroup;

const nav: NavEntry[] = [
  {
    label: "Products",
    items: [
      { label: PRODUCT_NAME, to: PRODUCT_PATH, badge: "Pilot" },
      { label: "All products", to: "/products" },
    ],
  },
  {
    label: "Services",
    items: [
      { label: "Business IT for clinics", to: "/business-it" },
      { label: "Home & personal IT", to: "/it-services" },
      { label: "BitLocker recovery", to: "/bitlocker-recovery" },
      { label: "Data recovery", to: "/data-recovery" },
      { label: "Get help now", to: "/get-help" },
    ],
  },
  { label: "Labs", to: "/ai-labs" },
  { label: "Company", to: "/company" },
  { label: "Security", to: "/security" },
];

const isGroup = (e: NavEntry): e is NavGroup => "items" in e;

const linkCls = "text-[12px] tracking-[2px] text-dim uppercase hover:text-foreground transition-colors";

const Badge = ({ text }: { text: string }) => (
  <span className="text-[9px] tracking-[2px] uppercase border border-primary/50 text-primary px-1.5 py-0.5 rounded">{text}</span>
);

const Dropdown = ({ group }: { group: NavGroup }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={`${linkCls} flex items-center gap-1 h-14`}
      >
        {group.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>
      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-0 min-w-[240px]">
          <ul className="bg-surface2 border border-border rounded-lg shadow-[0_16px_40px_-12px_rgba(0,0,0,0.6)] py-2">
            {group.items.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => {
                    setOpen(false);
                    if (item.to === "/get-help") trackGetItHelpClick("nav_dropdown");
                  }}
                  className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm text-dim hover:text-foreground hover:bg-surface3 transition-colors"
                >
                  {item.label}
                  {item.badge && <Badge text={item.badge} />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setMenuOpen(false), [location.pathname, location.hash]);

  const close = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] h-14 bg-background/95 border-b border-border flex items-center justify-between px-4 sm:px-6 md:px-12 backdrop-blur-md">
      <Link to="/" className="flex items-center gap-2.5" aria-label="ALTCTRL home">
        <span className="font-display text-2xl tracking-[2px] text-foreground">
          ALT<span className="text-primary">CTRL</span>
        </span>
        <span className="hidden sm:inline text-[10px] tracking-[3px] text-faint uppercase border border-border px-2 py-0.5 rounded">Solutions</span>
      </Link>

      {/* Desktop */}
      <div className="hidden lg:flex items-center gap-7 xl:gap-8">
        {nav.map((entry) =>
          isGroup(entry) ? (
            <Dropdown key={entry.label} group={entry} />
          ) : (
            <Link key={entry.to} to={entry.to} className={linkCls}>
              {entry.label}
            </Link>
          ),
        )}
        <Link
          to={PILOT_PATH}
          onClick={() => trackJoinPilotClick("nav")}
          className="text-[12px] tracking-[2px] uppercase bg-primary text-primary-foreground border border-primary px-4 py-2 rounded hover:bg-transparent hover:text-primary transition-colors"
        >
          Join the pilot
        </Link>
        <a
          href={PHONE_TEL}
          aria-label={`Call ALTCTRL at ${PHONE_DISPLAY}`}
          title={PHONE_DISPLAY}
          className="w-9 h-9 flex items-center justify-center rounded border border-border text-dim hover:text-primary hover:border-primary transition-colors"
        >
          <Phone className="w-4 h-4" aria-hidden />
        </a>
      </div>

      {/* Mobile / tablet */}
      <div className="lg:hidden flex items-center gap-2">
        <a
          href={PHONE_TEL}
          aria-label={`Call ALTCTRL at ${PHONE_DISPLAY}`}
          className="flex items-center gap-1.5 text-[12px] tracking-[2px] text-primary border border-primary/40 px-3 py-1.5 rounded"
        >
          <Phone className="w-3.5 h-3.5" aria-hidden /> Call
        </a>
        <button
          type="button"
          className="text-foreground text-2xl w-10 h-10 flex items-center justify-center"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden absolute top-14 left-0 right-0 bg-background border-b border-border max-h-[calc(100vh-3.5rem)] overflow-y-auto">
          <div className="px-4 sm:px-6 py-5 flex flex-col gap-5">
            <Link
              to={PILOT_PATH}
              onClick={() => {
                trackJoinPilotClick("mobile_menu");
                close();
              }}
              className="w-full text-center font-mono text-[13px] tracking-[3px] uppercase bg-primary text-primary-foreground px-5 py-3.5 rounded-md"
            >
              Join the {PRODUCT_NAME} pilot →
            </Link>

            {nav.map((entry) =>
              isGroup(entry) ? (
                <div key={entry.label}>
                  <div className="font-mono text-[11px] tracking-[3px] text-faint uppercase mb-2">// {entry.label}</div>
                  <ul className="flex flex-col">
                    {entry.items.map((item) => (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          onClick={close}
                          className="flex items-center gap-3 py-2.5 text-[15px] text-foreground border-b border-border/60"
                        >
                          {item.label}
                          {item.badge && <Badge text={item.badge} />}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null,
            )}

            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {nav.filter((e) => !isGroup(e)).map((e) => (
                <Link key={(e as NavLinkItem).to} to={(e as NavLinkItem).to} onClick={close} className={linkCls}>
                  {e.label}
                </Link>
              ))}
            </div>

            <Link
              to="/get-help"
              onClick={() => {
                trackGetItHelpClick("mobile_menu");
                close();
              }}
              className="w-full text-center font-mono text-[13px] tracking-[3px] uppercase border border-primary text-primary px-5 py-3.5 rounded-md"
            >
              Get IT help now →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
