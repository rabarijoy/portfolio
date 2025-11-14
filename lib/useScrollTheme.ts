'use client';

import { useEffect, useState } from 'react';

export type ThemeZone = 'light' | 'blue' | 'dark';

interface ThemeProgress {
  zone: ThemeZone;
  progress: number; // 0-1, progression dans la zone actuelle
  lightToBlue: number; // 0-1, transition entre light et blue
  blueToDark: number; // 0-1, transition entre blue et dark
}

export function useScrollTheme(): ThemeProgress {
  const [themeProgress, setThemeProgress] = useState<ThemeProgress>({
    zone: 'light',
    progress: 0,
    lightToBlue: 0,
    blueToDark: 0,
  });

  useEffect(() => {
    const getSectionPositions = () => {
      const aboutSection = document.getElementById('about');
      const projectsSection = document.getElementById('projects');
      const formationSection = document.getElementById('formation');
      
      if (!aboutSection || !projectsSection || !formationSection) {
        return null;
      }

      return {
        aboutTop: aboutSection.offsetTop,
        aboutHeight: aboutSection.offsetHeight,
        projectsTop: projectsSection.offsetTop,
        projectsHeight: projectsSection.offsetHeight,
        formationTop: formationSection.offsetTop,
      };
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      const positions = getSectionPositions();
      if (!positions) {
        // Si les sections ne sont pas encore chargées, réessayer après un court délai
        setTimeout(handleScroll, 100);
        return;
      }

      const { aboutTop, aboutHeight, projectsTop, formationTop } = positions;
      
      // Point de transition Light -> Blue (60% de la section About)
      const lightToBlueThreshold = aboutTop + aboutHeight * 0.6;
      
      // Point de transition Blue -> Dark (début de Formation)
      const blueToDarkThreshold = formationTop;
      
      // Zone de transition (30% de la hauteur de la fenêtre pour une transition douce)
      const transitionZone = windowHeight * 0.3;
      
      let zone: ThemeZone = 'light';
      let progress = 0;
      let lightToBlue = 0;
      let blueToDark = 0;
      
      if (scrollY < lightToBlueThreshold - transitionZone) {
        // Zone Light pure
        zone = 'light';
        progress = Math.min(1, scrollY / (lightToBlueThreshold - transitionZone));
        lightToBlue = 0;
        blueToDark = 0;
      } else if (scrollY < lightToBlueThreshold + transitionZone) {
        // Transition Light -> Blue
        zone = 'light';
        const transitionStart = lightToBlueThreshold - transitionZone;
        const transitionEnd = lightToBlueThreshold + transitionZone;
        lightToBlue = Math.max(0, Math.min(1, (scrollY - transitionStart) / (transitionEnd - transitionStart)));
        progress = 1 - lightToBlue;
        blueToDark = 0;
      } else if (scrollY < blueToDarkThreshold - transitionZone) {
        // Zone Blue pure
        zone = 'blue';
        const blueStart = lightToBlueThreshold + transitionZone;
        const blueEnd = blueToDarkThreshold - transitionZone;
        progress = Math.min(1, (scrollY - blueStart) / (blueEnd - blueStart));
        lightToBlue = 1;
        blueToDark = 0;
      } else if (scrollY < blueToDarkThreshold + transitionZone) {
        // Transition Blue -> Dark
        zone = 'blue';
        const transitionStart = blueToDarkThreshold - transitionZone;
        const transitionEnd = blueToDarkThreshold + transitionZone;
        blueToDark = Math.max(0, Math.min(1, (scrollY - transitionStart) / (transitionEnd - transitionStart)));
        lightToBlue = 1;
        progress = 1 - blueToDark;
      } else {
        // Zone Dark pure
        zone = 'dark';
        const darkStart = blueToDarkThreshold + transitionZone;
        progress = Math.min(1, (scrollY - darkStart) / (windowHeight * 2)); // Progression dans le dark
        lightToBlue = 1;
        blueToDark = 1;
      }
      
      setThemeProgress({
        zone,
        progress,
        lightToBlue,
        blueToDark,
      });
    };

    // Initial call
    handleScroll();
    
    // Throttle pour performance
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
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return themeProgress;
}

