'use client';

import { useEffect } from 'react';

export function SmoothScroll() {
  useEffect(() => {
    let isScrolling = false;
    let currentScroll = window.scrollY;
    let targetScroll = window.scrollY;
    
    // Coefficient de friction (plus bas = plus lourd)
    const friction = 0.08;
    
    const smoothScroll = () => {
      if (Math.abs(targetScroll - currentScroll) > 0.5) {
        currentScroll += (targetScroll - currentScroll) * friction;
        window.scrollTo(0, currentScroll);
        isScrolling = true;
        requestAnimationFrame(smoothScroll);
      } else {
        isScrolling = false;
        currentScroll = targetScroll;
      }
    };
    
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      targetScroll += e.deltaY * 0.8;
      
      // Limites
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));
      
      if (!isScrolling) {
        smoothScroll();
      }
    };
    
    const handleTouchStart = () => {
      targetScroll = window.scrollY;
      currentScroll = window.scrollY;
    };
    
    // Activer le smooth scroll personnalisé uniquement sur desktop
    if (window.innerWidth > 1024) {
      window.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('touchstart', handleTouchStart);
      
      return () => {
        window.removeEventListener('wheel', handleWheel);
        window.removeEventListener('touchstart', handleTouchStart);
      };
    }
  }, []);

  return null;
}

