import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

export default function PolitiqueConfidentialite() {
    usePageMeta(
        'Politique de confidentialité | RE7SET',
        'Politique de confidentialité et traitement des données personnelles du site RE7SET.'
    );
    return (
        <main className="min-h-screen bg-background pt-40 pb-24 px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
                <Link to="/" className="text-primary text-sm font-mono hover:underline mb-8 block">&larr; Retour à l'accueil</Link>

                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-12">Politique de confidentialité</h1>

                <div className="prose prose-sm max-w-none text-foreground/80 space-y-10">

                    <section>
                        <h2 className="text-xl font-sans font-bold text-foreground mb-4">Responsable du traitement</h2>
                        <p>
                            RE7SET<br />
                            3 boulevard Sébastopol, 75001 Paris, France<br />
                            Email : <a href="mailto:contact@re7set.com" className="text-primary hover:underline">contact@re7set.com</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-sans font-bold text-foreground mb-4">Données collectées</h2>
                        <p>
                            Nous collectons uniquement les données que vous nous transmettez volontairement via le formulaire de contact : nom, adresse e-mail, numéro de téléphone (optionnel), et contenu de votre message.
                        </p>
                        <p>
                            Ces données sont utilisées exclusivement pour répondre à vos demandes et ne sont ni cédées, ni vendues, ni louées à des tiers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-sans font-bold text-foreground mb-4">Durée de conservation</h2>
                        <p>
                            Vos données sont conservées pour une durée maximale de 3 ans à compter de notre dernier échange, conformément aux recommandations de la CNIL.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-sans font-bold text-foreground mb-4">Vos droits</h2>
                        <p>
                            Conformément au RGPD (Règlement UE 2016/679) et à la loi Informatique et Libertés, vous disposez des droits suivants :
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Droit d'accès à vos données personnelles</li>
                            <li>Droit de rectification des données inexactes</li>
                            <li>Droit à l'effacement (« droit à l'oubli »)</li>
                            <li>Droit d'opposition au traitement</li>
                            <li>Droit à la portabilité des données</li>
                            <li>Droit de limitation du traitement</li>
                        </ul>
                        <p className="mt-4">
                            Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@re7set.com" className="text-primary hover:underline">contact@re7set.com</a>. Nous nous engageons à répondre dans un délai de 30 jours.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-sans font-bold text-foreground mb-4">Cookies</h2>
                        <p>
                            Ce site n'utilise pas de cookies publicitaires ou de traçage. Seuls des cookies strictement nécessaires au fonctionnement du site (préférences de consentement) peuvent être déposés sur votre appareil.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-sans font-bold text-foreground mb-4">Hébergement et sécurité</h2>
                        <p>
                            Ce site est hébergé par Vercel Inc. (440 N Barranca Ave #4133, Covina, CA 91723, États-Unis). Les transmissions de données sont sécurisées par protocole HTTPS/TLS.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-sans font-bold text-foreground mb-4">Réclamation</h2>
                        <p>
                            Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a>.
                        </p>
                    </section>

                </div>
            </div>
        </main>
    );
}
