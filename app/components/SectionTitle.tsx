import { ReactNode } from 'react';

export function SectionTitle({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="section-title text-center text-[clamp(1.7rem,3.2vw,2.4rem)] font-display font-semibold tracking-tight mb-8">
      {children}
    </h2>
  );
}
