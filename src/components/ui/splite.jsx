import { Suspense, lazy, useState, useEffect, useRef } from 'react';
import ErrorBoundary from '../ErrorBoundary';

const Spline = lazy(() => import('@splinetool/react-spline'));

const SplineFallback = () => (
    <div className="w-full h-full flex items-center justify-center bg-white/5 rounded-xl">
        <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
    </div>
);

const SplineError = () => (
    <div className="w-full h-full flex items-center justify-center">
        <span className="text-muted text-sm">Scène 3D indisponible</span>
    </div>
);

export function SplineScene({ scene, className }) {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={containerRef} className={className}>
            {isVisible ? (
                <ErrorBoundary fallback={<SplineError />}>
                    <Suspense fallback={<SplineFallback />}>
                        <Spline scene={scene} className="w-full h-full" />
                    </Suspense>
                </ErrorBoundary>
            ) : (
                <SplineFallback />
            )}
        </div>
    );
}
