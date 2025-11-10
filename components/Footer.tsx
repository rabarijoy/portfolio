'use client';

import { useTranslations } from 'next-intl';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Container } from './ui/Container';

export function Footer() {
  const t = useTranslations('common');
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Ellipse bleue floue */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[180px] bg-blue-accent rounded-[100%] translate-y-1/2 blur-[100px] pointer-events-none"
        style={{ 
          zIndex: 1,
          willChange: 'filter'
        }}
        aria-hidden="true"
      />

      {/* Footer */}
      <footer className="relative bg-gray-50/90 py-12 font-helvetica overflow-hidden" style={{ zIndex: 3 }}>
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12">
            {/* Colonne gauche */}
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="font-helvetica font-bold text-[20px] lg:text-[22px] text-black mb-2">
                  Aina Joy Rabarijaona
                </h3>
                <div className="flex items-center gap-2 text-gray-600 font-helvetica text-[15px]">
                  <MapPin size={16} className="text-gray-500" />
                  <span>Antananarivo, Madagascar</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <a 
                  href="mailto:rabarijaonajoy@gmail.com" 
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-accent transition-colors font-helvetica text-[15px]"
                >
                  <Mail size={16} className="text-gray-500" />
                  <span>rabarijaonajoy@gmail.com</span>
                </a>
                <a 
                  href="tel:+261343260892" 
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-accent transition-colors font-helvetica text-[15px]"
                >
                  <Phone size={16} className="text-gray-500" />
                  <span>+261 34 32 608 92</span>
                </a>
              </div>
            </div>

            {/* Colonne droite */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h4 className="font-helvetica font-semibold text-[16px] text-black mb-2">
                  Réseaux sociaux
                </h4>
                <div className="flex flex-col gap-2">
                  <a 
                    href="https://linkedin.com/in/joyrabari" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-accent transition-colors font-helvetica text-[15px]"
                  >
                    <Linkedin size={16} className="text-gray-500" />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href="https://github.com/rabarijoy" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-accent transition-colors font-helvetica text-[15px]"
                  >
                    <Github size={16} className="text-gray-500" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 mt-8 pt-6 text-center">
            <p className="font-helvetica text-[14px] text-gray-600">
              &copy; {currentYear} Aina Joy Rabarijaona. Tous droits réservés.
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
}

