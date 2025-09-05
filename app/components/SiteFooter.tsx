import React from 'react';
import Image from 'next/image';

// Refined footer matching reference layout: columns + contact bar + socials + copyright
export function SiteFooter(){
  return (
    <footer aria-labelledby="footer-heading" className="mt-0 relative bg-[#2f3237] text-sm text-[#9aa4af] border-t border-[#3a3e44]">
      <h2 id="footer-heading" className="sr-only">ส่วนท้ายเว็บไซต์</h2>
      {/* Top columns */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 pt-14 pb-10">
        <div className="grid grid-cols-12 gap-y-10 gap-x-8">
          {/* Brand + intro */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col">
            <div className="mb-5">
              <Image src="/img/logowhite.png" alt="พรีเมียมกันสาด" width={200} height={60} className="h-10 sm:h-12 w-auto" />
            </div>
            <p className="text-[13px] leading-relaxed pr-4 opacity-90 max-w-xs">ผู้เชี่ยวชาญด้านกันสาด ออกแบบ-ผลิต-ติดตั้ง ครบวงจร เน้นคุณภาพ วัสดุแท้ และดีไซน์ที่กลมกลืนกับอาคาร</p>
          </div>
          {/* Menu */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <FooterHeading>เมนูลัด</FooterHeading>
            <FooterLinks links={["#","#services","#portfolio","#faq","#contact"]} labels={["หน้าหลัก","บริการ","ผลงาน","คำถามที่พบบ่อย","ติดต่อ"]} />
          </div>
          {/* Services */}
            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <FooterHeading>บริการ</FooterHeading>
            <FooterLinks links={["#services","#services","#services","#services"]} labels={["กันสาดบ้าน","กันสาดร้านค้า","โปร่งแสง / โพลีฯ","ออกแบบเฉพาะไซต์"]} />
          </div>
          {/* Support / help */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <FooterHeading>ช่วยเหลือ</FooterHeading>
            <FooterLinks links={["#services","#","#faq","#contact"]} labels={["ประเมินราคา","บทความ","คำถามที่พบบ่อย","ติดต่อเรา"]} />
          </div>
          {/* Address / company */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col">
            <FooterHeading>บริษัท</FooterHeading>
            <address className="not-italic space-y-2 text-[13px] leading-relaxed">
              <div>123 ถนนสุขุมวิท ชั้น 4<br/>คลองเตย กรุงเทพฯ 10110</div>
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:0812345678" className="hover:text-[#c5a572] transition">081-234-5678</a>
              </div>
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
                <a href="mailto:contact@premiumawning.co.th" className="hover:text-[#c5a572] transition">contact@premiumawning.co.th</a>
              </div>
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" stroke="none"><path d="M12.02 3C6.49 3 2 6.94 2 11.79c0 2.76 1.48 5.21 3.78 6.86.19.14.31.36.31.6l-.07 1.88c-.02.55.58.9 1.05.62l2.51-1.49c.17-.1.37-.15.57-.15.3.01.61.02.94.02 5.53 0 10.02-3.94 10.02-8.79C21.1 6.94 17.55 3 12.02 3z"/></svg>
                <a href="https://line.me/R/ti/p/@premiumawning" className="hover:text-[#c5a572] transition">@premiumawning</a>
              </div>
            </address>
          </div>
          {/* Watermark removed */}
        </div>

        {/* Contact bar */}
        <div className="mt-12 flex flex-col gap-6 border-y border-[#3a3e44] py-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#3a3e44] text-[#c5a572]">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div className="text-white font-semibold text-xl sm:text-2xl tracking-wide">081-234-5678</div>
              <div className="hidden lg:block h-8 w-px bg-[#3a3e44] ml-4" />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <SocialLink href="https://facebook.com/premiumawning" label="Facebook" svg={<path d="M13 10h3V7h-3c-1.7 0-3 1.4-3 3v2H8v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z" />} />
              <SocialLink href="https://line.me/R/ti/p/@premiumawning" label="LINE" svg={<path d="M12.02 3C6.49 3 2 6.94 2 11.79c0 2.76 1.48 5.21 3.78 6.86.19.14.31.36.31.6l-.07 1.88c-.02.55.58.9 1.05.62l2.51-1.49c.17-.1.37-.15.57-.15.3.01.61.02.94.02 5.53 0 10.02-3.94 10.02-8.79C21.1 6.94 17.55 3 12.02 3z" />} />
              <SocialLink href="mailto:contact@premiumawning.co.th" label="Email" svg={<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></>} />
              <SocialLink href="#services" label="Services" svg={<><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>} />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-center text-[12px] tracking-wide text-[#7e8892]">
          <p>© 2025 พรีเมียมกันสาด. สงวนสิทธิ์ทั้งหมด</p>
          <p className="mt-1 text-[10px] uppercase tracking-[.25em] text-[#646d76]">PREMIUM AWNING • DESIGN • INSTALLATION • SERVICE</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, svg }: { href: string; label: string; svg: React.ReactNode; }) {
  return (
    <a href={href} aria-label={label} className="w-10 h-10 rounded-lg border border-[#3a3e44] bg-[#383c41] flex items-center justify-center text-[#b3bcc5] hover:text-[#c5a572] hover:border-[#c5a572] hover:bg-[#40454a] transition-all duration-300 hover:-translate-y-0.5">
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" stroke="none">{svg}</svg>
    </a>
  );
}

function FooterLinks({ links, labels }: { links: string[]; labels: string[]; }) {
  return (
    <ul className="flex flex-col gap-1.5 text-[13px]">
      {links.map((l,i)=>(
        <li key={l}>
          <a href={l} className="inline-block py-1 pr-2 hover:text-[#c5a572] transition-colors duration-200 hover:translate-x-1">
            {labels[i]}
          </a>
        </li>
      ))}
    </ul>
  );
}

function FooterHeading({ children }: { children: React.ReactNode; }) {
  return (
    <h3 className="font-display text-[14px] mb-4 font-semibold tracking-wide text-white relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-6 after:bg-[#c5a572]/70">{children}</h3>
  );
}
