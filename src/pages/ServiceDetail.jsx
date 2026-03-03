import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import gsap from 'gsap';

const serviceData = {
    "diagnostic-strategique": {
        title: "Diagnostic Stratégique Global, pour votre cabinet",
        desc: "Passer d'un expert isolé à une stratégie numérique complète. Nous analysons l'ensemble de votre présence en ligne pour construire un plan d'action priorisé à 90 jours."
    },
    "audits-optimisations": {
        title: "Audits & Optimisations à la demande",
        desc: "Besoin d'optimiser un point précis de votre activité ? Nos experts vous accompagnent sur des missions ponctuelles (SEO, Positionnement, IA) sans ralentir vos opérations."
    },
    "coaching-ia": {
        title: "Coaching & Transformation IA",
        desc: "C'est souvent lorsqu'on repense son organisation qu'on réalise le potentiel de l'IA. Nous vous accompagnons pour structurer votre cabinet, automatiser les process et former vos équipes."
    }
};

export default function ServiceDetail() {
    const { id } = useParams();
    const data = serviceData[id] || serviceData["diagnostic-strategique"];

    useEffect(() => {
        // Simple entrance animation for the content
        gsap.fromTo('.service-detail-entrance',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
        );
    }, [id]);

    return (
        <main className="relative bg-[#F9F9FB] text-foreground pt-32 pb-24 min-h-screen">

            {/* Light background gradient */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_center_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-12">

                {/* Breadcrumbs */}
                <div className="service-detail-entrance flex items-center gap-2 text-xs font-mono text-muted mb-12">
                    <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
                    <span>&gt;</span>
                    <span className="text-foreground/80 font-medium">{data.title.split(',')[0]}</span>
                </div>

                {/* Main Heading Area */}
                <h1 className="service-detail-entrance text-5xl md:text-7xl lg:text-[80px] font-sans font-medium leading-[1.1] tracking-tight mb-8 max-w-4xl mx-auto text-foreground">
                    {data.title}
                </h1>

                <p className="service-detail-entrance text-lg md:text-xl text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
                    {data.desc}
                </p>

                {/* Primary CTA */}
                <button className="service-detail-entrance bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium text-[15px] transition-colors duration-300 shadow-[0_0_40px_-10px_rgba(59,130,246,0.4)] z-20 mb-20 relative overflow-hidden group">
                    <span className="relative z-10 flex items-center gap-2">Discuter de votre projet</span>
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:transition-transform group-hover:duration-700 group-hover:translate-x-[150%]"></div>
                </button>

                {/* Large Tilted Mockup / Visual Area */}
                <div className="service-detail-entrance relative w-full aspect-[16/10] max-w-5xl mx-auto mt-10 perspective-[2000px]">

                    {/* The visual container with 3D tilts representing the Webflow interface mockup - Light Theme */}
                    <div className="w-full h-full bg-white border border-black/5 rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] transform rotate-x-[15deg] rotate-y-[-10deg] rotate-z-[2deg] scale-105 transition-transform duration-1000 hover:rotate-x-[5deg] hover:rotate-y-[-5deg] hover:rotate-z-[1deg]">

                        {/* Mockup Header Toolbar */}
                        <div className="h-12 border-b border-black/5 bg-gray-50 flex items-center px-4 gap-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-black/10"></div>
                                <div className="w-3 h-3 rounded-full bg-black/10"></div>
                                <div className="w-3 h-3 rounded-full bg-black/10"></div>
                            </div>
                            <div className="h-4 w-32 bg-black/5 rounded-sm ml-4"></div>
                        </div>

                        {/* Mockup Body splitting */}
                        <div className="flex h-[calc(100%-3rem)] bg-white">
                            {/* Left panel */}
                            <div className="w-64 border-r border-black/5 bg-gray-50/50 p-4 flex flex-col gap-3">
                                <div className="h-5 w-2/3 bg-black/10 rounded-sm"></div>
                                <div className="h-4 w-1/2 bg-black/5 rounded-sm ml-4"></div>
                                <div className="h-4 w-3/4 bg-black/5 rounded-sm ml-4"></div>
                                <div className="h-4 w-2/5 bg-black/5 rounded-sm ml-4"></div>
                                <div className="mt-8 h-5 w-1/2 bg-black/10 rounded-sm"></div>
                                <div className="h-4 w-2/3 bg-black/5 rounded-sm ml-4"></div>
                                <div className="h-4 w-1/2 bg-black/5 rounded-sm ml-4"></div>
                            </div>

                            {/* Main canvas area */}
                            <div className="flex-1 bg-gray-100/50 p-12 overflow-hidden relative flex flex-col items-center justify-center">
                                {/* Simulated website preview inside the mockup */}
                                <div className="w-3/4 bg-white text-foreground p-8 rounded-t-xl shadow-xl absolute bottom-0 rotate-z-[2deg] origin-bottom-left border-x border-t border-black/5">
                                    <div className="text-[10px] font-bold tracking-widest text-muted mb-4 flex gap-4 border-b border-black/5 pb-4">
                                        <span>PRICING</span>
                                        <span>VALUES</span>
                                        <span>CLASS</span>
                                    </div>
                                    <h2 className="text-4xl font-serif leading-tight mb-4">Join for stay</h2>
                                    <p className="text-sm text-muted max-w-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>

                            {/* Right panel */}
                            <div className="w-72 border-l border-black/5 bg-gray-50/50 p-4 relative">
                                <div className="flex justify-between mb-6">
                                    <div className="h-6 w-6 bg-black/5 rounded-md"></div>
                                    <div className="h-6 w-6 bg-black/5 rounded-md"></div>
                                    <div className="h-6 w-6 bg-primary/10 rounded-md text-primary flex items-center justify-center font-bold pb-0.5">+</div>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-10 w-full border border-black/5 rounded bg-white shadow-sm"></div>
                                    <div className="h-10 w-full border border-black/5 rounded bg-white shadow-sm"></div>
                                    <div className="flex gap-2">
                                        <div className="h-8 flex-1 border border-black/5 rounded bg-white shadow-sm"></div>
                                        <div className="h-8 flex-1 border border-black/5 rounded bg-white shadow-sm"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Shadow overlay at the bottom to blend mockup into the light background */}
                    <div className="absolute -bottom-10 left-0 right-0 h-48 bg-gradient-to-t from-[#F9F9FB] via-[#F9F9FB]/90 to-transparent pointer-events-none"></div>

                </div>

            </div>
        </main>
    );
}
