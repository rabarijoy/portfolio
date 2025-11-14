'use client';

import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="footer">
      {/* Ligne noire de séparation en haut */}
      <div className="footer-separator">
        <div className="footer-separator-line" />
      </div>

      {/* Contenu du footer */}
      <div className="footer-content">
        <div className="footer-inner">
          <div className="footer-grid">
            {/* Colonne gauche */}
            <div className="footer-left">
              <div>
                <h3 className="footer-name">
                  Aina Joy Rabarijaona
                </h3>
                <div className="footer-location">
                  <MapPin size={16} className="footer-location-icon" />
                  <span className="footer-location-text">
                    Antananarivo, Madagascar
                  </span>
                </div>
              </div>
            </div>

            {/* Colonne droite */}
            <div className="footer-right">
              {/* Contact */}
              <div className="footer-contact-group">
                <a 
                  href="mailto:rabarijaonajoy@gmail.com" 
                  className="footer-link"
                >
                  <Mail size={16} className="footer-link-icon" />
                  <span className="footer-link-text">
                    rabarijaonajoy@gmail.com
                  </span>
                </a>
                
                <a 
                  href="tel:+261343260892" 
                  className="footer-link"
                >
                  <Phone size={16} className="footer-link-icon" />
                  <span className="footer-link-text">
                    +261 34 32 608 92
                  </span>
                </a>
              </div>

              {/* Réseaux sociaux */}
              <div className="footer-social">
                <a
                  href="https://www.linkedin.com/in/joyrabari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} className="footer-link-icon" />
                  <span className="footer-link-text">
                    LinkedIn
                  </span>
                </a>
                
                <a
                  href="https://github.com/rabarijoy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  aria-label="GitHub"
                >
                  <Github size={18} className="footer-link-icon" />
                  <span className="footer-link-text">
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
