import Image from "next/image";

const stats = [
  { value: "35+", label: "ปีประสบการณ์" },
  { value: "35,000+", label: "โปรเจ็กต์" },
  { value: "100%", label: "ลูกค้าพอใจ" },
  { value: "5 ปี", label: "รับประกันสูงสุด" }
];

export function About(){
  return (
    <section id="about" aria-labelledby="about-heading" className="relative py-20 md:py-28 border-y border-[#141d29] bg-[#0b1118]">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6">
        {/* Top grid */}
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-12 items-start">
          {/* Left textual column */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-6 flex items-center gap-4 text-[11px] tracking-wide text-[#64748b] uppercase">
              <span className="inline-flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#c5a572]"></span> กรุงเทพฯ</span>
              <span className="hidden sm:inline">info@premiumawning.co.th</span>
              <span className="hidden md:inline">081-234-5678</span>
            </div>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-[#c5a572] font-semibold text-sm tracking-[.4em]">01</span>
              <h2 id="about-heading" className="font-display font-semibold tracking-tight text-[clamp(1.9rem,4.2vw,3.2rem)] leading-[1.05]">เกี่ยวกับเรา</h2>
            </div>
            <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed max-w-md mb-6">
              เราออกแบบและติดตั้งกันสาดระดับพรีเมียมสำหรับบ้าน ร้านค้า และโครงการเชิงพาณิชย์ เน้นโครงสร้างที่ปลอดภัย วัสดุที่ได้มาตรฐาน และดีไซน์ที่กลมกลืนกับสถาปัตยกรรมเดิม
            </p>
            <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed max-w-md mb-6">
              ขั้นตอนของเราครบวงจร: สำรวจ วิเคราะห์โหลดลม–แสงแดด ออกแบบรายละเอียด เลือกวัสดุ และติดตั้งโดยทีมช่างประสบการณ์สูง พร้อมบริการหลังการขาย
            </p>
            <a href="#portfolio" className="group inline-flex items-center gap-2 text-[12px] tracking-[.25em] font-medium text-[#c5a572] uppercase mt-2">
              ดูผลงานของเรา
              <svg viewBox="0 0 24 24" className="w-4 h-4" stroke="currentColor" strokeWidth={1.6} fill="none"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
          {/* Image column */}
            <div className="lg:col-span-7 relative">
              <div className="relative overflow-hidden border border-[#1a2431] bg-[#0f1823] aspect-[16/10] md:aspect-[5/3]">
                <Image src="/img/บ้าน.jpg" alt="งานติดตั้งกันสาดภายในบ้านสไตล์โมเดิร์น" fill className="object-cover" priority sizes="(max-width:768px) 100vw, (max-width:1280px) 55vw, 760px" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
                {/* Decorative overlay */}
                <div className="absolute top-4 right-4 w-12 h-12 border-2 border-[#c5a572]/30 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-[#c5a572]/20 rounded-full"></div>
              </div>
           
            
            </div>
        </div>

        {/* Stats Row (pill container) */}
  <div className="mt-16 md:mt-28 bg-[#0d141b] px-6 sm:px-10 md:px-14 py-10 md:py-12 flex flex-col md:flex-row items-stretch gap-10 md:gap-0 md:justify-between shadow-[0_0_0_1px_#121c26]">
          {stats.map((s)=> (
            <div key={s.label} className="flex flex-col items-center text-center flex-1 group">
              <div className="font-display font-bold text-[2.2rem] sm:text-[2.4rem] md:text-[2.6rem] leading-none text-[#d9bf8d] tracking-tight transition-all duration-300">{s.value}</div>
              <div className="mt-3 text-[11px] sm:text-[12px] tracking-[.35em] text-white/70 uppercase transition-colors duration-300 group-hover:text-[#c5a572]">{s.label}</div>
              {/* Decorative line */}
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#c5a572] to-transparent mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
