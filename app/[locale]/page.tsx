import { Header } from '@/components/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Timeline } from '@/components/sections/Timeline';
import { Portfolio } from '@/components/sections/Portfolio';
import { Formation } from '@/components/sections/Formation';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Header />
      <main>
        <Hero />
        {/* Grande section : À propos */}
        <About />
        <Timeline />
        {/* Grande section : Projets */}
        <Portfolio />
        {/* Grande section : Formation */}
        <Formation />
        {/* Grande section : Contact */}
        <Contact />
      </main>
      <Footer />
      {/* Ellipse colorée en bas de l'écran */}
      <div 
        className="absolute bottom-0 left-0 right-0 w-full h-[100px] bg-blue-accent blur-[100px] pointer-events-none will-change-[filter] opacity-60 z-0 rounded-ellipse-top"
      />
    </div>
  );
}

