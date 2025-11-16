'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { GraduationCap, Code } from 'lucide-react';
import { Section } from '../ui/Section';

// Images placeholder - À remplacer par les vraies images
const FORMATION_IMAGE_PLACEHOLDER = 'https://i.pinimg.com/1200x/7f/fa/70/7ffa706f44b09ba67a96c63cc2c2ad4b.jpg';
const CAREER_IMAGE_PLACEHOLDER = 'https://i.pinimg.com/1200x/7f/fa/70/7ffa706f44b09ba67a96c63cc2c2ad4b.jpg';

export function Formation() {
  const t = useTranslations('formation');
  const tTechWatch = useTranslations('techWatch');
  const tSkills = useTranslations('skills');

  return (
    <Section id="formation" background="white" withSubtleSeparator>
      <div className="container">
        {/* Section Title - Single title for both columns */}
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

        <div className="formation-grid">
          {/* Colonne gauche : Ma formation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Image placeholder - Formation */}
              <div className="formation-image">
                <img 
                  src={FORMATION_IMAGE_PLACEHOLDER}
                  alt="Formation"
                />
              </div>

              <div className="card-formation">
                <div className="card-formation-header">
                  <div className="card-formation-icon">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="card-formation-title">
                    {t('training.degree.name')}
                  </h3>
                </div>

                <p className="formation-info-text" style={{ marginBottom: '24px' }}>
                  {t('training.degree.subtitle')}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <p className="formation-info-text" style={{ marginBottom: '16px' }}>
                      {t('training.description.intro')}
                    </p>
                  </div>

                  <div>
                    <h4 style={{ fontFamily: "'Hanken Grotesk', Arial, sans-serif", fontWeight: 700, fontSize: '16px', color: '#000000', marginBottom: '12px' }}>
                      {t('training.description.skills_title')}
                    </h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                      {['skill1', 'skill2', 'skill3', 'skill4'].map((skill, index) => (
                        <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                          <div className="card-skill-bullet" style={{ width: '8px', height: '8px', marginTop: '8px' }} />
                          <span className="card-skill-text">
                            {t(`training.description.${skill}`)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <a
                  href="https://www.onisep.fr/ressources/univers-formation/formations/post-bac/bts-services-informatiques-aux-organisations-option-b-solutions-logicielles-et-applications-metiers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tertiary"
                >
                  <span>{t('training.see_more')}</span>
                  <span className="btn-tertiary-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </a>
              </div>

              <div className="formation-info-box">
                <h4 className="formation-info-title">
                  {t('training.stages.title')}
                </h4>
                <p className="formation-info-text">
                  {t('training.stages.text')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Colonne droite : Métiers visés */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Image placeholder - Projet professionnel */}
              <div className="formation-image">
                <img 
                  src={CAREER_IMAGE_PLACEHOLDER}
                  alt="Projet professionnel"
                />
              </div>

              <div className="card-formation">
                <div className="card-formation-header">
                  <div className="card-formation-icon">
                    <Code size={24} />
                  </div>
                  <h3 className="card-formation-title">
                    {t('careers.main.title')}
                  </h3>
                </div>

                <p className="formation-info-text" style={{ marginBottom: '24px' }}>
                  {t('careers.main.description')}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <h4 style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 700, fontSize: '16px', color: '#000000', marginBottom: '8px' }}>
                      {t('careers.main.missions_title')}
                    </h4>
                    <p className="card-skill-text">
                      {t('careers.main.missions_text')}
                    </p>
                  </div>

                  <div>
                    <h4 style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 700, fontSize: '16px', color: '#000000', marginBottom: '8px' }}>
                      {t('careers.main.skills_title')}
                    </h4>
                    <p className="card-skill-text" style={{ marginBottom: '24px' }}>
                      {t('careers.main.skills_text')}
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  className="btn-tertiary"
                >
                  <span>{t('careers.see_more')}</span>
                  <span className="btn-tertiary-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </a>
              </div>

              <div className="formation-info-box">
                <h4 className="formation-info-title">
                  {t('careers.vision.title')}
                </h4>
                <p className="formation-info-text">
                  {t('careers.vision.text')}
                </p>
              </div>
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
                  <div className="techwatch-card-arrow-container">
                    <button className="techwatch-card-arrow" type="button" title="Click here">
                      <div className="techwatch-card-arrow-icon">
                        <svg width="31" height="28" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.857198 13.7372L27.9141 13.7372" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                          <path d="M15.4561 1.39417L27.9142 13.8522L15.4561 26.3104" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </button>
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

