import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio-joy.vercel.app';

interface ProjectPageProps {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: `Project - ${slug}`,
    description: t('portfolio.subtitle'),
    openGraph: {
      title: `Project - ${slug}`,
      description: t('portfolio.subtitle'),
      url: `${baseUrl}/${locale}/project/${slug}`,
      siteName: 'Portfolio - Aina Joy Rabarijaona',
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug, locale } = await params;

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href={`/${locale}#projects`}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <span>←</span>
          <span>Retour aux projets</span>
        </Link>

        {/* Project Content - Empty template for now */}
        <div className="mt-8">
          <h1 className="text-4xl font-bold mb-4">Projet: {slug}</h1>
          <p className="text-lg text-gray-600">
            Cette page sera personnalisée plus tard.
          </p>
        </div>
      </div>
    </div>
  );
}

