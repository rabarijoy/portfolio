'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function Hero() {
  const t = useTranslations('hero');
  const [cardRotation, setCardRotation] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 15;
    const rotateX = ((centerY - y) / centerY) * 15;
    
    setCardRotation({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setCardRotation({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-white pt-20 px-[5vw] relative">
      <div className="w-full max-w-screen-2xl mx-auto flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Heading with blue bar */}
            <div className="relative flex flex-col justify-center w-full">
              {/* Blue bar positioned behind "Rabarijaona" */}
              <div className="absolute left-0 top-[73px] w-[343px] h-[42px] bg-[#6dbfff] z-0" />
              
              <h1 className="font-bold text-[56px] leading-[0.84] tracking-[-0.02em] text-black relative z-10">
                Aina Joy
              </h1>
              <h1 className="font-bold text-[56px] leading-[0.84] text-black relative z-10">
                <span className="tracking-[-0.02em]">Rabarijaona</span>
                <span className="tracking-[-0.1em]">.</span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="flex flex-col justify-center w-full">
              <p className="font-helvetica font-bold text-[24px] leading-[1.45] tracking-[-0.005em] text-black">
                {t('subtitle')}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-black text-white font-helvetica font-normal text-[15px] leading-[1.45] tracking-[0.005em] px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors"
              >
                {t('contact')}
              </button>
              <button
                onClick={() => {
                  // Télécharger CV action
                }}
                className="bg-white text-black font-helvetica font-normal text-[15px] leading-[1.45] tracking-[0.005em] px-8 py-4 rounded-lg border-2 border-black hover:bg-gray-50 transition-colors"
              >
                {t('downloadCV')}
              </button>
            </div>
          </motion.div>

          {/* Image/Animation with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative hidden lg:block"
            style={{ perspective: '1000px' }}
          >
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative cursor-pointer"
              style={{
                width: '100%',
                aspectRatio: '1011 / 588',
                maxWidth: '850px',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.3s ease-out',
                transform: `rotateX(${cardRotation.rotateX}deg) rotateY(${cardRotation.rotateY}deg)`,
              }}
            >
              {/* Card Face */}
              <div
                className="absolute inset-0 shadow-2xl overflow-hidden"
                style={{
                  backfaceVisibility: 'hidden',
                  borderRadius: '30px',
                }}
              >
                <Image
                  src="/assets/id-card.png"
                  alt="ID Card"
                  width={1011}
                  height={588}
                  className="w-full h-full"
                  style={{ objectFit: 'fill' }}
                  priority
                />
              </div>
              
              {/* Card Shadow */}
              <div
                className="absolute inset-0 bg-black/20 -z-10"
                style={{
                  filter: 'blur(20px)',
                  transform: 'translateZ(-10px) scale(0.95)',
                  borderRadius: '30px',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        aria-label="Scroll to next section"
      >
        <motion.svg
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          className="text-[#989898] group-hover:text-black transition-colors"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.button>
    </section>
  );
}

