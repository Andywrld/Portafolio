import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Copy-to-clipboard with a self-clearing confirmation.
 *
 * The timer is cleared on unmount and on repeat copies so a fast double click
 * cannot leave the button stuck reading "copiado".
 */
export const useCopy = (resetAfter = 1800) => {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = useCallback(
    async (value: string) => {
      try {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => setCopied(false), resetAfter);
      } catch {
        // Clipboard blocked (insecure context, denied permission): the address
        // is still selectable text next to the button.
      }
    },
    [resetAfter]
  );

  return { copied, copy };
};
