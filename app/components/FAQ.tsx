"use client";

import { useState } from "react";

const faqs = [
  { 
    q: 'ก่อหลังคาโรงรถ ตารางเมตรละเท่าบาท ?',
    a: 'ราคาเริ่มต้นประมาณ 800-1,500 บาทต่อตารางเมตร ขึ้นอยู่กับวัสดุและความซับซ้อนของงาน'
  },
  { 
    q: 'ต่อหลังคาโรงรถ ต้องขออนุญาตไหม ?',
    a: 'หากเป็นการต่อเติมพื้นที่เกิน 50% ของพื้นที่เดิม ต้องขออนุญาตต่อเทศบาล/อบต. ในพื้นที่'
  },
  { 
    q: 'ก่อหลังคาหน้าบ้านหรือต่อเติมหลังคาโรงรถต้องใช้เวลากี่วัน ?',
    a: 'ปกติใช้เวลา 3-7 วันทำการ ขึ้นอยู่กับขนาดพื้นที่และความซับซ้อนของโครงสร้าง'
  },
  { 
    q: 'ก่อหลังคาโรงรถใช้วัสดุกี่แบบ ?',
    a: 'มีให้เลือกหลายวัสดุ เช่น โพลีคาร์บอเนต, เมทัลชีท, กระเบื้องลอนคู่, อลูมิเนียมคอมโพสิต'
  },
  { 
    q: 'ราคาและพิกัดเรา การต่อเติมหลังคาของ ROOFTECT อยู่ที่ไหน ?',
    a: 'สามารถติดต่อสอบถามราคาและนัดหมายได้ที่เบอร์โทร หรือแชทผ่าน Line Official Account'
  },
  { 
    q: 'บริการต่อเติมหลังคามีการรับประกันหรือไม่ ระยะเวลาเท่าไร ?',
    a: 'รับประกันการติดตั้งและโครงสร้าง 1 ปี รับประกันวัสดุตามเงื่อนไขของผู้ผลิต'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section id="faq" className="relative py-12 sm:py-16 lg:py-20 bg-[#0b1118]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4 italic">
            คำถามที่พบบ่อย
          </h2>
        </div>        
        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start gap-3 py-6 text-left hover:bg-[#141e29]/30 transition-colors"
                aria-expanded={openIndex === index}
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
                    <span className="text-[#c5a572] font-medium mr-2">{index + 1}.</span>
                    {faq.q}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <svg 
                    className="w-4 h-4 text-[#94a3b8] transform transition-transform" 
                    style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="pb-6">
                  <div className="w-full h-px bg-gradient-to-r from-[#c5a572]/20 to-transparent mb-4"></div>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
              
              {index < faqs.length - 1 && (
                <div className="w-full h-px bg-[#1d2838]"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
