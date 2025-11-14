'use client';

import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { useScrollTheme, ThemeZone } from './useScrollTheme';

interface ThemeColors {
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
  
  // Borders & Dividers
  border: string;
  divider: string;
  
  // Surfaces (cards, etc.)
  surface: string;
  surfaceHover: string;
  
  // Ellipse
  ellipse: string;
}

interface ThemeContextType {
  zone: ThemeZone;
  colors: ThemeColors;
  lightToBlue: number;
  blueToDark: number;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Palettes de couleurs pour chaque zone
const lightTheme: ThemeColors = {
  bgPrimary: '#ffffff',
  bgSecondary: '#f9fafb',
  bgTertiary: '#f3f4f6',
  textPrimary: '#000000',
  textSecondary: '#171717',
  textTertiary: '#4b5563',
  accent: '#6dbfff',
  accentHover: '#4a9eff',
  border: '#e5e7eb',
  divider: '#d1d5db',
  surface: '#ffffff',
  surfaceHover: '#f9fafb',
  ellipse: '#6dbfff',
};

const blueTheme: ThemeColors = {
  bgPrimary: '#0a4d8c',
  bgSecondary: '#0d5ba3',
  bgTertiary: '#0f6cba',
  textPrimary: '#ffffff',
  textSecondary: '#e0f2fe',
  textTertiary: '#bae6fd',
  accent: '#6dbfff',
  accentHover: '#8dd0ff',
  border: '#1e7fc7',
  divider: '#2a8fd4',
  surface: '#0d5ba3',
  surfaceHover: '#0f6cba',
  ellipse: '#6dbfff',
};

const darkTheme: ThemeColors = {
  bgPrimary: '#0a0a0a',
  bgSecondary: '#111111',
  bgTertiary: '#1a1a1a',
  textPrimary: '#e5e5e5',
  textSecondary: '#d4d4d4',
  textTertiary: '#a3a3a3',
  accent: '#6dbfff',
  accentHover: '#8dd0ff',
  border: '#262626',
  divider: '#404040',
  surface: '#111111',
  surfaceHover: '#1a1a1a',
  ellipse: '#6dbfff',
};

// Fonction d'interpolation de couleurs RGB
function interpolateColor(color1: string, color2: string, factor: number): string {
  const hex1 = color1.replace('#', '');
  const hex2 = color2.replace('#', '');
  
  const r1 = parseInt(hex1.substring(0, 2), 16);
  const g1 = parseInt(hex1.substring(2, 4), 16);
  const b1 = parseInt(hex1.substring(4, 6), 16);
  
  const r2 = parseInt(hex2.substring(0, 2), 16);
  const g2 = parseInt(hex2.substring(2, 4), 16);
  const b2 = parseInt(hex2.substring(4, 6), 16);
  
  const r = Math.round(r1 + (r2 - r1) * factor);
  const g = Math.round(g1 + (g2 - g1) * factor);
  const b = Math.round(b1 + (b2 - b1) * factor);
  
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

// Fonction pour interpoler entre deux palettes
function interpolateTheme(theme1: ThemeColors, theme2: ThemeColors, factor: number): ThemeColors {
  return {
    bgPrimary: interpolateColor(theme1.bgPrimary, theme2.bgPrimary, factor),
    bgSecondary: interpolateColor(theme1.bgSecondary, theme2.bgSecondary, factor),
    bgTertiary: interpolateColor(theme1.bgTertiary, theme2.bgTertiary, factor),
    textPrimary: interpolateColor(theme1.textPrimary, theme2.textPrimary, factor),
    textSecondary: interpolateColor(theme1.textSecondary, theme2.textSecondary, factor),
    textTertiary: interpolateColor(theme1.textTertiary, theme2.textTertiary, factor),
    accent: interpolateColor(theme1.accent, theme2.accent, factor),
    accentHover: interpolateColor(theme1.accentHover, theme2.accentHover, factor),
    border: interpolateColor(theme1.border, theme2.border, factor),
    divider: interpolateColor(theme1.divider, theme2.divider, factor),
    surface: interpolateColor(theme1.surface, theme2.surface, factor),
    surfaceHover: interpolateColor(theme1.surfaceHover, theme2.surfaceHover, factor),
    ellipse: interpolateColor(theme1.ellipse, theme2.ellipse, factor),
  };
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { zone, lightToBlue, blueToDark } = useScrollTheme();
  
  // Calculer les couleurs interpolées
  let colors: ThemeColors;
  
  if (lightToBlue < 1) {
    // Transition Light -> Blue
    colors = interpolateTheme(lightTheme, blueTheme, lightToBlue);
  } else if (blueToDark < 1) {
    // Transition Blue -> Dark
    colors = interpolateTheme(blueTheme, darkTheme, blueToDark);
  } else {
    // Zone Dark pure
    colors = darkTheme;
  }
  
  // Appliquer les couleurs via CSS variables
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--theme-bg-primary', colors.bgPrimary);
    root.style.setProperty('--theme-bg-secondary', colors.bgSecondary);
    root.style.setProperty('--theme-bg-tertiary', colors.bgTertiary);
    root.style.setProperty('--theme-text-primary', colors.textPrimary);
    root.style.setProperty('--theme-text-secondary', colors.textSecondary);
    root.style.setProperty('--theme-text-tertiary', colors.textTertiary);
    root.style.setProperty('--theme-accent', colors.accent);
    root.style.setProperty('--theme-accent-hover', colors.accentHover);
    root.style.setProperty('--theme-border', colors.border);
    root.style.setProperty('--theme-divider', colors.divider);
    root.style.setProperty('--theme-surface', colors.surface);
    root.style.setProperty('--theme-surface-hover', colors.surfaceHover);
    root.style.setProperty('--theme-ellipse', colors.ellipse);
    
    // Transition fluide pour les backgrounds (pas de fade, mais shift progressif)
    root.style.setProperty('--theme-bg-transition', 'background-color 0.6s cubic-bezier(0.4, 0, 0.2, 1)');
    // Transition fade légère pour le texte
    root.style.setProperty('--theme-text-transition', 'color 0.4s ease-out');
  }, [colors]);
  
  return (
    <ThemeContext.Provider value={{ zone, colors, lightToBlue, blueToDark }}>
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

