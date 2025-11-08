import { Metadata } from 'next';

interface SEOConfig {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function generateMetadata(config: SEOConfig): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const defaultTitle = 'Portfolio - Joy Rabari';
  const defaultDescription = 'Portfolio professionnel de Joy Rabari, développeur web';

  const title = config.title ? `${config.title} | ${defaultTitle}` : defaultTitle;
  const description = config.description || defaultDescription;
  const image = config.image || `${siteUrl}/og-image.jpg`;
  const url = config.url || siteUrl;
  const type = config.type || 'website';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: defaultTitle,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: type as 'website' | 'article',
      locale: 'fr_FR',
      alternateLocale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}

