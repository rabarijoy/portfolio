'use client';

import { useEffect, useState, useRef } from 'react';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentWord, setCurrentWord] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const hasLoadedRef = useRef(false);
  const animationStartedRef = useRef(false);
  const minAnimationTimeRef = useRef(0);

  const words = ['Akory', 'Hello', 'Bonjour'];
  const MIN_ANIMATION_DURATION = 3000; // 3 seconds minimum (3 words × 1 second)

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

  // Animate words - always animate at least once
  useEffect(() => {
    if (!isLoading || !animationStartedRef.current) return;

    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 1000); // Change word every second

    return () => clearInterval(interval);
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <>
      <div
        className={`fixed inset-0 z-[9999] bg-[var(--background)] flex items-center justify-center transition-opacity duration-800 ease-in-out ${
          isExiting ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          pointerEvents: isExiting ? 'none' : 'auto',
        }}
      >
        <div className="text-center">
          <div
            key={currentWord}
            className="text-[var(--blue-accent)] font-normal text-4xl md:text-5xl lg:text-6xl"
            style={{
              fontFamily: "'Hanken Grotesk', Arial, sans-serif",
              animation: 'fadeInWord 0.5s ease-in-out',
            }}
          >
            {words[currentWord]}
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes fadeInWord {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}

