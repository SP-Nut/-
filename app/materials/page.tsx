"use client";

import { Header } from "../components/Header";
import { SiteFooter } from "../components/SiteFooter";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const materials = [
  // วัสดุทึบแสง - เหล็ก
  { id: 1, name: "เมทัลชีท 0.35 มม.", category: "ทึบแสง", price: "350-450", type: "เหล็กเคลือบสี", image: "/img/01.jpg" },
  { id: 2, name: "เมทัลชีท 0.40 มม.", category: "ทึบแสง", price: "420-520", type: "เหล็กเคลือบสี", image: "/img/01.jpg" },
  { id: 3, name: "เมทัลชีท 0.50 มม.", category: "ทึบแสง", price: "500-600", type: "เหล็กเคลือบสี", image: "/img/01.jpg" },
  
  // ไวนิลชีท
  { id: 4, name: "ไวนิลชีท เกรด A", category: "ทึบแสง", price: "650-750", type: "ไวนิลเคลือบ", image: "/img/02.jpg" },
  { id: 5, name: "ไวนิลชีท เกรด B", category: "ทึบแสง", price: "550-650", type: "ไวนิลเคลือบ", image: "/img/02.jpg" },
  { id: 6, name: "ไวนิลดรีมรูฟ คลิปล็อค", category: "ทึบแสง", price: "850-950", type: "ไวนิลพรีเมียม", image: "/img/02.jpg" },
  
  // อลูมีเนียม
  { id: 7, name: "อลูมีเนียมรูฟ 0.5 มม.", category: "ทึบแสง", price: "750-850", type: "อลูมีเนียม", image: "/img/03.jpg" },
  { id: 8, name: "อลูมีเนียมรูฟ 0.7 มม.", category: "ทึบแสง", price: "950-1050", type: "อลูมีเนียม", image: "/img/03.jpg" },
  { id: 9, name: "อลูมีเนียมรูฟ คอมโพสิท", category: "ทึบแสง", price: "1200-1400", type: "อลูมีเนียมพิเศษ", image: "/img/03.jpg" },
  
  // วัสดุโปร่งแสง - โพลีคาร์บอเนต
  { id: 10, name: "โพลีคาร์บอเนต 6 มม.", category: "โปร่งแสง", price: "450-550", type: "โพลีคาร์บอเนต", image: "/img/04.jpg" },
  { id: 11, name: "โพลีคาร์บอเนต 8 มม.", category: "โปร่งแสง", price: "550-650", type: "โพลีคาร์บอเนต", image: "/img/04.jpg" },
  { id: 12, name: "โพลีคาร์บอเนต 10 มม.", category: "โปร่งแสง", price: "650-750", type: "โพลีคาร์บอเนต", image: "/img/04.jpg" },
  { id: 13, name: "โพลีคาร์บอเนต 16 มม.", category: "โปร่งแสง", price: "850-950", type: "โพลีคาร์บอเนต", image: "/img/04.jpg" },
  
  // อะคริลิก
  { id: 14, name: "ชินโคไลท์ 2.5 มม.", category: "โปร่งแสง", price: "650-750", type: "อะคริลิก", image: "/img/01.jpg" },
  { id: 15, name: "ชินโคไลท์ 3.0 มม.", category: "โปร่งแสง", price: "750-850", type: "อะคริลิก", image: "/img/01.jpg" },
  { id: 16, name: "ชินโคไลท์ Heat Cut", category: "โปร่งแสง", price: "950-1150", type: "อะคริลิกพิเศษ", image: "/img/01.jpg" },
  { id: 17, name: "ชินโคไลท์ Superior", category: "โปร่งแสง", price: "1200-1400", type: "อะคริลิกพรีเมียม", image: "/img/01.jpg" },
  
  // ไฟเบอร์กลาส
  { id: 18, name: "โพลีอีทตัน 0.8 มม.", category: "โปร่งแสง", price: "280-380", type: "ไฟเบอร์กลาส", image: "/img/02.jpg" },
  { id: 19, name: "โพลีอีทตัน 1.0 มม.", category: "โปร่งแสง", price: "320-420", type: "ไฟเบอร์กลาส", image: "/img/02.jpg" },
  { id: 20, name: "โพลีอีทตัน 1.2 มม.", category: "โปร่งแสง", price: "380-480", type: "ไฟเบอร์กลาส", image: "/img/02.jpg" },
  
  // ระแนง/ฝ้า - เมทัลชีท
  { id: 21, name: "ระแนงเมทัลชีท ทึบ", category: "ระแนง/ฝ้า", price: "450-550", type: "เหล็กเคลือบสี", image: "/img/03.jpg" },
  { id: 22, name: "ระแนงเมทัลชีท โปร่ง", category: "ระแนง/ฝ้า", price: "480-580", type: "เหล็กเคลือบสี", image: "/img/03.jpg" },
  { id: 23, name: "ฝ้าเมทัลชีท เรียบ", category: "ระแนง/ฝ้า", price: "380-480", type: "เหล็กเคลือบสี", image: "/img/03.jpg" },
  
  // เฌอร่า
  { id: 24, name: "ระแนงเฌอร่า ลายไม้", category: "ระแนง/ฝ้า", price: "650-750", type: "ไฟเบอร์ซีเมนต์", image: "/img/04.jpg" },
  { id: 25, name: "ฝ้าเฌอร่า เรียบ", category: "ระแนง/ฝ้า", price: "550-650", type: "ไฟเบอร์ซีเมนต์", image: "/img/04.jpg" },
  { id: 26, name: "ฝ้าเฌอร่า ลายไม้", category: "ระแนง/ฝ้า", price: "580-680", type: "ไฟเบอร์ซีเมนต์", image: "/img/04.jpg" },
  
  // อลูมีเนียม
  { id: 27, name: "ระแนงอลูมีเนียม", category: "ระแนง/ฝ้า", price: "750-850", type: "อลูมีเนียม", image: "/img/01.jpg" },
  { id: 28, name: "ฝ้าอลูมีเนียม", category: "ระแนง/ฝ้า", price: "680-780", type: "อลูมีเนียม", image: "/img/01.jpg" },
  
  // PVC
  { id: 29, name: "ระแนง PVC", category: "ระแนง/ฝ้า", price: "280-380", type: "พลาสติก PVC", image: "/img/02.jpg" },
  { id: 30, name: "ฝ้า PVC", category: "ระแนง/ฝ้า", price: "250-350", type: "พลาสติก PVC", image: "/img/02.jpg" }
];

const categories = ["ทั้งหมด", "ทึบแสง", "โปร่งแสง", "ระแนง/ฝ้า"];

export default function MaterialsPage() {
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  const [selectedMaterial, setSelectedMaterial] = useState<typeof materials[0] | null>(null);
  
  const filteredMaterials = selectedCategory === "ทั้งหมด" 
    ? materials 
    : materials.filter(material => material.category === selectedCategory);

  return (
    <>
      {/* Custom CSS for hiding scrollbar */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      <div className="min-h-screen bg-[#0b1118]">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#0b1118] via-[#1a2332] to-[#0b1118]">
          <div className="absolute inset-0 bg-[url('/img/03.jpg')] opacity-5 bg-cover bg-center"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-wide">
              วัสดุคุณภาพ
            </h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#c5a572] to-transparent mx-auto mb-8"></div>
            <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed">
              เลือกดูรายละเอียดวัสดุที่คุณสนใจ เราคัดสรรวัสดุคุณภาพสูงจากผู้ผลิตชั้นนำ
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
                  onClick={() => {
                    setSelectedCategory(category);
                    setSelectedMaterial(null);
                  }}
                  className={`px-6 py-3 text-sm font-medium border transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-[#c5a572] text-white border-[#c5a572]"
                      : "border-[#2a3a4b] text-[#94a3b8] hover:text-[#c5a572] hover:border-[#c5a572]/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Materials List - Left Side */}
              <div className="lg:col-span-1">
                <h3 className="text-xl font-medium text-white mb-6">เลือกวัสดุ</h3>
                <div className="space-y-2 max-h-96 overflow-y-auto scrollbar-hide">
                  {filteredMaterials.map((material) => (
                    <button
                      key={material.id}
                      onClick={() => setSelectedMaterial(material)}
                      className={`w-full text-left p-4 border transition-all duration-300 ${
                        selectedMaterial?.id === material.id
                          ? "bg-[#c5a572]/10 border-[#c5a572] text-white"
                          : "bg-[#111b25]/80 border-[#1e2a37] text-[#94a3b8] hover:border-[#c5a572]/50 hover:text-white"
                      }`}
                    >
                      <div className="font-medium text-sm">{material.name}</div>
                      <div className="text-xs opacity-75 mt-1">{material.type}</div>
                      <div className="text-xs mt-2">
                        <span className={`px-2 py-1 rounded text-xs ${
                          selectedMaterial?.id === material.id 
                            ? "bg-[#c5a572] text-white" 
                            : "bg-[#c5a572]/10 text-[#c5a572]"
                        }`}>
                          {material.price} บาท/ตร.ม.
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Detail - Right Side */}
              <div className="lg:col-span-2">
                {selectedMaterial ? (
                  <div className="bg-[#111b25]/80 backdrop-blur-sm border border-[#1e2a37] overflow-hidden">
                    {/* Header */}
                    <div className="bg-[#1a2332] border-b border-[#2a3a4b] p-6">
                      <h2 className="text-2xl font-light text-white mb-2">{selectedMaterial.name}</h2>
                      <p className="text-[#c5a572]">{selectedMaterial.type}</p>
                    </div>

                    <div className="p-6">
                      <div className="grid md:grid-cols-2 gap-8">
                        
                        {/* Image */}
                        <div>
                          <div className="relative aspect-square overflow-hidden border border-[#2a3a4b] mb-4">
                            <Image
                              src={selectedMaterial.image}
                              alt={selectedMaterial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          
                          {/* Category Badge */}
                          <div className="text-center">
                            <span className="inline-block px-4 py-2 bg-[#c5a572]/10 text-[#c5a572] text-sm rounded">
                              หมวด: {selectedMaterial.category}
                            </span>
                          </div>
                        </div>

                        {/* Details */}
                        <div className="space-y-6">
                          
                          {/* Price */}
                          <div className="bg-[#1a2332]/50 p-4 border border-[#2a3a4b]">
                            <h4 className="text-[#c5a572] font-medium mb-2">ราคา</h4>
                            <div className="text-2xl font-medium text-white">
                              {selectedMaterial.price} <span className="text-sm text-[#94a3b8]">บาท/ตร.ม.</span>
                            </div>
                            <p className="text-xs text-[#94a3b8] mt-1">*ราคาอาจแตกต่างตามปริมาณการสั่งซื้อ</p>
                          </div>

                          {/* Specifications */}
                          <div className="bg-[#1a2332]/50 p-4 border border-[#2a3a4b]">
                            <h4 className="text-[#c5a572] font-medium mb-3">คุณสมบัติ</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-[#94a3b8]">ประเภท:</span>
                                <span className="text-white">{selectedMaterial.type}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-[#94a3b8]">หมวดหมู่:</span>
                                <span className="text-white">{selectedMaterial.category}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-[#94a3b8]">คุณภาพ:</span>
                                <span className="text-green-400">มาตรฐานสูง</span>
                              </div>
                            </div>
                          </div>

                          {/* Contact Buttons */}
                          <div className="space-y-3">
                            <button className="w-full bg-[#c5a572] hover:bg-[#b8986a] text-white py-3 px-6 font-medium transition-all duration-300 transform hover:scale-[1.02]">
                              <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                              </svg>
                              โทรสอบถามทันที
                            </button>
                            
                            <button className="w-full border border-[#c5a572] text-[#c5a572] hover:bg-[#c5a572] hover:text-white py-3 px-6 font-medium transition-all duration-300">
                              <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              ขอใบเสนอราคา
                            </button>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-[#111b25]/80 backdrop-blur-sm border border-[#1e2a37] p-12 text-center">
                    {/* Material Icon */}
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#1a2332]">
                      <svg className="w-8 h-8 text-[#c5a572]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                    </div>
                    <h3 className="text-xl text-white mb-2">เลือกวัสดุที่สนใจ</h3>
                    <p className="text-[#94a3b8]">กดเลือกวัสดุจากรายการทางซ้าย เพื่อดูรายละเอียดและราคา</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-20 border-t border-[#1a2332]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              ต้องการคำปรึกษาเรื่องวัสดุ?
            </h2>
            <p className="text-[#94a3b8] text-lg mb-8">
              ทีมผู้เชี่ยวชาญของเราพร้อมให้คำแนะนำวัสดุที่เหมาะสมกับโปรเจ็กต์ของคุณ
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
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.471L3 21l2.471-5.094A8.959 8.959 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                </svg>
                ส่งข้อความ
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
