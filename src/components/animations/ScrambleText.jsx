import React, { useEffect, useState, useRef } from 'react';

const CHARS = '0123456789%+$';

export default function ScrambleText({ text, className = '' }) {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef(null);
    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        let iterations = 0;
        const maxIterations = 8; // determines scramble speed (0.4s total at 50ms)

        intervalRef.current = setInterval(() => {
            setDisplayText((prev) =>
                prev
                    .split('')
                    .map((char, index) => {
                        // Keep spaces intact
                        if (char === ' ') return ' ';
                        if (iterations >= maxIterations) return text[index];
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join('')
            );
            iterations += 1;

            if (iterations > maxIterations) {
                clearInterval(intervalRef.current);
                setDisplayText(text);
            }
        }, 50); // 8 * 50ms = 400ms = 0.4s
    };

    const handleMouseLeave = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setDisplayText(text);
    };

    useEffect(() => {
        const currentInterval = intervalRef.current;
        const currentTimeout = timeoutRef.current;
        return () => {
            if (currentInterval) clearInterval(currentInterval);
            if (currentTimeout) clearTimeout(currentTimeout);
        };
    }, []);

    return (
        <span
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={className}
        >
            {displayText}
        </span>
    );
}
