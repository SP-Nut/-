"use client";
import { useEffect } from 'react';

export function AnimationObserver() {
  useEffect(() => {
    // Create intersection observer for scroll-triggered animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          
          // Find all animated elements within this section
          const animatedElements = element.querySelectorAll('[class*="animate-"]:not(.animate-visible)');
          
          animatedElements.forEach((el, index) => {
            const htmlEl = el as HTMLElement;
            // Add visible class with staggered timing
            setTimeout(() => {
              htmlEl.classList.add('animate-visible');
              htmlEl.style.animationPlayState = 'running';
            }, index * 150);
          });
          
          // Stop observing this element once animated
          animationObserver.unobserve(element);
        }
      });
    }, observerOptions);

    // Wait for DOM to be ready
    const initObserver = () => {
      // Pause all animations initially (except always-on animations like float, glow, etc.)
      const scrollTriggeredAnimations = document.querySelectorAll('[class*="animate-fade"], [class*="animate-slide"], [class*="animate-scale"], [class*="animate-bounce"], [class*="animate-rotate"]');
      scrollTriggeredAnimations.forEach(el => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.animationPlayState = 'paused';
        htmlEl.style.opacity = '0';
      });

      // Don't pause always-active animations
      const alwaysActiveAnimations = document.querySelectorAll('[class*="animate-float"], [class*="animate-glow"], [class*="animate-luxury-pulse"]');
      alwaysActiveAnimations.forEach(el => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.animationPlayState = 'running';
        htmlEl.style.opacity = '1';
      });

      // Observe all sections with animations
      const animatedSections = document.querySelectorAll('section[id], .hero-modern');
      animatedSections.forEach(section => {
        animationObserver.observe(section);
      });
    };

    // Initialize after a short delay to ensure DOM is ready
    const timer = setTimeout(initObserver, 100);

    // Enhanced smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash && target.hash.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(target.hash);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add click handlers to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    // Cleanup
    return () => {
      clearTimeout(timer);
      animationObserver.disconnect();
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return null;
}
