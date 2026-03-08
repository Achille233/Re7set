import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowRight, Zap, Target, BarChart, Settings, Users } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { SITE_CONFIG } from '../config/site';

export default function MiseEnOeuvre() {
    usePageMeta(
        'Mise en Œuvre | RE7SET — Déploiement Digital pour Professions Libérales',
        'Accompagnement opérationnel sur mesure : refonte site, SEO, Google Ads, outils IA. RE7SET déploie et pilote votre stratégie digitale de A à Z.'
    );
    useEffect(() => {
        gsap.fromTo('.mo-anim',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
        );
    }, []);

    const steps = [
        {
            icon: <Settings className="w-6 h-6 text-primary" />,
            title: "Configuration & Intégration",
            desc: "Nous déployons les outils recommandés (IA, CRM, plateformes SEO) de manière sécurisée et alignée avec vos obligations de confidentialité.",
        },
        {
            icon: <Users className="w-6 h-6 text-cyan-600" />,
            title: "Formation & Adoption",
            desc: "Un outil n’est utile que s’il est utilisé. Nous formons vos équipes via des sessions pratiques pour garantir une adoption rapide et pérenne.",
        },
        {
            icon: <BarChart className="w-6 h-6 text-orange-600" />,
            title: "Suivi & Optimisation",
            desc: "Nous analysons les premiers résultats et ajustons les process pour maximiser le ROI de votre transformation digitale sur le long terme.",
        }
    ];

    return (
        <main className="relative bg-[#F9F9FB] text-foreground pt-32 pb-24 min-h-screen">
            {/* Light background gradient */}
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">

                {/* Breadcrumbs */}
                <div className="mo-anim flex justify-center items-center gap-2 text-xs font-mono text-muted mb-12">
                    <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
                    <span>&gt;</span>
                    <span className="text-foreground/80 font-medium">Mise en œuvre</span>
                </div>

                {/* Hero Section */}
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <div className="mo-anim inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-mono tracking-widest uppercase mb-8">
                        <Zap size={16} /> Transformation Concrète
                    </div>

                    <h1 className="mo-anim text-4xl md:text-6xl lg:text-7xl font-sans font-medium leading-[1.1] tracking-tight mb-8 text-foreground">
                        Passez de la stratégie à la <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Mise en œuvre</span>
                    </h1>

                    <p className="mo-anim text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-2xl mx-auto">
                        Le diagnostic est posé, il faut maintenant agir. Nous accompagnons votre cabinet dans le déploiement opérationnel des recommandations pour des résultats mesurables.
                    </p>

                    <div className="mo-anim flex items-center justify-center">
                        <span className="text-sm font-bold tracking-widest text-muted uppercase bg-white px-6 py-2 border border-black/5 rounded-full shadow-sm">
                            Tarif sur devis
                        </span>
                    </div>
                </div>

                {/* Process Steps */}
                <div className="mb-24 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-[44px] left-24 right-24 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="mo-anim bg-white rounded-2xl p-8 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-black/5 hover:transform hover:-translate-y-1 transition-all duration-300">

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-full bg-slate-50 border border-black/5 flex items-center justify-center shrink-0">
                                        {step.icon}
                                    </div>
                                    <div className="text-4xl font-serif text-primary/10 font-bold ml-auto">
                                        0{index + 1}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold font-sans text-foreground mb-4">{step.title}</h3>
                                <p className="text-sm text-muted leading-relaxed">{step.desc}</p>

                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA Card */}
                <div className="mo-anim bg-[#111] text-white rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 max-w-5xl mx-auto relative overflow-hidden shadow-2xl shadow-primary/10">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/30 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="relative z-10 max-w-xl text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-serif mb-4 leading-tight">Prêt à transformer votre cabinet ?</h2>
                        <p className="text-white/70 text-base md:text-lg">
                            Discutons ensemble de vos objectifs lors d'un premier échange stratégique offert de 30 minutes.
                        </p>
                    </div>

                    <div className="relative z-10 shrink-0">
                        <a href={SITE_CONFIG.calendlyUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 px-8 py-5 bg-white text-[#111] hover:bg-slate-100 rounded-xl font-bold transition-all shadow-xl hover:shadow-2xl hover:shadow-white/20">
                            Prendre rendez-vous
                            <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

            </div>
        </main>
    );
}
