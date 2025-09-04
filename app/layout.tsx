import type { Metadata } from "next";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${prompt.variable} ${promptBody.variable} antialiased bg-[#0b0f19] text-[#e5e7eb]`}>
        {children}
      </body>
    </html>
  );
}
