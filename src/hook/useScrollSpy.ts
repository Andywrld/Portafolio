import { useEffect, useState } from 'react';

/**
 * Reports which section is currently under the reader.
 *
 * Uses a band across the upper third of the viewport rather than element
 * visibility, so a tall section stays active while it is being read and short
 * sections still register when they pass through. Returns `null` above the
 * first section, which lets the nav show nothing as active at the very top.
 */
export const useScrollSpy = (ids: readonly string[], enabled = true) => {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      setActive(null);
      return;
    }

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids, enabled]);

  return active;
};
