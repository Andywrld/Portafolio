import { useEffect } from 'react';

const DEFAULT_TITLE = 'Andy Torres — Frontend & Líder Técnico';

/**
 * Sets the tab title for a route and restores the default on the way out, so a
 * client-side navigation leaves the same trace in history as a page load would.
 */
export const useDocumentTitle = (title?: string) => {
  useEffect(() => {
    document.title = title ?? DEFAULT_TITLE;
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title]);
};
