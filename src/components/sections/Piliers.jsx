import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Piliers() {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            const cards = sectionRef.current.querySelectorAll('.pilier-card');

            // Scroll-in animation per card
            cards.forEach((card) => {
                const elements = card.querySelectorAll('.animate-elem');
                const visual = card.querySelector('.animate-visual');

                gsap.set(elements, { y: 30, opacity: 0 });
                gsap.set(visual, { x: 30, opacity: 0 });

                gsap.timeline({
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                })
                    .to(elements, { y: 0, opacity: 1, duration: 0.9, stagger: 0.08, ease: 'power3.out' }, 0)
                    .to(visual, { x: 0, opacity: 1, duration: 1.1, ease: 'power3.out' }, 0.15);
            });

            // Single matchMedia instance for all cards (évite les conflits de listeners)
            const mm = gsap.matchMedia();

            mm.add("(min-width: 1024px)", () => {
                const cleanups = [];
                cards.forEach((card) => {
                    const onEnter = () => card.classList.add('is-active');
                    const onLeave = () => card.classList.remove('is-active');
                    card.addEventListener('mouseenter', onEnter);
                    card.addEventListener('mouseleave', onLeave);
                    cleanups.push(() => {
                        card.removeEventListener('mouseenter', onEnter);
                        card.removeEventListener('mouseleave', onLeave);
                        card.classList.remove('is-active');
                    });
                });
                return () => cleanups.forEach(fn => fn());
            });

            mm.add("(max-width: 1023px)", () => {
                const triggers = cards.map((card) =>
                    ScrollTrigger.create({
                        trigger: card,
                        start: 'top 55%',
                        end: 'bottom 45%',
                        onEnter: () => card.classList.add('is-active'),
                        onEnterBack: () => card.classList.add('is-active'),
                        onLeave: () => card.classList.remove('is-active'),
                        onLeaveBack: () => card.classList.remove('is-active'),
                    })
                );
                return () => triggers.forEach(st => st.kill());
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const services = [
        {
            badge: "DIAGNOSTICS",
            title: "Audits & Diagnostic Stratégique",
            link: "/offres/audits-strategiques",
            description: "Nous radiographions votre cabinet : positionnement, SEO, potentiel IA. Un état des lieux honnête pour savoir exactement où agir.",
            tags: ["Positionnement", "SEO & GEO", "Potentiel IA"],
            visualType: "dashboard",
            buttonHoverColor: "hover:bg-primary"
        },
        {
            badge: "VISIBILITÉ SEO & GEO",
            title: "Accompagnement Visibilité Digitale",
            link: "/offres/visibilite-seo",
            description: "Nous déployons et pilotons votre visibilité locale pour que votre cabinet apparaisse en premier — quand vos futurs clients cherchent votre expertise.",
            tags: ["Refonte site web", "SEO & Google Ads", "Suivi mensuel"],
            visualType: "abstract",
            buttonHoverColor: "hover:bg-cyan-600"
        },
        {
            badge: "IA POUR AVOCATS",
            title: "Outils & Solutions IA",
            link: "/outils-ia",
            description: "Nous automatisons vos tâches répétitives et intégrons des assistants IA dans vos workflows pour libérer du temps — et le réinvestir dans ce qui compte vraiment.",
            tags: ["Outils IA sur-mesure", "Automatisation", "Formation"],
            visualType: "components",
            buttonHoverColor: "hover:bg-purple-600"
        }
    ];

    return (
        <section id="services" className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-transparent" ref={sectionRef}>
            <div className="max-w-6xl mx-auto flex flex-col gap-8">

                {/* Section Header */}
                <div className="mb-12 max-w-2xl">
                    <span className="text-sm uppercase tracking-widest font-mono text-muted mb-4 block">
                        Nos services
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-sans font-black text-foreground leading-[1.1] tracking-tight m-0">
                        <span className="block mb-1">L'équation parfaite pour</span>
                        <span className="block text-[#0D7DF2]">votre croissance.</span>
                    </h2>
                </div>

                {/* Cards Container */}
                <div className="flex flex-col gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="pilier-card w-full bg-white border border-black/5 rounded-2xl md:rounded-[2rem] overflow-hidden flex flex-col lg:flex-row group transition-[transform,opacity,box-shadow,border-color] duration-500 [&.is-active]:border-primary/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] [&.is-active]:shadow-[0_0_40px_-10px_rgba(37,99,235,0.4)] relative">

                            {/* Left Content Area */}
                            <div className="p-8 md:p-14 flex flex-col justify-center w-full lg:w-[55%] xl:w-[50%] z-10 relative">
                                <span className="animate-elem text-xs font-mono font-medium text-primary uppercase tracking-widest mb-6 block">
                                    {service.badge}
                                </span>

                                <h3 className="animate-elem text-2xl md:text-3xl font-sans font-medium text-foreground mb-6 leading-tight tracking-tight">
                                    {service.title}
                                </h3>

                                <p className="animate-elem text-muted text-base leading-relaxed mb-8 max-w-lg font-sans">
                                    {service.description}
                                </p>

                                <ul className="animate-elem flex flex-wrap gap-x-6 gap-y-4 mb-12">
                                    {service.tags.map((tag, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <Check className="text-primary flex-shrink-0" size={18} strokeWidth={2.5} />
                                            <span className="text-foreground/90 text-sm font-medium">{tag}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="animate-elem mt-auto">
                                    <Link to={service.link} className={`inline-block bg-[#1A1A1A] text-white ${service.buttonHoverColor} transition-colors duration-300 font-medium px-8 py-3.5 rounded text-center cursor-pointer shadow-md`}>
                                        Découvrir
                                    </Link>
                                </div>
                            </div>

                            {/* Right Visual Area */}
                            <div className={`animate-visual w-full lg:w-[45%] xl:w-[50%] relative overflow-hidden min-h-[300px] lg:min-h-full flex items-center justify-center p-8 bg-gray-50`}>
                                {/* Soft gradient glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>

                                {/* Premium Visuals based on visualType */}
                                {/* 1. Full Dashboard Visual (Image 1) */}
                                {service.visualType === 'dashboard' && (
                                    <div className="relative w-full h-[400px] flex items-center justify-center group-[.is-active]:scale-[1.03] transition-transform duration-700 will-change-transform">
                                        {/* Static ambient glow (no animation = no GPU thrash) */}
                                        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-primary/10 rounded-full blur-[50px] opacity-0 group-[.is-active]:opacity-100 transition-opacity duration-700"></div>

                                        {/* Massive Dashboard UI Skeleton */}
                                        <div className="absolute w-[115%] max-w-[500px] aspect-[16/10] bg-white/95 backdrop-blur-2xl border border-black/[0.08] rounded-2xl md:rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden transform md:-rotate-2 group-[.is-active]:rotate-0 group-[.is-active]:-translate-y-4 transition-[transform,opacity,box-shadow,border-color] duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] z-10 group-[.is-active]:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.2)]">
                                            {/* Window Header */}
                                            <div className="h-10 md:h-12 bg-gray-50/80 border-b border-black/[0.05] flex items-center px-4 justify-between shrink-0">
                                                <div className="flex gap-2">
                                                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-400/90"></div>
                                                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-amber-400/90"></div>
                                                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-400/90"></div>
                                                </div>
                                                <div className="h-4 w-1/4 bg-white rounded shadow-sm border border-black/[0.05] hidden sm:block"></div>
                                            </div>
                                            {/* Window Body */}
                                            <div className="flex-1 flex p-4 gap-4 bg-gray-50/20">
                                                {/* Sidebar Mock */}
                                                <div className="w-1/3 flex flex-col gap-3">
                                                    <div className="h-24 bg-gradient-to-b from-primary/5 to-transparent rounded-xl border border-primary/10 relative overflow-hidden group-[.is-active]:border-primary/20 transition-colors duration-1000">
                                                        <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                                                            <path d="M0,100 L0,50 Q25,30 50,60 T100,40 L100,100 Z" fill="rgba(37,99,235,0.1)"></path>
                                                            <path d="M0,100 L0,50 Q25,30 50,60 T100,40" fill="none" stroke="rgba(37,99,235,0.5)" strokeWidth="2" className="transform -translate-y-2 group-[.is-active]:translate-y-0 transition-transform duration-1000"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="flex-1 bg-white rounded-xl border border-black/[0.03] p-3 flex flex-col gap-3 shadow-sm relative overflow-hidden">
                                                        <div className="h-2 w-1/2 bg-black/10 rounded-full"></div>
                                                        <div className="h-2 w-3/4 bg-black/5 rounded-full"></div>
                                                        <div className="h-2 w-2/3 bg-black/5 rounded-full"></div>
                                                        <div className="absolute inset-x-0 bottom-0 h-1.5 bg-secondary">
                                                            <div className="h-full bg-primary/80 w-0 group-[.is-active]:w-[85%] transition-[width] duration-[1500ms] ease-out delay-300"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Main Content Mock */}
                                                <div className="flex-1 flex flex-col gap-4">
                                                    <div className="flex gap-3 h-20">
                                                        <div className="flex-1 bg-white rounded-xl border border-black/[0.05] shadow-sm p-3 flex flex-col justify-center transform group-[.is-active]:-translate-y-1 transition-transform duration-700">
                                                            <span className="text-[10px] text-muted font-medium mb-1 uppercase tracking-wider">Acquisition</span>
                                                            <span className="text-xl md:text-2xl font-serif text-foreground font-bold">+184<span className="text-sm text-muted">%</span></span>
                                                        </div>
                                                        <div className="flex-1 bg-white rounded-xl border border-black/[0.05] shadow-sm p-3 flex flex-col justify-center transform group-[.is-active]:-translate-y-1 transition-transform duration-700 delay-100">
                                                            <span className="text-[10px] text-muted font-medium mb-1 uppercase tracking-wider">Conversions</span>
                                                            <span className="text-xl md:text-2xl font-serif text-primary font-bold">x3.2</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 bg-white rounded-xl border border-black/[0.03] shadow-sm p-3 flex items-end gap-2 isolate relative overflow-hidden">
                                                        {[30, 50, 45, 75, 55, 85, 100].map((h, i) => (
                                                            <div key={i} className="flex-1 bg-secondary rounded-t-sm relative h-full overflow-hidden">
                                                                <div className="absolute bottom-0 w-full bg-primary rounded-t-sm transform translate-y-full group-[.is-active]:translate-y-0 transition-transform duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)]" style={{ height: `${h}%`, transitionDelay: `${i * 50 + 200}ms` }}></div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Floating Glass Badge (Pops in on hover) */}
                                        <div className="absolute -right-4 md:-right-8 top-1/4 bg-white/90 backdrop-blur-xl border border-black/[0.08] p-3 md:p-4 rounded-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] flex items-center gap-3 transform translate-x-12 opacity-0 group-[.is-active]:translate-x-0 group-[.is-active]:opacity-100 transition-[transform,opacity,box-shadow,border-color] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] delay-[500ms] z-20">
                                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 shadow-inner">
                                                <Check size={18} className="drop-shadow-sm" />
                                            </div>
                                            <div>
                                                <div className="text-xs md:text-sm font-bold text-foreground">Stratégie Active</div>
                                                <div className="text-[10px] md:text-xs text-muted">Moteur SEO déployé</div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* 2. Cascading Layers Visual (Image 2) */}
                                {service.visualType === 'components' && (
                                    <div className="relative w-full h-[400px] flex items-center justify-center perspective-[2000px] will-change-transform">
                                        <div className="relative w-full max-w-xs md:max-w-sm h-full transform-style-preserve-3d transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-[.is-active]:rotate-y-[-10deg] group-[.is-active]:rotate-x-[10deg]">

                                            {/* Ambient glow — static, no animate-pulse */}
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[60px] opacity-0 group-[.is-active]:opacity-100 transition-opacity duration-700"></div>

                                            {/* Layer 3 (Bottom/Back) */}
                                            <div className="absolute left-6 right-6 top-[45%] bg-white/40 backdrop-blur-sm border border-black/[0.05] p-5 rounded-2xl shadow-lg transform translate-y-0 scale-90 opacity-0 group-[.is-active]:translate-y-24 group-[.is-active]:opacity-40 group-[.is-active]:scale-80 transition-[transform,opacity,box-shadow,border-color] duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)]">
                                                <div className="h-4 w-1/3 bg-black/10 rounded mb-4"></div>
                                                <div className="h-2 w-full bg-black/5 rounded mb-2"></div>
                                                <div className="h-2 w-4/5 bg-black/5 rounded"></div>
                                            </div>

                                            {/* Layer 2 (Middle) */}
                                            <div className="absolute left-3 right-3 top-[35%] bg-white/80 backdrop-blur-lg border border-black/[0.08] p-5 rounded-2xl shadow-xl transform translate-y-0 scale-95 opacity-50 group-[.is-active]:translate-y-8 group-[.is-active]:opacity-100 group-[.is-active]:scale-95 transition-[transform,opacity,box-shadow,border-color] duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] z-10">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center text-lg">⚙️</div>
                                                        <div className="font-bold text-sm text-foreground">Optimisation Technique</div>
                                                    </div>
                                                    <span className="text-[10px] font-mono text-primary font-bold border border-primary/20 px-2 py-1 rounded bg-primary/5">EN COURS</span>
                                                </div>
                                                <div className="flex gap-2">
                                                    <div className="w-1/3 h-1.5 bg-green-500 rounded-full shadow-sm"></div>
                                                    <div className="w-1/3 h-1.5 bg-amber-500 rounded-full shadow-sm relative overflow-hidden">
                                                        <div className="absolute inset-0 bg-white/30 animate-[translateX_2s_infinite]"></div>
                                                    </div>
                                                    <div className="w-1/3 h-1.5 bg-black/10 rounded-full"></div>
                                                </div>
                                            </div>

                                            {/* Layer 1 (Top/Front) */}
                                            <div className="absolute left-0 right-0 top-[22%] bg-white/95 backdrop-blur-2xl border border-black/[0.08] p-6 md:p-8 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transform translate-y-0 group-[.is-active]:-translate-y-12 group-[.is-active]:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.25)] transition-[transform,opacity,box-shadow,border-color] duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] z-20">

                                                {/* Header row */}
                                                <div className="flex items-center justify-between mb-8">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-14 h-14 rounded-[1.25rem] bg-[#0A0A0A] flex items-center justify-center shadow-md">
                                                            <span className="text-2xl">⚡</span>
                                                        </div>
                                                        <div>
                                                            <div className="text-xl md:text-2xl font-bold text-foreground font-sans tracking-tight">IA Automatisée</div>
                                                            <div className="text-sm text-foreground/50 font-medium">Workflows synchronisés</div>
                                                        </div>
                                                    </div>
                                                    {/* Toggle Switch */}
                                                    <div className="w-14 h-8 bg-[#22C55E] rounded-full relative shadow-inner cursor-pointer shrink-0">
                                                        <div className="absolute right-1 top-1 w-6 h-6 rounded-full bg-white shadow-sm transition-transform duration-500 delay-300"></div>
                                                    </div>
                                                </div>

                                                {/* Gain de temps Box */}
                                                <div className="bg-transparent rounded-2xl p-5 border border-black/[0.05]">
                                                    <div className="flex justify-between items-center mb-4">
                                                        <span className="text-xs md:text-sm font-mono text-muted uppercase tracking-[0.15em] font-medium">Gain de temps</span>
                                                        <span className="text-xs md:text-sm font-mono text-[#16A34A] font-bold bg-[#DCFCE7]/60 px-3 py-1.5 rounded-md border border-[#86EFAC]/60">
                                                            -85% par semaine
                                                        </span>
                                                    </div>
                                                    {/* Progress bar line */}
                                                    <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                                                        <div className="h-full bg-primary w-0 rounded-full group-[.is-active]:w-[85%] transition-[width] duration-[1500ms] ease-[cubic-bezier(0.23,1,0.32,1)] delay-300"></div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                )}

                                {/* 3. Abstract Network Visual (Image 3) */}
                                {service.visualType === 'abstract' && (
                                    <div className="relative flex items-center justify-center w-full h-[400px] z-10 group-[.is-active]:scale-110 transition-transform duration-[1500ms] ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform">
                                        {/* Massive ambient center glows */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-gradient-to-tr from-primary/10 via-transparent to-cyan-400/5 rounded-full blur-[80px] group-[.is-active]:opacity-100 opacity-40 transition-opacity duration-1000"></div>

                                        {/* Extremely large outer radar ring */}
                                        <div className="absolute w-[350px] md:w-[450px] h-[350px] md:h-[450px] rounded-full border border-black/[0.02] flex items-center justify-center pointer-events-none">
                                            <div className="w-full h-full border border-primary/10 rounded-full border-dashed animate-[spin_40s_linear_infinite] opacity-30 group-[.is-active]:opacity-100 transition-opacity duration-1000"></div>
                                        </div>

                                        {/* Satellite Nodes Ring 1 */}
                                        <div className="absolute w-[280px] h-[280px] animate-[spin_25s_linear_infinite]">
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm border border-primary/10 rounded-xl shadow-[0_10px_20px_rgba(37,99,235,0.15)] flex items-center justify-center -rotate-[spin_25s_linear_infinite_reverse]">
                                                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                                            </div>
                                            <div className="absolute bottom-1/4 right-0 translate-x-1/2 translate-y-1/2 w-6 h-6 bg-white border border-cyan-400/20 rounded-full shadow-[0_10px_15px_rgba(34,211,238,0.2)] flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                                            </div>
                                        </div>

                                        {/* Satellite Nodes Ring 2 */}
                                        <div className="absolute w-[180px] h-[180px] animate-[spin_15s_linear_infinite_reverse]">
                                            <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-5 h-5 bg-white border border-black/10 rounded-full shadow-md flex items-center justify-center">
                                                <div className="w-1 h-1 bg-foreground rounded-full"></div>
                                            </div>
                                        </div>

                                        {/* Middle solid structural ring */}
                                        <div className="absolute w-[180px] h-[180px] rounded-full border-[1.5px] border-primary/20 shadow-[0_0_30px_rgba(37,99,235,0.05)] group-[.is-active]:border-primary/40 group-[.is-active]:shadow-[0_0_50px_rgba(37,99,235,0.2)] group-[.is-active]:scale-[1.15] transition-[transform,opacity,box-shadow,border-color] duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] delay-100"></div>

                                        {/* Core Element - The Brain */}
                                        <div className="relative w-32 h-32 rounded-3xl bg-white/95 backdrop-blur-2xl border border-black/[0.08] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] group-[.is-active]:shadow-[0_30px_60px_-10px_rgba(37,99,235,0.25)] flex items-center justify-center z-10 transform md:rotate-12 group-[.is-active]:rotate-0 group-[.is-active]:scale-110 transition-[transform,opacity,box-shadow,border-color] duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform">
                                            {/* Reflection glint */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent rounded-3xl opacity-80 mix-blend-overlay"></div>

                                            <div className="text-4xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/60 relative z-10">R7</div>

                                            {/* Energy beams emitted from core */}
                                            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent scale-[2] transform -rotate-[30deg] group-[.is-active]:rotate-0 opacity-0 group-[.is-active]:opacity-100 transition-[transform,opacity,box-shadow,border-color] duration-1000"></div>
                                            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent scale-[2] transform -rotate-[30deg] group-[.is-active]:rotate-0 opacity-0 group-[.is-active]:opacity-100 transition-[transform,opacity,box-shadow,border-color] duration-1000 delay-100"></div>
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
