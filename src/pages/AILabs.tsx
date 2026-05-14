import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServiceOptions from "@/components/ServiceOptions";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import CTABand from "@/components/CTABand";

const AILabs = () => {
  useEffect(() => {
    document.title = "AI Labs — ALTCTRL";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta(
      "description",
      "ALTCTRL AI Labs: HIPAA-aligned clinical AI infrastructure — secure RAG, fine-tuned open-weight models, and tenant-isolated deployments. Currently in private beta."
    );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://altctrl.run/ai-labs";
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
