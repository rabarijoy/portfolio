import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'gray' | 'dark';
}

export function Section({ children, id, className = '', background = 'white' }: SectionProps) {
  // Use theme variables for background colors
  const getBackgroundColor = () => {
    if (background === 'gray') {
      return 'var(--theme-bg-secondary)';
    } else if (background === 'dark') {
      return 'var(--theme-bg-primary)';
    }
    return 'var(--theme-bg-primary)';
  };

  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 ${className}`}
      style={{
        backgroundColor: getBackgroundColor(),
        color: 'var(--theme-text-primary)',
        transition: 'background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s ease'
      }}
    >
      {children}
    </section>
  );
}

