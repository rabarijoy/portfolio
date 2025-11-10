'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Brain, Shield } from 'lucide-react';
import { Section } from '../ui/Section';

export function Veille() {
  const t = useTranslations('veille');

  const themes = [
    {
      id: 'ai',
      icon: Brain,
      title: t('ai.title'),
      lines: [t('ai.line1'), t('ai.line2'), t('ai.line3')],
    },
    {
      id: 'cybersecurite',
      icon: Shield,
      title: t('cybersecurite.title'),
      lines: [t('cybersecurite.line1'), t('cybersecurite.line2'), t('cybersecurite.line3')],
    },
  ];

  return (
    <Section id="veille" background="gray" className="py-[80px]">
      <div className="max-w-screen-2xl mx-auto px-[6vw] lg:px-[7vw]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-helvetica font-bold text-[36px] lg:text-[42px] leading-[1.1] tracking-[-0.02em] text-black mb-4">
              {t('title')}
            </h2>
            <p className="font-helvetica text-[17px] lg:text-[19px] text-gray-600 max-w-[600px] mx-auto">
              {t('subtitle')}
            </p>
          </div>

          {/* Themes Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {themes.map((theme, index) => {
              const IconComponent = theme.icon;
              return (
                <motion.div
                  key={theme.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-accent transition-all"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-blue-accent flex items-center justify-center text-white">
                      <IconComponent size={28} />
                    </div>
                    <h3 className="font-helvetica font-bold text-[24px] lg:text-[28px] text-black">
                      {theme.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {theme.lines.map((line, lineIndex) => (
                      <p
                        key={lineIndex}
                        className="font-helvetica text-[15px] lg:text-[17px] leading-[1.7] text-gray-700"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

