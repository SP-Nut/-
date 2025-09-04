import Image from "next/image";
import { Header } from "./components/Header";
import { SiteFooter } from "./components/SiteFooter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-body">
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Why />
        <Testimonials />
        <CtaBanner />
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingCall />
      <BackToTop />
      <ImageModal />
      <Scripts />
    </div>
  );
}

/* ---------------- Components ---------------- */

// Header & footer moved to components/Header & components/SiteFooter

function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return <h2 id={id} className="section-title text-center text-[clamp(1.7rem,3.2vw,2.4rem)] font-display font-semibold tracking-tight mb-8">{children}</h2>;
}

function Hero() {
  return (
    <section className="hero-modern relative min-h-[72vh] flex items-center" aria-labelledby="hero-heading">
  <div className="hero-bg absolute inset-0 bg-cover bg-center" />
      <div className="w-full hero-inner px-6 flex flex-col items-center text-center">
        <div className="hero-contact-line"><span>กรุงเทพฯ</span><span>info@premiumawning.co.th</span><span>081-234-5678</span></div>
        <div className="max-w-[820px] animate-fade opacity-0 will-change-transform">
          <h1 id="hero-heading" className="font-display font-semibold tracking-tight text-[clamp(2.4rem,4.8vw,3.8rem)] mb-6 leading-[1.08]">ติดตั้งกันสาดคุณภาพ<br className="hidden sm:block"/> เพื่อบ้านและธุรกิจของคุณ</h1>
          <p className="text-[#9dafc2] text-[clamp(.95rem,1.15vw,1.05rem)] leading-relaxed mb-10 max-w-[620px] mx-auto">รายละเอียดที่เนี้ยบ วัสดุพรีเมียม ดีไซน์เรียบหรู อยู่ได้นาน พร้อมทีมช่างมากประสบการณ์ตั้งแต่สำรวจ ออกแบบ ไปจนถึงติดตั้งแบบครบวงจร</p>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <a href="#contact" className="btn-primary text-[13px] px-6 py-3">ขอใบเสนอราคา</a>
            <a href="#portfolio" className="btn-outline text-[13px] px-6 py-3">ดูผลงาน</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-py section-decor" aria-labelledby="about-heading">
      <div className="w-full px-6">
        <div className="section-head-wrapper">
          <span className="section-num">01</span>
          <h2 id="about-heading" className="font-display tracking-tight text-[clamp(1.9rem,3.3vw,2.6rem)] font-semibold">ความเชี่ยวชาญครบวงจร</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="text-[#94a3b8] text-[15px] leading-relaxed space-y-5">
            <p>เราออกแบบและติดตั้งกันสาดสำหรับบ้านพักอาศัย ร้านค้า โกดัง และอาคารสำนักงาน โดยคำนึงถึงโครงสร้าง ความปลอดภัย การระบายน้ำ ทิศทางแดด และอายุการใช้งานระยะยาว</p>
            <p>แต่ละโปรเจ็กต์เริ่มจากการสำรวจไซต์ วิเคราะห์เงื่อนไขเชิงวิศวกรรม และนำไปสู่แบบก่อสร้างที่ลงตัวทั้งฟังก์ชันและสุนทรียะ</p>
          </div>
          <div className="stats-bar">
            <div className="stat-item"><span className="stat-value">15<span className="text-[14px] ml-1 align-top">+ ปี</span></span><span className="stat-label">ประสบการณ์</span></div>
            <div className="stat-item"><span className="stat-value">185<span className="text-[14px] ml-1 align-top">+</span></span><span className="stat-label">โปรเจ็กต์</span></div>
            <div className="stat-item"><span className="stat-value">110</span><span className="stat-label">บุคลากร</span></div>
            <div className="stat-item"><span className="stat-value">5<span className="text-[14px] ml-1 align-top">+</span></span><span className="stat-label">ทีมออกแบบ</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  { title: 'กันสาดบ้านพักอาศัย', icon: (
    <path d="M3 12l9-9 9 9M5 10v10h4v-6h6v6h4V10" strokeLinecap="round" strokeLinejoin="round" />
  ), desc: 'ออกแบบให้เข้ากับสถาปัตยกรรม เพิ่มพื้นที่ใช้สอย ลดความร้อน และช่วยปกป้องผนัง/เฟอร์นิเจอร์ภายนอก' },
  { title: 'กันสาดร้านค้า/สำนักงาน', icon: (
    <path d="M4 5h16v6H4zM6 11v8m12-8v8M9 15h6" strokeLinecap="round" strokeLinejoin="round" />
  ), desc: 'ยกระดับภาพลักษณ์ ดึงดูดลูกค้า ช่วยลดแสงจ้า ปรับปรุงฟังก์ชันพื้นที่หน้าร้านและจุดรับส่งสินค้า' },
  { title: 'กันสาดอลูมิเนียม/โพลีคาร์บอเนต', icon: (
    <path d="M3 7h18M5 7l2 12h10l2-12M9 7c0 5 6 5 6 0" strokeLinecap="round" strokeLinejoin="round" />
  ), desc: 'วัสดุโปร่งแสง กันรังสี UV น้ำหนักเบา โครงสร้างแข็งแรง อายุการใช้งานยาวนาน ดูแลรักษาง่าย' },
  { title: 'งานออกแบบเฉพาะไซต์', icon: (
    <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" strokeLinejoin="round" />
  ), desc: 'ปรับรายละเอียดให้เหมาะกับโครงสร้าง สภาพลม น้ำฝน น้ำหนัก และงบประมาณ พร้อมแบบ 3D (ตามตกลง)' },
];

function Services() {
  return (
    <section id="services" className="section-py section-decor" aria-labelledby="services-heading">
      <div className="w-full px-6">
        <div className="section-head-wrapper">
          <span className="section-num">02</span>
          <SectionTitle id="services-heading">บริการของเรา</SectionTitle>
        </div>
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map(s => (
            <article key={s.title} className="service-card group">
              <div className="w-11 h-11 mb-4 rounded-xl flex items-center justify-center bg-[#1c2738] border border-[#243246] text-[#c5a572]">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} fill="none" className="w-6 h-6">{s.icon}</svg>
              </div>
              <h3 className="font-display font-semibold text-[1.05rem] mb-2 tracking-tight">{s.title}</h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const portfolioItems = [
  { 
    file: '01', 
    alt: 'กันสาดไวส์ลา ยันได้ถึง 3 เมตร ดีไซน์สวง',
    title: 'กันสาดไวส์ลา',
    subtitle: 'ยันได้ถึง 3 เมตร\nดีไซน์สวย'
  },
  { 
    file: '02', 
    alt: 'ละเอียดประณีต ทุกจุด ย่อมซี่เรียบเนียน ย่วน น้อต-ย่อนสาง ไร้รองเอียน',
    title: 'ละเอียดประณีต',
    subtitle: 'ทุกจุด ย่อมซี่เรียบเนียน ย่วน\nน้อต-ย่อนสาง ไร้รองเอียน'
  },
  { 
    file: '03', 
    alt: 'บวกกรรม HEATBLOX โปร่งใส และเย็นขึ้นกว่า 15°C พร้อมกัน UV โต่กว่า 90%',
    title: 'บวกกรรม HEATBLOX',
    subtitle: 'โปร่งใส และเย็นขึ้นกว่า 15°C\nพร้อมกัน UV โต่กว่า 90%'
  },
  { 
    file: '04', 
    alt: 'ไม่เป็นสนิม อยูมิเนี่ยม T6 เกรดคลากพรรม สายินดิด เมาความแข็ง 3 เท่า แข็งแร่ งาน่างอยูมิเนี่ยมหนัก 1.5 เท่า',
    title: 'ไม่เป็นสนิม',
    subtitle: 'อยูมิเนี่ยม T6 เกรดตลาคพรรม\nสายินดิด เมาความแข็ง 3 เท่า แข็งแร่\nงาน่างอยูมิเนี่ยมหนัก 1.5 เท่า'
  }
];

function Portfolio() {
  return (
    <section id="portfolio" className="section-py section-decor" aria-labelledby="portfolio-heading">
      <div className="w-full px-6 mb-8">
        <div className="section-head-wrapper">
          <span className="section-num">03</span>
          <SectionTitle id="portfolio-heading">ผลงานติดตั้งบางส่วน</SectionTitle>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-0 w-full">
        {portfolioItems.map((p,idx) => (
          <figure key={p.file} className="relative overflow-hidden bg-[#121b2b] group cursor-pointer portfolio-item aspect-[3/5]" 
                  data-image={`/img/${p.file}.jpg`}
                  data-alt={p.alt}
                  data-index={(idx+1).toString().padStart(2,'0')}>
            <Image src={`/img/${p.file}.jpg`} alt={p.alt} width={600} height={1000} 
                   className="w-full h-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
            <figcaption className="absolute inset-0 flex items-center justify-center text-center px-4">
              <div className="text-white">
                <div className="text-2xl font-bold tracking-wide drop-shadow-lg mb-3">{p.title}</div>
                <div className="text-base font-medium leading-relaxed drop-shadow-lg whitespace-pre-line">{p.subtitle}</div>
              </div>
            </figcaption>
            <div className="absolute top-2 right-2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/>
              </svg>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}

const benefits = [
  'ทีมช่างประสบการณ์กว่า 15 ปี วางระบบงานโครงสร้างและการยึดอย่างปลอดภัย',
  'วัสดุเกรดพรีเมียม ป้องกันรังสี UV ลดความร้อน ช่วยยืดอายุเฟอร์นิเจอร์',
  'รับประกันงานติดตั้ง และบริการหลังการขาย พร้อมอะไหล่ทดแทน',
  'นัดสำรวจหน้างาน วิเคราะห์โหลดลม แดด ทิศทางน้ำฝน และออกแบบให้เหมาะสม'
];

function Why() {
  return (
    <section id="why" className="section-py section-decor" aria-labelledby="why-heading">
      <div className="w-full px-6">
        <div className="section-head-wrapper">
          <span className="section-num">04</span>
          <SectionTitle id="why-heading">เหตุผลที่ลูกค้าเลือกเรา</SectionTitle>
        </div>
        <ul className="grid gap-3 md:grid-cols-2">
          {benefits.map(b => (
            <li key={b} className="flex gap-3 items-start bg-[#121c2d] border border-[#1c2737] rounded-xl p-4 text-[13px] leading-relaxed text-[#94a3b8]">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#c5a572]" stroke="currentColor" strokeWidth={1.7} fill="none"><path d="M5 12l4 4L19 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const testimonials = [
  { role: 'บ้านพักอาศัย – คุณอรวรรณ', text: 'งานละเอียดมาก โครงสร้างแน่นหนา น้ำฝนไม่ย้อน พื้นที่หน้าบ้านใช้สอยได้เต็มที่ขึ้นเยอะ' },
  { role: 'ร้านกาแฟ – คุณภัทร', text: 'กันสาดช่วยลดแสงบ่าย ลูกค้านั่งสบายขึ้น ดีไซน์เข้ากับหน้าร้าน ไม่บดบังป้าย' },
  { role: 'โกดังสินค้า – ผู้จัดการฝ่ายอาคาร', text: 'งานเรียบร้อย ส่งมอบตรงเวลา โครงสร้างรับลมดี ไม่มีน้ำขังหลังฝนตก' }
];

function Testimonials() {
  return (
    <section id="testimonials" className="section-py section-decor" aria-labelledby="testimonials-heading">
      <div className="w-full px-6">
        <div className="section-head-wrapper">
          <span className="section-num">05</span>
          <SectionTitle id="testimonials-heading">เสียงจากลูกค้า</SectionTitle>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map(t => (
            <figure key={t.role} className="rounded-xl border border-[#1b2739] bg-gradient-to-br from-[#101a2b] to-[#0d1625] p-6 flex flex-col">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_,i)=> <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 text-[#c5a572] fill-current"><path d="M12 3l2.6 6.7 7 .5-5.3 4.6 1.7 7L12 17.9 6 21.8l1.7-7L2.4 10l7-.5z" /></svg>)}
              </div>
              <blockquote className="text-[13px] text-[#94a3b8] leading-relaxed flex-1">{t.text}</blockquote>
              <figcaption className="mt-4 text-[10px] uppercase tracking-[.08em] text-slate-500">{t.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="section-py section-decor" aria-labelledby="cta-heading">
      <div className="w-full px-6">
        <div className="section-head-wrapper">
          <span className="section-num">06</span>
        </div>
        <div className="relative rounded-3xl border border-[#263246] bg-gradient-to-br from-[#1b2739] to-[#101828] p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 75% 25%,rgba(197,165,114,.18),transparent 60%)' }} />
          <div className="relative z-10 md:flex md:items-center md:justify-between gap-8">
            <div className="mb-6 md:mb-0">
              <h2 id="cta-heading" className="font-display font-semibold tracking-tight text-[clamp(1.55rem,2.5vw,2.1rem)] mb-3">ขอใบเสนอราคาฟรี ภายใน 24 ชม.*</h2>
              <p className="text-[#94a3b8] text-sm mb-2">พร้อมอัพเกรดพื้นที่ของคุณด้วยกันสาดใหม่? รับคำปรึกษาและใบเสนอราคาฟรี!</p>
              <small className="text-xs text-[#64748b]">*ระยะเวลาขึ้นอยู่กับข้อมูลที่ครบถ้วน และคิวการสำรวจหน้างาน</small>
            </div>
            <div className="flex flex-wrap gap-3">
              <a className="btn-primary" href="tel:0812345678">โทรเลย</a>
              <a className="btn-outline" href="https://line.me/R/ti/p/@premiumawning" target="_blank" rel="noopener">แอดไลน์</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: 'ระยะเวลาในการผลิตและติดตั้งใช้กี่วัน?', a: 'ปกติใช้เวลาประมาณ 7–14 วันหลังสรุปแบบ (ขึ้นอยู่กับขนาด ความซับซ้อน และตารางคิว)' },
  { q: 'มีวัสดุอะไรให้เลือกบ้าง?', a: 'โครง: เหล็กกล้า / สแตนเลส / อลูมิเนียม | แผ่น: โพลีคาร์บอเนตโปร่งแสง, เมทัลชีท, อะคริลิก, อลูมิเนียมคอมโพสิต ฯลฯ' },
  { q: 'การรับประกันมีอะไรบ้าง?', a: 'รับประกันการติดตั้ง 1 ปี (โครงสร้างและการรั่วซึมจุดเชื่อม) และวัสดุตามเงื่อนไขผู้ผลิต' },
  { q: 'ต้องดูแลรักษาอย่างไร?', a: 'เช็ดล้างด้วยน้ำสบู่อ่อนปีละ 2–3 ครั้ง ตรวจจุดยึดและรางน้ำฝน ทำความสะอาดใบไม้/เศษวัสดุสะสม' },
  { q: 'เงื่อนไขการชำระเงินเป็นอย่างไร?', a: 'มัดจำ 40–50% เมื่อสรุปแบบ ส่วนที่เหลือชำระวันติดตั้ง/วันส่งมอบ (ตามข้อตกลงในใบเสนอราคา)' },
  { q: 'มีค่าบริการสำรวจหน้างานหรือไม่?', a: 'กรุงเทพฯ และพื้นที่ใกล้เคียงฟรี (ต่างจังหวัดอาจมีค่าดำเนินการ เดินทางหักลบหากสั่งงาน)' }
];

function FAQ() {
  return (
    <section id="faq" className="section-py section-decor" aria-labelledby="faq-heading">
      <div className="w-full px-6">
        <div className="section-head-wrapper">
          <span className="section-num">07</span>
          <SectionTitle id="faq-heading">คำถามที่พบบ่อย</SectionTitle>
        </div>
        <div className="grid gap-3 max-w-[840px] mx-auto">
          {faqs.map((f, idx) => (
            <div key={f.q} className="rounded-2xl border border-[#1d2838] bg-[#111b2a] overflow-hidden">
              <button className="faq-btn w-full flex gap-3 items-start px-5 py-4 text-left" aria-expanded={false} aria-controls={`faq-panel-${idx}`} id={`faq-btn-${idx}`}>
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#c5a572]" stroke="currentColor" strokeWidth={1.7} fill="none"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span className="text-sm">{f.q}</span>
                <svg className="ml-auto w-5 h-5 text-[#94a3b8] transition-transform" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              <div id={`faq-panel-${idx}`} role="region" aria-labelledby={`faq-btn-${idx}`} className="faq-panel max-h-0 overflow-hidden px-5 text-[13px] text-[#94a3b8] leading-relaxed" hidden>
                <div className="pb-5 pt-0">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-py section-decor" aria-labelledby="contact-heading">
      <div className="w-full px-6">
        <div className="section-head-wrapper">
          <span className="section-num">08</span>
          <SectionTitle id="contact-heading">ติดต่อทีมงานผู้เชี่ยวชาญ</SectionTitle>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 mb-8">
          <ContactCard title="ที่อยู่" text="123 ถนนสุขุมวิท แขวงคลองตัน เขตวัฒนา กรุงเทพฯ 10110" icon={<path d="M3 11.5L12 4l9 7.5v7.5h-6v-5H9v5H3z" strokeLinecap="round" strokeLinejoin="round" />}/>
          <ContactCard title="เวลาให้บริการ" text="จันทร์–เสาร์ 08:30–17:30 น." icon={<path d="M3 5h18M8 5v14m8-14v14M3 19h18" strokeLinecap="round" />}/>
          <ContactCard title="โทรศัพท์" text={<a href="tel:0812345678">081-234-5678</a>} icon={<path d="M5 4l5 2 4 0 5-2v14l-5 2-4 0-5-2zM10 6v12" strokeLinecap="round" strokeLinejoin="round" />}/>
          <ContactCard title="อีเมล" text={<a href="mailto:contact@premiumawning.co.th">contact@premiumawning.co.th</a>} icon={<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></>} />
          <ContactCard title="LINE" text={<a href="https://line.me/R/ti/p/@premiumawning" target="_blank" rel="noopener">@premiumawning</a>} icon={<><circle cx="12" cy="12" r="10"/><path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round"/></>} />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function ContactCard({ title, text, icon }: { title: string; text: React.ReactNode; icon: React.ReactNode }) {
  return (
    <div className="flex gap-3 items-start p-4 rounded-2xl bg-[#111b25] border border-[#1f2a3a] text-[13px]">
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] text-[#c5a572]" stroke="currentColor" strokeWidth={1.6} fill="none">{icon}</svg>
      <div>
        <div className="text-[10px] uppercase tracking-[.08em] text-[#94a3b8] mb-1 font-semibold">{title}</div>
        <div className="text-[#e5e7eb] leading-snug">{text}</div>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <form id="contactForm" className="grid gap-5 max-w-[780px]" noValidate aria-describedby="privacy-note">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="ชื่อ" required placeholder="ระบุชื่อ" />
        <Field id="phone" label="เบอร์โทร" type="tel" required pattern="^0[0-9]{8,9}$" placeholder="08X-XXX-XXXX" />
        <Field id="contactId" label="Line ID / อีเมล" placeholder="Line หรืออีเมล" />
        <SelectField id="type" label="ประเภทงาน" required options={["กันสาดบ้าน","กันสาดร้านค้า","กันสาดโรงจอดรถ","กันสาดโปร่งแสง","ออกแบบพิเศษ"]} />
      </div>
      <div>
        <label htmlFor="message" className="field-label">ข้อความ</label>
        <textarea id="message" name="message" required rows={5} placeholder="ขนาดพื้นที่ (กว้าง x ยาว), ลักษณะอาคาร, ความต้องการเพิ่มเติม..." className="field-input resize-y" />
        <Error id="message" text="กรุณาระบุข้อความ" />
      </div>
      <div>
        <button type="submit" className="btn-primary">ส่งข้อความ</button>
      </div>
      <div id="formSuccess" className="hidden mt-2 rounded-xl border border-[#1f4d31] bg-[#11291b] px-4 py-3 text-xs text-[#b6f1c8]" role="status" aria-live="polite">ส่งข้อมูลเรียบร้อย ทีมงานจะติดต่อกลับโดยเร็ว</div>
      <p id="privacy-note" className="text-[11px] text-[#94a3b8]">เราดูแลข้อมูลของคุณตามหลัก PDPA และใช้เพื่อการติดต่อกลับเท่านั้น</p>
    </form>
  );
}

function Field({ id, label, type = 'text', required, pattern, placeholder }: { id: string; label: string; type?: string; required?: boolean; pattern?: string; placeholder?: string; }) {
  return (
    <div>
      <label htmlFor={id} className="field-label">{label}</label>
      <input id={id} name={id} type={type} required={required} pattern={pattern} placeholder={placeholder} className="field-input" />
      <Error id={id} text={`กรุณาระบุ${label}`} />
    </div>
  );
}

function SelectField({ id, label, options, required }: { id: string; label: string; options: string[]; required?: boolean; }) {
  return (
    <div>
      <label htmlFor={id} className="field-label">{label}</label>
      <select id={id} name={id} required={required} className="field-input">
        <option value="">เลือก...</option>
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
      <Error id={id} text={`กรุณาเลือก${label}`} />
    </div>
  );
}

function Error({ id, text }: { id: string; text: string; }) {
  return <small id={`err-${id}`} className="hidden mt-1 text-[10px] font-medium text-[#dc2626]" aria-live="polite">{text}</small>;
}

// Footer subcomponents moved to components/SiteFooter

function FloatingCall() {
  return (
    <a href="tel:0812345678" className="fixed right-4 bottom-4 z-50 w-14 h-14 rounded-full bg-[#c5a572] text-[#111827] grid place-content-center shadow-lg border border-[#d2b98f] hover:brightness-105" aria-label="โทรเลย">
      <svg viewBox="0 0 24 24" className="w-7 h-7" stroke="currentColor" strokeWidth={1.6} fill="none"><path d="M5 4l4 1 2 5-2 2a14 14 0 006 6l2-2 5 2 1 4c-1 1.5-3.5 2-5 2A17 17 0 015 9c0-1.5.5-4 2-5z" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </a>
  );
}

function BackToTop(){
  return (
    <a id="backToTop" aria-label="กลับขึ้นบน" href="#top">
      <svg viewBox="0 0 24 24" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8} fill="none"><path d="M12 19V5m0 0l-6 6m6-6l6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </a>
  );
}

// Inline script component (client behaviors) inserted at end of body
// Rewritten to remove duplicate/invalid code and apply correct header transparency logic
function Scripts() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){
  var toggle=document.getElementById('mobileToggle');
  var menu=document.getElementById('mobileMenu');
  var back=document.getElementById('backToTop');
  var header=document.querySelector('.site-header');
  var hero=document.querySelector('.hero-modern');
  var navLinks=[].slice.call(document.querySelectorAll('nav a[href^="#"]'));
  function activate(hash){ navLinks.forEach(function(a){ a.classList.toggle('active', a.getAttribute('href')===hash); }); }
  if(toggle && menu){
    toggle.addEventListener('click',function(){
      var ex=toggle.getAttribute('aria-expanded')==='true';
      toggle.setAttribute('aria-expanded',String(!ex));
      menu.classList.toggle('hidden');
      if(!ex){ var first=menu.querySelector('a'); if(first) first.focus(); }
    });
    menu.querySelectorAll('a').forEach(function(a){ a.addEventListener('click',function(){
      toggle.setAttribute('aria-expanded','false');
      menu.classList.add('hidden');
    }); });
  }
  // Scroll spy
  var sections=[].slice.call(document.querySelectorAll('main section[id]'));
  var ticking=false;
  function handleScroll(){
    if(!ticking){
      requestAnimationFrame(function(){
        var pos=window.scrollY+120;
        var current='#top';
        for(var i=0;i<sections.length;i++){ var s=sections[i]; if(s.offsetTop<=pos) current='#'+s.id; }
        activate(current);
        if(back){ back.classList.toggle('visible', window.scrollY>600); }
        ticking=false;
      });
      ticking=true;
    }
  }
  document.addEventListener('scroll',handleScroll,{passive:true});
  handleScroll();
  // Header now static (no color change on scroll)
  // FAQ accordion
  var faqBtns=[].slice.call(document.querySelectorAll('.faq-btn'));
  faqBtns.forEach(function(btn){
    btn.addEventListener('click',function(){
      var expanded=btn.getAttribute('aria-expanded')==='true';
      faqBtns.filter(function(b){return b!==btn;}).forEach(function(b){ b.setAttribute('aria-expanded','false'); var p=document.getElementById(b.getAttribute('aria-controls')); if(p){ p.hidden=true; p.style.maxHeight=null; } });
      var panel=document.getElementById(btn.getAttribute('aria-controls'));
      if(!panel) return;
      if(expanded){ btn.setAttribute('aria-expanded','false'); panel.hidden=true; panel.style.maxHeight=null; }
      else { btn.setAttribute('aria-expanded','true'); panel.hidden=false; panel.style.maxHeight=panel.scrollHeight+'px'; }
    });
  });
  window.addEventListener('resize',function(){ document.querySelectorAll('.faq-panel:not([hidden])').forEach(function(p){ p.style.maxHeight=p.scrollHeight+'px'; }); });
  // Form validation
  var form=document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var fields=['name','phone','contactId','type','message'];
      var bad=false;
      var phone=form.phone.value.trim().replace(/[^0-9]/g,'');
      fields.forEach(function(id){
        var val=form[id].value.trim();
        var invalid=!val;
        if(id==='phone') invalid=!/^0[0-9]{8,9}$/.test(phone);
        var err=document.getElementById('err-'+id); if(err) err.classList.toggle('hidden',!invalid);
        bad=bad||invalid;
      });
      if(!bad){ var success=document.getElementById('formSuccess'); if(success) success.classList.remove('hidden'); form.reset(); setTimeout(function(){ if(success) success.classList.add('hidden'); },6000); }
    });
  }
  // Fade in hero
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){ var fade=document.querySelector('.animate-fade'); requestAnimationFrame(function(){ if(fade) fade.classList.add('fade-active'); }); } else { var fade2=document.querySelector('.animate-fade'); if(fade2){ fade2.classList.remove('opacity-0'); } }
  
  // Image modal
  var modal=document.getElementById('imageModal');
  var modalImg=document.getElementById('modalImage');
  var modalClose=document.getElementById('modalClose');
  var portfolioItems=[].slice.call(document.querySelectorAll('.portfolio-item'));
  
  portfolioItems.forEach(function(item){
    item.addEventListener('click',function(){
      var src=item.getAttribute('data-image');
      var alt=item.getAttribute('data-alt');
      if(modal && modalImg && src){
        modalImg.src=src;
        modalImg.alt=alt;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow='hidden';
      }
    });
  });
  
  function closeModal(){
    if(modal){
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow='auto';
    }
  }
  
  if(modalClose){
    modalClose.addEventListener('click',closeModal);
  }
  
  if(modal){
    modal.addEventListener('click',function(e){
      if(e.target===modal) closeModal();
    });
  }
  
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape' && modal && !modal.classList.contains('hidden')){
      closeModal();
    }
  });
})();`
      }}
    />
  );
}

function ImageModal() {
  return (
    <div id="imageModal" className="fixed inset-0 bg-black/80 z-[999] items-center justify-center p-4 hidden" role="dialog" aria-modal="true" aria-labelledby="modalImage">
      <div className="relative max-w-[90vw] max-h-[90vh]">
        <button id="modalClose" className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-colors" aria-label="ปิด">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M6 6l12 12M6 18L18 6"/>
          </svg>
        </button>
        <Image id="modalImage" src="/img/01.jpg" alt="" width={1200} height={800} className="max-w-full max-h-full object-contain rounded-lg" />
      </div>
    </div>
  );
}

/* -------------- Tailwind-esque utility additions via globals (expect custom) -------------- */
// We rely on existing globals.css; extend minimal classes via component-level style tag below in layout if needed.
