import type { Metadata, Viewport } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
});

const promptBody = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "ติดตั้งกันสาด | พรีเมียมกันสาด – เรียบหรู งานเนี้ยบ วัสดุพรีเมียม",
  description:
    "พรีเมียมกันสาด ออกแบบและติดตั้งกันสาดคุณภาพสำหรับบ้านและธุรกิจ วัสดุพรีเมียม ทีมช่างมืออาชีพ รับประกันงานติดตั้ง บริการสำรวจหน้างาน.",
  openGraph: {
    type: "website",
    locale: "th_TH",
    title: "ติดตั้งกันสาด | พรีเมียมกันสาด – เรียบหรู งานเนี้ยบ วัสดุพรีเมียม",
    description:
      "กันสาดคุณภาพ ออกแบบ-ติดตั้งโดยทีมงานมากประสบการณ์ วัสดุเกรดพรีเมียม รับประกันงานติดตั้ง.",
    url: "https://www.example.com/",
    siteName: "พรีเมียมกันสาด",
    images: [
      {
        url: "https://www.example.com/img/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Awning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ติดตั้งกันสาด | พรีเมียมกันสาด",
    description: "กันสาดคุณภาพ ทีมงานมืออาชีพ วัสดุพรีเมียม งานเนี้ยบ.",
    images: ["https://www.example.com/img/og-cover.jpg"],
  },
  metadataBase: new URL("https://www.example.com"),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${prompt.variable} ${promptBody.variable} antialiased bg-[#0b0f19] text-[#e5e7eb] min-h-screen flex flex-col`}>        
        <a href="#main" className="skip-link sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#0b1118] focus:text-white focus:rounded-md focus:border focus:border-[#c5a572]">ข้ามไปเนื้อหา</a>
        {children}
      </body>
    </html>
  );
}
