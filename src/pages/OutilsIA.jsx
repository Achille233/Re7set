import React, { useEffect } from 'react';
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
            title: "Accélération de la Recherche",
            subtitle: "RÉDUISEZ VOS RECHERCHES DE 90%",
            desc: "Ne facturez plus vos clients pour des heures de défrichage. Gagnez en compétitivité en interrogeant vos propres bases de jurisprudence via un moteur IA qui trouve, synthétise et source la réponse exacte en 3 secondes.",
            color: "purple",
            number: "01"
        },
        {
            icon: <FileSignature className="w-6 h-6 text-cyan-400" />,
            title: "Revue Documentaire Éclair",
            subtitle: "GAGNEZ 3H PAR CONTRAT",
            desc: "Oubliez la lecture fastidieuse de centaines de pages. Confiez l'extraction des clauses clés et la détection d'anomalies à l'IA pour vous concentrer exclusivement sur la négociation et la stratégie.",
            color: "cyan",
            number: "02"
        },
        {
            icon: <PenTool className="w-6 h-6 text-blue-400" />,
            title: "Génération de Premiers Jets",
            subtitle: "DÉMARREZ À 80% DU RÉSULTAT FINAL",
            desc: "Fini l'angoisse de la page blanche. Générez instantanément la trame de vos actes, mises en demeure ou conclusions, parfaitement formatée selon les standards et habitudes exactes de votre cabinet.",
            color: "blue",
            number: "03"
        },
        {
            icon: <Brain className="w-6 h-6 text-purple-400" />,
            title: "Valorisation de l'Expertise",
            subtitle: "RENTABILISEZ VOTRE HISTORIQUE",
            desc: "Le savoir de vos associés ne doit pas se perdre. Centralisez votre doctrine interne : interrogez l'historique du cabinet en langage naturel pour réutiliser vos meilleurs arguments et éviter de réinventer la roue.",
            color: "purple",
            number: "04"
        },
        {
            icon: <Smartphone className="w-6 h-6 text-cyan-400" />,
            title: "Qualification Client Automatisée",
            subtitle: "ZÉRO APPEL NON QUALIFIÉ",
            desc: "Ne perdez plus votre temps précieux avec des prospects hors-sujet ou hors-budget. Un agent virtuel intelligent qualifie et priorise chaque demande entrante 24/7 avant même que votre téléphone ne sonne.",
            color: "cyan",
            number: "05"
        },
        {
            icon: <Bot className="w-6 h-6 text-blue-400" />,
            title: "Productivité Administrative",
            subtitle: "LIBÉREZ-VOUS DE LA PAPERASSE",
            desc: "L'administratif ne génère aucun honoraire. Automatisez l'extraction des données de facturation et l'intégration directe dans vos logiciels métiers (Septeo, Secib) pour récupérer des heures par mois.",
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

            {/* Cinematic Background Glow & Futuristic Grid */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full max-w-5xl h-[800px] bg-primary/15 blur-[120px] rounded-full"></div>

                {/* 2026 AI Lab Subtly Animated Grid Texture */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_60%,transparent_100%)] opacity-70"></div>
            </div>

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
                    <h1 className="ia-anim relative z-10 text-4xl md:text-5xl lg:text-7xl font-sans font-medium leading-[1.1] tracking-tight mb-8 text-white max-w-4xl mx-auto">
                        Vos collaborateurs passent <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">40% de leur temps</span> sur des tâches que l'IA fait en secondes.
                    </h1>

                    <p className="ia-anim relative z-10 text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
                        L'Intelligence Artificielle n'est plus une promesse future. C'est l'avantage compétitif stratégique des cabinets d'avocats les plus innovants d'aujourd'hui.
                    </p>

                    <a href="#outils" className="ia-anim inline-block bg-primary border border-white/10 hover:border-white/20 text-white px-8 py-4 rounded-full font-medium text-[15px] transition-all duration-300 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-10px_rgba(37,99,235,0.7)] z-20 pointer-events-auto">
                        Découvrir les Outils
                    </a>
                </div>
            </section>

            {/* Fading bottom edge of the hero */}
            <div className="w-full h-40 bg-gradient-to-b from-transparent to-[#0A0A0A] relative z-20 -mt-20"></div>

            {/* CHIFFRES D'IMPACT SECTION */}
            <section className="relative z-30 bg-[#0A0A0A] pb-24 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative -mt-32 md:-mt-40 z-40">
                        {/* Metric 1 */}
                        <div className="bg-[#111]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:border-primary/30 transition-colors duration-500 shadow-2xl">
                            <span className="text-5xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-4">2h</span>
                            <h4 className="text-lg text-white font-medium mb-2">Gagnées par dossier</h4>
                            <p className="text-sm text-white/50">Sur vos recherches de jurisprudence et premières trames.</p>
                        </div>
                        {/* Metric 2 */}
                        <div className="bg-[#111]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:border-cyan-500/30 transition-colors duration-500 shadow-2xl">
                            <span className="text-5xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-4">80%</span>
                            <h4 className="text-lg text-white font-medium mb-2">Tâches répétitives en moins</h4>
                            <p className="text-sm text-white/50">Automatisation totale des processus documentaires standards.</p>
                        </div>
                        {/* Metric 3 */}
                        <div className="bg-[#111]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:border-primary/30 transition-colors duration-500 shadow-2xl">
                            <span className="text-5xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-4">J+30</span>
                            <h4 className="text-lg text-white font-medium mb-2">Premiers résultats visibles</h4>
                            <p className="text-sm text-white/50">Intégration rapide et adoption immédiate par l'équipe.</p>
                        </div>
                    </div>
                </div>
            </section>



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

            {/* SÉCURITÉ & CONFORMITÉ SECTION */}
            <section className="relative z-30 bg-[#0A0A0A] py-24 px-6 md:px-12 border-t border-white/5 overflow-hidden">
                {/* Background ambient glow for security section */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-primary font-mono text-sm tracking-widest uppercase mb-6 block">Le frein n°1 levé</span>
                        <h2 className="text-3xl md:text-5xl font-sans font-medium text-white mb-6 tracking-tight">
                            Une sécurité conçue pour <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">les exigences du Barreau</span>
                        </h2>
                        <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
                            Nous savons que le secret professionnel est absolu. Nos architectures IA sont auditable, fermées et souveraines. Vos données ne nourrissent jamais les modèles publics.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Sec 1 */}
                        <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                <Shield className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-medium text-white mb-3">Souveraineté & RGPD</h3>
                            <p className="text-white/50 text-sm leading-relaxed">Hébergement 100% européen (SecNumCloud certifiable). Architecture "Zero Trust" et chiffrement de bout en bout de vos bases documentaires.</p>
                        </div>
                        {/* Sec 2 */}
                        <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                                <Lock className="w-6 h-6 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-medium text-white mb-3">Déontologie Respectée</h3>
                            <p className="text-white/50 text-sm leading-relaxed">L'IA agit comme un assistant, pas comme un avocat. Traçabilité totale des accès et respect strict du secret professionnel dans chaque itération.</p>
                        </div>
                        {/* Sec 3 */}
                        <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                                <Brain className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-medium text-white mb-3">Zéro Hallucination</h3>
                            <p className="text-white/50 text-sm leading-relaxed">Technologie RAG (Retrieval-Augmented Generation) stricte : l'assistant cite systématiquement la source exacte de votre doctrine interne avant de répondre.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* METHODOLOGY SECTION */}
            <section className="relative z-30 bg-[#050505] py-24 px-6 md:px-12 border-t border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-mono text-sm tracking-widest uppercase mb-6 block">Le Processus RE7SET</span>
                        <h2 className="text-3xl md:text-5xl font-sans font-medium text-white mb-6 tracking-tight">
                            Une intégration chirurgicale, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">sans friction</span>
                        </h2>
                        <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
                            Déployer l'IA ne s'improvise pas. Notre méthodologie d'élite garantit une transformation de vos processus en 30 jours, sans perturber la production en cours du cabinet.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Process Steps */}
                        <div className="bg-[#111] p-8 rounded-2xl border border-white/5 relative z-10 hover:border-white/20 transition-colors duration-300">
                            <span className="text-6xl font-sans text-white/5 absolute top-4 right-4 pointing-events-none select-none">1</span>
                            <h3 className="text-xl font-medium font-sans text-white mb-4">Diagnostic & Cartographie</h3>
                            <p className="text-white/60 text-sm leading-relaxed">Nous auditons vos flux de travail actuels et identifions précisément les tâches chronophages où l'IA apportera un ROI fulgurant dès la première semaine.</p>
                        </div>
                        <div className="bg-[#111] p-8 rounded-2xl border border-white/5 relative z-10 hover:border-white/20 transition-colors duration-300">
                            <span className="text-6xl font-sans text-white/5 absolute top-4 right-4 pointing-events-none select-none">2</span>
                            <h3 className="text-xl font-medium font-sans text-white mb-4">Architecture & Configuration</h3>
                            <p className="text-white/60 text-sm leading-relaxed">Déploiement sur-mesure d'un environnement hermétique. Nous connectons nos LLMs à vos bases de données via une isolation réseau de grade bancaire.</p>
                        </div>
                        <div className="bg-[#111] p-8 rounded-2xl border border-white/5 relative z-10 hover:border-white/20 transition-colors duration-300">
                            <span className="text-6xl font-sans text-white/5 absolute top-4 right-4 pointing-events-none select-none">3</span>
                            <h3 className="text-xl font-medium font-sans text-white mb-4">Onboarding & Prompt Engineering</h3>
                            <p className="text-white/60 text-sm leading-relaxed">Un outil puissant nécessite de l'adoption. Nous formons personnellement vos associés et collaborateurs à l'art d'interagir efficacement avec l'IA juridique.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CUSTOM PRICING / AUDIT SECTION (Adapted to IA Theme) */}
            <section className="relative z-30 bg-[#0A0A0A] py-32 px-6 md:px-12 flex flex-col items-center border-t border-white/5">
                {/* Top Label */}
                <div className="flex items-center gap-3 border border-white/10 bg-[#111] rounded-full px-4 py-2 mb-8">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
                    <span className="text-xs font-medium text-white/80 tracking-wide uppercase">Pricing</span>
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-white text-center mb-6 tracking-tight">
                    Formule adaptée à vos <br className="md:hidden" />
                    <span className="text-white/40">besoins</span>
                </h2>

                {/* Subtitle */}
                <p className="text-white/60 text-center max-w-2xl mx-auto mb-16 text-lg leading-relaxed">
                    Nous simplifions l'accès à l'innovation. Choisissez la formule qui correspond à vos besoins et à vos objectifs.
                </p>

                {/* Main Card Container with refined Premium Layout */}
                <div className="relative w-full max-w-5xl rounded-[2rem] border border-white/5 bg-[#0A0A0A]/50 backdrop-blur-3xl hover:bg-[#0F0F0F] hover:border-white/10 transition-all duration-700 shadow-2xl overflow-hidden group">

                    {/* Top ambient glow line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                    <div className="w-full h-full p-8 md:p-14 relative overflow-hidden flex flex-col md:flex-row gap-12 md:gap-16 items-center">

                        {/* Ambient Background Glow inside the card */}
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-30"></div>

                        {/* Content Left */}
                        <div className="relative z-10 w-full md:w-1/2 flex flex-col items-start">
                            <h3 className="text-white/80 font-mono text-sm tracking-widest uppercase mb-4">Pour les cabinets d'avocats</h3>

                            <h4 className="text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40 pb-2">
                                Personnalisé
                            </h4>

                            <p className="text-white/50 text-[16px] leading-relaxed mb-10 max-w-sm font-light">
                                Une architecture IA souveraine, 100% adaptée à la taille de votre cabinet, à vos domaines d'expertise et au volume de vos dossiers.
                            </p>

                            {/* Commencer button */}
                            <Link to="/offres/diagnostic-strategique" onClick={() => window.scrollTo(0, 0)} className="group/btn relative inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full font-medium transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] w-full md:w-auto">
                                <span className="relative z-10 text-[15px] group-hover/btn:-translate-y-[1px] transition-transform">Demander un audit</span>
                            </Link>
                        </div>

                        {/* Content Right (Features) */}
                        <div className="relative z-10 w-full md:w-1/2 flex flex-col bg-white/[0.02] border border-white/5 rounded-3xl p-8 backdrop-blur-md group-hover:bg-white/[0.03] group-hover:border-white/10 transition-colors duration-700">
                            <p className="text-white/90 font-medium mb-8 text-lg">Ce qui est inclus</p>

                            <ul className="space-y-4 w-full">
                                {[
                                    "Audit de vos processus juridiques",
                                    "Support technique et hotline 7J/7",
                                    "Formation de vos collaborateurs",
                                    "Intégration sécurisée à vos bases",
                                    "Développement de modèles sur-mesure"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-colors duration-500">
                                            <Check className="w-3.5 h-3.5 text-cyan-400" strokeWidth={3} />
                                        </div>
                                        <span className="text-white/70 text-[15px] leading-relaxed group-hover:text-white/90 transition-colors duration-500">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>



                {/* Contact Form Section mimicking Velios AI */}
                <div className="w-full max-w-4xl mt-6 mb-20 rounded-[32px] border border-white/[0.08] bg-[#0A0A0A]/70 backdrop-blur-3xl p-8 md:p-14 relative overflow-hidden group/contact hover:border-white/[0.12] transition-colors duration-700 shadow-2xl">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/10 blur-[100px] pointer-events-none transition-opacity duration-700 opacity-50 group-hover/contact:opacity-100"></div>

                    <div className="relative z-10 w-full mb-10">
                        <h3 className="text-3xl md:text-4xl font-sans font-medium text-white tracking-tight mb-2">Contactez-nous</h3>
                        <p className="text-white/50 text-[15px] max-w-lg">N’hésitez pas à nous contacter pour discuter de votre projet ou pour toute question, nous serons heureux de vous accompagner.</p>
                    </div>

                    <form className="relative z-10 w-full flex flex-col gap-8 md:gap-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                            <div className="flex flex-col gap-2">
                                <label className="text-white/70 text-[15px]">Nom *</label>
                                <input type="text" placeholder="David Johnson" className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-white/20 focus:outline-none focus:border-primary focus:bg-white/5 transition-all text-sm rounded-t-sm px-2" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-white/70 text-[15px]">Email *</label>
                                <input type="email" placeholder="example@mail.com" className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-white/20 focus:outline-none focus:border-primary focus:bg-white/5 transition-all text-sm rounded-t-sm px-2" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-white/70 text-[15px]">Nom de l'entreprise *</label>
                            <input type="text" placeholder="Ex. StaticMania" className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-white/20 focus:outline-none focus:border-primary focus:bg-white/5 transition-all text-sm rounded-t-sm px-2" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                            <div className="flex flex-col gap-2">
                                <label className="text-white/70 text-[15px]">Type de services *</label>
                                <select className="w-full bg-transparent border-b border-white/10 py-3 px-2 text-white/50 focus:outline-none focus:border-primary focus:bg-white/5 transition-all text-sm appearance-none cursor-pointer rounded-t-sm">
                                    <option className="bg-[#111] text-white">Select Your Service</option>
                                    <option className="bg-[#111] text-white">IA Générative</option>
                                    <option className="bg-[#111] text-white">Automatisation</option>
                                    <option className="bg-[#111] text-white">Consulting IA</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-white/70 text-[15px]">Votre budget *</label>
                                <select className="w-full bg-transparent border-b border-white/10 py-3 px-2 text-white/50 focus:outline-none focus:border-primary focus:bg-white/5 transition-all text-sm appearance-none cursor-pointer rounded-t-sm">
                                    <option className="bg-[#111] text-white">Par tranche</option>
                                    <option className="bg-[#111] text-white">&lt; 5 000 €</option>
                                    <option className="bg-[#111] text-white">5 000 € - 10 000 €</option>
                                    <option className="bg-[#111] text-white">&gt; 10 000 €</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-white/70 text-[15px]">Détails de votre projet</label>
                            <textarea rows="2" className="w-full bg-transparent border-b border-white/10 py-3 px-2 text-white placeholder-white/20 focus:outline-none focus:border-primary focus:bg-white/5 transition-all text-sm resize-none rounded-t-sm"></textarea>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
                            <button type="button" className="bg-[#111] border border-white/10 hover:border-primary/50 hover:bg-primary/10 text-white/90 px-8 py-3 rounded-[12px] transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] text-[15px] font-medium font-sans">
                                Soumettre
                            </button>
                            <span className="text-white/40 text-sm">Une réponse vous sera donnée sous 24H.</span>
                        </div>
                    </form>
                </div>

            </section>

        </main>
    );
}
