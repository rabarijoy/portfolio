'use client';

import { Mail, Linkedin, Github, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-8 pt-8 pb-6 border-t border-gray-800 font-helvetica overflow-visible">
      <div className="max-w-screen-2xl mx-auto px-[6vw] lg:px-[7vw]">
        {/* Contenu principal du footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* À propos */}
          <div>
            <h3 className="font-bold text-[18px] text-gray-900 mb-4">Joy Rabari</h3>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Développeur web passionné, spécialisé dans la création d'expériences web modernes et performantes.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-[16px] text-gray-900 mb-4">Navigation</h4>
            <ul className="space-y-2 text-[14px] text-gray-600">
              <li>
                <a href="#about" className="hover:text-blue-accent transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-accent transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="#formation" className="hover:text-blue-accent transition-colors">
                  Formation
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-accent transition-colors">
                  Compétences
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-[16px] text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-3 text-[14px] text-gray-600">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-blue-accent" />
                <a 
                  href="mailto:rabarijaonajoy@gmail.com" 
                  className="hover:text-blue-accent transition-colors"
                >
                  rabarijaonajoy@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-blue-accent" />
                <a 
                  href="tel:+261343260892" 
                  className="hover:text-blue-accent transition-colors"
                >
                  +261 34 32 608 92
                </a>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h4 className="font-bold text-[16px] text-gray-900 mb-4">Réseaux sociaux</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="https://linkedin.com/in/joyrabari" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[14px] text-gray-600 hover:text-blue-accent transition-colors"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/joyrabari" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[14px] text-gray-600 hover:text-blue-accent transition-colors"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Ligne de séparation et mentions légales */}
        <div className="border-t border-gray-200 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-gray-500">
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#" className="hover:text-blue-accent transition-colors">
                Mentions légales
              </a>
              <span className="hidden md:inline">•</span>
              <a href="#" className="hover:text-blue-accent transition-colors">
                Politique de confidentialité
              </a>
              <span className="hidden md:inline">•</span>
              <a href="#" className="hover:text-blue-accent transition-colors">
                CGU
              </a>
            </div>
            <p className="text-center md:text-right">
              &copy; {currentYear} Joy Rabari. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>

      {/* Ellipse bleue floue en bas - position fixe */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[140px] md:h-[180px] bg-blue-accent rounded-full transform translate-y-[80%] blur-[100px] z-[-1] will-change-[filter] overflow-visible"
        style={{ borderRadius: '100%' }}
      />
    </footer>
  );
}

