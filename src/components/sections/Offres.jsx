import React, { useEffect, useRef, useState } from 'react';
import { PopupModal } from 'react-calendly';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';

gsap.registerPlugin(ScrollTrigger);

export default function Offres() {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.reveal-el',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 80%',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="offres" className="relative w-full py-20 px-6 flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0B]">
            {/* Grainy Noise Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.06] mix-blend-overlay pointer-events-none z-10"></div>

            {/* Vibrant RE7SET Gradient Aura behind the card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[600px] h-[400px] bg-gradient-to-tr from-[#0051e0]/80 via-[#00BCFA]/80 to-transparent blur-[140px] rounded-full pointer-events-none z-0 opacity-80"></div>

            {/* The Glassy Card with RE7SET tint */}
            <div ref={containerRef} className="reveal-el w-full max-w-[700px] mx-auto relative z-20 backdrop-blur-[40px] bg-[#0A1929]/50 border border-[#00BCFA]/10 hover:border-[#00BCFA]/25 transition-colors duration-500 rounded-[2rem] p-10 md:p-14 flex flex-col items-center text-center shadow-[0_8px_40px_rgba(0,188,250,0.15)] group/card">

                {/* Brand-Colored Interlocking Circles */}
                <div className="flex justify-center items-center mb-8 relative w-12 h-12 opacity-90 mix-blend-screen scale-110">
                    <div className="absolute w-[28px] h-[28px] rounded-full bg-gradient-to-tr from-[#00BCFA]/90 to-[#0051e0]/40 -translate-x-[10px] -translate-y-[5px]"></div>
                    <div className="absolute w-[28px] h-[28px] rounded-full bg-gradient-to-bl from-[#0051e0]/90 to-[#00BCFA]/20 translate-x-[10px] translate-y-[5px]"></div>
                </div>

                {/* Title */}
                <h2 className="text-xl md:text-3xl lg:text-[32px] font-sans font-medium tracking-[0.01em] leading-[1.3] text-balance mb-10 max-w-[480px]">
                    <span className="text-white block">Chaque mois sans stratégie,</span>
                    <span className="block mt-1 bg-gradient-to-r from-white via-[#e2f6ff] to-[#00BCFA]/80 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,188,250,0.15)]">vos concurrents avancent.</span>
                </h2>

                {/* RE7SET Pill Button */}
                <button
                    onClick={() => setIsCalendlyOpen(true)}
                    className="group relative inline-flex items-center justify-center px-8 py-[14px] bg-[#00BCFA]/10 hover:bg-[#00BCFA]/20 text-white font-semibold tracking-[0.15em] uppercase rounded-full border border-[#00BCFA]/30 hover:border-[#00BCFA]/60 transition-all duration-300 backdrop-blur-xl overflow-hidden shadow-[inset_0_1px_0_rgba(0,188,250,0.2),0_0_20px_rgba(0,188,250,0.1)] focus:outline-none focus:ring-2 focus:ring-[#00BCFA]/50"
                >
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#00BCFA]/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2 text-[11px] drop-shadow-sm">
                        Réaliser un audit
                    </span>
                </button>

                <PopupModal
                    url={SITE_CONFIG.calendlyUrl}
                    onModalClose={() => setIsCalendlyOpen(false)}
                    open={isCalendlyOpen}
                    rootElement={document.getElementById("root")}
                />
            </div>
        </section>
    );
}
