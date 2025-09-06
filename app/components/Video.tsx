"use client";

import { useEffect, useRef } from 'react';

export function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // เล่นอัตโนมัติเมื่อเลื่อนเจอ
            video.play().catch(console.error);
          } else {
            // หยุดเล่นเมื่อออกจากหน้าจอ
            video.pause();
          }
        });
      },
      { threshold: 0.5 } // เล่นเมื่อวิดีโอแสดง 50% ของขนาด
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="video" className="relative min-h-screen bg-[#0b1118] flex items-center justify-center">
      {/* Full Screen Video Container */}
      <div className="relative w-full h-screen overflow-hidden">
        <video 
          ref={videoRef}
          className="w-full h-full object-cover"
          muted // จำเป็นสำหรับ autoplay ในบราวเซอร์สมัยใหม่
          loop
          playsInline
          poster="/img/01.jpg"
        >
          <source src="/img/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
