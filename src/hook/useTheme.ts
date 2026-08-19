import { useCallback, useEffect, useRef, useState } from 'react';

export type Theme = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';

/** Must stay in sync with the bootstrap script in index.html. */
const STORAGE_KEY = 'theme';
const DARK_QUERY = '(prefers-color-scheme: dark)';
const THEME_COLOR: Record<ResolvedTheme, string> = {
  light: '#faf6ef',
  dark: '#1c1916',
};

/** 'system' is the default, so it is stored as the absence of a value. */
const readStoredTheme = (): Theme => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'light' || stored === 'dark' ? stored : 'system';
  } catch {
    return 'system';
  }
};

const prefersDark = () => window.matchMedia(DARK_QUERY).matches;

const applyTheme = (resolved: ResolvedTheme) => {
  document.documentElement.dataset.theme = resolved;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', THEME_COLOR[resolved]);
};

const THEME_CYCLE: Theme[] = ['system', 'light', 'dark'];

export const useTheme = () => {
  const [theme, setThemeState] = useState<Theme>(readStoredTheme);
  const [systemDark, setSystemDark] = useState(prefersDark);
  const isFirstRun = useRef(true);
  const transitionTimer = useRef<number>(undefined);

  const resolvedTheme: ResolvedTheme =
    theme === 'system' ? (systemDark ? 'dark' : 'light') : theme;

  useEffect(() => {
    const query = window.matchMedia(DARK_QUERY);
    const handleChange = (event: MediaQueryListEvent) =>
      setSystemDark(event.matches);

    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // The bootstrap script already painted the right theme; don't animate it.
    if (isFirstRun.current) {
      isFirstRun.current = false;
      applyTheme(resolvedTheme);
      return;
    }

    const root = document.documentElement;
    root.classList.add('theme-switching');
    applyTheme(resolvedTheme);

    window.clearTimeout(transitionTimer.current);
    transitionTimer.current = window.setTimeout(
      () => root.classList.remove('theme-switching'),
      220
    );
  }, [resolvedTheme]);

  useEffect(() => () => window.clearTimeout(transitionTimer.current), []);

  const setTheme = useCallback((next: Theme) => {
    try {
      if (next === 'system') localStorage.removeItem(STORAGE_KEY);
      else localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage blocked (private mode): keep the choice for this session only.
    }
    setThemeState(next);
  }, []);

  const cycleTheme = useCallback(() => {
    setTheme(THEME_CYCLE[(THEME_CYCLE.indexOf(theme) + 1) % THEME_CYCLE.length]);
  }, [theme, setTheme]);

  return { theme, resolvedTheme, setTheme, cycleTheme };
};
