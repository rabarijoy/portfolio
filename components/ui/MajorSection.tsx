import { ReactNode } from 'react';

interface MajorSectionProps {
  id: string;
  children: ReactNode;
}

export function MajorSection({ id, children }: MajorSectionProps) {
  return (
    <div id={id} className="scroll-mt-20">
      {children}
    </div>
  );
}

