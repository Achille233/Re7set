import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Eye, Search, Sparkles, Rocket, ArrowRight, Phone, Menu, X, ChevronDown, Target } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const location = useLocation();

    // Check if we are on a dark page
    const isDarkPage = location.pathname === '/offres/diagnostic-strategique' ||
        location.pathname === '/offres/mise-en-oeuvre' ||
        location.pathname === '/offres/audits-strategiques' ||
        location.pathname === '/outils-ia';
    // Dynamic classes based on the page theme
    const headerBgClass = isDarkPage
        ? 'bg-transparent border-white/10'
        : 'bg-white/95 backdrop-blur-md border-black/5';

    const textColorClass = isDarkPage ? 'text-white' : 'text-foreground';
    const isOutilsIAPage = location.pathname === '/outils-ia';
    const ctaText = isOutilsIAPage ? 'Audit IA offert' : 'Audit SEO offert';

    return (
        <header className="fixed top-0 left-0 w-full z-[100]">
            {/* Full-width Container */}
            <div className={`${headerBgClass} w-full px-6 py-4 md:px-12 border-b flex items-center justify-between transition-colors duration-300 relative`}>

                {/* Logo */}
                <a href="/" className="flex items-center gap-1 group z-[110] relative">
                    <span className={`font-sans font-bold text-xl tracking-tight ${isMobileMenuOpen ? 'text-foreground' : textColorClass} transition-colors duration-300`}>
                        RE<span className="text-primary transition-colors duration-300">7</span>SET<span className="text-primary">.</span>
                    </span>
                </a>

                {/* Mobile Menu Toggle */}
                <button
                    className={`md:hidden p-2 ${isMobileMenuOpen ? 'text-foreground' : textColorClass} z-[110]`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Navigation - ABSOLUTELY CENTERED IN THE HEADER PILL */}
                <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 items-center gap-8 h-full">
                    <a href="/" className={`font-sans font-medium text-[15px] ${textColorClass} hover:text-primary transition-colors h-full flex items-center`}>Accueil</a>

                    <div className="relative group h-full flex items-center">
                        <button className={`flex items-center gap-1 font-sans font-medium text-[15px] ${textColorClass} group-hover:text-primary transition-colors h-full`}>
                            Services
                            <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                        </button>

                        {/* Dropdown Menu - perfectly centered under the "Services" link */}
                        <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top group-hover:translate-y-0 translate-y-2 z-[120]">
                            {/* Invisible Bridge */}
                            <div className="absolute -top-[16px] left-0 w-full h-[20px] bg-transparent"></div>

                            {/* Dropdown Content - Redesigned to 50/50 split to eliminate uneven whitespace */}
                            <div className="bg-white/95 backdrop-blur-xl border border-black/5 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] w-[800px] flex overflow-hidden text-left relative z-10">

                                {/* Left Col - Services List */}
                                <div className="w-[65%] flex flex-col relative z-10 bg-white">
                                    <a href="/offres/diagnostic-strategique" className="relative flex-1 flex items-center gap-5 px-6 rounded-none border-b border-black/5 hover:border-primary/30 hover:bg-[#050505] transition-all duration-500 group/item overflow-hidden">
                                        {/* Immersive Deep Glow */}
                                        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[150%] h-[150%] bg-primary/20 rounded-full blur-[80px] opacity-0 group-hover/item:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

                                        <div className="relative z-10 mt-1 w-12 h-12 rounded-xl bg-slate-50 border border-black/5 group-hover/item:border-primary/40 group-hover/item:bg-primary/10 group-hover/item:shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center shrink-0 transition-all duration-500">
                                            <Target className="text-foreground group-hover/item:text-primary transition-colors duration-500 w-6 h-6" />
                                        </div>
                                        <div className="relative z-10">
                                            <h4 className="text-foreground font-sans font-semibold text-base mb-1.5 group-hover/item:text-white transition-colors duration-500 tracking-tight">Diagnostic Stratégique Global</h4>
                                            <p className="text-muted text-sm leading-relaxed group-hover/item:text-white/70 transition-colors duration-500">L'offre structurante RE7SET pour bâtir la fondation numérique de votre cabinet.</p>
                                        </div>
                                    </a>

                                    <a href="/offres/audits-strategiques" className="relative flex-1 flex items-center gap-5 px-6 rounded-none border-b border-black/5 hover:border-cyan-500/30 hover:bg-[#050505] transition-all duration-500 group/item overflow-hidden">
                                        {/* Immersive Deep Glow */}
                                        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[150%] h-[150%] bg-cyan-500/20 rounded-full blur-[80px] opacity-0 group-hover/item:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

                                        <div className="relative z-10 mt-1 w-12 h-12 rounded-xl bg-slate-50 border border-black/5 group-hover/item:border-cyan-500/40 group-hover/item:bg-cyan-500/10 group-hover/item:shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center shrink-0 transition-all duration-500">
                                            <Search className="text-foreground group-hover/item:text-cyan-400 transition-colors duration-500 w-6 h-6" />
                                        </div>
                                        <div className="relative z-10">
                                            <h4 className="text-foreground font-sans font-semibold text-base mb-1.5 group-hover/item:text-white transition-colors duration-500 tracking-tight">Audits & Optimisations SEO</h4>
                                            <p className="text-muted text-sm leading-relaxed group-hover/item:text-white/70 transition-colors duration-500">Positionnement, audit SEO & GEO pour dominer les recherches locales web.</p>
                                        </div>
                                    </a>

                                    <a href="/outils-ia" className="relative flex-1 flex items-center gap-5 px-6 rounded-none hover:border-purple-500/30 hover:bg-[#050505] transition-all duration-500 group/item overflow-hidden">
                                        {/* Immersive Deep Glow */}
                                        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[150%] h-[150%] bg-purple-500/20 rounded-full blur-[80px] opacity-0 group-hover/item:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

                                        <div className="relative z-10 mt-1 w-12 h-12 rounded-xl bg-slate-50 border border-black/5 group-hover/item:border-purple-500/40 group-hover/item:bg-purple-500/10 group-hover/item:shadow-[0_0_20px_rgba(168,85,247,0.4)] flex items-center justify-center shrink-0 transition-all duration-500">
                                            <Sparkles className="text-foreground group-hover/item:text-purple-400 transition-colors duration-500 w-6 h-6" />
                                        </div>
                                        <div className="relative z-10">
                                            <h4 className="text-foreground font-sans font-semibold text-base mb-1.5 group-hover/item:text-white transition-colors duration-500 tracking-tight">Outils & Solutions IA</h4>
                                            <p className="text-muted text-sm leading-relaxed group-hover/item:text-white/70 transition-colors duration-500">Intégration d'outils d'intelligence artificielle sur-mesure et sécurisés.</p>
                                        </div>
                                    </a>

                                </div>

                                {/* Right Col - Featured / CTA */}
                                <div className="w-[35%] relative bg-gradient-to-br from-slate-50/80 to-slate-100/80 border-l border-slate-200/60 p-8 flex flex-col group/feature">
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover/feature:bg-primary/20 transition-colors duration-500"></div>

                                    <div className="relative z-10 flex-grow flex flex-col justify-center">
                                        {/* Image placed above the text */}
                                        <div className="w-full relative rounded-lg overflow-hidden mb-6 border border-black/5 shadow-sm group-hover/feature:shadow-md transition-shadow aspect-video flex-shrink-0">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
                                            <img
                                                src="/mockup.jpg"
                                                alt="Mockup RE7SET"
                                                className="w-full h-full object-cover object-center transform group-hover/feature:scale-105 transition-transform duration-700"
                                            />
                                        </div>

                                        <span className="text-[10px] font-mono text-primary uppercase tracking-widest mb-2 block font-extrabold">RÉSERVEZ UN AUDIT</span>
                                        <h4 className="text-xl md:text-2xl font-serif text-foreground mb-2 leading-tight">Passez à la vitesse supérieure</h4>
                                        <p className="text-sm text-muted mb-6 leading-relaxed">Échange de 30 min pour évaluer le potentiel de croissance de votre cabinet.</p>
                                    </div>

                                    <a href={SITE_CONFIG.calendlyUrl} target="_blank" rel="noopener noreferrer" className="relative z-10 w-full mt-auto bg-[#1A1A1A] hover:bg-black text-white font-medium text-sm py-3.5 rounded-lg text-center transition-colors shadow-lg shadow-black/5">
                                        Prendre rendez-vous
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                    <a href="/#equipe" className={`font-sans font-medium text-[15px] ${textColorClass} hover:text-primary transition-colors h-full flex items-center`}>Équipe</a>
                    <a href="/#contact" className={`font-sans font-medium text-[15px] ${textColorClass} hover:text-primary transition-colors h-full flex items-center`}>Contact</a>
                </nav>

                {/* CTA Right */}
                <div className="hidden md:block z-[110] relative">
                    <div className="relative group/cta">
                        {/* Huge Neon Desktop Glow (Permanent Breathing) */}
                        <div className="absolute inset-0 bg-[#2563EB]/40 rounded-full blur-[20px] animate-[pulse_3s_ease-in-out_infinite] transition-all duration-300"></div>

                        <a href={SITE_CONFIG.calendlyUrl} target="_blank" rel="noopener noreferrer" className="relative hidden md:flex items-center justify-center bg-[#2563EB] text-white px-7 py-3 rounded-full font-sans font-medium text-[15px] transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.6)] border border-white/20 hover:scale-105">
                            {/* Inner Bright Ring (Constant) */}
                            <div className="absolute inset-0 ring-[1px] ring-blue-300/50 rounded-full pointer-events-none"></div>

                            {/* Subtle inner light */}
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/20 blur-[15px] opacity-40 mix-blend-overlay pointer-events-none"></div>

                            {/* Text with slight glow */}
                            <span className="relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                                {ctaText}
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu - Structure inspired by We-R, Light Theme */}
            <div
                className={`fixed inset-0 bg-white z-[90] transition-transform duration-500 flex flex-col px-6 pb-6 md:hidden overflow-y-auto ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
            >
                {/* Mobile Menu Header with Logo and Close Button */}
                <div className="flex items-center justify-between py-6 pt-8 w-full">
                    {/* Logo inside mobile menu */}
                    <a href="/" className="flex items-center gap-1 z-[110]" onClick={() => setIsMobileMenuOpen(false)}>
                        <span className="font-sans font-bold text-xl tracking-tight text-foreground">
                            RE<span className="text-primary">7</span>SET<span className="text-primary">.</span>
                        </span>
                    </a>

                    {/* Dedicated Close Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-2 bg-slate-100 hover:bg-slate-200 text-foreground rounded-full transition-colors flex items-center justify-center z-[110]"
                        aria-label="Fermer le menu"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="flex flex-col font-sans w-full mt-4">
                    <a href="/" onClick={() => setIsMobileMenuOpen(false)} className="py-4 text-lg font-medium text-foreground hover:text-primary border-b border-black/5 transition-colors">Accueil</a>

                    {/* Services Accordion */}
                    <div className="flex flex-col border-b border-black/5">
                        <button
                            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                            className="flex items-center justify-between py-4 text-lg font-medium text-foreground hover:text-primary w-full text-left transition-colors"
                        >
                            <span>Services</span>
                            <ChevronDown className={`w-5 h-5 text-muted transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <div className={`flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${isMobileServicesOpen ? 'max-h-[500px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                            {/* Service 1 */}
                            <a href="/offres/diagnostic-strategique" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 py-3 px-2 rounded-lg hover:bg-slate-50 transition-colors group border border-transparent hover:border-black/5">
                                <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0 transition-colors">
                                    <Target className="text-primary w-4 h-4 transition-colors" />
                                </div>
                                <div>
                                    <h4 className="text-foreground font-medium text-[15px] leading-none mb-1">Diagnostic Stratégique Global</h4>
                                    <p className="text-muted text-xs line-clamp-1">Fondation numérique et plan d'action.</p>
                                </div>
                            </a>

                            {/* Service 2 */}
                            <a href="/offres/audits-strategiques" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 py-3 px-2 rounded-lg hover:bg-slate-50 transition-colors group border border-transparent hover:border-black/5">
                                <div className="w-8 h-8 rounded-md bg-cyan-500/10 flex items-center justify-center shrink-0 transition-colors">
                                    <Search className="text-cyan-500 w-4 h-4 transition-colors" />
                                </div>
                                <div>
                                    <h4 className="text-foreground font-medium text-[15px] leading-none mb-1">Audits & Optimisations SEO</h4>
                                    <p className="text-muted text-xs line-clamp-1">Positionnement et visibilité en ligne.</p>
                                </div>
                            </a>

                            {/* Service 3 */}
                            <a href="/outils-ia" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 py-3 px-2 rounded-lg hover:bg-slate-50 transition-colors group border border-transparent hover:border-black/5">
                                <div className="w-8 h-8 rounded-md bg-purple-500/10 flex items-center justify-center shrink-0 transition-colors">
                                    <Sparkles className="text-purple-500 w-4 h-4 transition-colors" />
                                </div>
                                <div>
                                    <h4 className="text-foreground font-medium text-[15px] leading-none mb-1">Outils & Solutions IA</h4>
                                    <p className="text-muted text-xs line-clamp-1">Intégration sur-mesure pour cabinets.</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <a href="/#equipe" onClick={() => setIsMobileMenuOpen(false)} className="py-4 text-lg font-medium text-foreground hover:text-primary border-b border-black/5 transition-colors">Équipe</a>
                    <a href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="py-4 text-lg font-medium text-foreground hover:text-primary border-b border-black/5 transition-colors">Contact</a>

                    <div className="mt-8 pt-4">
                        <a href={SITE_CONFIG.calendlyUrl} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="block w-full bg-[#2563EB] hover:bg-blue-600 text-white py-4 rounded-lg text-center font-medium text-[15px] transition-colors shadow-lg shadow-blue-500/20">
                            {ctaText}
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
