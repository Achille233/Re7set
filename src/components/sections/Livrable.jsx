import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, CheckCircle2, FileText } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Livrable() {
    const documentRef = useRef(null);
    const badgeLeftRef = useRef(null);
    const badgeRightRef = useRef(null);
    const sectionRef = useRef(null);
    const glowRef = useRef(null);

    useEffect(() => {
        if (!documentRef.current || !sectionRef.current) return;

        // 1. Initial Dramatic Entrance - More pronounced 3D angles
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: documentRef.current,
                start: 'top 85%',
            }
        });

        tl.fromTo(documentRef.current,
            { y: 200, z: -400, opacity: 0, rotateX: 50, rotateY: -35, rotateZ: -15 },
            {
                y: 0,
                z: 0,
                opacity: 1,
                rotateX: 18, // Steeper resting angle
                rotateY: -20, // Tilted left to show spine clearly
                rotateZ: -4,
                duration: 2.2,
                ease: 'power3.out'
            }
        )
            .fromTo([badgeLeftRef.current, badgeRightRef.current],
                { scale: 0, opacity: 0, y: 50 },
                {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: 'elastic.out(1, 0.75)',
                },
                "-=1.5"
            );

        // 2. Parallax & 3D rotation tied to scroll
        // Document rotates from left (-20) to perfectly straight (0), then to right (+25).
        const scrollTl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.5
            }
        });

        // Initialize glow
        gsap.set(glowRef.current, { opacity: 0, scale: 0.9 });

        // Phase 1: Ascending into view, flattening out, glow building up
        scrollTl.to(documentRef.current, {
            y: -60,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            ease: 'none'
        }, 'phase1')
            .to(glowRef.current, {
                y: -60, // S'assure que l'ombre suit la montée du document !
                opacity: 1, // Full opacity for more visibility
                scale: 1.15, // Plus grand
                ease: 'none' // Matches document easing perfectly
            }, 'phase1')

            // Phase 2: Ascending out of view, tilting the other way, glow fading out
            .to(documentRef.current, {
                y: -120,
                rotateX: -10,
                rotateY: 25,
                rotateZ: 8,
                ease: 'none'
            }, 'phase2')
            .to(glowRef.current, {
                y: -120, // Continue de suivre le document
                opacity: 0,
                scale: 0.9,
                ease: 'none'
            }, 'phase2');

        // 3. Continuous subtle floating for badges
        gsap.to(badgeLeftRef.current, {
            y: "-=18",
            rotateZ: 2,
            duration: 3.5,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1
        });

        gsap.to(badgeRightRef.current, {
            y: "+=22",
            rotateZ: -2,
            duration: 4,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: 0.5
        });

    }, []);

    const scrollToAudits = (e) => {
        e.preventDefault();
        const auditsSection = document.getElementById('audits');
        if (auditsSection) {
            auditsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section ref={sectionRef} className="relative w-full py-20 lg:py-24 px-6 md:px-12 lg:px-24 bg-white z-20 overflow-visible perspective-[3000px]">
            {/* Soft background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.03] blur-[100px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

                {/* Header Text */}
                <div className="mb-24">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold text-foreground mb-4 tracking-tight leading-[1.1]">
                        Un document de pilotage
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
                            clair et actionnable
                        </span>
                    </h2>
                    <p className="mt-6 text-base md:text-lg font-sans text-muted max-w-2xl mx-auto leading-relaxed">
                        Guidez vos décisions de communication et d'investissement digital avec un livrable structuré, sans jargon technique.
                    </p>
                </div>

                {/* Central Document Graphic Container with Perspective */}
                <div
                    className="relative w-full max-w-[360px] mx-auto mt-4 group mb-10 cursor-pointer"
                    onClick={scrollToAudits}
                >
                    {/* Background shadow projection - Offset for 3D tilt */}
                    <div className="absolute -bottom-16 left-[55%] -translate-x-1/2 w-[90%] h-14 bg-black/15 blur-[25px] rounded-[100%] pointer-events-none" />

                    {/* NEW: Dynamic Blue Glow appearing behind the document during scroll */}
                    {/* Non-transform centering to avoid GSAP conflicts */}
                    <div
                        ref={glowRef}
                        className="absolute top-[5%] left-[10%] w-[80%] h-[90%] bg-primary/95 blur-[35px] rounded-3xl opacity-0 pointer-events-none z-0 will-change-transform"
                    />

                    {/* The Document - Wrapped in anchor */}
                    <a href="#audits" onClick={scrollToAudits} className="block relative z-10 w-full hover:scale-[1.02] transition-transform duration-500">
                        <div
                            ref={documentRef}
                            className="bg-white rounded-r-xl rounded-l-md aspect-[1/1.414] p-8 md:p-10 flex flex-col justify-between overflow-hidden will-change-transform transform-style-3d mx-auto"
                            style={{
                                // Extremely realistic and deep book shadows
                                boxShadow: `
                                    inset 15px 0 30px -10px rgba(0,0,0,0.06), /* Spine deep inner shadow */
                                    inset -2px 0 5px rgba(0,0,0,0.02),
                                    -1px 0 0 #fff,
                                    -2px 0 0 #f4f4f5,
                                    -3px 0 0 #fff,
                                    -4px 0 0 #e4e4e7,
                                    -5px 0 0 #fff,
                                    -6px 0 0 #d4d4d8,
                                    -7px 0 0 #f4f4f5,
                                    -8px 0 0 #c4c4c8, /* Edge of paper stack */
                                    -12px 10px 20px rgba(0,0,0,0.08), /* Drop shadow of the spine */
                                    35px 50px 80px -20px rgba(0,0,0,0.25), /* Main dramatic drop shadow */
                                    0 20px 40px -10px rgba(37,99,235,0.08) /* Primary tint shadow */
                                `,
                                // Visually distinct spine on the left edge - using brand dark color or primary
                                borderLeft: '5px solid #1A1A1A',
                                borderRight: '1px solid rgba(0,0,0,0.05)',
                                borderTop: '1px solid rgba(0,0,0,0.03)',
                                borderBottom: '1px solid rgba(0,0,0,0.06)',
                            }}
                        >
                            {/* Realistic Paper Texture Overlay */}
                            <div className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-multiply" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                            }} />

                            {/* Faint Grid */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                                backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                                backgroundSize: '24px 24px'
                            }} />

                            {/* Spine Accent Line */}
                            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-r from-black/40 to-transparent pointer-events-none"></div>

                            {/* Top Bar - Ultra Minimal */}
                            <div className="flex justify-between items-start relative z-10 w-full mb-auto pl-2">
                                <span className="font-serif text-2xl font-bold tracking-tighter text-[#1A1A1A]">R7</span>
                                <span className="text-[9px] font-mono text-muted/60 uppercase tracking-[0.2em] pt-1.5 font-semibold">Strictement Confidentiel</span>
                            </div>

                            {/* Main Title Area - Pure typography, huge whitespace */}
                            <div className="my-auto relative z-10 text-left pl-2">
                                <h3 className="text-3xl md:text-4xl lg:text-4xl font-sans font-light text-[#1A1A1A] leading-[1.05] tracking-tight mb-6">
                                    Audit<br />
                                    Stratégique<span className="text-primary/80">.</span>
                                </h3>

                                <div className="w-6 h-[1px] bg-black/10 mb-6" />

                                <p className="text-[11px] font-sans text-muted/70 max-w-[200px] leading-relaxed font-medium">
                                    Positionnement structuré et stratégie digitale d'acquisition.
                                </p>
                            </div>

                            {/* Bottom Bar - Minimal */}
                            <div className="relative z-10 flex justify-between items-end pt-5 mt-auto pl-2">
                                <span className="text-[9px] font-mono text-muted/50 tracking-widest font-semibold uppercase">Rev / 2026</span>
                                <div className="flex gap-1.5 pb-1">
                                    <div className="w-1.5 h-1.5 bg-primary/20 rounded-full" />
                                    <div className="w-1.5 h-1.5 bg-[#1A1A1A] rounded-full" />
                                </div>
                            </div>

                            {/* Page turning effect gradient */}
                            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black/[0.03] via-black/[0.01] to-transparent pointer-events-none"></div>
                            <div className="absolute inset-y-0 right-0 w-[1px] bg-white/40 pointer-events-none"></div>
                        </div>
                    </a>

                    {/* Floating Badge Left */}
                    <div
                        ref={badgeLeftRef}
                        className="absolute -left-10 md:-left-20 bottom-16 z-30 will-change-transform pointer-events-none"
                    >
                        {/* Blue glow effect behind the badge */}
                        <div className="absolute inset-0 bg-primary/40 blur-[20px] rounded-2xl -z-10 translate-y-2" />

                        <div className="bg-white/95 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,1)] px-5 py-3.5 rounded-2xl flex items-center gap-3.5 relative z-10">
                            <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                                <CheckCircle2 size={20} strokeWidth={3} />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-[9px] uppercase font-mono text-muted/80 tracking-widest font-semibold mb-0.5">Format</span>
                                <span className="text-sm font-bold text-foreground leading-none">PDF HD</span>
                            </div>
                        </div>
                    </div>

                    {/* Floating Badge Right */}
                    <div
                        ref={badgeRightRef}
                        className="absolute -right-8 md:-right-16 top-1/3 -translate-y-1/2 z-30 will-change-transform pointer-events-none"
                    >
                        {/* Blue glow effect behind the badge */}
                        <div className="absolute inset-0 bg-primary/40 blur-[20px] rounded-2xl -z-10 translate-y-2" />

                        <div className="bg-white/95 backdrop-blur-md shadow-[0_10px_30px_rgba(37,99,235,0.08),inset_0_1px_0_rgba(255,255,255,1)] px-5 py-3.5 rounded-2xl flex items-center gap-3.5 relative z-10">
                            <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] flex items-center justify-center text-white shadow-inner">
                                <FileText size={20} strokeWidth={2.5} />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-[9px] uppercase font-mono text-muted/80 tracking-widest font-semibold mb-0.5">Volume</span>
                                <span className="text-sm font-bold text-foreground leading-none">5 à 10 Pages</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA to match mockup */}
                <div className="w-full flex justify-end mt-24 lg:absolute lg:bottom-16 lg:right-16 lg:mt-0">
                    <a href="#audits" onClick={scrollToAudits} className="group relative px-8 py-4 bg-[#1A1A1A] text-white flex items-center gap-3 rounded-2xl hover:bg-black transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1">
                        <Calendar size={18} />
                        <span className="font-semibold text-sm">Réserver un audit</span>
                        <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors pointer-events-none" />
                    </a>
                </div>

            </div>
        </section>
    );
}
