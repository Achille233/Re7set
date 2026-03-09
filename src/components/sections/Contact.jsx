import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, ArrowRight, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const formRef = useRef(null);
    const [formState, setFormState] = useState('idle'); // idle | loading | success | error

    useEffect(() => {
        if (!formRef.current) return;

        const ctx = gsap.context(() => {
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
        }, formRef);

        return () => ctx.revert();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormState('loading');

        const data = Object.fromEntries(new FormData(e.target));

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });

            if (res.ok) {
                setFormState('success');
                e.target.reset();
            } else {
                setFormState('error');
            }
        } catch {
            setFormState('error');
        }
    };

    return (
        <section id="contact" className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-transparent">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">

                    {/* Left Column — Référente */}
                    <div className="flex flex-col items-start">
                        <span className="text-sm uppercase tracking-widest font-mono text-muted mb-6 block">
                            Nous contacter
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium tracking-tight mb-10">
                            <span className="text-foreground">Parlons de </span>
                            <span className="text-primary font-serif italic">votre cabinet.</span>
                        </h2>

                        {/* Référente card */}
                        <div className="flex flex-col items-start w-full max-w-sm mb-12">
                            <div className="flex items-center gap-5 w-full mb-6">
                                <div className="w-20 h-20 rounded-full overflow-hidden border-[3px] border-white shadow-lg shrink-0">
                                    <img src="/Sibylle.jpg" alt="Sibylle D." className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col text-left">
                                    <p className="text-lg font-bold font-sans text-foreground mb-0.5">Sibylle D.</p>
                                    <p className="text-sm text-muted">Avocate consultante &<br />co-fondatrice</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 w-full text-left pl-1">
                                <a href={SITE_CONFIG.phoneHref} className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors">
                                    <Phone size={18} className="text-primary shrink-0" />
                                    {SITE_CONFIG.phone}
                                </a>
                                <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors">
                                    <Mail size={18} className="text-primary shrink-0" />
                                    {SITE_CONFIG.email}
                                </a>
                            </div>
                        </div>

                        <a
                            href={SITE_CONFIG.calendlyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 bg-foreground text-white px-6 py-3.5 rounded-lg font-medium text-sm hover:bg-foreground/90 transition-colors w-full max-w-xs justify-center"
                        >
                            Prendre rendez-vous
                            <Phone size={16} className="group-hover:rotate-12 transition-transform" />
                        </a>
                    </div>

                    {/* Right Column: Form */}
                    <div ref={formRef}>
                        {formState === 'success' ? (
                            <div className="flex flex-col items-center justify-center text-center py-20 gap-4">
                                <CheckCircle size={48} className="text-green-500" />
                                <h3 className="text-2xl font-serif text-foreground">Message envoyé !</h3>
                                <p className="text-muted text-sm max-w-xs">Nous reviendrons vers vous dans les 24h. En cas d'urgence, appelez-nous directement.</p>
                                <button
                                    onClick={() => setFormState('idle')}
                                    className="mt-4 text-sm text-primary hover:underline"
                                >
                                    Envoyer un autre message
                                </button>
                            </div>
                        ) : (
                            <form className="space-y-5" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label htmlFor="contact-nom" className="text-xs font-bold text-foreground ml-1">Nom complet</label>
                                        <input
                                            id="contact-nom"
                                            name="nom"
                                            type="text"
                                            required
                                            placeholder="Jean Dupont"
                                            className="w-full bg-white border border-foreground/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="contact-email" className="text-xs font-bold text-foreground ml-1">Email professionnel</label>
                                        <input
                                            id="contact-email"
                                            name="email"
                                            type="email"
                                            required
                                            placeholder="jean.dupont@cabinet.fr"
                                            className="w-full bg-white border border-foreground/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label htmlFor="contact-tel" className="text-xs font-bold text-foreground ml-1">Téléphone</label>
                                        <input
                                            id="contact-tel"
                                            name="telephone"
                                            type="tel"
                                            placeholder="+33 6 XX XX XX XX"
                                            className="w-full bg-white border border-foreground/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="contact-service" className="text-xs font-bold text-foreground ml-1">Service souhaité</label>
                                        <select
                                            id="contact-service"
                                            name="service"
                                            className="w-full bg-white border border-foreground/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-foreground appearance-none cursor-pointer"
                                        >
                                            <option value="">Sélectionner un service</option>
                                            <option>Audit Stratégique Gratuit</option>
                                            <option>Diagnostic Stratégique Global</option>
                                            <option>Audits & Optimisations SEO</option>
                                            <option>Outils & Solutions IA</option>
                                            <option>Coaching & Transformation</option>
                                            <option>Autre demande</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="contact-message" className="text-xs font-bold text-foreground ml-1">Votre message</label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        rows="6"
                                        required
                                        placeholder="Parlez-nous de votre cabinet et de vos besoins..."
                                        className="w-full bg-white border border-foreground/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                                    />
                                </div>

                                {formState === 'error' && (
                                    <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                                        <AlertCircle size={16} className="shrink-0" />
                                        Une erreur est survenue. Réessayez ou contactez-nous directement.
                                    </div>
                                )}

                                <div className="relative w-full group/submit mt-4">
                                    {/* Pulse effect like in the Header */}
                                    <div className="absolute inset-0 bg-primary/40 rounded-full blur-[20px] animate-[pulse_3s_ease-in-out_infinite] transition-all duration-300 opacity-60 group-hover/submit:opacity-100"></div>

                                    <button
                                        type="submit"
                                        disabled={formState === 'loading'}
                                        className="relative w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(37,99,235,0.6)] border border-white/20 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    >
                                        {/* Inner Bright Ring */}
                                        <div className="absolute inset-0 ring-[1px] ring-blue-300/50 rounded-full pointer-events-none"></div>

                                        {/* Subtle inner light */}
                                        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/20 blur-[15px] opacity-40 mix-blend-overlay pointer-events-none"></div>

                                        {/* Shimmer effect background */}
                                        {formState !== 'loading' && (
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/submit:animate-[shimmer_1.5s_infinite]" />
                                        )}

                                        <span className="relative z-10 text-sm md:text-base flex items-center gap-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                                            {formState === 'loading' ? (
                                                <>
                                                    <Loader size={18} className="animate-spin" />
                                                    Envoi en cours…
                                                </>
                                            ) : (
                                                'Envoyer ma demande'
                                            )}
                                        </span>

                                        {formState !== 'loading' && (
                                            <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover/submit:bg-white/30 transition-colors">
                                                <svg className="w-4 h-4 transform group-hover/submit:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        )}
                                    </button>
                                </div>

                                <p className="text-center text-xs text-muted flex items-center justify-center gap-1">
                                    🔒 Vos données sont traitées de manière confidentielle. NDA disponible sur demande.
                                </p>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
