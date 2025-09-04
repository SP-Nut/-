import React from 'react';
import Image from 'next/image';

export function SiteFooter(){
  return (
    <footer aria-labelledby="footer-heading" className="mt-32 bg-[#0a0e16] border-t border-[#121a26]">
      <h2 id="footer-heading" className="sr-only">ส่วนท้ายเว็บไซต์</h2>
      <div className="w-full px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/img/logowhite.png"
                alt="พรีเมียมกันสาด"
                width={200}
                height={60}
                className="h-12 w-auto"
                priority={false}
              />
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-6 max-w-xs">ผู้เชี่ยวชาญด้านกันสาด ออกแบบและติดตั้งครบวงจร เน้นคุณภาพ ความทนทาน และความสวยงามที่ลงตัวกับอาคาร</p>
            <div className="flex gap-3 mt-4">
              <SocialLink href="https://facebook.com/premiumawning" label="Facebook" svg={<path d="M13 10h3V7h-3c-1.7 0-3 1.4-3 3v2H8v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z" />}/>
              <SocialLink href="https://line.me/R/ti/p/@premiumawning" label="LINE" svg={<path d="M12.02 3C6.49 3 2 6.94 2 11.79c0 2.76 1.48 5.21 3.78 6.86.19.14.31.36.31.6l-.07 1.88c-.02.55.58.9 1.05.62l2.51-1.49c.17-.1.37-.15.57-.15.3.01.61.02.94.02 5.53 0 10.02-3.94 10.02-8.79C21.1 6.94 17.55 3 12.02 3z" />}/>
              <SocialLink href="mailto:contact@premiumawning.co.th" label="Email" svg={<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></>} />
            </div>
          </div>
          <div>
            <h3 className="font-display text-base mb-4 font-semibold text-white">เมนูลัด</h3>
            <FooterLinks links={["#","#services","#portfolio","#faq","#contact"]} labels={["หน้าหลัก","บริการ","ผลงาน","คำถามที่พบบ่อย","ติดต่อ"]} />
          </div>
          <div>
            <h3 className="font-display text-base mb-4 font-semibold text-white">บริการ</h3>
            <FooterLinks links={["#services","#services","#services","#services"]} labels={["กันสาดบ้าน","กันสาดร้านค้า","โปร่งแสง / โพลีฯ","ออกแบบเฉพาะไซต์"]} />
          </div>
          <div>
            <h3 className="font-display text-base mb-4 font-semibold text-white">ติดต่อ</h3>
            <FooterLinks links={["tel:0812345678","mailto:contact@premiumawning.co.th","https://line.me/R/ti/p/@premiumawning","#contact"]} labels={["โทร: 081-234-5678","อีเมล: contact@premiumawning.co.th","LINE: @premiumawning","ฟอร์มติดต่อ"]} />
          </div>
        </div>
        <div className="mt-12 pt-8 text-center border-t border-[#1e2835] text-xs text-[#64748b]">
          <p>© 2025 พรีเมียมกันสาด. สงวนลิขสิทธิ์ทุกรูปแบบ</p>
          <p className="mt-2 text-[10px]">ออกแบบและติดตั้งกันสาดครบวงจร | คุณภาพระดับพรีเมียม</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, svg }: { href: string; label: string; svg: React.ReactNode; }) {
  return (
    <a href={href} aria-label={label} className="w-11 h-11 rounded-xl border border-[#1e2835] bg-[#101826] flex items-center justify-center text-[#94a3b8] hover:text-[#c5a572] hover:border-[#c5a572] hover:bg-[#1a1f2e] transition-all duration-300 hover:scale-105">
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" stroke="none">{svg}</svg>
    </a>
  );
}

function FooterLinks({ links, labels }: { links: string[]; labels: string[]; }) {
  return (
    <ul className="flex flex-col gap-2 text-sm text-[#94a3b8]">
      {links.map((l,i)=>(<li key={l}><a href={l} className="hover:text-[#c5a572] transition-colors duration-200 hover:translate-x-1 transform inline-block">{labels[i]}</a></li>))}
    </ul>
  );
}
