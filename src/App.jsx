import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import DataMesh from './components/animations/DataMesh';
import CustomCursor from './components/animations/CustomCursor';
import ScrollManager from './components/animations/ScrollManager';
import Header from './components/layout/Header';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import AuditStrategique from './pages/AuditStrategique';
import MiseEnOeuvre from './pages/MiseEnOeuvre';

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
      <DataMesh />
      <ScrollManager />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/offres/audits-strategiques" element={<AuditStrategique />} />
        <Route path="/offres/mise-en-oeuvre" element={<MiseEnOeuvre />} />
      </Routes>
    </>
  );
}
