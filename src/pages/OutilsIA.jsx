import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Sparkles, ArrowRight, Bot, Smartphone, Brain, Search, FileSignature, PenTool, Lock, Shield, Users, Check } from 'lucide-react';
import { SplineScene } from '../components/ui/splite';
import { Card } from '../components/ui/card';
import { Spotlight } from '../components/ui/spotlight';
import { usePageMeta } from '../hooks/usePageMeta';

export default function OutilsIA() {
    usePageMeta(
        'Outils & Solutions IA | RE7SET — Intelligence Artificielle pour Avocats',
        'Agents IA multi-canaux, standard téléphonique IA, automatisation emails et réseaux sociaux. RE7SET intègre et configure les meilleurs outils IA pour votre cabinet.'
    );
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
            icon: <Search className="w-6 h-6 text-purple-400" />,
            title: "Recherche Juridique Augmentée",
            subtitle: "JURISPRUDENCE & DOCTRINE EN SECONDES",
            desc: "Un LLM sur-mesure entraîné sur vos abonnements juridiques. Vos collaborateurs trouvent la réponse exacte et sourcée en un clin d'œil.",
            color: "purple",
            number: "01"
        },
        {
            icon: <FileSignature className="w-6 h-6 text-cyan-400" />,
            title: "Revue de Contrats",
            subtitle: "DÉTECTION DES RISQUES AUTOMATISÉE",
            desc: "Analysez des centaines de pages. L'IA extrait les clauses clés, identifie les anomalies et valide la conformité selon vos standards (SPA, Baux, CGV).",
            color: "cyan",
            number: "02"
        },
        {
            icon: <PenTool className="w-6 h-6 text-blue-400" />,
            title: "Rédaction Assistée",
            subtitle: "PREMIERS JETS STRUCTURÉS",
            desc: "Générez la trame de vos conclusions, mémos ou mises en demeure en vous basant sur la jurisprudence et vos propres modèles de cabinet.",
            color: "blue",
            number: "03"
        },
        {
            icon: <Brain className="w-6 h-6 text-purple-400" />,
            title: "Capitalisation du Savoir",
            subtitle: "MÉMOIRE DU CABINET ACCESSIBLE",
            desc: "Centralisez l'historique de vos dossiers. Posez une question complexe, l'IA retrouve les arguments que vous aviez utilisés dans une affaire similaire.",
            color: "purple",
            number: "04"
        },
        {
            icon: <Smartphone className="w-6 h-6 text-cyan-400" />,
            title: "Filtre Client & Intake",
            subtitle: "QUALIFICATION INTELLIGENTE 24/7",
            desc: "Un agent IA sur votre site qualifie les demandes entrantes (domaine du droit, urgence, budget) avant de vous les transférer. Fini les appels hors-sujet.",
            color: "cyan",
            number: "05"
        },
        {
            icon: <Bot className="w-6 h-6 text-blue-400" />,
            title: "Automatisation Administrative",
            subtitle: "LA FIN DU TRAVAIL RÉPÉTITIF",
            desc: "Extraction automatique de la facturation, génération de notes d'honoraires, et intégration directe dans votre logiciel de gestion (Septeo, Secib, etc).",
            color: "blue",
            number: "06"
        }
    ];

    const benefits = [
        { icon: <Lock className="w-5 h-5 text-white/70" />, text: "Sécurité & Confidentialité absolues" },
        { icon: <Shield className="w-5 h-5 text-white/70" />, text: "Zéro Hallucination & Sourçage RAG" },
        { icon: <Users className="w-5 h-5 text-white/70" />, text: "Interfaces pensées pour les avocats" }
    ];

    return (
        <main className="relative bg-[#050505] text-white min-h-screen overflow-x-clip font-sans">

            {/* Cinematic Background Glow matching Diagnostic */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

            {/* HERO SECTION FULL PAGE */}
            <section className="relative z-10 w-full min-h-screen flex items-center justify-center border-b border-white/5 overflow-hidden pt-40 pb-20 px-6 md:px-12">

                {/* Full Screen Background 3D Robot */}
                <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                    {/* Gradients to ensure text readability globally */}
                    <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>

                    {/* The 3D Robot Centered Background */}
                    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                        <SplineScene
                            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                            className="w-full h-full object-cover lg:object-contain opacity-80 lg:opacity-100"
                        />
                    </div>
                </div>

                {/* Foreground Content */}
                <div className="relative w-full max-w-5xl z-20 flex flex-col justify-center items-center text-center h-full pointer-events-none mx-auto">
                    <h1 className="ia-anim relative z-10 text-3xl md:text-5xl lg:text-6xl font-sans font-medium leading-[1.1] tracking-tight mb-8 text-white">
                        L'Intelligence Artificielle au service <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
                            des professionnels du droit.
                        </span>
                    </h1>

                    <p className="ia-anim relative z-10 text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Gagnez en productivité avec des solutions d'IA sécurisées. Automatisez la recherche, l'analyse et la rédaction pour vous concentrer sur votre véritable valeur : le conseil et la stratégie juridique.
                    </p>

                    <a href="#outils" className="ia-anim inline-block bg-primary border border-white/10 hover:border-white/20 text-white px-8 py-4 rounded-full font-medium text-[15px] transition-all duration-300 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-10px_rgba(37,99,235,0.7)] z-20 pointer-events-auto">
                        Découvrir les Outils
                    </a>
                </div>
            </section>

            {/* Fading bottom edge of the hero */}
            <div className="w-full h-40 bg-gradient-to-b from-transparent to-[#0A0A0A] relative z-20 -mt-20"></div>

            {/* TOOLS GRID SECTION */}
            <section id="outils" className="relative z-30 bg-[#0A0A0A] py-24 px-6 md:px-12 border-t border-white/5">
                <div className="max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 relative z-10 mt-10">
                        {tools.map((tool, index) => (
                            <div key={index} className="bg-[#111] rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col h-full group relative overflow-hidden">
                                {/* Soft glow on hover matching tool color */}
                                <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none 
                                    ${tool.color === 'purple' ? 'bg-purple-500' : tool.color === 'cyan' ? 'bg-cyan-500' : 'bg-blue-500'}`}>
                                </div>

                                <div className="flex justify-between items-start w-full mb-10">
                                    <div className={`w-12 h-12 rounded-xl bg-[#050505] border border-white/5 flex items-center justify-center relative z-10 shadow-lg`}>
                                        {tool.icon}
                                    </div>
                                    <span className="text-5xl font-thin text-white/5 font-sans select-none pointer-events-none group-hover:text-white/10 transition-colors duration-500 -mt-2 -mr-2">
                                        {tool.number}
                                    </span>
                                </div>

                                <h3 className="text-xl font-medium font-sans text-white mb-2 group-hover:text-white transition-colors relative z-10">{tool.title}</h3>
                                <p className={`text-[10px] font-mono tracking-widest uppercase mb-6 relative z-10
                                    ${tool.color === 'purple' ? 'text-purple-400' :
                                        tool.color === 'cyan' ? 'text-cyan-400' :
                                            'text-blue-400'}`}>
                                    {tool.subtitle}
                                </p>
                                <p className="text-sm text-white/60 leading-relaxed flex-grow relative z-10">{tool.desc}</p>
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
                            Propulsé par <strong className="text-white/80 font-bold ml-1">RE7SET AI</strong>
                        </span>
                    </div>

                </div>
            </section>

            {/* METHODOLOGY SECTION */}
            <section className="relative z-30 bg-[#050505] py-24 px-6 md:px-12 border-t border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-mono text-sm tracking-widest uppercase mb-6 block">NOTRE APPROCHE</span>
                        <h2 className="text-3xl md:text-5xl font-sans font-medium text-white mb-6 tracking-tight">
                            Une intégration hautement sécurisée, conçue pour <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">les métiers du droit</span>
                        </h2>
                        <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
                            Nous ne vendons pas qu'un simple logiciel sur étagère. Nous auditons vos processus et intégrons les modèles d'IA les plus performants au cœur de vos bases de données, en garantie souveraine (hébergement Europe, isolation des données).
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Process Steps */}
                        <div className="bg-[#111] p-8 rounded-2xl border border-white/5 relative z-10 hover:border-white/20 transition-colors duration-300">
                            <span className="text-6xl font-sans text-white/5 absolute top-4 right-4 pointing-events-none select-none">1</span>
                            <h3 className="text-xl font-medium font-sans text-white mb-4">Audit & Structuration</h3>
                            <p className="text-white/60 text-sm leading-relaxed">Analyse minutieuse de vos données interne (jurisprudences, modèles de contrats, mémos) et préparation de l'architecture pour l'ingestion par les modèles d'Intelligence Artificielle.</p>
                        </div>
                        <div className="bg-[#111] p-8 rounded-2xl border border-white/5 relative z-10 hover:border-white/20 transition-colors duration-300">
                            <span className="text-6xl font-sans text-white/5 absolute top-4 right-4 pointing-events-none select-none">2</span>
                            <h3 className="text-xl font-medium font-sans text-white mb-4">Déploiement RAG Privé</h3>
                            <p className="text-white/60 text-sm leading-relaxed">Mise en place d'une infrastructure fermée (Retrieval-Augmented Generation). L'IA n'utilise aucune donnée externe pour halluciner, elle se base à 100% sur VOTRE propre doctrine juridique.</p>
                        </div>
                        <div className="bg-[#111] p-8 rounded-2xl border border-white/5 relative z-10 hover:border-white/20 transition-colors duration-300">
                            <span className="text-6xl font-sans text-white/5 absolute top-4 right-4 pointing-events-none select-none">3</span>
                            <h3 className="text-xl font-medium font-sans text-white mb-4">Formation Accélérée</h3>
                            <p className="text-white/60 text-sm leading-relaxed">Ateliers pratiques avec vos associés et collaborateurs pour maîtriser le <em>Prompt Engineering</em> juridique. L'outil n'a de valeur que s'il est parfaitement adopté au quotidien par l'équipe.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA SECTION (Matching Diagnostic Page) */}
            <section className="relative z-30 bg-[#0A0A0A] py-24 px-6 md:px-12 border-t border-white/5">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    <div>
                        <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">Votre cabinet de demain</span>
                        <h2 className="text-3xl md:text-5xl font-sans font-medium mb-8 leading-tight">La productivité n'a jamais été aussi stratégique.</h2>
                        <p className="text-white/60 mb-6 text-lg">
                            Les cabinets qui adopteront l'I.A aujourd'hui détiendront l'avantage concurrentiel de demain. Par où commencer ? Par un diagnostic stratégique rigoureux de votre potentiel d'automatisation.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Évaluation du potentiel d'automatisation du cabinet",
                                "Sélection des cas d'usages à fort ROI immédiat",
                                "Validation des contraintes de sécurité absolues",
                                "Feuille de route technique et budgétaire chiffrée"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-white/80">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-[#111] border border-white/5 hover:border-white/10 transition-colors duration-500 rounded-2xl p-10 flex flex-col justify-center shadow-[0_0_50px_-20px_rgba(37,99,235,0.15)] relative overflow-hidden h-full">

                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>

                        <div className="text-center mb-10 relative z-10 flex-grow flex flex-col justify-center">
                            <span className="text-xs font-mono text-white/40 tracking-widest uppercase mb-4 block">Passez à l'action</span>
                            <div className="flex justify-center mb-6">
                                <h3 className="text-3xl font-sans font-medium text-white max-w-[250px] leading-tight">Évaluation du Potentiel IA</h3>
                            </div>
                            <p className="text-sm text-white/60 leading-relaxed max-w-sm mx-auto">Identifions ensemble comment gagner plusieurs dizaines d'heures facturables par mois grâce à l'IA générative personnalisée.</p>
                        </div>

                        <Link to="/offres/diagnostic-strategique" onClick={() => window.scrollTo(0, 0)} className="w-full bg-primary hover:bg-blue-600 text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 mt-auto relative z-10">
                            Réserver notre évaluation
                            <ArrowRight size={18} />
                        </Link>
                    </div>

                </div>
            </section>

        </main>
    );
}
