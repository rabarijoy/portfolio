'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { MobileMenu } from './MobileMenu';
import { LanguageSwitcher } from './LanguageSwitcher';

function Company() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Navigate to home without reload
    const locale = pathname?.split('/')[1] || 'fr';
    router.push(`/${locale}`);
  };

  return (
    <a href="/" onClick={handleLogoClick} className="logo" data-name="Company">
      <div className="logo-text">
        <p>&lt;aina joy&gt;</p>
      </div>
    </a>
  );
}

function PrimaryButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="btn-header"
      data-name="Primary button"
    >
      <span>
        {children}
      </span>
    </button>
  );
}

function NavLinks({ activeSection }: { activeSection: string }) {
  const t = useTranslations('nav');

  const navItems = [
    { key: 'about', href: '#about' },
    { key: 'projects', href: '#projects' },
    { key: 'formation', href: '#formation' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {navItems.map((item) => (
        <a
          key={item.key}
          href={item.href}
          onClick={(e) => handleClick(e, item.href)}
          className={`nav-link ${activeSection === item.key ? 'nav-link-active' : ''}`}
        >
          {t(item.key)}
        </a>
      ))}
    </>
  );
}

interface HeaderProps {
  projectTitle?: string;
}

export function Header({ projectTitle }: HeaderProps = {}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (projectTitle) return; // Skip section observer on project pages
    
    const sections = ['about', 'projects', 'formation', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (sections.includes(id)) {
              setActiveSection(id);
            }
          }
        });
      },
      {
        rootMargin: '-100px 0px -66%',
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [projectTitle]);

  const t = useTranslations('nav');

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`header ${isScrolled ? 'header-scrolled' : 'header-transparent'}`}
      data-name="Header 1"
    >
      <div className="header-content">
        <div className="header-grid">
          {/* Logo à gauche */}
          <div className="header-left">
            <Company />
          </div>
          
          {/* Navigation au centre - Always visible when projectTitle, Desktop only otherwise */}
          <nav className="header-center">
            {projectTitle ? (
              <div className="nav-link-project-title">
                {projectTitle}
              </div>
            ) : (
              <>
                <NavLinks activeSection={activeSection} />
              </>
            )}
          </nav>

          {/* CTA Contact et Language Switcher à droite - Desktop only */}
          <div className="header-right">
            <LanguageSwitcher />
            {!projectTitle && (
              <PrimaryButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                {t('contact')}
              </PrimaryButton>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="header-mobile">
            <MobileMenu activeSection={activeSection} projectTitle={projectTitle} />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
