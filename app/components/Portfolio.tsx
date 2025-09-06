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
    <section id="portfolio" className="relative bg-[#121b2b]" aria-label="portfolio">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 w-full h-screen">
        {portfolioItems.map((p) => (
          <div key={p.file} className="relative overflow-hidden bg-[#121b2b] group cursor-pointer h-full">
            <Image src={`/img/${p.file}.jpg`} alt={p.alt} width={600} height={1000} 
              className="w-full h-full object-cover transition-all duration-300" loading="lazy" sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 25vw" />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center text-center px-4">
              <div className="text-white transition-colors duration-300">
                <div className="text-lg sm:text-2xl font-bold tracking-wide drop-shadow-lg mb-2">{p.title}</div>
                <div className="text-xs sm:text-base font-medium leading-relaxed drop-shadow-lg whitespace-pre-line group-hover:text-[#c5a572] transition-colors duration-300">{p.subtitle}</div>
              </div>
            </div>
            <div className="absolute top-2 right-2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
