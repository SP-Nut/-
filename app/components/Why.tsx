import { SectionTitle } from "./SectionTitle";

// สไตล์ตามตัวอย่าง: 4 คอลัมน์ มีเส้นตั้งคั่น ไม่มีการ์ด/พื้นหลังแต่ละรายการ
const columns = [
  {
    title: 'การออกแบบเฉพาะลูกค้า',
    desc: 'เราเก็บข้อมูลการใช้งานจริง รูปแบบอาคาร ทิศแดด ลม และข้อจำกัดหน้างาน เพื่อออกแบบกันสาดที่พอดีและกลมกลืน'
  },
  {
    title: 'ครบวงจรทุกขั้นตอน',
    desc: 'ตั้งแต่สำรวจ วิเคราะห์โครงสร้าง–โหลด ออกแบบรายละเอียด เลือกวัสดุ ผลิต ติดตั้ง และตรวจรับในมาตรฐานเดียว'
  },
  {
    title: 'ทีมงานมืออาชีพ',
    desc: 'ช่างติดตั้งและวิศวกรประสบการณ์สูง ใช้วิธีการยึดที่ถูกต้อง ลดปัญหารั่วซึม โครงสร้างแข็งแรง อายุการใช้งานยาว'
  },
  {
    title: 'นวัตกรรม & คุณค่า',
    desc: 'คัดเลือกวัสดุสมัยใหม่ กันรังสี UV ลดความร้อน ดูแลรักษาง่าย สร้างความคุ้มค่าในระยะยาว'
  }
];

export function Why() {
  return (
    <section id="why" aria-labelledby="why-heading" className="relative py-20 md:py-28 bg-[#0b1118] border-y border-[#141d29]">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6">
        <div className="mb-12 md:mb-16 flex items-baseline gap-4">
          <span className="text-[#c5a572] font-semibold text-sm tracking-[.4em]">04</span>
          <SectionTitle id="why-heading">เหตุผลที่ลูกค้าเลือกเรา</SectionTitle>
        </div>
        <div className="grid gap-10 md:gap-12 md:grid-cols-4">
          {columns.map((c,i) => (
            <div key={c.title} className={`flex flex-col ${i!==0 ? 'md:border-l md:border-[#1e2a2f] md:pl-10' : ''}`}> 
              <h3 className="font-display font-medium text-[1.05rem] sm:text-[1.15rem] leading-snug text-white mb-4">{c.title}</h3>
              <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-[#94a3b8]">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
