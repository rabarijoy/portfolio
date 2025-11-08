'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

interface Price {
  id: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  price: number | null;
  category: string;
}

export function Prices({ prices }: { prices?: Price[] }) {
  const t = useTranslations('prices');

  // Fallback pour les données de démo
  const demoPrices: Price[] = [
    {
      id: '1',
      titleFr: 'Site Vitrine',
      titleEn: 'Showcase Website',
      descriptionFr: 'Site web professionnel avec design moderne, responsive et optimisé SEO',
      descriptionEn: 'Professional website with modern design, responsive and SEO optimized',
      price: 1500,
      category: 'website',
    },
    {
      id: '2',
      titleFr: 'Site E-commerce',
      titleEn: 'E-commerce Website',
      descriptionFr: 'Boutique en ligne complète avec paiement sécurisé et gestion des stocks',
      descriptionEn: 'Complete online store with secure payment and stock management',
      price: 3500,
      category: 'ecommerce',
    },
    {
      id: '3',
      titleFr: 'Application Web',
      titleEn: 'Web Application',
      descriptionFr: 'Application sur mesure avec fonctionnalités complexes et base de données',
      descriptionEn: 'Custom application with complex features and database',
      price: null,
      category: 'app',
    },
  ];

  const displayPrices = prices && prices.length > 0 ? prices : demoPrices;

  return (
    <Section id="prices" background="white">
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
              Tarifs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des prestations adaptées à vos besoins et votre budget
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {displayPrices.map((price, index) => (
              <motion.div
                key={price.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`bg-white rounded-xl shadow-lg p-8 border-2 hover:shadow-2xl transition-all ${
                  index === 1 ? 'border-blue-500' : 'border-gray-100'
                }`}
              >
                {index === 1 && (
                  <div className="bg-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                    Populaire
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {price.titleFr}
                </h3>

                <div className="mb-6">
                  {price.price ? (
                    <>
                      <span className="text-4xl font-bold text-gray-900">
                        {price.price}€
                      </span>
                      <span className="text-gray-600 ml-2">à partir de</span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-blue-600">
                      Sur devis
                    </span>
                  )}
                </div>

                <p className="text-gray-600 mb-6">
                  {price.descriptionFr}
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">Design responsive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">Optimisation SEO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">Support 30 jours</span>
                  </li>
                </ul>

                <Button 
                  variant={index === 1 ? 'primary' : 'outline'} 
                  fullWidth
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Demander un devis
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 text-gray-600">
            <p>* Tous les prix sont indicatifs et peuvent varier selon les besoins spécifiques du projet</p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

