"use client";

import { SectionTitle } from "./SectionTitle";
import { useState } from "react";

const faqs = [
  { q: 'ระยะเวลาในการผลิตและติดตั้งใช้กี่วัน?', a: 'ปกติใช้เวลาประมาณ 7–14 วันหลังสรุปแบบ (ขึ้นอยู่กับขนาด ความซับซ้อน และตารางคิว)' },
  { q: 'มีวัสดุอะไรให้เลือกบ้าง?', a: 'โครง: เหล็กกล้า / สแตนเลส / อลูมิเนียม | แผ่น: โพลีคาร์บอเนตโปร่งแสง, เมทัลชีท, อะคริลิก, อลูมิเนียมคอมโพสิต ฯลฯ' },
  { q: 'การรับประกันมีอะไรบ้าง?', a: 'รับประกันการติดตั้ง 1 ปี (โครงสร้างและการรั่วซึมจุดเชื่อม) และวัสดุตามเงื่อนไขผู้ผลิต' },
  { q: 'ต้องดูแลรักษาอย่างไร?', a: 'เช็ดล้างด้วยน้ำสบู่อ่อนปีละ 2–3 ครั้ง ตรวจจุดยึดและรางน้ำฝน ทำความสะอาดใบไม้/เศษวัสดุสะสม' },
  { q: 'เงื่อนไขการชำระเงินเป็นอย่างไร?', a: 'มัดจำ 40–50% เมื่อสรุปแบบ ส่วนที่เหลือชำระวันติดตั้ง/วันส่งมอบ (ตามข้อตกลงในใบเสนอราคา)' },
  { q: 'มีค่าบริการสำรวจหน้างานหรือไม่?', a: 'กรุงเทพฯ และพื้นที่ใกล้เคียงฟรี (ต่างจังหวัดอาจมีค่าดำเนินการ เดินทางหักลบหากสั่งงาน)' }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section id="faq" className="relative py-16 sm:py-20 lg:py-24 bg-[#0b1118] border-y border-[#141d29]" aria-labelledby="faq-heading">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <div className="mb-12 sm:mb-16 text-center">
          <SectionTitle id="faq-heading">คำถามที่พบบ่อย</SectionTitle>
          <p className="mt-4 text-sm sm:text-base text-[#94a3b8] max-w-2xl mx-auto">
            คำตอบสำหรับคำถามที่ลูกค้าถามบ่อยเกี่ยวกับบริการกันสาดของเรา
          </p>
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="group rounded-lg sm:rounded-xl border border-[#1d2838] bg-[#111b2a]/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-[#c5a572]/30 hover:bg-[#111b2a]/80"
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 lg:p-6 text-left transition-colors duration-200 hover:bg-[#141e29]/50"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#c5a572]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-4 sm:h-4 text-[#c5a572]" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                      <path d="M12 17h.01"/>
                    </svg>
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-medium text-white leading-relaxed min-w-0">
                    {faq.q}
                  </h3>
                </div>
                
                <div className="flex-shrink-0">
                  <svg 
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-[#94a3b8] transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
              
              <div 
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-5 lg:px-6 pb-4 sm:pb-5 lg:pb-6">
                  <div className="pl-9 sm:pl-11 pr-2">
                    <div className="w-full h-px bg-gradient-to-r from-[#c5a572]/20 to-transparent mb-4"></div>
                    <p className="text-xs sm:text-sm lg:text-base text-[#94a3b8] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
