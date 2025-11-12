import { MetadataRoute } from 'next';
import { locales } from '@/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio-joy.vercel.app';

  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '#about', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '#projects', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '#formation', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '#contact', priority: 0.8, changeFrequency: 'monthly' as const },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    });
  });

  return sitemapEntries;
}

