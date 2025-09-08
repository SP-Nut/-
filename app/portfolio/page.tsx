import { Header } from "../components/Header";
import { SiteFooter } from "../components/SiteFooter";
import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    id: 1,
    title: "กันสาดบ้านหรู ชัยพฤกษ์",
    description: "กันสาดอลูมิเนียมโครงสร้างแข็งแรง ดีไซน์ทันสมัย",
    image: "/img/01.jpg",
    category: "บ้านพักอาศัย",
    area: "50 ตร.ม.",
    year: "2024"
  },
  {
    id: 2,
    title: "กันสาดร้านกาแฟ สีลม",
    description: "กันสาดโพลีคาร์บอเนตโปร่งแสง สร้างบรรยากาศร่มรื่น",
    image: "/img/02.jpg",
    category: "ร้านค้า",
    area: "30 ตร.ม.",
    year: "2024"
  },
  {
    id: 3,
    title: "กันสาดคอนโดมิเนียม",
    description: "กันสาดโมเดิร์นเข้ากับสถาปัตยกรรมอาคาร",
    image: "/img/03.jpg",
    category: "อาคารพาณิชย์",
    area: "80 ตร.ม.",
    year: "2023"
  },
  {
    id: 4,
    title: "กันสาดโรงงาน อุตสาหกรรม",
    description: "กันสาดขนาดใหญ่ทนทานต่อสภาพอากาศ",
    image: "/img/04.jpg",
    category: "อุตสาหกรรม",
    area: "200 ตร.ม.",
    year: "2023"
  },
  {
    id: 5,
    title: "กันสาดบ้านสวน ปากเกร็ด",
    description: "กันสาดไม้เทียมผสมอลูมิเนียม ดูธรรมชาติ",
    image: "/img/01.jpg",
    category: "บ้านพักอาศัย",
    area: "40 ตร.ม.",
    year: "2024"
  },
  {
    id: 6,
    title: "กันสาดโรงเรียน",
    description: "กันสาดระเบียงโรงเรียน ปลอดภัยสำหรับเด็ก",
    image: "/img/02.jpg",
    category: "สถาบันการศึกษา",
    area: "150 ตร.ม.",
    year: "2023"
  }
];

const categories = ["ทั้งหมด", "บ้านพักอาศัย", "ร้านค้า", "อาคารพาณิชย์", "อุตสาหกรรม", "สถาบันการศึกษา"];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0b1118]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#0b1118] via-[#1a2332] to-[#0b1118]">
        <div className="absolute inset-0 bg-[url('/img/01.jpg')] opacity-5 bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-wide">
            ผลงานของเรา
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#c5a572] to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed">
            ชมผลงานการติดตั้งกันสาดคุณภาพสูงจากทีมมืออาชีพของเรา 
            ที่ได้รับความไว้วางใจจากลูกค้าทั่วประเทศ
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 border-b border-[#1a2332]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 text-sm font-medium border border-[#2a3a4b] text-[#94a3b8] hover:text-[#c5a572] hover:border-[#c5a572]/50 transition-all duration-300 first:bg-[#c5a572] first:text-white first:border-[#c5a572]"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-[#111b25]/80 backdrop-blur-sm border border-[#1e2a37] hover:border-[#c5a572]/30 transition-all duration-500 overflow-hidden hover:scale-[1.02]"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category Badge - Sharp corners */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#c5a572] text-white text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-medium text-white mb-3 group-hover:text-[#c5a572] transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Details */}
                  <div className="flex justify-between items-center text-xs text-[#94a3b8] mb-4">
                    <span>พื้นที่: {item.area}</span>
                    <span>ปี: {item.year}</span>
                  </div>

                  {/* View Button */}
                  <button className="w-full bg-transparent border border-[#c5a572] text-[#c5a572] hover:bg-[#c5a572] hover:text-white py-2 px-4 text-sm font-medium transition-all duration-300">
                    ดูรายละเอียด
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-[#1a2332]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            สนใจงานของเรามั้ย?
          </h2>
          <p className="text-[#94a3b8] text-lg mb-8">
            ติดต่อเราเพื่อปรึกษาและขอใบเสนอราคาฟรี
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0812345678"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#c5a572] hover:bg-[#b8986a] text-white font-medium transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              โทรเลย
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#c5a572] text-[#c5a572] hover:bg-[#c5a572] hover:text-white font-medium transition-all duration-300"
            >
              ส่งข้อความ
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
