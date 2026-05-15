import { useEffect } from "react";
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
      title: "AI Labs — ALTCTRL",
      description:
        "ALTCTRL AI Labs: HIPAA-aligned clinical AI infrastructure — secure RAG, fine-tuned open-weight models, tenant-isolated deployments. Private beta.",
      canonical: "https://altctrl.run/ai-labs",
      jsonLd: faqJsonLd(aiLabsFaqs),
    });
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navbar />
      <div className="pt-14">
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
      </div>
      <Footer />
    </div>
  );
};

export default AILabs;
