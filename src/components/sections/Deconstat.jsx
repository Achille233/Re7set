import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Star, AlertCircle, ShieldAlert, WifiOff, FileSearch, Search } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Deconstat() {
    const containerRef = useRef(null);
    const realCardRef = useRef(null);
    const digitalCardRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Animate the "Real" profile card (Solid, stable entrance)
        gsap.fromTo(
            realCardRef.current,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%',
                },
            }
        );

        // Animate the "Digital" profile card (Delayed, glitchy entrance)
        const digitalTl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 75%',
            }
        });

        digitalTl.fromTo(digitalCardRef.current,
            { y: 60, opacity: 0, rotation: -2 },
            { y: 0, opacity: 1, rotation: 0, duration: 0.8, ease: 'back.out(1.2)', delay: 0.3 }
        );

        // Add a continuous "glitch/flicker" effect to the broken elements inside the digital card
        gsap.to('.glitch-element', {
            opacity: 0.4,
            duration: 0.1,
            repeat: -1,
            yoyo: true,
            repeatDelay: Math.random() * 3 + 1, // Random flicker
            ease: "steps(1)"
        });

        // Floating animation for the digital card to make it feel unstable
        gsap.to(digitalCardRef.current, {
            y: "+=5",
            rotation: "+=0.5",
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

    }, []);

    return (
        <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto" ref={containerRef}>
                <span className="text-sm uppercase tracking-widest font-mono text-muted mb-4 block">
                    Le problème
                </span>

                <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#1A1A1A] leading-[1.1] tracking-tight mb-16 max-w-4xl">
                    <span className="block">Votre expertise est peut-être excellente.</span>
                    <span className="block text-[#0D7DF2] mt-2">Votre image digitale raconte une autre histoire.</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Text */}
                    <div className="lg:col-span-5 relative z-20">
                        <p className="text-base md:text-lg font-sans text-muted mb-10 leading-relaxed">
                            La réalité est asymétrique. Les patients, clients et confrères associent la qualité de votre présence en ligne à votre niveau de compétence.
                            Une réputation invisible ou dégradée profite directement à vos concurrents.
                        </p>

                        <ul className="space-y-6">
                            {[
                                "La majorité des prospects vérifient les avis en ligne avant de prendre rendez-vous.",
                                "Les algorithmes (Google, IA) ignorent les profils dont le contenu est obsolète.",
                                "Un décalage entre la réalité et l'écran crée un doute immédiat sur la compétence."
                            ].map((text, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-[#E5F1FF] flex items-center justify-center shrink-0">
                                        <ArrowRight className="text-[#0D7DF2]" size={12} strokeWidth={3} />
                                    </div>
                                    <span className="text-foreground font-medium leading-snug text-sm md:text-base">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: "Le Miroir Déformant" */}
                    <div className="lg:col-span-7 relative flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-end items-stretch perspective-1000 mt-10 lg:mt-0">

                        {/* Connection line between cards (desktop only) */}
                        <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 border-t-2 border-dashed border-red-500/30 z-0">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-[10px] font-mono font-bold text-red-500 tracking-wider">VS</div>
                        </div>

                        {/* Card 1: La Réalité (The Truth) */}
                        <div ref={realCardRef} className="relative z-10 w-full sm:w-[320px] bg-[#0A0A0A] rounded-2xl p-6 shadow-2xl flex flex-col">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <span className="text-[10px] font-mono text-[#00E573] uppercase tracking-widest font-bold">La Réalité</span>
                                    <h3 className="text-white font-sans font-bold text-xl mt-1">Votre Profil</h3>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-[#00E573]/20 flex items-center justify-center">
                                    <span className="text-[#00E573] font-bold font-mono text-sm">PRO</span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-6 flex-grow">
                                <div className="bg-[#141414] rounded-xl p-4 border border-white/5">
                                    <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1.5 font-mono">Expérience métier</div>
                                    <div className="text-white font-bold text-lg">15+ Années</div>
                                </div>
                                <div className="bg-[#141414] rounded-xl p-4 border border-white/5">
                                    <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1.5 font-mono">Taux de recommandation</div>
                                    <div className="flex items-center gap-3">
                                        <div className="text-white font-bold text-lg">98%</div>
                                        <div className="flex gap-1">
                                            <Star size={14} className="text-[#FFB800] fill-[#FFB800]" />
                                            <Star size={14} className="text-[#FFB800] fill-[#FFB800]" />
                                            <Star size={14} className="text-[#FFB800] fill-[#FFB800]" />
                                            <Star size={14} className="text-[#FFB800] fill-[#FFB800]" />
                                            <Star size={14} className="text-[#FFB800] fill-[#FFB800]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#141414] rounded-xl p-4 border border-white/5">
                                    <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1.5 font-mono">Expertise</div>
                                    <div className="text-white/80 text-sm leading-relaxed">Hyper-spécialisée, reconnue par les pairs.</div>
                                </div>
                            </div>

                            <div className="w-full text-[#00E573] text-[10px] font-mono font-bold text-center py-3 flex justify-center items-center gap-2 border-t border-white/5 relative">
                                {/* Subtle green glow at the bottom */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#00E573]/20 to-transparent"></div>
                                ✓ CONFIANCE ACQUISE
                            </div>
                        </div>

                        {/* Card 2: L'Image Digitale (The Distortion) */}
                        <div ref={digitalCardRef} className="relative z-10 w-full sm:w-[320px] bg-white rounded-2xl p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] flex flex-col transform sm:translate-y-6">

                            {/* Glitch overlays - slightly reduced opacity */}
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiAvPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZjAwIiBvcGFjaXR5PSIwLjAyIiAvPgo8L3N2Zz4=')] opacity-30 rounded-2xl pointer-events-none"></div>

                            <div className="flex justify-between items-start mb-6 relative z-10">
                                <div>
                                    <span className="text-[10px] font-mono text-[#F43F5E] uppercase tracking-widest font-bold opacity-80">L'Image Digitale</span>
                                    <h3 className="text-[#A1A1AA] font-sans font-bold text-xl mt-1 glitch-element">Ce qu'ils voient</h3>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-[#F4F4F5] flex items-center justify-center">
                                    <div className="w-6 h-6 bg-[#E4E4E7] rounded animate-pulse"></div>
                                </div>
                            </div>

                            <div className="space-y-4 mb-6 flex-grow relative z-10">
                                <div className="bg-[#FAFAFA] rounded-xl p-4 border border-black/5 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#FAFAFA] via-[#FAFAFA]/80 to-transparent z-10"></div>
                                    <div className="text-[10px] text-[#A1A1AA] uppercase tracking-widest mb-1.5 font-mono flex items-center gap-1.5"><Search size={12} className="text-[#A1A1AA]" /> VISIBILITÉ GOOGLE</div>
                                    <div className="text-[#A1A1AA]/60 font-bold text-lg blur-[2px]">Page 3 / Introuvable</div>
                                </div>
                                <div className="bg-[#FFF1F2] rounded-xl p-4 border border-[#FFE4E6]">
                                    <div className="text-[10px] text-[#F43F5E] uppercase tracking-widest mb-1.5 font-mono flex items-center gap-1.5"><AlertCircle size={12} strokeWidth={2.5} /> RÉPUTATION WEB</div>
                                    <div className="flex items-center gap-3">
                                        <div className="text-[#F43F5E] font-bold text-lg">3.2/5</div>
                                        <div className="flex gap-1">
                                            <Star size={14} className="text-[#F43F5E] fill-[#F43F5E]" />
                                            <Star size={14} className="text-[#F43F5E] fill-[#F43F5E]" />
                                            <Star size={14} className="text-[#F43F5E] fill-[#F43F5E]" />
                                            <Star size={14} className="text-[#E4E4E7] fill-[#E4E4E7]" />
                                            <Star size={14} className="text-[#E4E4E7] fill-[#E4E4E7]" />
                                        </div>
                                    </div>
                                    <div className="text-[10px] font-mono text-[#F43F5E]/70 mt-2">"Cabinet injoignable..." (Avis de 2023)</div>
                                </div>
                                <div className="bg-[#FAFAFA] rounded-xl p-4 border border-black/5 opacity-60 glitch-element">
                                    <div className="text-[10px] text-[#A1A1AA] uppercase tracking-widest mb-1.5 font-mono">PRÉSENCE IA (CHATGPT)</div>
                                    <div className="text-[#A1A1AA] text-sm flex items-center gap-2"><WifiOff size={14} /> Données obsolètes</div>
                                </div>
                            </div>

                            <div className="relative z-10 w-full text-white bg-transparent text-[10px] font-mono font-bold text-center py-2 rounded flex items-center justify-center gap-1.5">
                                {/* Invisible text to maintain exact height matching the left card */}
                                <span className="opacity-0">✓ CONFIANCE ACQUISE</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
