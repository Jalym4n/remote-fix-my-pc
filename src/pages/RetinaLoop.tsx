import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Check, FileSpreadsheet, MousePointerClick, Monitor, Stethoscope } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import LoopDiagram from "@/components/LoopDiagram";
import FeatureTile from "@/components/FeatureTile";
import PilotForm from "@/components/PilotForm";
import Reveal from "@/components/Reveal";
import { applySEO, faqJsonLd, softwareApplicationJsonLd } from "@/lib/seo";
import { PRODUCT_NAME, RETINALOOP_OG_IMAGE } from "@/lib/site";
import { trackJoinPilotClick } from "@/lib/analytics";

const forOptometry = [
  "Find every overdue diabetic patient in your existing patient list",
  "Automated SMS and email recall, with consent and opt-out built in",
  "One-click exam report to the family doctor, faxed for you",
  "Structured referrals with images, grades and urgency",
  "Know when the specialist has seen your patient, and what to monitor next",
];

const forRetina = [
  "Diabetic referrals arrive graded, with images attached",
  "Intake queue sorted by urgency, not by fax arrival time",
  "Request missing information without phone tag",
  "Send the treatment plan back to the referring optometrist in one click",
  "See which referring clinics send the most complete referrals",
];

const steps = [
  { t: "Find.", d: `Import your patient list. ${PRODUCT_NAME} flags who is overdue based on your clinic's own recall policy.` },
  { t: "Recall.", d: "Patients get a friendly text or email with your booking link. No clinical details are ever included in messages." },
  { t: "Report.", d: `After the exam, pick the grade and next interval. ${PRODUCT_NAME} sends a one-page report to the family doctor.` },
  { t: "Refer.", d: `For patients who need a specialist, send a structured referral with images. ${PRODUCT_NAME} suggests an urgency from your clinic's rules; you confirm it.` },
  { t: "Close the loop.", d: "The retina clinic sends back its plan, and you see exactly what to monitor next." },
];

const tiles = [
  { icon: Monitor, title: "Runs on your Windows PCs.", body: "Installed app, toast notifications, prints and faxes like the rest of your office." },
  { icon: FileSpreadsheet, title: "Works with your EMR exports.", body: "Start with the patient list you can already export. No rip-and-replace." },
  { icon: MousePointerClick, title: "Fewer clicks than fax.", body: "Every step is designed to replace a letter or a phone call, never add one." },
  { icon: Stethoscope, title: "Your clinical judgment stays in charge.", body: `${PRODUCT_NAME} never grades images or makes a diagnosis. Clinicians enter findings and confirm every referral.` },
];

const privacyBullets = [
  "Built with PHIPA in mind",
  "Hosted in Canada",
  "MFA for every user",
  "Every record access audit-logged",
  "Encrypted in transit and at rest",
  "No clinical details in patient messages",
];

const perks = [
  "A free overdue-patient scan of your clinic's list (under a privacy agreement)",
  "90 days free during the pilot",
  "Direct line to the founder for feedback and support",
  "Founding-clinic pricing locked in after launch",
];

const retinaLoopFaqs = [
  {
    q: `Is ${PRODUCT_NAME} available now?`,
    a: "It's in a pilot program with a small group of Ontario clinics. Join the founding cohort to get early access.",
  },
  {
    q: "Does it replace my EMR?",
    a: "No. It works alongside your EMR, starting from the patient list you can already export.",
  },
  {
    q: "Is it a medical device? Does it use AI to grade images?",
    a: `No. ${PRODUCT_NAME} is workflow software. Clinicians enter all findings, and the clinic's own rules drive recall timing and referral suggestions, which a clinician confirms.`,
  },
  { q: "Where is data stored?", a: "In Canada. See our security approach." },
  {
    q: "What do patients receive?",
    a: "A short text or email from your clinic with your booking link or phone number. Messages never include clinical details.",
  },
  {
    q: "What does it cost?",
    a: "Founding clinics get pilot access free for 90 days and founding-clinic pricing afterward. Standard pricing will be announced at launch.",
  },
  {
    q: "Do you work outside Ontario?",
    a: "We're starting in Ontario. Other provinces are on the roadmap.",
  },
];

const scrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
};

const RetinaLoop = () => {
  useEffect(() => {
    applySEO({
      title: "RetinaLoop · Diabetic eye-care recall and referral software · ALTCTRL",
      description:
        "Find overdue diabetic patients, recall them automatically, report to family doctors and send triaged referrals. Pilot open to Ontario optometry and retina clinics.",
      canonical: "https://altctrl.run/products/retinaloop",
      ogImage: RETINALOOP_OG_IMAGE,
      jsonLd: [softwareApplicationJsonLd(PRODUCT_NAME), faqJsonLd(retinaLoopFaqs)],
    });
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-surface bg-noise px-4 sm:px-6 md:px-20 pt-28 pb-20 lg:pt-36 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-circuit opacity-50" />
        <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 25% 20%, hsla(180,70%,50%,0.12) 0%, transparent 55%)" }} />
        <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 35%, hsl(220 22% 7%) 100%)" }} />

        <div className="relative z-[2] max-w-5xl mx-auto">
          <div className="font-mono text-[11px] sm:text-[12px] tracking-[3px] text-faint uppercase mb-4">
            // ALTCTRL / {PRODUCT_NAME} · Pilot program · Ontario
          </div>
          <h1 className="font-display text-[clamp(36px,5.8vw,72px)] leading-[1.05] tracking-[-0.02em] mb-6 max-w-4xl">
            Fill your chairs with the diabetic patients <span className="text-primary">you're already missing.</span>
          </h1>
          <p className="text-base md:text-lg text-dim leading-relaxed max-w-3xl mb-10">
            {PRODUCT_NAME} finds patients with diabetes who are overdue for an eye exam, recalls them automatically, sends a one-click report to their family doctor, and routes triaged referrals to retina clinics. Built for Windows, hosted in Canada.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#pilot"
              onClick={(e) => {
                trackJoinPilotClick("retinaloop_hero");
                scrollTo("pilot")(e);
              }}
              className="font-mono text-[13px] tracking-[3px] uppercase bg-primary text-primary-foreground border border-primary px-7 py-4 rounded-md hover:bg-transparent hover:text-primary transition-colors text-center"
            >
              Join the founding cohort →
            </a>
            <a
              href="#how"
              onClick={scrollTo("how")}
              className="font-mono text-[13px] tracking-[3px] uppercase border border-border text-foreground px-7 py-4 rounded-md hover:border-primary hover:text-primary transition-colors text-center"
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-4 sm:px-6 md:px-20 py-20 md:py-24 bg-background">
        <Reveal className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="// WHO IT'S FOR" title={<>Two clinics. <span className="text-primary">One shared patient.</span></>} className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { h: "For optometry clinics", items: forOptometry },
              { h: "For retina and ophthalmology clinics", items: forRetina },
            ].map((col) => (
              <div key={col.h} className="bg-surface2 border border-border rounded-xl p-7">
                <h3 className="font-display text-xl md:text-2xl text-foreground mb-5">{col.h}</h3>
                <ul className="flex flex-col gap-3.5">
                  {col.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm text-dim leading-relaxed">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" aria-hidden />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* How it works */}
      <section id="how" className="scroll-mt-20 px-4 sm:px-6 md:px-20 py-20 md:py-24 bg-surface bg-noise">
        <Reveal className="max-w-6xl mx-auto relative z-[1]">
          <SectionHeading
            eyebrow="// HOW IT WORKS"
            title={<>Four parties. Six handoffs. <span className="text-primary">One loop.</span></>}
            className="mb-10"
          />
          <div className="mb-12">
            <LoopDiagram />
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <li key={s.t} className="bg-surface2 border border-border rounded-xl p-6">
                <div className="font-mono text-[11px] tracking-[3px] text-primary uppercase mb-3">Step 0{i + 1}</div>
                <div className="font-display text-xl text-foreground mb-2">{s.t}</div>
                <p className="text-sm text-dim leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* Built the way clinics work */}
      <section className="px-4 sm:px-6 md:px-20 py-20 md:py-24 bg-background">
        <Reveal className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="// DESIGNED FOR THE FRONT DESK"
            title={<>Built the way <span className="text-primary">clinics actually work.</span></>}
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {tiles.map((t) => (
              <FeatureTile key={t.title} {...t} />
            ))}
          </div>
        </Reveal>
      </section>

      {/* Privacy & security */}
      <section className="px-4 sm:px-6 md:px-20 py-20 md:py-24 bg-surface bg-noise bg-circuit">
        <Reveal className="max-w-6xl mx-auto relative z-[1] grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
          <div>
            <SectionHeading
              eyebrow="// PRIVACY & SECURITY"
              title={<>Designed for Ontario health privacy <span className="text-primary">from day one.</span></>}
            />
            <Link to="/security" className="inline-block mt-2 text-[12px] tracking-[3px] text-primary uppercase hover:translate-x-1 transition-transform">
              Read our security approach →
            </Link>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {privacyBullets.map((b) => (
              <li key={b} className="flex items-center gap-3 bg-surface2 border border-border rounded-lg px-4 py-3.5 text-sm text-foreground">
                <Check className="w-4 h-4 text-primary flex-shrink-0" aria-hidden />
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Founding cohort */}
      <section id="pilot" className="scroll-mt-20 px-4 sm:px-6 md:px-20 py-20 md:py-24 bg-background relative">
        <div className="absolute inset-0 glow-center pointer-events-none" />
        <div className="max-w-6xl mx-auto relative grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="// FOUNDING COHORT"
              title={<>Help build {PRODUCT_NAME}. <span className="text-primary">Get it first.</span></>}
              intro={`We're working with a small number of Ontario optometry and retina clinics to shape ${PRODUCT_NAME} before general release. Founding clinics get early access, direct input on features, and founding-clinic pricing.`}
            />
            <div className="mt-8">
              <div className="font-mono text-[11px] tracking-[3px] text-faint uppercase mb-4">What founding clinics get</div>
              <ul className="flex flex-col gap-3">
                {perks.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-foreground leading-relaxed">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" aria-hidden />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <PilotForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 sm:px-6 md:px-20 py-20 md:py-24 bg-surface bg-noise">
        <Reveal className="max-w-4xl mx-auto relative z-[1]">
          <SectionHeading eyebrow="// FAQ" title={<>{PRODUCT_NAME}, <span className="text-primary">answered.</span></>} className="mb-10" />
          <div className="flex flex-col gap-3">
            {retinaLoopFaqs.map((f) => (
              <details key={f.q} className="group bg-surface2 border border-border rounded-md p-5 open:border-primary/60 transition-colors">
                <summary className="cursor-pointer text-foreground text-sm md:text-base font-medium list-none flex items-center justify-between gap-4">
                  <span>{f.q}</span>
                  <span className="text-primary text-lg group-open:rotate-45 transition-transform" aria-hidden>+</span>
                </summary>
                <p className="text-sm text-dim leading-relaxed mt-4">
                  {f.q === "Where is data stored?" ? (
                    <>
                      In Canada. See our{" "}
                      <Link to="/security" className="text-primary underline underline-offset-2">security approach</Link>.
                    </>
                  ) : (
                    f.a
                  )}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
};

export default RetinaLoop;
