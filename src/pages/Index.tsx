import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import StatBlock from "@/components/StatBlock";
import FeatureTile from "@/components/FeatureTile";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { applySEO, organizationJsonLd } from "@/lib/seo";
import { DEFAULT_OG_IMAGE, PILOT_PATH, PRODUCT_NAME } from "@/lib/site";
import { platformTiles, retinaLoopCard } from "@/lib/content";
import { trackGetItHelpClick, trackJoinPilotClick } from "@/lib/analytics";

const IHPME =
  "https://ihpme.utoronto.ca/editorial/addressing-a-blind-spot-in-ontarios-care-for-patients-living-with-diabetes/";

const stats = [
  {
    value: "Over 30%",
    claim: "of Canadians living with diabetes are unscreened for retinopathy by guideline.",
    sourceLabel: "IJIC, 2026",
    sourceUrl: "https://reference-global.com/article/10.5334/ijic.ICIC26119",
  },
  {
    value: "440,000",
    claim: "Ontarians with diabetes went unscreened between 2016 and 2020.",
    sourceLabel: "U of T IHPME",
    sourceUrl: IHPME,
  },
  {
    value: "Rarely shared",
    claim: "Optometry screening results seldom make it back to the family doctor.",
    sourceLabel: "U of T IHPME",
    sourceUrl: IHPME,
  },
];


const btnPrimary =
  "font-mono text-[13px] tracking-[3px] uppercase bg-primary text-primary-foreground border border-primary px-7 py-4 rounded-md hover:bg-transparent hover:text-primary transition-colors text-center";
const btnGhost =
  "font-mono text-[13px] tracking-[3px] uppercase border border-border text-foreground px-7 py-4 rounded-md hover:border-primary hover:text-primary transition-colors text-center";

const Index = () => {
  useEffect(() => {
    applySEO({
      title: "ALTCTRL · Clinical workflow software for Ontario clinics",
      description:
        "ALTCTRL builds Windows-native, Canadian-hosted software for clinics, starting with RetinaLoop for diabetic eye care. Plus managed IT across the GTA.",
      canonical: "https://altctrl.run/",
      ogImage: DEFAULT_OG_IMAGE,
      jsonLd: organizationJsonLd(),
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="w-full bg-surface bg-noise relative overflow-hidden px-4 sm:px-6 md:px-20 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 z-0 bg-circuit opacity-60" />
        <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 20% 20%, hsla(180,70%,50%,0.10) 0%, transparent 55%)" }} />
        <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 85% 90%, hsla(160,60%,50%,0.08) 0%, transparent 55%)" }} />
        <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 30%, hsl(220 22% 7%) 100%)" }} />

        <div className="relative z-[2] max-w-5xl mx-auto text-center">
          <div className="font-mono text-[11px] sm:text-[12px] tracking-[3px] sm:tracking-[4px] text-faint uppercase mb-5">
            // ALTCTRL · Clinical workflow software · Ontario
          </div>
          <h1 className="font-display text-[clamp(38px,6vw,76px)] leading-[1.05] text-foreground tracking-[-0.02em] mb-6">
            Software that <span className="text-primary">closes the loops</span> healthcare leaves open.
          </h1>
          <p className="text-base md:text-lg text-dim leading-relaxed max-w-3xl mx-auto mb-10">
            ALTCTRL builds Windows-native, Canadian-hosted SaaS for clinics. Our first product,{" "}
            <strong className="text-foreground font-medium">{PRODUCT_NAME}</strong>, helps optometry and retina clinics find overdue diabetic patients, report results to family doctors, and send referrals that arrive ready to triage.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link to={PILOT_PATH} onClick={() => trackJoinPilotClick("home_hero")} className={btnPrimary}>
              Join the {PRODUCT_NAME} pilot →
            </Link>
            <Link to="/products" className={btnGhost}>
              Explore products
            </Link>
          </div>
          <Link
            to="/services"
            onClick={() => trackGetItHelpClick("home_hero")}
            className="text-sm text-dim hover:text-primary transition-colors underline-offset-4 hover:underline"
          >
            Need IT help today? Same-day support across the GTA →
          </Link>
        </div>
      </section>

      {/* Products */}
      <section className="px-4 sm:px-6 md:px-20 py-20 md:py-24 bg-background">
        <Reveal className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="// PRODUCTS"
            title={<>Built for the work <span className="text-primary">between appointments.</span></>}
            intro="Each ALTCTRL product targets one broken handoff in clinical operations and fixes it with as few clicks as possible."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <ProductCard {...retinaLoopCard} />
            <ProductCard
              status="rnd"
              statusLabel="R&D"
              name="Labs"
              body="Our research arm. Prototyping privacy-first clinical software and AI infrastructure with design partners before anything becomes a product."
              tags={["Clinical workflows", "Private deployment", "Design partners"]}
              linkLabel="Visit the Lab"
              to="/ai-labs"
              accent="accent"
            />
            <ProductCard
              status="live"
              statusLabel="Live"
              name="Services"
              body="Managed IT for clinics and small practices, plus same-day repair, BitLocker and data recovery for households across the GTA."
              tags={["Business IT", "On-site GTA", "No fix, no fee"]}
              linkLabel="Explore Services"
              to="/services"
            />
          </div>
        </Reveal>
      </section>

      {/* Problem */}
      <section className="px-4 sm:px-6 md:px-20 py-20 md:py-24 bg-surface bg-noise">
        <Reveal className="max-w-6xl mx-auto relative z-[1]">
          <SectionHeading
            eyebrow="// WHY WE STARTED WITH EYE CARE"
            title={<>Diabetic eye screening <span className="text-primary">breaks at the handoffs.</span></>}
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {stats.map((s) => (
              <StatBlock key={s.value} {...s} />
            ))}
          </div>
          <p className="font-display text-xl md:text-2xl text-foreground max-w-3xl">
            The care exists. The loop around it doesn't. <span className="text-primary">That's the software we build.</span>
          </p>
        </Reveal>
      </section>

      {/* Platform */}
      <section className="px-4 sm:px-6 md:px-20 py-20 md:py-24 bg-background">
        <Reveal className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="// ONE FOUNDATION, EVERY PRODUCT"
            title={<>Every product ships on the <span className="text-primary">same secure core.</span></>}
            intro="We build the hard parts once, so each new product starts privacy-ready."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {platformTiles.map((t) => (
              <FeatureTile key={t.title} {...t} />
            ))}
          </div>
          <p className="text-xs text-faint mt-6">
            Platform in active development for the {PRODUCT_NAME} pilot. See our{" "}
            <Link to="/security" className="underline underline-offset-2 hover:text-primary">security approach</Link>.
          </p>
        </Reveal>
      </section>

      {/* Services */}
      <section className="px-4 sm:px-6 md:px-20 py-20 md:py-24 bg-surface bg-noise bg-circuit">
        <Reveal className="max-w-6xl mx-auto relative z-[1] grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <div>
            <SectionHeading
              eyebrow="// ALSO FROM ALTCTRL"
              title={<>Hands-on IT, <span className="text-primary">when you need a person.</span></>}
              intro="Before we built software, we fixed systems. ALTCTRL Services still supports clinics, small offices and households across Mississauga and the GTA with managed IT, same-day repair, BitLocker recovery and data recovery."
            />
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/business-it" className={btnPrimary}>Business IT for clinics →</Link>
            <Link to="/it-services" onClick={() => trackGetItHelpClick("home_services")} className={btnGhost}>
              Home &amp; personal IT →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Final CTA */}
      <section className="px-4 sm:px-6 md:px-20 py-20 md:py-24 bg-background relative border-t border-border">
        <div className="absolute inset-0 glow-bottom pointer-events-none" />
        <Reveal className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-display text-[clamp(30px,4.4vw,52px)] tracking-[-0.02em] mb-4 leading-[1.08]">
            Running an optometry or retina clinic <span className="text-primary">in Ontario?</span>
          </h2>
          <p className="text-base text-dim leading-relaxed max-w-xl mx-auto mb-8">
            We're onboarding a small founding cohort for the {PRODUCT_NAME} pilot. Help shape the product and get early access.
          </p>
          <Link to={PILOT_PATH} onClick={() => trackJoinPilotClick("home_cta_band")} className={`${btnPrimary} inline-block`}>
            Join the pilot →
          </Link>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
