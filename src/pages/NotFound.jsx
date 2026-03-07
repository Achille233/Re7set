import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-background text-center">
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-6 block">Erreur 404</span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-foreground mb-4">404</h1>
            <p className="text-muted text-lg mb-10 max-w-md">
                Cette page n'existe pas ou a été déplacée. Retournez à l'accueil pour retrouver votre chemin.
            </p>
            <Link
                to="/"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-medium hover:brightness-110 transition-all shadow-[0_0_30px_-5px_rgba(37,99,235,0.3)]"
            >
                <ArrowLeft size={18} />
                Retour à l'accueil
            </Link>
        </main>
    );
}
