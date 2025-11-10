'use client';

import { Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-50 pt-12 pb-2 font-helvetica overflow-visible">
      <div className="max-w-screen-2xl mx-auto px-[6vw] lg:px-[7vw]">
        {/* Contenu principal avec alignement gauche/droite */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-8 md:gap-12 pb-6">
          {/* Colonne gauche */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-[18px] font-bold text-gray-900 mb-2">
                Aina Joy Rabarijaona
              </h3>
              <div className="flex items-center gap-2 text-[14px] text-gray-600">
                <MapPin size={14} className="text-gray-500" />
                <span>Antananarivo, Madagascar</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <a 
                href="mailto:rabarijaonajoy@gmail.com" 
                className="flex items-center gap-2 text-[14px] text-gray-700 hover:text-blue-accent transition-colors"
              >
                <Mail size={14} className="text-gray-500" />
                <span>rabarijaonajoy@gmail.com</span>
              </a>
              <a 
                href="tel:+261343260892" 
                className="flex items-center gap-2 text-[14px] text-gray-700 hover:text-blue-accent transition-colors"
              >
                <Phone size={14} className="text-gray-500" />
                <span>+261 34 32 608 92</span>
              </a>
            </div>
          </div>

          {/* Colonne droite */}
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="text-[15px] font-semibold text-gray-900 mb-3">
                Réseaux sociaux
              </h4>
              <div className="flex items-center gap-4">
                <a 
                  href="https://linkedin.com/in/joyrabari" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[14px] text-gray-700 hover:text-blue-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/joyrabari" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[14px] text-gray-700 hover:text-blue-accent transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-[15px] font-semibold text-gray-900 mb-3">
                Mentions légales
              </h4>
              <div className="flex flex-col gap-2 text-[13px] text-gray-600">
                <a href="#" className="hover:text-blue-accent transition-colors">
                  Mentions légales
                </a>
                <a href="#" className="hover:text-blue-accent transition-colors">
                  Politique de confidentialité
                </a>
                <a href="#" className="hover:text-blue-accent transition-colors">
                  CGU
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright en bas */}
        <div className="pt-4 border-t border-gray-200">
          <p className="text-[12px] text-gray-500 text-center">
            &copy; {currentYear} Aina Joy Rabarijaona. Tous droits réservés.
          </p>
        </div>
      </div>

      {/* Ellipse bleue floue en bas */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[140px] md:h-[180px] bg-blue-accent rounded-full transform translate-y-[80%] blur-[100px] z-[-1] will-change-[filter] overflow-visible"
        style={{ borderRadius: '100%' }}
      />
    </footer>
  );
}

