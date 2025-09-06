export function Hero() {
  return (
    <section className="hero-modern relative min-h-[70vh] sm:min-h-[75vh] lg:min-h-[80vh] flex items-center" aria-labelledby="hero-heading">
      <div className="hero-bg absolute inset-0 bg-cover bg-center" />
      <div className="w-full hero-inner px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Contact line - Mobile responsive */}
        <div className="hero-contact-line flex flex-col sm:flex-row gap-1 sm:gap-2 lg:gap-4 text-[10px] sm:text-xs lg:text-[11px] mb-4 sm:mb-6 opacity-80 text-white">
          <span className="text-[#c5a572]">กรุงเทพฯ</span>
          <span className="hidden sm:inline">•</span>
          <span>info@premiumawning.co.th</span>
          <span className="hidden sm:inline">•</span>
          <span className="font-medium">081-234-5678</span>
        </div>
        
        {/* Main content - Mobile optimized */}
        <div className="max-w-[900px] w-full">
          <h1 id="hero-heading" className="font-display font-semibold tracking-tight text-[clamp(1.5rem,7vw,3.8rem)] mb-3 sm:mb-4 lg:mb-6 leading-[1.05] sm:leading-[1.08] px-2 sm:px-0 text-white">
            <span className="inline-block">ติดตั้งกันสาดคุณภาพ</span>
            <br className="hidden sm:block"/>
            <span className="inline-block"> เพื่อบ้านและธุรกิจของคุณ</span>
          </h1>
          
          <p className="text-[#9dafc2] text-[clamp(.8rem,3vw,1.05rem)] leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-[620px] mx-auto px-2 sm:px-4 lg:px-0">
            รายละเอียดที่เนี้ยบ วัสดุพรีเมียม ดีไซน์เรียบหรู อยู่ได้นาน พร้อมทีมช่างมากประสบการณ์ตั้งแต่สำรวจ ออกแบบ ไปจนถึงติดตั้งแบบครบวงจร
          </p>
          
          {/* CTA Buttons - Mobile responsive */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center px-2 sm:px-4 lg:px-0">
            {/* Primary CTA - Mobile optimized */}
            <a
              href="#contact"
              className="w-full sm:w-auto h-11 sm:h-12 px-6 sm:px-8 lg:px-10 flex items-center justify-center bg-[#b49a74] text-white font-semibold tracking-wide text-xs sm:text-[13px] leading-none rounded-md sm:rounded-none shadow-[0_2px_8px_-2px_rgba(0,0,0,0.45)] hover:brightness-[1.08] focus:outline-none focus:ring-2 focus:ring-[#b49a74]/60 transition-all duration-300 touch-manipulation"
            >ขอใบเสนอราคา</a>
            
            {/* Secondary CTA - Mobile optimized */}
            <a
              href="#portfolio"
              className="w-full sm:w-auto h-11 sm:h-12 px-6 sm:px-8 lg:px-10 flex items-center justify-center border border-white text-white font-semibold tracking-wide text-xs sm:text-[13px] leading-none hover:bg-white hover:text-[#0b1118] transition-all duration-300 rounded-md sm:rounded-none touch-manipulation"
            >ดูผลงาน</a>
          </div>
        </div>
      </div>
    </section>
  );
}
