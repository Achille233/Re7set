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
        <section ref={sectionRef} id="offres" className="relative w-full py-24 md:py-32 px-6 flex flex-col items-center justify-center overflow-hidden bg-transparent">
            {/* Vibrant RE7SET Gradient Aura behind the card (Light variant) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[600px] h-[400px] bg-gradient-to-tr from-[#0051e0]/10 via-[#00BCFA]/20 to-transparent blur-[100px] rounded-full pointer-events-none z-0 opacity-80"></div>

            {/* The Glassy Card with RE7SET tint (Light Version) */}
            <div ref={containerRef} className="reveal-el w-full max-w-[700px] mx-auto relative z-20 backdrop-blur-[40px] bg-white/70 border border-[#00BCFA]/20 hover:border-[#00BCFA]/40 transition-colors duration-500 rounded-[2rem] p-10 md:p-14 flex flex-col items-center text-center shadow-[0_8px_40px_rgba(0,188,250,0.1)] group/card">

                {/* Brand-Colored Interlocking Circles */}
                <div className="flex justify-center items-center mb-8 relative w-12 h-12 opacity-90 scale-110">
                    <div className="absolute w-[28px] h-[28px] rounded-full bg-gradient-to-tr from-[#00BCFA]/90 to-[#0051e0]/90 -translate-x-[10px] -translate-y-[5px] shadow-sm"></div>
                    <div className="absolute w-[28px] h-[28px] rounded-full bg-gradient-to-bl from-[#0051e0]/90 to-[#00BCFA]/60 translate-x-[10px] translate-y-[5px] shadow-sm"></div>
                </div>

                {/* Title */}
                <h2 className="text-xl md:text-3xl lg:text-[32px] font-sans font-bold tracking-tight leading-[1.2] text-balance mb-10 max-w-[480px]">
                    <span className="text-[#1A1A1A] block">Chaque mois sans stratégie,</span>
                    <span className="block mt-1 bg-gradient-to-r from-[#00BCFA] to-[#0051e0] bg-clip-text text-transparent">vos concurrents avancent.</span>
                </h2>

                {/* RE7SET Pill Button */}
                <button
                    onClick={() => setIsCalendlyOpen(true)}
                    className="group relative inline-flex items-center justify-center px-8 py-[14px] bg-[#0051e0] hover:bg-[#00BCFA] text-white font-semibold tracking-[0.1em] uppercase rounded-full border border-transparent transition-all duration-300 overflow-hidden shadow-[0_10px_30px_rgba(0,188,250,0.3)] hover:shadow-[0_10px_40px_rgba(37,99,235,0.4)] focus:outline-none focus:ring-2 focus:ring-[#00BCFA]/50"
                >
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2 text-[11px] drop-shadow-sm font-bold">
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
