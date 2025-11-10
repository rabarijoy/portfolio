'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Code2, Database, TestTube, GitBranch, FileCode, Layers } from 'lucide-react';
import { Section } from '../ui/Section';

export function Skills() {
  const t = useTranslations('skills');

  const skillCategories = [
    {
      icon: Code2,
      titleKey: 'languages.title',
      itemsKey: 'languages.items',
      gradient: 'from-blue-50 to-white',
      borderColor: 'border-blue-accent',
      iconBg: 'bg-blue-accent',
    },
    {
      icon: Layers,
      titleKey: 'development.title',
      itemsKey: 'development.items',
      gradient: 'from-blue-50 to-white',
      borderColor: 'border-blue-accent',
      iconBg: 'bg-blue-accent',
    },
    {
      icon: Database,
      titleKey: 'databases.title',
      itemsKey: 'databases.items',
      gradient: 'from-blue-50 to-white',
      borderColor: 'border-blue-accent',
      iconBg: 'bg-blue-accent',
    },
    {
      icon: TestTube,
      titleKey: 'quality.title',
      itemsKey: 'quality.items',
      gradient: 'from-blue-50 to-white',
      borderColor: 'border-blue-accent',
      iconBg: 'bg-blue-accent',
    },
    {
      icon: FileCode,
      titleKey: 'design.title',
      itemsKey: 'design.items',
      gradient: 'from-blue-50 to-white',
      borderColor: 'border-blue-accent',
      iconBg: 'bg-blue-accent',
    },
    {
      icon: GitBranch,
      titleKey: 'collaboration.title',
      itemsKey: 'collaboration.items',
      gradient: 'from-blue-50 to-white',
      borderColor: 'border-blue-accent',
      iconBg: 'bg-blue-accent',
    },
  ];

  return (
    <Section id="skills" background="white" className="py-[80px]">
      <div className="max-w-screen-2xl mx-auto px-[6vw] lg:px-[7vw]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex flex-col items-center mb-4">
            <h2 className="font-ppneuebit text-[50px] lg:text-[58px] leading-[1.1] text-black mb-2 relative inline-block">
              {t('title')}
              <div className="absolute bottom-[-8px] left-[-8px] right-[-8px] h-[5px] bg-black" />
            </h2>
          </div>
          <p className="font-helvetica text-[17px] lg:text-[19px] leading-[1.6] text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${category.gradient} border-2 ${category.borderColor} rounded-2xl p-6`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${category.iconBg} flex items-center justify-center text-white`}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className="font-helvetica font-bold text-[20px] lg:text-[22px] text-black">
                    {t(category.titleKey)}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {t.raw(category.itemsKey).map((item: string, itemIndex: number) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-accent mt-2 flex-shrink-0" />
                      <span className="font-helvetica text-[15px] lg:text-[16px] leading-[1.6] text-gray-700">
                        {item}
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

