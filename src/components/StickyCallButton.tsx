/**
 * Floating mobile contact stack — Call + WhatsApp.
 * Mounted on consumer-funnel pages (Meta traffic).
 * Hidden on md+ to avoid clutter on desktop where the navbar CTA is visible.
 */
const StickyCallButton = () => {
  return (
    <div className="md:hidden fixed bottom-4 right-4 z-[90] flex flex-col gap-2 items-end">
      <a
        href="https://wa.me/16476437979?text=Hi%20ALTCTRL%2C%20I%20need%20help%20with%20my%20device."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message ALTCTRL on WhatsApp"
        className="flex items-center gap-2 bg-green text-background font-mono text-[12px] tracking-[2px] uppercase px-4 py-3 rounded-full shadow-[0_8px_24px_-6px_hsl(var(--primary)/0.5)] active:scale-95 transition-transform"
      >
        <span aria-hidden>💬</span>
        WhatsApp
      </a>
      <a
        href="tel:+16476437979"
        aria-label="Call ALTCTRL at +1-647-643-7979"
        className="flex items-center gap-2 bg-primary text-primary-foreground font-mono text-[12px] tracking-[2px] uppercase px-4 py-3 rounded-full shadow-[0_8px_24px_-6px_hsl(var(--primary)/0.6)] active:scale-95 transition-transform"
      >
        <span aria-hidden>📞</span>
        Call now
      </a>
    </div>
  );
};

export default StickyCallButton;
