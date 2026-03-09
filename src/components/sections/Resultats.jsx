import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Network, Database, BrainCircuit, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const IMPACTS = [
    {
        id: '01',
        title: "Assainissement de la présence locale",
        desc: "Structuration de votre positionnement sur les recherches à forte valeur ajoutée. Votre cabinet devient la réponse évidente ciblée par Google et les algorithmes d'IA.",
        icon: <Network className="w-6 h-6 text-[#0D7DF2]" strokeWidth={1.5} />,
    },
    {
        id: '02',
        title: "Maîtrise de la réputation en ligne",
        desc: "Une preuve sociale irréprochable qui transforme l'intérêt en prise de contact qualifiée, avant même le premier échange avec le client.",
        icon: <Database className="w-6 h-6 text-[#0D7DF2]" strokeWidth={1.5} />,
    },
    {
        id: '03',
        title: "Rationalisation des processus",
        desc: "Délégation des tâches chronophages à des systèmes d'intelligence artificielle sur-mesure et sécurisés, libérant un temps précieux pour le travail juridique.",
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
        <section ref={sectionRef} className="relative w-full py-20 md:py-32 px-6 bg-white overflow-hidden border-y border-black/5">
            <div className="max-w-[1200px] mx-auto relative z-10">

                {/* Header aligné à gauche */}
                <div className="reveal-impact max-w-2xl mb-16 md:mb-24">
                    <span className="inline-block px-3 py-1 bg-[#0D7DF2]/10 text-[#0D7DF2] rounded-full text-[10px] font-mono font-bold uppercase tracking-widest mb-6">
                        L'impact RE7SET
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-[#1a1c1e] leading-[1.1] mb-6">
                        La structuration comme <span className="text-[#0D7DF2]">levier de croissance.</span>
                    </h2>
                    <p className="text-lg font-sans text-[#4a5568] leading-relaxed">
                        Nous ne vendons pas de promesses éphémères. Nous mettons en place des fondations digitales robustes pour que votre expertise rencontre sa véritable valeur sur le marché.
                    </p>
                </div>

                {/* Liste Interactive Minimaliste (Style Accordéon / Tabs sur Desktop) */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Colonne de gauche : Navigation / Liste */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-4">
                        {IMPACTS.map((item, idx) => {
                            const isActive = activeIdx === idx;
                            return (
                                <div
                                    key={idx}
                                    onClick={() => setActiveIdx(idx)}
                                    className={`reveal-impact group cursor-pointer border-b border-black/5 pb-6 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
                                >
                                    <div className="flex items-center gap-6 mb-3">
                                        <span className={`font-mono text-sm font-bold transition-colors duration-300 ${isActive ? 'text-[#0D7DF2]' : 'text-[#a0aec0]'}`}>
                                            {item.id}
                                        </span>
                                        <h3 className={`text-xl md:text-2xl font-sans font-medium tracking-tight transition-colors duration-300 ${isActive ? 'text-[#1a1c1e]' : 'text-[#4a5568]'}`}>
                                            {item.title}
                                        </h3>
                                        <ArrowRight className={`ml-auto w-5 h-5 transition-all duration-300 ${isActive ? 'text-[#0D7DF2] opacity-100 translate-x-0' : 'text-[#a0aec0] opacity-0 -translate-x-4 group-hover:opacity-50'}`} />
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
                    <div className="hidden lg:flex w-full lg:w-1/2 relative min-h-[300px] items-center">
                        {IMPACTS.map((item, idx) => (
                            <div
                                key={idx}
                                className={`absolute inset-0 flex flex-col justify-center bg-[#F8FAFC] rounded-3xl p-12 transition-all duration-700 ease-in-out ${activeIdx === idx ? 'opacity-100 translate-y-0 relative z-10 shadow-[0_20px_40px_rgba(13,125,242,0.08)]' : 'opacity-0 translate-y-8 z-0 pointer-events-none'}`}
                            >
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 border border-black/5">
                                    {item.icon}
                                </div>
                                <h4 className="text-2xl font-sans font-medium text-[#1a1c1e] mb-4">
                                    {item.title}
                                </h4>
                                <p className="text-[#4a5568] font-sans text-lg leading-relaxed">
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
