import React from 'react';
import { PageId } from '../types';
import { AGENCY_INFO } from '../data/synthicData';
import { SynthicLogo } from './SynthicLogo';
import { Phone, Mail, MapPin, Instagram, MessageCircle, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const whatsappUrl = `${AGENCY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    'Hi Arpit & Sanskar, I want to discuss a project with SYNTHIC.'
  )}`;

  return (
    <footer id="main-footer" className="relative bg-[#07090F] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background ambient lighting accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8A2BE2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand & Manifesto Column */}
          <div className="lg:col-span-5 space-y-4">
            <SynthicLogo size="lg" showText={true} showSubtitle={true} />
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              We Don't Just Post. We Build Brand Fame. Next-gen creative and social media agency driving high-retention video shoots, hyper-local Meta ad funnels, and photorealistic AI model generation.
            </p>

            {/* Gen-Z Founder Badge */}
            <div className="inline-flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-300">
              <Zap className="w-4 h-4 text-[#FFA03A]" />
              <span>
                Founded & operated by <strong className="text-white">Arpit Tiwari</strong> & <strong className="text-white">Sanskar Tiwari</strong>
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#0066FF] font-bold">
              Explore SYNTHIC
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Home & Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('ai-studio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>AI Studio Virtual Shoots</span>
                  <span className="text-[10px] bg-[#8A2BE2]/30 text-purple-300 px-1.5 py-0.2 rounded border border-[#8A2BE2]/40">NEW</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('pricing'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Transparent Pricing & Plans
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Founder Story & Gen-Z Edge
                </button>
              </li>
            </ul>
          </div>

          {/* Official Contact Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#8A2BE2] font-bold">
              Direct Contact & HQ
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FFA03A] flex-shrink-0 mt-0.5" />
                <span>{AGENCY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#0066FF] flex-shrink-0" />
                <a
                  href={`tel:${AGENCY_INFO.phoneRaw}`}
                  className="hover:text-white font-medium transition-colors"
                >
                  {AGENCY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <a
                  href={`mailto:${AGENCY_INFO.email}`}
                  className="hover:text-white font-medium transition-colors break-all"
                >
                  {AGENCY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <a
                  href={AGENCY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-medium transition-colors flex items-center gap-1 group"
                >
                  <span>@{AGENCY_INFO.instagram}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 text-xs font-semibold transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-400" />
                <span>WhatsApp: +91 9522464307</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SYNTHIC Agency. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Rewa, MP • Worldwide AI Execution</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
