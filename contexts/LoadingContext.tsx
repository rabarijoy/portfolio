'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface LoadingContextType {
  showLoading: () => void;
  isLoading: boolean;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  const showLoading = () => {
    setIsLoading(true);
  };

  return (
    <LoadingContext.Provider value={{ showLoading, isLoading }}>
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

