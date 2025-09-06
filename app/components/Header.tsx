"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

const navigation = [
  { name: 'หน้าหลัก', href: '#home' },
  { name: 'เกี่ยวกับเรา', href: '#about' },
  { name: 'ผลงาน', href: '#portfolio' },
  { name: 'บริการ', href: '#services' },
  { name: 'FAQ', href: '#faq' },
  { name: 'ติดต่อ', href: '#contact' }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0a0f1a]/95 backdrop-blur-lg border-b border-[#1e2a3a]' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a 
                href="#home" 
                onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
                className="block"
              >
                <Image 
                  src="/img/logowhite.png" 
                  alt="พรีเมียมกันสาด" 
                  width={160} 
                  height={45} 
                  className="h-10 w-auto"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                    className="text-gray-300 hover:text-[#c5a572] px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:0812345678"
                className="bg-[#c5a572] hover:bg-[#b8986a] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                โทรเลย
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
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className="text-gray-300 hover:text-[#c5a572] block px-3 py-2 text-base font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 pb-2">
                <a
                  href="tel:0812345678"
                  className="bg-[#c5a572] hover:bg-[#b8986a] text-white block w-full text-center px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  โทรเลย
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16"></div>
    </>
  );
}
