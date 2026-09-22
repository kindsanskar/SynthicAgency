import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { AGENCY_INFO } from '../data/synthicData';
import { SynthicLogo } from './SynthicLogo';
import { Phone, MessageCircle, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string; badge?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'ai-studio', label: 'AI Studio', badge: 'New' },
    { id: 'pricing', label: 'Pricing & Plans' },
    { id: 'about', label: 'About & Story' },
  ];

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `${AGENCY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    'Hi Arpit & Sanskar, I saw the SYNTHIC website and would like to talk about elevating my brand.'
  )}`;

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0C14]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/80 py-3'
          : 'bg-transparent py-4 sm:py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Clickable */}
          <button
            id="nav-logo-btn"
            onClick={() => handleLinkClick('home')}
            className="group text-left focus:outline-none transition-transform active:scale-95"
            aria-label="SYNTHIC Home"
          >
            <SynthicLogo size="md" showText={true} showSubtitle={true} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-[#0066FF] to-[#8A2BE2] shadow-[0_0_20px_rgba(0,102,255,0.4)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {link.id === 'ai-studio' && (
                    <Sparkles className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-200 animate-spin' : 'text-[#8A2BE2]'}`} />
                  )}
                  <span>{link.label}</span>
                  {link.badge && !isActive && (
                    <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase rounded-full bg-[#8A2BE2]/30 text-purple-300 border border-[#8A2BE2]/40">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs: Direct Call & Highlighted WhatsApp CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              id="nav-call-btn"
              href={`tel:${AGENCY_INFO.phoneRaw}`}
              className="px-3.5 py-2 rounded-full text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1.5 border border-white/10"
              title="Call Founders Directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#0066FF]" />
              <span>Call: 6260435157</span>
            </a>

            <a
              id="nav-whatsapp-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group px-5 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#25D366] via-emerald-500 to-[#128C7E] shadow-[0_0_22px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.65)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp +91 9522464307</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button & Quick Call */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              id="mobile-quick-call"
              href={`tel:${AGENCY_INFO.phoneRaw}`}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#0066FF] active:scale-95"
              aria-label="Call Synthic"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-purple-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#0A0C14]/98 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-3 mt-2 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-gradient-to-r from-[#0066FF] to-[#8A2BE2] text-white shadow-lg shadow-blue-900/40'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {link.id === 'ai-studio' && <Sparkles className="w-4 h-4 text-cyan-300" />}
                    <span>{link.label}</span>
                  </div>
                  {link.badge && (
                    <span className="px-2 py-0.5 text-xs font-bold uppercase rounded-full bg-white/20 text-white">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              id="mobile-drawer-whatsapp-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl font-bold text-center text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp (+91 9522464307)</span>
            </a>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={`tel:${AGENCY_INFO.phoneRaw}`}
                className="py-2.5 px-3 rounded-lg bg-white/5 border border-white/10 text-center font-medium text-slate-300 flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#0066FF]" />
                <span>Call Now</span>
              </a>
              <a
                href={AGENCY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-lg bg-white/5 border border-white/10 text-center font-medium text-slate-300 flex items-center justify-center gap-1.5"
              >
                <span>@{AGENCY_INFO.instagram}</span>
                <ArrowUpRight className="w-3 h-3 text-[#8A2BE2]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
