import { Header } from '@/components/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Timeline } from '@/components/sections/Timeline';
import { Portfolio } from '@/components/sections/Portfolio';
import { Career } from '@/components/sections/Career';
import { Prices } from '@/components/sections/Prices';
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
        <Career />
        <Prices />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

