import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function PricingNiveau01() {
    const cardsRef = useRef(null);

    useEffect(() => {
        if (!cardsRef.current) return;
        const cards = cardsRef.current.querySelectorAll('.pricing-card');

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

    const audits = [
        {
            kicker: "AUDIT D'IDENTITÉ & CRÉDIBILITÉ",
            title: "RE7SET — Positionnement",
            desc: "Clarifier l'expert",
            features: [
                "Positionnement réel vs perçu",
                "Spécialisation & lisibilité",
                "Message & crédibilité",
                "Axes prioritaires"
            ],
            livrable: "📄 Synthèse stratégique + plan d'action",
            price: "250",
            ctaType: "outline"
        },
        {
            kicker: "AUDIT DE VISIBILITÉ SEO & GEO",
            title: "RE7SET — SEO & GEO",
            desc: "Visibilité Google & moteurs d'IA",
            features: [
                "Présence Google site + local",
                "Analyse mots-clés stratégiques",
                "Points bloquants techniques / contenu",
                "Priorités SEO",
                "Optimisation GEO IA conversationnelle"
            ],
            livrable: "📄 Rapport SEO + intégration IA structuré",
            price: "300",
            ctaType: "dark"
        },
        {
            kicker: "POTENTIEL IA DU CABINET",
            title: "RE7SET — Audit IA",
            desc: "Analyser le potentiel IA du cabinet",
            features: [
                "Audit des usages actuels",
                "Opportunités d'automatisation",
                "Analyse conformité & data",
                "Sélection outils adaptés CRM rédaction automatisation",
                "Roadmap IA"
            ],
            noteInfo: "L'audit identifie les opportunités IA adaptées. La mise en œuvre fait l'objet d'un accompagnement dédié (Niveau 3).",
            livrable: "📄 Rapport IA + intégration IA structuré",
            price: "450",
            ctaType: "outline"
        }
    ];

    return (
        <section id="audits" className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-secondary">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end gap-6 border-b border-foreground/10 pb-8 mb-16">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-darkAccent flex items-center justify-center text-white text-2xl font-serif font-bold">
                            01
                        </div>
                        <h2 className="text-2xl md:text-4xl font-serif text-foreground">Audits Stratégiques</h2>
                    </div>
                    <p className="text-sm font-sans text-muted md:ml-auto">
                        Chaque audit peut être commandé seul · prix fixes
                    </p>
                </div>

                {/* Cards Grid */}
                <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {audits.map((audit, i) => (
                        <div key={i} className="pricing-card bg-white border border-[#E8E8E4] rounded-[10px] p-8 flex flex-col h-full hover:shadow-xl transition-all duration-300">
                            <span className="text-[10px] font-mono text-primary uppercase tracking-widest mb-4 block">
                                {audit.kicker}
                            </span>

                            <h3 className="text-xl font-bold font-sans text-foreground mb-1">{audit.title}</h3>
                            <p className="text-sm text-muted mb-8">{audit.desc}</p>

                            <ul className="space-y-3 mb-8 flex-grow">
                                {audit.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Check className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                                        <span className="text-sm text-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {audit.noteInfo && (
                                <div className="bg-secondary/50 p-4 rounded text-xs text-muted mb-8">
                                    {audit.noteInfo}
                                </div>
                            )}

                            <div className="bg-secondary/50 border border-foreground/5 p-4 rounded text-sm text-foreground mb-8">
                                {audit.livrable}
                            </div>

                            <div className="mt-auto">
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-4xl font-serif font-bold text-foreground">{audit.price} €</span>
                                    <span className="text-sm text-muted">TTC</span>
                                </div>
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="text-xs text-muted">Paiement sécurisé · Stripe</span>
                                </div>

                                <button
                                    className={`w-full py-4 rounded font-medium flex items-center justify-center gap-2 transition-all duration-300 mb-4
                    ${audit.ctaType === 'dark'
                                            ? 'bg-darkAccent text-white hover:bg-black'
                                            : 'border border-foreground/20 text-foreground hover:bg-secondary'}`}
                                >
                                    Réserver l'audit <ArrowRight size={18} />
                                </button>

                                <a href="/offres/audits-strategiques" className="block text-center text-xs font-medium text-primary hover:underline">
                                    Voir le détail du service →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
