import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'gray' | 'dark';
}

export function Section({ children, id, className = '', background = 'white' }: SectionProps) {
  // Utiliser les variables de thème dynamiques
  const getBackgroundStyle = () => {
    if (background === 'gray') {
      return { backgroundColor: 'var(--theme-bg-secondary)' };
    } else if (background === 'dark') {
      return { backgroundColor: 'var(--theme-bg-primary)' };
    }
    return { backgroundColor: 'var(--theme-bg-primary)' };
  };

  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 ${className}`}
      style={{
        ...getBackgroundStyle(),
        color: 'var(--theme-text-primary)',
        transition: 'background-color 0.6s cubic-bezier(0.4, 0, 0.2, 1), color 0.4s ease-out'
      }}
    >
      {children}
    </section>
  );
}

