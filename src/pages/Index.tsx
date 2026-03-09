import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatusBar from "@/components/StatusBar";
import Services from "@/components/Services";
import RemoteSection from "@/components/RemoteSection";
import About from "@/components/About";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import ErrorZone from "@/components/ErrorZone";
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
      <StatusBar />
      <Divider />
      <Services />
      <Divider />
      <RemoteSection />
      <Divider />
      <About />
      <Process />
      <Divider />
      <Testimonials />
      <ErrorZone />
      <Divider />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
