import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('re7set_cookie_consent');
        if (!consent) {
            const timer = setTimeout(() => setVisible(true), 10);
            return () => clearTimeout(timer);
        }
    }, []);

    const accept = () => {
        localStorage.setItem('re7set_cookie_consent', 'accepted');
        setVisible(false);
    };

    const decline = () => {
        localStorage.setItem('re7set_cookie_consent', 'declined');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-2xl">
            <div className="bg-white border border-foreground/10 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-1">
                    <p className="text-sm font-medium text-foreground mb-1">Ce site utilise des cookies</p>
                    <p className="text-xs text-muted leading-relaxed">
                        Nous utilisons des cookies pour améliorer votre expérience. Consultez notre{' '}
                        <Link to="/mentions-legales" className="text-primary underline underline-offset-2">
                            politique de confidentialité
                        </Link>.
                    </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                    <button
                        onClick={decline}
                        className="text-xs text-muted hover:text-foreground transition-colors px-4 py-2 rounded-lg border border-foreground/10 hover:border-foreground/20"
                    >
                        Refuser
                    </button>
                    <button
                        onClick={accept}
                        className="text-xs text-white bg-primary hover:brightness-110 transition-all px-4 py-2 rounded-lg font-medium"
                    >
                        Accepter
                    </button>
                    <button onClick={decline} className="text-muted hover:text-foreground transition-colors ml-1">
                        <X size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
