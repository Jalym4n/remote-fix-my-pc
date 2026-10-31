import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PRODUCT_NAME, PRODUCT_PATH } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServiceOptions from "@/components/ServiceOptions";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import FAQ, { aiLabsFaqs } from "@/components/FAQ";
import Contact from "@/components/Contact";
import CTABand from "@/components/CTABand";
import { applySEO, faqJsonLd } from "@/lib/seo";

const AILabs = () => {
  useEffect(() => {
    applySEO({
      title: "ALTCTRL Labs · Clinical software R&D",
      description:
        "Our research arm for privacy-first clinical software and private AI infrastructure.",
      canonical: "https://altctrl.run/ai-labs",
      jsonLd: faqJsonLd(aiLabsFaqs),
    });
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navbar />
      <div className="pt-14">
        <Link
          to={PRODUCT_PATH}
          className="block bg-primary/10 border-b border-primary/30 px-4 sm:px-6 md:px-20 py-3 text-center text-sm text-foreground hover:bg-primary/15 transition-colors"
        >
          <span className="font-mono text-[11px] tracking-[3px] text-primary uppercase mr-2">// ALTCTRL Labs</span>
          Looking for our product? <span className="text-primary font-medium">Meet {PRODUCT_NAME} →</span>
        </Link>
        <Hero />
        <TrustBar />
        <ServiceOptions />
        <TechStack />
        <About />
        <FAQ />
        <Contact />
        <CTABand
          headline="Building the *next layer* of clinical AI."
          subtext="Join the ALTCTRL Labs waitlist or contact us directly at jaleed01@altctrl.run."
          variant="green"
        />
      </div>
      <Footer />
    </div>
  );
};

export default AILabs;
