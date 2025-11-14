'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Smartphone, Palette, Rocket, ShoppingBag, Bot, BarChart, LucideIcon, Code2, Database, TestTube, GitBranch, FileCode, Layers } from 'lucide-react';
import { Section } from '../ui/Section';

// Image placeholder - À remplacer par les vraies images des projets
const PROJECT_IMAGE_PLACEHOLDER = 'https://i.pinimg.com/1200x/7f/fa/70/7ffa706f44b09ba67a96c63cc2c2ad4b.jpg';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  icon: LucideIcon;
  gradient: string;
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
      icon: Smartphone,
      gradient: 'linear-gradient(135deg, #6dbfff 0%, #4a9eff 100%)',
    },
    {
      id: '2',
      title: t('projects.design.title'),
      description: t('projects.design.description'),
      tags: ['Figma', 'CSS', 'Storybook'],
      category: 'design',
      icon: Palette,
      gradient: 'linear-gradient(135deg, #ff6b9d 0%, #c454d0 100%)',
    },
    {
      id: '3',
      title: t('projects.saas.title'),
      description: t('projects.saas.description'),
      tags: ['Vue.js', 'Node.js', 'PostgreSQL'],
      category: 'web',
      icon: Rocket,
      gradient: 'linear-gradient(135deg, #ffd166 0%, #ff8c42 100%)',
    },
    {
      id: '4',
      title: t('projects.ecommerce.title'),
      description: t('projects.ecommerce.description'),
      tags: ['Next.js', 'Stripe', 'Tailwind'],
      category: 'web',
      icon: ShoppingBag,
      gradient: 'linear-gradient(135deg, #06ffa5 0%, #00d4aa 100%)',
    },
    {
      id: '5',
      title: t('projects.ai.title'),
      description: t('projects.ai.description'),
      tags: ['Python', 'TensorFlow', 'FastAPI'],
      category: 'ai',
      icon: Bot,
      gradient: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
    },
    {
      id: '6',
      title: t('projects.analytics.title'),
      description: t('projects.analytics.description'),
      tags: ['React', 'D3.js', 'WebSocket'],
      category: 'ai',
      icon: BarChart,
      gradient: 'linear-gradient(135deg, #fb923c 0%, #f97316 100%)',
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <Section id="projects" background="white" className="!py-[120px] lg:!py-[140px]" withSubtleSeparator>
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <div className="section-header-center-title">
            <h2 className="title-section-large">
              &lt;projets&gt;
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
          {filteredProjects.map((project, index) => (
            <motion.a
              key={project.id}
              href={`#project-${project.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -8 }}
              className="card-project"
            >
                {/* Project Image */}
                <div className="card-project-image">
                  <img 
                    src={PROJECT_IMAGE_PLACEHOLDER}
                    alt={project.title}
                  />
                </div>

                {/* Project Content */}
                <div className="card-project-content">
                  <h3 className="title-card">
                    {project.title}
                  </h3>
                  <p className="text-card-description">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tag"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link - visible only on hover */}
                  <div className="link-view-project">
                    {t('view_project')}
                    <span className="link-view-project-arrow">→</span>
                  </div>
                  </div>
              </motion.a>
            ))}
        </div>

        {/* View More on GitHub Button */}
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <a
            href="https://github.com/rabarijoy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github"
          >
            <span>Voir plus de projets sur GitHub</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
        </div>

        {/* Skills Section */}
        <div style={{ marginTop: '100px' }}>
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
            {[
              {
                icon: Code2,
                titleKey: 'languages.title',
                itemsKey: 'languages.items',
              },
              {
                icon: Layers,
                titleKey: 'development.title',
                itemsKey: 'development.items',
              },
              {
                icon: Database,
                titleKey: 'databases.title',
                itemsKey: 'databases.items',
              },
              {
                icon: TestTube,
                titleKey: 'quality.title',
                itemsKey: 'quality.items',
              },
              {
                icon: FileCode,
                titleKey: 'design.title',
                itemsKey: 'design.items',
              },
              {
                icon: GitBranch,
                titleKey: 'collaboration.title',
                itemsKey: 'collaboration.items',
              },
            ].map((category, index) => {
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
                      {tSkills(category.titleKey)}
                    </h3>
                  </div>

                  <ul className="card-skill-list">
                    {tSkills.raw(category.itemsKey).map((item: string, itemIndex: number) => (
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
      </div>
    </Section>
  );
}
