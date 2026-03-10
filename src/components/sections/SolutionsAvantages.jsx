import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, BarChart3, Target, Zap, MousePointerClick, Users, Bell, Clock, Search, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../config/site';

export default function SolutionsAvantages() {
    return (
        <section className="relative w-full overflow-hidden">
            {/* ------------------------------------------------------------------ */}
            {/* PARTIE 1 & 2 : FOND CLAIR (Vision Bento + SEO Overlapping)        */}
            {/* ------------------------------------------------------------------ */}
            <div className="bg-slate-50 pt-24 pb-32 md:pt-32 md:pb-40 relative z-10 py-10 rounded-t-[2.5rem] md:rounded-t-[4rem]">
                {/* Decorative Background Glows */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0D7DF2]/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col gap-32 lg:gap-40">

                    {/* BLOC 1 : Vision Globale (BENTO GRID ASYMÉTRIQUE) */}
                    <div className="w-full flex flex-col pt-10">
                        <div className="text-center md:text-left mb-16 flex flex-col items-center md:items-start group">
                            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-sans font-medium text-[#111111] leading-[1.05] tracking-tight text-balance max-w-[800px]">
                                Plus qu'une <span className="relative inline-block px-4 py-1.5 bg-[#0D7DF2]/10 text-[#0D7DF2] rounded-2xl mx-1 -rotate-2 rounded-tl-sm group-hover:rotate-0 transition-transform duration-500">prestation</span>.<br />
                                Un partenaire de croissance pour votre cabinet.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full mb-12 relative z-10">
                            {/* Bento Item 1 : Grande Carte Principale (Span 7) */}
                            <div className="lg:col-span-7 bg-white rounded-[2rem] p-10 lg:p-12 border border-slate-100 relative overflow-hidden group hover:shadow-[0_12px_40px_rgba(13,125,242,0.08)] transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                                <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#0D7DF2]/10 rounded-full blur-[60px] group-hover:bg-[#0D7DF2]/20 group-hover:scale-110 transition-all duration-700"></div>
                                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 border border-slate-100 group-hover:border-[#0D7DF2]/20 group-hover:bg-[#0D7DF2]/5 transition-colors duration-500">
                                    <Target size={30} strokeWidth={2} className="text-[#111111] group-hover:text-[#0D7DF2] transition-colors duration-500" />
                                </div>
                                <h3 className="text-[26px] md:text-[32px] font-medium text-[#111111] mb-5 leading-tight">Devenez la référence incontestée dans votre domaine.</h3>
                                <p className="text-[16px] md:text-[18px] font-medium text-slate-500 leading-relaxed max-w-lg">
                                    <strong className="text-slate-800">40% des clients</strong> choisissent le premier résultat naturel sur Google. Notre mission n'est pas de faire un site, mais d'imposer votre cabinet comme <strong className="text-slate-800">le choix évident et légitime</strong>.
                                </p>
                            </div>

                            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                                {/* Bento Item 2 : Petite Carte Supérieure (Span 5) */}
                                <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 group hover:-translate-y-1 hover:shadow-lg transition-all duration-500">
                                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 text-[#111111] border border-slate-100 group-hover:border-[#0D7DF2]/20 group-hover:text-[#0D7DF2] transition-colors duration-500">
                                        <Zap size={22} strokeWidth={2.5} />
                                    </div>
                                    <h3 className="text-[20px] font-bold text-[#111111] mb-3 leading-tight">Générateur de ROI</h3>
                                    <p className="text-[15px] font-medium text-slate-500 leading-relaxed">
                                        Nous indexons notre réussite sur la vôtre. Construisons une <strong className="text-slate-800">marque forte</strong> face à la concurrence.
                                    </p>
                                </div>

                                {/* Bento Item 3 : Petite Carte Inférieure Dark (Span 5) */}
                                <div className="bg-[#0B0F19] text-white rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] group hover:-translate-y-1 hover:shadow-2xl transition-all duration-500 relative overflow-hidden border border-[#0B0F19]">
                                    <div className="absolute top-0 right-0 w-48 h-48 bg-[#0D7DF2]/20 rounded-full blur-[50px] group-hover:bg-[#0D7DF2]/30 transition-colors duration-700"></div>
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 text-white border border-white/10 relative z-10 group-hover:bg-white/20 transition-colors duration-500">
                                        <Clock size={22} strokeWidth={2.5} />
                                    </div>
                                    <h3 className="text-[20px] font-bold text-white mb-3 leading-tight relative z-10">Facturez (enfin) votre temps</h3>
                                    <p className="text-[15px] font-medium text-slate-400 leading-relaxed relative z-10">
                                        L'implémentation de nos <strong className="text-white">outils IA</strong> automatise la paperasse et redonne rapidement du <strong className="text-white">temps facturable</strong>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center md:justify-start">
                            <a href={SITE_CONFIG.calendlyUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2 bg-[#0D7DF2] hover:bg-[#005AD2] text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all duration-300 shadow-[0_8px_20px_rgba(13,125,242,0.25)] hover:shadow-[0_12px_28px_rgba(13,125,242,0.35)] transform hover:-translate-y-1">
                                Réaliser un Audit Offert
                                <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>


                    {/* BLOC 2 : Focus SEO (Texte Gauche / UI Overlapping Droite) */}
                    <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12 relative z-10 pt-10">
                        {/* Left Text */}
                        <div className="w-full lg:w-[50%] flex flex-col items-start text-left">
                            <h2 className="text-[32px] md:text-[40px] lg:text-[46px] font-sans font-medium text-[#111111] leading-[1.05] tracking-tight mb-6 text-balance group">
                                <span className="relative inline-block px-4 py-1.5 bg-[#0D7DF2]/10 text-[#0D7DF2] rounded-2xl mr-2 rotate-2 rounded-tr-sm group-hover:-rotate-1 transition-transform duration-500">Positionnez</span><br className="max-md:hidden" /> durablement votre expertise sur Google.
                            </h2>
                            <p className="text-[16px] md:text-[17px] font-medium text-slate-500 leading-relaxed mb-10 text-balance">
                                <strong className="text-slate-800">80% de vos futurs clients recherchent leur expert en ligne</strong>. Notre ingénierie SEO place votre cabinet en tête des recherches organiques les plus qualifiées, là où se décident les gros dossiers.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 mb-10 w-full">
                                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex-1 hover:border-[#0D7DF2]/20 hover:shadow-md transition-all">
                                    <div className="w-10 h-10 rounded-xl bg-[#0D7DF2]/10 flex items-center justify-center mb-4 text-[#0D7DF2]">
                                        <MousePointerClick size={20} strokeWidth={2.5} />
                                    </div>
                                    <h4 className="text-[17px] font-bold text-[#111111] mb-2">Trafic ciblé</h4>
                                    <p className="text-[14px] text-slate-500 font-medium leading-relaxed">Attirez un flux constant de clients en besoin immédiat.</p>
                                </div>
                                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex-1 hover:border-[#0D7DF2]/20 hover:shadow-md transition-all">
                                    <div className="w-10 h-10 rounded-xl bg-[#0D7DF2]/10 flex items-center justify-center mb-4 text-[#0D7DF2]">
                                        <Star size={20} className="fill-[#0D7DF2]" strokeWidth={2.5} />
                                    </div>
                                    <h4 className="text-[17px] font-bold text-[#111111] mb-2">Prestige digital</h4>
                                    <p className="text-[14px] text-slate-500 font-medium leading-relaxed">La 1ère position Google assoit votre légitimité vis-à-vis des confrères.</p>
                                </div>
                            </div>

                            <Link to="/offres/audits-strategiques" className="group inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-black text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-lg transform hover:-translate-y-1">
                                Découvrir la méthode SEO
                                <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Right Mockup (3D Overlapping UI) */}
                        <div className="w-full lg:w-[45%] relative min-h-[450px] flex items-center justify-center group pointer-events-none mt-10 lg:mt-0">
                            <div className="absolute inset-0 bg-[#0D7DF2]/5 rounded-[3rem] -z-10 transform -rotate-6 scale-105 group-hover:-rotate-3 transition-transform duration-700 blur border border-[#0D7DF2]/10"></div>

                            {/* Base Google Result Card */}
                            <div className="relative w-full max-w-[380px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 p-7 lg:p-8 transform transition-transform duration-700 group-hover:-rotate-1 z-10">
                                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-50">
                                    <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100">
                                        <Search size={14} className="text-slate-400" />
                                    </div>
                                    <div className="h-2.5 w-32 bg-slate-100 rounded-full"></div>
                                </div>
                                <div className="text-[12px] text-slate-500 mb-2 flex items-center gap-2 font-medium">
                                    <span className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center"><Target size={8} className="text-[#0D7DF2]" /></span>
                                    votre-cabinet.fr
                                </div>
                                <h3 className="text-[18px] lg:text-[20px] font-medium text-[#1a0dab] leading-tight mb-2 font-serif group-hover:underline">Votre Cabinet - Avocats & Expertise</h3>
                                <p className="text-[14px] text-slate-600 leading-relaxed font-medium">Cabinet spécialisé. Défense de vos intérêts avec stratégie et rigueur. Prenez rendez-vous.</p>
                            </div>

                            {/* Floating Top Card (+240%) */}
                            <div className="absolute -top-4 -right-2 lg:-right-8 bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-slate-100 p-5 transform rotate-6 transition-transform duration-700 group-hover:rotate-12 hover:-translate-y-2 z-20 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 border border-emerald-100">
                                    <BarChart3 size={20} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Croissance Trafic</div>
                                    <div className="text-[20px] font-medium text-[#111111] tracking-tight">+240%</div>
                                </div>
                            </div>

                            {/* Floating Bottom Card (Position #1) */}
                            <div className="absolute -bottom-8 -left-2 lg:-left-8 bg-[#111111] text-white rounded-2xl shadow-[0_15px_40px_rgba(13,125,242,0.2)] p-5 transform -rotate-3 transition-transform duration-700 group-hover:-rotate-6 hover:-translate-y-1 z-20 flex items-center gap-4 border border-[#111111]">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#0D7DF2] border border-white/5">
                                    <Star className="fill-[#0D7DF2]" size={20} />
                                </div>
                                <div>
                                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Ranking Google</div>
                                    <div className="text-[20px] font-medium text-white tracking-tight">#1 Local</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ------------------------------------------------------------------ */}
            {/* PARTIE 3 : FOND SOMBRE (Acquisition 3D Dashboard)                */}
            {/* ------------------------------------------------------------------ */}
            <div className="bg-[#0B0F19] text-white pt-40 pb-24 md:pb-32 -mt-16 rounded-t-[2.5rem] md:rounded-t-[4rem] rounded-b-[2.5rem] md:rounded-b-[4rem] relative z-20 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                {/* Decorative Glow Sombre */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0D7DF2]/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-24 lg:gap-12">

                        {/* Left Mockup (Dashboard Isometric Dark) */}
                        <div className="w-full lg:w-[45%] relative group mt-10 lg:mt-0" style={{ perspective: '1200px' }}>
                            {/* Base Dashboard Layer (Isometric) */}
                            <div className="relative w-full max-w-[420px] mx-auto bg-[#1A1F30]/90 backdrop-blur-xl rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/10 p-8 transform transition-transform duration-1000 group-hover:-translate-y-4" style={{ transform: 'rotateX(15deg) rotateY(20deg) rotateZ(-2deg)', transformStyle: 'preserve-3d' }}>

                                {/* Dashboard Header Fake */}
                                <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
                                    <div className="flex gap-3 items-center">
                                        <div className="w-10 h-10 rounded-xl bg-[#0D7DF2]/20 flex items-center justify-center text-[#0D7DF2] border border-[#0D7DF2]/30">
                                            <BarChart3 size={18} />
                                        </div>
                                        <div className="h-5 w-28 bg-white/10 rounded"></div>
                                    </div>
                                    <div className="h-8 w-20 bg-white/5 rounded-full border border-white/5"></div>
                                </div>

                                {/* Dashboard Content Fake */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-white/5 h-24 rounded-2xl p-4 flex flex-col justify-end border border-white/5">
                                        <div className="h-2.5 w-12 bg-white/20 rounded mb-3"></div>
                                        <div className="h-4 w-20 bg-white/40 rounded"></div>
                                    </div>
                                    <div className="bg-[#0D7DF2]/10 h-24 rounded-2xl p-4 flex flex-col justify-end border border-[#0D7DF2]/20 relative overflow-hidden">
                                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0D7DF2]/20 to-transparent"></div>
                                        <div className="h-2.5 w-16 bg-[#0D7DF2]/40 rounded mb-3 relative z-10"></div>
                                        <div className="h-4 w-12 bg-[#0D7DF2] rounded relative z-10"></div>
                                    </div>
                                </div>

                                {/* Floating Notification (Z-translated "Popping out") */}
                                <div className="absolute -right-4 md:-right-12 -bottom-16 w-[320px] bg-white text-slate-800 rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.9)] border border-slate-100 border-b-4 border-b-[#0D7DF2] p-6 
                                                transform transition-all duration-1000 group-hover:-translate-y-6 z-50" style={{ transform: 'translateZ(120px)' }}>

                                    {/* Subtile ping animation for "live" effect */}
                                    <div className="absolute -top-2 -right-2">
                                        <span className="relative flex h-5 w-5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D7DF2] opacity-75 duration-1000"></span>
                                            <span className="relative inline-flex rounded-full h-5 w-5 bg-[#0D7DF2] border-2 border-white"></span>
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#0D7DF2] border border-slate-100 shadow-sm">
                                            <Bell size={18} />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Lead Commercial</div>
                                            <div className="text-[14px] font-medium text-[#111111]">Match Honoraires Cibles</div>
                                        </div>
                                    </div>
                                    <p className="text-[13px] font-medium text-slate-600 leading-relaxed mb-4">
                                        Nouveau dirigeant qualifié via campagne premium. Le filtrage automatique de l'IA a validé la requête.
                                    </p>
                                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider">
                                        <span className="text-[#0D7DF2]">Acquisition RE7SET</span>
                                        <span className="text-slate-400 flex items-center gap-1"><Clock size={10} /> À l'instant</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Text (Dark Mode) */}
                        <div className="w-full lg:w-[50%] flex flex-col items-start text-left relative z-20">
                            <h2 className="text-[32px] md:text-[40px] lg:text-[46px] font-sans font-medium text-white leading-[1.05] tracking-tight mb-6 text-balance group">
                                Acquérez de <span className="relative inline-block px-4 py-1.5 bg-white/5 text-white rounded-2xl ml-1 rotate-1 rounded-bl-sm border border-white/10 group-hover:bg-[#0D7DF2]/20 transition-colors duration-500">bons dossiers</span> avec certitude.
                            </h2>
                            <p className="text-[16px] md:text-[17px] font-medium text-slate-400 leading-relaxed mb-10 text-balance">
                                Ne dépendez plus de l'aléatoire. Notre ingénierie d'acquisition sur-mesure vous garantit l'entrée régulière de mandats qualifiés, avec un <strong className="text-white">retour sur investissement mesuré</strong>.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 mb-12 w-full">
                                <div className="bg-[#1A1F30]/50 backdrop-blur border border-white/10 hover:border-white/20 hover:bg-[#1A1F30] transition-colors duration-300 rounded-2xl p-6 flex-1">
                                    <div className="w-10 h-10 rounded-xl bg-[#0D7DF2]/20 flex items-center justify-center mb-4 text-[#0D7DF2]">
                                        <Clock size={20} strokeWidth={2.5} />
                                    </div>
                                    <h4 className="text-[17px] font-bold text-white mb-2">Traction immédiate</h4>
                                    <p className="text-[14px] text-slate-400 font-medium leading-relaxed">Les Ads vous positionnent en tête des requêtes urgentes dès le premier mois.</p>
                                </div>
                                <div className="bg-[#1A1F30]/50 backdrop-blur border border-white/10 hover:border-white/20 hover:bg-[#1A1F30] transition-colors duration-300 rounded-2xl p-6 flex-1">
                                    <div className="w-10 h-10 rounded-xl bg-[#0D7DF2]/20 flex items-center justify-center mb-4 text-[#0D7DF2]">
                                        <Zap size={20} strokeWidth={2.5} />
                                    </div>
                                    <h4 className="text-[17px] font-bold text-white mb-2">Focus Ultra-spécialisé</h4>
                                    <p className="text-[14px] text-slate-400 font-medium leading-relaxed">Ne payez que pour les dossiers qui correspondent à votre cœur d'expertise.</p>
                                </div>
                            </div>

                            {/* Glow Button Dark */}
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#0D7DF2] to-purple-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-700"></div>
                                <a href="/#contact" className="relative inline-flex items-center justify-center gap-2 bg-[#1A1F30] hover:bg-[#111111] border border-white/10 text-white px-8 py-5 rounded-full font-bold text-[16px] transition-all transform hover:-translate-y-1">
                                    Créer ma Machine d'Acquisition
                                    <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
