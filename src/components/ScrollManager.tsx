import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * SPA scroll behaviour: jump to #hash targets after navigation
 * (e.g. /products/retinaloop#pilot), otherwise start new pages at the top.
 */
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      let tries = 0;
      const tick = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (tries++ < 20) {
          setTimeout(tick, 50);
        }
      };
      setTimeout(tick, 60);
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollManager;
