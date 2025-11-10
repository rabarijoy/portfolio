'use client';

import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-8 pt-8 pb-6 border-t border-gray-800 font-helvetica overflow-visible">
      <div className="max-w-screen-2xl mx-auto px-[6vw] lg:px-[7vw]">
        {/* Contact et Réseaux sociaux */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-gray-600" />
              <a 
                href="mailto:rabarijaonajoy@gmail.com" 
                className="text-[14px] text-gray-800 hover:text-blue-accent transition-colors"
              >
                rabarijaonajoy@gmail.com
              </a>
            </div>
            
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-gray-600" />
              <a 
                href="tel:+261343260892" 
                className="text-[14px] text-gray-800 hover:text-blue-accent transition-colors"
              >
                +261 34 32 608 92
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://linkedin.com/in/joyrabari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://github.com/joyrabari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>

        {/* Mentions légales et Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-[12px] text-gray-600">
            <a href="#" className="hover:text-blue-accent transition-colors">
              Mentions légales
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="#" className="hover:text-blue-accent transition-colors">
              Politique de confidentialité
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="#" className="hover:text-blue-accent transition-colors">
              CGU
            </a>
          </div>
          <p className="text-[12px] text-gray-600 text-center sm:text-right">
            &copy; {currentYear} Joy Rabari. Tous droits réservés.
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

