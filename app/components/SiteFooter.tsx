import React from 'react';
import Image from 'next/image';

// Refined footer matching reference layout: columns + contact bar + socials + copyright
export function SiteFooter(){
  return (
    <footer aria-labelledby="footer-heading" className="mt-0 relative text-sm text-[#94a3b8] border-t border-[#141d29] bg-[#0b1118]">
      {/* subtle overlay & texture to blend with other dark sections */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0b1118] via-[#0b1118]/85 to-[#0b1118]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_30%,rgba(197,165,114,0.08),transparent_65%)]" />
      <h2 id="footer-heading" className="sr-only">ส่วนท้ายเว็บไซต์</h2>
      {/* Top columns - Mobile responsive */}
      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-8 pt-12 sm:pt-14 pb-8 sm:pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-y-6 sm:gap-y-8 lg:gap-y-10 gap-x-3 sm:gap-x-6 lg:gap-x-8" role="presentation">
          {/* Brand + intro - Full width on mobile (spans both columns) */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-3 flex flex-col mb-2 sm:mb-0">
            <div className="mb-3 sm:mb-4">
              <Image src="/img/logowhite.png" alt="โลโก้ พรีเมียมกันสาด" width={200} height={60} className="h-8 sm:h-9 lg:h-12 w-auto" sizes="(max-width:640px) 140px, (max-width:1024px) 160px, 200px" />
            </div>
            <p className="text-xs sm:text-[13px] leading-relaxed pr-1 sm:pr-4 opacity-90 max-w-xs text-[#b4c1d1]">ผู้เชี่ยวชาญด้านกันสาด ออกแบบ-ผลิต-ติดตั้ง ครบวงจร เน้นคุณภาพ วัสดุแท้ และดีไซน์ที่กลมกลืนกับอาคาร</p>
          </div>
          {/* Menu - Left column on mobile */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-2">
            <FooterHeading>เมนูลัด</FooterHeading>
            <FooterLinks items={[
              { href:'#', label:'หน้าหลัก' },
              { href:'#services', label:'บริการ' },
              { href:'#portfolio', label:'ผลงาน' },
              { href:'#faq', label:'คำถามที่พบบ่อย' },
              { href:'#contact', label:'ติดต่อ' }
            ]} ariaLabel="เมนูลัด" />
          </div>
          {/* Services - Right column on mobile */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-2">
            <FooterHeading>บริการ</FooterHeading>
            <FooterLinks items={[
              { href:'#services', label:'กันสาดบ้าน' },
              { href:'#services', label:'กันสาดร้านค้า' },
              { href:'#services', label:'โปร่งแสง / โพลีฯ' },
              { href:'#services', label:'ออกแบบเฉพาะไซต์' }
            ]} ariaLabel="บริการ" duplicateStrategy="index" />
          </div>
          {/* Support / help - Left column on mobile */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-2">
            <FooterHeading>ช่วยเหลือ</FooterHeading>
            <FooterLinks items={[
              { href:'#services', label:'ประเมินราคา' },
              { href:'#', label:'บทความ' },
              { href:'#faq', label:'คำถามที่พบบ่อย' },
              { href:'#contact', label:'ติดต่อเรา' }
            ]} ariaLabel="ช่วยเหลือ" />
          </div>
          {/* Address / company - Right column on mobile */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-3 flex flex-col">
            <FooterHeading>บริษัท</FooterHeading>
            <address className="not-italic space-y-2 text-xs sm:text-[13px] leading-relaxed">
              <div className="text-[11px] sm:text-xs lg:text-[13px]">123 ถนนสุขุมวิท ชั้น 4<br/>คลองเตย กรุงเทพฯ 10110</div>
              <div className="flex items-start gap-1.5 sm:gap-2">
                <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-4 sm:h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:0812345678" className="hover:text-[#c5a572] transition touch-manipulation text-[11px] sm:text-xs">081-234-5678</a>
              </div>
              <div className="flex items-start gap-1.5 sm:gap-2">
                <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-4 sm:h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
                <a href="mailto:contact@premiumawning.co.th" className="hover:text-[#c5a572] transition touch-manipulation break-all text-[11px] sm:text-xs">contact@premiumawning.co.th</a>
              </div>
              <div className="flex items-start gap-1.5 sm:gap-2">
                <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-4 sm:h-4 shrink-0 mt-0.5" fill="currentColor" stroke="none"><path d="M12.02 3C6.49 3 2 6.94 2 11.79c0 2.76 1.48 5.21 3.78 6.86.19.14.31.36.31.6l-.07 1.88c-.02.55.58.9 1.05.62l2.51-1.49c.17-.1.37-.15.57-.15.3.01.61.02.94.02 5.53 0 10.02-3.94 10.02-8.79C21.1 6.94 17.55 3 12.02 3z"/></svg>
                <a href="https://line.me/R/ti/p/@premiumawning" className="hover:text-[#c5a572] transition touch-manipulation text-[11px] sm:text-xs">@premiumawning</a>
              </div>
            </address>
          </div>
          {/* Watermark removed */}
        </div>

        {/* Contact bar - Mobile responsive */}
        <div className="mt-10 sm:mt-12 flex flex-col gap-4 sm:gap-6 border-y border-[#1e2a37] py-5 sm:py-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 sm:gap-6 lg:gap-10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#141e29] border border-[#1f2d3b] text-[#c5a572] shadow-inner">
                <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div className="text-[#e2e8f0] font-semibold text-lg sm:text-xl lg:text-2xl tracking-wide">081-234-5678</div>
              <div className="hidden lg:block h-8 w-px bg-[#1e2a37] ml-4" />
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <SocialLink href="https://facebook.com/premiumawning" label="Facebook" svg={<path d="M13 10h3V7h-3c-1.7 0-3 1.4-3 3v2H8v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z" />} />
              <SocialLink href="https://line.me/R/ti/p/@premiumawning" label="LINE" svg={<path d="M12.02 3C6.49 3 2 6.94 2 11.79c0 2.76 1.48 5.21 3.78 6.86.19.14.31.36.31.6l-.07 1.88c-.02.55.58.9 1.05.62l2.51-1.49c.17-.1.37-.15.57-.15.3.01.61.02.94.02 5.53 0 10.02-3.94 10.02-8.79C21.1 6.94 17.55 3 12.02 3z" />} />
              <SocialLink href="mailto:contact@premiumawning.co.th" label="Email" svg={<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></>} />
              <SocialLink href="#services" label="Services" svg={<><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>} />
            </div>
          </div>
        </div>

        {/* Copyright - Mobile responsive */}
        <div className="pt-5 sm:pt-6 text-center text-xs sm:text-[12px] tracking-wide text-[#647587]">
          <p>© {new Date().getFullYear()} พรีเมียมกันสาด. สงวนสิทธิ์ทั้งหมด</p>
          <p className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[.2em] sm:tracking-[.25em] text-[#4f5a64]">PREMIUM AWNING • DESIGN • INSTALLATION • SERVICE</p>
        </div>
        <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{__html: JSON.stringify({
          '@context':'https://schema.org',
          '@type':'Organization',
          name:'พรีเมียมกันสาด',
          url:'https://www.example.com',
          logo:'https://www.example.com/img/logowhite.png',
          contactPoint:[{ '@type':'ContactPoint', telephone:'+66-81-234-5678', contactType:'customer service', areaServed:'TH', availableLanguage:['th','en']}]
        }) }} />
      </div>
    </footer>
  );
}

function SocialLink({ href, label, svg }: { href: string; label: string; svg: React.ReactNode; }) {
  return (
    <a 
      href={href} 
      aria-label={label} 
      className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-[#1f2d3b] bg-[#141e29] flex items-center justify-center text-[#9fb0bf] hover:text-[#c5a572] hover:border-[#c5a572] hover:bg-[#1d2935] transition-all duration-300 shadow-[0_0_0_1px_#1a242e,0_4px_12px_-6px_rgba(0,0,0,.5)] touch-manipulation"
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" stroke="none">{svg}</svg>
    </a>
  );
}

interface FooterLinkItem { href:string; label:string; external?:boolean }
function FooterLinks({ items, ariaLabel, duplicateStrategy='href' }: { items: FooterLinkItem[]; ariaLabel:string; duplicateStrategy?:'href'|'index'; }) {
  return (
    <nav aria-label={ariaLabel} className="contents">
      <ul className="flex flex-col gap-1.5 text-[11px] sm:text-xs lg:text-[13px]">
        {items.map((it,i)=>{
          const key = duplicateStrategy==='index' ? `${ariaLabel}-${i}` : `${ariaLabel}-${it.href}-${it.label}-${i}`;
          return (
            <li key={key}>
              <a
                href={it.href}
                {...(it.external? { rel:'noopener noreferrer', target:'_blank' }: {})}
                className="inline-block py-1.5 sm:py-1 pr-2 hover:text-[#c5a572] transition-colors duration-200 touch-manipulation active:text-[#d9bf8d]"
              >
                {it.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function FooterHeading({ children }: { children: React.ReactNode; }) {
  return (
    <h3 className="font-display text-[13px] sm:text-[14px] mb-3 sm:mb-4 font-semibold tracking-wide text-white relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-6 after:bg-[#c5a572]/70">{children}</h3>
  );
}
