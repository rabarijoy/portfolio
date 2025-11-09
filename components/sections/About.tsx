'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';

export function About() {
  const t = useTranslations('about');

  const skills = [
    { name: 'React & Next.js', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'Git & GitHub', level: 90 },
  ];

  return (
    <Section id="about" background="gray">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="font-helvetica text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              À propos de moi
            </h2>
            <p className="font-helvetica text-lg text-gray-600 max-w-2xl mx-auto">
              Passionné par le développement web et toujours en quête d'apprendre de nouvelles technologies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Description */}
            <div>
              <h3 className="font-helvetica text-2xl font-semibold text-gray-900 mb-4">
                Mon parcours
              </h3>
              <div className="space-y-4 text-gray-600 font-helvetica">
                <p>
                  Avec plusieurs années d'expérience en développement web, je me spécialise dans 
                  la création d'applications web modernes et performantes.
                </p>
                <p>
                  Mon expertise couvre l'ensemble du cycle de développement, du design à la mise 
                  en production, en passant par l'optimisation SEO et les tests.
                </p>
                <p>
                  J'accorde une attention particulière à la qualité du code, l'expérience utilisateur 
                  et les performances.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="font-helvetica text-2xl font-semibold text-gray-900 mb-6">
                Compétences techniques
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2 font-helvetica">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-blue-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

