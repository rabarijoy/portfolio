'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Scroll to top on page load
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      // Also handle browser back/forward buttons
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return null;
}
