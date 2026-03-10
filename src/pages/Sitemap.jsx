import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { ArrowUpRight } from 'lucide-react';

const sections = [
    {
        title: 'Pages principales',
        links: [
            { label: 'Accueil', to: '/' },
            { label: 'Outils IA', to: '/outils-ia' },
        ],
    },
    {
        title: 'Services',
        links: [
            { label: 'Diagnostic Stratégique', to: '/offres/diagnostic-strategique' },
            { label: 'Audits & Optimisations SEO', to: '/offres/audits-strategiques' },
            { label: 'Visibilité SEO', to: '/offres/visibilite-seo' },
            { label: 'Coaching & Mise en œuvre', to: '/offres/mise-en-oeuvre' },
        ],
    },
    {
        title: 'Informations légales',
        links: [
            { label: 'Mentions légales', to: '/mentions-legales' },
            { label: 'Politique de confidentialité', to: '/politique-confidentialite' },
        ],
    },
];

export default function Sitemap() {
    usePageMeta(
        'Plan du site | RE7SET',
        'Plan du site RE7SET — retrouvez toutes les pages et sections disponibles.'
    );
    return (
        <main className="min-h-screen bg-background pt-40 pb-24 px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
                <Link to="/" className="text-primary text-sm font-mono hover:underline mb-8 block">&larr; Retour à l'accueil</Link>

                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-12">Plan du site</h1>

                <div className="space-y-12">
                    {sections.map((section) => (
                        <div key={section.title}>
                            <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-6">
                                {section.title}
                            </h2>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.to}>
                                        <Link
                                            to={link.to}
                                            className="group inline-flex items-center gap-2 text-foreground hover:text-primary font-semibold text-[15px] transition-colors"
                                        >
                                            {link.label}
                                            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
