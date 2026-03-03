import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Check, ArrowRight, Target, Search, Brain, ShieldCheck } from 'lucide-react';

export default function AuditStrategique() {
    useEffect(() => {
        gsap.fromTo('.audit-anim',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
        );
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
            icon: <Search className="w-6 h-6 text-cyan-600" />,
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
            icon: <Brain className="w-6 h-6 text-orange-600" />,
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
        <main className="relative bg-[#F9F9FB] text-foreground pt-32 pb-24 min-h-screen">
            {/* Light background gradient */}
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">

                {/* Breadcrumbs */}
                <div className="audit-anim flex justify-center items-center gap-2 text-xs font-mono text-muted mb-12">
                    <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
                    <span>&gt;</span>
                    <span className="text-foreground/80 font-medium">Audits Stratégiques</span>
                </div>

                {/* Hero Section */}
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <div className="audit-anim inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-mono tracking-widest uppercase mb-8">
                        <ShieldCheck size={16} /> Indépendant & Objectif
                    </div>

                    <h1 className="audit-anim text-4xl md:text-6xl lg:text-7xl font-sans font-medium leading-[1.1] tracking-tight mb-8 text-foreground">
                        Faites le point avec des <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Audits Stratégiques</span>
                    </h1>

                    <p className="audit-anim text-lg md:text-xl text-muted leading-relaxed">
                        Chaque audit peut être commandé seul. Nous vous livrons un état des lieux clair, sans jargon, et des recommandations immédiatement actionnables pour votre cabinet.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {audits.map((audit, index) => (
                        <div key={index} className="audit-anim bg-white rounded-2xl p-8 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-black/5 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col h-full group">

                            <div className="w-14 h-14 rounded-xl bg-slate-50 border border-black/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {audit.icon}
                            </div>

                            <h3 className="text-2xl font-bold font-sans text-foreground mb-3">{audit.title}</h3>
                            <p className="text-sm text-muted mb-8 leading-relaxed flex-grow">{audit.desc}</p>

                            <div className="bg-slate-50 rounded-xl p-5 mb-8 border border-black/[0.03]">
                                <ul className="space-y-3">
                                    {audit.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                            <span className="text-xs font-medium text-foreground/80">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-auto pt-6 border-t border-black/5 flex items-center justify-between">
                                <div>
                                    <span className="text-[10px] font-mono tracking-widest text-muted uppercase block mb-1">Prix TTC</span>
                                    <span className="text-2xl font-serif font-bold text-foreground">{audit.price}</span>
                                </div>
                                <a href="https://calendly.com/sibylle-/30min?month=2026-02" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#1A1A1A] text-white rounded-lg hover:bg-black transition-colors group-hover:-translate-y-1 duration-300">
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="audit-anim bg-[#111] text-white rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-serif mb-6">Besoin d'une vision complète ?</h2>
                        <p className="text-white/70 mb-10 max-w-xl mx-auto">
                            Le pack Diagnostic Stratégique Global regroupe ces 3 audits fondamentaux pour vous offrir une roadmap de croissance complète sur 90 jours.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <a href="/#offres" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-blue-600 text-white rounded-xl font-medium transition-colors shadow-lg shadow-primary/20">
                                Découvrir le Diagnostic Global
                            </a>
                            <a href="https://calendly.com/sibylle-/30min?month=2026-02" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-colors backdrop-blur-sm">
                                Nous contacter
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
