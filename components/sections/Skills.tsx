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
    <Section id="skills" background="gray" className="py-[80px]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div className="section-header-title">
            <h2 className="title-section">
              &lt;compétences&gt;
            </h2>
          </div>
        </motion.div>

        <div className="grid-skills">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-skill"
              >
                <div className="card-skill-header">
                  <div className="card-skill-icon">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="card-skill-title">
                    {t(category.titleKey)}
                  </h3>
                </div>

                <ul className="card-skill-list">
                  {t.raw(category.itemsKey).map((item: string, itemIndex: number) => (
                    <li key={itemIndex} className="card-skill-item">
                      <div className="card-skill-bullet" />
                      <span className="card-skill-text">
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

