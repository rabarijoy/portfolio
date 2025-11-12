'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Bot, Shield, BookOpen, FileText, ExternalLink, Download } from 'lucide-react';
import { Section } from '../ui/Section';

// Images placeholder - À remplacer par les vraies images
const TECHWATCH_IMAGE_PLACEHOLDER = 'https://i.pinimg.com/1200x/7f/fa/70/7ffa706f44b09ba67a96c63cc2c2ad4b.jpg';

interface Resource {
  type: 'article' | 'note' | 'reading';
  title: string;
  url?: string;
  downloadUrl?: string;
}

export function TechWatch() {
  const t = useTranslations('techWatch');

  const topics = [
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
  ];

  return (
    <Section id="tech-watch" background="white" className="py-[80px]">
      <div className="max-w-screen-2xl mx-auto px-[6vw] lg:px-[7vw]">
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
          {topics.map((topic, index) => {
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
                    src={TECHWATCH_IMAGE_PLACEHOLDER}
                    alt={t(topic.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                <div className={`bg-gradient-to-br ${topic.gradient} border-2 ${topic.borderColor} rounded-2xl p-6 lg:p-8`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${topic.iconBg} flex items-center justify-center text-white`}>
                      <IconComponent size={24} />
                    </div>
                    <h3 className="font-helvetica font-bold text-[24px] lg:text-[28px] text-black">
                      {t(topic.titleKey)}
                    </h3>
                  </div>

                  <p className="font-helvetica text-[15px] lg:text-[17px] leading-[1.7] text-gray-700 mb-6">
                    {t(topic.descriptionKey)}
                  </p>

                  {/* Resources Section */}
                  <div className="space-y-4">
                    <h4 className="font-helvetica font-semibold text-[16px] text-black mb-3">
                      Ressources
                    </h4>
                    <div className="space-y-3">
                      {t.raw(topic.resourcesKey).map((resource: any, resourceIndex: number) => (
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
    </Section>
  );
}

