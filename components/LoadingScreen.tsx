'use client';

import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentWord, setCurrentWord] = useState(0);
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const words = ['Akory', 'Hello', 'Bonjour'];

  useEffect(() => {
    // Check if this is the first visit
    if (typeof window === 'undefined') return;

    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited) {
      setIsLoading(false);
      return;
    }

    setIsFirstVisit(true);

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

      // Additional wait for any remaining resources
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Mark as visited
      localStorage.setItem('hasVisited', 'true');

      // Start exit animation
      setIsExiting(true);
      
      // Hide after transition
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    // Small delay before starting to ensure DOM is ready
    setTimeout(() => {
      loadResources();
    }, 100);
  }, []);

  // Animate words
  useEffect(() => {
    if (!isFirstVisit || !isLoading || isExiting) return;

    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 1000); // Change word every second

    return () => clearInterval(interval);
  }, [isFirstVisit, isLoading, isExiting]);

  if (!isFirstVisit || !isLoading) return null;

  return (
    <>
      <div
        className={`fixed inset-0 z-[9999] bg-[var(--background)] flex items-center justify-center transition-opacity duration-1000 ${
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

