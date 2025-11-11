import { Header } from '@/components/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Timeline } from '@/components/sections/Timeline';
import { Portfolio } from '@/components/sections/Portfolio';
import { Formation } from '@/components/sections/Formation';
import { Skills } from '@/components/sections/Skills';
import { TechWatch } from '@/components/sections/TechWatch';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/Footer';
import { SectionDivider } from '@/components/ui/SectionDivider';

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
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
        <Skills />
        <TechWatch />
        <SectionDivider color="gray" />
        {/* Grande section : Contact */}
        <Contact />
      </main>
      <Footer />
      {/* Ellipse colorée en bas de l'écran */}
      <div 
        className="absolute bottom-0 left-0 right-0 w-full h-[200px] bg-blue-accent rounded-full transform translate-y-1/2 pointer-events-none"
        style={{ 
          zIndex: 0,
          borderRadius: '50% 50% 0 0 / 100% 100% 0 0'
        }}
      />
    </div>
  );
}

