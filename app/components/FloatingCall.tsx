export function FloatingCall() {
  return (
    <div className="fixed right-3 sm:right-4 bottom-3 sm:bottom-4 z-50">
      {/* Main button */}
      <a href="tel:0812345678" className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#c5a572] text-[#111827] flex items-center justify-center shadow-lg border border-[#d2b98f] hover:brightness-110 transition-all duration-300 group" aria-label="โทรเลย">
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" stroke="currentColor" strokeWidth={1.6} fill="none">
          <path d="M5 4l4 1 2 5-2 2a14 14 0 006 6l2-2 5 2 1 4c-1 1.5-3.5 2-5 2A17 17 0 015 9c0-1.5.5-4 2-5z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        
        {/* Online indicator */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full">
          <div className="absolute inset-0 bg-green-400 rounded-full"></div>
        </div>
      </a>
    </div>
  );
}
