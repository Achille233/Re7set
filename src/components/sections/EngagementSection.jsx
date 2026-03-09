import React from 'react';
import { Activity, Glasses, CheckSquare, Lightbulb, Key, Share2, Users } from 'lucide-react';

const engagements = [
    {
        icon: <Activity className="w-6 h-6 text-primary" />,
        title: "Performance garantie",
        desc: "Vitesse de chargement ultra-rapide, poids des assets maîtrisé, responsive parfait : chaque détail technique est optimisé."
    },
    {
        icon: <Glasses className="w-6 h-6 text-primary" />,
        title: "Meilleures pratiques SEO",
        desc: "Structure sémantique propre, balisage optimisé, temps de chargement réduit. Votre site séduit les moteurs de recherche et est prêt à performer."
    },
    {
        icon: <CheckSquare className="w-6 h-6 text-primary" />,
        title: "Architecture CMS",
        desc: "CMS conçu pour permettre à vos équipes de créer, éditer et publier du contenu sans dépendance technique."
    },
    {
        icon: <Lightbulb className="w-6 h-6 text-primary" />,
        title: "Suivi avancé des conversions",
        desc: "Nous traduisons vos objectifs en événements clés pour suivre précisément chaque conversion, son origine et son parcours utilisateur. Des données essentielles pour orienter vos optimisations."
    },
    {
        icon: <Key className="w-6 h-6 text-primary" />,
        title: "Conformité RGPD",
        desc: "Gestion du consentement, protection des données utilisateurs et conformité des formulaires dès la conception du site."
    },
    {
        icon: <Share2 className="w-6 h-6 text-primary" />,
        title: "Infrastructure scalable",
        desc: "Que ce soit via les solutions Webflow Enterprise ou grâce à des intégrations full stack (Wized, Xano), votre site peut évoluer vers des fonctionnalités avancées."
    },
    {
        icon: <Users className="w-6 h-6 text-primary" />,
        title: "Formation de vos équipes",
        desc: "Nous formons votre équipe marketing pour leur permettre d'être autonomes dans la gestion du site, si souhaité."
    }
];

export default function EngagementSection() {
    return (
        <section className="bg-[#0A0A0A] py-32 px-6 md:px-12 relative z-30 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:gap-24 relative">

                {/* Left Column (Scrolling Content) */}
                <div className="w-full lg:w-5/12 shrink-0">
                    <div className="mb-24">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-white mb-6 leading-[1.1] tracking-tight">
                            Notre engagement pour <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500 pb-2">l'excellence</span>
                        </h2>
                        <p className="text-lg text-white/50 leading-relaxed font-sans max-w-sm">
                            Tous nos développements respectent les meilleures pratiques et incluent :
                        </p>
                    </div>

                    <div className="flex flex-col gap-24 lg:gap-[30vh]">
                        {engagements.map((item, index) => (
                            <div key={index} className="flex flex-col items-start max-w-sm">
                                <div className="w-14 h-14 rounded-2xl border-2 border-primary/30 flex items-center justify-center mb-6 bg-primary/5">
                                    {item.icon}
                                </div>
                                <h3 className="text-3xl font-sans font-medium text-white mb-4 tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-white/50 leading-relaxed font-sans text-lg">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column (Sticky Visual) */}
                <div className="hidden lg:block w-full lg:w-7/12 relative">
                    <div className="sticky top-32 h-[80vh] flex flex-col justify-center">
                        <div className="w-full h-full max-h-[700px] border border-white/10 rounded-2xl bg-[#111111] overflow-hidden relative shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] group">

                            {/* Browser-like Header */}
                            <div className="absolute top-0 inset-x-0 h-10 border-b border-white/10 bg-[#161616] flex items-center px-4 gap-2 z-20">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                                </div>
                                <div className="mx-auto text-[10px] uppercase tracking-widest text-white/20 font-mono">RE7SET Platform</div>
                            </div>

                            {/* Image inside mockup */}
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
                                alt="Interface de gestion"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 pt-10"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#111] to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
