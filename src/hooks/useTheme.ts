import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

/**
 * Reads whatever the pre-paint script in index.html already resolved, so the
 * hook's first render matches what the user is looking at.
 */
const getInitialTheme = (): Theme => {
  if (typeof document === 'undefined') return 'dark';

  const applied = document.documentElement.getAttribute('data-theme');
  if (applied === 'light' || applied === 'dark') return applied;

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Follow the OS only while the user hasn't picked a theme themselves.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (event: MediaQueryListEvent) => {
      let stored: string | null = null;
      try {
        stored = localStorage.getItem(STORAGE_KEY);
      } catch {
        stored = null;
      }
      if (stored !== 'light' && stored !== 'dark') {
        setTheme(event.matches ? 'dark' : 'light');
      }
    };

    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  // Only an explicit toggle persists a choice — that's what makes the OS
  // listener above stop overriding the user.
  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Private browsing / storage disabled — applies for this session only.
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme };
};

export default useTheme;
