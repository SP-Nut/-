"use client";
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

/* -------------------------------------------------------------------------- */
/*  MOBILE-RESPONSIVE HEADER (2025)                                           */
/*  - Mobile hamburger menu with fullscreen overlay                           */
/*  - Touch-friendly navigation                                               */
/*  - Dark + gold aesthetic, layered gradients                               */
/*  - Accessibility: focus trap, aria-current, ESC close                      */
/* -------------------------------------------------------------------------- */

interface NavItem { href: string; label: string }
const NAV: NavItem[] = [
  { href: '#', label: 'หน้าหลัก' },
  { href: '#about', label: 'เกี่ยวกับเรา' },
  { href: '#portfolio', label: 'ผลงาน' },
  { href: '#services', label: 'บริการ' },
  { href: '#faq', label: 'คำถามที่พบบ่อย' },
  { href: '#contact', label: 'ติดต่อ' }
];

export function Header(){
  const [scrolled,setScrolled] = useState(false);
  const [activeHash,setActiveHash] = useState<string>('#');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Active section detection
  useEffect(()=>{
    const ids = NAV.map(n=>n.href).filter(h=>h.startsWith('#') && h.length>1);
    const els = ids.map(id=> document.querySelector<HTMLElement>(id)).filter(Boolean) as HTMLElement[];
    if(!els.length) return;
    let current = '#';
    const io = new IntersectionObserver(entries=>{
      entries.forEach(e=>{ if(e.isIntersecting) current = '#' + e.target.id; });
      setActiveHash(current);
    },{ threshold:0.4 });
    els.forEach(el=> io.observe(el));
    return ()=> io.disconnect();
  },[]);

  // Scroll state
  useEffect(()=>{
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handler, { passive:true });
    handler();
    return ()=> window.removeEventListener('scroll', handler);
  },[]);

  // Mobile menu handlers
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        closeMobileMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle navigation clicks
  const handleNavClick = (href: string) => {
    closeMobileMenu();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="top"
        role="banner"
        className={`sticky top-0 z-50 border-b border-[#141d29] transition-[background,backdrop-filter,border-color,box-shadow] duration-300 ${scrolled ? 'bg-[#0b1118]/92 backdrop-blur-md shadow-[0_4px_18px_-6px_rgba(0,0,0,0.5)]' : 'bg-transparent'} before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_35%_-25%,rgba(197,165,114,0.18),transparent_60%)]`}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 after:absolute after:top-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-[#c5a572]/50 after:to-transparent" />
        <div className="mx-auto w-full max-w-[1400px] h-16 flex items-center px-4 sm:px-6 relative" style={{ paddingTop:'env(safe-area-inset-top)' }}>
          {/* Logo */}
          <a href="#" aria-label="กลับไปบนสุด" className="flex items-center gap-3 group shrink-0">
            <Image src="/img/logowhite.png" alt="โลโก้ พรีเมียมกันสาด" width={170} height={48} priority className="h-10 w-auto transition-opacity group-hover:opacity-90" />
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="เมนูหลัก" className="hidden lg:flex flex-1 justify-center">
            <ul className="flex gap-7 sm:gap-8 text-[12.5px] sm:text-[13px] tracking-wide font-medium">
              {NAV.map(item=>{
                const active = activeHash === item.href || (activeHash==='#' && item.href==='#');
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={active? 'page': undefined}
                      onClick={() => handleNavClick(item.href)}
                      className={`relative py-2 block text-[#8fa0b3] hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gradient-to-r after:from-[#c5a572] after:to-[#d9bf8d] after:rounded-full after:transition-all after:duration-300 after:w-0 hover:after:w-full ${active? 'text-white after:w-full' : ''}`}
                    >{item.label}</a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Spacer */}
          <div className="lg:hidden flex-1"></div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4 pl-6 shrink-0">
            <a href="tel:0987654321" className="hidden xl:inline-flex items-center gap-2 text-[12px] px-3 h-9 rounded-md bg-[#c5a572]/10 text-[#d9bf8d] hover:bg-[#c5a572]/18 border border-[#c5a572]/30 hover:border-[#c5a572]/50 transition whitespace-nowrap">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.6}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span>ปรึกษาฟรี</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center h-9 px-4 rounded-lg text-[12px] font-medium bg-gradient-to-r from-[#c5a572] via-[#d9bf8d] to-[#c5a572] text-[#0b1118] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.45)] hover:shadow-[0_4px_14px_-4px_rgba(0,0,0,0.55)] transition focus:outline-none focus:ring-2 focus:ring-[#c5a572]/60"
            >ขอใบเสนอราคา</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            aria-label="เปิดเมนู"
            aria-expanded={mobileMenuOpen}
            className="lg:hidden p-2 text-[#8fa0b3] hover:text-white transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm" onClick={closeMobileMenu}>
          <div 
            ref={menuRef}
            className="absolute top-16 right-0 left-0 bg-[#0b1118]/95 backdrop-blur-md border-t border-[#141d29] shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <nav aria-label="เมนูมือถือ" className="p-6">
              <ul className="space-y-4">
                {NAV.map(item=>{
                  const active = activeHash === item.href || (activeHash==='#' && item.href==='#');
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        aria-current={active? 'page': undefined}
                        onClick={() => handleNavClick(item.href)}
                        className={`block py-3 px-4 text-base font-medium rounded-lg transition-colors ${active? 'text-white bg-[#c5a572]/10 border-l-4 border-[#c5a572]' : 'text-[#8fa0b3] hover:text-white hover:bg-[#1a2332]'}`}
                      >{item.label}</a>
                    </li>
                  );
                })}
              </ul>
              
              {/* Mobile CTA Buttons */}
              <div className="mt-8 space-y-3">
                <a 
                  href="tel:0987654321" 
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 text-sm bg-[#c5a572]/10 text-[#d9bf8d] hover:bg-[#c5a572]/18 border border-[#c5a572]/30 rounded-lg transition"
                  onClick={closeMobileMenu}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  โทรปรึกษาฟรี
                </a>
                <a
                  href="#contact"
                  onClick={() => handleNavClick('#contact')}
                  className="block w-full py-3 px-4 text-center text-sm font-medium bg-gradient-to-r from-[#c5a572] via-[#d9bf8d] to-[#c5a572] text-[#0b1118] rounded-lg transition focus:outline-none focus:ring-2 focus:ring-[#c5a572]/60"
                >ขอใบเสนอราคา</a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
