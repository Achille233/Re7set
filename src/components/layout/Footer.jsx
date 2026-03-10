import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';

export default function Footer() {
    return (
        <footer className="w-full bg-white text-foreground font-sans overflow-hidden border-t border-black/5 relative z-10 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
            {/* MIDDLE NAVIGATION GRID */}
            <div className="w-full px-6 md:px-12 lg:px-24 bg-white">
                <div className="max-w-7xl mx-auto py-8 lg:py-12">
                    <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">

                        {/* Brand Logo Left */}
                        <div className="lg:w-1/3">
                            <Link to="/" className="inline-block">
                                <span className="font-sans font-black text-4xl tracking-tighter text-foreground">
                                    RE<span className="text-[#0D7DF2]">7</span>SET<span className="text-[#0D7DF2]">.</span>
                                </span>
                            </Link>
                            <p className="mt-6 text-sm text-slate-500 max-w-xs leading-relaxed font-medium">
                                L'excellence digitale et l'intelligence artificielle au service des cabinets d'expertise.
                            </p>
                        </div>

                        {/* Links Grid Right */}
                        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-8">

                            {/* Column 1: Services */}
                            <div>
                                <h4 className="font-mono font-bold text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-8">Services</h4>
                                <ul className="space-y-4">
                                    <li><Link to="/offres/diagnostic-strategique" className="text-slate-600 hover:text-[#0D7DF2] text-[15px] font-semibold transition-colors">Diagnostic Stratégique</Link></li>
                                    <li><Link to="/offres/audits-strategiques" className="text-slate-600 hover:text-[#0D7DF2] text-[15px] font-semibold transition-colors">Audits & Optimisations SEO</Link></li>
                                    <li><Link to="/offres/mise-en-oeuvre" className="text-slate-600 hover:text-[#0D7DF2] text-[15px] font-semibold transition-colors">Coaching IA</Link></li>
                                    <li><Link to="/outils-ia" className="text-slate-600 hover:text-[#0D7DF2] text-[15px] font-semibold transition-colors">Outils IA</Link></li>
                                </ul>
                            </div>

                            {/* Column 2: Ressources */}
                            <div>
                                <h4 className="font-mono font-bold text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-8">Ressources</h4>
                                <ul className="space-y-4">
                                    <li><a href="/#equipe" className="text-slate-600 hover:text-[#0D7DF2] text-[15px] font-semibold transition-colors">À propos de nous</a></li>
                                    <li><span className="text-slate-400 text-[15px] font-semibold cursor-not-allowed pointer-events-none">Articles de blog (Bientôt)</span></li>
                                    <li><span className="text-slate-400 text-[15px] font-semibold cursor-not-allowed pointer-events-none">Cas clients (Bientôt)</span></li>
                                </ul>
                            </div>

                            {/* Column 3: Contact */}
                            <div>
                                <h4 className="font-mono font-bold text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-8">Contact</h4>
                                <ul className="space-y-4">
                                    <li><a href={SITE_CONFIG.calendlyUrl} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-[#0D7DF2] text-[15px] font-semibold transition-colors flex items-center gap-2 group">Prendre rendez-vous <ArrowUpRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#0D7DF2]" /></a></li>
                                    <li><a href="tel:+33767985013" className="text-slate-600 hover:text-[#0D7DF2] text-[15px] font-semibold transition-colors">Nous appeler</a></li>
                                    <li><a href="mailto:contact@re7set.com" className="text-slate-600 hover:text-[#0D7DF2] text-[15px] font-semibold transition-colors">Nous écrire</a></li>
                                    <li className="pt-4 border-t border-black/5 mt-4">
                                        <span className="text-slate-500 text-sm block leading-relaxed font-medium">
                                            3 boulevard Sébastopol<br />75001 Paris, France
                                        </span>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {/* BOTTOM LEGAL BAR */}
            <div className="w-full px-6 md:px-12 lg:px-24 border-t border-black/5 bg-white">
                <div className="max-w-7xl mx-auto h-20 flex flex-col md:flex-row justify-between items-center gap-4">

                    {/* Left: Copyright */}
                    <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full border border-black/10 bg-slate-50 flex items-center justify-center shadow-sm">
                            <span className="text-[10px] font-black text-foreground leading-none tracking-tighter">R<span className="text-[#0D7DF2]">7</span></span>
                        </div>
                        <p className="text-slate-400 text-[13px] font-semibold tracking-wide">
                            &copy; {new Date().getFullYear()} RE7SET. Tous droits réservés.
                        </p>
                    </div>

                    {/* Center: Minimalist Indicator */}
                    <div className="hidden md:block w-12 h-[3px] rounded-full bg-slate-100"></div>

                    {/* Right: Legal Links */}
                    <div className="flex items-center gap-6">
                        <Link to="/mentions-legales" className="text-slate-400 hover:text-[#0D7DF2] text-[13px] font-semibold transition-colors">Mentions légales</Link>
                        <span className="text-slate-200">|</span>
                        <Link to="/politique-confidentialite" className="text-slate-400 hover:text-[#0D7DF2] text-[13px] font-semibold transition-colors">Politique de confidentialité</Link>
                        <span className="text-slate-200">|</span>
                        <Link to="/sitemap" className="text-slate-400 hover:text-[#0D7DF2] text-[13px] font-semibold transition-colors">Sitemap</Link>
                    </div>

                </div>
            </div>

        </footer>
    );
}
