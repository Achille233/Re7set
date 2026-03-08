import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, ArrowRight } from 'lucide-react';

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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">

                    {/* Left Column — Référente */}
                    <div className="flex flex-col items-start">
                        <span className="text-sm uppercase tracking-widest font-mono text-muted mb-6 block">
                            Nous contacter
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-10">
                            <span className="text-foreground">Parlons de </span>
                            <span className="text-primary">votre cabinet.</span>
                        </h2>

                        {/* Référente card */}
                        <div className="flex flex-col items-center text-center w-full max-w-xs mb-10">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-5">
                                <img src="/Sibylle.jpg" alt="Sibylle" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-lg font-bold font-sans text-foreground mb-1">Sibylle D.</p>
                            <p className="text-sm text-muted mb-5">Avocate consultante & co-fondatrice</p>

                            <div className="flex flex-col gap-3 w-full text-left">
                                <a href="tel:+33767985013" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors">
                                    <Phone size={16} className="text-primary shrink-0" />
                                    +33 7 67 98 50 13
                                </a>
                                <a href="mailto:contact@re7set.com" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors">
                                    <Mail size={16} className="text-primary shrink-0" />
                                    contact@re7set.com
                                </a>
                            </div>
                        </div>

                        <a
                            href="https://calendly.com/sibylle-/30min?month=2026-02"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 bg-foreground text-white px-6 py-3.5 rounded-lg font-medium text-sm hover:bg-foreground/90 transition-colors w-full max-w-xs justify-center"
                        >
                            Prendre rendez-vous
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Right Column: Form */}
                    <div ref={formRef}>
                        <form className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label htmlFor="contact-nom" className="text-xs font-bold text-foreground">Nom complet</label>
                                    <input id="contact-nom" type="text" placeholder="Jean Dupont" className="w-full bg-white border border-foreground/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="contact-email" className="text-xs font-bold text-foreground">Email professionnel</label>
                                    <input id="contact-email" type="email" placeholder="jean.dupont@cabinet.fr" className="w-full bg-white border border-foreground/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label htmlFor="contact-tel" className="text-xs font-bold text-foreground">Téléphone</label>
                                    <input id="contact-tel" type="tel" placeholder="+33 6 XX XX XX XX" className="w-full bg-white border border-foreground/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="contact-service" className="text-xs font-bold text-foreground">Service souhaité</label>
                                    <select id="contact-service" className="w-full bg-white border border-foreground/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-foreground appearance-none cursor-pointer">
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
                                    rows="6"
                                    placeholder="Parlez-nous de votre cabinet et de vos besoins..."
                                    className="w-full bg-white border border-foreground/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                                />
                            </div>

                            <button type="button" className="group relative w-full bg-primary text-white py-4 rounded-lg font-medium flex items-center justify-center gap-2 overflow-hidden shadow-lg shadow-primary/20 hover:brightness-110 transition-all">
                                <span className="relative flex items-center gap-2">
                                    <ArrowRight size={18} />
                                    Envoyer ma demande
                                </span>
                                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:left-[200%] transition-all duration-700 ease-out" />
                            </button>

                            <p className="text-center text-xs text-muted flex items-center justify-center gap-1">
                                🔒 Vos données sont traitées de manière confidentielle. NDA disponible sur demande.
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
