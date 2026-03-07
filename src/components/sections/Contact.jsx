import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const formRef = useRef(null);

    useEffect(() => {
        if (!formRef.current) return;

        gsap.fromTo(formRef.current,
            { x: 40, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: formRef.current,
                    start: 'top 85%',
                }
            }
        );
    }, []);

    return (
        <section id="contact" className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-transparent">
            <div className="max-w-7xl mx-auto">
                <span className="text-xs uppercase tracking-widest font-mono text-muted mb-4 block">
                    Nous contacter
                </span>

                <h2 className="text-3xl md:text-4xl font-serif mb-16 max-w-3xl">
                    <span className="text-foreground">Parlons de </span>
                    <span className="text-primary">votre cabinet.</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column */}
                    <div className="flex flex-col gap-10 justify-center">

                        <div className="flex gap-6 items-start">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                <Mail />
                            </div>
                            <div>
                                <span className="text-sm font-bold text-foreground block mb-1">Email</span>
                                <a href="mailto:contact@re7set.com" className="text-primary hover:underline font-medium mb-1 block">contact@re7set.com</a>
                                <span className="text-xs text-muted">Réponse rapide garantie</span>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                <Phone />
                            </div>
                            <div>
                                <span className="text-sm font-bold text-foreground block mb-1">Téléphone</span>
                                <a href="tel:+33767985013" className="text-primary hover:underline font-medium mb-1 block">+33 7 67 98 50 13</a>
                                <span className="text-xs text-muted">Lun-Ven, 9h-18h</span>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                <MapPin />
                            </div>
                            <div>
                                <span className="text-sm font-bold text-foreground block mb-1">Nos bureaux</span>
                                <address className="text-muted text-sm not-italic mb-2">
                                    3 boulevard Sébastopol<br />
                                    75001 Paris, France
                                </address>
                                <a href="#" className="text-xs text-primary font-medium hover:underline flex items-center gap-1">
                                    Voir sur la carte <ArrowRight size={12} />
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Form */}
                    <div
                        ref={formRef}
                        className="bg-secondary border border-foreground/5 rounded-2xl p-8 md:p-12 shadow-xl"
                    >
                        <h3 className="text-xl md:text-2xl font-bold font-sans text-foreground mb-2">Envoyez-nous un message</h3>
                        <p className="text-sm text-muted mb-8">Nous vous répondons sous 24h ouvrées.</p>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="contact-nom" className="text-xs font-bold text-foreground">Nom complet</label>
                                    <input id="contact-nom" type="text" placeholder="Jean Dupont" className="w-full bg-white border border-foreground/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="contact-email" className="text-xs font-bold text-foreground">Email professionnel</label>
                                    <input id="contact-email" type="email" placeholder="jean.dupont@cabinet.fr" className="w-full bg-white border border-foreground/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="contact-tel" className="text-xs font-bold text-foreground">Téléphone</label>
                                    <input id="contact-tel" type="tel" placeholder="+33 6 XX XX XX XX" className="w-full bg-white border border-foreground/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="contact-service" className="text-xs font-bold text-foreground">Service souhaité</label>
                                    <select id="contact-service" className="w-full bg-white border border-foreground/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground appearance-none cursor-pointer">
                                        <option>Audit Positionnement 250€</option>
                                        <option>Audit SEO & GEO 300€</option>
                                        <option>Audit IA 450€</option>
                                        <option>Diagnostic Global 900€</option>
                                        <option>Mise en œuvre sur devis</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="contact-message" className="text-xs font-bold text-foreground">Votre message</label>
                                <textarea
                                    id="contact-message"
                                    rows="5"
                                    placeholder="Parlez-nous de votre cabinet et de vos besoins..."
                                    className="w-full bg-white border border-foreground/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                                />
                            </div>

                            <button type="button" className="group relative w-full bg-primary text-white py-4 rounded-lg font-medium flex items-center justify-center gap-2 overflow-hidden shadow-lg shadow-primary/20">
                                <span className="relative"><ArrowRight size={18} className="inline mr-2" /> Envoyer ma demande</span>
                                {/* Light beam hover effect */}
                                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:left-[200%] transition-all duration-700 ease-out" />
                            </button>

                            <p className="text-center text-xs text-muted mt-6 flex items-center justify-center gap-1">
                                🔒 Vos données sont traitées de manière confidentielle. NDA disponible sur demande.
                            </p>
                        </form>

                    </div>

                </div>
            </div>
        </section>
    );
}
