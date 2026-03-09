import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CustomCursor from './components/animations/CustomCursor';
import ScrollManager from './components/animations/ScrollManager';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CookieBanner from './components/ui/CookieBanner';

const Home = lazy(() => import('./pages/Home'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const AuditStrategique = lazy(() => import('./pages/AuditStrategique'));
const MiseEnOeuvre = lazy(() => import('./pages/MiseEnOeuvre'));
const DiagnosticStrategique = lazy(() => import('./pages/DiagnosticStrategique'));
const OutilsIA = lazy(() => import('./pages/OutilsIA'));
const MentionsLegales = lazy(() => import('./pages/MentionsLegales'));
const VisibiliteSEO = lazy(() => import('./pages/VisibiliteSEO'));
const NotFound = lazy(() => import('./pages/NotFound'));

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

      <Suspense fallback={null}>
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
      </Suspense>

      <Footer />
      <CookieBanner />
    </>
  );
}
