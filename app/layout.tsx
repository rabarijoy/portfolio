import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio - Joy Rabari',
  description: 'Portfolio professionnel de Joy Rabari, développeur web',
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

