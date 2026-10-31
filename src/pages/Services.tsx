import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Building2, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatusPill from "@/components/StatusPill";
import Reveal from "@/components/Reveal";
import { applySEO, localBusinessJsonLd } from "@/lib/seo";
import { PHONE_DISPLAY, PHONE_TEL, PRODUCT_NAME, PRODUCT_PATH } from "@/lib/site";
import { trackGetItHelpClick } from "@/lib/analytics";

const chip =
  "text-[11px] tracking-[1px] text-primary bg-primary/10 border border-primary/40 px-2.5 py-1 rounded hover:bg-primary/20 transition-colors";

const ServicesPage = () => {
  useEffect(() => {
    applySEO({
      title: "IT services for clinics and homes in Mississauga & the GTA · ALTCTRL",
      description:
        "Managed IT for clinics and offices, plus same-day repair, BitLocker and data recovery. No fix, no fee.",
      canonical: "https://altctrl.run/services",
      jsonLd: localBusinessJsonLd(),
    });
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navbar />

      <section className="relative bg-surface bg-noise px-4 sm:px-6 md:px-20 pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-circuit opacity-50" />
        <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 35%, hsl(220 22% 7%) 100%)" }} />
        <div className="relative z-[2] max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-[11px] sm:text-[12px] tracking-[3px] text-faint uppercase">// ALTCTRL Services</span>
            <StatusPill variant="live" label="Live" />
            <span className="font-mono text-[11px] sm:text-[12px] tracking-[3px] text-faint uppercase">Mississauga &amp; the GTA</span>
          </div>
          <h1 className="font-display text-[clamp(36px,5.6vw,68px)] leading-[1.05] tracking-[-0.02em] mb-5 max-w-4xl">
            IT support with a <span className="text-primary">real person behind it.</span>
          </h1>
          <p className="text-base md:text-lg text-dim leading-relaxed max-w-2xl mb-8">
            ALTCTRL Services is our hands-on IT practice. It's where we learned how clinics and offices really run, and it's still how we support them.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/get-help"
              onClick={() => trackGetItHelpClick("services_hero")}
              className="font-mono text-[13px] tracking-[3px] uppercase bg-primary text-primary-foreground border border-primary px-7 py-4 rounded-md hover:bg-transparent hover:text-primary transition-colors text-center"
            >
              Get IT help now →
            </Link>
            <a
              href={PHONE_TEL}
              className="font-mono text-[13px] tracking-[3px] uppercase border border-border text-foreground px-7 py-4 rounded-md hover:border-primary hover:text-primary transition-colors text-center"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-20 py-20 md:py-24 bg-background">
        <Reveal className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Business IT */}
          <div className="bg-surface2 border border-border hover:border-primary/60 rounded-xl p-7 md:p-9 flex flex-col transition-colors">
            <div className="w-11 h-11 rounded-lg border border-primary/40 bg-primary/5 flex items-center justify-center mb-5">
              <Building2 className="w-5 h-5 text-primary" aria-hidden />
            </div>
            <h2 className="font-display text-2xl md:text-[28px] text-foreground mb-3">Business IT for clinics and practices</h2>
            <p className="text-sm text-dim leading-relaxed mb-6 flex-1">
              Managed IT, workstation fleets, networks, on-site response.
            </p>
            <Link to="/business-it" className="text-[12px] tracking-[3px] text-primary uppercase hover:translate-x-1 transition-transform mb-6">
              → Explore Business IT
            </Link>
            <Link to={PRODUCT_PATH} className="text-sm text-dim hover:text-primary transition-colors border-t border-border pt-4">
              Running a clinic? Ask about {PRODUCT_NAME} →
            </Link>
          </div>

          {/* Home IT */}
          <div className="bg-surface2 border border-border hover:border-primary/60 rounded-xl p-7 md:p-9 flex flex-col transition-colors">
            <div className="w-11 h-11 rounded-lg border border-primary/40 bg-primary/5 flex items-center justify-center mb-5">
              <Home className="w-5 h-5 text-primary" aria-hidden />
            </div>
            <h2 className="font-display text-2xl md:text-[28px] text-foreground mb-3">Home and personal IT</h2>
            <p className="text-sm text-dim leading-relaxed mb-6 flex-1">
              Same-day repair, BitLocker recovery, data recovery, virus removal, remote rescue. No fix, no fee.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Link to="/bitlocker-recovery" className={chip}>BitLocker →</Link>
              <Link to="/data-recovery" className={chip}>Data recovery →</Link>
              <Link to="/no-fix-no-fee" className={chip}>No fix, no fee →</Link>
            </div>
            <Link
              to="/it-services"
              onClick={() => trackGetItHelpClick("services_home_card")}
              className="text-[12px] tracking-[3px] text-primary uppercase hover:translate-x-1 transition-transform"
            >
              → Explore Home IT
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
