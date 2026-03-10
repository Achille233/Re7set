import React from 'react';
import { usePageMeta } from '../hooks/usePageMeta';
import Hero from '../components/sections/Hero';
import Piliers from '../components/sections/Piliers';
import Deconstat from '../components/sections/Deconstat';
import Resultats from '../components/sections/Resultats';
import SolutionsAvantages from '../components/sections/SolutionsAvantages';
import Pourquoi from '../components/sections/Pourquoi';
import Livrable from '../components/sections/Livrable';
import Equipe from '../components/sections/Equipe';
import Offres from '../components/sections/Offres';
import PreuveSociale from '../components/sections/PreuveSociale';
import Contact from '../components/sections/Contact';

export default function Home() {
    usePageMeta(
        'RE7SET — Stratégie Digitale & IA pour Avocats et Professions Libérales',
        'RE7SET accompagne les cabinets d\'avocats, notaires et experts-comptables dans leur transformation digitale. Audits SEO, diagnostic stratégique et intégration IA sur mesure.'
    );

    return (
        <main className="relative z-10 w-full bg-white overflow-hidden">
            {/* Global Deep Blue Corner Glows (No Cyan/Light Blue) */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#0051e0]/15 via-[#022b7a]/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-10"></div>
            <div className="absolute top-[30%] left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#022b7a]/10 via-[#0051e0]/5 to-transparent blur-[140px] rounded-full pointer-events-none -z-10 transform -translate-x-1/2"></div>
            <div className="absolute top-[70%] right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#0051e0]/10 via-[#022b7a]/5 to-transparent blur-[150px] rounded-full pointer-events-none -z-10 transform translate-x-1/3"></div>
            <div className="absolute bottom-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#022b7a]/15 via-[#0051e0]/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

            <Hero />
            <Deconstat />
            <SolutionsAvantages />
            <Piliers />
            <Resultats />
            <Pourquoi />
            <Livrable />
            <PreuveSociale />
            <Equipe />
            <Offres />
            <Contact />
        </main>
    );
}
