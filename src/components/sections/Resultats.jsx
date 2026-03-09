import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, MapPin, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CASES = [
    {
        icon: <TrendingUp size={22} className="text-[#0D7DF2]" />,
        iconBg: 'bg-[#0D7DF2]/10 text-[#0D7DF2]',
        label: 'SEO Local',
        tagClasses: 'bg-[#0D7DF2]/5 text-[#0D7DF2] border border-[#0D7DF2]/10',
        metric: '+67%',
        metricLabel: 'Acquisition Leads',
        profile: 'Avocat Droit de la famille · Nantes',
        detail: '+4 nouveaux dossiers par mois issus de Google Maps organiques.',
        timeline: '90 jours',
    },
    {
        icon: <MapPin size={22} className="text-emerald-600" />,
        iconBg: 'bg-emerald-500/10 text-emerald-600',
        label: 'Visibilité',
        tagClasses: 'bg-emerald-500/5 text-emerald-600 border border-emerald-500/10',
        metric: 'Top 3',
        metricLabel: 'Positions Locales',
        profile: 'Notaire · Bordeaux',
        detail: 'Visible sur 12 000 recherches locales par mois contre 800 auparavant.',
        timeline: '6 semaines',
    },
    {
        icon: <Clock size={22} className="text-violet-600" />,
        iconBg: 'bg-violet-500/10 text-violet-600',
        label: 'IA & Automa.',
        tagClasses: 'bg-violet-500/5 text-violet-600 border border-violet-500/10',
        metric: '12h',
        metricLabel: 'Libérées / Semaine',
        profile: 'Expert-comptable · Lyon',
        detail: 'Tâches administratives répétitives déléguées à des outils IA structurés sur mesure.',
        timeline: '30 jours',
    },
];

export default function Resultats() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.result-editorial-card',
                { opacity: 0, scale: 0.95, y: 30 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-transparent overflow-hidden">
            {/* Extremely subtle background accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-primary/[0.02] to-transparent pointer-events-none -z-10"></div>

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 md:mb-24">
                    <span className="inline-block text-[11px] font-mono font-bold text-muted uppercase tracking-widest mb-4">
                        Résultats projetés
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-foreground mb-6">
                        À quoi ressemble votre cabinet<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500 font-serif italic pb-2">dans 90 jours.</span>
                    </h2>
                    <p className="text-base md:text-lg text-muted font-sans max-w-2xl mx-auto leading-relaxed">
                        Des résultats concrets obtenus quand l'expertise métier rencontre une stratégie digitale d'excellence.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
                    {CASES.map((c, i) => (
                        <div
                            key={i}
                            className="result-editorial-card group relative bg-white rounded-2xl md:rounded-[2rem] p-8 md:p-10 border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col h-full"
                        >
                            {/* Subtle gradient background on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            {/* Header of the card */}
                            <div className="flex justify-between items-start mb-10 relative z-10">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${c.iconBg} group-hover:scale-110 transition-transform duration-500`}>
                                    {c.icon}
                                </div>
                                <div className={`px-4 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest ${c.tagClasses}`}>
                                    {c.label}
                                </div>
                            </div>

                            {/* Big Metric */}
                            <div className="mb-8 relative z-10">
                                <h3 className="text-5xl md:text-6xl font-sans font-extrabold tracking-tighter text-foreground mb-3">
                                    {c.metric}
                                </h3>
                                <p className="text-sm md:text-base font-sans font-medium text-foreground/80">
                                    {c.metricLabel}
                                </p>
                            </div>

                            {/* Context & Description */}
                            <div className="mt-auto relative z-10">
                                <div className="w-12 h-[1px] bg-foreground/10 mb-6 group-hover:w-full transition-all duration-700 ease-in-out"></div>
                                <h4 className="text-[11px] font-mono text-foreground uppercase tracking-widest font-semibold mb-3">
                                    {c.profile}
                                </h4>
                                <p className="text-sm font-sans text-muted leading-relaxed mb-8">
                                    {c.detail}
                                </p>

                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                                    <span className="text-xs font-sans text-muted">Délai estimé : <span className="font-medium text-foreground">{c.timeline}</span></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Disclaimer */}
                <div className="flex justify-center">
                    <p className="text-center text-xs font-sans text-muted/60 max-w-2xl px-4">
                        * Projections statistiques. Les performances réelles dépendent des variables du marché local.
                    </p>
                </div>

            </div>
        </section>
    );
}
