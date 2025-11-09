'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

interface Project {
  id: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  image?: string;
  tags: string;
  featured: boolean;
}

export function Portfolio({ projects }: { projects?: Project[] }) {
  const t = useTranslations('portfolio');

  // Fallback pour les données de démo
  const demoProjects: Project[] = [
    {
      id: '1',
      titleFr: 'E-commerce moderne',
      titleEn: 'Modern E-commerce',
      descriptionFr: 'Plateforme e-commerce complète avec paiement en ligne',
      descriptionEn: 'Complete e-commerce platform with online payment',
      tags: 'React,Next.js,Stripe',
      featured: true,
    },
    {
      id: '2',
      titleFr: 'Application SaaS',
      titleEn: 'SaaS Application',
      descriptionFr: 'Application SaaS multi-tenant avec dashboard analytique',
      descriptionEn: 'Multi-tenant SaaS application with analytics dashboard',
      tags: 'TypeScript,Node.js,PostgreSQL',
      featured: true,
    },
    {
      id: '3',
      titleFr: 'Portfolio créatif',
      titleEn: 'Creative Portfolio',
      descriptionFr: 'Site portfolio avec animations 3D et transitions fluides',
      descriptionEn: 'Portfolio site with 3D animations and smooth transitions',
      tags: 'Next.js,Framer Motion,Three.js',
      featured: false,
    },
  ];

  const displayProjects = projects && projects.length > 0 ? projects : demoProjects;

  return (
    <Section id="projects" background="white">
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
              Mes projets récents
            </h2>
            <p className="font-helvetica text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez une sélection de mes réalisations
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow"
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-6xl">📱</span>
                </div>

                {/* Project Info */}
                <div className="p-6 font-helvetica">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.titleFr}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.descriptionFr}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.split(',').map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>

                  <Button variant="ghost" size="sm" className="w-full">
                    Voir le projet →
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Voir tous les projets
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

