'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Section } from '../ui/Section';
import Image from 'next/image';

export function About() {
  const tHero = useTranslations('hero');

  return (
    <Section id="about" background="gray" className="!py-0">
      <div className="about-section">
        {/* Image ferrée à droite - 100% hauteur */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="about-image-wrapper"
        >
          <Image
            src="/hero.png"
            alt="Illustration"
            fill
            className="about-image"
            priority
          />
          {/* Gradient overlay de gauche à droite avec transitions progressives */}
          <div className="absolute inset-0 bg-gradient-about-overlay"></div>
        </motion.div>

        {/* Hero Content - Title and CTA */}
        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-text-wrapper"
          >
            {/* Left side - Text Content */}
            <div className="about-text-content">
            {/* Heading with blue bar */}
            <div className="about-heading-wrapper">
              {/* Blue bar positioned behind "Rabarijaona" */}
              <div className="about-blue-bar"></div>
              
              <h1 className="about-title-line1">
                Aina Joy
              </h1>
              <h1 className="about-title-line2">
                <span className="about-title-line2-part1">Rabarijaona</span>
                <span className="about-title-line2-part2">.</span>
              </h1>
            </div>

              {/* Subtitle */}
              <div className="about-subtitle">
                <p className="subtitle-hero">
                  {tHero('subtitle')}
                </p>
              </div>

              {/* Lorem ipsum paragraph */}
              <div className="about-paragraph">
                <p className="text-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              {/* Buttons */}
              <div className="about-buttons">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary"
                >
                  {tHero('contact')}
                </button>
                <button
                  onClick={() => {
                    // Télécharger CV action
                  }}
                  className="btn-secondary"
                >
                  {tHero('downloadCV')}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

