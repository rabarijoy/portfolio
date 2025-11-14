'use client';

import React, { createContext, useContext, ReactNode } from 'react';

export type ThemeZone = 'light' | 'blue' | 'dark';

export interface ThemeColors {
  // Backgrounds
  bgPrimary: string;
  bgSecondary: string;
  bgTertiary: string;
  
  // Text
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  
  // Accents
  accent: string;
  accentHover: string;
  accentLight: string;
  
  // Borders & Dividers
  border: string;
  divider: string;
  
  // Surfaces (cards, etc.)
  surface: string;
  surfaceHover: string;
  
  // Special
  ellipse: string;
}

export const themes: Record<ThemeZone, ThemeColors> = {
  light: {
    bgPrimary: '#ffffff',
    bgSecondary: '#f9fafb',
    bgTertiary: '#f3f4f6',
    textPrimary: '#000000',
    textSecondary: '#171717',
    textTertiary: '#6b7280',
    accent: '#6dbfff',
    accentHover: '#5aa5ff',
    accentLight: '#e0f2fe',
    border: '#e5e7eb',
    divider: '#e5e7eb',
    surface: '#ffffff',
    surfaceHover: '#f9fafb',
    ellipse: '#6dbfff',
  },
  blue: {
    bgPrimary: '#eff6ff',
    bgSecondary: '#dbeafe',
    bgTertiary: '#bfdbfe',
    textPrimary: '#0c4a6e',
    textSecondary: '#075985',
    textTertiary: '#0284c7',
    accent: '#0ea5e9',
    accentHover: '#0284c7',
    accentLight: '#bae6fd',
    border: '#93c5fd',
    divider: '#60a5fa',
    surface: '#ffffff',
    surfaceHover: '#f0f9ff',
    ellipse: '#0ea5e9',
  },
  dark: {
    bgPrimary: '#0a0a0a',
    bgSecondary: '#171717',
    bgTertiary: '#262626',
    textPrimary: '#fafafa',
    textSecondary: '#e5e5e5',
    textTertiary: '#a3a3a3',
    accent: '#6dbfff',
    accentHover: '#5aa5ff',
    accentLight: '#1e3a5f',
    border: '#404040',
    divider: '#525252',
    surface: '#171717',
    surfaceHover: '#262626',
    ellipse: '#6dbfff',
  },
};

interface ThemeContextType {
  currentTheme: ThemeColors;
  themeProgress: number; // 0-1 progress between themes
  activeZone: ThemeZone;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeColors>(themes.light);
  const [themeProgress, setThemeProgress] = React.useState(0);
  const [activeZone, setActiveZone] = React.useState<ThemeZone>('light');

  // Interpolate between two colors
  const interpolateColor = (color1: string, color2: string, t: number): string => {
    const hex1 = color1.replace('#', '');
    const hex2 = color2.replace('#', '');
    
    const r1 = parseInt(hex1.substring(0, 2), 16);
    const g1 = parseInt(hex1.substring(2, 4), 16);
    const b1 = parseInt(hex1.substring(4, 6), 16);
    
    const r2 = parseInt(hex2.substring(0, 2), 16);
    const g2 = parseInt(hex2.substring(2, 4), 16);
    const b2 = parseInt(hex2.substring(4, 6), 16);
    
    const r = Math.round(r1 + (r2 - r1) * t);
    const g = Math.round(g1 + (g2 - g1) * t);
    const b = Math.round(b1 + (b2 - b1) * t);
    
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  };

  // Interpolate between two themes
  const interpolateTheme = (theme1: ThemeColors, theme2: ThemeColors, t: number): ThemeColors => {
    return {
      bgPrimary: interpolateColor(theme1.bgPrimary, theme2.bgPrimary, t),
      bgSecondary: interpolateColor(theme1.bgSecondary, theme2.bgSecondary, t),
      bgTertiary: interpolateColor(theme1.bgTertiary, theme2.bgTertiary, t),
      textPrimary: interpolateColor(theme1.textPrimary, theme2.textPrimary, t),
      textSecondary: interpolateColor(theme1.textSecondary, theme2.textSecondary, t),
      textTertiary: interpolateColor(theme1.textTertiary, theme2.textTertiary, t),
      accent: interpolateColor(theme1.accent, theme2.accent, t),
      accentHover: interpolateColor(theme1.accentHover, theme2.accentHover, t),
      accentLight: interpolateColor(theme1.accentLight, theme2.accentLight, t),
      border: interpolateColor(theme1.border, theme2.border, t),
      divider: interpolateColor(theme1.divider, theme2.divider, t),
      surface: interpolateColor(theme1.surface, theme2.surface, t),
      surfaceHover: interpolateColor(theme1.surfaceHover, theme2.surfaceHover, t),
      ellipse: interpolateColor(theme1.ellipse, theme2.ellipse, t),
    };
  };

  React.useEffect(() => {
    const handleScroll = () => {
      // Wait a bit for DOM to be ready
      setTimeout(() => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Get section positions
        const aboutSection = document.getElementById('about');
        const projectsSection = document.getElementById('projects');
        const formationSection = document.getElementById('formation');
        
        if (!aboutSection || !projectsSection || !formationSection) {
          // Fallback to light theme if sections not found
          setCurrentTheme(themes.light);
          setThemeProgress(0);
          setActiveZone('light');
          return;
        }
        
        const aboutTop = aboutSection.offsetTop;
        const projectsTop = projectsSection.offsetTop;
        const formationTop = formationSection.offsetTop;
        
        // Calculate viewport center (40% from top for better UX)
        const viewportCenter = scrollY + windowHeight * 0.4;
        
        let newTheme: ThemeColors;
        let newProgress = 0;
        let newZone: ThemeZone = 'light';
        
        // Transition zones with smooth interpolation
        const transitionZone = windowHeight * 0.4; // 40% of viewport for transition
        
        if (viewportCenter < projectsTop - transitionZone) {
          // Light theme (About zone)
          newTheme = themes.light;
          newZone = 'light';
          newProgress = 0;
        } else if (viewportCenter < projectsTop + transitionZone) {
          // Transitioning from light to blue
          const transitionStart = projectsTop - transitionZone;
          const t = Math.max(0, Math.min(1, (viewportCenter - transitionStart) / (transitionZone * 2)));
          newTheme = interpolateTheme(themes.light, themes.blue, t);
          newProgress = t;
          newZone = t > 0.5 ? 'blue' : 'light';
        } else if (viewportCenter < formationTop - transitionZone) {
          // Fully in blue zone
          newTheme = themes.blue;
          newZone = 'blue';
          newProgress = 1;
        } else if (viewportCenter < formationTop + transitionZone) {
          // Transitioning from blue to dark
          const transitionStart = formationTop - transitionZone;
          const t = Math.max(0, Math.min(1, (viewportCenter - transitionStart) / (transitionZone * 2)));
          newTheme = interpolateTheme(themes.blue, themes.dark, t);
          newProgress = t;
          newZone = t > 0.5 ? 'dark' : 'blue';
        } else {
          // Dark theme (Formation zone)
          newTheme = themes.dark;
          newZone = 'dark';
          newProgress = 1;
        }
        
        setCurrentTheme(newTheme);
        setThemeProgress(newProgress);
        setActiveZone(newZone);
        
        // Apply theme to CSS variables
        const root = document.documentElement;
        root.style.setProperty('--theme-bg-primary', newTheme.bgPrimary);
        root.style.setProperty('--theme-bg-secondary', newTheme.bgSecondary);
        root.style.setProperty('--theme-bg-tertiary', newTheme.bgTertiary);
        root.style.setProperty('--theme-text-primary', newTheme.textPrimary);
        root.style.setProperty('--theme-text-secondary', newTheme.textSecondary);
        root.style.setProperty('--theme-text-tertiary', newTheme.textTertiary);
        root.style.setProperty('--theme-accent', newTheme.accent);
        root.style.setProperty('--theme-accent-hover', newTheme.accentHover);
        root.style.setProperty('--theme-accent-light', newTheme.accentLight);
        root.style.setProperty('--theme-border', newTheme.border);
        root.style.setProperty('--theme-divider', newTheme.divider);
        root.style.setProperty('--theme-surface', newTheme.surface);
        root.style.setProperty('--theme-surface-hover', newTheme.surfaceHover);
        root.style.setProperty('--theme-ellipse', newTheme.ellipse);
      }, 100);
    };
    
    // Initial call after a short delay to ensure DOM is ready
    const initialTimeout = setTimeout(handleScroll, 200);
    
    // Throttle scroll events for performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      clearTimeout(initialTimeout);
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, themeProgress, activeZone }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

