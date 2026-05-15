# Three-Funnel Restructure for Meta + Google Ads Compliance

The problem: Google Ads bans third-party consumer tech support, but Meta allows it. Solution: partition the site so each ad platform points to a policy-safe landing page, while keeping AI Labs as its own proprietary track.

## The three funnels

```text
                ALTCTRL.run (homepage = 3-division switcher)
                          │
        ┌─────────────────┼──────────────────┐
        ▼                 ▼                  ▼
   /it-services      /business-it          /ai-labs
   (Meta funnel)    (Google funnel)     (existing, unchanged)
   Consumer:         B2B only:          R&D / waitlist
   BitLocker,        Managed IT,
   home repair,      HIPAA, fleet,
   virus removal     enterprise IT
```

| Funnel | Page | Ad platform | Allowed language |
|---|---|---|---|
| 1. Consumer | `/it-services`, `/bitlocker-recovery`, `/data-recovery` | Meta | "laptop", "home", "virus", "locked out", urgency |
| 2. Business | `/business-it` (NEW) | Google | "managed IT", "fleet", "compliance", "SLA" — zero consumer keywords |
| 3. AI Labs | `/ai-labs` | Organic / direct | Unchanged proprietary R&D content |

## 1. Geography sync (sitewide)

- Search & replace any remaining "London / UK / UK provider" → "Mississauga / GTA / local Mississauga provider". (Earlier pass cleared `ITServices.tsx`; sweep the full codebase + `index.html` meta + `public/sitemap.xml` + `public/llms.txt` to be safe.)
- Add a small **"Serving Mississauga & the GTA"** badge to `Navbar.tsx` (right of logo, hidden on mobile) and to `Footer.tsx` so it appears site-wide.
- Update `Privacy.tsx` section 1 to add Mississauga, ON business address (placeholder line — you fill the street). Required for Meta & Google Lead Forms.

## 2. New page: `/business-it` (Google-safe)

Create `src/pages/BusinessIT.tsx` — B2B only, scrubbed of every consumer trigger word. Sections:

1. Hero: "Managed IT for Mississauga businesses" — SLA, response time, dedicated point of contact.
2. Service catalogue: workstation fleet management, network/Wi-Fi for offices, account migrations, NDA engagements, on-site triage, compliance-aware data handling.
3. Process: discovery → SOW → onboarding → ongoing support.
4. Trust strip: insured, NDA-ready, audit trail, GTA-based.
5. CTA: "Request a business consultation" → form (no "broken laptop" language).

Wire route in `App.tsx` and add to `public/sitemap.xml`.

## 3. Consumer funnel hardening (Meta)

- `BitlockerRecovery.tsx` hero: change H1 to **"Mississauga's Same-Day BitLocker Recovery"**; add an "Available today" status pill.
- Add a **floating mobile call-button** component (`<StickyCallButton />`) shown only on consumer pages and only on `md:hidden`. Tappable `tel:+16476437979` plus a WhatsApp link (`https://wa.me/16476437979`).
- `ITServices.tsx`: split the "Service catalogue" into two clearly-labelled groups — **For Households** (laptop repair, virus removal, speed tune-up, setup, BitLocker, data recovery) and **For Businesses** (network, workstation fleet, on-site, NDA). The business group ends with a "→ See business-only services" link to `/business-it`.
- Move the "From CA$25 / CA$30" pricing prominently into the hero trust strip on `ITServices.tsx`.
- Add a "Recent Mississauga repairs" social-proof strip to `BrandHero.tsx` (3–6 short anonymised job cards: device + outcome + suburb).

## 4. Homepage refactor (`BrandHero.tsx`)

Convert the current two-card layout to **three cards**:

1. **IT Services** (consumer + general) → `/it-services`
2. **Business IT** (managed services) → `/business-it`  *(new card)*
3. **AI Labs** (private beta) → `/ai-labs` *(unchanged copy)*

Keep the "two divisions" framing but reword the lede to "Three tracks, one operator."

## 5. Lead form simplification

- Add a `source` query-param read in `GetHelp.tsx` so Meta links can hit `/get-help?from=meta&issue=bitlocker`. When `from=meta`, render a slimmer 3-field form: **Name, Phone, Photo of error** (file input → uploaded to Supabase storage, attached to the email payload).
- Default form (Google / direct) stays as today.
- The send-contact-request edge function gets a small update to accept an optional photo URL.

## 6. Navbar update

- Add `Business IT` link between `IT Services` and `BitLocker`.
- On mobile (`md:hidden`), pin the phone number `+1-647-643-7979` as a tappable item inside the top bar (replacing or beside the hamburger area) so it's always visible.

## Technical details

- Files to create: `src/pages/BusinessIT.tsx`, `src/components/StickyCallButton.tsx`, `src/components/RecentRepairs.tsx`, `src/components/GtaBadge.tsx`.
- Files to edit: `src/App.tsx` (route), `src/components/Navbar.tsx` (link + mobile phone + GTA badge), `src/components/Footer.tsx` (GTA badge + business-it link), `src/components/BrandHero.tsx` (3-card grid + recent repairs), `src/pages/BitlockerRecovery.tsx` (hero copy + availability pill + mount sticky call button), `src/pages/ITServices.tsx` (segmented catalogue + sticky call button + pricing in hero), `src/pages/GetHelp.tsx` (source-aware slim form + photo upload), `src/pages/Privacy.tsx` (address), `public/sitemap.xml`, `public/llms.txt`, `index.html` (meta description geo).
- Edge function: `supabase/functions/send-contact-request/index.ts` — accept optional `photoUrl`. Storage bucket `contact-photos` (public-read off; signed URLs).
- Sitelinks remain pointing at unique URLs — `/business-it` becomes a candidate replacement Google sitelink later if you want to swap out the BitLocker one for Google campaigns.

## Out of scope (call out if you want them)

- Actual ad-account changes (audiences, exclusions) — site-side only.
- WhatsApp Business API integration — using `wa.me/` deeplink only.
- Real customer testimonial photos — placeholder cards until you supply them.
