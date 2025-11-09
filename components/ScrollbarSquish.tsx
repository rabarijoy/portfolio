'use client';

import { useEffect } from 'react';

export function ScrollbarSquish() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollBottom = scrollHeight - clientHeight - scrollTop;

      // Détection en haut (avec une petite marge de 5px)
      if (scrollTop <= 5) {
        document.body.classList.add('scroll-at-top');
      } else {
        document.body.classList.remove('scroll-at-top');
      }

      // Détection en bas (avec une petite marge de 5px)
      if (scrollBottom <= 5) {
        document.body.classList.add('scroll-at-bottom');
      } else {
        document.body.classList.remove('scroll-at-bottom');
      }
    };

    // Exécuter au chargement
    handleScroll();

    // Écouter le scroll
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('scroll-at-top', 'scroll-at-bottom');
    };
  }, []);

  return null;
}

