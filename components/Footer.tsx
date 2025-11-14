'use client';

import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer 
      className="relative font-helvetica"
      style={{
        backgroundColor: 'var(--theme-bg-primary)',
        color: 'var(--theme-text-primary)',
        transition: 'background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s ease'
      }}
    >
      {/* Ligne de séparation en haut */}
      <div className="max-w-screen-xl mx-auto px-[20px] lg:px-[40px]">
        <div 
          className="w-full h-[5px]"
          style={{
            backgroundColor: 'var(--theme-divider)',
            transition: 'background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
      </div>

      {/* Contenu du footer */}
      <div className="relative z-10 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-[20px] lg:px-[40px] py-8 lg:py-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8">
          {/* Colonne gauche */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 
                className="font-helvetica font-bold text-[20px] lg:text-[22px] mb-2"
                style={{ color: 'var(--theme-text-primary)' }}
              >
                Aina Joy Rabarijaona
              </h3>
              <div className="flex items-center gap-2" style={{ color: 'var(--theme-text-tertiary)' }}>
                <MapPin size={16} style={{ color: 'var(--theme-text-tertiary)' }} />
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
                className="flex items-center gap-2 transition-colors group"
                style={{
                  color: 'var(--theme-text-secondary)',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--theme-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--theme-text-secondary)';
                }}
              >
                <Mail 
                  size={16} 
                  style={{ 
                    color: 'var(--theme-text-tertiary)',
                    transition: 'color 0.3s ease'
                  }}
                  className="group-hover:transition-colors"
                />
                <span className="font-helvetica text-[15px] lg:text-[16px]">
                  rabarijaonajoy@gmail.com
                </span>
              </a>
              
              <a 
                href="tel:+261343260892" 
                className="flex items-center gap-2 transition-colors group"
                style={{
                  color: 'var(--theme-text-secondary)',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--theme-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--theme-text-secondary)';
                }}
              >
                <Phone 
                  size={16} 
                  style={{ 
                    color: 'var(--theme-text-tertiary)',
                    transition: 'color 0.3s ease'
                  }}
                  className="group-hover:transition-colors"
                />
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
                className="flex items-center gap-2 transition-colors group"
                style={{
                  color: 'var(--theme-text-secondary)',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--theme-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--theme-text-secondary)';
                }}
                aria-label="LinkedIn"
              >
                <Linkedin 
                  size={18} 
                  style={{ 
                    color: 'var(--theme-text-tertiary)',
                    transition: 'color 0.3s ease'
                  }}
                  className="group-hover:transition-colors"
                />
                <span className="font-helvetica text-[15px] lg:text-[16px]">
                  LinkedIn
                </span>
              </a>
              
              <a
                href="https://github.com/rabarijoy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors group"
                style={{
                  color: 'var(--theme-text-secondary)',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--theme-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--theme-text-secondary)';
                }}
                aria-label="GitHub"
              >
                <Github 
                  size={18} 
                  style={{ 
                    color: 'var(--theme-text-tertiary)',
                    transition: 'color 0.3s ease'
                  }}
                  className="group-hover:transition-colors"
                />
                <span className="font-helvetica text-[15px] lg:text-[16px]">
                  GitHub
                </span>
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
