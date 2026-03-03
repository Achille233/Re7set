import React from 'react';
import { TestimonialsSection } from '../blocks/testimonials-with-marquee';

const TESTIMONIALS = [
    {
        text: "L'audit de positionnement a été une révélation. On pensait être visibles, mais on passait complètement à côté de notre cible. Le livrable est clair, actionnable, et notre trafic qualifié a augmenté dès le premier mois.",
        author: {
            name: "Caroline V.",
            handle: "Avocate d'affaires",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
        }
    },
    {
        text: "RE7SET nous a permis de comprendre pourquoi nos confrères nous devançaient sur Google. Le diagnostic complet a structuré notre roadmap digitale sur 90 jours. Professionnel et rigoureux.",
        author: {
            name: "Pierre-Alexandre M.",
            handle: "Expert-comptable",
            avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
        }
    },
    {
        text: "Je veille personnellement à ce que chaque recommandation respecte scrupuleusement notre déontologie. C'est une solution pensée pour les professions réglementées.",
        author: {
            name: "Sibylle D.",
            handle: "Avocate consultante",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
        }
    },
    {
        text: "L'équipe de RE7SET a su moderniser notre image sans perturber notre clientèle historique. Un travail d'orfèvre sur notre positionnement SEO et notre site Webflow.",
        author: {
            name: "Jean-Philippe T.",
            handle: "Notaire associé",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        }
    },
    {
        text: "L'approche sur-mesure et l'accompagnement transparent ont été déterminants. On a récupéré 100% de notre investissement en moins de 3 mois grâce à de nouveaux dossiers.",
        author: {
            name: "Camille L.",
            handle: "Dirigeante de cabinet",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
        }
    }
];

export default function PreuveSociale() {
    return (
        <TestimonialsSection
            title="La parole aux Experts."
            description="Ils ont choisi de clarifier leur positionnement et de booster la croissance de leur cabinet. Voici leur retour d'expérience vérifié."
            testimonials={TESTIMONIALS}
        />
    );
}
