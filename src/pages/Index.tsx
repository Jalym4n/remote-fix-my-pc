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
      <CTABand headline="*BitLocker* recovery on eligible devices" subtext="In-person service required — house visit or drop-off. No fix, no fee." variant="primary" />
      <TopProblems />
      <Divider />
      <WhoItsFor />
      <CTABand headline="Cannot travel? *We come to you.*" subtext="Remote screen-share for software issues, or a house visit for hands-on work. Guided support at every step." variant="green" />
      <FAQ />
      <Divider />
      <About />
      <Divider />
      <Testimonials />
      <Divider />
      <Contact />
      <CTABand headline="Ready to *get started?*" subtext="Call, text, or request a free diagnosis. Same-day and priority service available." variant="primary" />
      <Footer />
    </div>
  );
};

export default Index;
