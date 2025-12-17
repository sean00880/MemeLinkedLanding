'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface LandingThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const LandingThemeContext = createContext<LandingThemeContextType | undefined>(undefined);

interface LandingThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
}

/**
 * LandingThemeProvider - Isolated theme provider for the landing page
 *
 * Following the MoonFi pattern, this provider wraps its children in a
 * scoped container that isolates CSS variables from the main app.
 *
 * Uses:
 * - `landing-scope` class for CSS variable isolation
 * - `data-landing-theme` attribute for custom theme state
 * - `data-theme` attribute for Tailark compatibility ('dark' or 'dusk')
 */
export function LandingThemeProvider({
  children,
  defaultTheme = 'dark'
}: LandingThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  // Ensure hydration safety
  useEffect(() => {
    setMounted(true);
    // Check for stored preference (optional)
    const stored = localStorage.getItem('landing-theme') as Theme | null;
    if (stored && (stored === 'dark' || stored === 'light')) {
      setTheme(stored);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('landing-theme', newTheme);
  };

  // Map theme to Tailark theme ('dusk' for dark, 'quartz' for light)
  const tailarkTheme = theme === 'dark' ? 'dark' : 'light';

  return (
    <LandingThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div
        className="landing-scope"
        data-landing-theme={mounted ? theme : 'dark'}
        data-theme={mounted ? tailarkTheme : 'dark'}
      >
        {children}
      </div>
    </LandingThemeContext.Provider>
  );
}

/**
 * Hook to access landing page theme context
 */
export function useLandingTheme() {
  const context = useContext(LandingThemeContext);
  if (context === undefined) {
    throw new Error('useLandingTheme must be used within a LandingThemeProvider');
  }
  return context;
}

export default LandingThemeProvider;
