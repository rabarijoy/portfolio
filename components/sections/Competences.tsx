'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { CheckCircle2 } from 'lucide-react';
import { Section } from '../ui/Section';

export function Competences() {
  const t = useTranslations('competences');

  const competences = [
    t('languages'),
    t('development'),
    t('databases'),
    t('practices'),
    t('testing'),
    t('analysis'),
    t('design'),
    t('collaboration'),
  ];

  return (
    <Section id="competences" background="white" className="py-[80px]">
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

          {/* Competences Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {competences.map((competence, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
              >
                <CheckCircle2 size={24} className="text-blue-accent flex-shrink-0 mt-0.5" />
                <p className="font-helvetica text-[16px] lg:text-[17px] leading-[1.6] text-gray-700">
                  {competence}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

