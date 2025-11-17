'use client';

import { useEffect, useState, useRef } from 'react';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const animationIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const exitTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const words = ['Akory', 'Bonjour', 'Hello'];
  const ANIMATION_DURATION = 3000; // 3 seconds total (3 words × 1 second each, 2 cycles)

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Always show loading on mount
    setIsLoading(true);
    setIsExiting(false);

    // Start exit animation after fixed duration
    exitTimeoutRef.current = setTimeout(() => {
      // Stop word animation
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current);
        animationIntervalRef.current = null;
      }

      // Ensure current word is fully visible (not fading)
      setFadeOut(false);
      
      // Wait a bit for the word to be fully visible before starting exit fade
      setTimeout(() => {
        // Start exit animation (simple fade)
        setIsExiting(true);
        
        // Hide after fade transition
        setTimeout(() => {
          setIsLoading(false);
        }, 800); // Fade duration
      }, 300);
    }, ANIMATION_DURATION);

    return () => {
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current);
      }
      if (exitTimeoutRef.current) {
        clearTimeout(exitTimeoutRef.current);
      }
    };
  }, []);

  // Track word display and fade state for smooth cross-fade
  const [displayWord, setDisplayWord] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  // Animate words in loop: Akory → Bonjour → Hello → Akory → Bonjour → Hello
  useEffect(() => {
    if (!isLoading) return;

    // Start animation immediately
    const interval = setInterval(() => {
      // Start fade out
      setFadeOut(true);
      // After fade out, change word and fade in
      setTimeout(() => {
        setDisplayWord((prev) => (prev + 1) % words.length);
        setFadeOut(false);
      }, 250); // Half of transition duration
    }, 500); // Change word every 500ms

    animationIntervalRef.current = interval;

    return () => {
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current);
        animationIntervalRef.current = null;
      }
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <>
      <div
        className={`fixed inset-0 z-[9999] bg-[var(--background)] flex items-center justify-center ${
          isExiting ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          pointerEvents: isExiting ? 'none' : 'auto',
          transition: 'opacity 0.8s ease-in-out',
        }}
      >
        <div 
          className="text-center" 
          style={{ 
            minHeight: '80px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            position: 'relative',
            width: '100%',
          }}
        >
          <div
            className="text-[var(--blue-accent)] font-normal text-4xl md:text-5xl lg:text-6xl"
            style={{
              fontFamily: "'Hanken Grotesk', Arial, sans-serif",
              transition: 'opacity 0.3s ease-in-out',
              opacity: fadeOut ? 0 : 1,
            }}
          >
            {words[displayWord]}
          </div>
        </div>
      </div>
    </>
  );
}

