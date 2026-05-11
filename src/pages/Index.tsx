import Navbar from "@/components/Navbar";
import BrandHero from "@/components/BrandHero";
import DivisionHeader from "@/components/DivisionHeader";

import ITTrustBar from "@/components/ITTrustBar";
import Services from "@/components/Services";
import EnterpriseBand from "@/components/EnterpriseBand";
import RemoteSection from "@/components/RemoteSection";
import Process from "@/components/Process";
import ITFAQ from "@/components/ITFAQ";
import ITContact from "@/components/ITContact";

import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServiceOptions from "@/components/ServiceOptions";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import CTABand from "@/components/CTABand";

import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BrandHero />

      {/* ──────────── Division 01 — IT Services ──────────── */}
      <DivisionHeader
        id="it-services"
        number="01"
        name="IT Services"
        status="operational"
        tagline="A working IT practice serving households, professional offices and enterprise clients today. Repair, BitLocker recovery, remote rescue, and ongoing managed IT."
      />
      <ITTrustBar />
      <Services />
      <div id="enterprise"><EnterpriseBand /></div>
      <RemoteSection />
      <Process />
      <ITFAQ />
      <ITContact />

      {/* ──────────── Division 02 — AI Labs ──────────── */}
      <DivisionHeader
        id="ai-labs"
        number="02"
        name="AI Labs"
        status="in-development"
        tagline="An R&D division building HIPAA-aligned clinical AI infrastructure. Currently in private beta with a small number of design partners — not yet a live commercial product."
      />
      <Hero />
      <TrustBar />
      <ServiceOptions />
      <TechStack />
      <About />
      <FAQ />
      <Contact />
      <CTABand
        headline="Building the *next layer* of clinical AI."
        subtext="Join the AI Labs waitlist or contact the lab directly at jaleed01@altctrl.run."
        variant="green"
      />

      <Footer />
    </div>
  );
};

export default Index;
