import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Infinity as InfinityIcon, Shuffle, Workflow, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
    {
        title: "Votre expertise, visible par les bons dossiers",
        desc: "On commence par comprendre votre cabinet, vos domaines de prédilection et le profil de vos meilleurs clients. Puis on construit pour attirer exactement ces dossiers-là.",
        icon: InfinityIcon,
    },
    {
        title: "Des outils à votre rythme, pas au nôtre",
        desc: "Un expert n'a pas de temps à perdre. On construit des systèmes simples, que vous ou votre assistante pouvez piloter sans compétence technique.",
        icon: Shuffle,
    },
    {
        title: "Adapté aux contraintes du droit",
        desc: "Déontologie, publicité réglementée, confidentialité : on connaît les règles qui s'appliquent aux professions juridiques et on les intègre dès le départ.",
        icon: Workflow,
    },
    {
        title: "Un contact très rapproché, de bout en bout",
        desc: "Nous ne sommes pas une agence distante. Nous avançons main dans la main avec vous, avec une communication fluide, directe et réactive pour ajuster la stratégie en temps réel.",
        icon: Phone,
    }
];

export default function Pourquoi() {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        gsap.fromTo(
            '.pourquoi-card',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                }
            }
        );
    }, []);

    return (
        <section id="pourquoi" className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-transparent" ref={sectionRef}>
            <div className="max-w-6xl mx-auto flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-16 max-w-3xl">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-foreground tracking-tight mb-6 text-balance">
                        Pourquoi RE<span className="text-primary">7</span>SET&nbsp;?
                    </h2>
                    <p className="text-base text-muted font-sans leading-relaxed">
                        On connaît vos contraintes déontologiques, votre rapport au temps et ce que signifie un bon dossier. On construit autour de ça.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {FEATURES.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={idx}
                                className="pourquoi-card relative bg-white border border-black/5 rounded-2xl md:rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] overflow-hidden group transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] flex flex-col min-h-[320px] cursor-pointer"
                            >
                                {/* Animated Borders */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/10 rounded-2xl md:rounded-[2rem] transition-colors duration-700 pointer-events-none z-20"></div>

                                {/* Soft glowing background on hover */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/0 rounded-full blur-3xl transition-colors duration-700 ease-out group-hover:bg-primary/5 -z-10 transform translate-x-1/2 -translate-y-1/2"></div>

                                {/* Massive Background Decorative Icon (Top-Right Edge) */}
                                <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 overflow-hidden pointer-events-none rounded-tr-2xl md:rounded-tr-[2rem]">
                                    <div className="absolute -top-10 -right-10 md:-top-16 md:-right-16 w-32 h-32 md:w-48 md:h-48 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700 ease-out">
                                        {/* Soft gradient mask for the icon */}
                                        <div className="absolute inset-0 bg-gradient-to-bl from-white via-white/50 to-transparent z-10" />
                                        <Icon
                                            size={180}
                                            strokeWidth={1.5}
                                            className="text-gray-200 group-hover:text-primary transition-colors duration-700"
                                        />
                                    </div>
                                </div>

                                {/* Content - Rigid Alignment */}
                                <div className="relative z-10 w-full mt-auto pt-10 transform transition-transform duration-700 ease-out group-hover:-translate-y-2">
                                    <div className="flex flex-col text-left">
                                        {/* Fixed Height Title Area */}
                                        <div className="h-[3.5rem] md:h-[4rem] mb-3">
                                            <h3 className="text-lg md:text-xl font-sans font-medium text-foreground transition-colors duration-700 group-hover:text-primary leading-tight tracking-tight">
                                                {feature.title}
                                            </h3>
                                        </div>

                                        {/* Description */}
                                        <p className="text-muted text-sm md:text-base leading-relaxed font-sans transition-opacity duration-700 opacity-80 group-hover:opacity-100 text-pretty">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
