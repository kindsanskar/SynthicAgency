/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { HomePage } from './pages/HomePage';
import { AiStudioPage } from './pages/AiStudioPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Handle URL Hash or Path mapping on load & popstate
  useEffect(() => {
    const parsePageFromUrl = (): PageId => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      const pathname = window.location.pathname.replace(/^\//, '');

      const target = hash || pathname;
      if (target.includes('ai-studio')) return 'ai-studio';
      if (target.includes('pricing')) return 'pricing';
      if (target.includes('about')) return 'about';
      return 'home';
    };

    setCurrentPage(parsePageFromUrl());

    const handlePopState = () => {
      setCurrentPage(parsePageFromUrl());
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    const hash = page === 'home' ? '' : `#${page}`;
    window.history.pushState(null, '', window.location.pathname + hash);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0C14] text-white flex flex-col relative selection:bg-[#0066FF] selection:text-white">
      {/* Background Cybernetic Dot/Grid Ambient Overlay */}
      <div className="fixed inset-0 bg-cyber-grid opacity-30 pointer-events-none z-0" />
      
      {/* Persistent Navbar */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Page Content */}
      <main className="flex-1 relative z-10">
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'ai-studio' && <AiStudioPage onNavigate={navigateTo} />}
        {currentPage === 'pricing' && <PricingPage onNavigate={navigateTo} />}
        {currentPage === 'about' && <AboutPage onNavigate={navigateTo} />}
      </main>

      {/* Persistent Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Persistent Floating WhatsApp & Call Quick Access */}
      <WhatsAppFloatingButton />
    </div>
  );
}
