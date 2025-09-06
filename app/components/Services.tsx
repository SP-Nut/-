// ข้อมูลบริการ (สามารถเพิ่ม / ปรับได้ง่ายในอนาคต)
const services = [
  {
    title: 'กันสาดบ้านพักอาศัย',
    icon: <path d="M3 12l9-9 9 9M5 10v10h4v-6h6v6h4V10" strokeLinecap="round" strokeLinejoin="round" />,
    desc: 'ดีไซน์เฉพาะหลัง ให้เข้ากับเส้นสายอาคาร เพิ่มพื้นที่ใช้สอย ลดความร้อน ปกป้องผนังและเฟอร์นิเจอร์นอกบ้าน',
    price: 'เริ่มต้น 15,000 บาท'
  },
  {
    title: 'กันสาดร้านค้า / สำนักงาน',
    icon: <path d="M4 5h16v6H4zM6 11v8m12-8v8M9 15h6" strokeLinecap="round" strokeLinejoin="round" />,
    desc: 'ช่วยดึงดูดสายตา สร้างภาพลักษณ์มืออาชีพ ลดแสงจ้า และเพิ่มความสะดวกบริเวณหน้าร้าน / จุดรับส่งสินค้า',
    price: 'เริ่มต้น 25,000 บาท'
  },
  {
    title: 'กันสาดอลูมิเนียม / โพลีคาร์บอเนต',
    icon: <path d="M3 7h18M5 7l2 12h10l2-12M9 7c0 5 6 5 6 0" strokeLinecap="round" strokeLinejoin="round" />,
    desc: 'โปร่งแสง กัน UV โครงสร้างแข็งแรง น้ำหนักเบา อายุการใช้งานยาว ดูแลรักษาง่าย เหมาะทั้งบ้านและเชิงพาณิชย์',
    price: 'เริ่มต้น 18,000 บาท'
  },
  {
    title: 'งานออกแบบเฉพาะไซต์ (Custom)',
    icon: <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" strokeLinejoin="round" />,
    desc: 'ปรับให้สอดคล้องโครงสร้างจริง วิเคราะห์ลม น้ำฝน น้ำหนัก ให้คำแนะนำวัสดุ พร้อมแบบ 3D / รายละเอียดประกอบ',
    price: 'ราคาตามแบบ'
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28 bg-[#0b1118] border-y border-[#1a2332]" aria-labelledby="services-heading">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 tracking-wide">
            บริการของเรา
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#c5a572] to-transparent mx-auto mb-8"></div>
          <p className="text-[#94a3b8] text-lg max-w-3xl mx-auto leading-relaxed font-light">
            เราพัฒนาโซลูชันกันสาดที่ผสมผสานโครงสร้างที่ปลอดภัย วัสดุคุณภาพสูง และดีไซน์ที่สมดุลกับงานสถาปัตยกรรมเดิม 
            รองรับทั้งงานที่อยู่อาศัย พาณิชย์ และโปรเจ็กต์เฉพาะเงื่อนไขไซต์จริง
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-[#111b25]/80 backdrop-blur-sm border border-[#1e2a37] hover:border-[#c5a572]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#c5a572]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative p-8">
                {/* Number */}
                <div className="text-[#c5a572]/30 font-light text-6xl mb-4 leading-none">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 border border-[#2a3a4b] flex items-center justify-center group-hover:border-[#c5a572]/50 transition-colors duration-300">
                    <svg 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={1} 
                      fill="none" 
                      className="w-6 h-6 text-[#c5a572]"
                    >
                      {service.icon}
                    </svg>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="font-light text-lg text-white mb-4 tracking-wide leading-snug group-hover:text-[#c5a572] transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-6 font-light">
                  {service.desc}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-[#c5a572] text-sm font-light tracking-wider border-b border-[#c5a572]/30 pb-1">
                    {service.price}
                  </span>
                </div>
                
                {/* CTA Link */}
                <div className="flex items-center text-xs tracking-[0.2em] text-[#94a3b8] uppercase group-hover:text-[#c5a572] transition-colors duration-300">
                  <span>สอบถามรายละเอียด</span>
                  <svg className="w-3 h-3 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center mt-20">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#c5a572] to-transparent mx-auto mb-8"></div>
          <p className="text-[#94a3b8] mb-8 font-light">
            ต้องการคำปรึกษาเฉพาะโปรเจ็กต์ของคุณ?
          </p>
          <button className="group inline-flex items-center px-8 py-3 border border-[#c5a572] text-[#c5a572] hover:bg-[#c5a572] hover:text-[#0b1118] transition-all duration-300 font-light tracking-wider text-sm">
            <span>ปรึกษาฟรี</span>
            <svg className="w-4 h-4 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
