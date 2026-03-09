import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, ArrowRight, ShieldCheck, Zap, Trophy } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';

gsap.registerPlugin(ScrollTrigger);

export default function Offres() {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

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
        <section ref={sectionRef} id="offres" className="relative w-full py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-transparent overflow-hidden">
            {/* Background elements to make this section pop despite being on a transparent global background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/5 to-[#050505]/10 pointer-events-none -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

            <div ref={containerRef} className="max-w-4xl mx-auto relative z-10">

                {/* Main Card */}
                <div className="relative bg-[#0A0A0A] rounded-[2rem] p-8 md:p-16 border border-white/10 shadow-2xl overflow-hidden group">
                    {/* Subtle internal glow */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 transform translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>

                    {/* Floating border effect */}
                    <div className="absolute inset-0 border border-primary/20 rounded-[2rem] scale-[0.98] opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col items-center text-center">

                        <span className="reveal-el inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-mono text-primary tracking-widest uppercase mb-10">
                            Audit Stratégique Offert
                        </span>

                        <h2 className="reveal-el text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-8 tracking-tight leading-[1.1] text-balance">
                            Ne nous croyez pas sur parole.<br />
                            <span className="italic text-white/70">Jugez sur pièces.</span>
                        </h2>

                        <p className="reveal-el text-base md:text-lg lg:text-xl text-white/50 font-sans max-w-2xl mx-auto mb-12 leading-relaxed text-balance">
                            Nous analysons la visibilité de votre cabinet, vos concurrents et votre potentiel d'automatisation.
                            <strong className="text-white font-medium block mt-4">Si vous n'êtes pas bluffé par notre plan d'action de 90 jours, vous gardez le document. Si vous l'êtes, on discute de la suite.</strong>
                        </p>

                        {/* Benefits row */}
                        <div className="reveal-el flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-16 w-full">
                            <div className="flex items-center gap-3 text-white/70">
                                <Zap className="w-5 h-5 text-yellow-400" />
                                <span className="text-sm font-medium font-sans">100% Personnalisé</span>
                            </div>
                            <div className="flex items-center gap-3 text-white/70">
                                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                                <span className="text-sm font-medium font-sans">Zéro Engagement</span>
                            </div>
                            <div className="flex items-center gap-3 text-white/70">
                                <Trophy className="w-5 h-5 text-primary" />
                                <span className="text-sm font-medium font-sans">Valeur Immédiate</span>
                            </div>
                        </div>

                        {/* Massive CTA */}
                        <div className="reveal-el relative w-full sm:w-auto">
                            <a
                                href={SITE_CONFIG.calendlyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/btn relative inline-flex items-center justify-center w-full sm:w-auto gap-4 bg-primary text-white px-10 py-5 md:px-12 md:py-6 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:shadow-[0_0_60px_rgba(37,99,235,0.5)] overflow-hidden"
                            >
                                {/* Shimmer animation */}
                                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>

                                <Calendar className="w-5 h-5 relative z-10" />
                                <span className="relative z-10">Réserver mon Audit Stratégique</span>
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center ml-2 relative z-10 transition-transform group-hover/btn:translate-x-1">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </a>
                            <p className="text-[11px] font-mono text-white/30 uppercase tracking-widest mt-6 text-center">
                                Entretien en visio • 30 Minutes • Confidentiel
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
