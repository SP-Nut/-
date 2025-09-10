"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'หน้าหลัก', href: '/' },
  { name: 'ผลงาน', href: '/portfolio' },
  { name: 'วัสดุ', href: '/materials' },
  { name: 'บริการ', href: '/#services' },
  { name: 'FAQ', href: '/#faq' },
  { name: 'ติดต่อ', href: '/#contact' }
];

export function Header() {
  // Transparent only while the hero section is visible
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const retryTimerRef = useRef<number | null>(null);

  useEffect(() => {
    // Clean up previous observer and timers
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
    if (retryTimerRef.current) {
      window.clearTimeout(retryTimerRef.current);
      retryTimerRef.current = null;
    }

    let attempts = 0;
    const attach = () => {
      const hero = document.querySelector('.hero-modern');
      if (!hero) {
        // Retry briefly until hero mounts (handles streaming/hydration timing)
        if (attempts < 20) {
          attempts += 1;
          retryTimerRef.current = window.setTimeout(attach, 75);
        } else {
          // No hero on this page -> always show background
          setIsHeroVisible(false);
        }
        return;
      }

      // Create observer; subtract header height so we flip once hero top passes header
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          setIsHeroVisible(entry.isIntersecting);
        },
  { threshold: 0.01, rootMargin: '-68px 0px 0px 0px' }
      );
      observerRef.current.observe(hero);

      // Initialize immediately based on current position
      const rect = (hero as HTMLElement).getBoundingClientRect();
      setIsHeroVisible(rect.bottom > 64);
    };

    attach();

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
      if (retryTimerRef.current) window.clearTimeout(retryTimerRef.current);
    };
  }, [pathname]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // For anchor links on the same page
    if (href.startsWith('/#') && pathname === '/') {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname === href) return true;
    return false;
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          (!isHeroVisible || isMobileMenuOpen)
            ? 'bg-[#0a0f1a]/95 backdrop-blur-lg'
            : 'bg-transparent backdrop-blur-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="block">
                <Image 
                  src="/img/logowhite.png" 
                  alt="พรีเมียมกันสาด" 
                  width={160} 
                  height={45} 
                  className="h-10 w-auto hover:scale-105 transition-transform duration-200"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith('/#') && pathname === '/') {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }
                    }}
                    className={`px-3 py-2 text-base font-medium transition-all duration-200 hover:transform hover:scale-105 ${
                      isActive(item.href)
                        ? 'text-[#c5a572] font-semibold'
                        : 'text-gray-300 hover:text-[#c5a572]'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://cal-customer.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c5a572] hover:bg-[#b8986a] text-white px-6 py-2.5 text-base font-medium transition-all duration-200 hover:shadow-lg transform hover:scale-105"
              >
                ประเมินราคาฟรี
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={handleMobileMenuToggle}
                className="text-gray-300 hover:text-white p-2"
                aria-label="เปิดเมนู"
              >
                {isMobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0a0f1a]/98 backdrop-blur-lg border-t border-[#1e2a3a]">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith('/#') && pathname === '/') {
                      e.preventDefault();
                      handleNavClick(item.href);
                    } else {
                      setIsMobileMenuOpen(false);
                    }
                  }}
                  className={`block px-3 py-2 text-base font-medium transition-all duration-200 hover:transform hover:scale-105 ${
                    isActive(item.href)
                      ? 'text-[#c5a572] font-semibold'
                      : 'text-gray-300 hover:text-[#c5a572]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 pb-2">
                <a
                  href="https://cal-customer.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#c5a572] hover:bg-[#b8986a] text-white block w-full text-center px-6 py-3.5 text-base font-medium transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                >
                  ประเมินราคาฟรี
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

  {/* Spacer for fixed header: only when hero is NOT visible */}
  <div className={(!isHeroVisible || isMobileMenuOpen) ? 'h-16' : 'h-0'}></div>
    </>
  );
}
