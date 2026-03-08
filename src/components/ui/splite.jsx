import { Suspense, lazy } from 'react';
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
    return (
        <ErrorBoundary fallback={<SplineError />}>
            <Suspense fallback={<SplineFallback />}>
                <Spline scene={scene} className={className} />
            </Suspense>
        </ErrorBoundary>
    );
}
