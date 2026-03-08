import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, Phone, Smartphone, Mail, GraduationCap, PlaySquare, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TOOLS = [
    {
        num: "01", icon: <MessageCircle className="text-primary w-5 h-5" />,
        title: "Agents IA Multi-Canaux", kicker: "RÉPONSES AUTOMATISÉES SUR TOUS VOS RÉSEAUX SOCIAUX",
        desc: "Des agents IA intelligents gèrent vos conversations sur WhatsApp, Instagram, Messenger et Telegram.",
        features: ["Réponse immédiate 24h/24", "Gestion centralisée de tous vos canaux"]
    },
    {
        num: "02", icon: <Phone className="text-primary w-5 h-5" />,
        title: "Standard Téléphonique IA", kicker: "UN STANDARD INTELLIGENT, DISPONIBLE EN PERMANENCE",
        desc: "Notre IA téléphonique prend en charge vos appels entrants, 24h/24.",
        features: ["Réduction des coûts", "Collecte automatique des données", "Transfert intelligent vers vos équipes"]
    },
    {
        num: "03", icon: <Smartphone className="text-primary w-5 h-5" />,
        title: "Contenu Réseaux Sociaux", kicker: "CONTENU VIRAL GÉNÉRÉ AUTOMATIQUEMENT",
        desc: "Notre IA analyse les tendances, crée et publie du contenu quotidiennement sur LinkedIn, Instagram, YouTube Shorts et TikTok.",
        features: ["Publication aux meilleurs horaires", "Visibilité maximisée", "Contenu adapté à chaque plateforme"]
    },
    {
        num: "04", icon: <Mail className="text-primary w-5 h-5" />,
        title: "Gestion Email IA", kicker: "GESTION AUTOMATIQUE ET INTELLIGENTE DE VOS EMAILS",
        desc: "Notre IA traite vos emails : tri, réponse et extraction des données importantes en temps réel.",
        features: ["Tri et priorisation automatiques", "Réponses contextuelles pré-rédigées"]
    },
    {
        num: "05", icon: <GraduationCap className="text-primary w-5 h-5" />,
        title: "Formation avec l'IA", kicker: "FORMATION ACCÉLÉRÉE ET PERSONNALISÉE",
        desc: "Un assistant pédagogique IA disponible en permanence, qui appuie sur toute votre documentation.",
        features: ["Adapté à votre secteur d'activité", "Montée en compétence continue"]
    },
    {
        num: "06", icon: <PlaySquare className="text-primary w-5 h-5" />,
        title: "Vidéos & Images IA", kicker: "VISUELS PROFESSIONNELS GÉNÉRÉS EN UN CLIC",
        desc: "Nos IA de dernière génération créent des visuels et vidéos ultra-réalistes, adaptés à tous vos besoins.",
        features: ["Contenus visuels sur-mesure", "Déclinaison multi-formats automatique"]
    }
];

export default function OutilsIA() {
    return (
        <section id="outils-ia" className="relative w-full py-32 bg-transparent">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-32">
                <span className="text-sm uppercase tracking-widest font-mono text-muted mb-4 block">
                    Outils IA
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-4 max-w-3xl">
                    <span className="block">Les outils IA que nous déployons</span>
                    <span className="block text-primary">pour transformer votre cabinet.</span>
                </h2>
                <p className="text-base font-sans text-muted max-w-2xl mb-16">
                    Notre expert implante, configure et vous accompagne sur chaque outil — pour une adoption réelle et des résultats concrets.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {TOOLS.map((tool, i) => (
                        <div
                            key={i}
                            className="group relative bg-white border border-foreground/[0.06] rounded-xl p-8 overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)] hover:border-primary/20"
                        >
                            {/* Giant Background Number */}
                            <div className="absolute top-4 right-4 text-6xl md:text-7xl font-serif text-foreground/[0.04] pointer-events-none select-none">
                                {tool.num}
                            </div>

                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-6 relative group-hover:bg-primary/15 transition-colors duration-300">
                                {tool.icon}
                            </div>

                            <h3 className="font-bold font-sans text-lg md:text-xl text-foreground mb-1 relative">{tool.title}</h3>
                            <p className="text-[10px] font-mono text-primary uppercase tracking-widest mb-4 relative">{tool.kicker}</p>

                            <p className="text-sm text-muted mb-8 relative leading-relaxed">
                                {tool.desc}
                            </p>

                            <ul className="space-y-3 relative mt-auto">
                                {tool.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Sparkles className="text-primary mt-1 flex-shrink-0" size={14} />
                                        <span className="text-sm text-foreground/80">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full bg-primary py-6 px-6 text-center shadow-[0_0_40px_rgba(37,99,235,0.3)]">
                <p className="text-white font-medium">Chaque outil est implanté et configuré par notre expert, pour votre cabinet.</p>
            </div>
        </section>
    );
}
