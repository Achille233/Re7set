import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Check, ArrowRight, Target, Search, Brain, ShieldCheck } from 'lucide-react';
import CommentCaMarcheSEO from '../components/sections/CommentCaMarcheSEO';
import DataFlow from '../components/sections/DataFlow';
import { usePageMeta } from '../hooks/usePageMeta';

export default function AuditStrategique() {
    usePageMeta(
        'Audits Stratégiques | RE7SET — Positionnement, SEO & IA pour Cabinets',
        'Audits indépendants et actionnables pour professions libérales : positionnement, SEO local, GEO et potentiel IA. Livrables concrets et plan d\'action sur 90 jours.'
    );
    useEffect(() => {
        gsap.fromTo('.audit-anim',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
        );

        // Gentle float animation for badges
        gsap.to('.float-badge-1', { y: -10, duration: 2, repeat: -1, yoyo: true, ease: 'sine.inOut' });
        gsap.to('.float-badge-2', { y: 10, duration: 2.5, repeat: -1, yoyo: true, ease: 'sine.inOut' });
        gsap.to('.float-badge-3', { x: -10, duration: 2.2, repeat: -1, yoyo: true, ease: 'sine.inOut' });

        // Graph dot animation
        gsap.to('.graph-dot', {
            boxShadow: '0 0 40px 10px rgba(255, 255, 255, 0.4)', // White glow
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });

    }, []);

    const audits = [
        {
            icon: <Target className="w-6 h-6 text-primary" />,
            title: "Audit de Positionnement",
            desc: "Nous analysons en profondeur votre discours, votre image perçue face à vos confrères et l'alignement avec votre clientèle cible.",
            features: [
                "Analyse de la proposition de valeur",
                "Étude de la concurrence locale",
                "Cohérence de l'image de marque",
                "Recommandations d'axes différenciants"
            ],
            price: "600 €"
        },
        {
            icon: <Search className="w-6 h-6 text-cyan-500" />,
            title: "Audit SEO & Topographique",
            desc: "Une cartographie complète de votre présence sur les moteurs de recherche pour comprendre pourquoi vos prospects ne vous trouvent pas.",
            features: [
                "Audit technique du site",
                "Analyse sémantique et mots-clés",
                "État des lieux Google Business Profile",
                "Roadmap d'optimisation"
            ],
            price: "500 €"
        },
        {
            icon: <Brain className="w-6 h-6 text-orange-500" />,
            title: "Diagnostic Potentiel IA",
            desc: "Évaluation de vos processus internes pour identifier les gisements de productivité exploitables grâce à l'Intelligence Artificielle.",
            features: [
                "Analyse des tâches chronophages",
                "Cartographie des outils actuels",
                "Proposition d'outils IA adaptés",
                "Estimation du ROI"
            ],
            price: "500 €"
        }
    ];

    return (
        <main className="relative bg-[#0A0A0A] text-white min-h-screen overflow-x-clip">

            {/* Cinematic Background Glow - Cyan tinted for SEO theme */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-[#0EA5E9]/10 blur-[120px] rounded-full pointer-events-none"></div>

            {/* HERO SECTION */}
            <section className="relative z-10 pt-40 pb-32 px-6 md:px-12 flex flex-col items-center text-center">

                {/* Main Title Area */}
                <div className="relative w-full max-w-5xl">

                    {/* Floating Badges */}
                    <div className="hidden lg:flex float-badge-1 absolute -left-16 top-0 xl:-left-32 xl:-top-10 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 rounded-lg items-center text-xs text-white/80 shadow-2xl font-mono tracking-widest uppercase">
                        Audit Technique
                    </div>
                    <div className="hidden lg:flex float-badge-2 absolute -right-10 top-32 xl:-right-24 xl:top-40 bg-[#111] border border-white/10 px-4 py-2 rounded-lg items-center text-xs text-white/80 shadow-2xl font-mono tracking-widest uppercase z-10">
                        Profil Google Local
                    </div>
                    <div className="hidden lg:flex float-badge-3 absolute left-0 bottom-40 xl:-left-20 xl:bottom-28 bg-[#111] border border-white/10 px-4 py-2 rounded-lg items-center text-xs text-white/80 shadow-2xl font-mono tracking-widest uppercase">
                        Optimisation Mots-Clés
                    </div>

                    <h1 className="audit-anim text-4xl md:text-6xl lg:text-7xl font-sans font-medium leading-[1.1] tracking-tight mb-8">
                        Audits & <br className="hidden md:block" /> Optimisations SEO
                    </h1>
                </div>

                <p className="audit-anim text-lg md:text-xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
                    Positionnement, audit technique, sémantique & géographique pour dominer les recherches locales web et attirer les meilleurs dossiers.
                </p>

                <a href="#contenu" className="audit-anim inline-block bg-[#2563EB] hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-medium text-[15px] transition-colors duration-300 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] z-20 mb-32">
                    Demander un audit
                </a>

                {/* Animated Graph Visual - Organic Growth Variation */}
                <div className="audit-anim w-full max-w-6xl mx-auto mt-6 relative h-[350px]">

                    {/* Faint Background Wave */}
                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 400">
                        {/* Background line (darker, lower amplitude) */}
                        <path d="M0 250 C 100 200, 150 350, 250 300 C 350 250, 400 150, 500 200 C 600 250, 650 350, 750 300 C 850 250, 900 150, 1000 200" fill="none" stroke="#333" strokeWidth="2" className="opacity-50" />

                        {/* Foreground line (brighter, varying amplitude) */}
                        <path d="M0 200 C 50 250, 80 350, 120 300 C 160 250, 180 150, 220 200 C 260 250, 280 320, 320 280 C 360 240, 380 200, 420 160 C 460 120, 500 200, 550 180 C 600 160, 620 110, 660 120 C 700 130, 720 180, 780 140 C 840 100, 880 50, 920 80 C 960 110, 980 180, 1000 150" fill="none" stroke="#6B7280" strokeWidth="3" className="opacity-60" />

                        {/* The glowing active tip */}
                        <path d="M420 160 C 460 120, 500 200, 550 180 C 600 160, 620 110, 660 120 C 700 130, 720 180, 780 140" fill="none" stroke="#D1D5DB" strokeWidth="4" className="drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                    </svg>

                    {/* Activity Dot and Targeting Line */}
                    <div className="absolute top-[80px] left-[74%] transform -translate-x-1/2 flex flex-col items-center z-30">
                        {/* Outer Glow Ring */}
                        <div className="absolute -inset-4 bg-white/5 rounded-full blur-md"></div>
                        <div className="absolute -inset-2 bg-white/10 rounded-full"></div>

                        <div className="graph-dot w-4 h-4 bg-[#D1D5DB] rounded-full border-[3px] border-[#1A1A1A] relative z-20 shadow-[0_0_15px_3px_rgba(255,255,255,0.2)]">
                            <div className="absolute inset-0 rounded-full border border-white/30 scale-[2] animate-ping opacity-50"></div>
                        </div>
                        {/* Cursor Graphic */}
                        <div className="absolute top-2 -left-3 text-white transform -rotate-12 z-40 drop-shadow-md">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 3l7.07 16.97 2.51-7.39 7.67-2.12L3 3z" fill="#1A1A1A"></path>
                            </svg>
                        </div>
                    </div>

                    {/* SEO Metric Badge */}
                    <div className="absolute top-[130px] left-[77%] transform -translate-x-1/2 bg-[#1A1A1A]/70 backdrop-blur-md border border-white/5 px-4 py-2 rounded-lg z-20 shadow-xl">
                        <span className="text-[#D1D5DB] font-mono text-base tracking-widest whitespace-nowrap">+120%</span>
                    </div>

                </div>

            </section>

            {/* Fading bottom edge of the hero */}
            <div className="w-full h-40 bg-gradient-to-b from-transparent to-[#0A0A0A] relative z-20 -mt-20"></div>

            <CommentCaMarcheSEO />

            {/* INTEGRATED DATAFLOW SECTION */}
            <div className="relative z-30 bg-[#0A0A0A]">
                <DataFlow theme="dark" />
            </div>

            {/* CARDS SECTION (Adapted to Dark Mode) */}
            <section id="contenu" className="relative z-30 bg-[#0A0A0A] py-24 px-6 md:px-12 border-t border-white/5">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-mono tracking-widest uppercase mb-8">
                            <ShieldCheck size={16} className="text-primary" /> Indépendant & Objectif
                        </div>
                        <h2 className="text-3xl md:text-5xl font-sans font-medium text-white mb-6 tracking-tight">
                            Des audits clairs, sans jargon technique.
                        </h2>
                        <p className="text-white/50 text-lg max-w-2xl mx-auto">
                            Chaque audit vous livre un état des lieux précis et des recommandations immédiatement actionnables.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 relative z-10">
                        {audits.map((audit, index) => (
                            <div key={index} className="bg-[#111] rounded-2xl p-8 border border-white/5 hover:border-white/20 hover:bg-[#161616] transition-all duration-300 flex flex-col h-full group shadow-2xl shadow-black/50">

                                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                                    {audit.icon}
                                </div>

                                <h3 className="text-2xl font-bold font-sans text-white mb-3 group-hover:text-primary transition-colors">{audit.title}</h3>
                                <p className="text-sm text-white/50 mb-8 leading-relaxed flex-grow">{audit.desc}</p>

                                <div className="bg-black/40 rounded-xl p-5 mb-8 border border-white/5">
                                    <ul className="space-y-4">
                                        {audit.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5 opacity-80" />
                                                <span className="text-xs font-medium text-white/70">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                    <div>
                                        <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase block mb-1">Prix indicatif</span>
                                        <span className="text-2xl font-serif font-bold text-white">{audit.price}</span>
                                    </div>
                                    <a href="https://calendly.com/sibylle-/30min?month=2026-02" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 text-white rounded-lg hover:bg-primary transition-colors group-hover:-translate-y-1 duration-300 border border-white/10 hover:border-transparent">
                                        <ArrowRight className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="relative z-30 bg-[#0A0A0A] pb-32 px-6 md:px-12">
                <div className="bg-gradient-to-br from-[#111] to-[#0A0A0A] border border-white/5 text-white rounded-3xl p-10 md:p-16 text-center max-w-5xl mx-auto overflow-hidden relative shadow-2xl">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-sans font-medium mb-6">Besoin d'une vision complète ?</h2>
                        <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                            Le pack <strong>Diagnostic Stratégique Global</strong> regroupe ces 3 expertises fondamentales pour vous offrir une roadmap de croissance complète sur 90 jours.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <a href="/offres/diagnostic-strategique" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-blue-500 text-white rounded-xl font-medium transition-colors shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)]">
                                Voir le Diagnostic Global
                            </a>
                            <a href="https://calendly.com/sibylle-/30min?month=2026-02" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium transition-colors">
                                Prendre rendez-vous
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
