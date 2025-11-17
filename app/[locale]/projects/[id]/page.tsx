import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { ProjectStructuredData } from '@/components/StructuredData';
import { notFound } from 'next/navigation';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio-joy.vercel.app';

interface ProjectPageProps {
  params: Promise<{ id: string; locale: string }>;
}

// This would typically come from a database or CMS
const projects: Record<string, { title: string; description: string; image?: string }> = {
  '1': {
    title: 'Application Mobile',
    description: 'Une application intuitive offrant une expérience utilisateur fluide et moderne.',
  },
  '2': {
    title: 'Design System',
    description: 'Un système de design complet pour assurer la cohérence visuelle.',
  },
  '3': {
    title: 'Plateforme SaaS',
    description: 'Solution cloud complète avec tableau de bord analytique avancé.',
  },
  '4': {
    title: 'Site E-commerce',
    description: 'Boutique en ligne performante avec gestion complète des paiements.',
  },
  '5': {
    title: 'IA Assistant',
    description: 'Assistant intelligent basé sur l\'apprentissage automatique.',
  },
  '6': {
    title: 'Dashboard Analytics',
    description: 'Visualisation de données en temps réel avec graphiques interactifs.',
  },
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id, locale } = await params;
  const project = projects[id];
  
  if (!project) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: 'portfolio' });
  const projectTitle = project.title;
  const projectDescription = project.description;

  return {
    title: projectTitle,
    description: projectDescription,
    openGraph: {
      title: projectTitle,
      description: projectDescription,
      url: `${baseUrl}/${locale}/projects/${id}`,
      siteName: 'Portfolio - Aina Joy Rabarijaona',
      images: [
        {
          url: project.image || `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: projectTitle,
        },
      ],
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: projectTitle,
      description: projectDescription,
      images: [project.image || `${baseUrl}/og-image.jpg`],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id, locale } = await params;
  const project = projects[id];

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectStructuredData
        name={project.title}
        description={project.description}
        url={`${baseUrl}/${locale}/projects/${id}`}
        image={project.image}
      />
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg text-gray-600 mb-8">{project.description}</p>
          {/* Add more project details here */}
        </div>
      </div>
    </>
  );
}



