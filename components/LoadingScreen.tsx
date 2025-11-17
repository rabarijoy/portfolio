'use client';

import { useEffect, useState } from 'react';

const WORDS = ['Akory', 'Hello', 'Bonjour'];
const WORD_DURATION = 1500; // Duration each word is displayed (ms)

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [isHiding, setIsHiding] = useState(false);

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
        const promises: Promise<void>[] = [];

        // Check if fonts are loaded
        if (document.fonts && document.fonts.ready) {
          promises.push(
            document.fonts.ready.then(() => Promise.resolve())
          );
        }

        // Check if all images are loaded
        const images = Array.from(document.images);
        const imagePromises = images.map((img) => {
          if (img.complete) return Promise.resolve();
          return new Promise<void>((resolve) => {
            const timeout = setTimeout(() => resolve(), 5000); // Timeout after 5s
            img.onload = () => {
              clearTimeout(timeout);
              resolve();
            };
            img.onerror = () => {
              clearTimeout(timeout);
              resolve(); // Continue even if image fails
            };
          });
        });
        promises.push(...imagePromises);

        // Wait for window load event as well
        const windowLoadPromise = new Promise<void>((resolve) => {
          if (document.readyState === 'complete') {
            resolve();
          } else {
            window.addEventListener('load', () => resolve(), { once: true });
          }
        });
        promises.push(windowLoadPromise);

        Promise.all(promises).then(() => {
          // Small delay for smooth transition
          setTimeout(() => {
            setIsHiding(true);
            setTimeout(() => {
              setIsLoading(false);
              clearInterval(wordInterval);
              // Mark as visited
              if (typeof window !== 'undefined') {
                localStorage.setItem('hasVisited', 'true');
              }
            }, 800); // Match transition duration
          }, 300);
        });
      };

      // Start checking after a small delay to ensure DOM is ready
      const timeout = setTimeout(checkResourcesLoaded, 100);
      
      return () => {
        clearInterval(wordInterval);
        clearTimeout(timeout);
      };
    } else {
      setIsLoading(false);
    }
  }, []);

  if (!isFirstVisit || !isLoading) {
    return null;
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-[9999] bg-[var(--background)] flex items-center justify-center ${
          isHiding ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          pointerEvents: isHiding ? 'none' : 'auto',
        }}
      >
        <div className="text-center">
          <div
            key={currentWordIndex}
            className="text-[var(--blue-accent)] font-normal"
            style={{
              fontFamily: "'Hanken Grotesk', Arial, sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 400,
              animation: 'fadeInWord 0.5s ease-in-out',
            }}
          >
            {WORDS[currentWordIndex]}
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

