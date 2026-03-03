import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Search } from 'lucide-react';
import RevealText from '../animations/RevealText';

gsap.registerPlugin(ScrollTrigger);

export default function Deconstat() {
    const barsRef = useRef(null);

    useEffect(() => {
        if (!barsRef.current) return;
        const bars = barsRef.current.querySelectorAll('.progress-fill');

        gsap.fromTo(
            bars,
            { scaleX: 0 },
            {
                scaleX: 1,
                duration: 1.2,
                ease: 'power3.out',
                stagger: 0.2,
                transformOrigin: 'left center',
                scrollTrigger: {
                    trigger: barsRef.current,
                    start: 'top 85%',
                },
            }
        );
    }, []);

    return (
        <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-transparent">
            <div className="max-w-6xl mx-auto">
                <span className="text-xs uppercase tracking-widest font-mono text-muted mb-4 block">
                    Le problème
                </span>

                <h2 className="text-3xl md:text-5xl font-serif text-foreground leading-[1.1] tracking-tight mb-16 max-w-4xl">
                    <span className="block">Votre expertise est peut-être excellente.</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500 mt-2">Votre image digitale raconte une autre histoire.</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div>
                        <p className="text-base md:text-lg font-sans text-muted mb-10 leading-relaxed">
                            La réalité est asymétrique. Les patients, clients et confrères associent la qualité de votre présence en ligne à votre niveau de compétence.
                            Une réputation invisible ou dégradée profite directement à vos concurrents.
                        </p>

                        <ul className="space-y-6">
                            {[
                                "La majorité des patients et clients vérifient les avis en ligne avant de prendre rendez-vous",
                                "Les moteurs d'IA ne recommandent que les profils dont le contenu est structuré et lisible",
                                "Une image digitale incohérente crée un doute immédiat sur la compétence perçue"
                            ].map((text, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <ArrowRight className="text-primary mt-1 flex-shrink-0" size={18} />
                                    <span className="text-foreground font-medium">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Dark Card */}
                    <div className="bg-darkAccent rounded-xl p-8 md:p-10 shadow-2xl relative overflow-hidden group">
                        {/* Subtle light effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="flex items-center gap-2 mb-6">
                            <Search className="text-muted w-4 h-4" />
                            <span className="text-xs font-mono text-muted uppercase tracking-widest">Le constat RE7SET</span>
                        </div>

                        <h3 className="text-xl font-sans font-bold text-white mb-4">
                            Excellence métier ≠ Visibilité digitale
                        </h3>

                        <p className="text-muted text-sm leading-relaxed mb-10">
                            La majorité des professions réglementées ont un niveau d'expertise élevé mais une image numérique qui ne le reflète pas.
                        </p>

                        {/* Progress Bars */}
                        <div ref={barsRef} className="space-y-6">
                            {[
                                { label: 'Visibilité Google', value: 'Élevée', percent: '85%' },
                                { label: 'Présence IA', value: 'Structurée', percent: '70%' },
                                { label: 'Image digitale', value: 'Maîtrisée', percent: '90%' },
                                { label: 'Taux de contact', value: 'Optimisé', percent: '75%' }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-xs font-mono text-white/70 mb-2">
                                        <span>{stat.label}</span>
                                        <span>{stat.value} ({stat.percent})</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <div
                                            className="progress-fill h-full bg-white rounded-full will-change-transform"
                                            style={{ width: stat.percent }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
