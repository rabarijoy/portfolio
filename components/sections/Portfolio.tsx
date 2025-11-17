'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Section } from '../ui/Section';
import { TechStackGrid } from './TechStackGrid';

// Image placeholder - À remplacer par les vraies images des projets
const PROJECT_IMAGE_PLACEHOLDER = 'https://i.pinimg.com/1200x/7f/fa/70/7ffa706f44b09ba67a96c63cc2c2ad4b.jpg';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
}

export function Portfolio() {
  const t = useTranslations('portfolio');
  const tSkills = useTranslations('skills');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: t('filters.all') },
    { id: 'web', label: t('filters.web') },
    { id: 'mobile', label: t('filters.mobile') },
    { id: 'design', label: t('filters.design') },
    { id: 'ai', label: t('filters.ai') },
  ];

  const projects: Project[] = [
    {
      id: '1',
      title: t('projects.mobile.title'),
      description: t('projects.mobile.description'),
      tags: ['React Native', 'TypeScript', 'Firebase'],
      category: 'mobile',
    },
    {
      id: '2',
      title: t('projects.design.title'),
      description: t('projects.design.description'),
      tags: ['Figma', 'CSS', 'Storybook'],
      category: 'design',
    },
    {
      id: '3',
      title: t('projects.saas.title'),
      description: t('projects.saas.description'),
      tags: ['Vue.js', 'Node.js', 'PostgreSQL'],
      category: 'web',
    },
    {
      id: '4',
      title: t('projects.ecommerce.title'),
      description: t('projects.ecommerce.description'),
      tags: ['Next.js', 'Stripe', 'Tailwind'],
      category: 'web',
    },
    {
      id: '5',
      title: t('projects.ai.title'),
      description: t('projects.ai.description'),
      tags: ['Python', 'TensorFlow', 'FastAPI'],
      category: 'ai',
    },
    {
      id: '6',
      title: t('projects.analytics.title'),
      description: t('projects.analytics.description'),
      tags: ['React', 'D3.js', 'WebSocket'],
      category: 'ai',
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <Section id="projects" background="white" withSubtleSeparator>
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <div className="section-header-center-title">
            <h2 className="title-section-large">
              {t('title')}
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`btn-filter ${
                  activeCategory === category.id
                    ? 'btn-filter-active'
                    : 'btn-filter-inactive'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid-projects">
          {filteredProjects.map((project) => (
            <motion.a
              key={project.id}
              href={`#project-${project.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="card-project"
            >
              {/* Project Image */}
              <div className="card-project-image">
                <img 
                  src={PROJECT_IMAGE_PLACEHOLDER}
                  alt={project.title}
                />
                {/* Gradient Overlay - Always visible for title contrast */}
                <div className="card-project-overlay"></div>
                
                {/* Title - Always visible with gradient */}
                <div className="card-project-title-default">
                  <h3 className="title-card-apple">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Content - Visible on hover (description + button) */}
              <div className="card-project-content">
                <p className="text-card-description-apple">
                  {project.description}
                </p>
                {/* Click Indicator */}
                <div className="card-project-indicator">
                  <span>Voir le projet</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View More on GitHub Button */}
        <div className="github-button-container">
          <a
            href="https://github.com/rabarijoy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github"
          >
            <span>{t('view_github')}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
        </div>

      </div>

      {/* Tech Stack Grid Section - Outside container for full width */}
      <div className="tech-stack-section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div className="section-header-title">
            <h2 className="title-section">
              {tSkills('title')}
            </h2>
            <p className="subtitle-section">
              <span className="hidden lg:inline">Survolez pour découvrir</span>
              <span className="lg:hidden">Découvrez mes technologies</span>
            </p>
          </div>
        </motion.div>

        <TechStackGrid />
      </div>
    </Section>
  );
}
