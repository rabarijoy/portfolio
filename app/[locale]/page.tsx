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

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="overflow-visible">
        <Hero />
        <About />
        <Timeline />
        <Portfolio />
        <Formation />
        <Skills />
        <TechWatch />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

