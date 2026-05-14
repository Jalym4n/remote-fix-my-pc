## Goal
Make all ALTCTRL pages discoverable to Google so they're eligible to appear as sitelinks under your brand result.

## What I'll add

1. **`public/sitemap.xml`** — static file listing every public route:
   - `/` (priority 1.0)
   - `/bitlocker-recovery`
   - `/it-services`
   - `/ai-labs`
   - `/contact`
   - `/get-help`

   Base URL: `https://altctrl.run`. `/` set to weekly, others monthly. `lastmod` = today.

2. **`public/robots.txt`** — allow all crawlers and point to the sitemap:
   ```
   User-agent: *
   Allow: /

   Sitemap: https://altctrl.run/sitemap.xml
   ```

3. **`index.html` JSON-LD** — add an `Organization` + `WebSite` block with name, URL, phone (`+1-647-643-7979`), email, and `areaServed` (Greater Toronto & Hamilton Area + Worldwide remote). Helps Google understand the brand.

## Not included (call out)
- Sitelinks themselves are chosen automatically by Google — you can't force them. Sitemap + clear navigation + clean per-page titles (already done) are the levers.
- After deploy, verify the domain in Google Search Console and submit `https://altctrl.run/sitemap.xml`. I can walk you through that, or wire up the meta-tag verification automatically if you connect Search Console.

No route changes, no design changes — pure SEO plumbing.