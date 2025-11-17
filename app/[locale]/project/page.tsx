import { getTranslations } from 'next-intl/server';
import { Header } from '@/components/Header';

interface ProjectPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale } = await params;
  const t = await getTranslations('project');

  const projectTitle = t('title');

  // Parse title with highlight
  const titleParts = t('header.title').split('<highlight>');
  const hasHighlight = titleParts.length > 1;
  const beforeHighlight = titleParts[0];
  const afterHighlight = hasHighlight ? titleParts[1].split('</highlight>') : [];
  const highlightText = hasHighlight ? afterHighlight[0] : '';
  const afterHighlightText = hasHighlight ? afterHighlight[1] : '';

  return (
    <>
      <Header projectTitle={projectTitle} />
      <div className="min-h-screen pt-24 pb-16">
      <div className="project-page-container">
        {/* Header Section */}
        <div className="project-header">
          <div className="project-header-left">
            <h1>
              {beforeHighlight}
              {hasHighlight && <span className="project-highlight">{highlightText}</span>}
              {afterHighlightText}
            </h1>
          </div>
          <div className="project-header-right">
            <div className="project-label">{t('header.overview_label')}</div>
            <p className="project-description">
              {t('header.description')}
            </p>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="project-gallery">
          <div className="project-gallery-item large">
            <div className="project-gallery-placeholder">{t('gallery.image_1')}</div>
            <div className="project-online-badge">{t('gallery.online_badge')}</div>
            <div className="project-gallery-caption">
              <div className="project-website-badge">{t('gallery.website')}</div>
              <div>{t('gallery.caption')}</div>
            </div>
          </div>
          
          <div className="project-gallery-item">
            <div className="project-gallery-placeholder">{t('gallery.image_2')}</div>
          </div>
          
          <div className="project-gallery-item">
            <div className="project-gallery-placeholder">{t('gallery.image_3')}</div>
          </div>
          
          <div className="project-gallery-item">
            <div className="project-gallery-placeholder">{t('gallery.image_4')}</div>
          </div>
          
          <div className="project-gallery-item">
            <div className="project-gallery-placeholder">{t('gallery.image_5')}</div>
          </div>
        </div>

        {/* Content Section */}
        <div className="project-content-grid">
          <div className="project-content-section">
            <h2>{t('content.key_task')}</h2>
            <h3>{t('content.context')}</h3>
            <p>
              {t('content.context_description')}
            </p>
            <br />
            <h2>{t('content.solution')}</h2>
            <p>
              {t('content.solution_description')}
            </p>
          </div>

          <div className="project-content-section">
            <h2>{t('content.facts')}</h2>
            <div className="project-stats">
              <div className="project-stat-item">
                <div className="project-stat-value">2015</div>
                <div className="project-stat-label">{t('content.year_label')}</div>
              </div>
              <div className="project-stat-item">
                <div className="project-stat-value">50k+</div>
                <div className="project-stat-label">{t('content.students_label')}</div>
              </div>
              <div className="project-stat-item">
                <div className="project-stat-value">55+</div>
                <div className="project-stat-label">{t('content.countries_label')}</div>
              </div>
            </div>
          </div>

          <div className="project-content-section">
            <h2>{t('content.about')}</h2>
            <p style={{ color: 'var(--gray-300)', fontStyle: 'italic' }}>
              {t('content.about_placeholder')}
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

