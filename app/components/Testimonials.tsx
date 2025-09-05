import { SectionTitle } from "./SectionTitle";

const testimonials = [
  { role: 'บ้านพักอาศัย – คุณอรวรรณ', text: 'งานละเอียดมาก โครงสร้างแน่นหนา น้ำฝนไม่ย้อน พื้นที่หน้าบ้านใช้สอยได้เต็มที่ขึ้นเยอะ' },
  { role: 'ร้านกาแฟ – คุณภัทร', text: 'กันสาดช่วยลดแสงบ่าย ลูกค้านั่งสบายขึ้น ดีไซน์เข้ากับหน้าร้าน ไม่บดบังป้าย' },
  { role: 'โกดังสินค้า – ผู้จัดการฝ่ายอาคาร', text: 'งานเรียบร้อย ส่งมอบตรงเวลา โครงสร้างรับลมดี ไม่มีน้ำขังหลังฝนตก' }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-py section-decor" aria-labelledby="testimonials-heading">
      <div className="w-full px-4 sm:px-6">
        <div className="section-head-wrapper">
          <span className="section-num">05</span>
          <SectionTitle id="testimonials-heading">เสียงจากลูกค้า</SectionTitle>
        </div>
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(t => (
            <figure key={t.role} className="rounded-xl border border-[#1b2739] bg-gradient-to-br from-[#101a2b] to-[#0d1625] p-4 sm:p-6 flex flex-col">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_,i)=> (
                  <svg key={i} viewBox="0 0 24 24" className="w-3 h-3 sm:w-4 sm:h-4 text-[#c5a572] fill-current">
                    <path d="M12 3l2.6 6.7 7 .5-5.3 4.6 1.7 7L12 17.9 6 21.8l1.7-7L2.4 10l7-.5z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-xs sm:text-[13px] text-[#94a3b8] leading-relaxed flex-1">{t.text}</blockquote>
              <figcaption className="mt-3 sm:mt-4 text-[9px] sm:text-[10px] uppercase tracking-[.08em] text-slate-500">{t.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
