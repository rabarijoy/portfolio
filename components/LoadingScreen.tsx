'use client';

import { useEffect, useState, useRef } from 'react';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const hasLoadedRef = useRef(false);
  const animationStartedRef = useRef(false);
  const minAnimationTimeRef = useRef(0);
  const animationIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const words = ['Akory', 'Hello', 'Bonjour'];
  const MIN_ANIMATION_DURATION = 1500; // 1.5 seconds minimum (3 words × 0.5 second)

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (hasLoadedRef.current) return; // Prevent multiple loads

    // Always show loading on mount (refresh or first visit)
    setIsLoading(true);
    setIsExiting(false);
    animationStartedRef.current = false;
    minAnimationTimeRef.current = Date.now();

    // Start word animation immediately
    animationStartedRef.current = true;

    const loadResources = async () => {
      // Wait for document to be ready
      if (document.readyState === 'loading') {
        await new Promise((resolve) => {
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', resolve, { once: true });
          } else {
            resolve(null);
          }
        });
      }

      // Wait for fonts to load
      if ('fonts' in document) {
        try {
          await document.fonts.ready;
        } catch (e) {
          // Continue if fonts fail
        }
      }

      // Wait for all images to load
      const images = Array.from(document.querySelectorAll('img'));
      const imagePromises = images.map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          const timeout = setTimeout(resolve, 5000); // Max 5s per image
          img.onload = () => {
            clearTimeout(timeout);
            resolve(null);
          };
          img.onerror = () => {
            clearTimeout(timeout);
            resolve(null);
          };
        });
      });

      await Promise.all(imagePromises);

      // Ensure minimum animation duration (at least one full cycle)
      const elapsed = Date.now() - minAnimationTimeRef.current;
      const remainingTime = Math.max(0, MIN_ANIMATION_DURATION - elapsed);
      await new Promise((resolve) => setTimeout(resolve, remainingTime));

      // Stop word animation to prevent overlap with exit fade
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current);
        animationIntervalRef.current = null;
      }

      // Ensure current word is fully visible (not fading)
      setFadeOut(false);
      
      // Wait a bit for the word to be fully visible before starting exit fade
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Start exit animation (simple fade)
      setIsExiting(true);
      hasLoadedRef.current = true;
      
      // Hide after fade transition
      setTimeout(() => {
        setIsLoading(false);
      }, 800); // Fade duration
    };

    // Small delay before starting to ensure DOM is ready
    setTimeout(() => {
      loadResources();
    }, 100);
  }, []);

  // Track word display and fade state for smooth cross-fade
  const [displayWord, setDisplayWord] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  // Animate words - always animate at least once with smooth cross-fade (2x faster)
  useEffect(() => {
    if (!isLoading || !animationStartedRef.current) return;

    const interval = setInterval(() => {
      // Start fade out
      setFadeOut(true);
      // After fade out, change word and fade in
      setTimeout(() => {
        setDisplayWord((prev) => (prev + 1) % words.length);
        setFadeOut(false);
      }, 250); // Half of transition duration
    }, 500); // Change word every 500ms (2x faster)

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

