import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, FileSignature, FileClock, KeyRound, Lock, MapPin, MessageSquare, Stethoscope } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { applySEO } from "@/lib/seo";
import { PRODUCT_NAME, SECURITY_EMAIL } from "@/lib/site";

const sections = [
  { icon: MapPin, h: "Data residency", b: "Product data is hosted on Canadian cloud infrastructure." },
  {
    icon: KeyRound,
    h: "Access control",
    b: "Every user has their own account with mandatory multi-factor authentication. Access is limited by role.",
  },
  {
    icon: FileClock,
    h: "Audit logging",
    b: "Every view or change to a patient record is recorded in an append-only audit log available to the clinic.",
  },
  {
    icon: Lock,
    h: "Encryption",
    b: "Data is encrypted in transit and at rest. Sensitive identifiers receive additional field-level encryption.",
  },
  {
    icon: MessageSquare,
    h: "Patient messaging",
    b: "Recall messages contain only the clinic name, a booking link or phone number, and opt-out instructions. Never clinical details.",
  },
  {
    icon: Stethoscope,
    h: "Clinical boundary",
    b: "Our software does not diagnose or grade images. Clinicians enter findings and confirm every decision.",
  },
  {
    icon: FileSignature,
    h: "Agreements",
    b: "Each clinic signs a PHIPA-compliant agreement with ALTCTRL before any patient data is processed.",
  },
];

const Security = () => {
  useEffect(() => {
    applySEO({
      title: "Security & privacy · ALTCTRL",
      description:
        "How ALTCTRL protects health information: Canadian hosting, MFA, audit logging, PHIPA-focused design.",
      canonical: "https://altctrl.run/security",
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
            eyebrow="// SECURITY & PRIVACY"
            title={<>Built to protect <span className="text-primary">health information.</span></>}
            intro={`ALTCTRL products are designed for Ontario's Personal Health Information Protection Act (PHIPA). Here's how we approach privacy and security today. This page describes our design and will be updated as the ${PRODUCT_NAME} pilot progresses.`}
          />
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-20 py-20 md:py-24 bg-background">
        <Reveal className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {sections.map(({ icon: Icon, h, b }) => (
              <div key={h} className="bg-surface2 border border-border rounded-xl p-6 md:p-7">
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-5 h-5 text-primary flex-shrink-0" aria-hidden />
                  <h2 className="font-display text-xl text-foreground">{h}</h2>
                </div>
                <p className="text-sm text-dim leading-relaxed">{b}</p>
              </div>
            ))}

            <div className="bg-surface2 border border-primary/40 rounded-xl p-6 md:p-7">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0" aria-hidden />
                <h2 className="font-display text-xl text-foreground">Report a concern</h2>
              </div>
              <p className="text-sm text-dim leading-relaxed">
                Email security concerns to{" "}
                <a href={`mailto:${SECURITY_EMAIL}?subject=Security%20concern`} className="text-primary underline underline-offset-2">
                  {SECURITY_EMAIL}
                </a>
                .
              </p>
            </div>
          </div>

          <p className="text-xs text-faint mt-8 max-w-3xl leading-relaxed">
            This page describes design intent for a product in pilot. It is not a certification or audit report. Website forms are covered by our{" "}
            <Link to="/privacy" className="underline underline-offset-2 hover:text-primary">privacy policy</Link>.
          </p>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
};

export default Security;
