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
import { MajorSection } from '@/components/ui/MajorSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        
        {/* Grande section : À propos */}
        <MajorSection id="about">
          <About />
          <Timeline />
        </MajorSection>
        
        <SectionDivider color="gray" />
        
        {/* Grande section : Projets */}
        <MajorSection id="projects">
          <Portfolio />
        </MajorSection>
        
        <SectionDivider color="gray" />
        
        {/* Grande section : Formation */}
        <MajorSection id="formation">
          <Formation />
          <Skills />
        </MajorSection>
        
        <SectionDivider color="gray" />
        
        {/* Grande section : Veille */}
        <MajorSection id="tech-watch">
          <TechWatch />
        </MajorSection>
        
        <SectionDivider color="gray" />
        
        {/* Grande section : Contact */}
        <MajorSection id="contact">
          <Contact />
        </MajorSection>
      </main>
      <Footer />
    </>
  );
}

