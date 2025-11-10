'use client';

import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('common');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-8 pt-6 border-t border-gray-800 font-helvetica">
      {/* Ellipse bleue floue en bas */}
      <div className="absolute bottom-0 left-0 w-full h-[180px] md:h-[180px] sm:h-[140px] bg-blue-accent rounded-full transform translate-y-1/2 blur-[100px] will-change-[filter] pointer-events-none" />

      {/* Contenu du footer */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center text-[0.9rem] sm:text-[0.95rem] text-gray-800 gap-4 px-[6vw] lg:px-[7vw] pb-6 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <div className="hidden sm:block w-1 h-1 bg-gray-800 rounded-full" />
          <a href="mailto:rabarijaonajoy@gmail.com" className="hover:text-blue-accent transition-colors">
            rabarijaonajoy@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden sm:block w-1 h-1 bg-gray-800 rounded-full" />
          <a href="tel:+261343260892" className="hover:text-blue-accent transition-colors">
            +261 34 32 608 92
          </a>
        </div>
      </div>
    </footer>
  );
}

