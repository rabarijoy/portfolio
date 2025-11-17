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
      <div className="container">
        {/* Back Button */}
        <Link
          href={`/${locale}#projects`}
          className="inline-flex items-center gap-2 mb-8 text-gray-600 hover:text-gray-900 transition-colors"
          style={{ fontFamily: "'Hanken Grotesk', Arial, sans-serif" }}
        >
          <span>←</span>
          <span>{t('portfolio.view_all') || 'Retour aux projets'}</span>
        </Link>

        {/* Project Content - Empty template for now */}
        <div className="mt-8">
          <h1 
            className="title-section-large mb-4"
            style={{ fontFamily: "'Hanken Grotesk', Arial, sans-serif" }}
          >
            Projet
          </h1>
          <p 
            className="text-card-description-apple"
            style={{ 
              fontFamily: "'Hanken Grotesk', Arial, sans-serif",
              color: 'var(--foreground)'
            }}
          >
            Cette page sera personnalisée plus tard.
          </p>
        </div>
      </div>
    </div>
  );
}

