import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LayoutTemplate, Target, LineChart, Plug, BarChart3, Presentation } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
    {
        title: "Stratégie avant pixels",
        description: "Chaque décision est justifiée par sa contribution à vos objectifs.",
        icon: LayoutTemplate,
        delay: 0.1
    },
    {
        title: "Génération de leads",
        description: "Expérience utilisateur et copywriting optimisés, pour générer des prospects.",
        icon: Target,
        delay: 0.2
    },
    {
        title: "Performance technique",
        description: "Chargement ultra-rapide, SEO technique avancé, suivi de conversion intégré.",
        icon: LineChart,
        delay: 0.3
    },
    {
        title: "Intégration sur-mesure",
        description: "Votre site connecté à votre CRM et stack d'outils, en toute simplicité.",
        icon: Plug,
        delay: 0.4
    },
    {
        title: "Tracking des événements clés",
        description: "Mesurer les performances et ajuster le site en fonction des résultats.",
        icon: BarChart3,
        delay: 0.5
    },
    {
        title: "Expérience sur-mesure",
        description: "Chaque élément est pensé pour refléter votre identité et engager votre audience.",
        icon: Presentation,
        delay: 0.6
    }
];

export default function ExpertiseWeb() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        if (!sectionRef.current) return;

        // Reset cards ref array
        cardsRef.current = cardsRef.current.slice(0, FEATURES.length);

        gsap.fromTo('.web-header',
            { y: 30, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            }
        );

        cardsRef.current.forEach((card, index) => {
            gsap.fromTo(card,
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8,
                    ease: "power3.out",
                    delay: FEATURES[index].delay,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    }
                }
            );
        });

    }, []);

    return (
        <section ref={sectionRef} className="relative w-full py-24 md:py-32 bg-[#111] overflow-hidden text-white border-t border-white/5">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                <div className="text-center mb-16 md:mb-24 web-header">
                    <h2 className="text-3xl md:text-5xl font-sans font-medium mb-6 tracking-tight leading-tight max-w-3xl mx-auto">
                        Une expérience pensée pour <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500 font-serif">convertir votre audience</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {FEATURES.map((feature, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-8 hover:border-primary/30 hover:bg-[#1E1E1E] transition-all duration-300 group flex flex-col h-full"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white/60 group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                                <feature.icon size={22} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold font-sans text-white mb-3 group-hover:text-white transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-white/50 leading-relaxed font-sans mt-auto">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center web-header">
                    <a href={SITE_CONFIG.calendlyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-blue-500 text-white rounded-xl font-medium transition-all duration-300 shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] group">
                        Parler avec un expert
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>

            </div>
        </section>
    );
}
