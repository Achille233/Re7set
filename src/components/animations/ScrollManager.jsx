import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollManager() {
    useLayoutEffect(() => {
        // 0. CLEANUP: Clear any stuck GSAP inline styles caused by Vite Hot Module Replacement (HMR) during dev
        gsap.set('section, footer', { clearProps: 'all' });

        // 1. Text Reveal Animation for headings
        const headings = document.querySelectorAll('.reveal-text');
        headings.forEach((heading) => {
            gsap.fromTo(
                heading,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: heading,
                        start: 'top 85%',
                    },
                }
            );
        });

        // 2. Safe Section Reveal (Replaces the broken parallax)
        // Instead of animating layout which breaks z-index, we do a very subtle, clean fade-in as sections enter.
        const animatedElements = document.querySelectorAll('section, footer');
        animatedElements.forEach((el, i) => {
            if (el.tagName.toLowerCase() === 'section' && i === 0) return; // Skip Hero section

            gsap.fromTo(el,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%', // Triggers before it fully enters
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
            gsap.set('section, footer', { clearProps: 'all' }); // Clean up on unmount
        };
    }, []);

    return null;
}
