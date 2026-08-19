import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Restores sane scroll behaviour across client-side navigation.
 *
 * A new route starts at the top; a route carrying a hash jumps to that section
 * once it has rendered. Browsers do neither on their own in an SPA — without
 * this, opening a project from halfway down the index lands you halfway down
 * the project.
 */
export const RouteScroll = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // The target belongs to the route that is rendering right now, so wait
      // one frame for it to exist before scrolling.
      const id = hash.slice(1);
      const frame = requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      });
      return () => cancelAnimationFrame(frame);
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
};
