import { Component } from 'react';

/**
 * Error Boundary — attrape les erreurs React dans l'arbre enfant
 * et affiche un fallback propre plutôt qu'un écran blanc.
 *
 * Usage:
 * <ErrorBoundary fallback={<div>Erreur de chargement</div>}>
 *   <ComponentFragile />
 * </ErrorBoundary>
 */
export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // Vous pouvez logger l'erreur ici (Sentry, etc.)
        console.error('[ErrorBoundary]', error, info);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback ?? null;
        }
        return this.props.children;
    }
}
