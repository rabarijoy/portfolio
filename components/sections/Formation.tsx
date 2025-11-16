'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { GraduationCap, Code, Bot, Shield, BookOpen, FileText, ExternalLink, Download } from 'lucide-react';
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
        <div className="formation-grid">
          {/* Colonne gauche : Ma formation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '24px' }}>
                <h2 className="title-section">
                  {t('training.title')}
                </h2>
              </div>
            </div>

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
                    <h4 style={{ fontFamily: "'Degular Display', Arial, sans-serif", fontWeight: 700, fontSize: '16px', color: '#000000', marginBottom: '12px' }}>
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
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '24px' }}>
                <h2 className="title-section">
                  {t('careers.title')}
                </h2>
              </div>
            </div>

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

        {/* TechWatch Section */}
        <div style={{ marginTop: '100px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <div className="section-header-title">
              <h2 className="title-section">
                {tTechWatch('title')}
              </h2>
            </div>
          </motion.div>

          <div className="techwatch-grid">
            {[
              {
                icon: Bot,
                titleKey: 'ai.title',
                descriptionKey: 'ai.description',
                resourcesKey: 'ai.resources',
                gradient: 'from-blue-50 to-white',
                borderColor: 'border-blue-accent',
                iconBg: 'bg-blue-accent',
              },
              {
                icon: Shield,
                titleKey: 'cybersecurity.title',
                descriptionKey: 'cybersecurity.description',
                resourcesKey: 'cybersecurity.resources',
                gradient: 'from-blue-50 to-white',
                borderColor: 'border-blue-accent',
                iconBg: 'bg-blue-accent',
              },
            ].map((topic, index) => {
              const IconComponent = topic.icon;
              return (
                <motion.div
                  key={topic.titleKey}
                  initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex flex-col gap-6"
                >
                  {/* Image placeholder - Veille informationnelle */}
                  <div className="formation-image image-placeholder-hover">
                    <img 
                      src={FORMATION_IMAGE_PLACEHOLDER}
                      alt={tTechWatch(topic.titleKey)}
                    />
                  </div>

                  <div className="card-formation">
                    <div className="card-formation-header">
                      <div className="card-formation-icon">
                        <IconComponent size={24} />
                      </div>
                      <h3 className="card-formation-title">
                        {tTechWatch(topic.titleKey)}
                      </h3>
                    </div>

                    <p className="formation-info-text" style={{ marginBottom: '24px' }}>
                      {tTechWatch(topic.descriptionKey)}
                    </p>

                    {/* Resources Section */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <h4 style={{ fontFamily: "'Degular Display', Arial, sans-serif", fontWeight: 600, fontSize: '16px', color: '#000000', marginBottom: '12px' }}>
                        Ressources
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {tTechWatch.raw(topic.resourcesKey).map((resource: any, resourceIndex: number) => (
                          <a
                            key={resourceIndex}
                            href={resource.url || resource.downloadUrl || '#'}
                            target={resource.url ? '_blank' : undefined}
                            rel={resource.url ? 'noopener noreferrer' : undefined}
                            download={resource.downloadUrl ? true : undefined}
                            className="techwatch-resource"
                          >
                            <div className="techwatch-resource-icon-wrapper">
                              {resource.type === 'article' && (
                                <ExternalLink size={16} className="techwatch-resource-icon" />
                              )}
                              {resource.type === 'note' && (
                                <FileText size={16} className="techwatch-resource-icon" />
                              )}
                              {resource.type === 'reading' && (
                                <BookOpen size={16} className="techwatch-resource-icon" />
                              )}
                            </div>
                            <div className="techwatch-resource-content">
                              <p className="techwatch-resource-title">
                                {resource.title}
                              </p>
                              {resource.description && (
                                <p className="techwatch-resource-description">
                                  {resource.description}
                                </p>
                              )}
                            </div>
                            {resource.downloadUrl && (
                              <Download size={16} className="techwatch-resource-download" />
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}

