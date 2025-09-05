"use client";
export function Contact() {
	return (
		<section id="contact" className="relative py-14 md:py-16 flex items-center justify-center overflow-hidden" aria-labelledby="contact-heading">
			{/* Full background */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute inset-0 bg-[url('/img/02.jpg')] bg-cover bg-center" />
				<div className="absolute inset-0 bg-black/55" />
			</div>
			<div className="relative w-full max-w-[640px] px-4 sm:px-6">
				<div className="flex flex-col overflow-hidden bg-black/60 backdrop-blur-sm shadow-[0_8px_40px_-6px_rgba(0,0,0,0.7)]">
					<div className="px-8 pt-6 pb-3">
						<h2 id="contact-heading" className="font-display text-center text-[clamp(1.75rem,2.8vw,2.25rem)] font-semibold tracking-tight text-white mb-5">ติดต่อทีมงานผู้เชี่ยวชาญ</h2>
						<form onSubmit={(e)=>e.preventDefault()} className="space-y-4">
							<Field label="ชื่อ" name="name" placeholder="ชื่อ - นามสกุล" small />
							<Field label="เบอร์โทร" name="phone" placeholder="08X-XXX-XXXX" pattern="[0-9\-\s+]{8,}" small />
							<Field label="LINE ID / อีเมล" name="contact" placeholder="Line หรือ Email" small />
							<Field label="ข้อความ" name="message" placeholder="รายละเอียด / ขนาดพื้นที่ / ความต้องการเพิ่มเติม" textarea small />
						</form>
					</div>
					<div className="mt-auto px-8 pb-5 pt-4 flex flex-col items-center gap-5">
						<button className="w-full px-8 py-2.5 text-sm tracking-[.28em] uppercase border border-white/60 text-white hover:bg-white hover:text-black transition">ส่งข้อความ</button>
						<div className="flex gap-4 text-white/85">
							<SocialIcon href="tel:0812345678" label="Call" svg={<path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'/>} />
							<SocialIcon href="https://line.me/R/ti/p/@premiumawning" label="LINE" svg={<path d='M12.02 3C6.49 3 2 6.94 2 11.79c0 2.76 1.48 5.21 3.78 6.86.19.14.31.36.31.6l-.07 1.88c-.02.55.58.9 1.05.62l2.51-1.49c.17-.1.37-.15.57-.15.3.01.61.02.94.02 5.53 0 10.02-3.94 10.02-8.79C21.1 6.94 17.55 3 12.02 3z'/>} />
							<SocialIcon href="mailto:contact@premiumawning.co.th" label="Email" svg={<><rect x='3' y='5' width='18' height='14' rx='2'/><path d='M3 7l9 6 9-6'/></>} />
						</div>
						<div className="w-full grid grid-cols-2 gap-6 text-[11px] leading-relaxed text-[#d1d5db]">
							<div>
								<div className="uppercase tracking-[.3em] text-[10px] text-[#9ca3af] mb-2">ที่อยู่</div>
								123 ถนนสุขุมวิท ชั้น 4\nคลองเตย กรุงเทพฯ 10110
							</div>
							<div>
								<div className="uppercase tracking-[.3em] text-[10px] text-[#9ca3af] mb-2">เวลา/ติดต่อ</div>
								จ-ส 08:30–17:30\n081-234-5678 / LINE: @premiumawning
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function Field({ label, name, placeholder, textarea, pattern, small }: { label: string; name: string; placeholder: string; textarea?: boolean; pattern?: string; small?: boolean; }) {
	return (
		<label className="block">
			<span className="sr-only">{label}</span>
			{textarea ? (
				<textarea name={name} placeholder={placeholder} rows={small?4:5} className="w-full bg-transparent px-0 pb-2 pt-1 text-sm text-white/90 placeholder-white/30 border-b border-white/25 focus:border-white/60 outline-none transition" />
			) : (
				<input name={name} placeholder={placeholder} pattern={pattern} className="w-full bg-transparent px-0 pb-2 pt-1 text-sm text-white/90 placeholder-white/30 border-b border-white/25 focus:border-white/60 outline-none transition" />
			)}
		</label>
	);
}

function SocialIcon({ href, label, svg }: { href: string; label: string; svg: React.ReactNode; }) {
	return (
		<a href={href} aria-label={label} className="w-11 h-11 flex items-center justify-center rounded-full border border-white/30 hover:border-white/70 text-white/80 hover:text-white transition">
			<svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" stroke="none">{svg}</svg>
		</a>
	);
}
