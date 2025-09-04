import React from 'react';
import Image from 'next/image';

const navItems = [
  { href: '#', label: 'หน้าหลัก' },
  { href: '#about', label: 'เกี่ยวกับเรา' },
  { href: '#services', label: 'บริการ' },
  { href: '#portfolio', label: 'ผลงาน' },
  { href: '#faq', label: 'คำถามที่พบบ่อย' },
  { href: '#contact', label: 'ติดต่อ' }
];

export function Header(){
  return (
    <header id="top" className="site-header sticky top-0 z-50 border-b">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center" aria-label="กลับไปบนสุด">
          <Image src="/img/logowhite.png" alt="โลโก้" width={180} height={50} priority className="h-10 w-auto" />
        </a>
        <nav aria-label="เมนูหลัก" className="hidden md:block">
          <ul className="flex gap-6 text-[13px] text-[#94a3b8]">
            {navItems.map(i => (
              <li key={i.href}><a href={i.href} className="relative after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-[#c5a572] after:transition-all hover:text-white hover:after:w-full">{i.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden lg:inline-flex btn-primary">ขอใบเสนอราคา</a>
          <MobileMenu />
        </div>
      </div>
      <MobileMenuPanel />
    </header>
  );
}

function MobileMenu(){
  return (
    <button aria-label="เมนู" aria-controls="mobileMenu" aria-expanded="false" className="md:hidden w-11 h-11 grid place-content-center rounded-xl border border-[#1f2937] text-white" id="mobileToggle">
      <svg viewBox="0 0 24 24" className="w-6 h-6" stroke="currentColor" strokeWidth={2} fill="none"><path d="M3 6h18M3 12h18M9 18h12" strokeLinecap="round" /></svg>
    </button>
  );
}

function MobileMenuPanel(){
  return (
    <div id="mobileMenu" className="hidden flex-col px-5 pb-4 md:hidden" aria-label="เมนูมือถือ">
      {navItems.map(i => (
        <a key={i.href} href={i.href} className="py-3 border-b border-[#1a2535] text-sm">{i.label}</a>
      ))}
      <a href="#contact" className="mt-3 btn-secondary w-full text-center">ขอใบเสนอราคา</a>
    </div>
  );
}
