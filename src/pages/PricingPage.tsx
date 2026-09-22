import React, { useState } from 'react';
import { PageId } from '../types';
import { AGENCY_INFO, PRICING_PLANS, FAQS_DATA } from '../data/synthicData';
import { 
  Check, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Phone, 
  MessageCircle, 
  Sparkles, 
  Zap, 
  ArrowRight,
  ShieldCheck,
  Flame
} from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: PageId) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-onsite');

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <div id="pricing-page" className="min-h-screen pt-24 sm:pt-28 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-6 pb-16">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-gradient-to-r from-[#0066FF]/20 via-[#8A2BE2]/20 to-purple-600/15 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs uppercase tracking-widest font-bold text-slate-300">
              Clear & Upfront Local Pricing
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.15] max-w-4xl mx-auto">
            Honest, Transparent Rates for{' '}
            <span className="bg-gradient-to-r from-[#0066FF] via-[#8A2BE2] to-[#FFA03A] bg-clip-text text-transparent">
              Local Growth
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            High-value creative output designed to fit the budget of growing shops and small businesses.
          </p>

          <div className="inline-flex items-center gap-4 text-xs font-semibold text-slate-400 pt-2">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>No Hidden Fees</span>
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Direct Founder Support</span>
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Custom Shop Packages</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. PRICING CARDS */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isFeatured = plan.isFeatured;
            return (
              <div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#141A2D] to-[#0A0C14] border-2 border-[#0066FF] shadow-[0_0_40px_rgba(0,102,255,0.25)] lg:-translate-y-3'
                    : 'bg-white/[0.02] border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-gradient-to-r from-[#0066FF] to-[#8A2BE2] text-white shadow-lg shadow-blue-900/60 flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 fill-white" />
                      <span>{plan.badge || 'Best Value'}</span>
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 min-h-[32px]">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price Tag */}
                  <div className="pb-4 border-b border-white/10">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-display font-black text-white">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-xs text-slate-400 font-semibold">
                          / {plan.period}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Scope Highlight */}
                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                    <div className="text-[11px] uppercase tracking-wider text-[#0066FF] font-bold">
                      Plan Scope:
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {plan.scope}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3">
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                      Key Highlights:
                    </div>
                    <ul className="space-y-2.5 text-xs text-slate-300">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <div className={`p-0.5 rounded-full mt-0.5 ${isFeatured ? 'bg-[#0066FF]/30 text-cyan-300' : 'bg-white/10 text-slate-300'}`}>
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Plan Action CTA Button */}
                <div className="pt-8 mt-6 border-t border-white/10 space-y-3">
                  <a
                    id={`plan-cta-${plan.id}`}
                    href={`${AGENCY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(plan.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 transition-all duration-200 ${
                      isFeatured
                        ? 'bg-gradient-to-r from-[#0066FF] to-[#8A2BE2] text-white shadow-lg shadow-blue-900/40 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]'
                        : 'bg-white/10 hover:bg-white/15 text-white border border-white/10'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>{plan.ctaText}</span>
                  </a>

                  <p className="text-[10px] text-center text-slate-400">
                    Tap to connect directly with Arpit & Sanskar on WhatsApp
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. DIRECT CALLOUT BANNER matching prompt */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="direct-callout-banner"
          className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#0066FF]/20 via-[#8A2BE2]/20 to-[#FFA03A]/20 border border-white/15 shadow-2xl relative overflow-hidden backdrop-blur-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2 text-center md:text-left">
              <span className="text-xs uppercase tracking-wider font-extrabold text-[#FFA03A]">
                Personalized Consultation
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white leading-snug">
                Need a tailored plan for your shop? Call Arpit & Sanskar directly at 6260435157.
              </h3>
              <p className="text-sm text-slate-300">
                Every shop is unique. We will visit your location or review your catalog to design a custom quote that fits your exact budget.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <a
                id="callout-call-now-btn"
                href={`tel:${AGENCY_INFO.phoneRaw}`}
                className="w-full py-3.5 px-6 rounded-full font-bold text-sm text-white bg-gradient-to-r from-[#0066FF] to-[#8A2BE2] shadow-lg shadow-blue-900/50 hover:brightness-110 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call 6260435157</span>
              </a>

              <a
                id="callout-whatsapp-btn"
                href={`${AGENCY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
                  'Hi Arpit & Sanskar, I need a tailored plan for my shop.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-full font-semibold text-xs text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-400" />
                <span>Chat on WhatsApp (+91 9522464307)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ ACCORDION */}
      <section id="faq-section" className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#0066FF] font-bold">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm">
            Everything you need to know about shoots, turnaround times, and working with SYNTHIC.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-display font-semibold text-white">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full transition-transform ${isOpen ? 'bg-[#0066FF] text-white rotate-180' : 'bg-white/5 text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
