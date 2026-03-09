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
        <section ref={sectionRef} id="offres" className="relative w-full py-20 md:py-24 px-6 md:px-12 lg:px-24 bg-transparent overflow-hidden">
            {/* Background elements to make this section pop despite being on a transparent global background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/5 to-[#050505]/10 pointer-events-none -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

            <div ref={containerRef} className="max-w-4xl mx-auto relative z-10 p-6 md:p-0">

                {/* Main Clear Premium Card */}
                <div className="relative bg-white/70 backdrop-blur-3xl rounded-[2.5rem] p-10 md:p-20 border border-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden group">

                    {/* Subtle internal glows for depth */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[80px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000 transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col items-center text-center">

                        {/* Top Label */}
                        <div className="reveal-el inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/5 border border-primary/10 mb-10">
                            <span className="text-[11px] font-sans font-semibold text-primary tracking-widest uppercase">
                                Audit Stratégique Offert
                            </span>
                        </div>

                        {/* Typo Hook */}
                        <h2 className="reveal-el text-3xl md:text-5xl lg:text-5xl font-sans font-extrabold text-slate-900 mb-6 tracking-tighter leading-[1.05] text-balance">
                            Chaque mois sans stratégie digitale,<br />
                            <span className="text-primary font-serif italic">vos concurrents avancent à votre place.</span>
                        </h2>

                        {/* Subtitle / Promise */}
                        <p className="reveal-el text-base md:text-lg lg:text-xl text-slate-600 font-sans max-w-2xl mx-auto mb-8 leading-relaxed text-balance">
                            Nous analysons la visibilité de votre cabinet, votre positionnement face à la concurrence et les leviers de croissance que vous n'avez pas encore actionnés au cœur de RE7SET.
                        </p>

                        {/* Guarantee Highlight */}
                        <div className="reveal-el bg-primary/5 border border-primary/20 rounded-xl p-4 max-w-xl mx-auto mb-8 text-primary font-medium">
                            🎯 On vous livre un plan concret ou vous gardez le document, sans suite.
                        </div>

                        {/* Benefits Row */}
                        <div className="reveal-el flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
                            {['Analyse Offerte', 'Zéro Engagement', 'Plan Actionnable'].map((label, idx) => (
                                <div key={idx} className="flex items-center gap-2 font-sans font-semibold text-slate-700 bg-white shadow-sm border border-slate-100 px-4 pt-1.5 pb-2 rounded-lg text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                    <span>{label}</span>
                                </div>
                            ))}
                        </div>


                        {/* Shimmering CTA Button */}
                        <div className="reveal-el relative w-full sm:w-auto">
                            <button
                                onClick={() => setIsCalendlyOpen(true)}
                                className="group/btn relative inline-flex items-center justify-center w-full sm:w-auto gap-4 bg-primary text-white px-10 py-5 md:px-12 md:py-6 rounded-2xl font-semibold text-lg hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_30px_rgba(37,99,235,0.25)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.4)] overflow-hidden"
                            >
                                {/* Shimmer animation */}
                                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>

                                <Calendar className="w-6 h-6 relative z-10" />
                                <span className="relative z-10 tracking-wide">Réserver mon Audit</span>
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center ml-2 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-2">
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </button>
                            <p className="text-[11px] font-sans font-medium text-slate-400 uppercase tracking-widest mt-6 text-center">
                                Entretien en visio • 30 Minutes • Confidentiel
                            </p>

                            <PopupModal
                                url={SITE_CONFIG.calendlyUrl}
                                onModalClose={() => setIsCalendlyOpen(false)}
                                open={isCalendlyOpen}
                                rootElement={document.getElementById("root")}
                            />
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
