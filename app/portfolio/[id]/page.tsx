import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '../../components/Header';
import { SiteFooter } from '../../components/SiteFooter';

// Portfolio data
const portfolioItems = [
  { 
    id: '1',
    src: "/img/01.jpg", 
    alt: "โครงการกันสาดบ้านพักสไตล์โมเดิร์น",
    title: "บ้านพักสไตล์โมเดิร์น",
    category: "บ้านพักอาศัย",
    description: "กันสาดอลูมิเนียมสไตล์โมเดิร์น ออกแบบเฉพาะเพื่อให้เข้ากับสถาปัตยกรรมของบ้าน ใช้วัสดุคุณภาพสูง ทนทานต่อสภาพอากาศ",
    materials: ["อลูมิเนียม T6", "โพลีคาร์บอเนต UV Protection", "สแตนเลสสตีล"],
    area: "25 ตร.ม.",
    year: "2024",
    location: "กรุงเทพมหานคร"
  },
  { 
    id: '2',
    src: "/img/02.jpg", 
    alt: "โครงการกันสาดร้านค้าเชิงพาณิชย์",
    title: "ร้านค้าเชิงพาณิชย์",
    category: "อาคารพาณิชย์",
    description: "กันสาดสำหรับร้านค้า ช่วยเพิ่มพื้นที่ใช้สอยและสร้างจุดเด่นให้กับหน้าร้าน ออกแบบให้เข้ากับการใช้งานเชิงพาณิชย์",
    materials: ["เหล็กเคลือบกันสนิม", "แผ่นเมทัลชีท", "โครงสร้างเสริมแรง"],
    area: "40 ตร.ม.",
    year: "2023",
    location: "นนทบุรี"
  },
  { 
    id: '3',
    src: "/img/03.jpg", 
    alt: "โครงการกันสาดโรงแรมหรู",
    title: "โรงแรมหรู",
    category: "โรงแรม",
    description: "กันสาดสำหรับโรงแรมระดับ 5 ดาว ออกแบบให้เข้ากับสถาปัตยกรรมหรู ใช้วัสดุพรีเมียม เพื่อความทนทานและความสวยงาม",
    materials: ["อลูมิเนียมอัลลอย", "กระจกเทมเปอร์", "ระบบระบายน้ำอัตโนมัติ"],
    area: "120 ตร.ม.",
    year: "2022",
    location: "ชลบุรี"
  },
  { 
    id: '4',
    src: "/img/04.jpg", 
    alt: "โครงการกันสาดโครงการขนาดใหญ่",
    title: "โครงการขนาดใหญ่",
    category: "อุตสาหกรรม",
    description: "กันสาดสำหรับโครงการอุตสาหกรรมขนาดใหญ่ ออกแบบเพื่อรองรับการใช้งานหนัก ทนทานต่อสภาพแวดล้อมที่รุนแรง",
    materials: ["เหล็กโครงสร้าง", "แผ่นเมทัลรูฟ", "ระบบยึดแรงสูง"],
    area: "500 ตร.ม.",
    year: "2021",
    location: "ระยอง"
  }
];

interface PortfolioPageProps {
  params: {
    id: string;
  };
}

export default function PortfolioDetailPage({ params }: PortfolioPageProps) {
  const item = portfolioItems.find(item => item.id === params.id);

  if (!item) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0b1118]">
        {/* Hero Section */}
        <section className="relative pt-20 pb-12">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm">
              <Link href="/" className="text-[#c5a572] hover:text-white transition-colors">
                หน้าแรก
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <Link href="/#portfolio" className="text-[#c5a572] hover:text-white transition-colors">
                ผลงาน
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-300">{item.title}</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-[#c5a572]/20 text-[#c5a572] text-sm rounded-full mb-4">
                    {item.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {item.title}
                  </h1>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-[#c5a572] font-semibold mb-2">พื้นที่</h3>
                    <p className="text-white">{item.area}</p>
                  </div>
                  <div>
                    <h3 className="text-[#c5a572] font-semibold mb-2">ปี</h3>
                    <p className="text-white">{item.year}</p>
                  </div>
                  <div className="col-span-2">
                    <h3 className="text-[#c5a572] font-semibold mb-2">ที่ตั้ง</h3>
                    <p className="text-white">{item.location}</p>
                  </div>
                </div>

                {/* Materials */}
                <div>
                  <h3 className="text-[#c5a572] font-semibold mb-3">วัสดุที่ใช้</h3>
                  <ul className="space-y-2">
                    {item.materials.map((material, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-[#c5a572] rounded-full mr-3"></span>
                        {material}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="pt-6">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 bg-[#c5a572] text-[#0b1118] px-6 py-3 rounded-lg font-semibold hover:bg-[#b49a74] transition-colors"
                  >
                    ปรึกษาโครงการ
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-16 border-t border-[#1a2332]">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                ผลงานอื่นๆ
              </h2>
              <p className="text-gray-400">
                ดูผลงานและโครงการอื่นๆ ของเรา
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {portfolioItems
                .filter(relatedItem => relatedItem.id !== item.id)
                .slice(0, 3)
                .map((relatedItem) => (
                  <Link
                    key={relatedItem.id}
                    href={`/portfolio/${relatedItem.id}`}
                    className="group block"
                  >
                    <div className="aspect-[4/3] relative overflow-hidden rounded-xl mb-4">
                      <Image
                        src={relatedItem.src}
                        alt={relatedItem.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <span className="text-[#c5a572] text-sm">{relatedItem.category}</span>
                      <h3 className="text-white font-semibold group-hover:text-[#c5a572] transition-colors">
                        {relatedItem.title}
                      </h3>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

// Generate static params for all portfolio items
export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    id: item.id,
  }));
}