/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { OfflineIndicator } from './components/OfflineIndicator';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { CatalogPage } from './pages/CatalogPage';
import { FloriculturePage } from './pages/FloriculturePage';
import { ValueAdditionPage } from './pages/ValueAdditionPage';
import { OrderPage } from './pages/OrderPage';
import { ContactUsPage } from './pages/ContactUsPage';

function AppLayout({ lang, onToggleLang }: { lang: Language; onToggleLang: () => void }) {
  const navigate = useNavigate();

  const handleOpenOrder = (cropId?: string) => {
    if (cropId) {
      navigate(`/order?crop=${encodeURIComponent(cropId)}`);
    } else {
      navigate('/order');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col font-sans selection:bg-emerald-200 selection:text-emerald-950">
      <ScrollToTop />
      
      {/* Persistent Navigation Bar */}
      <Navbar
        lang={lang}
        onToggleLang={onToggleLang}
        onOpenOrderModal={() => handleOpenOrder()}
      />

      {/* Main Independent Pages Outlet */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage lang={lang} onOpenOrderModal={handleOpenOrder} />} />
          <Route path="/about" element={<AboutPage lang={lang} onOpenOrderModal={() => handleOpenOrder()} />} />
          <Route path="/services" element={<ServicesPage lang={lang} onOpenOrderModal={handleOpenOrder} />} />
          <Route path="/catalog" element={<CatalogPage lang={lang} onSelectProductForCalculator={handleOpenOrder} />} />
          <Route path="/floriculture" element={<FloriculturePage lang={lang} />} />
          <Route path="/value-addition" element={<ValueAdditionPage lang={lang} />} />
          <Route path="/order" element={<OrderPage lang={lang} />} />
          <Route path="/contact" element={<ContactUsPage lang={lang} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Persistent Global Footer */}
      <Footer lang={lang} />

      {/* Global PWA Offline Banner & Sync Toast */}
      <OfflineIndicator />
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>('en');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'sw' : 'en'));
  };

  return (
    <BrowserRouter>
      <AppLayout lang={lang} onToggleLang={toggleLanguage} />
    </BrowserRouter>
  );
}
