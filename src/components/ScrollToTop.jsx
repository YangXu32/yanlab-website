import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Forces each route change to start at scroll position (0,0)
 * Works around browsers restoring scroll position and React 18 batching.
 */
const ScrollToTop = () => {
  const location = useLocation();

  // Disable automatic browser scroll restoration
  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      try {
        window.history.scrollRestoration = 'manual';
      } catch (_) {}
    }
  }, []);

  useLayoutEffect(() => {
    // If there's a hash, let the browser handle anchor navigation later
    if (location.hash) return;
    // Immediate jump to top before paint
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash) {
      // Scroll to element with hash AFTER render
      const id = location.hash.replace('#', '');
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    } else {
      // Extra safety: ensure we are at top (in case of late layout shifts)
      requestAnimationFrame(() => window.scrollTo(0, 0));
      setTimeout(() => window.scrollTo(0, 0), 50);
    }
  }, [location.pathname, location.hash]);

  return null;
};

export default ScrollToTop;