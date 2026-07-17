import { useEffect, useRef } from 'react';

/**
 * Reveals an element once it scrolls into view by toggling `.is-visible`.
 * The pre-reveal hidden state lives in CSS under `html.js .reveal`, so a
 * render without JS (or a headless crawler) always shows the content.
 */
export const useReveal = <T extends HTMLElement = HTMLDivElement>(
  options?: { threshold?: number; rootMargin?: string }
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Safety: if the observer never fires (odd viewports), reveal on a timer.
    const fallback = window.setTimeout(() => node.classList.add('is-visible'), 1200);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            window.clearTimeout(fallback);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options?.threshold ?? 0.12,
        rootMargin: options?.rootMargin ?? '0px 0px -8% 0px',
      }
    );

    observer.observe(node);
    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, [options?.threshold, options?.rootMargin]);

  return ref;
};
