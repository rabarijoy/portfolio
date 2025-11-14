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
    <Section id="formation" background="white" className="py-[120px] lg:py-[140px]" withSubtleSeparator>
      <div className="max-w-screen-xl mx-auto px-[20px] lg:px-[40px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Colonne gauche : Ma formation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="mb-6">
              <div className="flex flex-col items-start mb-6">
                <h2 className="font-ppneuebit text-[50px] lg:text-[58px] leading-[1.1] text-black mb-2">
                  &lt;formation&gt;
                </h2>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {/* Image placeholder - Formation */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <img 
                  src={FORMATION_IMAGE_PLACEHOLDER}
                  alt="Formation"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-accent rounded-2xl p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-accent flex items-center justify-center text-white">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="font-helvetica font-bold text-[24px] lg:text-[28px] text-black">
                    {t('training.degree.name')}
                  </h3>
                </div>

                <p className="font-helvetica text-[15px] lg:text-[17px] leading-[1.7] text-gray-700 mb-6">
                  {t('training.degree.subtitle')}
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="font-helvetica text-[15px] lg:text-[17px] leading-[1.7] text-gray-700 mb-4">
                      {t('training.description.intro')}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-helvetica font-bold text-[16px] text-black mb-3">
                      {t('training.description.skills_title')}
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {['skill1', 'skill2', 'skill3', 'skill4'].map((skill, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-accent mt-2 flex-shrink-0" />
                          <span className="font-helvetica text-[15px] lg:text-[16px] leading-[1.6] text-gray-600">
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
                  className="inline-flex items-center gap-2 font-helvetica font-medium text-[15px] text-blue-accent hover:text-blue-600 transition-colors"
                >
                  {t('training.see_more')}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
                <h4 className="font-helvetica font-bold text-[18px] text-black mb-4">
                  {t('training.stages.title')}
                </h4>
                <p className="font-helvetica text-[15px] lg:text-[17px] leading-[1.7] text-gray-700">
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
            <div className="mb-6">
              <div className="flex flex-col items-start mb-6">
                <h2 className="font-ppneuebit text-[50px] lg:text-[58px] leading-[1.1] text-black mb-2">
                  &lt;projet_professionnel&gt;
                </h2>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {/* Image placeholder - Projet professionnel */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <img 
                  src={CAREER_IMAGE_PLACEHOLDER}
                  alt="Projet professionnel"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-accent rounded-2xl p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-accent flex items-center justify-center text-white">
                    <Code size={24} />
                  </div>
                  <h3 className="font-helvetica font-bold text-[24px] lg:text-[28px] text-black">
                    {t('careers.main.title')}
                  </h3>
                </div>

                <p className="font-helvetica text-[15px] lg:text-[17px] leading-[1.7] text-gray-700 mb-6">
                  {t('careers.main.description')}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-helvetica font-bold text-[16px] text-black mb-2">
                      {t('careers.main.missions_title')}
                    </h4>
                    <p className="font-helvetica text-[15px] lg:text-[16px] leading-[1.6] text-gray-600">
                      {t('careers.main.missions_text')}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-helvetica font-bold text-[16px] text-black mb-2">
                      {t('careers.main.skills_title')}
                    </h4>
                    <p className="font-helvetica text-[15px] lg:text-[16px] leading-[1.6] text-gray-600 mb-6">
                      {t('careers.main.skills_text')}
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-helvetica font-medium text-[15px] text-blue-accent hover:text-blue-600 transition-colors"
                >
                  {t('careers.see_more')}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
                <h4 className="font-helvetica font-bold text-[18px] text-black mb-4">
                  {t('careers.vision.title')}
                </h4>
                <p className="font-helvetica text-[15px] lg:text-[17px] leading-[1.7] text-gray-700">
                  {t('careers.vision.text')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* TechWatch Section */}
        <div className="mt-[100px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex flex-col items-center mb-4">
              <h2 className="font-ppneuebit text-[50px] lg:text-[58px] leading-[1.1] text-black mb-2">
                &lt;veille_informationnelle&gt;
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
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
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] group">
                    <img 
                      src={FORMATION_IMAGE_PLACEHOLDER}
                      alt={tTechWatch(topic.titleKey)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  <div className={`bg-gradient-to-br ${topic.gradient} border-2 ${topic.borderColor} rounded-2xl p-6 lg:p-8`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${topic.iconBg} flex items-center justify-center text-white`}>
                        <IconComponent size={24} />
                      </div>
                      <h3 className="font-helvetica font-bold text-[24px] lg:text-[28px] text-black">
                        {tTechWatch(topic.titleKey)}
                      </h3>
                    </div>

                    <p className="font-helvetica text-[15px] lg:text-[17px] leading-[1.7] text-gray-700 mb-6">
                      {tTechWatch(topic.descriptionKey)}
                    </p>

                    {/* Resources Section */}
                    <div className="space-y-4">
                      <h4 className="font-helvetica font-semibold text-[16px] text-black mb-3">
                        Ressources
                      </h4>
                      <div className="space-y-3">
                        {tTechWatch.raw(topic.resourcesKey).map((resource: any, resourceIndex: number) => (
                          <a
                            key={resourceIndex}
                            href={resource.url || resource.downloadUrl || '#'}
                            target={resource.url ? '_blank' : undefined}
                            rel={resource.url ? 'noopener noreferrer' : undefined}
                            download={resource.downloadUrl ? true : undefined}
                            className="flex items-start gap-3 p-3 rounded-xl bg-white/60 hover:bg-white transition-all duration-200 group border border-transparent hover:border-blue-accent/30"
                          >
                            <div className="w-8 h-8 rounded-lg bg-blue-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-accent transition-colors">
                              {resource.type === 'article' && (
                                <ExternalLink size={16} className="text-blue-accent group-hover:text-white transition-colors" />
                              )}
                              {resource.type === 'note' && (
                                <FileText size={16} className="text-blue-accent group-hover:text-white transition-colors" />
                              )}
                              {resource.type === 'reading' && (
                                <BookOpen size={16} className="text-blue-accent group-hover:text-white transition-colors" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-helvetica font-medium text-[15px] text-gray-900 group-hover:text-blue-accent transition-colors">
                                {resource.title}
                              </p>
                              {resource.description && (
                                <p className="font-helvetica text-[13px] text-gray-500 mt-0.5">
                                  {resource.description}
                                </p>
                              )}
                            </div>
                            {resource.downloadUrl && (
                              <Download size={16} className="text-gray-400 group-hover:text-blue-accent transition-colors flex-shrink-0" />
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

