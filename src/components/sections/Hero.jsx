import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Phone } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function Hero() {
    const titleRef = useRef(null);

    useEffect(() => {
        if (!titleRef.current) return;
        const words = titleRef.current.querySelectorAll('.word-reveal');

        gsap.fromTo(words,
            { y: '120%' },
            {
                y: '0%',
                duration: 1.2,
                ease: 'power4.out',
                stagger: 0.08,
                delay: 0.2
            }
        );
    }, []);

    const titleWords = "Positionnement stratégique, Visibilité & IA.".split(" ");

    return (
        <section className="relative min-h-screen flex flex-col justify-center px-6 pt-32 pb-24 md:px-12 lg:px-24 bg-transparent w-full overflow-hidden">

            {/* Background Grid Lines */}
            <div className="absolute inset-0 w-full h-full pointer-events-none -z-20 flex justify-center">
                <div className="w-full max-w-7xl mx-auto h-full grid grid-cols-4">
                    <div className="border-l border-foreground/[0.08] h-full"></div>
                    <div className="border-l border-foreground/[0.08] h-full"></div>
                    <div className="border-l border-foreground/[0.08] h-full"></div>
                    <div className="border-l border-foreground/[0.08] border-r border-r-foreground/[0.08] h-full"></div>
                </div>
            </div>

            {/* Glowing Orb Effect (High Visibility Light Mode) */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1200px] h-[800px] md:h-[1200px] -z-10 pointer-events-none overflow-hidden xl:overflow-visible">
                {/* Main Wide Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-gradient-to-tr from-primary/30 via-[#3B82F6]/20 to-[#6366F1]/30 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s' }}></div>

                {/* Core bright spot */}
                <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] bg-primary/40 rounded-full blur-[90px] animate-pulse" style={{ animationDelay: '2s', animationDuration: '6s' }}></div>

                {/* Secondary bright spot */}
                <div className="absolute bottom-[30%] right-[30%] w-[30%] h-[30%] bg-[#06B6D4]/30 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '4s', animationDuration: '8s' }}></div>

                {/* Abstract structural rings to hint at tech/AI (Inspired by Velios) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] rounded-full border border-primary/20"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full border border-primary/15 border-dashed"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full border border-primary/10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] rounded-full border border-primary/5"></div>
            </div>

            {/* Badge Pill — haut de section */}
            <div className="flex items-center justify-center gap-4 px-5 py-2.5 rounded-full border border-foreground/10 bg-white/60 backdrop-blur-md mb-8 shadow-sm w-fit mx-auto relative z-10">
                <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-primary/50 hidden sm:block"></div>
                <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-xs uppercase tracking-widest font-mono text-foreground/80 font-medium">
                    Stratégie digitale pour professions libérales
                </span>
                <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-primary/50 hidden sm:block"></div>
            </div>

            <div className="max-w-6xl w-full mx-auto flex flex-col items-center justify-center flex-grow text-center relative z-10">

                {/* Title */}
                <h1
                    ref={titleRef}
                    className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.1] tracking-tight mb-8 max-w-5xl mx-auto text-center"
                >
                    {titleWords.map((word, i) => (
                        <span key={i} className="inline-block overflow-hidden pb-2 align-bottom">
                            <span className="inline-block word-reveal will-change-transform">
                                {word}&nbsp;
                            </span>
                        </span>
                    ))}
                </h1>

                {/* Subtitles & Body */}
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-xl md:text-2xl font-sans text-foreground mb-4">
                        Par des experts et avocats, pour des experts et avocats.
                    </p>
                    <p className="text-lg md:text-xl font-sans text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Nous structurons la présence digitale de votre cabinet et intégrons l'IA pour vous permettre d'attirer les meilleurs dossiers et vous concentrer sur votre cœur de métier.
                    </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-24 cursor-pointer w-full">
                    <a href="#services" className="group relative px-8 py-4 bg-primary text-white flex items-center justify-center gap-2 rounded hover:brightness-110 transition-all duration-300 shadow-[0_0_30px_-5px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_-5px_rgba(37,99,235,0.5)]">
                        <span className="font-medium text-lg">Découvrir nos offres</span>
                        <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 rounded pointer-events-none border border-white/0 group-hover:border-white/20 transition-colors" />
                    </a>

                    <a href="https://calendly.com/sibylle-/30min?month=2026-02" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 flex items-center justify-center gap-2 rounded border border-foreground/20 bg-white/50 backdrop-blur-sm text-foreground hover:bg-white transition-all duration-300 hover:shadow-sm">
                        <Phone size={20} />
                        <span className="font-medium text-lg">Nous contacter</span>
                    </a>
                </div>
            </div>

        </section>
    );
}
