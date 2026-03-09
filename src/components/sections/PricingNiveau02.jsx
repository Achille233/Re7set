import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Check } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';

gsap.registerPlugin(ScrollTrigger);

export default function PricingNiveau02() {
    const cardRef = useRef(null);

    useEffect(() => {
        if (!cardRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(cardRef.current,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'elastic.out(1, 0.75)',
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: 'top 85%',
                    }
                }
            );
        }, cardRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-transparent">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end gap-6 border-b border-foreground/10 pb-8 mb-16">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white text-2xl font-serif font-bold">
                            02
                        </div>
                        <h2 className="text-2xl md:text-4xl font-sans font-medium tracking-tight text-foreground">Diagnostic <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500 pr-4 pb-2">Global</span></h2>
                    </div>
                    <p className="text-sm font-sans text-muted md:ml-auto">
                        L'offre structurante · vision complète de votre cabinet
                    </p>
                </div>

                {/* Large Card */}
                <div
                    ref={cardRef}
                    className="relative rounded-[2rem] p-[1.5px] group shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.15)] transition-shadow duration-700 mx-auto"
                >
                    {/* Animated Edge Glow Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-black/5 to-cyan-400/30 rounded-[2rem] transition-opacity duration-700 group-hover:from-primary/50 group-hover:to-cyan-400/50"></div>

                    {/* Inner Container */}
                    <div className="relative bg-white rounded-[calc(2rem-1.5px)] p-8 md:p-14 z-10 h-full w-full">

                        {/* Badge */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                            <div className="bg-gradient-to-r from-primary to-cyan-500 text-white px-6 py-2.5 rounded-full text-[10px] md:text-xs font-mono tracking-[0.2em] font-bold uppercase shadow-[0_10px_20px_-5px_rgba(37,99,235,0.4)] flex items-center gap-2.5 border border-white/20 backdrop-blur-md">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                </span>
                                RECOMMANDÉ
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-7 gap-12 lg:gap-16">

                            {/* Left Col */}
                            <div className="lg:col-span-5 flex flex-col justify-center">
                                <span className="text-[10px] sm:text-xs font-mono text-primary uppercase tracking-widest mb-4 block">
                                    L'offre structurante
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight text-foreground mb-2">RE7SET — Diagnostic Stratégique Complet</h3>
                                <p className="text-sm sm:text-base text-muted mb-10 max-w-2xl leading-relaxed">Passer d'un expert isolé à une véritable stratégie numérique. Nous analysons l'ensemble de votre présence pour révéler vos leviers de croissance cachés.</p>

                                {/* Features section */}
                                <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-6 mb-10 shadow-inner">
                                    <span className="text-[11px] font-mono text-green-600 font-bold uppercase tracking-widest mb-6 flex items-center gap-2 shrink-0">
                                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center"><Check size={12} strokeWidth={3} /></div>
                                        Inclus les 3 audits fondamentaux
                                    </span>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-4 gap-x-6">
                                        <li className="flex items-center gap-2.5 text-sm font-medium text-foreground/80"><Check className="text-green-500 shrink-0" size={16} strokeWidth={2.5} /> Positionnement</li>
                                        <li className="flex items-center gap-2.5 text-sm font-medium text-foreground/80"><Check className="text-green-500 shrink-0" size={16} strokeWidth={2.5} /> SEO & Topographie</li>
                                        <li className="flex items-center gap-2.5 text-sm font-medium text-foreground/80"><Check className="text-green-500 shrink-0" size={16} strokeWidth={2.5} /> Potentiel IA</li>
                                    </ul>
                                </div>

                                <ul className="space-y-6 mb-12 flex-grow">
                                    <li className="flex items-start gap-4">
                                        <div className="mt-0.5 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <Check className="text-primary" size={14} strokeWidth={3} />
                                        </div>
                                        <span className="text-base text-foreground font-medium">Une vision globale et cohérente de votre écosystème</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="mt-0.5 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <Check className="text-primary" size={14} strokeWidth={3} />
                                        </div>
                                        <div>
                                            <span className="text-base text-foreground font-medium block mb-1.5">Plan de développement priorisé sur 90 jours</span>
                                            <span className="text-sm text-muted">Des actions concrètes et mesurables pour un ROI rapide.</span>
                                        </div>
                                    </li>
                                </ul>

                                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/5 to-cyan-500/5 border border-primary/20 px-5 py-3.5 rounded-xl text-sm font-medium text-primary shadow-sm self-start">
                                    📄 Remise d'un livrable complet & actionnable
                                </div>
                            </div>

                            {/* Right Col: Pricing & CTA */}
                            <div className="lg:col-span-2 relative bg-slate-50 border border-slate-200/60 rounded-[1.5rem] p-8 flex flex-col justify-center text-center items-center overflow-hidden shadow-inner group-hover:bg-slate-50/80 transition-colors">

                                {/* Inner glow accents */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none"></div>

                                <span className="relative z-10 text-[10px] font-mono text-muted tracking-widest uppercase mb-6 block font-medium">Tarif unique</span>

                                <div className="relative z-10 flex items-baseline justify-center gap-2 mb-8">
                                    <span className="text-5xl md:text-6xl font-serif font-bold text-foreground tracking-tight">900<span className="text-4xl text-foreground/80">€</span></span>
                                    <span className="text-sm font-bold text-muted uppercase tracking-widest">TTC</span>
                                </div>

                                <a
                                    href={SITE_CONFIG.calendlyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full relative z-10 group/btn px-6 py-4 bg-[#1A1A1A] text-white flex items-center justify-center gap-2 rounded-xl transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.2)] hover:-translate-y-1 mb-6 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                                    <span className="relative z-10 font-bold text-sm tracking-wide">RECEVOIR LE DIAGNOSTIC</span>
                                    <ArrowRight size={18} className="relative z-10 transform group-hover/btn:translate-x-1 transition-transform" />
                                </a>

                                <div className="relative z-10 text-[11px] font-mono text-muted/80 mb-6 flex items-center gap-1.5 justify-center uppercase tracking-wider">
                                    🔒 Paiement sécurisé par Stripe
                                </div>

                                <a href="/offres/diagnostic-strategique" className="relative z-10 block text-center text-sm font-semibold text-primary hover:text-cyan-600 transition-colors flex items-center gap-1">
                                    Détails de l'offre <ArrowRight size={14} />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
