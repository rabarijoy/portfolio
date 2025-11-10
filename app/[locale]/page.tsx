import { Header } from '@/components/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Timeline } from '@/components/sections/Timeline';
import { Portfolio } from '@/components/sections/Portfolio';
import { Formation } from '@/components/sections/Formation';
import { Skills } from '@/components/sections/Skills';
import { Watch } from '@/components/sections/Watch';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Portfolio />
        <Formation />
        <Skills />
        <Watch />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

