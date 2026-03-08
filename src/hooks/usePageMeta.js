import { useEffect } from 'react';
import { SITE_CONFIG } from '../config/site';

/**
 * Met à jour le <title> et la meta description pour chaque page.
 * Usage: usePageMeta('Titre de la page', 'Description de la page');
 */
export function usePageMeta(title, description) {
    useEffect(() => {
        document.title = title || SITE_CONFIG.defaultTitle;

        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && description) {
            metaDesc.setAttribute('content', description);
        }

        // Restaure les valeurs par défaut au démontage
        return () => {
            document.title = SITE_CONFIG.defaultTitle;
            if (metaDesc) {
                metaDesc.setAttribute('content', SITE_CONFIG.defaultDescription);
            }
        };
    }, [title, description]);
}
