import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Eye, Search, Sparkles, Rocket, ArrowRight, Phone, Menu, X, ChevronDown, Target, Lightbulb } from 'lucide-react';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Check if we are on a dark page
    const isDarkPage = location.pathname === '/offres/diagnostic-strategique';

    // Dynamic classes based on the page theme
    const headerBgClass = isDarkPage
        ? 'bg-transparent border-transparent'
        : 'bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-black/[0.04]';

    const textColorClass = isDarkPage ? 'text-white' : 'text-foreground';

    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-5xl">
            {/* Pill Container */}
            <div className={`${headerBgClass} rounded-full px-6 py-3.5 md:px-8 border flex items-center justify-between transition-colors duration-300`}>

                {/* Logo */}
                <a href="/" className="flex items-center gap-1 group z-[110]">
                    <span className={`font-sans font-bold text-xl tracking-tight ${textColorClass} transition-colors duration-300`}>
                        RE<span className="text-primary transition-colors duration-300">7</span>SET<span className="text-primary">.</span>
                    </span>
                </a>

                {/* Mobile Menu Toggle */}
                <button
                    className={`md:hidden p-2 ${textColorClass} z-[110]`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 relative">
                    <div className="relative group p-2 -m-2">
                        <button className={`flex items-center gap-1 font-sans font-medium text-[15px] ${textColorClass} group-hover:text-primary transition-colors`}>
                            Services
                            <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                        </button>

                        {/* Dropdown Menu - invisible bridge */}
                        <div className="absolute top-full left-1/2 -translate-x-[40%] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top group-hover:translate-y-0 translate-y-2 z-[120]">
                            {/* Dropdown Content */}
                            <div className="bg-white/95 backdrop-blur-xl border border-black/5 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] p-6 grid grid-cols-5 gap-6 w-[700px] relative text-left">

                                {/* Left Col - Services List */}
                                <div className="col-span-3 flex flex-col gap-2 relative z-10">
                                    <a href="/offres/diagnostic-strategique" className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
                                        <div className="mt-1 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                                            <Target className="text-primary w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-foreground font-medium text-base mb-1 group-hover/item:text-primary transition-colors tracking-tight">Diagnostic Stratégique Global</h4>
                                            <p className="text-muted text-sm leading-snug">L'offre structurante RE7SET pour bâtir la fondation numérique de votre cabinet.</p>
                                        </div>
                                    </a>

                                    <a href="/offres/audits-strategiques" className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
                                        <div className="mt-1 w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20">
                                            <Search className="text-cyan-500 w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-foreground font-medium text-base mb-1 group-hover/item:text-cyan-600 transition-colors tracking-tight">Audits & Optimisations SEO</h4>
                                            <p className="text-muted text-sm leading-snug">Positionnement, audit SEO & GEO pour dominer les recherches locales web.</p>
                                        </div>
                                    </a>

                                    <a href="/offres/mise-en-oeuvre" className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
                                        <div className="mt-1 w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
                                            <Lightbulb className="text-orange-500 w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-foreground font-medium text-base mb-1 group-hover/item:text-orange-500 transition-colors tracking-tight">Coaching & Transformation IA</h4>
                                            <p className="text-muted text-sm leading-snug">Intégration d'outils IA sur-mesure pour un gain de productivité immédiat.</p>
                                        </div>
                                    </a>
                                </div>

                                {/* Right Col - Featured / CTA */}
                                <div className="col-span-2 relative bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/60 rounded-xl overflow-hidden flex flex-col p-6 group/feature">
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover/feature:bg-primary/20 transition-colors duration-500"></div>

                                    <div className="relative z-10 flex-grow flex flex-col">
                                        {/* Image placed above the text */}
                                        <div className="w-full relative rounded-lg overflow-hidden mb-5 border border-black/5 shadow-sm group-hover/feature:shadow-md transition-shadow aspect-video">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                                            <img
                                                src="/mockup.png"
                                                alt="Mockup RE7SET"
                                                className="w-full h-full object-cover object-center transform group-hover/feature:scale-105 transition-transform duration-700"
                                            />
                                        </div>

                                        <span className="text-[10px] font-mono text-primary uppercase tracking-widest mb-2 block">RÉSERVEZ UN AUDIT</span>
                                        <h4 className="text-xl font-serif text-foreground mb-1 leading-tight">Passez à la vitesse supérieure</h4>
                                        <p className="text-sm text-muted mb-5 leading-relaxed">Échange de 30 min pour évaluer le potentiel de croissance de votre cabinet.</p>
                                    </div>

                                    <a href="https://calendly.com/sibylle-/30min?month=2026-02" target="_blank" rel="noopener noreferrer" className="relative z-10 w-full mt-auto bg-[#1A1A1A] hover:bg-black text-white font-medium text-sm py-3.5 rounded-lg text-center transition-colors shadow-lg shadow-black/5">
                                        Prendre rendez-vous
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                    <a href="/#equipe" className={`font-sans font-medium text-[15px] ${textColorClass} hover:text-primary transition-colors`}>Équipe</a>
                    <a href="/#offres" className={`font-sans font-medium text-[15px] ${textColorClass} hover:text-primary transition-colors`}>Offres</a>
                    <a href="/#outils-ia" className={`font-sans font-medium text-[15px] ${textColorClass} hover:text-primary transition-colors`}>Outils IA</a>
                </nav>

                {/* CTA Right */}
                <div className="hidden md:block z-[110]">
                    <a href="https://calendly.com/sibylle-/30min?month=2026-02" target="_blank" rel="noopener noreferrer" className={`hidden md:flex items-center justify-center ${isDarkPage ? 'bg-white text-[#111] hover:bg-slate-200' : 'bg-[#1A1A1A] text-white hover:bg-black'} px-6 py-2.5 rounded-full font-sans font-semibold text-sm transition-colors`}>
                        Nous contacter
                    </a>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                className={`fixed inset-0 bg-white z-[100] transition-transform duration-500 flex flex-col pt-24 px-8 md:hidden ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <div className="flex flex-col gap-6 font-sans text-xl font-medium">
                    <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-foreground hover:text-primary border-b border-black/5 pb-4">Services</a>
                    <a href="#equipe" onClick={() => setIsMobileMenuOpen(false)} className="text-foreground hover:text-primary border-b border-black/5 pb-4">Équipe</a>
                    <a href="#offres" onClick={() => setIsMobileMenuOpen(false)} className="text-foreground hover:text-primary border-b border-black/5 pb-4">Offres</a>
                    <a href="#outils-ia" onClick={() => setIsMobileMenuOpen(false)} className="text-foreground hover:text-primary border-b border-black/5 pb-4">Outils IA</a>
                    <a href="https://calendly.com/sibylle-/30min?month=2026-02" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 bg-[#1A1A1A] text-white py-4 rounded-full text-center hover:bg-black">Nous contacter</a>
                </div>
            </div>
        </header>
    );
}
