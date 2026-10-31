import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import StatusPill from "@/components/StatusPill";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { applySEO } from "@/lib/seo";
import { retinaLoopCard } from "@/lib/content";

const Products = () => {
  useEffect(() => {
    applySEO({
      title: "Products · ALTCTRL",
      description: "Clinical workflow software on one secure, Canadian-hosted platform.",
      canonical: "https://altctrl.run/products",
    });
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navbar />

      <section className="relative bg-surface bg-noise px-4 sm:px-6 md:px-20 pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-circuit opacity-50" />
        <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 35%, hsl(220 22% 7%) 100%)" }} />
        <div className="relative z-[2] max-w-5xl mx-auto">
          <SectionHeading
            as="h1"
            eyebrow="// PRODUCTS"
            title={<>Clinical workflow software, <span className="text-primary">one loop at a time.</span></>}
            intro="Every ALTCTRL product fixes a specific handoff in healthcare operations, on the same secure, Canadian-hosted platform."
          />
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-20 py-20 md:py-24 bg-background">
        <Reveal className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <ProductCard {...retinaLoopCard} />

          <div className="bg-surface border border-dashed border-border-light rounded-xl p-7 flex flex-col h-full">
            <div className="mb-5">
              <StatusPill variant="roadmap" label="Roadmap" />
            </div>
            <div className="font-display text-[24px] md:text-[26px] tracking-[-0.01em] text-foreground mb-3">What's next</div>
            <p className="text-sm text-dim leading-relaxed mb-6 flex-1">
              <strong className="text-foreground font-medium">More clinical workflows are in research.</strong> Have a broken handoff in your practice? Tell us about it.
            </p>
            <Link
              to="/contact?intent=labs"
              className="self-start font-mono text-[12px] tracking-[3px] uppercase border border-primary text-primary px-5 py-3 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Suggest a workflow →
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
