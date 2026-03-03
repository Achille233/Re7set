import React from 'react';

// Wrapper for lines so we can animate them via GSAP or Framer Motion
// We use Framer Motion here for fine-grained control if GSAP gets tricky with React re-renders.
// But the prompt asked for GSAP for title reveal. We can do it manually or via Framer Motion. 
// "Technique : GSAP + ScrollTrigger"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function RevealText({ text, className = "", stagger = 0.08, as: Component = "h2" }) {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Select the words
        const words = containerRef.current.querySelectorAll('.reveal-word');

        gsap.fromTo(words,
            { y: '100%' },
            {
                y: '0%',
                duration: 1,
                ease: 'power3.out',
                stagger: stagger,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                }
            }
        );
    }, [stagger]);

    // naive split by words
    const words = text.split(' ');

    return (
        <Component ref={containerRef} className={className}>
            {words.map((word, index) => (
                <span key={index} className="inline-block overflow-hidden align-bottom tracking-tight pb-1">
                    <span className="inline-block reveal-word will-change-transform">
                        {word}&nbsp;
                    </span>
                </span>
            ))}
        </Component>
    );
}
