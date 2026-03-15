import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import CTABand from "@/components/CTABand";
import ServiceOptions from "@/components/ServiceOptions";
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
      <CTABand headline="*BitLocker* locked you out?" subtext="I recover access on eligible devices — remotely, step by step. No fix, no fee." variant="primary" />
      <TopProblems />
      <Divider />
      <WhoItsFor />
      <CTABand headline="Stuck at home? *I come to you.*" subtext="Remote screen-share or house visit. I'll walk you through everything — even if you've never done this before." variant="green" />
      <FAQ />
      <Divider />
      <About />
      <Divider />
      <Testimonials />
      <Divider />
      <Contact />
      <CTABand headline="Don't wait — *get help now.*" subtext="Call, text, or request a free diagnosis. Same-day and rush service available." variant="primary" />
      <Footer />
    </div>
  );
};

export default Index;
