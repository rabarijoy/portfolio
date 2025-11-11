import { ReactNode } from 'react';

interface MajorSectionProps {
  id: string;
  children: ReactNode;
}

export function MajorSection({ id, children }: MajorSectionProps) {
  return (
    <section id={id} className="relative">
      {children}
    </section>
  );
}

