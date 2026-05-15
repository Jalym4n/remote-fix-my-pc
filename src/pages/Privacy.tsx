import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { applySEO } from "@/lib/seo";

const sections = [
  {
    h: "1. Who we are",
    b: "ALTCTRL Solutions (\"ALTCTRL\", \"we\", \"us\") is a sole-operator IT services practice providing computer repair, BitLocker recovery, remote rescue, data recovery and related IT support to households, small businesses and enterprise clients. This Privacy Policy applies exclusively to the IT Services division of ALTCTRL. The AI Labs division operates under a separate policy provided to design partners directly.",
  },
  {
    h: "2. Scope",
    b: "This policy describes how we collect, use, store, disclose and protect personal information when you contact us, request a diagnosis or quote, engage us for repair or recovery work, or otherwise interact with our website at altctrl.run.",
  },
  {
    h: "3. Information we collect",
    b: "We collect only the information necessary to deliver the service you have requested. This typically includes: (a) identity and contact details — name, email address, telephone number, postal address where on-site work is required; (b) device information — make, model, serial number, fault description, and ownership evidence; (c) service correspondence — messages exchanged through our contact forms, email or telephone; (d) where strictly required to perform a recovery or repair, limited access to the contents of your device. We do not request, store or process payment card data on our systems — payments are handled by reputable third-party processors.",
  },
  {
    h: "4. How we use your information",
    b: "Information is used solely for the following purposes: assessing and quoting requested work; verifying ownership of devices presented for BitLocker recovery; performing the agreed repair, recovery or support service; communicating with you about your job; issuing invoices and maintaining accounting records as required by law; and responding to enquiries. We do not use your information for marketing, profiling or automated decision-making.",
  },
  {
    h: "5. Lawful basis",
    b: "We process personal information on the basis of (a) performance of a contract — to deliver the service you have requested; (b) legitimate interests — to operate, secure and improve our practice; and (c) legal obligation — to retain accounting and tax records for the period required by applicable law.",
  },
  {
    h: "6. Device data and confidentiality",
    b: "When a device is in our care, we access only the data strictly necessary to perform the agreed work. We do not browse, copy, exfiltrate or retain personal files beyond what is required for the job. Where data recovery is involved, recovered files are returned to you on a medium of your choice and any working copies on our equipment are securely deleted on completion. Enterprise engagements are covered by NDA on request.",
  },
  {
    h: "7. BitLocker recovery — additional safeguards",
    b: "BitLocker recovery is performed in person only. We require documented proof of ownership before any recovery work is undertaken (purchase receipt, Microsoft account verification, or original packaging). We do not bypass enterprise device policies and we do not perform remote BitLocker work under any circumstances. This policy exists to protect you, your data, and the integrity of our practice.",
  },
  {
    h: "8. Sharing your information",
    b: "We do not sell, rent or trade personal information. We share information only with: (a) parts suppliers and licensed data-recovery laboratories where strictly necessary to fulfil your job, and only with your prior consent; (b) our payment processor for the purpose of taking payment; (c) regulatory, tax or law-enforcement authorities where we are legally compelled to do so.",
  },
  {
    h: "9. International transfers",
    b: "Our remote rescue service is offered globally. Where personal information is transferred across borders to deliver a service you have requested, we rely on the contractual basis of providing that service to you and apply appropriate safeguards consistent with applicable data-protection law.",
  },
  {
    h: "10. Retention",
    b: "Service records, invoices and correspondence are retained for the period required to meet legal, accounting and warranty obligations — typically up to seven years. Working copies of customer data created during a repair or recovery are securely deleted from our equipment on completion of the job, unless you have specifically asked us to retain a backup.",
  },
  {
    h: "11. Security",
    b: "We apply technical and organisational measures appropriate to a sole-operator practice handling sensitive device data: full-disk encryption on workshop equipment, strong authentication, segregated working storage, and prompt secure erasure of customer data once a job is completed. No system is perfectly secure, but we treat customer data with the care we would expect for our own.",
  },
  {
    h: "12. Your rights",
    b: "Subject to applicable law, you have the right to: access the personal information we hold about you; request correction of inaccurate information; request deletion where we are no longer required to retain it; restrict or object to certain processing; and lodge a complaint with the relevant data-protection authority. To exercise any of these rights, contact us using the details below.",
  },
  {
    h: "13. Cookies",
    b: "altctrl.run uses only the minimum cookies necessary for the site to function. We do not deploy advertising trackers, behavioural profiling pixels or third-party analytics that identify individual visitors.",
  },
  {
    h: "14. Children",
    b: "Our services are intended for adults. We do not knowingly collect personal information from children under 16. If you believe a child has provided us with personal information, please contact us and we will delete it.",
  },
  {
    h: "15. Changes to this policy",
    b: "We may update this Privacy Policy from time to time to reflect changes in our practice or in applicable law. The current version is always available at altctrl.run/privacy with the effective date shown below.",
  },
  {
    h: "16. Contact",
    b: "Questions, requests or complaints regarding this Privacy Policy or our handling of your information can be sent to jaleed01@altctrl.run. We respond to privacy enquiries within five business days.",
  },
];

const Privacy = () => {
  const hero = useScrollReveal();
  const body = useScrollReveal();

  useEffect(() => {
    applySEO({
      title: "Privacy Policy — ALTCTRL IT Services",
      description:
        "How ALTCTRL Solutions IT Services collects, uses, stores and protects personal information from repair, BitLocker recovery and remote rescue clients.",
      canonical: "https://altctrl.run/privacy",
    });
  }, []);

  const updated = "14 May 2026";

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-surface bg-noise px-6 md:px-20 pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-circuit opacity-50" />
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, transparent 35%, hsl(220 22% 7%) 100%)" }}
        />

        <div ref={hero.ref} className={`relative z-[2] max-w-4xl mx-auto ${hero.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[3px] text-primary uppercase mb-6 border border-primary/40 bg-primary/5 px-3 py-1.5 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-dot" />
            IT Services · Policy
          </div>
          <h1 className="font-display text-[clamp(36px,5.4vw,68px)] leading-[1.05] tracking-[-0.02em] mb-5">
            Privacy <span className="text-primary">Policy.</span>
          </h1>
          <p className="text-base md:text-lg text-dim leading-relaxed max-w-2xl">
            How ALTCTRL Solutions collects, uses, stores and protects personal information in the course of delivering IT repair, BitLocker recovery and remote rescue services.
          </p>
          <div className="mt-6 text-[12px] tracking-[3px] text-faint uppercase">Effective: {updated}</div>
        </div>
      </section>

      {/* Body */}
      <section className="px-6 md:px-20 py-16 md:py-20 bg-background">
        <div ref={body.ref} className={`max-w-3xl mx-auto ${body.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <div className="bg-surface2 border border-border rounded-md p-6 mb-10">
            <div className="text-[11px] tracking-[3px] text-faint uppercase mb-2">// scope</div>
            <p className="text-sm text-dim leading-relaxed">
              This policy applies only to the <strong className="text-foreground font-medium">IT Services</strong> division of ALTCTRL Solutions. ALTCTRL / AI Labs operates under a separate policy provided directly to design partners.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="font-display text-xl md:text-2xl text-foreground mb-3 tracking-[-0.01em]">{s.h}</h2>
                <p className="text-sm md:text-[15px] text-dim leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-border flex flex-wrap gap-3">
            <Link
              to="/get-help"
              className="font-mono text-[12px] tracking-[3px] uppercase bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/85 transition-colors"
            >
              Contact us →
            </Link>
            <Link
              to="/it-services"
              className="font-mono text-[12px] tracking-[3px] uppercase border border-border text-foreground px-6 py-3 rounded-md hover:border-primary transition-colors"
            >
              Back to IT Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
