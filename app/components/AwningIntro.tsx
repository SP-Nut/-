import React from 'react';
import { SectionTitle } from './SectionTitle';

// Intro section (dark theme, no icons) adjusted to match other site sections
export function AwningIntro(){
  return (
    <section id="awning-intro" className="relative py-24 md:py-28 bg-[#f5f7f9] dark:bg-[#10151b] border-y border-[#e5e9ec] dark:border-[#1d2731]" aria-labelledby="awning-heading">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        {/* Header block similar rhythm to other sections */}
        <div className="mb-10 md:mb-14 flex flex-col items-center text-center text-slate-800 dark:text-white">
          <SectionTitle id="awning-heading">เอสพี กันสาด</SectionTitle>
          <p className="mt-4 max-w-3xl text-slate-700 dark:text-slate-300/90 text-sm sm:text-[15px] leading-relaxed">
            ศูนย์รวมวัสดุ กันสาด – โครงสร้าง – หลังคา มากที่สุดในไทย ครบทั้งงานออกแบบ ประเมินโครงสร้าง ผลิตระบบ Pre-Fab และติดตั้งด้วยทีมเฉพาะทางในมาตรฐานเดียว
            เราคัดสรรวัสดุเกรดสถาปัตย์กว่า <span className="text-[#a78143] dark:text-[#d9bf8d] font-medium">30+ ประเภท</span> ตั้งแต่อะลูมิเนียม T6 โครงเหล็กเคลือบป้องกันสนิม แผ่นกรองแสงลดรังสี ไปจนถึงโซลูชันวัสดุโปร่งแสงและระบบระบายน้ำ เพื่อความสวยงาม แข็งแรง อายุใช้งานยาว และการบำรุงรักษาที่ง่ายขึ้น
          </p>
          <div className="mt-8 h-px w-32 bg-gradient-to-r from-transparent via-[#c5a572] to-transparent opacity-70" />
        </div>
      </div>
    </section>
  );
}

export default AwningIntro;
