import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Network, Database, BrainCircuit, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const IMPACTS = [
    {
        id: '01',
        title: "Visibilité locale maîtrisée",
        desc: "Votre cabinet apparaît en tête des recherches locales et des requêtes IA. Chaque prospect qui cherche votre expertise vous trouve en premier.",
        icon: <Network className="w-6 h-6 text-[#0D7DF2]" strokeWidth={1.5} />,
    },
    {
        id: '02',
        title: "Réputation qui convertit",
        desc: "Des avis structurés et une image cohérente transforment la curiosité en prise de contact. Votre crédibilité précède chaque conversation.",
        icon: <Database className="w-6 h-6 text-[#0D7DF2]" strokeWidth={1.5} />,
    },
    {
        id: '03',
        title: "Temps libéré par l'IA",
        desc: "Des outils d'intelligence artificielle sur mesure prennent en charge les tâches répétitives. Vous vous concentrez sur le travail à valeur ajoutée.",
        icon: <BrainCircuit className="w-6 h-6 text-[#0D7DF2]" strokeWidth={1.5} />,
    }
];

export default function Resultats() {
    const sectionRef = useRef(null);
    const [activeIdx, setActiveIdx] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.reveal-impact',
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full py-20 md:py-32 px-6 bg-transparent overflow-hidden">
            {/* Arrière-plan subtilement néon (bruit/glow) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(13,125,242,0.05),transparent_70%)] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#0D7DF2]/[0.02] blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-[1200px] mx-auto relative z-10">

                {/* Header aligné au centre */}
                <div className="reveal-impact max-w-3xl mx-auto text-center mb-16 md:mb-24 flex flex-col items-center">
                    <span className="inline-block px-3 py-1 bg-[#0D7DF2]/10 border border-[#0D7DF2]/20 text-[#0D7DF2] rounded-full text-[10px] font-mono font-bold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(13,125,242,0.15)]">
                        La solution
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-sans font-medium tracking-tight text-[#1a1c1e] leading-[1.1] mb-6">
                        Passez d'une présence subie à <span className="text-[#0D7DF2] drop-shadow-[0_0_20px_rgba(13,125,242,0.2)]">un écosystème performant.</span>
                    </h2>
                    <p className="text-lg font-sans text-[#4a5568] leading-relaxed max-w-2xl">
                        Nous reprenons le contrôle de votre image de bout en bout pour en faire votre meilleur apporteur d'affaires. Voici les trois piliers sur lesquels nous bâtissons votre croissance.
                    </p>
                </div>

                {/* Liste Interactive Minimaliste (Style Accordéon / Tabs sur Desktop) */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 relative">

                    {/* Colonne de gauche : Navigation / Liste */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-4 relative z-20">
                        {IMPACTS.map((item, idx) => {
                            const isActive = activeIdx === idx;
                            return (
                                <div
                                    key={idx}
                                    onClick={() => setActiveIdx(idx)}
                                    className={`reveal-impact group cursor-pointer border-b border-black/5 pb-6 transition-all duration-300 relative ${isActive ? 'opacity-100 pl-4' : 'opacity-40 hover:opacity-100 hover:pl-4'}`}
                                >
                                    <div className="flex items-center gap-6 mb-3 relative">
                                        <div className={`absolute -left-6 top-1/2 -translate-y-1/2 w-[5px] h-[34px] bg-[#0D7DF2] rounded-full shadow-[0_0_15px_rgba(13,125,242,0.5)] transition-all duration-300 ${isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />

                                        <span className={`font-mono text-sm font-bold transition-all duration-300 ${isActive ? 'text-[#0D7DF2] drop-shadow-[0_0_8px_rgba(13,125,242,0.4)]' : 'text-[#a0aec0]'}`}>
                                            {item.id}
                                        </span>
                                        <h3 className={`text-xl md:text-2xl font-sans font-medium tracking-tight transition-colors duration-300 ${isActive ? 'text-[#1a1c1e]' : 'text-[#4a5568]'}`}>
                                            {item.title}
                                        </h3>
                                        <ArrowRight className={`ml-auto w-5 h-5 transition-all duration-300 ${isActive ? 'text-[#0D7DF2] opacity-100 translate-x-0 drop-shadow-[0_0_8px_rgba(13,125,242,0.3)]' : 'text-[#a0aec0] opacity-0 -translate-x-4 group-hover:opacity-40 group-hover:translate-x-0'}`} />
                                    </div>

                                    {/* Mobile Only Content (Accordion style) */}
                                    <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-[200px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-[#4a5568] font-sans text-base leading-relaxed pl-11">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Colonne de droite : Affichage dynamique (Desktop Only) */}
                    <div className="hidden lg:flex w-full lg:w-1/2 relative min-h-[350px] items-center justify-center">
                        {/* Glow orb behind active card */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#0D7DF2]/10 blur-[80px] rounded-full pointer-events-none transition-all duration-700" />

                        {IMPACTS.map((item, idx) => (
                            <div
                                key={idx}
                                className={`absolute w-full max-w-[450px] flex flex-col justify-center items-center text-center bg-white/70 backdrop-blur-xl rounded-3xl p-10 lg:p-12 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] border border-white/80 ${activeIdx === idx ? 'opacity-100 translate-y-0 scale-100 z-10 shadow-[0_20px_50px_rgba(13,125,242,0.08),inset_0_0_0_1px_rgba(255,255,255,0.5)]' : 'opacity-0 translate-y-12 scale-95 z-0 pointer-events-none'}`}
                            >
                                <div className="w-16 h-16 bg-[#F8FAFC] rounded-2xl flex flex-col items-center justify-center shadow-inner mb-6 border border-black/5 shrink-0 relative group-hover:scale-105 transition-transform duration-300">
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />
                                    {item.icon}
                                </div>
                                <h4 className="text-[22px] font-sans font-black tracking-tight text-[#1a1c1e] mb-4">
                                    {item.title}
                                </h4>
                                <p className="text-[#4a5568] font-sans text-[17px] leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
