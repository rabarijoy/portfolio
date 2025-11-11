'use client';

import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-50 font-helvetica pb-0 mb-0">
      {/* Ligne noire de séparation en haut - même padding que la navbar */}
      <div className="px-[4vw] lg:px-[5vw]">
        <div className="w-full h-[5px] bg-black" />
      </div>

      {/* Ellipse bleue floue en bas - au-dessus du fond mais en dessous du contenu */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[180px] bg-blue-accent rounded-full transform translate-y-1/2 blur-[100px] will-change-[filter] pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Contenu du footer avec overflow-hidden pour masquer ce qui dépasse après le copyright */}
      <div className="relative z-10 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-[6vw] lg:px-[7vw] py-8 lg:py-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8">
          {/* Colonne gauche */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-helvetica font-bold text-[20px] lg:text-[22px] text-black mb-2">
                Aina Joy Rabarijaona
              </h3>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={16} className="text-gray-500" />
                <span className="font-helvetica text-[15px] lg:text-[16px]">
                  Antananarivo, Madagascar
                </span>
              </div>
            </div>
          </div>

          {/* Colonne droite */}
          <div className="flex flex-col gap-3">
            {/* Contact */}
            <div className="flex flex-col gap-3">
              <a 
                href="mailto:rabarijaonajoy@gmail.com" 
                className="flex items-center gap-2 text-gray-700 hover:text-blue-accent transition-colors group"
              >
                <Mail size={16} className="text-gray-500 group-hover:text-blue-accent transition-colors" />
                <span className="font-helvetica text-[15px] lg:text-[16px]">
                  rabarijaonajoy@gmail.com
                </span>
              </a>
              
              <a 
                href="tel:+261343260892" 
                className="flex items-center gap-2 text-gray-700 hover:text-blue-accent transition-colors group"
              >
                <Phone size={16} className="text-gray-500 group-hover:text-blue-accent transition-colors" />
                <span className="font-helvetica text-[15px] lg:text-[16px]">
                  +261 34 32 608 92
                </span>
              </a>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/joyrabari"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-accent transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-gray-500 group-hover:text-blue-accent transition-colors" />
                <span className="font-helvetica text-[15px] lg:text-[16px]">
                  LinkedIn
                </span>
              </a>
              
              <a
                href="https://github.com/rabarijoy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-accent transition-colors group"
                aria-label="GitHub"
              >
                <Github size={18} className="text-gray-500 group-hover:text-blue-accent transition-colors" />
                <span className="font-helvetica text-[15px] lg:text-[16px]">
                  GitHub
                </span>
              </a>
            </div>
          </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 pt-6" id="footer-copyright">
            <p className="font-helvetica text-[14px] text-gray-500 text-center">
              &copy; {currentYear} Aina Joy Rabarijaona
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
