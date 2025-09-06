import { ReactNode } from 'react';

export function SectionTitle({ id, children }: { id: string; children: ReactNode }) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center mb-4">
        <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#c5a572] to-transparent"></div>
        <div className="mx-4 w-2 h-2 bg-[#c5a572] rounded-full"></div>
        <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#c5a572] to-transparent"></div>
      </div>
      <h2 id={id} className="section-title text-center text-[clamp(1.7rem,3.2vw,2.4rem)] font-display font-semibold tracking-tight mb-8 text-gradient">
        {children}
      </h2>
    </div>
  );
}
