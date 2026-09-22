import React, { useState } from 'react';
import { PageId, DemoRequest } from '../types';
import { AGENCY_INFO, STUDIO_FEATURES, WORKFLOW_STEPS } from '../data/synthicData';
import { 
  Sparkles, 
  Users, 
  Film, 
  MapPin, 
  Camera, 
  Cpu, 
  Rocket, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle, 
  Layers, 
  Send,
  Zap,
  Sliders,
  Store,
  Tag,
  PhoneCall
} from 'lucide-react';

interface AiStudioPageProps {
  onNavigate: (page: PageId) => void;
}

export const AiStudioPage: React.FC<AiStudioPageProps> = ({ onNavigate }) => {
  // Demo request form state
  const [formData, setFormData] = useState<DemoRequest>({
    shopName: '',
    productCategory: 'Apparel & Fashion',
    phoneNumber: '',
    notes: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeCategoryTab, setActiveCategoryTab] = useState<'fashion' | 'jewelry' | 'footwear'>('fashion');
  const [showAfterView, setShowAfterView] = useState(true);

  const categories = [
    'Apparel & Fashion',
    'Jewelry & Ornaments',
    'Footwear & Leather',
    'Electronics & Gadgets',
    'Cosmetics & Salons',
    'Retail Storefront & Decor',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.shopName || !formData.phoneNumber) return;
    setFormSubmitted(true);
  };

  const getDirectWhatsAppUrl = () => {
    const msg = `Hi Arpit & Sanskar! I want to request a Free AI Sample Shoot for my shop:
• Shop Name: ${formData.shopName}
• Category: ${formData.productCategory}
• Phone: ${formData.phoneNumber}
${formData.notes ? `• Notes: ${formData.notes}` : ''}`;
    return `${AGENCY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(msg)}`;
  };

  const heroWhatsAppUrl = `${AGENCY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    'Hi Arpit & Sanskar, I want to start an AI Product & Model Shoot with SYNTHIC!'
  )}`;

  // Render icons for studio features
  const renderFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-6 h-6 text-[#FFA03A]" />;
      case 'Film':
        return <Film className="w-6 h-6 text-[#8A2BE2]" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#0066FF]" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  const renderStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera':
        return <Camera className="w-6 h-6 text-[#FFA03A]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#0066FF]" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-[#8A2BE2]" />;
      default:
        return <Sparkles className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div id="ai-studio-page" className="min-h-screen pt-24 sm:pt-28 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-6 pb-16 sm:pb-24">
        {/* Ambient Lights */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#8A2BE2]/25 via-[#0066FF]/25 to-cyan-500/15 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
              <span className="text-xs uppercase tracking-widest font-bold bg-gradient-to-r from-cyan-400 via-purple-300 to-amber-300 bg-clip-text text-transparent">
                SYNTHIC Cinematic AI Engine
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.1]">
              Cinematic Product Shoots —{' '}
              <span className="block mt-2 bg-gradient-to-r from-[#0066FF] via-[#8A2BE2] to-[#FFA03A] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(138,43,226,0.4)]">
                Powered Entirely by AI
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
              No high studio rent, no model fees. Send your simple product photos and watch them turn into 4K virtual model shoots and high-energy video commercials.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                id="hero-start-ai-shoot-btn"
                href={heroWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#25D366] via-emerald-500 to-[#128C7E] shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_40px_rgba(37,211,102,0.65)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Start Your AI Shoot</span>
              </a>

              <a
                href="#demo-request-box"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 backdrop-blur-md transition-all flex items-center justify-center gap-2 hover:text-white"
              >
                <span>Request Free Sample</span>
                <ArrowRight className="w-4 h-4 text-purple-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Before vs After Visual Transformation Showcase */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-16">
          <div className="rounded-3xl p-6 sm:p-8 bg-[#0D101A] border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#0066FF]">
                  Live Transformation Demo
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-0.5">
                  Raw Phone Photo vs 4K AI Model Runway
                </h3>
              </div>

              {/* View Switcher Toggle */}
              <div className="flex items-center gap-2 p-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold">
                <button
                  onClick={() => setShowAfterView(false)}
                  className={`px-3 py-1.5 rounded-full transition-all ${
                    !showAfterView ? 'bg-white/20 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Raw Smartphone Input
                </button>
                <button
                  onClick={() => setShowAfterView(true)}
                  className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                    showAfterView ? 'bg-gradient-to-r from-[#0066FF] to-[#8A2BE2] text-white shadow-lg shadow-purple-900/40' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                  <span>SYNTHIC 4K AI Output</span>
                </button>
              </div>
            </div>

            {/* Visual Showcase Stage */}
            <div className="relative rounded-2xl overflow-hidden min-h-[360px] sm:min-h-[420px] flex items-center justify-center p-6 border border-white/10">
              {!showAfterView ? (
                /* Raw Flat-lay Representation */
                <div className="w-full max-w-lg bg-neutral-900/90 rounded-2xl p-6 border border-neutral-700/50 shadow-inner flex flex-col items-center text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-20 h-20 rounded-2xl bg-neutral-800 flex items-center justify-center border border-dashed border-neutral-600">
                    <Camera className="w-8 h-8 text-neutral-400" />
                  </div>
                  <div className="space-y-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20">
                      STEP 1: RAW INPUT
                    </span>
                    <h4 className="text-lg font-bold text-white">Flat-Lay On Wooden Counter</h4>
                    <p className="text-xs text-neutral-400 max-w-sm">
                      Standard smartphone photo taken by shop owner under regular tube light. No costly models or backdrop.
                    </p>
                  </div>
                  <div className="p-3 bg-black/40 rounded-xl text-left w-full space-y-1 text-xs text-neutral-300 font-mono">
                    <div className="text-neutral-500">// Camera: Normal phone camera</div>
                    <div className="text-neutral-400">Cost to owner: ₹0</div>
                    <div className="text-neutral-400">Effort: 30 seconds snapshot</div>
                  </div>
                </div>
              ) : (
                /* 4K AI Model Runway Staging */
                <div className="w-full max-w-2xl bg-gradient-to-tr from-purple-950/70 via-[#0A0C14] to-blue-950/70 rounded-2xl p-6 sm:p-8 border border-purple-500/30 shadow-2xl relative flex flex-col justify-between min-h-[340px] animate-in fade-in duration-300">
                  <div className="absolute top-0 right-0 w-60 h-60 bg-[#8A2BE2]/20 blur-3xl pointer-events-none" />

                  <div className="flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#0066FF] to-[#8A2BE2] text-white text-xs font-black tracking-wider uppercase shadow-lg shadow-blue-900/40">
                      SYNTHIC AI 4K RUNWAY SYNTHESIS
                    </span>
                    <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5" /> High Retention
                    </span>
                  </div>

                  <div className="my-6 z-10 space-y-3">
                    <div className="inline-block p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                      <Sparkles className="w-6 h-6 text-[#FFA03A]" />
                    </div>
                    <h4 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                      Hyper-Realistic Virtual Model Editorial
                    </h4>
                    <p className="text-slate-300 text-sm max-w-lg leading-relaxed">
                      Your exact fabric, jewelry, or shoe mapped onto a photorealistic AI model with volumetric neon rim lighting, cinematic depth-of-field, and motion camera cuts.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10 text-center z-10">
                    <div className="p-2 rounded-lg bg-white/[0.04]">
                      <div className="text-xs font-bold text-white">4K UHD</div>
                      <div className="text-[10px] text-slate-400">Resolution</div>
                    </div>
                    <div className="p-2 rounded-lg bg-white/[0.04]">
                      <div className="text-xs font-bold text-emerald-400">Zero Rent</div>
                      <div className="text-[10px] text-slate-400">No Studio Fee</div>
                    </div>
                    <div className="p-2 rounded-lg bg-white/[0.04]">
                      <div className="text-xs font-bold text-purple-400">24-48h</div>
                      <div className="text-[10px] text-slate-400">Delivery</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. STUDIO FEATURES */}
      <section className="py-16 bg-[#07090F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-xs uppercase tracking-widest text-[#8A2BE2] font-bold">
              AI Creative Capabilities
            </h2>
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Studio Power in Your Pocket
            </h3>
            <p className="text-slate-400 text-sm sm:text-base">
              Say goodbye to expensive photography crews and model charges. Here is what our AI pipeline creates for your shop:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STUDIO_FEATURES.map((feature) => (
              <div
                key={feature.id}
                id={`feature-${feature.id}`}
                className="rounded-3xl p-7 bg-white/[0.02] border border-white/10 hover:border-[#8A2BE2]/40 transition-all duration-300 space-y-5 flex flex-col justify-between group hover:bg-white/[0.04]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform">
                      {renderFeatureIcon(feature.iconName)}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider bg-white/5 text-slate-300 border border-white/10">
                      {feature.badge}
                    </span>
                  </div>

                  <h4 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h4>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-[#FFA03A]">
                  <Zap className="w-3.5 h-3.5" />
                  <span>{feature.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WORKFLOW WALKTHROUGH */}
      <section className="py-20 bg-[#0A0C14] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs uppercase tracking-widest text-[#0066FF] font-bold">
              Effortless 3-Step Process
            </h2>
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-white">
              From WhatsApp Photo to Viral Commercial
            </h3>
            <p className="text-slate-400 text-sm sm:text-base">
              You don't need any technical skills. We handle the entire AI modeling, motion generation, and sound design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {WORKFLOW_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="relative rounded-3xl p-7 glass-panel space-y-5 flex flex-col justify-between border-white/10 hover:border-[#0066FF]/40 transition-all duration-300"
              >
                {/* Step indicator number */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                    {renderStepIcon(step.iconName)}
                  </div>
                  <span className="text-3xl font-display font-black text-slate-700">
                    0{step.step}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs uppercase font-bold text-[#0066FF] tracking-wider">
                    {step.tag}
                  </span>
                  <h4 className="text-xl font-bold font-display text-white">
                    {step.title}
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs text-slate-400 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>{step.actionHint}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Direct WhatsApp Callout */}
          <div className="mt-12 text-center">
            <a
              href={`${AGENCY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
                'Hi Arpit & Sanskar, I have raw photos ready for an AI test shoot!'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm hover:brightness-110 shadow-lg shadow-emerald-950/50"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Send Your Raw Photos Now (+91 9522464307)</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE DEMO REQUEST BOX */}
      <section id="demo-request-box" className="py-20 bg-[#07090F] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/15 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>Zero Risk • Free Sample</span>
              </div>
              <h3 className="text-3xl font-display font-extrabold text-white">
                Request Your Free AI Sample
              </h3>
              <p className="text-slate-300 text-sm">
                Enter your shop details below. Arpit & Sanskar will generate a complimentary AI visual sample showing how your inventory looks on a virtual runway model!
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 mx-auto flex items-center justify-center text-emerald-400">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold font-display text-white">
                  Sample Request Registered!
                </h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.shopName}</strong>! Click below to send this directly to Arpit & Sanskar on WhatsApp along with your raw product photo.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    id="sample-whatsapp-forward-btn"
                    href={getDirectWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm flex items-center justify-center gap-2 hover:brightness-110 shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Send Photos via WhatsApp Now</span>
                  </a>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ shopName: '', productCategory: 'Apparel & Fashion', phoneNumber: '', notes: '' });
                    }}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 text-white font-semibold text-xs hover:bg-white/20"
                  >
                    Submit Another Shop
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Shop Name */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="shop-name-input" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Store className="w-3.5 h-3.5 text-[#0066FF]" />
                      <span>Shop Name *</span>
                    </label>
                    <input
                      id="shop-name-input"
                      type="text"
                      name="shopName"
                      required
                      placeholder="e.g. Royal Fashion Rewa"
                      value={formData.shopName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] text-sm"
                    />
                  </div>

                  {/* Product Category */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="category-select" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-[#8A2BE2]" />
                      <span>Product Category *</span>
                    </label>
                    <select
                      id="category-select"
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#121622] border border-white/10 text-white focus:outline-none focus:border-[#8A2BE2] text-sm"
                    >
                      {categories.map((cat, idx) => (
                        <option key={idx} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone Number */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="phone-number-input" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Phone / WhatsApp Number *</span>
                    </label>
                    <input
                      id="phone-number-input"
                      type="tel"
                      name="phoneNumber"
                      required
                      placeholder="e.g. +91 9876543210"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 text-sm"
                    />
                  </div>

                  {/* Notes */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="notes-input" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Send className="w-3.5 h-3.5 text-[#FFA03A]" />
                      <span>Brief Notes (Optional)</span>
                    </label>
                    <input
                      id="notes-input"
                      type="text"
                      name="notes"
                      placeholder="e.g. Festive kurta collection, looking for reels"
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#FFA03A] text-sm"
                    />
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    id="request-free-sample-btn"
                    type="submit"
                    className="w-full py-4 rounded-xl font-display font-bold text-base text-white bg-gradient-to-r from-[#0066FF] via-[#8A2BE2] to-[#FFA03A] shadow-[0_0_30px_rgba(0,102,255,0.4)] hover:shadow-[0_0_40px_rgba(138,43,226,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-5 h-5 text-white" />
                    <span>Request Free Sample</span>
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2.5">
                    100% Free Consultation • Fast turnaround • No credit card or advance fee required
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
