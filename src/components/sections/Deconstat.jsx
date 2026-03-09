import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, Star, Shield, Trophy, Eye, Zap, EyeOff, HelpCircle, Search, Cpu } from 'lucide-react';

function AuraVisual() {
    const auraCoreRef = useRef(null);
    const badgeRefs = useRef([]);
    const [isRevealed, setIsRevealed] = useState(false);

    // Configuration des états "Avant" (grisé) et "Après" (coloré)
    const badgesData = [
        {
            angle: -Math.PI / 2, // Perfect Top
            before: { icon: <EyeOff strokeWidth={2.5} className="w-[18px] h-[18px]" />, text: "Introuvable", bg: "bg-[#F8FAFC]", border: "border-[#E2E8F0] border-dashed", textClass: "text-[#94A3B8]", shadow: "shadow-none" },
            after: { icon: <Eye strokeWidth={2.5} className="w-[18px] h-[18px] text-[#8B5CF6]" />, text: "Visibilité Nette", bg: "bg-[#F3E8FF]", border: "border-[#D8B4FE] border-solid", textClass: "text-[#8B5CF6]", shadow: "shadow-[0_8px_20px_rgba(139,92,246,0.12)]" }
        },
        {
            angle: 0, // Perfect Right
            before: { icon: <HelpCircle strokeWidth={2.5} className="w-[18px] h-[18px]" />, text: "Aucun avis", bg: "bg-[#F8FAFC]", border: "border-[#E2E8F0] border-dashed", textClass: "text-[#94A3B8]", shadow: "shadow-none" },
            after: { icon: <Star strokeWidth={2.5} className="w-[18px] h-[18px] text-[#FBBC05]" fill="#FBBC05" />, text: "4.9/5 TrustScore", bg: "bg-white", border: "border-[#FEF08A] border-solid", textClass: "text-[#1A1A1A]", shadow: "shadow-[0_8px_20px_rgba(251,188,5,0.08)]" }
        },
        {
            angle: Math.PI / 2, // Perfect Bottom
            before: { icon: <Search strokeWidth={2.5} className="w-[18px] h-[18px]" />, text: "Page 3 Google", bg: "bg-[#F8FAFC]", border: "border-[#E2E8F0] border-dashed", textClass: "text-[#94A3B8]", shadow: "shadow-none" },
            after: { icon: <Shield strokeWidth={2.5} className="w-[18px] h-[18px] text-[#10B981]" />, text: "Top 3 Google", bg: "bg-[#ECFDF5]", border: "border-[#A7F3D0] border-solid", textClass: "text-[#10B981]", shadow: "shadow-[0_8px_20px_rgba(16,185,129,0.12)]" }
        },
        {
            angle: Math.PI, // Perfect Left
            before: { icon: <Cpu strokeWidth={2.5} className="w-[18px] h-[18px]" />, text: "Ignoré des IA", bg: "bg-[#F8FAFC]", border: "border-[#E2E8F0] border-dashed", textClass: "text-[#94A3B8]", shadow: "shadow-none" },
            after: { icon: <Trophy strokeWidth={2.5} className="w-[18px] h-[18px] text-[#3B82F6]" />, text: "Reconnu par l'IA", bg: "bg-white", border: "border-[#BFDBFE] border-solid", textClass: "text-[#1A1A1A]", shadow: "shadow-[0_8px_20px_rgba(59,130,246,0.08)]" }
        }
    ];

    useEffect(() => {
        const container = auraCoreRef.current?.closest('section');

        gsap.set(auraCoreRef.current, {
            xPercent: -50,
            yPercent: -50,
            left: "50%",
            top: "50%"
        });

        gsap.fromTo(auraCoreRef.current,
            { scale: 0.9, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out' }
        );

        // Lévitation noyau — en pause jusqu'à ce que visible
        const coreAnim = gsap.to(auraCoreRef.current, {
            y: "-=8",
            scale: 1.02,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            paused: true,
        });

        // Placement initial des badges
        badgeRefs.current.forEach((badge, i) => {
            const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 130 : 180;
            const angle = badgesData[i].angle;
            gsap.set(badge, {
                x: Math.cos(angle) * radius,
                y: Math.sin(angle) * radius,
                xPercent: -50,
                yPercent: -50,
                left: "50%",
                top: "50%",
                opacity: 0,
                scale: 0.5
            });
            gsap.to(badge, { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.5)", delay: 0.5 + (i * 0.1) });
        });

        // Lévitation badges — en pause jusqu'à ce que visible
        const badgeAnims = badgeRefs.current.map((badge, i) =>
            gsap.to(badge, {
                y: "-=10",
                duration: 2.5 + i * 0.3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: i * 0.2,
                paused: true,
            })
        );

        // Jouer/pauser selon visibilité
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    coreAnim.play();
                    badgeAnims.forEach(a => a.play());
                } else {
                    coreAnim.pause();
                    badgeAnims.forEach(a => a.pause());
                }
            },
            { threshold: 0.1 }
        );

        if (container) observer.observe(container);

        return () => {
            observer.disconnect();
            coreAnim.kill();
            badgeAnims.forEach(a => a.kill());
        };
    }, []);

    // Animation dynamique ("BUMP") lors de la révélation "Avant" -> "Après"
    useEffect(() => {
        if (isRevealed) {
            gsap.to(auraCoreRef.current, { scale: 1.08, duration: 0.3, yoyo: true, repeat: 1, ease: 'power2.out' });
            badgeRefs.current.forEach((badge, i) => {
                gsap.to(badge, { scale: 1.05, duration: 0.3, yoyo: true, repeat: 1, delay: i * 0.05, ease: 'power2.out' });
            });
        }
    }, [isRevealed]);

    return (
        <div className="w-full h-full min-h-[500px] flex items-center justify-center font-sans relative">

            {/* Conteneur Interactif Principal */}
            <div
                className="relative w-full max-w-[500px] aspect-square flex items-center justify-center cursor-pointer group perspective-1000"
                onMouseEnter={() => setIsRevealed(true)}
                onMouseLeave={() => setIsRevealed(false)}
                onClick={() => setIsRevealed(!isRevealed)}
            >

                {/* 1. LE NOYAU CENTRAL (État Dormant vs Actif) */}
                <div
                    ref={auraCoreRef}
                    className="absolute rounded-full z-10 transition-colors duration-1000 ease-out flex items-center justify-center"
                    style={{
                        width: "180px",
                        height: "180px",
                        background: isRevealed
                            ? "radial-gradient(circle at 35% 35%, #00BCFA 0%, #0051e0 50%, #022b7a 100%)" // RE7SET vibrant
                            : "radial-gradient(circle at 35% 35%, #F8FAFC 0%, #E2E8F0 50%, #CBD5E1 100%)", // Gris inactif
                        boxShadow: isRevealed
                            ? "0 0 80px 20px rgba(0, 188, 250, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.6)"
                            : "0 0 0 0 rgba(0,0,0,0), inset 0 0 20px rgba(255, 255, 255, 0.8)",
                    }}
                >
                    <Zap className={`w-12 h-12 transition-all duration-1000 ${isRevealed ? 'text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] opacity-100 scale-100' : 'text-[#94A3B8] opacity-50 scale-90'}`} />
                </div>

                {/* 2. LES BADGES ORBITAUX */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                    {badgesData.map((data, i) => {
                        return (
                            <div
                                key={i}
                                ref={el => badgeRefs.current[i] = el}
                                className="absolute"
                            >
                                {/* Wrapper to hold both states without layout shifting */}
                                <div className="relative flex items-center justify-center">

                                    {/* BEFORE STATE (Grey) */}
                                    <div
                                        className={`absolute px-5 py-2.5 rounded-full border-[1.5px] flex items-center gap-2.5 whitespace-nowrap text-[15px] font-bold transition-all duration-[600ms] ease-in-out ${data.before.bg} ${data.before.border} ${data.before.textClass} shadow-none ${isRevealed ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}
                                        style={{ transformOrigin: 'center center' }}
                                    >
                                        <div className="opacity-60">
                                            {data.before.icon}
                                        </div>
                                        <span className="tracking-tight">{data.before.text}</span>
                                    </div>

                                    {/* AFTER STATE (Colored & Glowing) */}
                                    <div
                                        className={`absolute px-5 py-2.5 rounded-full border-[1.5px] flex items-center gap-2.5 whitespace-nowrap text-[15px] font-bold transition-all duration-[800ms] ease-out ${data.after.bg} ${data.after.border} ${data.after.textClass} ${data.after.shadow} ${isRevealed ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.05] pointer-events-none'}`}
                                        style={{ transformOrigin: 'center center' }}
                                    >
                                        <div className="scale-100">
                                            {data.after.icon}
                                        </div>
                                        <span className="tracking-tight">{data.after.text}</span>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Appel à l'action / Button */}
                <div className={`absolute -bottom-16 left-1/2 -translate-x-1/2 transition-all duration-700 w-full flex flex-col items-center justify-center pointer-events-auto`}>

                    <a
                        href="#offres"
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent toggling the aura state when clicking the button
                            const target = document.getElementById('offres');
                            if (target) {
                                target.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className={`group relative overflow-hidden rounded-full font-semibold text-sm transition-all duration-500 flex items-center gap-2 
                            ${isRevealed
                                ? 'bg-[#0051e0] text-white px-8 py-3.5 shadow-[0_10px_25px_rgba(0,188,250,0.3)] hover:shadow-[0_15px_35px_rgba(0,81,224,0.4)] hover:-translate-y-1 scale-100 opacity-100'
                                : 'bg-white text-muted border border-black/10 px-6 py-3 shadow-none scale-95 opacity-80'}`}
                    >
                        <span className="relative z-10 transition-colors duration-300">
                            {isRevealed ? "Structurer mon image digitale" : "Analyser ma situation"}
                        </span>

                        {/* Interactive Arrow */}
                        <ArrowRight
                            size={16}
                            className={`relative z-10 transition-transform duration-300 ${isRevealed ? 'translate-x-0 group-hover:translate-x-1' : '-translate-x-1 opacity-50'}`}
                        />

                        {/* Button hover gradient effect */}
                        {isRevealed && (
                            <div className="absolute inset-0 bg-gradient-to-r from-[#00BCFA] to-[#0051e0] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        )}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function Deconstat() {
    return (
        <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-transparent overflow-hidden object-cover">
            {/* Ambient background removed to match the fresh neon corner unified style */}

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center relative z-20">

                {/* Left Column - Text */}
                <div className="lg:col-span-6 relative">
                    <span className="text-sm uppercase tracking-widest font-mono text-muted mb-4 block">
                        Le problème
                    </span>

                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-sans font-black text-foreground leading-[1.1] tracking-tight mb-10">
                        <span className="block mb-1">Votre expertise est peut-être excellente.</span>
                        <span className="block text-[#0D7DF2] pb-2">Votre image digitale raconte une autre histoire.</span>
                    </h2>

                    <p className="text-base md:text-lg font-sans text-muted mb-10 leading-relaxed font-medium">
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
                                    <ArrowRight className="text-[#0051e0]" size={12} strokeWidth={3} />
                                </div>
                                <span className="text-[#1a1c1e] font-sans font-medium leading-snug text-sm md:text-base">{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Column - AuraVisual Component */}
                <div className="lg:col-span-6 relative w-full flex items-center justify-center">
                    <AuraVisual />
                </div>

            </div>
        </section>
    );
}
