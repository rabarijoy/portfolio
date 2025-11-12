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
      gradient: 'from-blue-50 to-white',
      borderColor: 'border-blue-accent',
      iconBg: 'bg-blue-accent',
    },
    {
      icon: Shield,
      titleKey: 'cybersecurity.title',
      descriptionKey: 'cybersecurity.description',
      pointsKey: 'cybersecurity.points',
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
                className={`bg-gradient-to-br ${topic.gradient} border-2 ${topic.borderColor} rounded-2xl p-6 lg:p-8`}
              >
                {/* Image placeholder - Veille informationnelle - TODO: Replace with actual image URL */}
                <div className="w-full h-[180px] lg:h-[220px] rounded-xl overflow-hidden mb-6">
                  <img 
                    src="https://i.pinimg.com/1200x/7f/fa/70/7ffa706f44b09ba67a96c63cc2c2ad4b.jpg"
                    alt={t(topic.titleKey)}
                    className="w-full h-full object-cover"
                  />
                </div>
                
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
                      <div className="w-2 h-2 rounded-full bg-blue-accent mt-2 flex-shrink-0" />
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

