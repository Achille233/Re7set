import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    LineChart,
    Search,
    BookOpenCheck,
    Crosshair,
    Maximize,
    PenTool,
    BrainCircuit,
    Code2,
    FileText
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const LEFT_NODES = [
    { id: 'opti', title: 'Optimisation technique', text: "Audit et structure", icon: Code2 },
    { id: 'analyse', title: 'Analyse de mots-clés', text: "Volume et opportunité", icon: LineChart },
    { id: 'relecture', title: 'Relecture humaine', text: "Qualité éditoriale", icon: BookOpenCheck }
];

const RIGHT_NODES = [
    { id: 'intentions', title: 'Détection des intentions', text: "Comprendre la recherche", icon: Crosshair },
    { id: 'generation', title: 'Génération IA', text: "Rédaction scalée", icon: BrainCircuit },
    { id: 'perso', title: 'Personnalisation', text: "Toucher votre cible", icon: PenTool }
];

export default function DataFlow() {
    const sectionRef = useRef(null);
    const leftNodesRef = useRef([]);
    const rightNodesRef = useRef([]);
    const centerNodeRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        leftNodesRef.current = leftNodesRef.current.filter(Boolean);
        rightNodesRef.current = rightNodesRef.current.filter(Boolean);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
            }
        });

        // Simple elegant fade-in sequence
        tl.fromTo(centerNodeRef.current,
            { scale: 0.95, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.8, ease: "power2.out" }
        )
            .fromTo([...leftNodesRef.current, ...rightNodesRef.current],
                { opacity: 0, y: 15 },
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power2.out" },
                "-=0.4"
            );

    }, []);

    return (
        <section ref={sectionRef} className="relative w-full py-24 md:py-32 bg-background overflow-hidden border-t border-foreground/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                <div className="text-center mb-16 md:mb-24 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-sans font-medium text-foreground mb-6 tracking-tight leading-tight">
                        Nous Scalons votre SEO par <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500 font-serif italic">la data des leaders</span> de votre marché
                    </h2>
                    <p className="text-base font-sans text-muted leading-relaxed max-w-2xl mx-auto">
                        Nous créons des articles optimisés sur les mots-clés gagnants de vos concurrents, et plaçons votre site dans les sources influentes pour accélérer votre croissance.
                    </p>
                </div>

                {/* Desktop Pipeline (Clean Design) */}
                <div className="hidden lg:flex w-full max-w-[1000px] mx-auto items-center justify-between relative">

                    {/* Horizontal Connector Line Background */}
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-foreground/10 -translate-y-1/2 z-0"></div>

                    {/* LEFT COLUMN */}
                    <div className="w-[320px] flex flex-col gap-4 z-10 relative bg-background py-4 pr-8">
                        {LEFT_NODES.map((node, i) => (
                            <div
                                key={node.id}
                                ref={el => leftNodesRef.current[i] = el}
                                className="w-full bg-white border border-foreground/5 rounded-xl p-4 flex items-center gap-4 hover:border-primary/20 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
                            >
                                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-muted">
                                    <node.icon size={18} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="font-sans font-medium text-sm text-foreground">{node.title}</h3>
                                    <p className="text-xs text-muted mt-0.5">{node.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CENTER CORE */}
                    <div ref={centerNodeRef} className="w-[120px] h-[120px] flex items-center justify-center z-20 bg-background relative px-4">
                        <div className="relative w-16 h-16 bg-white border border-foreground/10 rounded-2xl flex items-center justify-center shadow-lg shadow-black/5 hover:scale-105 transition-transform duration-500">
                            <BrainCircuit className="text-primary w-8 h-8" strokeWidth={1.5} />
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="w-[320px] flex flex-col gap-4 z-10 relative bg-background py-4 pl-8">
                        {RIGHT_NODES.map((node, i) => (
                            <div
                                key={node.id}
                                ref={el => rightNodesRef.current[i] = el}
                                className="w-full bg-white border border-foreground/5 rounded-xl p-4 flex items-center gap-4 hover:border-primary/20 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
                            >
                                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-muted">
                                    <node.icon size={18} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="font-sans font-medium text-sm text-foreground">{node.title}</h3>
                                    <p className="text-xs text-muted mt-0.5">{node.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Mobile Fallback View */}
                <div className="lg:hidden flex flex-col items-center gap-6 mt-8 relative">

                    {/* Vertical Connector Line */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-foreground/10 -translate-x-1/2 z-0"></div>

                    <div className="w-full grid grid-cols-1 gap-3 z-10">
                        {LEFT_NODES.map((node) => (
                            <div key={node.id} className="bg-white p-4 rounded-xl border border-foreground/5 flex items-center gap-4 max-w-sm mx-auto w-full relative shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-muted">
                                    <node.icon size={18} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="font-sans font-medium text-sm text-foreground">{node.title}</h3>
                                    <p className="text-xs text-muted mt-0.5">{node.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="my-6 relative z-10 py-4 bg-background px-4">
                        <div className="w-16 h-16 bg-white border border-foreground/10 rounded-xl flex items-center justify-center shadow-md">
                            <BrainCircuit className="text-primary w-6 h-6" strokeWidth={1.5} />
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-1 gap-3 z-10">
                        {RIGHT_NODES.map((node) => (
                            <div key={node.id} className="bg-white p-4 rounded-xl border border-foreground/5 flex items-center gap-4 max-w-sm mx-auto w-full relative shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-muted">
                                    <node.icon size={18} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="font-sans font-medium text-sm text-foreground">{node.title}</h3>
                                    <p className="text-xs text-muted mt-0.5">{node.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
