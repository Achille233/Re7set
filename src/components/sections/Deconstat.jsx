import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Deconstat() {
    return (
        <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-transparent overflow-hidden object-cover">
            {/* Ambient background removed to match the fresh neon corner unified style */}

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center relative z-20">

                {/* Main Centered Column - Text */}
                <div className="lg:col-span-12 max-w-4xl mx-auto w-full flex flex-col items-center relative">
                    <span className="text-sm uppercase tracking-widest font-mono text-muted mb-4 block text-center">
                        Le problème
                    </span>

                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-sans font-black text-foreground leading-[1.1] tracking-tight mb-10 text-center">
                        <span className="block mb-1">Votre expertise est peut-être excellente.</span>
                        <span className="block text-[#0D7DF2] pb-2">Votre image digitale raconte une autre histoire.</span>
                    </h2>

                    <p className="text-base md:text-lg font-sans text-muted mb-10 leading-relaxed font-medium text-center max-w-3xl">
                        La réalité est asymétrique. Les patients, clients et confrères associent la qualité de votre présence en ligne à votre niveau de compétence.
                        Une réputation invisible ou dégradée profite directement à vos concurrents.
                    </p>

                    <ul className="space-y-6 w-fit mx-auto">
                        {[
                            "La majorité des prospects vérifient les avis en ligne avant de prendre rendez-vous.",
                            "Les algorithmes (Google, IA) ignorent les profils dont le contenu est obsolète.",
                            "Un décalage entre la réalité et l'écran crée un doute immédiat sur la compétence."
                        ].map((text, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <div className="mt-1 w-6 h-6 rounded-full bg-[#E5F1FF] flex items-center justify-center shrink-0">
                                    <ArrowRight className="text-[#0051e0]" size={12} strokeWidth={3} />
                                </div>
                                <span className="text-[#1a1c1e] font-sans font-medium leading-snug text-sm md:text-base text-left">{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}
