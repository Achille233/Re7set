import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);

    // Raw mouse coordinates
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Smooth springs for the outer ring (0.12s lag approx)
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const ringX = useSpring(mouseX, springConfig);
    const ringY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const updateMousePosition = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isInteractable =
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') != null ||
                target.closest('button') != null;

            if (isInteractable) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            {/* Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[100] rounded-full border border-foreground/40 mix-blend-difference"
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    width: isHovering ? 48 : 32,
                    height: isHovering ? 48 : 32,
                    backgroundColor: isHovering ? 'rgba(9, 9, 11, 0.1)' : 'transparent',
                }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
            />
            {/* Inner Dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[100] bg-white rounded-full mix-blend-difference"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    width: isHovering ? 16 : 8,
                    height: isHovering ? 16 : 8,
                }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
            />
        </>
    );
}
