"use client";

import Image from "next/image";
import Link from "next/link";

export function CtaEstimator() {
  return (
    <section id="cta-estimator" className="relative overflow-hidden">
      {/* Background image with warm overlay */}
      <div className="absolute inset-0">
        <Image
          src="/img/02.jpg"
          alt="ผลงานติดตั้งกันสาดคุณภาพ"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-[50%_28%] sm:object-center"
        />
        <div className="absolute inset-0 bg-[#6b5a3d]/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/30 sm:bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 lg:py-20 text-center">
  <h2 className="font-display font-extrabold tracking-tight text-white text-[clamp(1.3rem,5vw,3rem)] sm:text-[clamp(1.8rem,4.5vw,3.25rem)] leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
          ประเมินราคาด้วยตนเอง
          <br className="hidden sm:block" />
          ง่าย เพียง ไม่กี่คลิก !
        </h2>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/materials"
            className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 inline-flex items-center justify-center rounded-none border border-white/85 text-white font-semibold tracking-wide text-sm hover:bg-white hover:text-[#0b1118] transition-colors duration-300 touch-manipulation"
          >
            ประเมินราคา
          </Link>

          <a
            href="#contact"
            className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 inline-flex items-center justify-center rounded-none border border-white/85 text-white font-semibold tracking-wide text-sm hover:bg-white hover:text-[#0b1118] transition-colors duration-300 touch-manipulation"
          >
            ติดต่อฝ่ายขาย
          </a>
        </div>
      </div>
    </section>
  );
}
