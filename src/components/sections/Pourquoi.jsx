import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PiInfinityBold, PiShuffleAngularBold, PiStepsBold, PiTargetBold } from 'react-icons/pi';

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
    {
        title: "La stratégie avant la technique",
        desc: "Avant de parler IA ou référencement, on travaille la clarté de votre offre et votre positionnement. Une stratégie digitale performante commence toujours par des bases solides.",
        icon: PiInfinityBold,
    },
    {
        title: "Des solutions pour l'autonomie",
        desc: "Nous construisons des systèmes que vos équipes peuvent réellement exploiter. Accompagnement sur-mesure pour faire grandir votre cabinet sans dépendre indéfiniment de nous.",
        icon: PiShuffleAngularBold,
    },
    {
        title: "Excellence & veille en continu",
        desc: "Le web et l'IA évoluent en permanence. Nous nous formons, testons et ajustons continuellement nos recommandations pour vous garantir une performance durable.",
        icon: PiStepsBold,
    },
    {
        title: "Suivi continu & transparence",
        desc: "Vous savez toujours où en est votre projet. Une équipe dédiée et une méthodologie claire pour une vision de l'avancement de votre transformation digitale.",
        icon: PiTargetBold,
    }
];

export default function Pourquoi() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    cardsRef.current = [];

    const addToRefs = el => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    useEffect(() => {
        if (!sectionRef.current) return;

        gsap.fromTo(
            cardsRef.current,
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
        <section id="pourquoi" className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-transparent" ref={sectionRef}>
            <div className="max-w-6xl mx-auto flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-16 max-w-3xl">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-foreground tracking-tight mb-6">
                        Pourquoi choisir notre agence ?
                    </h2>
                    <p className="text-base text-muted font-sans leading-relaxed">
                        RE7SET est un cabinet de conseil orienté stratégie et performance, qui conçoit votre écosystème digital
                        comme un véritable levier de croissance, pas comme une simple vitrine figée.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {FEATURES.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={idx}
                                ref={addToRefs}
                                className="relative bg-white border border-black/5 rounded-2xl md:rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] overflow-hidden group transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] flex flex-col min-h-[320px] cursor-pointer"
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

                                {/* Content */}
                                <div className="relative z-10 mt-auto flex flex-col gap-4 transform transition-transform duration-700 ease-out group-hover:-translate-y-2">
                                    <h3 className="text-lg md:text-xl font-sans font-medium text-foreground transition-colors duration-700 group-hover:text-primary pr-8">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted text-sm md:text-base leading-relaxed font-sans transition-opacity duration-700 opacity-80 group-hover:opacity-100">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
