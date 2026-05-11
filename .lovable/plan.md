## Goal

Restructure the site so ALTCTRL presents as a parent brand with **two divisions**:

1. **ALTCTRL / IT Services** — the live, revenue-generating arm. Computer repair, BitLocker recovery, remote rescue, plus an enterprise-grade managed-IT positioning (so it reads credible to business buyers, not just home users).
2. **ALTCTRL / AI Labs** — the "coming soon / in development" arm. Clinical AI infrastructure, RAG, fine-tuning — kept as forward-looking R&D, clearly labeled as upcoming.

Both live on the same homepage, with clear visual separation and navigation between them.

---

## New site structure

```
Navbar
  Logo: ALTCTRL  [ IT Services | AI Labs (coming soon) | Contact ]

Hero (parent brand)
  ALTCTRL — Two divisions, one operator.
  • IT Services — live now (CTA: Get help)
  • AI Labs — in development (CTA: Follow progress)

────────── DIVISION 1 ──────────
Section header: "ALTCTRL / IT Services — Operational"

  TrustBar (IT)         no fix no fee · 15% price-beat · same-day · DBS-checked
  Services grid         repair, BitLocker, virus, data recovery, networking, tune-up
  Enterprise band       NEW: managed IT for SMBs — SLAs, on-site, fleet support,
                        device provisioning, off-boarding, compliance-aware
  Service options       remote · in-home · drop-off · on-site (enterprise)
  Top problems / Who-it-for  (existing, lightly tightened)
  Process / Testimonials / Pricing-style CTA band
  IT Contact CTA

────────── DIVISION 2 ──────────
Section header: "ALTCTRL / AI Labs — In Development"
  Clear "Upcoming · Private Beta" badge at the top of this whole block.

  Hero card             Clinical AI infrastructure (current Hero card moves here)
  Capabilities          fine-tuning · vectorization · edge (existing ServiceOptions)
  Tech stack            GCP / AWS / Azure (existing TechStack)
  Reference architecture (existing About diagram)
  AI FAQ + Waitlist CTA (jaleed01@altctrl.run)

Footer
  Two columns: IT Services links · AI Labs links · single contact
```

---

## Key changes per file

**New components**
- `src/components/BrandHero.tsx` — parent hero introducing both divisions with two side-by-side cards (IT = "Operational", AI = "In Development").
- `src/components/DivisionHeader.tsx` — reusable big section divider with division name, status pill (`OPERATIONAL` / `IN DEVELOPMENT`), and short tagline. Used twice.
- `src/components/EnterpriseBand.tsx` — new enterprise-IT positioning block: managed IT, SLAs, fleet support, on-site engineer, compliance-aware. Logos/placeholder client strip, stats (response time, uptime, devices managed).
- `src/components/ITContact.tsx` (or reuse `Contact.tsx` with a variant prop) — IT-focused lead form: name, business/personal, issue type, urgency.

**Repurpose / restore (content currently overwritten by the AI pivot)**
- `Hero.tsx` → becomes `AILabsHero.tsx` (the dashboard card + clinical copy stays, but moves into the AI Labs section and gains a clear "In development" framing).
- `Services.tsx` already holds the IT repair grid — re-wire it back into the page.
- `TrustBar.tsx` → split into `TrustBarIT.tsx` (no-fix-no-fee, 15% beat, same-day) and `TrustBarAI.tsx` (HIPAA-aligned, SOC2-ready, multi-cloud). Use the right one in each division.
- `ServiceOptions.tsx` (currently AI capabilities) stays in AI Labs. A second IT-flavored "Service options" (remote / in-home / drop-off / on-site) lives in the IT section — can reuse the older variant or add a `variant` prop.
- `About.tsx` — split: a short "About ALTCTRL" intro at the top of the page (operator-led, two divisions), and the AI reference-architecture card moves into the AI Labs block.
- `FAQ.tsx` — split into IT FAQ (pricing, turnaround, BitLocker, areas covered) inside Division 1, and AI FAQ inside Division 2.
- `TopProblems.tsx`, `WhoItsFor.tsx`, `Process.tsx`, `Testimonials.tsx`, `RemoteSection.tsx` — restore IT-oriented copy and place inside Division 1.
- `Navbar.tsx` — links: `IT Services`, `AI Labs`, `Contact`. AI Labs link gets a small "soon" pill.
- `Footer.tsx` — two-column division layout, single contact email.
- `pages/Index.tsx` — new top-to-bottom assembly per the structure above.
- `index.html` — title/meta back to "ALTCTRL — IT Services & AI Labs" framing.

**Visual cues for legitimacy (enterprise feel for IT)**
- Add an enterprise stats row (e.g. "200+ devices serviced · 4-hour response · DBS-checked · Insured").
- Add a logo/placeholder strip ("Trusted by independent practices, law firms, and SMBs across [area]") — placeholder logos, easy to swap.
- Slightly more restrained color use in the IT section (foreground + primary only, fewer glows) so it reads B2B rather than retro.
- Status pills (`● OPERATIONAL` green, `◐ IN DEVELOPMENT` amber) at each division header so the AI side is unambiguously framed as upcoming.

---

## What stays the same
- Design tokens in `index.css` and `tailwind.config.ts` (teal/slate palette, Space Grotesk + Inter + JetBrains Mono).
- Scroll-reveal animations via `useScrollReveal`.
- Contact email `jaleed01@altctrl.run`.
- All AI content — only relocated and re-framed as "in development", not deleted.

## Out of scope
- No backend / form submission wiring (forms remain mailto/visual).
- No new images generated unless you ask.
- No pricing changes beyond restoring previous IT pricing copy.
