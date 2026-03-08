import React from 'react';
import { usePageMeta } from '../hooks/usePageMeta';
import Hero from '../components/sections/Hero';
import Piliers from '../components/sections/Piliers';
import Deconstat from '../components/sections/Deconstat';
import Pourquoi from '../components/sections/Pourquoi';
import Livrable from '../components/sections/Livrable';
import Equipe from '../components/sections/Equipe';
import PricingNiveau01 from '../components/sections/PricingNiveau01';
import PricingNiveau02 from '../components/sections/PricingNiveau02';
import PricingNiveau03 from '../components/sections/PricingNiveau03';
import OutilsIA from '../components/sections/OutilsIA';
import PreuveSociale from '../components/sections/PreuveSociale';
import Contact from '../components/sections/Contact';

export default function Home() {
    usePageMeta(
        'RE7SET — Stratégie Digitale & IA pour Avocats et Professions Libérales',
        'RE7SET accompagne les cabinets d\'avocats, notaires et experts-comptables dans leur transformation digitale. Audits SEO, diagnostic stratégique et intégration IA sur mesure.'
    );
    return (
        <main className="relative z-10 w-full overflow-hidden bg-transparent">
            <Hero />
            <Piliers />
            <Deconstat />
            <Pourquoi />
            <Livrable />
            <Equipe />
            <PricingNiveau01 />
            <PricingNiveau02 />
            <PricingNiveau03 />
            <OutilsIA />
            <PreuveSociale />
            <Contact />
        </main>
    );
}
