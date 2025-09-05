import { SectionTitle } from "@/app/components/SectionTitle";

// ข้อมูลบริการ (สามารถเพิ่ม / ปรับได้ง่ายในอนาคต)
const services = [
  {
    title: 'กันสาดบ้านพักอาศัย',
    icon: <path d="M3 12l9-9 9 9M5 10v10h4v-6h6v6h4V10" strokeLinecap="round" strokeLinejoin="round" />,
    desc: 'ดีไซน์เฉพาะหลัง ให้เข้ากับเส้นสายอาคาร เพิ่มพื้นที่ใช้สอย ลดความร้อน ปกป้องผนังและเฟอร์นิเจอร์นอกบ้าน'
  },
    {
    title: 'กันสาดร้านค้า / สำนักงาน',
    icon: <path d="M4 5h16v6H4zM6 11v8m12-8v8M9 15h6" strokeLinecap="round" strokeLinejoin="round" />,
    desc: 'ช่วยดึงดูดสายตา สร้างภาพลักษณ์มืออาชีพ ลดแสงจ้า และเพิ่มความสะดวกบริเวณหน้าร้าน / จุดรับส่งสินค้า'
  },
  {
    title: 'กันสาดอลูมิเนียม / โพลีคาร์บอเนต',
    icon: <path d="M3 7h18M5 7l2 12h10l2-12M9 7c0 5 6 5 6 0" strokeLinecap="round" strokeLinejoin="round" />,
    desc: 'โปร่งแสง กัน UV โครงสร้างแข็งแรง น้ำหนักเบา อายุการใช้งานยาว ดูแลรักษาง่าย เหมาะทั้งบ้านและเชิงพาณิชย์'
  },
  {
    title: 'งานออกแบบเฉพาะไซต์ (Custom)',
    icon: <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" strokeLinejoin="round" />,
    desc: 'ปรับให้สอดคล้องโครงสร้างจริง วิเคราะห์ลม น้ำฝน น้ำหนัก ให้คำแนะนำวัสดุ พร้อมแบบ 3D / รายละเอียดประกอบ (ตามตกลง)'
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28 border-y border-[#141d29] bg-[#0b1118]" aria-labelledby="services-heading">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-baseline mb-10 md:mb-14">
          <SectionTitle id="services-heading">บริการของเรา</SectionTitle>
        </div>
        <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed max-w-3xl mb-10 md:mb-14">
          เราพัฒนาโซลูชันกันสาดที่ผสมผสานโครงสร้างที่ปลอดภัย วัสดุคุณภาพสูง และดีไซน์ที่สมดุลกับงานสถาปัตยกรรมเดิม รองรับทั้งงานที่อยู่อาศัย พาณิชย์ และโปรเจ็กต์เฉพาะเงื่อนไขไซต์จริง
        </p>
        {/* Services Grid */}
        <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative flex flex-col h-full bg-[#121b25] border border-[#1e2a37] p-5 sm:p-6 hover:border-[#2b3b4d] transition-colors duration-300"
            >
              {/* Hover aura */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 [mask-image:radial-gradient(circle_at_center,white,transparent_65%)] bg-gradient-to-br from-[#c5a5720f] via-transparent to-transparent" />
              {/* Icon */}
              <div className="mb-4 flex items-center justify-start text-[#d9bf8d]">
                <div className="w-11 h-11 flex items-center justify-center bg-[#182534] border border-[#2a3a4b] text-[#c5a572] group-hover:border-[#3d5369] transition-colors">
                  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} fill="none" className="w-6 h-6">{s.icon}</svg>
                </div>
              </div>
              <h3 className="font-display font-semibold text-[0.95rem] sm:text-[1.05rem] tracking-tight leading-snug mb-3 text-white">
                {s.title}
              </h3>
              <p className="text-[12px] sm:text-[13px] leading-relaxed text-[#94a3b8] flex-1">
                {s.desc}
              </p>
              <div className="mt-5 flex items-center text-[11px] tracking-[.25em] text-[#c5a572] uppercase">
                <span className="group-hover:translate-x-1 transition-transform">รายละเอียด</span>
                <svg viewBox="0 0 24 24" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" stroke="currentColor" strokeWidth={1.6} fill="none"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
