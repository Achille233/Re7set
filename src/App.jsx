import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CustomCursor from './components/animations/CustomCursor';
import ScrollManager from './components/animations/ScrollManager';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import AuditStrategique from './pages/AuditStrategique';
import MiseEnOeuvre from './pages/MiseEnOeuvre';
import DiagnosticStrategique from './pages/DiagnosticStrategique';
import OutilsIA from './pages/OutilsIA';
import MentionsLegales from './pages/MentionsLegales';
import VisibiliteSEO from './pages/VisibiliteSEO';
import NotFound from './pages/NotFound';
import CookieBanner from './components/ui/CookieBanner';

export default function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div className="grain-overlay" />
      <CustomCursor />
      <ScrollManager />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offres/diagnostic-strategique" element={<DiagnosticStrategique />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/offres/audits-strategiques" element={<AuditStrategique />} />
        <Route path="/offres/mise-en-oeuvre" element={<MiseEnOeuvre />} />
        <Route path="/offres/visibilite-seo" element={<VisibiliteSEO />} />
        <Route path="/outils-ia" element={<OutilsIA />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <CookieBanner />
    </>
  );
}
