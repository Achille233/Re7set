import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function PricingNiveau03() {
    const cardsRef = useRef(null);

    useEffect(() => {
        if (!cardsRef.current) return;
        const cards = cardsRef.current.querySelectorAll('.pricing-card-3');

        gsap.fromTo(cards,
            { y: 60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'elastic.out(1, 0.75)',
                stagger: 0.12,
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: 'top 85%',
                }
            }
        );
    }, []);

    const offers = [
        {
            kicker: "REFONTE & LANCEMENT STRATÉGIQUE",
            title: "RE7SET — Starter Pack",
            desc: "Lancer votre présence digitale professionnelle avec une base technique solide",
            features: [
                "Refonte site web sur mesure",
                "SEO technique de base intégré",
                "Structure optimisée",
                "Tracking complet Analytics Search Console pixels",
                "Mise en ligne",
                "Recherche mots-clés & plan d'action SEO",
                "Optimisations initiales + suivi 2 mois",
                "Paramétrage campagne Google Ads"
            ],
            noteInfo: "Budget Ads versé directement à Google · Suivi SEO : 250€/mois hors budget Ads",
            livrable: "📄 Site livré + SEO + Ads opérationnels",
            ctaType: "dark"
        },
        {
            kicker: "ACCOMPAGNEMENT PERSONNALISÉ",
            title: "RE7SET — Coaching Stratégique Cabinet",
            desc: "Structurer, développer et positionner votre cabinet grâce à un accompagnement individuel sur mesure",
            features: [
                "Positionnement & structuration de votre offre",
                "Méthode de développement & acquisition clients",
                "Stratégie de communication & autorité LinkedIn",
                "IA & optimisation administrative",
                "Accompagnement individuel",
                "Plan d'action 90 jours personnalisé",
                "Templates & scripts opérationnels",
                "Suivi et ajustements continus"
            ],
            noteInfo: "À partir de 2 000€ · selon niveau du cabinet et durée d'accompagnement",
            livrable: "📄 Plan stratégique personnalisé + templates opérationnels",
            ctaType: "primary"
        },
        {
            kicker: "INTÉGRATION & DÉPLOIEMENT IA",
            title: "RE7SET — IA & Transformation",
            desc: "Transformer l'IA en levier de productivité & avantage concurrentiel",
            features: [
                "Intégration outils IA recommandés",
                "Paramétrage & automatisations",
                "Formation équipe",
                "Déploiement progressif",
                "Suivi performance & ROI"
            ],
            noteInfo: null,
            livrable: "📄 Déploiement IA complet + suivi ROI",
            ctaType: "dark"
        }
    ];

    return (
        <section className="relative w-full py-24 pb-48 px-6 md:px-12 lg:px-24 bg-transparent">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end gap-6 border-b border-foreground/10 pb-8 mb-16">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-darkAccent flex items-center justify-center text-white text-2xl font-serif font-bold">
                            03
                        </div>
                        <h2 className="text-2xl md:text-4xl font-sans font-medium tracking-tight text-foreground">Mise en œuvre</h2>
                    </div>
                    <p className="text-sm font-sans text-muted md:ml-auto">
                        Déploiement & transformation · sur devis
                    </p>
                </div>

                {/* Cards Grid */}
                <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {offers.map((offer, i) => (
                        <div key={i} className="pricing-card-3 bg-white border border-[#E8E8E4] rounded-[10px] p-8 flex flex-col h-full hover:shadow-xl transition-all duration-300">
                            <span className="text-[10px] font-mono text-primary uppercase tracking-widest mb-4 block">
                                {offer.kicker}
                            </span>

                            <h3 className="text-2xl font-bold font-sans tracking-tight text-foreground mb-2">{offer.title}</h3>
                            <p className="text-sm text-muted mb-8">{offer.desc}</p>

                            <ul className="space-y-3 mb-8 flex-grow">
                                {offer.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Check className="text-primary mt-0.5 flex-shrink-0" size={16} />
                                        <span className="text-sm text-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {offer.noteInfo && (
                                <div className="bg-secondary/50 p-4 rounded text-xs text-muted mb-8">
                                    {offer.noteInfo}
                                </div>
                            )}

                            <div className="bg-secondary/50 border border-foreground/5 p-4 rounded text-sm text-foreground mb-8">
                                {offer.livrable}
                            </div>

                            <div className="mt-auto">
                                <div className="mb-2">
                                    <span className="text-3xl font-serif text-foreground">Sur devis</span>
                                </div>
                                <div className="mb-6">
                                    <span className="text-[10px] font-mono tracking-widest uppercase text-muted">TARIFICATION PERSONNALISÉE</span>
                                </div>

                                <button
                                    className={`w-full py-4 rounded font-medium flex items-center justify-center gap-2 transition-all duration-300 mb-4
                    ${offer.ctaType === 'dark'
                                            ? 'bg-darkAccent text-white hover:bg-black'
                                            : 'bg-primary text-white hover:brightness-110 shadow-lg shadow-primary/20'}`}
                                >
                                    Demander un devis <ArrowRight size={18} />
                                </button>

                                <p className="block text-center text-xs text-muted">
                                    Devis personnalisé sous 48h
                                </p>
                                <a href="/offres/mise-en-oeuvre" className="block text-center text-xs font-medium text-primary hover:underline mt-2">
                                    Voir le détail de l'accompagnement →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
