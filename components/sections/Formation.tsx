'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { GraduationCap, Code } from 'lucide-react';
import { Section } from '../ui/Section';

export function Formation() {
  const t = useTranslations('formation');

  return (
    <Section id="formation" background="white" className="py-[80px]">
      <div className="max-w-screen-2xl mx-auto px-[6vw] lg:px-[7vw]">
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
              {/* Image placeholder - Formation - TODO: Replace with actual image URL */}
              <div className="w-full h-[200px] lg:h-[250px] rounded-2xl overflow-hidden mb-6">
                <img 
                  src="https://i.pinimg.com/1200x/7f/fa/70/7ffa706f44b09ba67a96c63cc2c2ad4b.jpg"
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
              {/* Image placeholder - Projet professionnel - TODO: Replace with actual image URL */}
              <div className="w-full h-[200px] lg:h-[250px] rounded-2xl overflow-hidden mb-6">
                <img 
                  src="https://i.pinimg.com/1200x/7f/fa/70/7ffa706f44b09ba67a96c63cc2c2ad4b.jpg"
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
      </div>
    </Section>
  );
}

