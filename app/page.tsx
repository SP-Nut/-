// Home page composing all modular section components
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { AwningIntro } from "./components/AwningIntro";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Why } from "./components/Why";
import { Testimonials } from "./components/Testimonials";
import { CtaBanner } from "./components/CtaBanner";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { SiteFooter } from "./components/SiteFooter";
import { FloatingCall } from "./components/FloatingCall";
import { BackToTop } from "./components/BackToTop";
import { ImageModal } from "./components/ImageModal";
import { Scripts } from "./components/Scripts";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<AwningIntro />
        <Portfolio />
				<Services />
				
				<Why />
				<Testimonials />
				<CtaBanner />
				<FAQ />
				<Contact />
			</main>
			<SiteFooter />
			{/* Utility / Overlay Components */}
			<ImageModal />
			<FloatingCall />
			<BackToTop />
			{/* Inline behaviour scripts (DOM interactions) */}
			<Scripts />
		</>
	);
}

