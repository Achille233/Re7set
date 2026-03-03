# Animation_prompt.md

Document de référence recensant toutes les animations inventées pour le système "Autorité Chirurgicale" (RE7SET), classées par couches.

---

### Le Maillage de Données
- **Couche :** Background
- **Section(s) concernée(s) :** Hero (Section 01), Le Déconstat (Section 03)
- **Description visuelle :** Un filet de géométrie composé de lignes très fines à très faible opacité (6%). L'ensemble ressemble à un réseau de neurones ou une architecture de data. Il est subtil et élégant, tournant mathématiquement de manière presque imperceptible, avec un très léger grain CSS (2-3%).
- **Comportement :** Rotation globale continue très lente. Au passage de la souris dans un rayon de 180px, les nœuds du maillage réagissent doucement, altérant géométriquement la structure comme si la présence de l'utilisateur courbait les données.
- **Technique :** Canvas API. Choisi pour des raisons de performance. Tracer des milliers de particules et de lignes requiert une approche bas niveau pour ne pas encombrer le DOM ou ralentir le scroll.
- **Paramètres clés :** Opacité des lignes à 6%, opacité du grain à 2-3%, rayon d'interaction de 180px, pas d'easing élastique pour garder un mood froid et rigoureux.
- **Prompt de reproduction :** "Crée une animation en plein écran avec la Canvas API. Dessine un maillage de points reliés par des lignes ultra-fines d'une opacité maximale de 6%. Fais tourner l'ensemble du réseau très lentement. Ajoute un comportement interactif : lorsque le curseur de la souris s'approche à moins de 180px d'un point, celui-ci doit subir une répulsion fluide et précise, qui modifie le tracé des lignes connectées."

---

### Révélation du Dossier & Stacking
- **Couche :** Scroll
- **Section(s) concernée(s) :** Toutes les sections (Animation de stacking inter-sections, Révélation des titres)
- **Description visuelle :** L'arrivée du texte imite l'ouverture d'un dossier juridique : les lignes de texte "poussent" vers le haut depuis une ligne invisible. Entre les sections, au lieu d'un défilement normal, la section courante ralentit, s'assombrit légèrement, et la nouvelle section glisse par-dessus comme un nouveau feuillet qui vient recouvrir le précédent. Les compteurs numériques s'incrémentent frénétiquement avant d'atteindre leur valeur finale au scroll.
- **Comportement :** Titres : déclenchés une fois lorsque l'élément entre dans le viewport. Sections : effet parallaxe continu lié à la position du scroll (scrub).
- **Technique :** GSAP + ScrollTrigger. Permet un contrôle absolu et synchronisé sur la chronologie du scroll pour les masques de texte et le système d'empilement global (Parallax Stacking).
- **Paramètres clés :** Assombrissement de l'ancienne section jusqu'à ~40%, décalage d'apparition des lignes de texte (stagger) de 0.1s.
- **Prompt de reproduction :** "En utilisant GSAP et ScrollTrigger, crée deux comportements globaux. Premièrement, pour chaque titre typographique majeur, anime-le pour le révéler ligne par ligne depuis le bas avec un masque vertical (`overflow: hidden`). Deuxièmement, mets en place un effet de parallax stacking entre chaque section `<section>` de la page : lors du défilement vers le bas, la section précédente doit rester relativement fixe en s'assombrissant, pendant que la section suivante vient se glisser par-dessus au premier plan."

---

### Retour Haptique Visuel
- **Couche :** Interface
- **Section(s) concernée(s) :** Curseur Global, Boutons d'action, Cards d'information métrique
- **Description visuelle :** Tout est tranchant, chirurgical et immédiat, aucune élasticité ("pas de spring bounce"). Un curseur personnalisé accompagne la navigation : un point pur éclatant entouré d'un anneau plus large et translucide avec un très léger retard. Le survol des cartes génère une illumination des bordures, voire un faisceau de lumière interne, sans déplacement tridimensionnel ("pas de float"). Sur les statistiques ou chiffres clés, un effet de brouillage numérique (Scramble) intervient brièvement.
- **Comportement :** Changements d'états instantanés ou avec transitions linéaires/rapides. Le scramble anime aléatoirement les chiffres durant 0.4s au hover avant d'afficher la valeur en dur. L'anneau du curseur suit la souris avec un lag de 0.12s et s'agrandit sur des éléments interactifs.
- **Technique :** Framer Motion (pour l'interpolation fluide du curseur) + TailwindCSS custom (pour les hovers lumineux sur bordures).
- **Paramètres clés :** Curseur : point 8px blanc, anneau extérieur 32px à 40% d'opacité, temps de lag 0.12s. Scramble : durée 0.4s. Éclat bordure : transition 0.3s ease-out.
- **Prompt de reproduction :** "Conçois un curseur personnalisé en React (Framer Motion) composé d'un point central blanc de 8px et d'un anneau clair de 32px d'opacité 40% qui suit la position réelle avec un décalage de 0.12s. Au survol d'un lien, réduis l'anneau et remplis-le. Ajoute aussi un effet 'scramble' : au survol d'un texte contenant un nombre, remplace rapidement les chiffres par des valeurs aléatoires pendant exactement 0.4 secondes avant de le figer sur la valeur finale."
