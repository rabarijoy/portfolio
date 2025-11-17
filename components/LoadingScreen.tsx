'use client';

import { useEffect, useState } from 'react';

const WORDS = ['Akory', 'Hello', 'Bonjour'];
const WORD_DURATION = 1500; // Duration each word is displayed (ms)

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = typeof window !== 'undefined' && localStorage.getItem('hasVisited');
    
    if (!hasVisited) {
      setIsFirstVisit(true);
      
      // Cycle through words
      const wordInterval = setInterval(() => {
        setCurrentWordIndex((prev) => (prev + 1) % WORDS.length);
      }, WORD_DURATION);

      // Wait for all resources to load
      const checkResourcesLoaded = () => {
        // Check if fonts are loaded
        if (document.fonts && document.fonts.ready) {
          document.fonts.ready.then(() => {
            // Check if all images are loaded
            const images = Array.from(document.images);
            const imagePromises = images.map((img) => {
              if (img.complete) return Promise.resolve();
              return new Promise((resolve) => {
                img.onload = resolve;
                img.onerror = resolve; // Continue even if image fails
              });
            });

            Promise.all(imagePromises).then(() => {
              // Small delay for smooth transition
              setTimeout(() => {
                setIsLoading(false);
                clearInterval(wordInterval);
                // Mark as visited
                if (typeof window !== 'undefined') {
                  localStorage.setItem('hasVisited', 'true');
                }
              }, 300);
            });
          });
        } else {
          // Fallback if fonts API is not available
          setTimeout(() => {
            setIsLoading(false);
            clearInterval(wordInterval);
            if (typeof window !== 'undefined') {
              localStorage.setItem('hasVisited', 'true');
            }
          }, 2000);
        }
      };

      // Start checking after a small delay to ensure DOM is ready
      setTimeout(checkResourcesLoaded, 100);
      
      return () => {
        clearInterval(wordInterval);
      };
    } else {
      setIsLoading(false);
    }
  }, []);

  if (!isFirstVisit || !isLoading) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[var(--background)] flex items-center justify-center transition-opacity duration-1000 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{
        transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div className="text-center">
        <div
          key={currentWordIndex}
          className="text-[var(--blue-accent)] font-normal text-4xl md:text-5xl lg:text-6xl animate-fade-in"
          style={{
            fontFamily: "'Hanken Grotesk', Arial, sans-serif",
            animation: 'fadeIn 0.5s ease-in-out',
          }}
        >
          {WORDS[currentWordIndex]}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}

