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
            <a href="#contact" className="btn-primary text-sm sm:text-[13px] px-8 py-3 w-full sm:w-auto text-center">ขอใบเสนอราคา</a>
            <a href="#portfolio" className="btn-outline text-sm sm:text-[13px] px-8 py-3 w-full sm:w-auto text-center">ดูผลงาน</a>
          </div>
        </div>
      </div>
    </section>
  );
}
