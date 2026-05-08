import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import CTABand from "@/components/CTABand";
import ServiceOptions from "@/components/ServiceOptions";
import TechStack from "@/components/TechStack";
import TopProblems from "@/components/TopProblems";
import WhoItsFor from "@/components/WhoItsFor";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Divider = () => (
  <div className="h-px mx-6 md:mx-20" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--border)), transparent)" }} />
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <Divider />
      <ServiceOptions />
      <CTABand headline="Clinical *LLM fine-tuning* on your infrastructure" subtext="Open-weight models, parameter-efficient training, deployed inside your cloud tenancy." variant="primary" />
      <TechStack />
      <Divider />
      <TopProblems />
      <Divider />
      <WhoItsFor />
      <CTABand headline="A *small lab.* Selective engagements." subtext="Beta access is granted on a rolling basis to qualified design partners." variant="green" />
      <Testimonials />
      <Divider />
      <About />
      <Divider />
      <FAQ />
      <Divider />
      <Contact />
      <CTABand headline="Build with *ALTCTRL Solutions.*" subtext="Request Beta access or contact the lab directly at jaleed01@altctrl.run." variant="primary" />
      <Footer />
    </div>
  );
};

export default Index;
