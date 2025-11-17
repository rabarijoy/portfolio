import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

interface ProjectPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="project-page-container">
        {/* Back Button */}
        <Link
          href={`/${locale}#projects`}
          className="inline-flex items-center gap-2 mb-12 text-gray-600 hover:text-gray-900 transition-colors"
          style={{ fontFamily: "'Hanken Grotesk', Arial, sans-serif" }}
        >
          <span>←</span>
          <span>{t('portfolio.view_all') || 'Retour aux projets'}</span>
        </Link>

        {/* Header Section */}
        <div className="project-header">
          <div className="project-header-left">
            <h1>
              Synchronize is an <span className="project-highlight">e-learning platform</span> designed to help people learn wide range of new skills with a totally new online experience.
            </h1>
          </div>
          <div className="project-header-right">
            <div className="project-label">Project overview</div>
            <p className="project-description">
              The project provides an opportunity for lovers of cinema, science and math to get serious experize from the best specialists in these fields in Russia, without interrupting their main work.
            </p>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="project-gallery">
          <div className="project-gallery-item large">
            <div className="project-gallery-placeholder">Image 1</div>
            <div className="project-online-badge">Online</div>
            <div className="project-gallery-caption">
              <div className="project-website-badge">synchron.com</div>
              <div>We have more than 100+ online courses to try this year!</div>
            </div>
          </div>
          
          <div className="project-gallery-item">
            <div className="project-gallery-placeholder">Image 2</div>
          </div>
          
          <div className="project-gallery-item">
            <div className="project-gallery-placeholder">Image 3</div>
          </div>
          
          <div className="project-gallery-item">
            <div className="project-gallery-placeholder">Image 4</div>
          </div>
          
          <div className="project-gallery-item">
            <div className="project-gallery-placeholder">Image 5</div>
          </div>
        </div>

        {/* Content Section */}
        <div className="project-content-grid">
          <div className="project-content-section">
            <h2>Key Task</h2>
            <h3>Context</h3>
            <p>
              The training takes place on its own educational LMS-platform. Unfortunately, there is no mobile application that would make the learning process simple and convenient.
            </p>
            <br />
            <h2>Solution</h2>
            <p>
              The app will allow students to watch lectures, courses and communicate effectively without a computer. The schedule that suits your pace.
            </p>
          </div>

          <div className="project-content-section">
            <h2>Facts</h2>
            <div className="project-stats">
              <div className="project-stat-item">
                <div className="project-stat-value">2015</div>
                <div className="project-stat-label">Year of the foundation</div>
              </div>
              <div className="project-stat-item">
                <div className="project-stat-value">50k+</div>
                <div className="project-stat-label">Total students</div>
              </div>
              <div className="project-stat-item">
                <div className="project-stat-value">55+</div>
                <div className="project-stat-label">Countries</div>
              </div>
            </div>
          </div>

          <div className="project-content-section">
            <h2>About</h2>
            <p style={{ color: 'var(--gray-300)', fontStyle: 'italic' }}>
              Content placeholder for additional information about the platform and its features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

