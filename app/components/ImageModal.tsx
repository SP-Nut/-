import Image from "next/image";

export function ImageModal() {
  return (
    <div id="imageModal" className="fixed inset-0 bg-black/80 z-[999] items-center justify-center p-4 hidden" role="dialog" aria-modal="true" aria-labelledby="modalImage">
      <div className="relative max-w-[90vw] max-h-[90vh]">
        <button id="modalClose" className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-colors" aria-label="ปิด">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M6 6l12 12M6 18L18 6"/>
          </svg>
        </button>
        <Image id="modalImage" src="/img/01.jpg" alt="" width={1200} height={800} className="max-w-full max-h-full object-contain rounded-lg" />
      </div>
    </div>
  );
}
