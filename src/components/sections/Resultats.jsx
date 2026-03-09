import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, MapPin, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CASES = [
    {
        icon: <TrendingUp size={18} className="text-white" strokeWidth={2.5} />,
        label: 'SEO Local',
        metric: '+67%',
        metricLabel: 'Acquisition Leads',
        profile: 'Avocat Droit de la famille · Nantes',
        detail: '+4 nouveaux dossiers par mois issus de Google Maps organiques.',
        timeline: '90 jours',
    },
    {
        icon: <MapPin size={18} className="text-white" strokeWidth={2.5} />,
        label: 'Visibilité',
        metric: 'Top 3',
        metricLabel: 'Positions Locales',
        profile: 'Notaire · Bordeaux',
        detail: 'Visible sur 12 000 recherches locales par mois contre 800 auparavant.',
        timeline: '6 semaines',
    },
    {
        icon: <Clock size={18} className="text-white" strokeWidth={2.5} />,
        label: 'IA & Automa.',
        metric: '12h',
        metricLabel: 'Libérées / Semaine',
        profile: 'Expert-comptable · Lyon',
        detail: 'Tâches administratives répétitives déléguées à l\'IA.',
        timeline: '30 jours',
    },
];

export default function Resultats() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.result-editorial-card',
                { opacity: 0, scale: 0.95, y: 15 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 85%',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full py-16 md:py-20 px-6 bg-[#F8FAFC] overflow-hidden">

            <div className="max-w-[1100px] mx-auto relative z-10 flex flex-col items-center">
                {/* Compact Header */}
                <div className="text-center mb-12 w-full animate-on-scroll">
                    <span className="inline-block px-3 py-1 bg-[#0D7DF2]/10 text-[#0D7DF2] rounded-full text-[10px] font-mono font-bold uppercase tracking-widest mb-4">
                        Résultats projetés
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-black tracking-tighter text-[#1a1c1e] mb-3 leading-[1.1]">
                        À quoi ressemble votre cabinet <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D7DF2] to-[#00BCFA] font-serif italic pb-1">dans 90 jours.</span>
                    </h2>
                    <p className="text-[15px] font-sans text-[#4a5568] font-medium max-w-xl mx-auto leading-relaxed">
                        Des résultats concrets obtenus quand l'expertise métier rencontre une stratégie digitale d'excellence récompensée par les algorithmes.
                    </p>
                </div>

                {/* Compact Horizontal Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                    {CASES.map((c, i) => (
                        <div
                            key={i}
                            className="result-editorial-card group relative bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(13,125,242,0.1)] hover:-translate-y-1 transition-all duration-300 border border-black/[0.04] hover:border-[#0D7DF2]/30 flex flex-col h-full overflow-hidden"
                        >
                            {/* Top row: Icon + Label */}
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-[38px] h-[38px] bg-[#0D7DF2] rounded-xl flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                                    {c.icon}
                                </div>
                                <div className="px-2.5 py-1 rounded text-[9px] font-mono font-bold uppercase tracking-widest bg-[#F4F7FB] text-[#0D7DF2] group-hover:bg-[#0D7DF2]/10 transition-colors duration-300">
                                    {c.label}
                                </div>
                            </div>

                            {/* Metric - Reduced Size */}
                            <div className="mb-4">
                                <h3 className="text-4xl font-sans font-black tracking-tighter text-[#1a1c1e] mb-1 group-hover:text-[#0D7DF2] transition-colors duration-300">
                                    {c.metric}
                                </h3>
                                <p className="text-[13px] font-sans font-bold text-[#0D7DF2]">
                                    {c.metricLabel}
                                </p>
                            </div>

                            <hr className="border-black/5 my-4" />

                            {/* Detail Section */}
                            <div className="mt-auto">
                                <h4 className="text-[10px] font-mono text-[#1a1c1e] uppercase tracking-widest font-bold mb-2">
                                    {c.profile}
                                </h4>
                                <p className="text-[13px] font-sans text-[#4a5568] leading-[1.5] mb-4 min-h-[40px]">
                                    {c.detail}
                                </p>

                                <div className="flex items-center gap-2 bg-[#F4F7FB] group-hover:bg-[#0D7DF2]/5 px-3 py-2 rounded-lg transition-colors duration-300 w-fit">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#0D7DF2]"></div>
                                    <span className="text-[11px] font-sans text-[#4a5568] font-medium">Délai estimé: <span className="font-bold text-[#1a1c1e]">{c.timeline}</span></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Disclaimer */}
                <div className="flex justify-center w-full">
                    <p className="text-center text-[11px] font-mono uppercase tracking-widest text-[#4a5568]/50 font-medium">
                        * Projections statistiques soumises au marché.
                    </p>
                </div>
            </div>
        </section>
    );
}
