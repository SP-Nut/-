// Home page composing all modular section components
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { AwningIntro } from "./components/AwningIntro";
import { Services } from "./components/Services";
import dynamic from 'next/dynamic';
// Lazy loaded (still SSR) to split bundle
const Portfolio = dynamic(()=> import('./components/Portfolio').then(m=>m.Portfolio), { ssr:true, loading:()=> <div className="py-20 text-center text-sm text-[#647587]">กำลังโหลดผลงาน...</div> });
const Why = dynamic(()=> import('./components/Why').then(m=>m.Why), { ssr:true, loading:()=> <div className="py-16 text-center text-xs text-[#647587]">กำลังโหลด...</div> });
const Video = dynamic(()=> import('./components/Video').then(m=>m.Video), { ssr:true, loading:()=> <div className="py-20 text-center text-sm text-[#647587]">กำลังโหลดวิดีโอ...</div> });
const Testimonials = dynamic(()=> import('./components/Testimonials').then(m=>m.Testimonials), { ssr:true, loading:()=> <div className="py-20 text-center text-sm text-[#647587]">กำลังโหลดรีวิว...</div> });
const FAQ = dynamic(()=> import('./components/FAQ').then(m=>m.FAQ), { ssr:true, loading:()=> <div className="py-20 text-center text-sm text-[#647587]">กำลังโหลดคำถาม...</div> });
const Contact = dynamic(()=> import('./components/Contact').then(m=>m.Contact), { ssr:true, loading:()=> <div className="py-20 text-center text-sm text-[#647587]">กำลังโหลดแบบฟอร์ม...</div> });
import { SiteFooter } from "./components/SiteFooter";
import { FloatingCall } from "./components/FloatingCall";
import { BackToTop } from "./components/BackToTop";
import { ImageModal } from "./components/ImageModal";
import { Scripts } from "./components/Scripts";
import { AnimationObserver } from "./components/AnimationObserver";

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
			<ImageModal />
			<FloatingCall />
			<BackToTop />
			<AnimationObserver />
			{/* Inline behaviour scripts (DOM interactions) */}
			<Scripts />
		</>
	);
}

