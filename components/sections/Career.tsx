'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Section } from '../ui/Section';

export function Career() {
  const t = useTranslations('career');

  return (
    <Section id="career" background="white">
      <div className="max-w-screen-2xl mx-auto px-[6vw] lg:px-[7vw]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="mb-16">
            <h2 className="font-helvetica font-bold text-[40px] lg:text-[56px] tracking-[-0.02em] text-black mb-6">
              {t('title')}
            </h2>
          </div>

          {/* Career Content */}
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-8"
            >
              {/* Main Career Goal */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-8 lg:p-12 rounded-2xl border border-blue-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl lg:text-5xl">💻</div>
                  <div>
                    <h3 className="font-helvetica font-bold text-[28px] lg:text-[36px] tracking-[-0.02em] text-black mb-4">
                      {t('mainRole.title')}
                    </h3>
                    <p className="font-helvetica text-[16px] lg:text-[18px] leading-[1.7] text-gray-700 mb-6">
                      {t('mainRole.description')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Why This Career */}
              <div className="space-y-6">
                <p className="font-helvetica text-[16px] lg:text-[18px] leading-[1.7] text-gray-700">
                  {t('motivation')}
                </p>

                {/* Career Paths */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-accent hover:shadow-lg transition-all"
                  >
                    <div className="text-3xl mb-3">🏢</div>
                    <h4 className="font-helvetica font-bold text-[20px] text-black mb-2">
                      {t('paths.company.title')}
                    </h4>
                    <p className="font-helvetica text-[15px] leading-[1.6] text-gray-600">
                      {t('paths.company.description')}
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-accent hover:shadow-lg transition-all"
                  >
                    <div className="text-3xl mb-3">🚀</div>
                    <h4 className="font-helvetica font-bold text-[20px] text-black mb-2">
                      {t('paths.freelance.title')}
                    </h4>
                    <p className="font-helvetica text-[15px] leading-[1.6] text-gray-600">
                      {t('paths.freelance.description')}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

