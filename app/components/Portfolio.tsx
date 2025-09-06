import Image from "next/image";

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

export function Portfolio() {
  return (
    <section id="portfolio" className="section-decor relative p-0 animate-fade-in-up animate-delay-100" aria-label="portfolio">
  <div className="portfolio-grid-responsive grid grid-cols-2 lg:grid-cols-4 gap-0 w-full animate-scale-in animate-delay-200">
        {portfolioItems.map((p,idx) => (
          <figure key={p.file} className={`relative overflow-hidden bg-[#121b2b] group cursor-pointer portfolio-item h-[45vh] sm:h-[60vh] lg:h-[85vh] animate-fade-in-up animate-delay-${300 + (idx * 100)} hover-lift`}
                  data-image={`/img/${p.file}.jpg`}
                  data-alt={p.alt}
                  data-index={(idx+1).toString().padStart(2,'0')}>
       <Image src={`/img/${p.file}.jpg`} alt={p.alt} width={600} height={1000} 
         className="w-full h-full object-cover transition duration-400 group-hover:scale-110 group-hover:brightness-110" loading="lazy" sizes="(max-width:480px) 100vw, (max-width:1024px) 50vw, 25vw" />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-400"></div>
            <figcaption className="absolute inset-0 flex items-center justify-center text-center px-2 sm:px-4 animate-slide-in-up animate-delay-${400 + (idx * 100)}">
              <div className="text-white transform group-hover:scale-105 transition-transform duration-300">
                <div className="text-lg sm:text-2xl font-bold tracking-wide drop-shadow-lg mb-2 sm:mb-3 animate-fade-in-down animate-delay-${500 + (idx * 100)} text-shimmer">{p.title}</div>
                <div className="text-xs sm:text-base font-medium leading-relaxed drop-shadow-lg whitespace-pre-line animate-fade-in-up animate-delay-${600 + (idx * 100)} group-hover:text-[#c5a572] transition-colors duration-300">{p.subtitle}</div>
              </div>
            </figcaption>
            <div className="absolute top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 animate-bounce-in animate-delay-${700 + (idx * 100)} group-hover:scale-110 group-hover:bg-[#c5a572]/80">
              <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-4 sm:h-4 text-white group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/>
              </svg>
            </div>
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-[#c5a572]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[20px] border-r-transparent border-b-[20px] border-b-[#c5a572]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </figure>
        ))}
      </div>
    </section>
  );
}
