'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { MobileMenu } from './MobileMenu';

function Company() {
  return (
    <a href="#" className="flex gap-2 items-center cursor-pointer" data-name="Company">
      <div className="font-ppneuebit text-[27px] leading-[1.45] tracking-tighter-2 text-black transition-transform hover:scale-105">
        <p>&lt;aina joy&gt;</p>
      </div>
    </a>
  );
}

function PrimaryButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-black flex gap-2 items-center justify-center px-4 py-2.5 rounded-xl hover:bg-gray-800 transition-colors"
      data-name="Primary button"
    >
      <span className="font-helvetica font-medium text-[15px] text-white tracking-tight whitespace-nowrap">
        {children}
      </span>
    </button>
  );
}

function Buttons({ activeSection }: { activeSection: string }) {
  const t = useTranslations('nav');

  const navItems = [
    { key: 'about', href: '#about' },
    { key: 'projects', href: '#projects' },
    { key: 'services', href: '#services' },
  ];

  return (
    <nav className="flex flex-wrap gap-6 items-center" data-name="Buttons">
      {navItems.map((item) => (
        <a
          key={item.key}
          href={item.href}
          className={`font-helvetica font-medium text-[15px] tracking-tight whitespace-nowrap transition-colors ${
            activeSection === item.key ? 'text-black' : 'text-gray-neutral hover:text-black'
          }`}
        >
          {t(item.key)}
        </a>
      ))}
      <PrimaryButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
        {t('contact')}
      </PrimaryButton>
    </nav>
  );
}

export function Header() {
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
    const sections = ['about', 'projects', 'services', 'contact'];
    
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
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white' : 'bg-transparent'
      }`}
      data-name="Header 1"
    >
      <div className="flex flex-row items-center w-full">
        <div className="flex items-center justify-between px-[4vw] py-[2vh] lg:px-[5vw] lg:py-[2.5vh] w-full">
          <Company />
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <Buttons activeSection={activeSection} />
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobileMenu activeSection={activeSection} />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
