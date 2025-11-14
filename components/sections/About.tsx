'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Section } from '../ui/Section';
import Image from 'next/image';

export function About() {
  const tHero = useTranslations('hero');

  return (
    <Section id="about" background="gray" className="!py-0">
      <div className="relative min-h-screen">
        {/* Image ferrée à droite - 100% hauteur */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute top-0 right-0 w-[70vw] h-full overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1675256903382-0365348c0c7a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1335"
            alt="Illustration"
            fill
            className="object-cover grayscale"
            priority
          />
          {/* Gradient overlay de gauche à droite avec transitions progressives */}
          <div className="absolute inset-0 bg-gradient-about-overlay"></div>
        </motion.div>

        {/* Hero Content - Title and CTA */}
        <div className="relative z-10 min-h-screen flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-screen-xl mx-auto px-[20px] lg:px-[40px] py-[2vh] lg:py-[2.5vh]"
          >
            {/* Left side - Text Content */}
            <div className="flex flex-col gap-6 max-w-[50%]">
            {/* Heading with blue bar */}
            <div className="relative flex flex-col justify-center w-full">
              {/* Blue bar positioned behind "Rabarijaona" */}
              <div className="absolute left-0 top-[42px] md:top-[73px] w-[200px] md:w-[343px] h-[24px] md:h-[42px] bg-blue-accent z-0"></div>
              
              <h1 className="font-helvetica font-bold text-[32px] md:text-[56px] leading-[0.84] tracking-[-0.02em] text-black relative z-10 whitespace-nowrap">
                Aina Joy
              </h1>
              <h1 className="font-helvetica font-bold text-[32px] md:text-[56px] leading-[0.84] text-black relative z-10 whitespace-nowrap">
                <span className="tracking-[-0.02em]">Rabarijaona</span>
                <span className="tracking-[-0.1em]">.</span>
              </h1>
            </div>

              {/* Subtitle */}
              <div className="flex flex-col justify-center w-full">
                <p className="font-helvetica font-bold text-[24px] leading-[1.45] tracking-[-0.005em] text-black">
                  {tHero('subtitle')}
                </p>
              </div>

              {/* Lorem ipsum paragraph */}
              <div className="flex flex-col justify-center w-full">
                <p className="font-helvetica text-[16px] leading-[1.6] text-gray-700 pr-[7vw]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-4">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-black text-white font-helvetica font-normal text-[15px] leading-[1.45] tracking-[0.005em] px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  {tHero('contact')}
                </button>
                <button
                  onClick={() => {
                    // Télécharger CV action
                  }}
                  className="bg-white text-black font-helvetica font-normal text-[15px] leading-[1.45] tracking-[0.005em] px-8 py-4 rounded-lg border-2 border-black hover:bg-gray-50 transition-colors"
                >
                  {tHero('downloadCV')}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

