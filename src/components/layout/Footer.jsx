import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Prevent FOUC (Flash of Unstyled Content) by delaying footer render
        // until the Suspense boundary in App.jsx has likely resolved the main content.
        const timer = setTimeout(() => {
            setIsMounted(true);
        }, 300); // 300ms is usually enough for the first chunk to render

        return () => clearTimeout(timer);
    }, []);

    if (!isMounted) return null;

    return (
        <footer className="w-full bg-darkAccent text-white border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="inline-block mb-6">
                            <span className="font-sans font-bold text-2xl tracking-tight text-white">
                                RE<span className="text-primary">7</span>SET<span className="text-primary">.</span>
                            </span>
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                            Stratégie digitale, SEO local et Intelligence Artificielle pour les professions libérales et cabinets d'expertise.
                        </p>
                    </div>

                    {/* Offres */}
                    <div>
                        <h4 className="font-sans font-semibold text-sm uppercase tracking-widest text-white/80 mb-6">Nos offres</h4>
                        <ul className="space-y-3">
                            <li><Link to="/offres/diagnostic-strategique" className="text-white/50 hover:text-primary text-sm transition-colors">Diagnostic Stratégique Global</Link></li>
                            <li><Link to="/offres/audits-strategiques" className="text-white/50 hover:text-primary text-sm transition-colors">Audits & Optimisations SEO</Link></li>
                            <li><Link to="/offres/mise-en-oeuvre" className="text-white/50 hover:text-primary text-sm transition-colors">Coaching & Transformation IA</Link></li>
                            <li><Link to="/outils-ia" className="text-white/50 hover:text-primary text-sm transition-colors">Outils & Solutions IA</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-sans font-semibold text-sm uppercase tracking-widest text-white/80 mb-6">Contact</h4>
                        <ul className="space-y-3 text-sm text-white/50">
                            <li><a href="mailto:contact@re7set.com" className="hover:text-primary transition-colors">contact@re7set.com</a></li>
                            <li><a href="tel:+33767985013" className="hover:text-primary transition-colors">+33 7 67 98 50 13</a></li>
                            <li className="leading-relaxed">3 boulevard Sébastopol<br />75001 Paris, France</li>
                        </ul>
                    </div>

                    {/* Légal */}
                    <div>
                        <h4 className="font-sans font-semibold text-sm uppercase tracking-widest text-white/80 mb-6">Informations</h4>
                        <ul className="space-y-3">
                            <li><Link to="/mentions-legales" className="text-white/50 hover:text-primary text-sm transition-colors">Mentions légales</Link></li>
                            <li><a href="https://calendly.com/sibylle-/30min" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-primary text-sm transition-colors">Prendre rendez-vous</a></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom bar */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/30 text-xs">&copy; {new Date().getFullYear()} RE7SET. Tous droits réservés.</p>
                    <p className="text-white/30 text-xs">Agence IA & Visibilité — Paris</p>
                </div>
            </div>
        </footer>
    );
}
