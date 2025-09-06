import { ReactNode } from 'react';

export function SectionTitle({ id, children }: { id: string; children: ReactNode }) {
  return (
    <div className="text-center animate-scale-in animate-delay-100">
      <div className="flex items-center justify-center mb-4 animate-fade-in-down animate-delay-200">
        <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#c5a572] to-transparent animate-slide-in-left animate-delay-300"></div>
        <div className="mx-4 w-2 h-2 bg-[#c5a572] rounded-full animate-bounce-in animate-delay-400"></div>
        <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#c5a572] to-transparent animate-slide-in-right animate-delay-300"></div>
      </div>
      <h2 id={id} className="section-title text-center text-[clamp(1.7rem,3.2vw,2.4rem)] font-display font-semibold tracking-tight mb-8 animate-fade-in-up animate-delay-500 hover-glow text-gradient">
        {children}
      </h2>
    </div>
  );
}
