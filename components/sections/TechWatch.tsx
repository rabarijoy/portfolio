'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Bot, Shield } from 'lucide-react';
import { Section } from '../ui/Section';

export function TechWatch() {
  const t = useTranslations('techWatch');

  const topics = [
    {
      icon: Bot,
      titleKey: 'ai.title',
      descriptionKey: 'ai.description',
      pointsKey: 'ai.points',
      gradient: 'from-purple-50 to-white',
      borderColor: 'border-purple-500',
      iconBg: 'bg-purple-500',
    },
    {
      icon: Shield,
      titleKey: 'cybersecurity.title',
      descriptionKey: 'cybersecurity.description',
      pointsKey: 'cybersecurity.points',
      gradient: 'from-red-50 to-white',
      borderColor: 'border-red-500',
      iconBg: 'bg-red-500',
    },
  ];

  return (
    <Section id="tech-watch" background="gray" className="py-[80px]">
      <div className="max-w-screen-2xl mx-auto px-[6vw] lg:px-[7vw]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-helvetica font-bold text-[36px] lg:text-[42px] leading-[1.1] tracking-[-0.02em] text-black mb-4">
            {t('title')}
          </h2>
          <p className="font-helvetica text-[17px] lg:text-[19px] leading-[1.6] text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
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
                className={`bg-gradient-to-br ${topic.gradient} border-2 ${topic.borderColor} rounded-2xl p-6 lg:p-8`}
              >
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

                <ul className="space-y-3">
                  {t.raw(topic.pointsKey).map((point: string, pointIndex: number) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full ${topic.iconBg} mt-2 flex-shrink-0`} />
                      <span className="font-helvetica text-[15px] lg:text-[16px] leading-[1.6] text-gray-700">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

