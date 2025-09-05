"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { SectionTitle } from "./SectionTitle";

type Testimonial = { role:string; text:string; rating?:number };

const DATA: Testimonial[] = [
  { role:'บ้านพักอาศัย – คุณอรวรรณ', text:'งานละเอียด โครงสร้างแน่น ไม่ย้อนน้ำ พื้นที่ใช้สอยเพิ่มขึ้นเยอะ', rating:5 },
  { role:'ร้านกาแฟ – คุณภัทร', text:'ลูกค้านั่งสบาย แสงบ่ายไม่แยงตา ดีไซน์ไม่บังหน้าร้าน', rating:5 },
  { role:'โกดัง – ผู้จัดการฝ่ายอาคาร', text:'งานตรงเวลา รับลมดี น้ำไม่ขังหลังฝน', rating:5 },
  { role:'ทาวน์โฮม – คุณสิริ', text:'ติดตั้งไว เก็บงานละเอียด ระเบียงไม่ร้อนอบ', rating:5 },
  { role:'โชว์รูม – ผู้จัดการโครงการ', text:'ภาพลักษณ์ดีขึ้น ไม่บดบังเส้นสายอาคาร', rating:5 },
  { role:'สำนักงาน – ฝ่ายอาคาร', text:'ลดแสงสะท้อน ห้องประชุมสบายขึ้น', rating:5 },
  { role:'รีสอร์ท – เจ้าของ', text:'วัสดุพรีเมียม แขกชมบ่อย สีเข้ากับอาคาร', rating:5 },
  { role:'คาเฟ่กลางสวน – ผู้ประกอบการ', text:'โปร่ง แสงนุ่ม ลูกค้านั่งนาน ไม่ร้อนบ่าย', rating:5 },
  { role:'บ้านพักตากอากาศ – คุณอริญชย์', text:'กันรั่วซึมดี น้ำระบายไว', rating:5 },
  { role:'โรงงาน – ผู้ควบคุมงาน', text:'โครงสร้างนิ่ง รับลม น้ำหนักกระจายดี', rating:5 }
];

interface TestimonialsProps { background?: string }

export function Testimonials({ background }: TestimonialsProps){
  const fallback = '/img/01.jpg';
  const target = background || '/img/บ้าน.jpg';
  const [bg,setBg] = useState(fallback);
  const [index,setIndex] = useState(0);
  const liveRef = useRef<HTMLDivElement|null>(null);
  const sliderRef = useRef<HTMLDivElement|null>(null);

  // Preload background (Thai filename fallback)
  useEffect(()=>{
    let cancel=false; const img = new Image(); img.onload=()=>{ if(!cancel) setBg(target); }; img.onerror=()=>{}; img.src=target; return ()=>{cancel=true};
  },[target]);

  // Announce change (accessibility)
  useEffect(()=>{
    const t = DATA[index];
    if(liveRef.current){ liveRef.current.textContent = `สไลด์ ${index+1} : ${t.role}`; }
  },[index]);

  const go = useCallback((i:number)=>{
    setIndex( (i + DATA.length) % DATA.length );
  },[]);
  const next = useCallback(()=>{
    setIndex(curr => ( (curr + 1 + DATA.length) % DATA.length ));
  },[]);
  const prev = useCallback(()=>{
    setIndex(curr => ( (curr - 1 + DATA.length) % DATA.length ));
  },[]);

  // Keyboard navigation (left/right)
  useEffect(()=>{
    const onKey = (e:KeyboardEvent)=>{ if(e.key==='ArrowRight'){ next(); } else if(e.key==='ArrowLeft'){ prev(); } };
    window.addEventListener('keydown', onKey); return ()=> window.removeEventListener('keydown', onKey);
  },[next, prev]);

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="relative py-16 md:py-20 border-y border-[#141d29] overflow-hidden" style={{backgroundImage:`url('${encodeURI(bg)}')`, backgroundSize:'cover', backgroundPosition:'center'}}>
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#0b1118]/60 to-[#0b1118]/90" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_68%_30%,rgba(197,165,114,0.15),transparent_60%)]" />
      <div className="relative mx-auto w-full max-w-[1350px] px-5 sm:px-8">
        <div className="text-center mb-12 md:mb-16">
          <SectionTitle id="testimonials-heading">เสียงจากลูกค้า</SectionTitle>
          <p className="mt-5 text-[#93a5b7] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">ประสบการณ์จริงที่สะท้อนคุณภาพ การติดตั้ง และความใส่ใจในรายละเอียดของทีมเรา</p>
          <div className="mx-auto mt-6 h-px w-28 bg-gradient-to-r from-transparent via-[#c5a572] to-transparent opacity-80" />
        </div>

        {/* Layout: main quote + side list (desktop) */}
        <div className="grid lg:grid-cols-5 gap-10 items-start" ref={sliderRef}>
          {/* Main */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="relative bg-[#121b25]/90 backdrop-blur-sm border border-[#1e2a37] p-7 sm:p-9 shadow-[0_10px_32px_-12px_rgba(0,0,0,0.55)] rounded-none">{/* square */}
              <div className="flex items-center gap-1 mb-5" aria-label="เรตติ้ง 5 ดาว">
                {Array.from({length:5}).map((_,i)=>(<Star key={i} />))}
              </div>
              <blockquote className="text-[#c0ccd8] text-[13.5px] sm:text-[14px] leading-relaxed">
                “{DATA[index].text}”
              </blockquote>
              <div className="mt-6 pt-6 border-t border-[#1e2a37] flex items-center justify-between">
                <span className="text-[11px] tracking-[.2em] text-[#8a98a7] uppercase">{DATA[index].role}</span>
                <span className="text-[11px] text-[#556272]">{index+1}/{DATA.length}</span>
              </div>
              {/* Nav buttons */}
              <div className="absolute -bottom-5 left-0 right-0 flex justify-center gap-2">
                <button onClick={prev} aria-label="ก่อนหน้า" className="w-9 h-9 flex items-center justify-center bg-[#0f1821] border border-[#2a3644] text-[#c5a572] hover:bg-[#141f29] transition disabled:opacity-40 disabled:pointer-events-none">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M14 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button onClick={next} aria-label="ถัดไป" className="w-9 h-9 flex items-center justify-center bg-[#0f1821] border border-[#2a3644] text-[#c5a572] hover:bg-[#141f29] transition disabled:opacity-40 disabled:pointer-events-none">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M10 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            </div>
            {/* Progress bar */}
            <div className="mt-9 h-1.5 bg-[#1c2530] relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#c5a572] via-[#d9bf8d] to-[#c5a572] transition-all duration-500" style={{ width: `${((index+1)/DATA.length)*100}%` }} />
            </div>
          </div>

          {/* Side list */}
          <div className="lg:col-span-2 -mx-1 lg:mx-0">
            <ul className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3 max-h-[420px] overflow-auto pr-1 no-scrollbar" aria-label="รายการรีวิว">
              {DATA.map((t,i)=>(
                <li key={t.role}>
                  <button
                    onClick={()=> go(i)}
                    aria-current={i===index ? 'true': undefined}
                    className={`group w-full text-left border px-4 py-4 text-[11.5px] leading-relaxed transition-colors ${i===index? 'bg-[#1a2531] border-[#2e3a47] text-[#d1d9e0]' : 'bg-[#101921]/70 border-[#1c2733] hover:bg-[#16212b] text-[#8fa0b2]'}`}
                  >
                    <span className="block line-clamp-3">{t.text}</span>
                    <span className="mt-3 block text-[10px] tracking-[.16em] text-[#6d7a87] group-[aria-current=true]:text-[#b49a74]">{t.role}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dots (mobile) */}
        <div className="lg:hidden mt-10 flex items-center justify-center gap-2" aria-hidden="true">
          {DATA.map((_,i)=>(
            <button key={i} onClick={()=>go(i)} className={`h-2.5 transition-all ${i===index? 'w-7 bg-[#c5a572]' : 'w-2.5 bg-[#2b3845] hover:bg-[#364656]'}`} aria-label={`ไปสไลด์ ${i+1}`} />
          ))}
        </div>
        <div ref={liveRef} className="sr-only" aria-live="polite" />
      </div>
    </section>
  );
}

function Star(){
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#d9bf8d]" fill="currentColor" aria-hidden="true"><path d="M12 3l2.6 6.7 7 .5-5.3 4.6 1.7 7L12 17.9 6 21.8l1.7-7L2.4 10l7-.5z"/></svg>
  );
}

