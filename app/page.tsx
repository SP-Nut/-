// Home page with all components integrated
"use client";

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from "next/image";
import { Header } from "./components/Header";
import { SiteFooter } from "./components/SiteFooter";
import { ClientsSection } from "./components/ClientsSection";
import { CtaEstimator } from "./components/CtaEstimator";

// Stats data
const stats = [
  { value: "35+", label: "ปีประสบการณ์" },
  { value: "50,000+", label: "ครัวเรือน" },
  { value: "100%", label: "ลูกค้าพอใจ" },
  { value: "5 ปี", label: "รับประกันสูงสุด" }
];

// Services data
const services = [
  {
    title: 'ติดต่อเรา',
    icon: <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
    desc: 'พูดคุยให้ใสวเท่าใจเว้าความต้องการกับทางเรา ผ่านทาง โทร สายบริการ ตอบคำถาม การใช้งาน ให้คำแนะนำในการติดตั้ง ไฮไล พร้อมติดต่อฟรี',
    price: 'ติดต่อฟรี'
  },
  {
    title: 'ประเมินหน้างาน',
    icon: <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
    desc: 'พร้อมเท่าขึ้นไปโบวัด สำหรับความเหมาะสม เพื่อประกอบการติดตั้งไรต่อรองฟรี พร้อมให้คำแนะนำ โรคy สี พื้นที่ บอ่าวซัฟ',
    price: 'ฟรี'
  },
  {
    title: 'เสนอราคาฟรี',
    icon: <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />,
    desc: 'ขนาดใครอสร้างหล่า วิสัด ซีการซ่าตำแหน่งยืนยัน ดำเนินงานที่ชั้นจน พร้อมรายละเอียด ต่างๆข่าระลาต์ ท็อป และ ช่าระยา ก็องหนา',
    price: 'ประเมินฟรี'
  },
  {
    title: 'ออกแบบ',
    icon: <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />,
    desc: 'ออกแบบให้ลูกค้าเพื่อความเหมาะสมที่สุดกับการใช้งานสองมาซากที่สุดต้องการ เพื่อปกับวันที่ใส่งานที่สุดและให้ลูกค้าตรวจสอบก่อนติดตั้งจริง',
    price: 'ฟรี'
  },
  {
    title: 'นัดวันติดตั้ง',
    icon: <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
    desc: 'กำหนดนัดวัน เวลา เพื่อให้การติดตั้นานติดันดีจุงานที่มีสะมีการบริการกำหนดเวลินใยบุลได้ตามที่หนา สนใจมุลได้ตามกำหนด',
    price: 'ฟรี'
  },
  {
    title: 'ส่งมอบงาน',
    icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
    desc: 'ตรวจสอบความเรียบร้อยของงาน และ ช่าระสำเร็จยังหนา ใช้งายที่ทำหนา',
    price: 'ตรวจสอบฟรี'
  }
];

// FAQ data  
const faqs = [
  {
    question: "ราคาติดตั้งหลังคาและต่อเติมโรงรถเท่าไหร่",
    answer: "ราคาติดตั้งหลังคาไวนิลเริ่มต้น 400-600 บาท/ตร.ม. หลังคา Shinkolite 500-800 บาท/ตร.ม. ต่อเติมที่จอดรถหน้าบ้านเริ่มต้น 18,000 บาท ขึ้นกับขนาดและวัสดุที่เลือก"
  },
  {
    question: "รับติดตั้งหลังคาโรงรถพื้นที่ไหนบ้าง",
    answer: "เรารับงานทั่วประเทศ ติดตั้งหลังคาโรงรถหน้าบ้าน ข้างบ้าน ต่อเติมลานจอดรถ มีทีมช่างประจำภูมิภาค ให้คำปรึกษาและสำรวจหน้างานฟรี"
  },
  {
    question: "วิธีติดตั้งหลังคาไวนิลใช้เวลาเท่าไหร่",
    answer: "การติดตั้งหลังคาไวนิลโรงรถขนาด 4x6 เมตร ใช้เวลา 1-2 วัน ต่อเติมโรงจอดรถขนาดใหญ่ 3-5 วัน ขึ้นกับความซับซ้อนของโครงสร้าง"
  },
  {
    question: "หลังคา Shinkolite กับไวนิลต่างกันอย่างไร",
    answer: "Shinkolite หนากว่า ทนทานกว่า ราคาสูงกว่า เหมาะกับพื้นที่ที่ต้องการความแข็งแรง ไวนิลราคาประหยัด น้ำหนักเบา เหมาะกับโรงรถทั่วไป"
  }
];

// Portfolio data
const portfolioItems = [
  { 
    src: "/img/01.jpg", 
    alt: "ติดตั้งหลังคาโรงรถหน้าบ้านสไตล์โมเดิร์น",
    title: "โรงรถหน้าบ้านโมเดิร์น",
    category: "ติดตั้งหลังคาโรงรถ" 
  },
  { 
    src: "/img/02.jpg", 
    alt: "ต่อเติมที่จอดรถและกันสาดร้านค้า",
    title: "ต่อเติมที่จอดรถร้านค้า",
    category: "ต่อเติมโรงจอดรถ" 
  },
  { 
    src: "/img/03.jpg", 
    alt: "ติดตั้งหลังคา Shinkolite โรงแรม",
    title: "หลังคา Shinkolite โรงแรม",
    category: "หลังคา Shinkolite" 
  },
  { 
    src: "/img/04.jpg", 
    alt: "รับเหมาต่อเติมหลังคาโรงงาน",
    title: "ต่อเติมหลังคาโรงงาน",
    category: "รับเหมาต่อเติม" 
  },
  { 
    src: "/img/บ้าน.jpg", 
    alt: "ติดตั้งกันสาดรางน้ำบ้านพัก",
    title: "กันสาดรางน้ำบ้านพัก",
    category: "กันสาดรางน้ำ" 
  },
  { 
    src: "/img/pr.jpg", 
    alt: "ต่อเติมโรงรถข้างบ้านคอนโด",
    title: "โรงรถข้างบ้านคอนโด",
    category: "ต่อเติมโรงรถ" 
  },
  { 
    src: "/img/01.jpg", 
    alt: "ติดตั้งหลังคาไวนิลวิลล่า",
    title: "หลังคาไวนิลวิลล่า",
    category: "หลังคาไวนิล" 
  },
  { 
    src: "/img/02.jpg", 
    alt: "รับทำกันสาดศูนย์การค้า",
    title: "กันสาดศูนย์การค้า",
    category: "รับทำกันสาด" 
  },
  { 
    src: "/img/03.jpg", 
    alt: "ติดตั้งหลังคาพียูโฟมรีสอร์ท",
    title: "หลังคาพียูโฟมรีสอร์ท",
    category: "หลังคาพียูโฟม" 
  },
  { 
    src: "/img/04.jpg", 
    alt: "ราคาติดตั้งหลังคาโรงงาน",
    title: "หลังคาโรงงาน",
    category: "ราคาติดตั้งหลังคา" 
  }
];

// Hero Component
function Hero() {
  return (
    <section className="hero-modern relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center" aria-labelledby="hero-heading">
      <Image
        src="/img/บ้าน.jpg"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="hero-bg object-cover"
      />
  <div className="w-full hero-inner px-3 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="hero-contact-line flex flex-col sm:flex-row gap-1 sm:gap-2 lg:gap-4 text-[9px] sm:text-xs lg:text-[11px] mb-3 sm:mb-6 opacity-80 text-white">
          <span className="text-[#c5a572]">กรุงเทพฯและปริมณฑล</span>
          <span className="hidden sm:inline">•</span>
          <span className="text-[8px] sm:text-xs">spkansards@gmail.com</span>
          <span className="hidden sm:inline">•</span>
          <span className="font-medium">084-909-7777</span>
        </div>
        
        <div className="max-w-[900px] w-full">
          <h1 id="hero-heading" className="font-display font-semibold tracking-tight text-[clamp(1.2rem,6vw,3.8rem)] mb-3 sm:mb-4 lg:mb-6 leading-[1.1] sm:leading-[1.08] px-1 sm:px-0 text-white">
            <span className="inline-block">รับติดตั้งหลังคา กันสาด</span>
            <br className="hidden sm:block"/>
            <span className="inline-block">กรุงเทพฯและปริมณฑล</span>
          </h1>
          
          <p className="text-[#9dafc2] text-[clamp(.9rem,3.5vw,1.2rem)] leading-relaxed mb-4 sm:mb-8 lg:mb-10 max-w-[620px] mx-auto px-1 sm:px-4 lg:px-0">
            ผู้เชี่ยวชาญการติดตั้งหลังคา Shinkolite ไวนิล และพียูโฟม รับทำกันสาดและต่อเติมที่จอดรถ ราคาย่อมเยา วัสดุคุณภาพ พร้อมทีมช่างมืออาชีพ
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center px-1 sm:px-4 lg:px-0">
            <a
              href="#contact"
              className="w-full sm:w-auto min-h-[44px] px-4 sm:px-8 lg:px-10 flex items-center justify-center bg-[#b49a74] text-white font-semibold tracking-wide text-base sm:text-base leading-none rounded-md sm:rounded-none shadow-[0_2px_8px_-2px_rgba(0,0,0,0.45)] hover:brightness-[1.08] focus:outline-none focus:ring-2 focus:ring-[#b49a74]/60 transition-all duration-300 touch-manipulation"
            >ขอใบเสนอราคา</a>
            
            <Link
              href="/portfolio"
              className="w-full sm:w-auto min-h-[44px] px-4 sm:px-8 lg:px-10 flex items-center justify-center border border-white text-white font-semibold tracking-wide text-base sm:text-base leading-none hover:bg-white hover:text-[#0b1118] transition-all duration-300 rounded-md sm:rounded-none touch-manipulation"
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
    <section id="about" aria-labelledby="about-heading" className="relative py-8 md:py-16 border-y border-[#141d29] bg-[#0b1118]">
      <div className="mx-auto w-full max-w-[1400px] px-3 sm:px-6">
        <div className="grid gap-6 lg:gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-3 md:mb-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-[10px] sm:text-[11px] tracking-wide text-[#64748b] uppercase">
              <span className="inline-flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#c5a572]"></span> กรุงเทพฯและปริมณฑล</span>
              <span className="hidden sm:inline text-xs">spkansards@gmail.com</span>
              <span className="hidden md:inline">084-909-7777</span>
            </div>
            <div className="flex items-baseline gap-3 md:gap-4 mb-3 md:mb-4">
              <span className="text-[#c5a572] font-semibold text-sm tracking-[.4em]">01</span>
              <h2 id="about-heading" className="font-display font-semibold tracking-tight text-[clamp(1.6rem,3.8vw,2.8rem)] leading-[1.05]">เกี่ยวกับเรา</h2>
            </div>
            <p className="text-[#94a3b8] text-base sm:text-lg leading-relaxed max-w-md mb-4">
              เราคือ SP Kansard ผู้นำด้านติดตั้งกันสาดในกรุงเทพฯและปริมณฑล ด้วยประสบการณ์กว่า 35 ปี และผลงานมากกว่า 50,000 ครัวเรือนทั่วไทย ครอบคลุมทุกประเภทวัสดุ ไม่ว่าจะเป็น กันสาดเมทัลชีท, กันสาดไวนิลดรีมรูฟคลิปล็อค, อลูมิเนียมรูฟ, โพลีคาร์บอเนต, ชินโคไลท์ และระแนงฝ้าทุกแบบ
            </p>
            <p className="text-[#94a3b8] text-base leading-relaxed max-w-md mb-5">
              เรามีทีมงานผู้เชี่ยวชาญในการออกแบบ ติดตั้ง และต่อเติมกันสาดด้วยมาตรฐานสูงสุด ทุกโครงการรับประกันความแข็งแรง ความสวยงาม และฟังก์ชันการใช้งาน พร้อมรับประกันสูงสุด 5 ปี เพื่อความอุ่นใจในระยะยาว
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

        <div className="mt-8 md:mt-16 bg-[#0d141b] px-4 sm:px-8 md:px-10 py-6 md:py-10 flex flex-col sm:flex-row items-stretch gap-4 sm:gap-8 md:gap-0 md:justify-between shadow-[0_0_0_1px_#121c26]">
          {stats.map((s)=> (
            <div key={s.label} className="flex flex-col items-center text-center flex-1 group">
              <div className="font-display font-bold text-[1.8rem] sm:text-[2.2rem] md:text-[2.4rem] leading-none text-[#d9bf8d] tracking-tight transition-all duration-300">{s.value}</div>
              <div className="mt-1 sm:mt-2 text-[10px] sm:text-[12px] tracking-[.35em] text-white/70 uppercase transition-colors duration-300 group-hover:text-[#c5a572]">{s.label}</div>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#c5a572] to-transparent mt-1 sm:mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
          <p className="mt-4 max-w-3xl text-slate-700 dark:text-slate-300/90 text-base sm:text-lg leading-relaxed">
            ศูนย์รวมกันสาดและหลังคาครบวงจรใหญ่ที่สุดในกรุงเทพฯและปริมณฑล
เรามีวัสดุให้เลือกหลากหลาย ตั้งแต่ กันสาดเมทัลชีท, กันสาดไวนิลดรีมรูฟคลิปล็อค, อลูมิเนียมรูฟ, โพลีคาร์บอเนต, ชินโคไลท์ ไปจนถึงระแนงและฝ้าทุกแบบ ครบจบในที่เดียว พร้อมทีมช่างมืออาชีพมากประสบการณ์กว่า 35 ปี ที่พร้อมดูแลทุกขั้นตอนอย่างพิถีพิถัน ตั้งแต่การออกแบบ ติดตั้ง ไปจนถึงบริการหลังการขาย
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Calculate items per view based on screen size
  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 4; // xl: 4 items
      if (window.innerWidth >= 1024) return 3; // lg: 3 items
      if (window.innerWidth >= 768) return 2;  // md: 2 items
      if (window.innerWidth >= 640) return 2;  // sm: 2 items
      return 1.5; // mobile: 1.5 items to show partial next image like desktop
    }
    return 4;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  // Update items per view on resize
  useEffect(() => {
    const handleResize = () => {
      const newItemsPerView = getItemsPerView();
      setItemsPerView(newItemsPerView);
      setIsMobile(window.innerWidth < 640);
    };
    
    // Set initial state
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 640);
    }
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll to specific index
  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const totalItems = portfolioItems.length;
      
      // Calculate scroll position based on screen size
      let scrollPosition;
      if (isMobile) {
        // Mobile: scroll by card width (90vw + margin)
        const cardWidth = window.innerWidth * 0.9 + 16; // 90vw + 16px margin
        scrollPosition = index * cardWidth;
      } else {
        // Desktop: use existing logic
        const itemWidth = container.scrollWidth / totalItems;
        scrollPosition = index * itemWidth;
      }
      
      container.scrollTo({ 
        left: scrollPosition, 
        behavior: 'smooth' 
      });
    }
  };

  // Handle navigation for mobile
  const goToNext = () => {
    if (isMobile) {
      const nextIndex = (currentIndex + 1) >= portfolioItems.length ? 0 : currentIndex + 1;
      setCurrentIndex(nextIndex);
      scrollToIndex(nextIndex);
    } else {
      const increment = itemsPerView;
      const nextIndex = (currentIndex + increment) >= portfolioItems.length 
        ? 0 
        : currentIndex + increment;
      setCurrentIndex(nextIndex);
      scrollToIndex(nextIndex);
    }
  };

  const goToPrev = () => {
    if (isMobile) {
      const prevIndex = currentIndex - 1 < 0 ? portfolioItems.length - 1 : currentIndex - 1;
      setCurrentIndex(prevIndex);
      scrollToIndex(prevIndex);
    } else {
      const increment = itemsPerView;
      const prevIndex = currentIndex - increment < 0 
        ? Math.max(0, portfolioItems.length - increment)
        : currentIndex - increment;
      setCurrentIndex(prevIndex);
      scrollToIndex(prevIndex);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const handleScroll = () => {
        if (!isDragging) {
          const scrollLeft = container.scrollLeft;
          const itemWidth = container.scrollWidth / portfolioItems.length;
          const newIndex = Math.round(scrollLeft / itemWidth);
          setCurrentIndex(Math.max(0, Math.min(newIndex, portfolioItems.length - itemsPerView)));
        }
      };
      
      const handleStart = () => setIsDragging(true);
      const handleEnd = () => {
        setIsDragging(false);
        setTimeout(() => {
          handleScroll();
        }, 100);
      };
      
      container.addEventListener('scroll', handleScroll);
      container.addEventListener('mousedown', handleStart);
      container.addEventListener('mouseup', handleEnd);
      container.addEventListener('touchstart', handleStart);
      container.addEventListener('touchend', handleEnd);
      
      return () => {
        container.removeEventListener('scroll', handleScroll);
        container.removeEventListener('mousedown', handleStart);
        container.removeEventListener('mouseup', handleEnd);
        container.removeEventListener('touchstart', handleStart);
        container.removeEventListener('touchend', handleEnd);
      };
    }
  }, [isDragging, itemsPerView]);

  // Mobile specific rendering
  if (isMobile) {
    return (
      <section id="portfolio" className="relative bg-gradient-to-b from-gray-50 to-white py-12" aria-labelledby="portfolio-heading">
        {/* Mobile Section heading */}
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <div className="text-center">
            <h2 id="portfolio-heading" className="text-4xl font-bold text-gray-900 mb-4">
              ผลงานติดตั้งหลังคาและกันสาด
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              ชมผลงานการต่อเติมโรงรถ ติดตั้งหลังคาไวนิล Shinkolite และกันสาดรางน้ำ คุณภาพงานระดับมืออาชีพ
            </p>
            <div className="mt-6 w-24 h-1 bg-gradient-to-r from-[#c5a572] to-[#d4b583] mx-auto rounded-full"></div>
          </div>
        </div>
        
        {/* Mobile Portfolio Carousel - Single Image */}
        <div className="relative w-full">
          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide touch-pan-x px-6"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none', 
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch'
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              e.currentTarget.style.scrollBehavior = 'auto';
            }}
            onTouchEnd={(e) => {
              setIsDragging(false);
              setTimeout(() => {
                e.currentTarget.style.scrollBehavior = 'smooth';
              }, 100);
            }}
          >
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative flex-shrink-0 w-[90vw] h-[500px] overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-[1.02] shadow-xl hover:shadow-2xl mr-4"
                style={{ scrollSnapAlign: 'start' }}
                onClick={() => router.push('/portfolio')}
              >
                {/* Image */}
                <Image 
                  src={item.src} 
                  alt={item.alt} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading={index < 3 ? 'eager' : 'lazy'}
                  sizes="90vw"
                  priority={index < 2}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="transform translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-4 py-2 bg-[#c5a572]/90 text-white text-sm font-medium rounded-full mb-4 backdrop-blur-sm">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-lg text-gray-200 leading-relaxed">
                      คลิกเพื่อดูรายละเอียดเพิ่มเติม
                    </p>
                  </div>
                  
                  {/* View More Button */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Navigation - Same as Desktop */}
        <div className="flex justify-center items-center mt-8 px-4 pb-8">
          <div className="flex items-center gap-8">
            {/* Left Arrow */}
            <button
              onClick={goToPrev}
              className="w-14 h-14 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center border border-gray-200 touch-manipulation active:scale-95"
              aria-label="ดูผลงานก่อนหน้า"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Page Counter */}
            <div className="flex flex-col items-center min-w-[100px]">
              <div className="text-lg text-gray-700 font-bold bg-white/95 px-6 py-3 rounded-full shadow-lg border border-gray-200 backdrop-blur-sm">
                {currentIndex + 1} / {portfolioItems.length}
              </div>
              <div className="text-xs text-gray-500 mt-2 font-medium">
                ผลงาน
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={goToNext}
              className="w-14 h-14 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center border border-gray-200 touch-manipulation active:scale-95"
              aria-label="ดูผลงานถัดไป"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Progress Dots */}
        <div className="flex justify-center items-center gap-2 px-4 pb-4">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                scrollToIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 touch-manipulation ${
                currentIndex === index
                  ? 'bg-[#c5a572] w-8' 
                  : 'bg-gray-300 hover:bg-gray-400 w-2'
              }`}
              aria-label={`ไปยังผลงานที่ ${index + 1}`}
            />
          ))}
        </div>
      </section>
    );
  }

  // Desktop rendering (existing layout)
  return (
    <section id="portfolio" className="relative bg-gradient-to-b from-gray-50 to-white py-8 md:py-12" aria-labelledby="portfolio-heading">
      {/* Section heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-6">
        <div className="text-center">
          <h2 id="portfolio-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-3">
            ผลงานของเรา
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            ชมผลงานการติดตั้งกันสาดคุณภาพสูง ที่ผสมผสานระหว่างความสวยงาม ความทนทาน และฟังก์ชันการใช้งานที่เหมาะสม
          </p>
          <div className="mt-4 sm:mt-3 w-24 h-1 bg-gradient-to-r from-[#c5a572] to-[#d4b583] mx-auto rounded-full"></div>
        </div>
      </div>
      
      {/* Portfolio Grid */}
      <div className="relative w-full">
        {/* Scrollable Container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide touch-pan-x px-4 sm:px-0"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none', 
            scrollSnapType: 'x proximity',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative flex-shrink-0 w-[48vw] md:w-1/2 lg:w-1/3 xl:w-1/4 h-[36rem] md:h-[40rem] lg:h-[44rem] xl:h-[48rem] overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-[1.02] touch-manipulation"
              style={{ scrollSnapAlign: 'start' }}
              onClick={() => router.push('/portfolio')}
            >
              {/* Image */}
              <Image 
                src={item.src} 
                alt={item.alt} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
                loading={index < 3 ? 'eager' : 'lazy'}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index < 2}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 md:p-6 text-white">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 md:px-3 md:py-1 bg-[#c5a572]/90 text-white text-sm sm:text-base md:text-xs font-medium rounded-full mb-3 sm:mb-4 md:mb-3 backdrop-blur-sm">
                    {item.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    คลิกเพื่อดูรายละเอียดเพิ่มเติม
                  </p>
                </div>
                
                {/* View More Button */}
                <div className="absolute top-4 sm:top-5 md:top-4 right-4 sm:right-5 md:right-4 w-10 h-10 sm:w-12 sm:h-12 md:w-10 md:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Progress Indicators and Navigation */}
      <div className="flex justify-center items-center mt-6 px-4 pb-4">
        <div className="flex items-center gap-6">
          {/* Left Arrow */}
          <button
            onClick={goToPrev}
            className="w-10 h-10 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center border border-gray-200"
            aria-label="ดูผลงานก่อนหน้า"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Page Counter */}
          <div className="flex flex-col items-center min-w-[80px]">
            <div className="text-sm text-gray-700 font-bold bg-white/95 px-4 py-2 rounded-full shadow-lg border border-gray-200 backdrop-blur-sm">
              {`${Math.floor(currentIndex / itemsPerView) + 1} / ${Math.ceil(portfolioItems.length / itemsPerView)}`}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="w-10 h-10 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center border border-gray-200"
            aria-label="ดูผลงานถัดไป"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop Progress Dots */}
      <div className="flex justify-center items-center gap-2 px-4 pb-4">
        {Array.from({ length: Math.ceil(portfolioItems.length / itemsPerView) }).map((_, pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => {
              const targetIndex = pageIndex * itemsPerView;
              setCurrentIndex(targetIndex);
              scrollToIndex(targetIndex);
            }}
            className={`h-2 rounded-full transition-all duration-300 touch-manipulation ${
              Math.floor(currentIndex / itemsPerView) === pageIndex
                ? 'bg-[#c5a572] w-8' 
                : 'bg-gray-300 hover:bg-gray-400 w-2'
            }`}
            aria-label={`ไปหน้าที่ ${pageIndex + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

// Services Component
function Services() {
  return (
    <section id="services" className="relative py-12 md:py-16 overflow-hidden" aria-labelledby="services-heading">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/img/01.jpg"
          alt=""
          aria-hidden
          fill
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1a1f2e]/45"></div>
      </div>
      
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-white mb-2 tracking-wide">
            ขั้นตอนการใช้บริการ เอสพี กันสาด
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-[#2a3441] hover:bg-[#3a4551] border border-[#3a4551] hover:border-[#c5a572] transition-all duration-300 rounded-2xl p-5 text-center"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#c5a572] text-[#1a1f2e] font-bold text-sm flex items-center justify-center rounded-full shadow-lg">
                {index + 1}
              </div>

              {/* Icon Circle */}
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 border-2 border-[#c5a572] rounded-full flex items-center justify-center bg-[#c5a572]/10">
                  <svg 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={1.5} 
                    fill="none" 
                    className="w-8 h-8 text-[#c5a572]"
                  >
                    {service.icon}
                  </svg>
                </div>
              </div>
              
              {/* Title */}
              <h3 className="font-semibold text-lg text-white mb-3 leading-tight">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-[#a0a9b8] text-sm leading-relaxed mb-4 min-h-[80px] flex items-center justify-center">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Process Flow Line */}
        <div className="hidden xl:block mt-8">
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c5a572] to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Video Component
function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Handle video loading events
    const handleLoadStart = () => {
      console.log('Video loading started');
      setIsLoading(true);
    };
    
    const handleCanPlayThrough = () => {
      console.log('Video can play through');
      setIsLoading(false);
    };
    
    const handleLoadedData = () => {
      console.log('Video data loaded');
      setIsLoading(false);
    };
    
    const handleError = (e: Event) => {
      console.error('Video error:', e);
      setHasError(true);
      setIsLoading(false);
    };

    // Performance optimizations
    const handleLoadedMetadata = () => {
      console.log('Video metadata loaded');
      // Basic optimizations for all devices
      video.style.maxWidth = '100%';
      video.style.height = 'auto';
      video.style.objectFit = 'cover';
    };

    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplaythrough', handleCanPlayThrough);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('error', handleError);

    // Force load the video
    video.load();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasError) {
            // Add a small delay to ensure smooth loading
            setTimeout(() => {
              if (video.readyState >= 2) { // HAVE_CURRENT_DATA
                video.play().catch((error) => {
                  console.error('Video play failed:', error);
                  setHasError(true);
                });
              }
            }, 300);
          } else if (!entry.isIntersecting) {
            video.pause();
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '100px'
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('error', handleError);
      
      // Clean up video resources
      video.pause();
      video.currentTime = 0;
    };
  }, [hasError]);

  return (
    <section 
      id="video" 
      className="relative bg-[#0b1118] flex items-center justify-center overflow-hidden md:min-h-screen"
    >
      <div 
        className="relative w-full h-auto md:h-full overflow-hidden"
      >
        {/* Loading indicator */}
        {isLoading && !hasError && (
          <div className="md:absolute md:inset-0 w-full h-auto md:h-full flex items-center justify-center bg-[#0b1118] z-20 min-h-[200px]">
            <div className="flex flex-col items-center px-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mb-4"></div>
              <div className="text-white text-lg text-center">กำลังโหลดวิดีโอ...</div>
            </div>
          </div>
        )}
        
        {/* Error fallback */}
        {hasError && (
          <div className="md:absolute md:inset-0 w-full h-auto md:h-full bg-[#0b1118] z-10">
            <div className="relative w-full h-auto md:h-full aspect-video md:aspect-auto">
              <Image 
                src="/img/01.jpg" 
                alt="SP Awning - กันสาดคุณภาพ" 
                fill
                className="object-contain md:object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <p className="text-lg mb-2">วิดีโอไม่สามารถแสดงได้</p>
                  <p className="text-sm opacity-80">กรุณารีเฟรชหน้าหรือลองใหม่อีกครั้ง</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <video 
          ref={videoRef}
          className={`md:absolute md:inset-0 w-full h-auto md:h-full md:object-cover object-contain transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          style={{ willChange: 'transform' }}
          muted
          loop
          playsInline
          poster="/img/01.jpg"
          preload="metadata"
          key={`video-new`}
        >
          <source src="/img/video-new.mp4" type="video/mp4" />
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
  const [itemsPerView, setItemsPerView] = useState(3);
  
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

  useEffect(() => {
    const updateItems = () => {
      const w = typeof window !== 'undefined' ? window.innerWidth : 1024;
      if (w < 768) setItemsPerView(1);
      else if (w < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    updateItems();
    window.addEventListener('resize', updateItems);
    return () => window.removeEventListener('resize', updateItems);
  }, []);

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
    surname: '',
    phone: '',
    email: '',
    lineId: '',
    services: [] as string[],
    message: ''
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
        surname: '',
        phone: '',
        email: '',
        lineId: '',
        services: [],
        message: ''
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceChange = (serviceName: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceName) 
        ? prev.services.filter(s => s !== serviceName)
        : [...prev.services, serviceName]
    }));
  };

  return (
    <section id="contact" className="relative py-12 md:py-16 bg-[#0b1118] border-y border-[#141d29]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4 tracking-wide">
            ติดต่อเรา
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#c5a572] to-transparent mx-auto mb-6"></div>
          <p className="text-[#94a3b8] text-base max-w-2xl mx-auto leading-relaxed">
            พร้อมให้คำปรึกษาและใบเสนอราคาฟรี รับประกันงานติดตั้ง 5 ปี
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                    ชื่อ *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-[#111b25] border border-[#1e2a37] text-white placeholder-[#94a3b8] focus:border-[#c5a572] focus:!outline-none focus:!ring-0 focus:!ring-offset-0 focus:!shadow-none focus:!box-shadow-none transition-colors"
                    style={{ outline: 'none !important', boxShadow: 'none !important' }}
                    placeholder="ชื่อ"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="surname" className="block text-sm font-medium text-white mb-1">
                    นามสกุล
                  </label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-[#111b25] border border-[#1e2a37] text-white placeholder-[#94a3b8] focus:border-[#c5a572] focus:!outline-none focus:!ring-0 focus:!ring-offset-0 focus:!shadow-none focus:!box-shadow-none transition-colors"
                    style={{ outline: 'none !important', boxShadow: 'none !important' }}
                    placeholder="นามสกุล"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
                  เบอร์โทร *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 bg-[#111b25] border border-[#1e2a37] text-white placeholder-[#94a3b8] focus:border-[#c5a572] focus:!outline-none focus:!ring-0 focus:!ring-offset-0 focus:!shadow-none focus:!box-shadow-none transition-colors"
                  style={{ outline: 'none !important', boxShadow: 'none !important' }}
                  placeholder="เบอร์โทร"
                  required
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-[#111b25] border border-[#1e2a37] text-white placeholder-[#94a3b8] focus:border-[#c5a572] focus:!outline-none focus:!ring-0 focus:!ring-offset-0 focus:!shadow-none focus:!box-shadow-none transition-colors"
                    style={{ outline: 'none !important', boxShadow: 'none !important' }}
                    placeholder="Email Address"
                  />
                </div>

                <div>
                  <label htmlFor="lineId" className="block text-sm font-medium text-white mb-1">
                    ID LINE
                  </label>
                  <input
                    type="text"
                    id="lineId"
                    name="lineId"
                    value={formData.lineId}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-[#111b25] border border-[#1e2a37] text-white placeholder-[#94a3b8] focus:border-[#c5a572] focus:!outline-none focus:!ring-0 focus:!ring-offset-0 focus:!shadow-none focus:!box-shadow-none transition-colors"
                    style={{ outline: 'none !important', boxShadow: 'none !important' }}
                    placeholder="ID LINE"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  บริการที่สนใจ
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['วัสดุกันสาด', 'วัสดุโปร่งแสง', 'ระแนง/ผ้า', 'หลังคาโรงรถ', 'อื่นๆ'].map((service) => (
                    <label key={service} className="flex items-center space-x-2 text-white cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceChange(service)}
                        className="w-4 h-4 text-[#c5a572] bg-[#111b25] border-[#1e2a37] rounded focus:ring-[#c5a572] focus:ring-2"
                      />
                      <span className="text-sm">{service}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                  รายละเอียด
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 bg-[#111b25] border border-[#1e2a37] text-white placeholder-[#94a3b8] focus:border-[#c5a572] focus:!outline-none focus:!ring-0 focus:!ring-offset-0 focus:!shadow-none focus:!box-shadow-none transition-colors resize-none"
                  style={{ outline: 'none !important', boxShadow: 'none !important' }}
                  placeholder="รายละเอียด"
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
                className="w-full px-6 py-3 bg-[#c5a572] text-white font-medium hover:bg-[#b49a74] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
              >
                {isSubmitting ? 'กำลังส่ง...' : 'ส่งข้อความ'}
              </button>

              <p className="text-xs text-[#94a3b8] text-center">
                * ข้อมูลที่จำเป็น | เราจะไม่เผยแพร่ข้อมูลของคุณให้บุคคลที่สาม
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">ข้อมูลติดต่อ</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#c5a572]/10 border border-[#c5a572]/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#c5a572]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">โทรศัพท์</h4>
                    <p className="text-[#94a3b8] text-sm">081-234-5678 (ฝ่ายขาย)</p>
                    <p className="text-[#c5a572] text-xs">โทรฟรี 24 ชั่วโมง</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#c5a572]/10 border border-[#c5a572]/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#c5a572]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">อีเมล</h4>
                    <p className="text-[#94a3b8] text-sm">info@premiumawning.co.th</p>
                    <p className="text-[#c5a572] text-xs">ตอบกลับภายใน 2 ชั่วโมง</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#c5a572]/10 border border-[#c5a572]/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#c5a572]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">ที่ตั้งสำนักงาน</h4>
                    <p className="text-[#94a3b8] text-sm">123/45 ถนนพหลโยธิน แขวงสามเสนใน</p>
                    <p className="text-[#94a3b8] text-sm">เขตพญาไท กรุงเทพฯ 10400</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#c5a572]/10 border border-[#c5a572]/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#c5a572]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">เวลาทำการ</h4>
                    <p className="text-[#94a3b8] text-sm">จันทร์-ศุกร์: 8:00-18:00</p>
                    <p className="text-[#94a3b8] text-sm">เสาร์: 9:00-17:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-[#1e2a37] pt-8">
              <h3 className="text-lg font-semibold text-white mb-4">ช่องทางอื่นๆ</h3>
              <div className="flex gap-2">
                <a href="#" className="w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-[#c5a572]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.190z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-[#c5a572]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-[#c5a572]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-[#c5a572]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"></path>
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

export default function Home() {
	return (
		<>
			<Header />
			<main id="main">
				<Hero />
				<About />
				<AwningIntro />
        <Services />
				<Video />
				<Why />
				<ClientsSection />
        <Portfolio />
        <Testimonials />
        <CtaEstimator />
        <FAQ />
				<Contact />
			</main>
			<SiteFooter />
			{/* Utility / Overlay Components */}
			<FloatingCall />
			<BackToTop />
		</>
	);
}

