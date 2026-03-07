import React from 'react';
import { Link } from 'react-router-dom';

export default function MentionsLegales() {
    return (
        <main className="min-h-screen bg-background pt-40 pb-24 px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
                <Link to="/" className="text-primary text-sm font-mono hover:underline mb-8 block">&larr; Retour à l'accueil</Link>

                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-12">Mentions légales</h1>

                <div className="prose prose-sm max-w-none text-foreground/80 space-y-10">

                    <section>
                        <h2 className="text-xl font-sans font-bold text-foreground mb-4">Éditeur du site</h2>
                        <p>
                            RE7SET<br />
                            3 boulevard Sébastopol, 75001 Paris, France<br />
                            Email : <a href="mailto:contact@re7set.com" className="text-primary hover:underline">contact@re7set.com</a><br />
                            Téléphone : <a href="tel:+33767985013" className="text-primary hover:underline">+33 7 67 98 50 13</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-sans font-bold text-foreground mb-4">Hébergement</h2>
                        <p>
                            Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-sans font-bold text-foreground mb-4">Propriété intellectuelle</h2>
                        <p>
                            L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de RE7SET, sauf mention contraire. Toute reproduction, distribution, modification ou utilisation de ces contenus sans autorisation préalable est strictement interdite.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-sans font-bold text-foreground mb-4">Protection des données personnelles</h2>
                        <p>
                            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                        </p>
                        <p>
                            Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes. Elles ne sont ni cédées ni vendues à des tiers.
                        </p>
                        <p>
                            Pour exercer vos droits, contactez-nous à l'adresse : <a href="mailto:contact@re7set.com" className="text-primary hover:underline">contact@re7set.com</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-sans font-bold text-foreground mb-4">Cookies</h2>
                        <p>
                            Ce site n'utilise pas de cookies de suivi publicitaire. Seuls des cookies strictement nécessaires au fonctionnement du site peuvent être utilisés.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-sans font-bold text-foreground mb-4">Responsabilité</h2>
                        <p>
                            RE7SET s'efforce de fournir des informations aussi précises que possible. Toutefois, elle ne saurait être tenue responsable des omissions, inexactitudes ou carences dans la mise à jour de ces informations.
                        </p>
                    </section>

                </div>
            </div>
        </main>
    );
}
