"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';

// Client logos data
const clientLogos = [
  {
    id: 1,
    name: "Central Group",
    logo: "/img/clients/central.png",
    alt: "Central Group - ห้างเซ็นทรัล"
  },
  {
    id: 2,
    name: "CP Group",
    logo: "/img/clients/cp.png",
    alt: "CP Group - เจริญโภคภัณฑ์"
  },
  {
    id: 3,
    name: "PTT",
    logo: "/img/clients/ptt.png",
    alt: "PTT - ปตท."
  },
  {
    id: 4,
    name: "SCG",
    logo: "/img/clients/scg.png",
    alt: "SCG - ปูนซิเมนต์ไทย"
  },
  {
    id: 5,
    name: "Siam Cement",
    logo: "/img/clients/siam-cement.png",
    alt: "Siam Cement - สยามซีเมนต์"
  },
  {
    id: 6,
    name: "Robinson",
    logo: "/img/clients/robinson.png",
    alt: "Robinson - โรบินสัน"
  },
  {
    id: 7,
    name: "Major",
    logo: "/img/clients/major.png",
    alt: "Major Cineplex - เมเจอร์ซีนีเพล็กซ์"
  },
  {
    id: 8,
    name: "Tesco Lotus",
    logo: "/img/clients/lotus.png",
    alt: "Tesco Lotus - เทสโก้ โลตัส"
  },
  {
    id: 9,
    name: "The Mall",
    logo: "/img/clients/themall.png",
    alt: "The Mall - เดอะมอลล์"
  },
  {
    id: 10,
    name: "Siam Paragon",
    logo: "/img/clients/paragon.png",
    alt: "Siam Paragon - สยามพารากอน"
  },
  {
    id: 11,
    name: "Emporium",
    logo: "/img/clients/emporium.png",
    alt: "Emporium - เอ็มโพเรียม"
  },
  {
    id: 12,
    name: "King Power",
    logo: "/img/clients/kingpower.png",
    alt: "King Power - คิงเพาเวอร์"
  }
];

export function ClientsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    // Responsive speed (slower on mobile)
  const scrollSpeed = (typeof window !== 'undefined' && window.innerWidth < 640) ? 0.5 : 1;

    // Respect user preferences: disable animation if reduced motion
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      return; // Don't start animation
    }

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      const maxScroll = scrollContainer.scrollWidth / 2;
      
      // Reset when we've scrolled past half the content (seamless loop)
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    // Ensure content is duplicated enough for smooth scrolling
    const startAnimation = () => {
      if (scrollContainer.scrollWidth > scrollContainer.clientWidth) {
        animationId = requestAnimationFrame(animate);
      }
    };

    // Start animation after a brief delay to ensure DOM is ready
    setTimeout(startAnimation, 100);

    // Pause on hover (desktop) and on touch (mobile)
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => { animationId = requestAnimationFrame(animate); };
    const handleTouchStart = () => cancelAnimationFrame(animationId);
    const handleTouchEnd = () => { animationId = requestAnimationFrame(animate); };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
    scrollContainer.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      scrollContainer.removeEventListener('touchstart', handleTouchStart);
      scrollContainer.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  // Duplicate logos for seamless scrolling
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="relative" id="clients">
      {/* Top Section - Scrolling Client Logos */}
      <div className="bg-white py-8 md:py-12 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              ลูกค้าของเรา
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              มากกว่า 500+ ลูกค้าองค์กรและแบรนด์ชั้นนำไว้วางใจให้เราดูแล
            </p>
          </div>

          {/* Scrolling Logos Container */}
          <div className="relative w-full overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 w-6 sm:w-10 md:w-12 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 w-6 sm:w-10 md:w-12 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling container */}
            <div 
              ref={scrollRef}
              className="overflow-x-auto scrollbar-hide py-4 sm:py-5 md:py-8"
              style={{ 
                scrollBehavior: 'auto',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none'
              }}
            >
              <div className="flex gap-5 md:gap-10 items-center" style={{ width: 'max-content' }}>
                {duplicatedLogos.map((client, index) => (
                  <div
                    key={`${client.id}-${index}`}
                    className="flex-shrink-0 w-24 sm:w-28 md:w-36 h-12 sm:h-14 md:h-18 relative group"
                  >
                    <div className="w-full h-full bg-gray-50 rounded-md sm:rounded-lg shadow-sm border border-gray-100 flex items-center justify-center p-2 sm:p-3 md:p-4 transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
                      {/* Placeholder for logo */}
                      <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center text-gray-500 text-[10px] sm:text-xs font-medium text-center leading-tight px-1">
                        {client.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    {/* Bottom Section - Two Column Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-2">
        
    {/* Left Column - Text Overlay on Dark Image Background */}
  <div className="relative overflow-hidden flex items-center justify-center aspect-[16/9] lg:aspect-auto lg:h-[520px]">
          {/* Background Image */}
          <Image 
            src="/img/01.jpg" 
            alt="SP Kansard Background"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 md:bg-black/70"></div>
          
          {/* Additional Pattern Overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-white p-4 sm:p-6 lg:p-12 max-w-md">
            <h3 className="text-base sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 leading-tight">
              &ldquo;เลือก SP Kansard เพราะมีคุณภาพดี ดีไซน์สวย
              แข็งแรง ทนทาน ราคาเหมาะสม&rdquo;
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">
              SP Kansard ผู้เชี่ยวชาญด้านงานกันสาดและโครงสร้างเหล็ก มีประสบการณ์กว่า 15 ปี 
              ใช้วัสดุคุณภาพสูง ติดตั้งโดยช่างผู้เชี่ยวชาญ
            </p>
          </div>
        </div>

    {/* Right Column - Image with Logo Overlay */}
  <div className="relative overflow-hidden aspect-[16/9] lg:aspect-auto lg:h-[520px]">
          <Image 
            src="/img/pr.jpg" 
            alt="ลูกค้า SP Kansard"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          
          {/* Side overlay (all screens) */}
          <div className="absolute top-0 right-0 bottom-0 w-[34%] sm:w-[34%] lg:w-[25%] bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center">
            <div className="text-center px-2 lg:px-4">
              {/* Logo Area */}
              <div className="mb-4">
                <div className="w-16 h-10 lg:w-24 lg:h-14 relative mx-auto mb-2">
                  <Image
                    src="/img/logowhite.png"
                    alt="SP Kansard Logo"
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
              </div>
              
              {/* Text Content */}
              <div className="text-white font-bold text-sm lg:text-xl mb-1">
                SP KANSARD
              </div>
              <div className="text-gray-300 font-medium text-xs lg:text-base leading-tight">
                ยืนหนึ่งเรื่องกันสาด
              </div>
            </div>
          </div>

          {/* Removed mobile bottom overlay to match desktop */}
        </div>

      </div>
    </section>
  );
}
