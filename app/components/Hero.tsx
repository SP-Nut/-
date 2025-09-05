export function Hero() {
  return (
    <section className="hero-modern relative min-h-[60vh] sm:min-h-[72vh] flex items-center" aria-labelledby="hero-heading">
      <div className="hero-bg absolute inset-0 bg-cover bg-center" />
      <div className="w-full hero-inner px-4 sm:px-6 flex flex-col items-center text-center">
        <div className="hero-contact-line flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-[11px]">
          <span>กรุงเทพฯ</span>
          <span>info@premiumawning.co.th</span>
          <span>081-234-5678</span>
        </div>
        <div className="max-w-[820px] animate-fade opacity-0 will-change-transform">
          <h1 id="hero-heading" className="font-display font-semibold tracking-tight text-[clamp(1.8rem,6vw,3.8rem)] mb-4 sm:mb-6 leading-[1.08]">
            ติดตั้งกันสาดคุณภาพ<br className="hidden sm:block"/> เพื่อบ้านและธุรกิจของคุณ
          </h1>
          <p className="text-[#9dafc2] text-[clamp(.85rem,2.5vw,1.05rem)] leading-relaxed mb-6 sm:mb-10 max-w-[620px] mx-auto px-4 sm:px-0">
            รายละเอียดที่เนี้ยบ วัสดุพรีเมียม ดีไซน์เรียบหรู อยู่ได้นาน พร้อมทีมช่างมากประสบการณ์ตั้งแต่สำรวจ ออกแบบ ไปจนถึงติดตั้งแบบครบวงจร
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center px-4 sm:px-0">
            {/* Solid primary first */}
            <a
              href="#contact"
              className="w-full sm:w-auto h-12 px-10 flex items-center justify-center bg-[#b49a74] text-white font-semibold tracking-wide text-[13px] leading-none rounded-none shadow-[0_2px_8px_-2px_rgba(0,0,0,0.45)] hover:brightness-[1.07] focus:outline-none focus:ring-2 focus:ring-[#b49a74]/60 transition"
            >ขอใบเสนอราคา</a>
            {/* Outline second */}
            <a
              href="#portfolio"
              className="w-full sm:w-auto h-12 px-10 flex items-center justify-center border border-white text-white font-semibold tracking-wide text-[13px] leading-none hover:bg-white hover:text-[#0b1118] transition-colors duration-200 rounded-none"
            >ดูผลงาน</a>
          </div>
        </div>
      </div>
    </section>
  );
}
