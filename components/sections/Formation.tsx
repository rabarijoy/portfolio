'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Section } from '../ui/Section';

// Images placeholder - À remplacer par les vraies images
const FORMATION_IMAGE_PLACEHOLDER = 'https://i.pinimg.com/1200x/7f/fa/70/7ffa706f44b09ba67a96c63cc2c2ad4b.jpg';
const CAREER_IMAGE_PLACEHOLDER = 'https://i.pinimg.com/1200x/7f/fa/70/7ffa706f44b09ba67a96c63cc2c2ad4b.jpg';

export function Formation() {
  const t = useTranslations('formation');
  const tTechWatch = useTranslations('techWatch');

  return (
    <Section id="formation" background="white" withSubtleSeparator>
      <div className="container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div className="section-header-title" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
            <h2 className="title-section">
              {t('title')}
            </h2>
          </div>
        </motion.div>

        {/* Cards Container - Two columns side by side */}
        <div className="formation-cards-container">
          {/* Card 1: Formation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="formation-card formation-card-secondary"
          >
            <div className="formation-card-header">
              <h2 className="formation-card-title">
                {t('training.degree.name')}
              </h2>
              <p className="formation-card-description">
                {t('training.degree.subtitle')}
              </p>
            </div>
            <div className="formation-card-image">
              <img 
                src={FORMATION_IMAGE_PLACEHOLDER}
                alt={t('training.degree.name')}
              />
              <a
                href="https://www.onisep.fr/ressources/univers-formation/formations/post-bac/bts-services-informatiques-aux-organisations-option-b-solutions-logicielles-et-applications-metiers"
                target="_blank"
                rel="noopener noreferrer"
                className="formation-card-read-more"
              >
                {t('training.see_more')}
              </a>
            </div>
          </motion.div>

          {/* Card 2: Parcours Pro */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="formation-card formation-card-primary"
          >
            <div className="formation-card-header">
              <h2 className="formation-card-title">
                {t('careers.main.title')}
              </h2>
              <p className="formation-card-description">
                {t('careers.main.description')}
              </p>
            </div>
            <div className="formation-card-image">
              <img 
                src={CAREER_IMAGE_PLACEHOLDER}
                alt={t('careers.main.title')}
              />
              <a
                href="#"
                className="formation-card-read-more"
              >
                {t('careers.see_more')}
              </a>
            </div>
          </motion.div>
        </div>

        {/* TechWatch Section - New Design */}
        <div style={{ marginTop: '100px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <div className="section-header-title" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
              <h2 className="title-section">
                {tTechWatch('title')}
              </h2>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <div className="techwatch-cards-grid">
            {[
              {
                titleKey: 'ai.title',
                descriptionKey: 'ai.description',
              },
              {
                titleKey: 'cybersecurity.title',
                descriptionKey: 'cybersecurity.description',
              },
              {
                titleKey: 'ai.title',
                descriptionKey: 'ai.description',
              },
            ].map((topic, index) => (
              <motion.div
                key={`${topic.titleKey}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="techwatch-card"
              >
                <div className="techwatch-card-image">
                  <img 
                    src={FORMATION_IMAGE_PLACEHOLDER}
                    alt={tTechWatch(topic.titleKey)}
                  />
                  <div className="techwatch-card-hover-overlay">
                    <a href="#" className="btn-tertiary techwatch-card-see-more">
                      <span>{tTechWatch('see_more')}</span>
                    </a>
                  </div>
                </div>
                <div className="techwatch-card-content">
                  <h2 className="techwatch-card-title">
                    {tTechWatch(topic.titleKey)}
                  </h2>
                  {tTechWatch(topic.descriptionKey) && (
                    <p className="techwatch-card-description">
                      {tTechWatch(topic.descriptionKey)}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

