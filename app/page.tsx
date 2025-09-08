// Home page with all components integrated
"use client";

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from "next/image";
import { Header } from "./components/Header";
import { SiteFooter } from "./components/SiteFooter";

// Stats data
const stats = [
  { value: "35+", label: "ปีประสบการณ์" },
  { value: "35,000+", label: "โปรเจ็กต์" },
  { value: "100%", label: "ลูกค้าพอใจ" },
  { value: "5 ปี", label: "รับประกันสูงสุด" }
];

// Services data
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

// FAQ data  
const faqs = [
  {
    question: "กันสาดใช้วัสดุอะไร และอายุการใช้งานเท่าไหร่",
    answer: "เราใช้วัสดุเกรดสถาปัตย์กรรม อย่างอลูมิเนียม T6 เหล็กเคลือบกันสนิม และแผ่นโพลีคาร์บอเนต UV protection อายุการใช้งาน 15-20 ปี พร้อมรับประกันโครงสร้าง 5 ปี"
  },
  {
    question: "ราคากันสาดคิดอย่างไร และมีค่าใช้จ่ายเพิ่มเติมไหม",
    answer: "ราคาคิดตามตารางเมตร ขึ้นกับวัสดุและความซับซ้อนของงาน รวมการออกแบบ สำรวจหน้างาน และติดตั้งเรียบร้อย ไม่มีค่าใช้จ่ายแอบแฝง"
  },
  {
    question: "กระบวนการติดตั้งใช้เวลาเท่าไหร่",
    answer: "งานบ้านพักทั่วไป 1-2 วัน งานเชิงพาณิชย์ 3-7 วัน ขึ้นกับขนาดและความซับซ้อน เราจะแจ้งกำหนดการชัดเจนหลังสำรวจหน้างาน"
  },
  {
    question: "มีบริการหลังการขายและการบำรุงรักษาไหม",
    answer: "มีบริการตรวจสอบ ทำความสะอาด และบำรุงรักษาประจำปี รวมถึงการซ่อมแซมหากมีความเสียหาย ทีมช่างพร้อมให้บริการตลอด"
  }
];

// Portfolio data
const portfolioItems = [
  { 
    src: "/img/01.jpg", 
    alt: "โครงการกันสาดบ้านพักสไตล์โมเดิร์น",
    title: "บ้านพักสไตล์โมเดิร์น",
    category: "บ้านพักอาศัย" 
  },
  { 
    src: "/img/02.jpg", 
    alt: "โครงการกันสาดร้านค้าเชิงพาณิชย์",
    title: "ร้านค้าเชิงพาณิชย์",
    category: "อาคารพาณิชย์" 
  },
  { 
    src: "/img/03.jpg", 
    alt: "โครงการกันสาดโรงแรมหรู",
    title: "โรงแรมหรู",
    category: "โรงแรม" 
  },
  { 
    src: "/img/04.jpg", 
    alt: "โครงการกันสาดโครงการขนาดใหญ่",
    title: "โครงการขนาดใหญ่",
    category: "อุตสาหกรรม" 
  }
];

// Hero Component
function Hero() {
  return (
    <section className="hero-modern relative min-h-[70vh] sm:min-h-[75vh] lg:min-h-[80vh] flex items-center" aria-labelledby="hero-heading">
      <div className="hero-bg absolute inset-0 bg-cover bg-center" />
      <div className="w-full hero-inner px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="hero-contact-line flex flex-col sm:flex-row gap-1 sm:gap-2 lg:gap-4 text-[10px] sm:text-xs lg:text-[11px] mb-4 sm:mb-6 opacity-80 text-white">
          <span className="text-[#c5a572]">กรุงเทพฯ</span>
          <span className="hidden sm:inline">•</span>
          <span>info@premiumawning.co.th</span>
          <span className="hidden sm:inline">•</span>
          <span className="font-medium">081-234-5678</span>
        </div>
        
        <div className="max-w-[900px] w-full">
          <h1 id="hero-heading" className="font-display font-semibold tracking-tight text-[clamp(1.5rem,7vw,3.8rem)] mb-3 sm:mb-4 lg:mb-6 leading-[1.05] sm:leading-[1.08] px-2 sm:px-0 text-white">
            <span className="inline-block">ติดตั้งกันสาดคุณภาพ</span>
            <br className="hidden sm:block"/>
            <span className="inline-block"> เพื่อบ้านและธุรกิจของคุณ</span>
          </h1>
          
          <p className="text-[#9dafc2] text-[clamp(.8rem,3vw,1.05rem)] leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-[620px] mx-auto px-2 sm:px-4 lg:px-0">
            รายละเอียดที่เนี้ยบ วัสดุพรีเมียม ดีไซน์เรียบหรู อยู่ได้นาน พร้อมทีมช่างมากประสบการณ์ตั้งแต่สำรวจ ออกแบบ ไปจนถึงติดตั้งแบบครบวงจร
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center px-2 sm:px-4 lg:px-0">
            <a
              href="#contact"
              className="w-full sm:w-auto h-11 sm:h-12 px-6 sm:px-8 lg:px-10 flex items-center justify-center bg-[#b49a74] text-white font-semibold tracking-wide text-xs sm:text-[13px] leading-none rounded-md sm:rounded-none shadow-[0_2px_8px_-2px_rgba(0,0,0,0.45)] hover:brightness-[1.08] focus:outline-none focus:ring-2 focus:ring-[#b49a74]/60 transition-all duration-300 touch-manipulation"
            >ขอใบเสนอราคา</a>
            
            <Link
              href="/portfolio"
              className="w-full sm:w-auto h-11 sm:h-12 px-6 sm:px-8 lg:px-10 flex items-center justify-center border border-white text-white font-semibold tracking-wide text-xs sm:text-[13px] leading-none hover:bg-white hover:text-[#0b1118] transition-all duration-300 rounded-md sm:rounded-none touch-manipulation"
            >ดูผลงาน</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// About Component
function About(){
  return (
    <section id="about" aria-labelledby="about-heading" className="relative py-12 md:py-16 border-y border-[#141d29] bg-[#0b1118]">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-4 flex items-center gap-4 text-[11px] tracking-wide text-[#64748b] uppercase">
              <span className="inline-flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#c5a572]"></span> กรุงเทพฯ</span>
              <span className="hidden sm:inline">info@premiumawning.co.th</span>
              <span className="hidden md:inline">081-234-5678</span>
            </div>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-[#c5a572] font-semibold text-sm tracking-[.4em]">01</span>
              <h2 id="about-heading" className="font-display font-semibold tracking-tight text-[clamp(1.6rem,3.8vw,2.8rem)] leading-[1.05]">เกี่ยวกับเรา</h2>
            </div>
            <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed max-w-md mb-4">
              เราออกแบบและติดตั้งกันสาดระดับพรีเมียมสำหรับบ้าน ร้านค้า และโครงการเชิงพาณิชย์ เน้นโครงสร้างที่ปลอดภัย วัสดุที่ได้มาตรฐาน และดีไซน์ที่กลมกลืนกับสถาปัตยกรรมเดิม
            </p>
            <p className="text-[#94a3b8] text-sm leading-relaxed max-w-md mb-5">
              ขั้นตอนครบวงจร: สำรวจ วิเคราะห์โหลด ออกแบบ เลือกวัสดุ และติดตั้งโดยทีมช่างประสบการณ์สูง
            </p>
            <Link href="/portfolio" className="group inline-flex items-center gap-2 text-[12px] tracking-[.25em] font-medium text-[#c5a572] uppercase mt-2">
              ดูผลงานของเรา
              <svg viewBox="0 0 24 24" className="w-4 h-4" stroke="currentColor" strokeWidth={1.6} fill="none"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
          <div className="lg:col-span-7 relative">
            <div className="relative overflow-hidden border border-[#1a2431] bg-[#0f1823] aspect-[16/9] md:aspect-[5/3]">
              <Image src="/img/บ้าน.jpg" alt="งานติดตั้งกันสาดภายในบ้านสไตล์โมเดิร์น" fill className="object-cover" priority sizes="(max-width:768px) 100vw, (max-width:1280px) 55vw, 760px" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
              <div className="absolute top-4 right-4 w-12 h-12 border-2 border-[#c5a572]/30 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-[#c5a572]/20 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 bg-[#0d141b] px-6 sm:px-8 md:px-10 py-8 md:py-10 flex flex-col md:flex-row items-stretch gap-8 md:gap-0 md:justify-between shadow-[0_0_0_1px_#121c26]">
          {stats.map((s)=> (
            <div key={s.label} className="flex flex-col items-center text-center flex-1 group">
              <div className="font-display font-bold text-[2rem] sm:text-[2.2rem] md:text-[2.4rem] leading-none text-[#d9bf8d] tracking-tight transition-all duration-300">{s.value}</div>
              <div className="mt-2 text-[11px] sm:text-[12px] tracking-[.35em] text-white/70 uppercase transition-colors duration-300 group-hover:text-[#c5a572]">{s.label}</div>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#c5a572] to-transparent mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// AwningIntro Component
function AwningIntro(){
  return (
    <section id="awning-intro" className="relative py-24 md:py-28 bg-[#f5f7f9] dark:bg-[#10151b] border-y border-[#e5e9ec] dark:border-[#1d2731]" aria-labelledby="awning-heading">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="mb-10 md:mb-14 flex flex-col items-center text-center text-slate-800 dark:text-white">
          <h2 id="awning-heading" className="font-display font-semibold tracking-tight text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] mb-4">
            เอสพี กันสาด
          </h2>
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

// Portfolio Component
function Portfolio() {
  const router = useRouter();
  
  return (
    <section id="portfolio" className="relative bg-[#0b1118]" aria-labelledby="portfolio-heading">
      {/* Full width grid - no padding, no gaps */}
      <div className="grid grid-cols-2 lg:grid-cols-4 h-[60vh] lg:h-[80vh]">
        {portfolioItems.map((item, index) => (
          <div key={index} className="group relative overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-500"
               onClick={() => router.push('/portfolio')}>
            <Image 
              src={item.src} 
              alt={item.alt} 
              fill 
              className="object-cover" 
            />
            {/* Subtle hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            
            {/* Text overlay in the center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white z-10">
                <h3 className="text-lg lg:text-xl font-bold mb-2 drop-shadow-lg">{item.title}</h3>
                <p className="text-sm lg:text-base opacity-90 drop-shadow-lg">{item.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Services Component
function Services() {
  return (
    <section id="services" className="relative py-12 md:py-16 bg-[#0b1118] border-y border-[#1a2332]" aria-labelledby="services-heading">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4 tracking-wide">
            บริการของเรา
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#c5a572] to-transparent mx-auto mb-6"></div>
          <p className="text-[#94a3b8] text-base max-w-2xl mx-auto leading-relaxed font-light">
            เราพัฒนาโซลูชันกันสาดที่ผสมผสานโครงสร้างที่ปลอดภัย วัสดุคุณภาพสูง และดีไซน์ที่สมดุลกับงานสถาปัตยกรรมเดิม
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-[#111b25]/80 backdrop-blur-sm border border-[#1e2a37] hover:border-[#c5a572]/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#c5a572]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-6">
                <div className="text-[#c5a572]/30 font-light text-4xl mb-3 leading-none">
                  0{index + 1}
                </div>

                <div className="mb-4">
                  <div className="w-10 h-10 border border-[#2a3a4b] flex items-center justify-center group-hover:border-[#c5a572]/50 transition-colors duration-300">
                    <svg 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={1} 
                      fill="none" 
                      className="w-5 h-5 text-[#c5a572]"
                    >
                      {service.icon}
                    </svg>
                  </div>
                </div>
                
                <h3 className="font-light text-base text-white mb-3 tracking-wide leading-snug group-hover:text-[#c5a572] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-[#94a3b8] text-xs leading-relaxed mb-4 font-light">
                  {service.desc}
                </p>

                <div className="mb-4">
                  <span className="text-[#c5a572] text-xs font-light tracking-wider border-b border-[#c5a572]/30 pb-1">
                    {service.price}
                  </span>
                </div>
                
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

        <div className="text-center mt-12">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#c5a572] to-transparent mx-auto mb-6"></div>
          <p className="text-[#94a3b8] mb-6 font-light text-sm">
            ต้องการคำปรึกษาเฉพาะโปรเจ็กต์ของคุณ?
          </p>
          <button className="group inline-flex items-center px-6 py-2 border border-[#c5a572] text-[#c5a572] hover:bg-[#c5a572] hover:text-[#0b1118] transition-all duration-300 font-light tracking-wider text-sm">
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

// Video Component
function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(console.error);
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="video" className="relative min-h-screen bg-[#0b1118] flex items-center justify-center">
      <div className="relative w-full h-screen overflow-hidden">
        <video 
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          poster="/img/01.jpg"
        >
          <source src="/img/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

// Why Component
function Why() {
  const whyColumns = [
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

  return (
    <section id="why" aria-labelledby="why-heading" className="relative py-20 md:py-28 bg-orange-50 border-y border-orange-100">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
            เหตุผลที่ลูกค้าเลือกเรา
          </h2>
        </div>
        <div className="grid gap-8 sm:gap-10 lg:gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {whyColumns.map((c,i) => (
            <div key={c.title} className={`flex flex-col ${i%2===1 && i<2 ? 'sm:border-l sm:border-orange-200 sm:pl-6 lg:pl-10' : i>=2 ? 'lg:border-l lg:border-orange-200 lg:pl-10' : ''}`}>
              <h3 className="font-display font-medium text-base sm:text-[1.05rem] lg:text-[1.15rem] leading-snug text-gray-800 mb-3 sm:mb-4">{c.title}</h3>
              <p className="text-xs sm:text-[13px] lg:text-[13.5px] leading-relaxed text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ Component
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-12 sm:py-16 lg:py-20 bg-[#0b1118]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4 italic">
            คำถามที่พบบ่อย
          </h2>
        </div>        
        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start gap-3 py-6 text-left hover:bg-[#141e29]/30 transition-colors"
                aria-expanded={openIndex === index}
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
                    <span className="text-[#c5a572] font-medium mr-2">{index + 1}.</span>
                    {faq.question}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <svg 
                    className="w-4 h-4 text-[#94a3b8] transform transition-transform" 
                    style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="pb-6">
                  <div className="w-full h-px bg-gradient-to-r from-[#c5a572]/20 to-transparent mb-4"></div>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
              
              {index < faqs.length - 1 && (
                <div className="w-full h-px bg-[#1d2838]"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Component
function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "คุณสมชาย วรรณกิจ",
      location: "บ้านเดี่ยว ลาดพร้าว",
      content: "งานสวยมาก โครงสร้างแข็งแรง ทีมงานมาตรงเวลา ราคาตามที่ตกลง แนะนำเลยครับ ใช้มา 3 ปีแล้วไม่มีปัญหาอะไร",
      rating: 5,
      project: "กันสาดบ้านพักอาศัย",
      year: "2021"
    },
    {
      name: "คุณนงนุช สุขใส",
      location: "ร้านกาแฟ สุขุมวิท",
      content: "กันสาดช่วยลดแสงแดดได้ดีมาก ลูกค้านั่งสบายขึ้น บรรยากาศร้านดูดีขึ้นเยอะ ยอดขายเพิ่มขึ้นด้วย",
      rating: 5,
      project: "กันสาดร้านค้า",
      year: "2022"
    },
    {
      name: "คุณพิชิต อุตสาหกิจ",
      location: "โรงงาน นวนคร",
      content: "ใช้งานได้ดี ทนทาน ไม่มีปัญหารั่วซึม ช่างติดตั้งเป็นมืออาชีพจริงๆ คุ้มค่ามาก",
      rating: 5,
      project: "กันสาดอุตสาหกรรม",
      year: "2020"
    },
    {
      name: "คุณอรุณ มั่งคั่ง",
      location: "คอนโดมิเนียม อโศก",
      content: "ดีไซน์สวย เข้ากับตัวอาคารมาก วัสดุดูมีคุณภาพ บริการหลังการขายดีเยี่ยม ประทับใจ",
      rating: 5,
      project: "กันสาดโครงการพิเศษ",
      year: "2023"
    },
    {
      name: "คุณมาลี กิจการดี",
      location: "โรงแรม ชะอำ",
      content: "ติดตั้งกันสาดให้โรงแรม ลูกค้าชื่นชม ลดแสงแดดได้ดี ช่วยประหยัดค่าไฟได้เยอะ ROI คุ้มมาก",
      rating: 5,
      project: "กันสาดโรงแรม",
      year: "2022"
    },
    {
      name: "คุณสุรชัย โชคดี",
      location: "บ้านพักตากอาศัย ปราณบุรี",
      content: "เป็นบ้านหลังที่ 2 ที่ใช้บริการ งานยังคงเหมือนเดิม คุณภาพดี ราคาเป็นธรรม แนะนำให้เพื่อนๆ หลายคน",
      rating: 5,
      project: "กันสาดบ้านพักตากอาศัย",
      year: "2023"
    },
    {
      name: "คุณวิไล ธุรกิจดี",
      location: "ศูนย์การค้า รามอินทรา",
      content: "ติดตั้งกันสาดหน้าร้าน ช่วยเพิ่มพื้นที่นั่งได้เยอะ ลูกค้าพอใจมาก งานเสร็จตรงเวลา คุณภาพดีเยี่ยม",
      rating: 5,
      project: "กันสาดศูนย์การค้า",
      year: "2023"
    },
    {
      name: "คุณชาติ รุ่งเรือง",
      location: "โรงงานผลิต สมุทรสาคร",
      content: "กันสาดขนาดใหญ่ ทีมงานมืออาชีพ ติดตั้งเรียบร้อยไม่กระทบการผลิต ราคาเหมาะสม บริการดีเยี่ยม",
      rating: 5,
      project: "กันสาดโรงงานอุตสาหกรรม",
      year: "2021"
    },
    {
      name: "คุณปิยะ สร้างสุข",
      location: "บ้านเดี่ยว บางนา",
      content: "ปรึกษาฟรี แนะนำดี ไม่เอาเปรียบ งานเสร็จแล้วสวยมาก เข้ากับบ้านได้ดี ประทับใจบริการ",
      rating: 5,
      project: "กันสาดบ้านพักอาศัย",
      year: "2024"
    },
    {
      name: "คุณธีระ ก้าวหน้า",
      location: "สำนักงาน สาทร",
      content: "ติดตั้งที่อาคารสำนักงาน ผลงานเยี่ยม วัสดุคุณภาพ ใช้มา 2 ปี ยังสวยเหมือนเดิม พนักงานพอใจ",
      rating: 5,
      project: "กันสาดสำนักงาน",
      year: "2022"
    }
  ];

  const itemsPerView = 3;
  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section id="testimonials" className="relative py-20 md:py-28 bg-[#0b1118] border-y border-[#141d29]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 tracking-wide">
            ความคิดเห็นลูกค้า
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#c5a572] to-transparent mx-auto mb-8"></div>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto leading-relaxed font-light">
            ความพึงพอใจของลูกค้าคือความภาคภูมิใจของเรา
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
                  <div className="group bg-[#111b25]/80 backdrop-blur-sm border border-[#1e2a37] p-6 h-full hover:border-[#c5a572]/30 transition-all duration-500">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-[#c5a572]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-[#c5a572] text-xs font-light border border-[#c5a572]/30 px-2 py-1">
                        {testimonial.year}
                      </span>
                    </div>
                    
                    <p className="text-[#94a3b8] text-sm leading-relaxed mb-6 font-light">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    
                    <div className="border-t border-[#1e2a37] pt-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-white font-medium text-sm">{testimonial.name}</p>
                          <p className="text-[#94a3b8] text-xs mt-1">{testimonial.location}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[#c5a572] text-xs font-medium">{testimonial.project}</p>
                        </div>
                      </div>
                    </div>

                    {/* Subtle accent decoration */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#c5a572] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-[#c5a572] text-white rounded-full flex items-center justify-center hover:bg-[#b49a74] transition-colors duration-300 shadow-lg"
            aria-label="Previous testimonials"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-[#c5a572] text-white rounded-full flex items-center justify-center hover:bg-[#b49a74] transition-colors duration-300 shadow-lg"
            aria-label="Next testimonials"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                currentIndex === index ? 'bg-[#c5a572]' : 'bg-[#1e2a37] hover:bg-[#c5a572]/50'
              }`}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Component
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    serviceType: '',
    location: '',
    budget: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        serviceType: '',
        location: '',
        budget: ''
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-[#0b1118] border-y border-[#141d29]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 tracking-wide">
            ติดต่อเรา
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#c5a572] to-transparent mx-auto mb-8"></div>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto leading-relaxed">
            พร้อมให้คำปรึกษาและใบเสนอราคาฟรี รับประกันงานติดตั้ง 5 ปี
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    ชื่อ-นามสกุล *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#111b25] border border-[#1e2a37] text-white placeholder-[#94a3b8] focus:border-[#c5a572] focus:outline-none transition-colors"
                    placeholder="กรุณากรอกชื่อ-นามสกุล"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    เบอร์โทรศัพท์ *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#111b25] border border-[#1e2a37] text-white placeholder-[#94a3b8] focus:border-[#c5a572] focus:outline-none transition-colors"
                    placeholder="08X-XXX-XXXX"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  อีเมล
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#111b25] border border-[#1e2a37] text-white placeholder-[#94a3b8] focus:border-[#c5a572] focus:outline-none transition-colors"
                  placeholder="example@email.com"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-white mb-2">
                    ประเภทบริการ
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#111b25] border border-[#1e2a37] text-white focus:border-[#c5a572] focus:outline-none transition-colors"
                  >
                    <option value="">เลือกประเภทบริการ</option>
                    <option value="residential">กันสาดบ้านพักอาศัย</option>
                    <option value="commercial">กันสาดร้านค้า/สำนักงาน</option>
                    <option value="aluminum">กันสาดอลูมิเนียม/โพลีคาร์บอเนต</option>
                    <option value="custom">งานออกแบบเฉพาะไซต์</option>
                    <option value="consultation">ปรึกษาเท่านั้น</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-white mb-2">
                    พื้นที่ติดตั้ง
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#111b25] border border-[#1e2a37] text-white placeholder-[#94a3b8] focus:border-[#c5a572] focus:outline-none transition-colors"
                    placeholder="เขต/อำเภอ, จังหวัด"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">
                  งบประมาณโดยประมาณ
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#111b25] border border-[#1e2a37] text-white focus:border-[#c5a572] focus:outline-none transition-colors"
                >
                  <option value="">เลือกช่วงงบประมาณ</option>
                  <option value="under-20k">ต่ำกว่า 20,000 บาท</option>
                  <option value="20k-50k">20,000 - 50,000 บาท</option>
                  <option value="50k-100k">50,000 - 100,000 บาท</option>
                  <option value="100k-200k">100,000 - 200,000 บาท</option>
                  <option value="over-200k">มากกว่า 200,000 บาท</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  รายละเอียดงาน *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#111b25] border border-[#1e2a37] text-white placeholder-[#94a3b8] focus:border-[#c5a572] focus:outline-none transition-colors resize-none"
                  placeholder="กรุณาระบุรายละเอียดงานที่ต้องการ เช่น ขนาดพื้นที่, รูปแบบที่ต้องการ, ข้อจำกัดหน้างาน เป็นต้น"
                  required
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-900/30 border border-green-700 rounded text-green-300 text-sm">
                  ✓ ส่งข้อความสำเร็จ! เราจะติดต่อกลับภายใน 24 ชั่วโมง
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-900/30 border border-red-700 rounded text-red-300 text-sm">
                  ⚠ เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง หรือโทรหาเราโดยตรง
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-[#c5a572] text-white font-medium hover:bg-[#b49a74] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
              >
                {isSubmitting ? 'กำลังส่ง...' : 'ส่งข้อความ'}
              </button>

              <p className="text-xs text-[#94a3b8] text-center">
                * ข้อมูลที่จำเป็น | เราจะไม่เผยแพร่ข้อมูลของคุณให้บุคคลที่สาม
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">ข้อมูลติดต่อ</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#c5a572]/10 border border-[#c5a572]/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#c5a572]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">โทรศัพท์</h4>
                    <p className="text-[#94a3b8] text-sm mb-1">081-234-5678 (ฝ่ายขาย)</p>
                    <p className="text-[#94a3b8] text-sm">082-345-6789 (ฝ่ายบริการ)</p>
                    <p className="text-[#c5a572] text-xs mt-1">โทรฟรี 24 ชั่วโมง</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#c5a572]/10 border border-[#c5a572]/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#c5a572]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">อีเมล</h4>
                    <p className="text-[#94a3b8] text-sm mb-1">info@premiumawning.co.th</p>
                    <p className="text-[#94a3b8] text-sm">support@premiumawning.co.th</p>
                    <p className="text-[#c5a572] text-xs mt-1">ตอบกลับภายใน 2 ชั่วโมง</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#c5a572]/10 border border-[#c5a572]/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#c5a572]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">ที่ตั้งสำนักงาน</h4>
                    <p className="text-[#94a3b8] text-sm mb-1">123/45 ถนนพหลโยธิน</p>
                    <p className="text-[#94a3b8] text-sm mb-1">แขวงสามเสนใน เขตพญาไท</p>
                    <p className="text-[#94a3b8] text-sm">กรุงเทพมหานคร 10400</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#c5a572]/10 border border-[#c5a572]/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#c5a572]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">พื้นที่ให้บริการ</h4>
                    <p className="text-[#94a3b8] text-sm mb-1">กรุงเทพมหานคร และปริมณฑล</p>
                    <p className="text-[#94a3b8] text-sm">จังหวัดใกล้เคียง (ติดต่อสอบถาม)</p>
                    <p className="text-[#c5a572] text-xs mt-1">สำรวจหน้างานฟรี</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-[#1e2a37] pt-8">
              <h3 className="text-xl font-semibold text-white mb-4">เวลาทำการ</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[#94a3b8] text-sm">จันทร์ - ศุกร์</span>
                  <span className="text-white font-medium">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#94a3b8] text-sm">เสาร์</span>
                  <span className="text-white font-medium">9:00 - 17:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#94a3b8] text-sm">อาทิตย์</span>
                  <span className="text-white font-medium">10:00 - 16:00</span>
                </div>
                <div className="mt-4 p-3 bg-[#c5a572]/10 border border-[#c5a572]/30 rounded">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#c5a572]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-[#c5a572] text-xs">บริการฉุกเฉิน: 24 ชั่วโมง</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-[#1e2a37] pt-8">
              <h3 className="text-lg font-semibold text-white mb-4">ช่องทางอื่นๆ</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.190z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-[#E60023] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-[#06C755] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Utility Components
function FloatingCall() {
  return (
    <a
      href="tel:0812345678"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#c5a572] rounded-full flex items-center justify-center shadow-lg hover:bg-[#b49a74] transition-colors duration-300"
      aria-label="โทรหาเรา"
    >
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    </a>
  );
}

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-40 w-12 h-12 bg-[#111b25] border border-[#1e2a37] rounded-full flex items-center justify-center hover:border-[#c5a572] transition-colors duration-300"
      aria-label="กลับไปด้านบน"
    >
      <svg className="w-5 h-5 text-[#c5a572]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}

// Simple inline scripts for basic interactions
function Scripts() {
  useEffect(() => {
    // Add any needed JavaScript interactions here
    const handleScroll = () => {
      // Handle scroll events if needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}

export default function Home() {
	return (
		<>
			<Header />
			<main id="main">
				<Hero />
				<About />
				<AwningIntro />
				<Portfolio />
				<Services />
				<Video />
				<Why />
				<FAQ />
				<Testimonials />
				<Contact />
			</main>
			<SiteFooter />
			{/* Utility / Overlay Components */}
			<FloatingCall />
			<BackToTop />
			<Scripts />
		</>
	);
}

