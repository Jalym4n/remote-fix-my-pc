// Helpers for per-route SEO head management.
// Updates <title>, meta description, canonical, and Open Graph tags so each
// route presents a unique preview to crawlers and social platforms.

type SEOOptions = {
  title: string;
  description: string;
  canonical: string; // absolute URL
  ogType?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const upsertMetaByName = (name: string, content: string) => {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertMetaByProperty = (property: string, content: string) => {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertCanonical = (href: string) => {
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = href;
};

const ROUTE_LD_ID = "route-jsonld";

const upsertRouteJsonLd = (data?: Record<string, unknown> | Record<string, unknown>[]) => {
  const existing = document.getElementById(ROUTE_LD_ID);
  if (existing) existing.remove();
  if (!data) return;
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = ROUTE_LD_ID;
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
};

export const applySEO = ({ title, description, canonical, ogType = "website", jsonLd }: SEOOptions) => {
  document.title = title;
  upsertMetaByName("description", description);
  upsertCanonical(canonical);
  upsertMetaByProperty("og:title", title);
  upsertMetaByProperty("og:description", description);
  upsertMetaByProperty("og:url", canonical);
  upsertMetaByProperty("og:type", ogType);
  upsertMetaByName("twitter:title", title);
  upsertMetaByName("twitter:description", description);
  upsertRouteJsonLd(jsonLd);
};

export const faqJsonLd = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const localBusinessJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://altctrl.run/#localbusiness",
  name: "ALTCTRL Solutions — IT Services",
  url: "https://altctrl.run/it-services",
  email: "jaleed01@altctrl.run",
  telephone: "+1-647-643-7979",
  priceRange: "$$",
  areaServed: [
    { "@type": "Place", name: "Greater Toronto and Hamilton Area" },
    { "@type": "Place", name: "Worldwide (remote rescue)" },
  ],
});
