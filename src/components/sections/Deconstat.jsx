import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Users, Shield, FileText, Eye } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
    {
        icon: <Search className="w-7 h-7 text-white" strokeWidth={2.5} />,
        title: "Google",
        desc: "Ce qui apparaît en premier construit (ou détruit) votre crédibilité.",
        sub: "SEO et GEO déterminent désormais votre visibilité dans Google et dans l'IA."
    },
    {
        icon: <Users className="w-7 h-7 text-white" strokeWidth={2.5} />,
        title: "Avis",
        desc: "La preuve sociale influence plus qu'un argument commercial.",
        sub: "Les avis structurés renforcent votre autorité aux yeux des algorithmes."
    },
    {
        icon: <Shield className="w-7 h-7 text-white" strokeWidth={2.5} />,
        title: "Cohérence",
        desc: "Un message flou crée un doute.",
        sub: "Un positionnement structuré améliore votre référencement SEO & IA."
    },
    {
        icon: <FileText className="w-7 h-7 text-white" strokeWidth={2.5} />,
        title: "Contenus",
        desc: "Votre expertise se démontre avant même un premier échange.",
        sub: "Un contenu optimisé GEO vous rend visible dans les recherches conversationnelles."
    }
];

export default function Deconstat() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.reveal-el',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
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
        <section ref={sectionRef} className="relative w-full py-24 md:py-32 px-6 bg-[#F4F7FB] overflow-hidden">
            <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center">

                {/* Header block */}
                <div className="reveal-el flex flex-col items-center text-center mb-20 w-full">

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-2">
                        <div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px] bg-gradient-to-tr from-[#0051e0] to-[#00BCFA] rounded-[18px] flex items-center justify-center shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300 shrink-0">
                            <Eye className="w-8 h-8 md:w-9 md:h-9 text-white" strokeWidth={2.5} />
                        </div>
                        <h2 className="text-[38px] sm:text-5xl md:text-6xl lg:text-[64px] font-sans font-black tracking-tighter text-[#1a1c1e] m-0 leading-none">
                            Avant de vous contacter,
                        </h2>
                    </div>

                    <h2 className="text-[38px] sm:text-5xl md:text-6xl lg:text-[64px] font-sans font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#00BCFA] to-[#0051e0] leading-tight">
                        ils ont déjà décidé.
                    </h2>

                    <div className="mt-10 mb-8">
                        <p className="text-[#0051e0] font-sans font-bold text-[18px] md:text-[22px] tracking-tight">
                            Et parfois, ce sont les moteurs d'IA qui décident pour eux.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <p className="text-[#4a5568] font-sans text-base md:text-[19px] font-medium tracking-tight">
                            Vos futurs clients ne vous appellent pas pour découvrir qui vous êtes.
                        </p>
                        <p className="text-[#4a5568] font-sans text-base md:text-[19px] font-medium tracking-tight">
                            Ils vérifient votre crédibilité sur Google... <span className="font-bold text-[#1a1c1e]">et dans les réponses générées par l'IA.</span>
                        </p>
                    </div>
                </div>

                {/* Cards grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {CARDS.map((card, i) => (
                        <div key={i} className="reveal-el bg-white rounded-[2rem] p-8 md:p-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-[#00BCFA]/10">

                            <div className="w-[68px] h-[68px] bg-gradient-to-tr from-[#0051e0] to-[#00BCFA] rounded-2xl flex items-center justify-center mb-8 shadow-md shadow-blue-500/20">
                                {card.icon}
                            </div>

                            <h3 className="text-[26px] font-sans font-black tracking-tight text-[#1a1c1e] mb-5">
                                {card.title}
                            </h3>

                            <p className="text-[#4a5568] font-sans text-[16px] leading-relaxed mb-8 font-medium">
                                {card.desc}
                            </p>

                            <div className="mt-auto pt-2">
                                <p className="text-[#0051e0] font-sans text-[14px] font-bold leading-snug">
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
