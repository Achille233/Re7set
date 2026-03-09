import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CommentCaMarcheSEO() {
    const sectionRef = useRef(null);
    const stepsRef = useRef([]);

    useEffect(() => {
        if (!sectionRef.current) return;

        gsap.fromTo(stepsRef.current,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                }
            }
        );
    }, []);

    const steps = [
        {
            num: "1",
            title: "Google vous ignore",
            desc: "ChatGPT, Perplexity et Gemini ne mentionnent pas votre marque. Vous ne savez même pas pourquoi."
        },
        {
            num: "2",
            title: "L'IA ne sait pas que vous existez",
            desc: "ChatGPT, Perplexity et Gemini ne mentionnent jamais votre marque car vous n'avez aucune empreinte IA."
        },
        {
            num: "3",
            title: "Pas d'autorité, pas de confiance",
            desc: "Sans backlinks ni présence sociale, les modèles IA n'ont aucune raison de vous recommander."
        }
    ];

    return (
        <section ref={sectionRef} className="relative z-30 bg-[#0A0A0A] pb-24 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-24 relative z-10 pt-10">
                    <span className="text-[11px] font-mono text-white/60 uppercase tracking-widest font-bold block mb-4">
                        COMMENT ÇA MARCHE
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-white tracking-tight">
                        Vous n'êtes qu'à <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500 pb-2">3 corrections</span> d'un trafic exponentiel
                    </h2>
                </div>

                {/* Steps Container */}
                <div className="relative">
                    {/* Horizontal Dotted Line (Desktop) */}
                    <div className="hidden md:block absolute top-[1.25rem] left-[20px] right-[20px] border-t border-dashed border-white/20 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                ref={el => stepsRef.current[index] = el}
                                className="flex flex-col items-center md:items-start text-center md:text-left relative"
                            >
                                {/* Number Circle */}
                                <div className="w-10 h-10 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-white font-mono font-bold text-sm mb-6 z-10 relative">
                                    {step.num}
                                </div>

                                {/* Content */}
                                <div className="max-w-[280px]">
                                    <h3 className="text-lg font-bold font-sans text-white mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-white/50 leading-relaxed font-sans">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
