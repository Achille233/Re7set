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
        <section ref={sectionRef} id="offres" className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-white">
            {/* Subtle Gradient Aura on the left */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[800px] h-[600px] bg-gradient-to-tr from-[#0051e0]/5 via-[#00BCFA]/10 to-transparent blur-[150px] rounded-full pointer-events-none z-0"></div>

            <div ref={containerRef} className="reveal-el max-w-7xl mx-auto relative z-20">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 py-8 lg:py-10">

                    {/* Text section */}
                    <div className="w-full lg:max-w-[850px] xl:max-w-[950px]">
                        <h2 className="text-[36px] md:text-[44px] lg:text-[48px] font-sans font-black tracking-tight leading-[1.05] text-balance mb-4">
                            <span className="text-[#1A1A1A]">Chaque mois sans visibilité, </span>
                            <span className="bg-gradient-to-r from-[#00BCFA] to-[#0051e0] bg-clip-text text-transparent">vos concurrents avancent.</span>
                        </h2>
                        <p className="text-[15px] text-slate-500 font-medium max-w-[650px] leading-relaxed">
                            Ne laissez pas vos prospects choisir par défaut. Prenez une longueur d'avance en réservant un audit stratégique gratuit pour découvrir comment maximiser votre acquisition.
                        </p>
                    </div>

                    {/* Button section */}
                    <div className="shrink-0 flex flex-col items-start lg:items-end justify-center w-full lg:w-auto mt-6 lg:mt-0">
                        <button
                            onClick={() => setIsCalendlyOpen(true)}
                            className="group relative inline-flex items-center justify-center px-10 py-[18px] bg-[#0051e0] hover:bg-[#00BCFA] text-white font-bold tracking-wide uppercase rounded-full border border-transparent transition-all duration-300 overflow-hidden shadow-[0_10px_30px_rgba(0,188,250,0.3)] hover:shadow-[0_10px_40px_rgba(37,99,235,0.4)] transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#00BCFA]/50"
                        >
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
                            <span className="relative z-10 flex items-center justify-center gap-2 text-[15px] drop-shadow-sm font-bold">
                                RÉALISER UN AUDIT
                            </span>
                        </button>
                    </div>

                    <PopupModal
                        url={SITE_CONFIG.calendlyUrl}
                        onModalClose={() => setIsCalendlyOpen(false)}
                        open={isCalendlyOpen}
                        rootElement={document.getElementById("root")}
                    />
                </div>
            </div>
        </section>
    );
}
