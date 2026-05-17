## Goal

Wire the 2 Google Ads price assets into `/business-it` so the `?asset=price-*` URLs land on a dedicated pricing section, with anchor highlighting matching the existing `?service=` pattern.

## Price assets (reference)

| Asset | Header | Price | Qualifier | Description | URL |
|---|---|---|---|---|---|
| price-diag | Initial diagnosis | CA$0.00 | — | Free technical triage | `/business-it?asset=price-diag` |
| price-triage | On-site incident triage | From CA$100.00 | From | Same-day GTA response | `/business-it?asset=price-triage` |

## Changes

### 1. `src/pages/BusinessIT.tsx`
- Add a new **Pricing** section (between Process and FAQ) with `id="pricing"` and `scroll-mt-32`.
- Two cards, each with `id="asset-price-diag"` and `id="asset-price-triage"`, matching the existing service-card visual language (`bg-surface2`, border, scroll-reveal).
  - Card 1: "Initial diagnosis" · **CA$0.00** · "Free technical triage. Written next-step within one business day."
  - Card 2: "On-site incident triage" · **From CA$100.00** · "Same-day GTA response. Documented findings and remediation plan per visit."
- Extend the existing `useEffect` to also read `?asset=` and scroll to `#asset-${assetParam}`, highlighting the matched card with `border-primary` (same pattern as `serviceParam`).

### 2. `public/sitemap.xml`
- Add 2 entries with `priority="0.6"`:
  - `https://altctrl.run/business-it?asset=price-diag`
  - `https://altctrl.run/business-it?asset=price-triage`

## Out of scope
- No changes to ad-account assets themselves (user pastes URLs into Google Ads).
- No new components/files.
