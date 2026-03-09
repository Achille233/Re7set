import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Users, Shield, FileText, Eye } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
    {
        icon: <Search className="w-5 h-5 text-white" strokeWidth={2.5} />,
        title: "Google",
        desc: "Ce qui apparaît en premier construit ou détruit votre crédibilité.",
        sub: "SEO Local"
    },
    {
        icon: <Users className="w-5 h-5 text-white" strokeWidth={2.5} />,
        title: "Avis",
        desc: "La preuve sociale influence plus qu'un argument commercial.",
        sub: "Réputation"
    },
    {
        icon: <Shield className="w-5 h-5 text-white" strokeWidth={2.5} />,
        title: "Cohérence",
        desc: "Un message digital flou crée un doute immédiat.",
        sub: "Autorité"
    },
    {
        icon: <FileText className="w-5 h-5 text-white" strokeWidth={2.5} />,
        title: "Contenus",
        desc: "L'expertise se démontre bien avant le premier échange.",
        sub: "Positionnement"
    }
];

export default function Constat() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.reveal-el',
                { opacity: 0, y: 15 },
                {
                    opacity: 1,
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
        <section ref={sectionRef} className="relative w-full py-12 md:py-16 px-6 bg-[#F8FAFC] overflow-hidden border-y border-black/5">
            <div className="max-w-[1000px] mx-auto relative z-10">

                {/* Header section (Compact & Inline-like) */}
                <div className="reveal-el flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-[40px] h-[40px] bg-[#0D7DF2] rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 shrink-0 transform -rotate-3">
                                <Eye className="w-5 h-5 text-white" strokeWidth={2.5} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-sans font-black tracking-tight text-[#1a1c1e] m-0 leading-none">
                                Avant de vous contacter,
                            </h2>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-sans font-black tracking-tight text-[#0D7DF2] leading-tight mb-2">
                            ils ont déjà décidé.
                        </h2>
                    </div>

                    <div className="flex-1 md:pl-8 md:border-l border-black/5">
                        <p className="text-[#0D7DF2] font-sans font-bold text-sm uppercase tracking-widest mb-2">
                            Moteurs d'IA & Recherche
                        </p>
                        <p className="text-[#4a5568] font-sans text-[15px] font-medium leading-relaxed">
                            Vos futurs clients vérifient votre crédibilité en ligne et via les réponses générées par l'IA <span className="font-bold text-[#1a1c1e]">bien avant</span> de vous solliciter pour un rendez-vous.
                        </p>
                    </div>
                </div>

                {/* Grid 4 columns, much smaller cards */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {CARDS.map((card, i) => (
                        <div key={i} className="reveal-el bg-white rounded-2xl p-5 flex flex-col items-start shadow-[0_2px_10px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(13,125,242,0.1)] hover:-translate-y-1 transition-all duration-300 border border-black/[0.04] hover:border-[#0D7DF2]/30 group">

                            <div className="flex items-center gap-3 mb-4 w-full">
                                <div className="w-[36px] h-[36px] bg-[#F4F7FB] group-hover:bg-[#0D7DF2] rounded-[10px] flex items-center justify-center transition-colors duration-300">
                                    {React.cloneElement(card.icon, { className: "w-4 h-4 text-[#0D7DF2] group-hover:text-white transition-colors duration-300" })}
                                </div>
                                <h3 className="text-[15px] font-sans font-black tracking-tighter text-[#1a1c1e] leading-none m-0">
                                    {card.title}
                                </h3>
                            </div>

                            <p className="text-[#4a5568] font-sans text-[13px] leading-[1.6] mb-5 font-medium flex-1">
                                {card.desc}
                            </p>

                            <div className="mt-auto w-full pt-3 border-t border-black/5">
                                <p className="text-[#0D7DF2] font-sans text-[11px] font-bold tracking-widest uppercase">
                                    {card.sub}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
