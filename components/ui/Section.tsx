import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'gray' | 'dark';
  withSubtleSeparator?: boolean;
}

export function Section({ children, id, className = '', background = 'white', withSubtleSeparator = false }: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900 text-white',
  };

  return (
    <section 
      id={id} 
      className={`section-base relative ${backgrounds[background]} ${className} ${
        withSubtleSeparator ? 'before:content-[""] before:absolute before:top-0 before:left-0 before:right-0 before:h-[0.5px] before:bg-gradient-to-r before:from-transparent before:via-gray-200/30 before:to-transparent' : ''
      }`}
    >
      {children}
    </section>
  );
}

