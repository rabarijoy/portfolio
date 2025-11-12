import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Portfolio - Aina Joy Rabarijaona',
    template: '%s | Aina Joy Rabarijaona',
  },
  description: 'Portfolio professionnel de Aina Joy Rabarijaona, développeur web spécialisé en développement d\'applications web modernes et performantes.',
  keywords: ['développeur web', 'portfolio', 'React', 'Next.js', 'TypeScript', 'développement web'],
  authors: [{ name: 'Aina Joy Rabarijaona' }],
  creator: 'Aina Joy Rabarijaona',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://portfolio-joy.vercel.app',
    siteName: 'Portfolio - Aina Joy Rabarijaona',
    title: 'Portfolio - Aina Joy Rabarijaona',
    description: 'Portfolio professionnel de Aina Joy Rabarijaona, développeur web',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Aina Joy Rabarijaona',
    description: 'Portfolio professionnel de Aina Joy Rabarijaona, développeur web',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aina Joy Rabarijaona',
    jobTitle: 'Développeur Web',
    email: 'rabarijaonajoy@gmail.com',
    url: 'https://portfolio-joy.vercel.app',
    sameAs: [
      'https://www.linkedin.com/in/joyrabari',
      'https://github.com/rabarijoy',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Antananarivo',
      addressCountry: 'MG',
    },
  };

  return (
    <html suppressHydrationWarning lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}

