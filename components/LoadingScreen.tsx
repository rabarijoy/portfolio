'use client';

import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentWord, setCurrentWord] = useState(0);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  const words = ['Akory', 'Hello', 'Bonjour'];

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited) {
      setIsLoading(false);
      return;
    }

    setIsFirstVisit(true);

    // Wait for all resources to load
    const checkResourcesLoaded = () => {
      // Check if document is ready
      if (document.readyState !== 'complete') {
        return false;
      }

      // Check if all images are loaded
      const images = Array.from(document.images);
      const allImagesLoaded = images.every((img) => img.complete);

      // Check if fonts are loaded
      if ('fonts' in document) {
        return document.fonts.ready.then(() => allImagesLoaded);
      }

      return allImagesLoaded;
    };

    const loadResources = async () => {
      // Wait for document to be ready
      if (document.readyState === 'loading') {
        await new Promise((resolve) => {
          document.addEventListener('DOMContentLoaded', resolve);
        });
      }

      // Wait for fonts
      if ('fonts' in document) {
        await document.fonts.ready;
      }

      // Wait for all images
      const images = Array.from(document.images);
      const imagePromises = images.map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = resolve; // Continue even if image fails
        });
      });

      await Promise.all(imagePromises);

      // Small delay for smooth transition
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Mark as visited
      localStorage.setItem('hasVisited', 'true');

      // Hide loading screen
      setIsLoading(false);
    };

    loadResources();
  }, []);

  // Animate words
  useEffect(() => {
    if (!isFirstVisit || !isLoading) return;

    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 1000); // Change word every second

    return () => clearInterval(interval);
  }, [isFirstVisit, isLoading]);

  if (!isFirstVisit || !isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[var(--background)] flex items-center justify-center transition-opacity duration-1000 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="text-center">
        <div
          key={currentWord}
          className="text-[var(--blue-accent)] font-normal text-4xl md:text-5xl lg:text-6xl animate-fade-in"
          style={{
            animation: 'fadeIn 0.5s ease-in-out',
          }}
        >
          {words[currentWord]}
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

