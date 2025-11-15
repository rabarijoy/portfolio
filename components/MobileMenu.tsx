'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './LanguageSwitcher';

export function MobileMenu({ activeSection }: { activeSection: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('nav');

  const menuItems = [
    { key: 'about', href: '#about' },
    { key: 'projects', href: '#projects' },
    { key: 'formation', href: '#formation' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href?: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetHref = href || (e.currentTarget as HTMLAnchorElement).href.split('#')[1];
    if (targetHref) {
      const element = document.querySelector(`#${targetHref}`);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  };

  // Bloquer le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup au démontage
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <>
            {/* Croix */}
            <span className="absolute w-6 h-0.5 bg-black rotate-45"></span>
            <span className="absolute w-6 h-0.5 bg-black -rotate-45"></span>
          </>
        ) : (
          <>
            {/* Hamburger */}
            <span className="absolute w-6 h-0.5 bg-black -translate-y-2"></span>
            <span className="absolute w-6 h-0.5 bg-black"></span>
            <span className="absolute w-6 h-0.5 bg-black translate-y-2"></span>
          </>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />

            {/* Menu Panel - Full Screen */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-white/95 blur-backdrop z-40 lg:hidden overflow-hidden"
            >
              <nav className="flex flex-col items-center justify-center h-full px-[5vw] overflow-y-auto overscroll-contain">
                <ul className="flex flex-col gap-2 w-full max-w-xs">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.key}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.a
                        href={item.href}
                        onClick={(e) => handleLinkClick(e, item.href.replace('#', ''))}
                        whileTap={{ scale: 0.95 }}
                        className={`block font-helvetica font-medium text-[18px] tracking-tight text-center py-4 px-6 rounded-xl transition-colors ${
                          activeSection === item.key 
                            ? 'bg-gray-100 text-black' 
                            : 'text-black hover:bg-gray-50 active:bg-gray-100'
                        }`}
                      >
                        {t(item.key)}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
                
                {/* Call to Action Button */}
                <motion.div 
                  className="mt-8 w-full max-w-xs"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                >
                  <motion.button
                    onClick={() => {
                      handleLinkClick();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-black flex gap-2 items-center justify-center px-6 py-4 rounded-xl active:bg-gray-800 transition-colors"
                  >
                    <span className="font-helvetica font-medium text-[18px] text-white tracking-tight">
                      {t('contact')}
                    </span>
                  </motion.button>
                </motion.div>

                     {/* Language Switcher */}
                     <motion.div 
                       className="mt-6 w-full max-w-xs"
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: (menuItems.length + 1) * 0.1 }}
                     >
                       <LanguageSwitcher mobile={true} />
                     </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

