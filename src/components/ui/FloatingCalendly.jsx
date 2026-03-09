import React, { useState, useEffect } from 'react';
import { PopupModal } from 'react-calendly';
import { Calendar } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';

export default function FloatingCalendly() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Show after scrolling down a bit
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger once to check initial position
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* The Trigger Button */}
            <div
                className={`fixed bottom-6 right-6 z-[90] transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90 pointer-events-none'}`}
            >
                <div className="relative group">
                    {/* Animated Glow effect */}
                    <div className="absolute inset-0 bg-primary/40 rounded-full blur-xl group-hover:bg-primary/60 transition-colors duration-500 group-hover:animate-pulse"></div>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="relative flex items-center justify-center gap-3 bg-[#0d7df2] text-white shadow-2xl hover:shadow-[0_10px_40px_rgba(13,125,242,0.6)] px-5 py-4 md:px-6 md:py-4 rounded-full font-medium transition-transform duration-300 hover:-translate-y-1 overflow-hidden group border border-white/10"
                    >
                        {/* Shimmer sweep */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>

                        <div className="relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                            <Calendar size={14} className="text-white" />
                        </div>
                        <span className="relative z-10 hidden sm:inline-block font-sans font-semibold tracking-wide text-[15px]">Réserver un Audit</span>
                    </button>

                    {/* Live Status dot */}
                    <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 shadow-lg shadow-black/20 rounded-full">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#0d7df2]"></span>
                    </span>
                </div>
            </div>

            {/* The Calendly Modal */}
            <PopupModal
                url={SITE_CONFIG.calendlyUrl}
                onModalClose={() => setIsOpen(false)}
                open={isOpen}
                rootElement={document.getElementById("root")}
            />
        </>
    );
}
