"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

/* -------------------------------------------------------------------------- */
/*  NEW HEADER (2025)                                                         */
/*  - Simplified logic (no auto-hide/progress bar)                            */
/*  - Order: Portfolio before Services                                        */
/*  - Dark + gold aesthetic, layered gradients                               */
/*  - Accessibility: focus trap, aria-current, ESC close                      */
/*  - Mobile full-screen sheet                                                */
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

  // (Mobile menu removed – nav always visible)

  return (
    <header
      id="top"
      role="banner"
  className={`sticky top-0 z-50 border-b border-[#141d29] transition-[background,backdrop-filter,border-color,box-shadow] duration-300 ${scrolled ? 'bg-[#0b1118]/92 backdrop-blur-md shadow-[0_4px_18px_-6px_rgba(0,0,0,0.5)]' : 'bg-transparent'} before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_35%_-25%,rgba(197,165,114,0.18),transparent_60%)]`}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 after:absolute after:top-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-[#c5a572]/50 after:to-transparent" />
      <div className="mx-auto w-full max-w-[1400px] h-16 flex items-center px-4 sm:px-6 relative" style={{ paddingTop:'env(safe-area-inset-top)' }}>
        <a href="#" aria-label="กลับไปบนสุด" className="flex items-center gap-3 group shrink-0">
          <Image src="/img/logowhite.png" alt="โลโก้ พรีเมียมกันสาด" width={170} height={48} priority className="h-10 w-auto transition-opacity group-hover:opacity-90" />
        </a>
        <nav aria-label="เมนูหลัก" className="flex flex-1 justify-center">
          <ul className="flex gap-7 sm:gap-8 text-[12.5px] sm:text-[13px] tracking-wide font-medium overflow-x-auto no-scrollbar px-6 sm:px-0">
            {NAV.map(item=>{
              const active = activeHash === item.href || (activeHash==='#' && item.href==='#');
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={active? 'page': undefined}
                    className={`relative py-2 block text-[#8fa0b3] hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gradient-to-r after:from-[#c5a572] after:to-[#d9bf8d] after:rounded-full after:transition-all after:duration-300 after:w-0 hover:after:w-full ${active? 'text-white after:w-full' : ''}`}
                  >{item.label}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="hidden sm:flex items-center gap-4 pl-6 shrink-0">
          <a href="tel:0987654321" className="hidden xl:inline-flex items-center gap-2 text-[12px] px-3 h-9 rounded-md bg-[#c5a572]/10 text-[#d9bf8d] hover:bg-[#c5a572]/18 border border-[#c5a572]/30 hover:border-[#c5a572]/50 transition whitespace-nowrap">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.6}><path d="M4 5l4-2 4 2v4l-4 2-4-2V5zM12 7l4-2 4 2v4l-4 2-4-2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span>ปรึกษาฟรี</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center h-9 px-4 rounded-lg text-[12px] font-medium bg-gradient-to-r from-[#c5a572] via-[#d9bf8d] to-[#c5a572] text-[#0b1118] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.45)] hover:shadow-[0_4px_14px_-4px_rgba(0,0,0,0.55)] transition focus:outline-none focus:ring-2 focus:ring-[#c5a572]/60"
          >ขอใบเสนอราคา</a>
        </div>
      
      </div>
    </header>
  );
}
