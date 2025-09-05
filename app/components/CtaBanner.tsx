export function CtaBanner() {
  return (
    <section className="section-py section-decor" aria-labelledby="cta-heading">
      <div className="w-full px-4 sm:px-6">
        <div className="section-head-wrapper">
          <span className="section-num">06</span>
        </div>
        <div className="relative rounded-2xl sm:rounded-3xl border border-[#263246] bg-gradient-to-br from-[#1b2739] to-[#101828] p-6 sm:p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 75% 25%,rgba(197,165,114,.18),transparent 60%)' }} />
          <div className="relative z-10 md:flex md:items-center md:justify-between gap-6 sm:gap-8">
            <div className="mb-6 md:mb-0">
              <h2 id="cta-heading" className="font-display font-semibold tracking-tight text-[clamp(1.3rem,4vw,2.1rem)] mb-3">
                ขอใบเสนอราคาฟรี ภายใน 24 ชม.*
              </h2>
              <p className="text-[#94a3b8] text-xs sm:text-sm mb-2">
                พร้อมอัพเกรดพื้นที่ของคุณด้วยกันสาดใหม่? รับคำปรึกษาและใบเสนอราคาฟรี!
              </p>
              <small className="text-[10px] sm:text-xs text-[#64748b]">
                *ระยะเวลาขึ้นอยู่กับข้อมูลที่ครบถ้วน และคิวการสำรวจหน้างาน
              </small>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a className="btn-primary text-center" href="tel:0812345678">โทรเลย</a>
              <a className="btn-outline text-center" href="https://line.me/R/ti/p/@premiumawning" target="_blank" rel="noopener">แอดไลน์</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
