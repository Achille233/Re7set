import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowRight, Check, Search, Globe, BarChart2, RefreshCw, Shield, TrendingUp } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { SITE_CONFIG } from '../config/site';

const SERVICES = [
    {
        icon: <Globe className="w-6 h-6 text-cyan-400" />,
        title: 'Refonte & Optimisation de site',
        desc: 'Conception ou refonte de votre site web sur Webflow ou WordPress, optimisé pour la conversion et le référencement naturel dès le départ.',
        features: ['Design sur-mesure à votre image', 'Vitesse & Core Web Vitals optimisés', 'Structure SEO technique en place'],
    },
    {
        icon: <Search className="w-6 h-6 text-cyan-400" />,
        title: 'SEO Local & Référencement Naturel',
        desc: 'Stratégie de contenu, maillage interne, backlinks et optimisation GEO pour apparaître en tête des résultats Google — et des IA conversationnelles.',
        features: ['Mots-clés stratégiques pour votre spécialité', 'Google Business Profile optimisé', 'GEO — visible sur ChatGPT & Perplexity'],
    },
    {
        icon: <BarChart2 className="w-6 h-6 text-cyan-400" />,
        title: 'Google Ads & SEA',
        desc: 'Campagnes publicitaires ciblées pour attirer des dossiers qualifiés rapidement, pendant que le SEO organique monte en puissance.',
        features: ['Ciblage géographique & par intention', 'Suivi des conversions', 'Optimisation continue du CPC'],
    },
    {
        icon: <RefreshCw className="w-6 h-6 text-cyan-400" />,
        title: 'Suivi Mensuel & Reporting',
        desc: 'Un tableau de bord clair chaque mois : positions, trafic, leads générés. Vous pilotez votre croissance avec des données réelles.',
        features: ['Rapport mensuel actionnable', 'Ajustements stratégiques continus', 'Point mensuel avec votre consultant'],
    },
];

const STEPS = [
    { num: '01', title: 'Audit de départ', desc: 'Analyse complète de votre présence actuelle : site, SEO, concurrents, mots-clés stratégiques.' },
    { num: '02', title: 'Stratégie personnalisée', desc: 'Roadmap sur 3 à 6 mois adaptée à votre spécialité, votre zone géographique et vos objectifs de dossiers.' },
    { num: '03', title: 'Déploiement', desc: 'Mise en œuvre technique et éditoriale : site, contenu, publicités — tout est géré par notre équipe.' },
    { num: '04', title: 'Suivi & optimisation', desc: 'Pilotage mensuel, ajustements en temps réel et reporting transparent pour mesurer chaque euro investi.' },
];

export default function VisibiliteSEO() {
    usePageMeta(
        'Accompagnement Visibilité Digitale | RE7SET — SEO & Google Ads pour Cabinets',
        'Refonte de site, SEO local, Google Ads et suivi mensuel pour avocats, notaires et experts-comptables. RE7SET déploie et pilote votre visibilité digitale pour attirer les meilleurs dossiers.'
    );

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.vs-anim',
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.1 }
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <main className="bg-darkAccent text-white min-h-screen">

            {/* Hero */}
            <section className="relative pt-40 pb-32 px-6 md:px-12 lg:px-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 via-transparent to-primary/10 pointer-events-none" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link to="/" className="text-cyan-400 text-sm font-mono hover:underline mb-10 block vs-anim">
                        &larr; Retour à l'accueil
                    </Link>
                    <span className="vs-anim text-xs font-mono text-cyan-400 uppercase tracking-widest mb-6 block">
                        Visibilité SEO & GEO
                    </span>
                    <h1 className="vs-anim text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-tight">
                        Attirez les meilleurs<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-primary">
                            dossiers en ligne.
                        </span>
                    </h1>
                    <p className="vs-anim text-lg text-white/60 max-w-2xl mb-12 leading-relaxed">
                        Refonte de votre site, référencement naturel, Google Ads et suivi mensuel. Nous déployons et pilotons votre visibilité pour que votre cabinet soit trouvé par les clients qui comptent.
                    </p>
                    <div className="vs-anim flex flex-col sm:flex-row gap-4">
                        <a
                            href={SITE_CONFIG.calendlyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-medium px-8 py-4 rounded-lg transition-colors"
                        >
                            Prendre rendez-vous <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <Link
                            to="/offres/audits-strategiques"
                            className="flex items-center justify-center gap-2 border border-white/20 text-white hover:border-cyan-400/50 hover:text-cyan-400 font-medium px-8 py-4 rounded-lg transition-colors"
                        >
                            Voir les audits SEO
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-4 block">Ce que nous faisons</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-16 max-w-2xl">
                        Une offre complète,<br />pilotée de A à Z.
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {SERVICES.map((s, i) => (
                            <div key={i} className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6">
                                    {s.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed mb-6">{s.desc}</p>
                                <ul className="space-y-2">
                                    {s.features.map((f, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-sm text-white/70">
                                            <Check size={14} className="text-cyan-400 shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/5">
                <div className="max-w-5xl mx-auto">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-4 block">Notre méthode</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-16">Comment ça marche.</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {STEPS.map((step, i) => (
                            <div key={i} className="relative">
                                <span className="text-6xl font-serif text-white/[0.04] absolute -top-4 -left-2 select-none">{step.num}</span>
                                <div className="relative z-10">
                                    <span className="text-xs font-mono text-cyan-400 font-bold mb-3 block">{step.num}</span>
                                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guarantees */}
            <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/5">
                <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-4 block">Nos engagements</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Zéro engagement.<br />Résultats mesurables.</h2>
                        <ul className="space-y-4">
                            {[
                                'Accompagnement sans engagement longue durée',
                                'Reporting mensuel 100% transparent',
                                'Respect strict de votre déontologie professionnelle',
                                'Accès à vos outils et données à tout moment',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                                    <Shield size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded-2xl p-10 text-center">
                        <TrendingUp size={40} className="text-cyan-400 mx-auto mb-6" />
                        <p className="text-sm font-mono text-white/40 uppercase tracking-widest mb-4">Tarif</p>
                        <p className="text-3xl font-serif text-white font-bold mb-2">Sur devis</p>
                        <p className="text-white/40 text-sm mb-8">Adapté à votre cabinet et vos objectifs</p>
                        <a
                            href={SITE_CONFIG.calendlyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-medium py-4 rounded-xl transition-colors"
                        >
                            Obtenir un devis <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </section>

        </main>
    );
}
