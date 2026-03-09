import React, { useEffect, useRef, useState, useMemo } from 'react';
import gsap from 'gsap';
import { ArrowRight, Phone, Scale } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { SITE_CONFIG } from '../../config/site';

export default function Hero() {
    const titleRef = useRef(null);
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(
        () => [
            "flux constant de clients.",
            "référence sur Google.",
            "cabinet augmenté par l'IA."
        ],
        []
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

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
            <div className="flex items-center justify-center gap-3 px-5 py-2.5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md mb-8 shadow-sm w-fit mx-auto relative z-10">
                <div className="flex items-center gap-2">
                    <Scale size={14} className="text-primary" strokeWidth={2.5} />
                    <span className="text-[10px] md:text-xs uppercase tracking-widest font-mono text-white/80 font-medium">
                        Stratégie digitale pour professions libérales
                    </span>
                </div>
            </div>

            <div className="max-w-6xl w-full mx-auto flex flex-col items-center justify-center flex-grow text-center relative z-10">

                {/* Title */}
                <h1
                    ref={titleRef}
                    className="text-4xl md:text-5xl lg:text-7xl font-sans font-medium text-white leading-[1.1] tracking-tight mb-8 max-w-5xl mx-auto text-center flex flex-col items-center gap-2 md:gap-4"
                >
                    <span className="inline-block overflow-hidden pb-1 md:pb-2">
                        <span className="inline-block word-reveal will-change-transform">
                            Nous transformons votre expertise en
                        </span>
                    </span>

                    <span className="relative inline-flex flex-col justify-end overflow-hidden pb-2 md:pb-4 text-primary font-bold min-h-[1.2em] w-full">
                        {/* Invisible placeholder to reserve width and height of the longest word */}
                        <span className="invisible pointer-events-none" aria-hidden="true">
                            cabinet augmenté par l'IA.
                        </span>
                        {titles.map((title, index) => (
                            <motion.span
                                key={index}
                                className="absolute left-0 w-full text-center"
                                initial={{ opacity: 0, y: "-100%" }}
                                transition={{ type: "spring", stiffness: 50 }}
                                animate={
                                    titleNumber === index
                                        ? { y: 0, opacity: 1 }
                                        : { y: titleNumber > index ? "-150%" : "150%", opacity: 0 }
                                }
                            >
                                {title}
                            </motion.span>
                        ))}
                    </span>
                </h1>

                {/* Subtitles & Body */}
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-xl md:text-2xl font-sans text-white mb-6 font-medium tracking-tight">
                        Plus de clients. Moins de marketing inutile.
                    </p>
                    <p className="text-sm md:text-lg font-sans text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
                        SEO, site haute conversion et stratégie digitale conçus pour générer des dossiers, pas seulement du trafic.
                    </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col items-center mb-24 cursor-pointer w-full">
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4 mt-4 relative z-20 pointer-events-auto">
                        <a href={SITE_CONFIG.calendlyUrl} target="_blank" rel="noopener noreferrer" className="group relative px-10 py-5 bg-primary text-white flex items-center justify-center gap-2 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_-5px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_-5px_rgba(37,99,235,0.5)] overflow-hidden">
                            <span className="font-medium text-lg relative z-10">Réserver mon audit gratuit</span>
                            <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform relative z-10" />
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
                        </a>

                        <a href="#services" className="group px-10 py-5 flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all duration-300">
                            <span className="font-medium text-lg">Voir nos offres</span>
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
}
