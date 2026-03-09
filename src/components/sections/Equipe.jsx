const TEAM = [
    {
        name: "Stanislas B.",
        role: "DIRECTION COMMERCIALE",
        quote: '"Vision Business & ROI"',
        desc: "Ancien chef d'entreprise et cadre. Sa seule obsession : la rentabilité et la performance commerciale de votre expertise.",
        initial: "S",
        image: "/Stan.jpeg"
    },
    {
        name: "Assil S.",
        role: "EXPERT SEO",
        quote: '"Architecture Technique & Vision"',
        desc: "Il traduit les algorithmes complexes de Google en une stratégie de communication limpide et pérenne.",
        initial: "A",
        image: "/Assil.jpg"
    },
    {
        name: "Thomas D.",
        role: "MANAGER DES VENTES",
        quote: '"Accompagnement & Suivi"',
        desc: "Il pilote les équipes pour garantir une réactivité totale. Votre satisfaction est sa priorité absolue.",
        initial: "T",
        image: "/Thomas.jpg"
    },
    {
        name: "Maître Sibylle D.",
        role: "AVOCATE CONSULTANTE",
        quote: '"Légitimité & Conformité"',
        desc: "Elle audite les besoins réels de la profession. Chaque recommandation est alignée avec la déontologie.",
        initial: "SD",
        image: "/Sibylle.jpg"
    },
    {
        name: "Achille B.",
        role: "CONSULTANT & EXPERT IA",
        quote: '"Intelligence Artificielle & GEO"',
        desc: "Spécialiste de l'IA appliquée aux professions réglementées. Il conçoit les stratégies GEO qui positionnent votre cabinet dans les moteurs de demain.",
        initial: "AB",
        image: "/Achille.jpg"
    }
];

export default function Equipe() {
    return (
        <section id="equipe" className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <span className="text-sm uppercase tracking-widest font-mono text-muted mb-4 block">
                        Notre équipe
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-foreground mb-4 max-w-3xl">
                        <span className="block">Une équipe taillée pour</span>
                        <span className="block text-primary font-serif italic">l'excellence.</span>
                    </h2>
                    <p className="text-base font-sans text-muted max-w-2xl">
                        La rencontre unique entre l'expertise bancaire, la maîtrise technique du SEO et la connaissance intime du monde juridique.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {TEAM.map((member, i) => (
                        <div
                            key={i}
                            className="team-card group bg-white border border-foreground/10 p-6 flex flex-col hover:shadow-lg transition-all duration-300 relative"
                        >
                            {/* Top border hover effect */}
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />

                            {/* Avatar / Photo */}
                            <div className="w-24 h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-3xl mb-6 overflow-hidden">
                                {member.image ? (
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
                                ) : (
                                    member.initial
                                )}
                            </div>

                            <h3 className="font-bold font-sans text-foreground text-base md:text-lg mb-1">{member.name}</h3>
                            <p className="text-[11px] font-mono text-primary tracking-widest uppercase mb-4">{member.role}</p>

                            <p className="text-sm font-serif text-muted mb-3">
                                {member.quote}
                            </p>

                            <p className="text-[12px] font-sans text-muted/80 leading-relaxed mt-auto">
                                {member.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
