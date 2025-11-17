import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import { LangUpdater } from '@/components/LangUpdater';
import { ScrollbarSquish } from '@/components/ScrollbarSquish';
import { SmoothScroll } from '@/components/SmoothScroll';
import { ScrollToTop } from '@/components/ScrollToTop';
import { LoadingScreen } from '@/components/LoadingScreen';
import { PersonStructuredData } from '@/components/StructuredData';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isValidLocale = locales.some((l) => l === locale);
  if (!isValidLocale) notFound();

  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <LoadingScreen />
      <ScrollToTop />
      <PersonStructuredData />
      <LangUpdater locale={locale} />
      <ScrollbarSquish />
      <SmoothScroll />
      {children}
    </NextIntlClientProvider>
  );
}

