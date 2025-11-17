'use client';

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface LoadingContextType {
  triggerLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [loadingKey, setLoadingKey] = useState(0);

  const triggerLoading = useCallback(() => {
    // Force re-render of LoadingScreen by changing key
    setLoadingKey((prev) => prev + 1);
  }, []);

  return (
    <LoadingContext.Provider value={{ triggerLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}

