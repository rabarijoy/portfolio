import { MetadataRoute } from 'next';
import { locales } from '@/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio-joy.vercel.app';

  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
  ];

  const projectIds = ['1', '2', '3', '4', '5', '6'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    // Main routes
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    });

    // Project pages
    projectIds.forEach((id) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/projects/${id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  });

  return sitemapEntries;
}

