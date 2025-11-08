'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';

export function Services() {
  const t = useTranslations('services');

  const services = [
    {
      icon: '🎨',
      titleFr: 'Design & UI/UX',
      descriptionFr: 'Conception d\'interfaces modernes et intuitives, centrées sur l\'expérience utilisateur.',
    },
    {
      icon: '💻',
      titleFr: 'Développement Web',
      descriptionFr: 'Création d\'applications web performantes avec React, Next.js et les technologies les plus récentes.',
    },
    {
      icon: '📱',
      titleFr: 'Responsive Design',
      descriptionFr: 'Sites web parfaitement adaptés à tous les écrans : mobile, tablette et desktop.',
    },
    {
      icon: '🚀',
      titleFr: 'Optimisation SEO',
      descriptionFr: 'Amélioration de la visibilité sur les moteurs de recherche et optimisation des performances.',
    },
    {
      icon: '⚙️',
      titleFr: 'Maintenance & Support',
      descriptionFr: 'Support continu, mises à jour régulières et maintenance pour assurer la pérennité de votre site.',
    },
    {
      icon: '🔒',
      titleFr: 'Sécurité',
      descriptionFr: 'Mise en place de bonnes pratiques de sécurité et protection contre les vulnérabilités.',
    },
  ];

  return (
    <Section id="services" background="gray">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mes services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des solutions complètes pour donner vie à vos projets web
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.titleFr}
                </h3>
                <p className="text-gray-600">
                  {service.descriptionFr}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

