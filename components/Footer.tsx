'use client';

import { useTranslations } from 'next-intl';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const t = useTranslations('common');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-50 py-12 font-helvetica overflow-hidden">
      {/* Ellipse bleue floue en bas */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[180px] bg-blue-accent rounded-full transform translate-y-1/2 blur-[100px] will-change-transform"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      />

      {/* Contenu du footer */}
      <div className="relative z-10 max-w-screen-2xl mx-auto px-[6vw] lg:px-[7vw]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
          {/* Colonne gauche */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-gray-600" />
              <span className="font-helvetica text-[15px] text-gray-700">
                Antananarivo, Madagascar
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-helvetica font-bold text-[18px] text-black">
                Aina Joy Rabarijaona
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-[14px] text-gray-600">
                <a 
                  href="mailto:rabarijaonajoy@gmail.com" 
                  className="flex items-center gap-2 hover:text-blue-accent transition-colors"
                >
                  <Mail size={14} />
                  <span>rabarijaonajoy@gmail.com</span>
                </a>
                <a 
                  href="tel:+261343260892" 
                  className="flex items-center gap-2 hover:text-blue-accent transition-colors"
                >
                  <Phone size={14} />
                  <span>+261 34 32 608 92</span>
                </a>
              </div>
            </div>
          </div>

          {/* Colonne droite */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/rabarijoy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[14px] text-gray-600 hover:text-blue-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/joyrabari"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[14px] text-gray-600 hover:text-blue-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
            <p className="font-helvetica text-[13px] text-gray-500">
              &copy; {currentYear} Aina Joy Rabarijaona. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
