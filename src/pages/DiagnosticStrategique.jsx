import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowRight, FileText, CheckCircle2, ChevronDown, Check, Crosshair, Users, BarChart, Puzzle, Target, Sparkles } from 'lucide-react';
import { Timeline } from '../components/ui/timeline';
import EngagementSection from '../components/sections/EngagementSection';
import { usePageMeta } from '../hooks/usePageMeta';
import { SITE_CONFIG } from '../config/site';

export default function DiagnosticStrategique() {
    usePageMeta(
        'Diagnostic Stratégique Global | RE7SET — Vision Complète de votre Cabinet',
        'Le diagnostic structurant RE7SET : positionnement, SEO, potentiel IA réunis en un seul livrable complet. Plan de développement priorisé sur 90 jours. 900€ TTC.'
    );
    useEffect(() => {
        gsap.fromTo('.diag-anim',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
        );

        // Gentle float animation for badges
        gsap.to('.float-badge-1', {
            y: -10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
        gsap.to('.float-badge-2', {
            y: 10,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: 0.5
        });
        gsap.to('.float-badge-3', {
            y: -8,
            duration: 2.2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: 1
        });
    }, []);

    const features = [
        {
            icon: <Crosshair className="w-5 h-5 text-white/70" />,
            title: "Stratégie avant tout",
            desc: "Chaque recommandation est justifiée par son impact direct sur vos objectifs de croissance."
        },
        {
            icon: <Users className="w-5 h-5 text-white/70" />,
            title: "Génération de clientèle",
            desc: "Expérience utilisateur et structure optimisées pour générer des contacts qualifiés."
        },
        {
            icon: <BarChart className="w-5 h-5 text-white/70" />,
            title: "Performance technique",
            desc: "Audit SEO complet, chargement ultra-rapide et identification des mots-clés stratégiques."
        },
        {
            icon: <Puzzle className="w-5 h-5 text-white/70" />,
            title: "Intégration sur-mesure",
            desc: "Alignement parfait avec vos processus internes et vos outils existants (CRM, automatisation)."
        },
        {
            icon: <Target className="w-5 h-5 text-white/70" />,
            title: "Tracking des résultats",
            desc: "Mise en place d'indicateurs clés pour mesurer le retour sur investissement des actions."
        },
        {
            icon: <Sparkles className="w-5 h-5 text-white/70" />,
            title: "Expérience sur-mesure",
            desc: "Une identité digitale premium qui reflète votre expertise et engage votre cible BtoB."
        }
    ];

    const timelineData = [
        {
            title: "Semaine 1",
            content: (
                <div>
                    <h4 className="text-xl text-white font-serif mb-4">Immersion & Audit Existant</h4>
                    <p className="text-white/60 text-sm md:text-base font-sans mb-8 leading-relaxed">
                        Analyse approfondie de votre environnement numérique, positionnement concurrentiel et audit technique SEO. Nous identifions vos forces et les opportunités inexploitées.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop"
                            alt="Analyse data"
                            className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-lg border border-white/5"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop"
                            alt="Recherche SEO"
                            className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-lg border border-white/5"
                        />
                    </div>
                </div>
            )
        },
        {
            title: "Semaine 2",
            content: (
                <div>
                    <h4 className="text-xl text-white font-serif mb-4">Potentiel IA & Modélisation</h4>
                    <p className="text-white/60 text-sm md:text-base font-sans mb-8 leading-relaxed">
                        Évaluation des processus internes de votre cabinet. Identification des tâches répétitives et définition d'outils d'intelligence artificielle sur-mesure pour gagner en productivité.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=500&auto=format&fit=crop"
                            alt="Intelligence Artificielle"
                            className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-lg border border-white/5"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=500&auto=format&fit=crop"
                            alt="Stratégie et Planning"
                            className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-lg border border-white/5"
                        />
                    </div>
                </div>
            )
        },
        {
            title: "Semaine 3",
            content: (
                <div>
                    <h4 className="text-xl text-white font-serif mb-4">Restitution & Roadmap</h4>
                    <p className="text-white/60 text-sm md:text-base font-sans mb-8 leading-relaxed">
                        Présentation du livrable final de plus de 30 pages. Nous vous fournissons un plan d'action priorisé, avec une estimation budgétaire précise pour chaque étape du déploiement.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500&auto=format&fit=crop"
                            alt="Réunion de restitution"
                            className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-lg border border-white/5"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=500&auto=format&fit=crop"
                            alt="Livrable final"
                            className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-lg border border-white/5"
                        />
                    </div>
                </div>
            )
        }
    ];

    return (
        <main className="relative bg-[#0A0A0A] text-white min-h-screen overflow-x-clip">

            {/* Cinematic Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>

            {/* HERO SECTION */}
            <section className="relative z-10 pt-40 pb-20 px-6 md:px-12 flex flex-col items-center text-center">





                {/* Main Title Area */}
                <div className="relative w-full max-w-5xl">
                    {/* Floating Badges inspired by the reference image */}
                    <div className="hidden lg:flex float-badge-1 absolute -left-20 top-0 xl:-left-40 xl:-top-8 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 rounded-lg items-center gap-2 text-xs text-white/80 shadow-2xl">
                        <FileText size={14} className="text-primary" /> Roadmap 90 Jours
                    </div>
                    <div className="hidden lg:flex float-badge-2 absolute -right-20 top-24 xl:-right-36 xl:top-36 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 rounded-lg items-center gap-2 text-xs text-white/80 shadow-2xl">
                        <CheckCircle2 size={14} className="text-cyan-400" /> Audit SEO Inclus
                    </div>
                    <div className="hidden lg:flex float-badge-3 absolute -left-16 bottom-10 xl:-left-32 xl:-bottom-8 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 rounded-lg items-center gap-2 text-xs text-white/80 shadow-2xl">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span> Potentiel IA évalué
                    </div>

                    <h1 className="diag-anim text-3xl md:text-5xl lg:text-6xl font-sans font-medium leading-[1.1] tracking-tight mb-8">
                        Le diagnostic complet de votre cabinet, de la stratégie à <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">la mise en œuvre</span>
                    </h1>
                </div>

                <p className="diag-anim text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Stratégie de positionnement, analyse SEO, potentiel IA et modèle économique. Un plan d'action priorisé pour les cabinets d'avocats et d'expertise comptable.
                </p>

                <a href="#contenu" className="diag-anim inline-block bg-[#2563EB] hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-medium text-[15px] transition-colors duration-300 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] z-20 mb-24">
                    Découvrir le programme
                </a>

                {/* Large Tilted Mockup / Visual Area matching exactly the angle in the ref */}
                <div className="diag-anim w-full aspect-[16/10] max-w-5xl mx-auto perspective-[2000px] mt-10">
                    <div className="w-full h-full bg-[#1A1A1A] border border-white/10 rounded-2xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] transform rotate-x-[35deg] rotate-y-[-15deg] rotate-z-[10deg] scale-110 relative group">

                        {/* Mockup Header Toolbar */}
                        <div className="h-10 border-b border-white/5 bg-[#111] flex items-center px-4 gap-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                            </div>
                            <div className="h-4 w-48 bg-white/5 rounded-sm mx-auto"></div>
                        </div>

                        {/* Mockup Body splitting */}
                        <div className="flex h-[calc(100%-2.5rem)]">
                            {/* Left panel placeholder simulating an interface */}
                            <div className="w-64 border-r border-white/5 bg-[#161616] p-6 flex flex-col gap-4">
                                <div className="h-6 w-3/4 bg-white/10 rounded"></div>
                                <div className="h-4 w-full bg-white/5 rounded mb-4"></div>

                                <div className="space-y-3">
                                    <div className="h-4 w-full bg-white/5 rounded flex items-center px-2 gap-2">
                                        <div className="w-3 h-3 border border-white/20"></div>
                                        <div className="h-2 w-1/2 bg-white/10 rounded"></div>
                                    </div>
                                    <div className="h-4 w-full bg-white/5 rounded flex items-center px-2 gap-2 pl-6">
                                        <div className="w-3 h-3 border border-white/20"></div>
                                        <div className="h-2 w-2/3 bg-white/10 rounded"></div>
                                    </div>
                                    <div className="h-4 w-full bg-white/5 rounded flex items-center px-2 gap-2 pl-6">
                                        <div className="w-3 h-3 border border-white/20"></div>
                                        <div className="h-2 w-1/3 bg-white/10 rounded"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Main canvas area simulating the document/report being built */}
                            <div className="flex-1 bg-[#0A0A0A] p-16 overflow-hidden relative flex justify-center">
                                {/* Simulated Document or Webpage inside the mockup */}
                                <div className="w-full max-w-lg bg-[#F9F9FB] rounded-t-xl shadow-2xl p-10 transform translate-y-20 rotate-[-2deg]">
                                    <div className="flex gap-4 border-b border-black/10 pb-6 mb-8">
                                        <div className="text-[10px] font-bold tracking-widest text-[#111]/40">POSITIONNEMENT</div>
                                        <div className="text-[10px] font-bold tracking-widest text-[#111]/40">STRATÉGIE</div>
                                        <div className="text-[10px] font-bold tracking-widest text-[#111]/40">ACTIONS</div>
                                    </div>
                                    <h2 className="text-5xl font-serif text-[#111] leading-tight mb-6">Un plan d'action clair</h2>
                                    <p className="text-[#111]/60 text-lg leading-relaxed">
                                        Roadmap priorisée. Déploiement étape par étape.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Subtle glare effect on the screen */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none transform -translate-x-1/2 rotate-45 group-hover:translate-x-full transition-transform duration-1000"></div>

                    </div>
                </div>
            </section>

            {/* Fading bottom edge of the hero to transition to content */}
            <div className="w-full h-40 bg-gradient-to-b from-transparent to-[#0A0A0A] relative z-20 -mt-32"></div>

            {/* FEATURES GRID SECTION (Inspired by WE-R ref) */}
            <section className="relative z-30 bg-[#0A0A0A] py-24 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">

                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="text-primary font-mono text-sm tracking-widest uppercase mb-6 block">DIAGNOSTIC STRATÉGIQUE RE7SET</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-white mb-6 tracking-tight">
                            Une approche pensée pour <br /> optimiser votre cabinet
                        </h2>
                    </div>

                    {/* 3x2 Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-[#111111] border border-white/5 rounded-2xl p-8 hover:bg-[#111111] hover:border-primary/40 hover:shadow-[0_0_30px_-10px_rgba(37,99,235,0.2)] transition-all duration-300 group">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 flex flex-col items-center justify-center mb-10 group-hover:scale-105 transition-all duration-300">
                                    {React.cloneElement(feature.icon, { className: "w-5 h-5 text-white/70 group-hover:text-primary transition-colors duration-300" })}
                                </div>
                                <h3 className="text-xl font-sans font-medium text-white mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                                <p className="text-sm text-white/50 leading-relaxed font-sans">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TIMELINE SECTION */}
            <section className="relative z-30 bg-[#0A0A0A] w-full border-t border-white/5">
                <Timeline data={timelineData} />
            </section>

            <EngagementSection />

            {/* CONTENT SECTION (Detailed blocks matching pricing cards but expanded) */}
            <section id="contenu" className="relative z-30 bg-[#0A0A0A] py-24 px-6 md:px-12 border-t border-white/5">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

                    <div>
                        <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">Qu'allez-vous recevoir ?</span>
                        <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">Un livrable de 30+ pages, structuré et opérationnel.</h2>
                        <p className="text-white/60 mb-6 text-lg">
                            Nous ne faisons pas de grands discours théoriques. Notre diagnostic décortique votre existant et pose les bases chiffrées de votre croissance numérique.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Analyse concurrentielle approfondie de votre marché local",
                                "Audit technique SEO complet du site actuel",
                                "Vérification des leviers d'acquisition (Google, LinkedIn)",
                                "Feuille de route stratégique avec priorités P0, P1, P2",
                                "Budget et ROI estimé pour la mise en œuvre"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-white/80">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-[#111111] border border-white/10 rounded-2xl p-10 flex flex-col justify-center">
                        <div className="text-center mb-8">
                            <span className="text-xs font-mono text-white/40 tracking-widest uppercase mb-4 block">Tarif de l'offre</span>
                            <div className="flex items-baseline justify-center gap-2 mb-2">
                                <span className="text-6xl font-serif font-bold">900<span className="text-4xl text-white/50">€</span></span>
                                <span className="text-sm font-bold text-white/40 uppercase tracking-widest">TTC</span>
                            </div>
                            <p className="text-sm text-white/50">Délai de réalisation : 2 semaines</p>
                        </div>

                        <a href={SITE_CONFIG.calendlyUrl} target="_blank" rel="noopener noreferrer" className="w-full bg-primary hover:bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 mb-4">
                            Réserver le diagnostic
                            <ArrowRight size={18} />
                        </a>
                        <p className="text-center text-xs text-white/30 uppercase tracking-widest font-mono">Paiement sécurisé via Stripe</p>
                    </div>

                </div>
            </section>
        </main>
    );
}
