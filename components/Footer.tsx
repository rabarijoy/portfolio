'use client';

import { useTranslations } from 'next-intl';
import { Container } from './ui/Container';

export function Footer() {
  const t = useTranslations('common');
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', href: '#', icon: '🔗' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Email', href: 'mailto:rabarijaonajoy@gmail.com', icon: '✉️' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 font-helvetica">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Joy Rabari</h3>
            <p className="text-sm">
              Développeur web passionné, spécialisé dans la création d'expériences web modernes et performantes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Restons connectés</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-xl"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Joy Rabari. Tous droits réservés.</p>
        </div>
      </Container>
    </footer>
  );
}

