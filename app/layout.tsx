import type { Metadata } from 'next';
import './globals.css';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio-joy.vercel.app';

export const metadata: Metadata = {
  title: {
    default: 'Portfolio - Aina Joy Rabarijaona',
    template: '%s | Portfolio - Aina Joy Rabarijaona',
  },
  description: 'Portfolio professionnel de Aina Joy Rabarijaona, développeur web spécialisé en développement d\'applications web modernes et performantes.',
  keywords: ['développeur web', 'portfolio', 'React', 'Next.js', 'TypeScript', 'Madagascar'],
  authors: [{ name: 'Aina Joy Rabarijaona' }],
  creator: 'Aina Joy Rabarijaona',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: baseUrl,
    siteName: 'Portfolio - Aina Joy Rabarijaona',
    title: 'Portfolio - Aina Joy Rabarijaona',
    description: 'Portfolio professionnel de Aina Joy Rabarijaona, développeur web spécialisé en développement d\'applications web modernes et performantes.',
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Portfolio - Aina Joy Rabarijaona',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Aina Joy Rabarijaona',
    description: 'Portfolio professionnel de Aina Joy Rabarijaona, développeur web',
    images: [`${baseUrl}/og-image.jpg`],
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
  verification: {
    // Add Google Search Console verification if needed
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}

