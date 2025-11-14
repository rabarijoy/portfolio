'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
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
    <section id="hero" className="hero-section">
      <div className="hero-container">
        {/* Image/Animation with 3D Effect - Centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="hero-card-wrapper"
        >
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="hero-card"
            style={{
              transform: `rotateX(${cardRotation.rotateX}deg) rotateY(${cardRotation.rotateY}deg)`,
            }}
          >
            {/* Card Face */}
            <div className="hero-card-face">
              <Image
                src="/assets/id-card.png"
                alt="ID Card"
                width={1011}
                height={588}
                className="hero-card-image"
                priority
              />
            </div>
            
            {/* Card Shadow */}
            <div className="hero-card-shadow" style={{ transform: 'translateZ(-10px) scale(0.95)' }} />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="hero-scroll-indicator"
        aria-label="Scroll to next section"
      >
        <motion.svg
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          className="hero-scroll-icon"
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

