'use client';

import { Linkedin, Github } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-16 pt-12 pb-4 font-helvetica overflow-visible">
      <div className="max-w-screen-2xl mx-auto px-[6vw] lg:px-[7vw]">
        {/* Contenu principal centré */}
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Contact */}
          <div className="flex flex-col items-center gap-3">
            <a 
              href="mailto:rabarijaonajoy@gmail.com" 
              className="text-[15px] text-gray-700 hover:text-gray-900 transition-colors"
            >
              rabarijaonajoy@gmail.com
            </a>
            <a 
              href="tel:+261343260892" 
              className="text-[15px] text-gray-700 hover:text-gray-900 transition-colors"
            >
              +261 34 32 608 92
            </a>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex items-center gap-6">
            <a 
              href="https://linkedin.com/in/joyrabari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/joyrabari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Séparateur */}
          <div className="w-12 h-px bg-gray-300" />

          {/* Mentions légales */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-[13px] text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">
              Mentions légales
            </a>
            <span className="text-gray-300">•</span>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Politique de confidentialité
            </a>
            <span className="text-gray-300">•</span>
            <a href="#" className="hover:text-gray-900 transition-colors">
              CGU
            </a>
          </div>

          {/* Copyright */}
          <p className="text-[12px] text-gray-400">
            &copy; {currentYear} Joy Rabari
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

