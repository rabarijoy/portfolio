'use client';

import { ThemeProvider } from '@/lib/theme-context';
import { Header } from '@/components/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Timeline } from '@/components/sections/Timeline';
import { Portfolio } from '@/components/sections/Portfolio';
import { Formation } from '@/components/sections/Formation';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/Footer';
import { SectionDivider } from '@/components/ui/SectionDivider';

export default function HomePage() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: 'var(--theme-bg-primary)' }}>
        <Header />
        <main>
          <Hero />
          {/* Grande section : À propos */}
          <About />
          <Timeline />
          <SectionDivider color="gray" />
          {/* Grande section : Projets */}
          <Portfolio />
          <SectionDivider color="gray" />
          {/* Grande section : Formation */}
          <Formation />
          <SectionDivider color="gray" />
          {/* Grande section : Contact */}
          <Contact />
        </main>
        <Footer />
        {/* Ellipse colorée en bas de l'écran */}
        <div 
          className="absolute bottom-0 left-0 right-0 w-full h-[100px] blur-[100px] pointer-events-none will-change-[filter] opacity-60"
          style={{ 
            zIndex: 0,
            borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
            backgroundColor: 'var(--theme-ellipse)',
            transition: 'background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
      </div>
    </ThemeProvider>
  );
}

