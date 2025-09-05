import { SectionTitle } from "./SectionTitle";

const faqs = [
  { q: 'ระยะเวลาในการผลิตและติดตั้งใช้กี่วัน?', a: 'ปกติใช้เวลาประมาณ 7–14 วันหลังสรุปแบบ (ขึ้นอยู่กับขนาด ความซับซ้อน และตารางคิว)' },
  { q: 'มีวัสดุอะไรให้เลือกบ้าง?', a: 'โครง: เหล็กกล้า / สแตนเลส / อลูมิเนียม | แผ่น: โพลีคาร์บอเนตโปร่งแสง, เมทัลชีท, อะคริลิก, อลูมิเนียมคอมโพสิต ฯลฯ' },
  { q: 'การรับประกันมีอะไรบ้าง?', a: 'รับประกันการติดตั้ง 1 ปี (โครงสร้างและการรั่วซึมจุดเชื่อม) และวัสดุตามเงื่อนไขผู้ผลิต' },
  { q: 'ต้องดูแลรักษาอย่างไร?', a: 'เช็ดล้างด้วยน้ำสบู่อ่อนปีละ 2–3 ครั้ง ตรวจจุดยึดและรางน้ำฝน ทำความสะอาดใบไม้/เศษวัสดุสะสม' },
  { q: 'เงื่อนไขการชำระเงินเป็นอย่างไร?', a: 'มัดจำ 40–50% เมื่อสรุปแบบ ส่วนที่เหลือชำระวันติดตั้ง/วันส่งมอบ (ตามข้อตกลงในใบเสนอราคา)' },
  { q: 'มีค่าบริการสำรวจหน้างานหรือไม่?', a: 'กรุงเทพฯ และพื้นที่ใกล้เคียงฟรี (ต่างจังหวัดอาจมีค่าดำเนินการ เดินทางหักลบหากสั่งงาน)' }
];

export function FAQ() {
  return (
    <section id="faq" className="section-py section-decor" aria-labelledby="faq-heading">
      <div className="w-full px-4 sm:px-6">
        <div className="section-head-wrapper">
          <span className="section-num">07</span>
          <SectionTitle id="faq-heading">คำถามที่พบบ่อย</SectionTitle>
        </div>
        <div className="grid gap-2 sm:gap-3 max-w-[840px] mx-auto">
          {faqs.map((f, idx) => (
            <div key={f.q} className="rounded-xl sm:rounded-2xl border border-[#1d2838] bg-[#111b2a] overflow-hidden">
              <button className="faq-btn w-full flex gap-3 items-start px-4 sm:px-5 py-3 sm:py-4 text-left" aria-expanded={false} aria-controls={`faq-panel-${idx}`} id={`faq-btn-${idx}`}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 text-[#c5a572] flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={1.7} fill="none">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-xs sm:text-sm pr-2">{f.q}</span>
                <svg className="ml-auto w-4 h-4 sm:w-5 sm:h-5 text-[#94a3b8] transition-transform flex-shrink-0" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div id={`faq-panel-${idx}`} role="region" aria-labelledby={`faq-btn-${idx}`} className="faq-panel max-h-0 overflow-hidden px-4 sm:px-5 text-xs sm:text-[13px] text-[#94a3b8] leading-relaxed" hidden>
                <div className="pb-4 sm:pb-5 pt-0">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
