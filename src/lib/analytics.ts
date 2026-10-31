// Thin wrapper around the Google tag (AW-459927693) loaded in index.html.
// Existing tag config is untouched; these helpers only add new events.

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const GOOGLE_ADS_ID = "AW-459927693";

/**
 * Google Ads conversion label for B2B pilot leads, kept separate from
 * household repair leads. Create a conversion action named
 * "pilot_form_submit" in Google Ads, then paste its label here
 * (the part after the slash in "AW-459927693/XXXXXXXXXXX").
 */
export const PILOT_CONVERSION_LABEL = "";

export const trackEvent = (name: string, params: GtagParams = {}) => {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", name, params);
    }
  } catch {
    // Analytics must never break the page.
  }
};

export const trackPilotSubmit = (params: GtagParams = {}) => {
  trackEvent("pilot_form_submit", params);
  if (PILOT_CONVERSION_LABEL) {
    trackEvent("conversion", { send_to: `${GOOGLE_ADS_ID}/${PILOT_CONVERSION_LABEL}` });
  }
};

export const trackJoinPilotClick = (location: string) =>
  trackEvent("cta_join_pilot_click", { location });

export const trackGetItHelpClick = (location: string) =>
  trackEvent("cta_get_it_help_click", { location });
