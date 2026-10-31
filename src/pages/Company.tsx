import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { applySEO, organizationJsonLd } from "@/lib/seo";
import { FOUNDER_NAME } from "@/lib/site";

const principles = [
  "Start with one broken handoff, not a platform pitch.",
  "Fewer clicks than the fax it replaces.",
  "Privacy and audit built in, not bolted on.",
  "Clinicians decide; software assists.",
];

const Company = () => {
  useEffect(() => {
    applySEO({
      title: "About ALTCTRL",
      description: "Ontario-built software for the work between appointments.",
      canonical: "https://altctrl.run/company",
      jsonLd: organizationJsonLd(),
    });
  }, []);

  const founder = FOUNDER_NAME ? `${FOUNDER_NAME}, a` : "a";

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navbar />

      <section className="relative bg-surface bg-noise px-4 sm:px-6 md:px-20 pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-circuit opacity-50" />
        <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 35%, hsl(220 22% 7%) 100%)" }} />
        <div className="relative z-[2] max-w-5xl mx-auto">
          <SectionHeading
            as="h1"
            eyebrow="// COMPANY"
            title={<>A small team building software <span className="text-primary">clinics actually use.</span></>}
          />
          <div className="mt-8 bg-surface2 border border-border rounded-xl p-6 md:p-8 max-w-3xl">
            <div className="font-mono text-[11px] tracking-[3px] text-primary uppercase mb-3">// mission</div>
            <p className="font-display text-xl md:text-2xl text-foreground leading-snug">
              Make the routine work between appointments reliable, so fewer patients fall through the cracks.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-20 py-20 md:py-24 bg-background">
        <Reveal className="max-w-5xl mx-auto">
          <SectionHeading eyebrow="// HOW WE BUILD" title={<>Four rules we <span className="text-primary">don't break.</span></>} className="mb-10" />
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {principles.map((p, i) => (
              <li key={p} className="bg-surface2 border border-border rounded-xl p-6 flex items-start gap-4">
                <span className="font-mono text-[12px] tracking-[2px] text-primary flex-shrink-0 mt-1">0{i + 1}</span>
                <span className="font-display text-lg text-foreground leading-snug">{p}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      <section className="px-4 sm:px-6 md:px-20 py-20 md:py-24 bg-surface bg-noise">
        <Reveal className="max-w-5xl mx-auto relative z-[1] grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
          <div>
            <SectionHeading eyebrow="// FOUNDER" title={<>Why <span className="text-primary">ALTCTRL</span> exists.</>} className="mb-6" />
            <blockquote className="border-l-2 border-primary pl-5 text-base md:text-lg text-dim leading-relaxed">
              ALTCTRL was founded in Ontario by {founder} life sciences graduate with frontline laboratory medicine experience and a background in IT systems. After years of watching good care get lost between offices, he started building the software to connect it.
            </blockquote>
          </div>
          <div className="bg-surface2 border border-border rounded-xl p-6 md:p-7">
            <div className="font-mono text-[11px] tracking-[3px] text-faint uppercase mb-3">// location</div>
            <p className="text-foreground mb-1">Based in Mississauga, Ontario.</p>
            <p className="text-dim text-sm mb-6">Serving clinics across Ontario.</p>
            <Link
              to="/contact"
              className="inline-block font-mono text-[13px] tracking-[3px] uppercase bg-primary text-primary-foreground border border-primary px-6 py-3.5 rounded-md hover:bg-transparent hover:text-primary transition-colors"
            >
              Get in touch →
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
};

export default Company;
