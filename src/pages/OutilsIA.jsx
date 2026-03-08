import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Cpu, Zap, Database, Lock, Globe, Sparkles, ArrowRight, Bot } from 'lucide-react';
import { SplineScene } from '../components/ui/splite';
import { Card } from '../components/ui/card';
import { Spotlight } from '../components/ui/spotlight';

export default function OutilsIA() {
    const canvasRef = useRef(null);

    useEffect(() => {
        // Text Entrance Animations
        gsap.fromTo('.ia-anim',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
        );

        // Floating Badges Animation
        gsap.to('.float-badge-ia-1', { y: -15, rotation: -2, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' });
        gsap.to('.float-badge-ia-2', { y: 15, rotation: 2, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.5 });
        gsap.to('.float-badge-ia-3', { x: -10, y: 10, duration: 3.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 });

        // Complex Neural Network Animation (Three interconnected glowing nodes)
        const tl = gsap.timeline({ repeat: -1, yoyo: true });

        // Node 1 pulsing
        tl.to('.node-1', { scale: 1.2, opacity: 1, duration: 1.5, ease: 'sine.inOut' }, 0)
            .to('.node-1-glow', { scale: 2.5, opacity: 0.8, duration: 1.5, ease: 'sine.inOut' }, 0);

        // Node 2 pulsing
        tl.to('.node-2', { scale: 1.3, opacity: 1, duration: 1.2, ease: 'sine.inOut' }, 0.5)
            .to('.node-2-glow', { scale: 2.8, opacity: 0.6, duration: 1.2, ease: 'sine.inOut' }, 0.5);

        // Node 3 pulsing
        tl.to('.node-3', { scale: 1.1, opacity: 1, duration: 1.8, ease: 'sine.inOut' }, 1)
            .to('.node-3-glow', { scale: 2.2, opacity: 0.7, duration: 1.8, ease: 'sine.inOut' }, 1);

        // Data streams connecting nodes
        gsap.fromTo('.stream-path',
            { strokeDashoffset: 100 },
            { strokeDashoffset: 0, duration: 2, repeat: -1, ease: 'linear' }
        );

    }, []);

    const tools = [
        {
            icon: <Bot className="w-6 h-6 text-purple-400" />,
            title: "Assistants Juridiques IA",
            desc: "Déploiement d'agents conversationnels entraînés sur vos jurisprudences et dossiers internes pour une recherche documentaire instantanée.",
            color: "purple"
        },
        {
            icon: <Cpu className="w-6 h-6 text-cyan-400" />,
            title: "Génération d'Actes",
            desc: "Automatisation de la rédaction de contrats et conclusions récurrents via des modèles d'IA générative sécurisés.",
            color: "cyan"
        },
        {
            icon: <Database className="w-6 h-6 text-blue-400" />,
            title: "Analyse des Données",
            desc: "Outils de text-mining pour extraire les clauses clés de centaines de contrats en quelques minutes lors d'audits d'acquisition.",
            color: "blue"
        }
    ];

    const benefits = [
        { icon: <Zap className="w-5 h-5 text-yellow-400" />, text: "Gain de temps (jusqu'à -40% sur la recherche)" },
        { icon: <Lock className="w-5 h-5 text-emerald-400" />, text: "Sécurité absolue des données (Hébergement souverain)" },
        { icon: <Globe className="w-5 h-5 text-blue-400" />, text: "Veille juridique multilingue en temps réel" }
    ];

    return (
        <main className="relative bg-[#050505] text-white min-h-screen overflow-x-clip font-sans">

            {/* Immersive Deep Background Glows */}
            <div className="absolute top-0 left-1/4 w-[800px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen mix-blend-lighten"></div>
            <div className="absolute top-20 right-1/4 w-[600px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen mix-blend-lighten"></div>

            {/* HERO SECTION */}
            <section className="relative z-10 pt-32 pb-24 px-6 md:px-12 flex flex-col items-center">
                <Card className="w-full max-w-7xl h-[650px] md:h-[700px] bg-[#0A0A0A]/40 border-white/10 relative overflow-hidden rounded-3xl backdrop-blur-md shadow-2xl">
                    <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(168,85,247,0.15)" />

                    <div className="flex flex-col lg:flex-row h-full">
                        {/* Left content */}
                        <div className="flex-1 p-8 md:p-14 relative z-10 flex flex-col justify-center items-start text-left">

                            {/* Floating Tech Badges (adapted for left alignment) */}
                            <div className="flex flex-wrap gap-3 mb-8">
                                <div className="bg-[#111]/80 border border-purple-500/20 px-3 py-1.5 rounded-lg flex items-center gap-2 text-[10px] md:text-xs text-purple-100 shadow-[0_0_20px_rgba(168,85,247,0.15)] font-mono tracking-widest uppercase">
                                    <Sparkles size={14} className="text-purple-400" /> IA Générative
                                </div>
                                <div className="bg-[#111]/80 border border-cyan-500/20 px-3 py-1.5 rounded-lg flex items-center gap-2 text-[10px] md:text-xs text-cyan-100 shadow-[0_0_20px_rgba(6,182,212,0.15)] font-mono tracking-widest uppercase">
                                    <Database size={14} className="text-cyan-400" /> LLMs Souverains
                                </div>
                            </div>

                            <h1 className="ia-anim text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-medium leading-[1.05] tracking-tight mb-6">
                                L'Intelligence Artificielle <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500">
                                    au service du Droit
                                </span>
                            </h1>

                            <p className="ia-anim text-base md:text-lg text-white/50 mb-10 max-w-xl leading-relaxed">
                                Découvrez notre écosystème d'outils et de solutions sur mesure conçus pour décupler la productivité de votre cabinet tout en garantissant le secret professionnel.
                            </p>

                            <a href="#outils" className="ia-anim relative inline-flex group items-center justify-center px-8 py-4 font-medium text-white transition-all duration-300 bg-[#111] border border-white/10 rounded-xl hover:bg-white/[0.05] hover:border-white/20 hover:scale-105 overflow-hidden">
                                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                                <span className="relative z-10 flex items-center gap-2">Découvrir les Outils <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
                            </a>
                        </div>

                        {/* Right content (Spline) */}
                        <div className="flex-1 relative min-h-[300px] lg:min-h-full w-full">
                            {/* Gradient mask to gracefully blend the 3D scene edges */}
                            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[rgba(10,10,10,0.6)] to-transparent z-10 pointer-events-none hidden lg:block"></div>
                            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[rgba(10,10,10,0.4)] to-transparent z-10 pointer-events-none hidden lg:block"></div>
                            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[rgba(10,10,10,0.4)] to-transparent z-10 pointer-events-none hidden lg:block"></div>

                            <SplineScene
                                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </Card>
            </section>

            {/* Fading bottom edge of the hero */}
            <div className="w-full h-40 bg-gradient-to-b from-transparent to-[#0A0A0A] relative z-20 -mt-20"></div>

            {/* TOOLS GRID SECTION */}
            <section id="outils" className="relative z-30 bg-[#0A0A0A] py-24 px-6 md:px-12 border-t border-white/5">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-sans font-medium text-white mb-6 tracking-tight">
                            Des capacités sur-mesure pour votre <span className="text-purple-400">expertise</span>.
                        </h2>
                        <p className="text-white/50 text-lg max-w-2xl mx-auto">
                            Nous n'inventons pas le droit, nous accélérons vos processus en intégrant les derniers modèles d'IA générative directement dans votre environnement de travail.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 relative z-10">
                        {tools.map((tool, index) => (
                            <div key={index} className="bg-[#111] rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col h-full group relative overflow-hidden">
                                {/* Soft glow on hover matching tool color */}
                                <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none 
                                    ${tool.color === 'purple' ? 'bg-purple-500' : tool.color === 'cyan' ? 'bg-cyan-500' : 'bg-blue-500'}`}>
                                </div>

                                <div className={`w-14 h-14 rounded-xl bg-[#050505] border border-white/5 flex items-center justify-center mb-8 relative z-10 shadow-lg`}>
                                    {tool.icon}
                                </div>

                                <h3 className="text-2xl font-bold font-sans text-white mb-4 group-hover:text-white transition-colors relative z-10">{tool.title}</h3>
                                <p className="text-sm text-white/50 mb-8 leading-relaxed flex-grow relative z-10">{tool.desc}</p>

                                <div className="mt-auto relative z-10">
                                    <button className={`flex items-center gap-2 text-sm font-medium transition-colors
                                        ${tool.color === 'purple' ? 'text-purple-400 hover:text-purple-300' :
                                            tool.color === 'cyan' ? 'text-cyan-400 hover:text-cyan-300' :
                                                'text-blue-400 hover:text-blue-300'}`}>
                                        En savoir plus <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Trust / Benefits Bar */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-8 bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/5 rounded-2xl backdrop-blur-sm">
                        {benefits.map((belief, i) => (
                            <div key={i} className="flex items-center gap-4 text-white/70">
                                <div className="p-2 bg-black/40 rounded-lg border border-white/5 shadow-inner">
                                    {belief.icon}
                                </div>
                                <span className="text-sm font-medium">{belief.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Powered By */}
                    <div className="mt-20 text-center">
                        <span className="inline-flex items-center gap-2 text-xs text-white/40 tracking-widest font-mono uppercase bg-white/[0.02] border border-white/5 px-5 py-2.5 rounded-full hover:bg-white/[0.05] hover:text-white/70 transition-colors duration-300">
                            <Sparkles className="w-3.5 h-3.5" />
                            Powered by <strong className="text-white/80 font-bold ml-1">Agentis</strong>
                        </span>
                    </div>

                </div>
            </section>

        </main>
    );
}
