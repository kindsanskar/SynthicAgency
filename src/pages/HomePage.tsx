import React, { useState } from 'react';
import { PageId, ServiceItem } from '../types';
import { AGENCY_INFO, SERVICES_DATA } from '../data/synthicData';
import { FounderPhoto } from '../components/FounderPhoto';
import { 
  Clapperboard, 
  TrendingUp, 
  Sparkles, 
  Target, 
  Globe, 
  Phone, 
  ArrowRight, 
  Zap, 
  CheckCircle2, 
  MessageCircle,
  Play,
  Share2,
  Eye,
  Award,
  Flame,
  ArrowUpRight,
  Dumbbell,
  MapPin,
  Camera
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Helper to map icon names to Lucide icons
  const renderServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#0066FF]" />;
      case 'Clapperboard':
        return <Clapperboard className="w-6 h-6 text-[#FFA03A]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#8A2BE2]" />;
      case 'Target':
        return <Target className="w-6 h-6 text-emerald-400" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-cyan-400" />;
      default:
        return <Zap className="w-6 h-6 text-[#0066FF]" />;
    }
  };

  const founderWhatsapp = (founderName: string) => 
    `${AGENCY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(`Hi ${founderName}, I saw SYNTHIC's website and want to discuss taking my business viral!`)}`;

  return (
    <div id="home-page" className="min-h-screen pt-24 sm:pt-28 pb-16">
      {/* 1. HERO SECTION */}
      <section id="hero-section" className="relative overflow-hidden pt-6 pb-20 lg:pb-32">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] sm:w-[750px] sm:h-[450px] bg-gradient-to-tr from-[#0066FF]/20 via-[#8A2BE2]/25 to-pink-500/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#0066FF]/15 blur-3xl rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-lg shadow-black/40">
              <span className="flex h-2 w-2 rounded-full bg-[#0066FF] shadow-[0_0_8px_#0066FF]" />
              <span className="text-xs uppercase tracking-widest font-bold text-slate-300">
                Rewa's Next-Gen Social Growth Powerhouse
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.1]">
              We Don't Just Post.{' '}
              <span className="block mt-2 bg-gradient-to-r from-[#0066FF] via-[#A855F7] to-[#FFA03A] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,102,255,0.35)]">
                We Build Brand Fame.
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
              Full-stack Social Media Management, Dynamic Video Shoots, Meta Ads, and AI-Powered Content Creation tailored for local businesses, shops, and ambitious enterprises.
            </p>

            {/* CTAs matching prompt: Explore Packages (links to /pricing) & Call Now (tel:6260435157) */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="hero-explore-packages-btn"
                onClick={() => {
                  onNavigate('pricing');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#8A2BE2] shadow-[0_0_30px_rgba(0,102,255,0.4)] hover:shadow-[0_0_40px_rgba(0,102,255,0.7)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore Packages</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                id="hero-call-now-btn"
                href={`tel:${AGENCY_INFO.phoneRaw}`}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-white/30 backdrop-blur-md transition-all flex items-center justify-center gap-2.5 hover:text-white"
              >
                <Phone className="w-5 h-5 text-[#0066FF]" />
                <span>Call Now: 6260435157</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-8 sm:pt-12 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                <div className="text-2xl font-black text-white font-display">₹400</div>
                <div className="text-xs text-slate-400 mt-0.5">Starting Video Shoots</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                <div className="text-2xl font-black text-[#0066FF] font-display">3 Sec</div>
                <div className="text-xs text-slate-400 mt-0.5">Hook Retention Focus</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                <div className="text-2xl font-black text-purple-400 font-display">24-48h</div>
                <div className="text-xs text-slate-400 mt-0.5">Rapid Turnaround</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                <div className="text-2xl font-black text-[#FFA03A] font-display">Gen-Z</div>
                <div className="text-xs text-slate-400 mt-0.5">Algorithmic Native</div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Visual Reel & AI Showcase Teaser Card */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
          <div className="relative p-1 rounded-3xl bg-gradient-to-r from-[#0066FF]/40 via-[#8A2BE2]/40 to-[#FFA03A]/30 shadow-2xl shadow-blue-950/40">
            <div className="bg-[#0D101A] rounded-[22px] p-6 sm:p-8 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    <span>The SYNTHIC High-Retention Formula</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                    Why Traditional Agencies Fail Local Shops
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    Most agencies post generic stock flyers that get 50 views and zero customers. At SYNTHIC, we film high-energy reels, write psychology-driven hooks, and generate runway-quality AI visuals that turn passive scrollers into walk-in buyers.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>On-location dynamic shooting in Rewa</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>Zero studio rent via AI Virtual Models</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>Geo-fenced Meta Ads routing to WhatsApp</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>Direct WhatsApp access to Arpit & Sanskar</span>
                    </div>
                  </div>
                </div>

                {/* Reel Mockup Card */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-64 h-[380px] rounded-3xl p-3 bg-gradient-to-b from-white/10 to-white/5 border border-white/20 shadow-2xl backdrop-blur-xl flex flex-col justify-between overflow-hidden">
                    {/* Simulated Reel Background with Glowing Neon Lighting */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-[#0A0C14] to-purple-950 opacity-90" />
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FFA03A]/20 blur-2xl rounded-full" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#0066FF]/30 blur-2xl rounded-full" />

                    {/* Reel Overlay Content */}
                    <div className="relative z-10 flex items-center justify-between text-xs text-white/80 pt-2 px-1">
                      <span className="font-bold flex items-center gap-1">
                        <Flame className="w-4 h-4 text-[#FFA03A]" />
                        <span>REEL PREVIEW</span>
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-red-500/80 text-[10px] font-bold text-white uppercase tracking-wider">
                        VIRAL HOOK
                      </span>
                    </div>

                    <div className="relative z-10 text-center my-auto px-2 space-y-3">
                      <div className="w-14 h-14 mx-auto rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-white ml-0.5" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs uppercase tracking-widest text-[#FFA03A] font-bold">
                          First 3 Seconds
                        </div>
                        <div className="text-sm font-extrabold text-white">
                          "Stop Scrolling If You Own a Shop in Rewa!"
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 bg-black/60 backdrop-blur-md p-2.5 rounded-xl border border-white/10 space-y-1 text-left">
                      <div className="flex items-center justify-between text-[11px] text-slate-300">
                        <span className="font-semibold text-white">@synthic_agency</span>
                        <span className="flex items-center gap-1 text-emerald-400">
                          <Eye className="w-3 h-3" /> 48.2K
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-400 truncate">
                        Dynamic camera pan + kinetic subtitles + AI color grade
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section id="services-grid" className="py-20 bg-[#0A0C14] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs uppercase tracking-widest text-[#0066FF] font-bold">
              Full-Stack Solutions
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white">
              Everything Your Brand Needs to Win
            </h3>
            <p className="text-slate-400 text-base">
              Tailored specifically for local businesses, shops, and ambitious enterprises who want real customers, not vanity metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service, index) => (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`relative rounded-3xl p-6 sm:p-7 glass-panel glass-panel-hover transition-all duration-300 flex flex-col justify-between group ${
                  index === 2 ? 'md:col-span-2 lg:col-span-1 border-[#8A2BE2]/30 bg-purple-950/10' : ''
                }`}
              >
                <div className="space-y-4">
                  {/* Icon & Category Tag */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform">
                      {renderServiceIcon(service.iconName)}
                    </div>
                    {service.id === 'ai-studio' && (
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#8A2BE2]/30 to-[#0066FF]/30 text-cyan-300 border border-cyan-400/30">
                        AI Powered
                      </span>
                    )}
                  </div>

                  {/* Title & Short Description */}
                  <h4 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables / Scope Bullet Points */}
                  <div className="pt-2 border-t border-white/10 space-y-2">
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                      What's Included:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {service.deliverables.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/[0.03] text-slate-400 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  {service.id === 'ai-studio' ? (
                    <button
                      onClick={() => {
                        onNavigate('ai-studio');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-xs font-bold text-[#8A2BE2] hover:text-purple-300 flex items-center gap-1"
                    >
                      <span>Explore AI Studio</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1"
                    >
                      <span>View Full Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  <a
                    href={`${AGENCY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
                      `Hi Arpit & Sanskar, I want to book '${service.title}' for my business!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 transition-all hover:scale-105"
                    title={`Inquire on WhatsApp about ${service.title}`}
                  >
                    <MessageCircle className="w-4 h-4 fill-emerald-400" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FOUNDER HIGHLIGHT (THE GEN-Z EDGE) */}
      <section id="founder-highlight" className="py-24 relative overflow-hidden bg-[#07090F]">
        {/* Glow Accent */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FFA03A]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8A2BE2]/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-orange-500/20 text-xs font-bold text-[#FFA03A] uppercase tracking-widest">
              <Zap className="w-3.5 h-3.5" />
              <span>The Gen-Z Edge</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white">
              Founded by Young Minds Who Live Inside the Algorithm
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Founded by <strong className="text-white font-semibold">Arpit Tiwari (Age 17, Founder)</strong> and <strong className="text-white font-semibold">Sanskar Tiwari (Age 16, Co-Founder &amp; CEO, Gym Enthusiast)</strong>. Young entrepreneurs who live inside modern culture and algorithms. We deliver what actually grabs attention, not outdated marketing tactics.
            </p>
          </div>

          {/* Founders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Arpit Tiwari Card */}
            <div
              id="founder-card-arpit"
              className="relative rounded-3xl p-8 bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-orange-500/20 backdrop-blur-xl shadow-2xl flex flex-col justify-between space-y-6 hover:border-[#FFA03A]/50 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <FounderPhoto
                    founderId="arpit"
                    name="Arpit Tiwari"
                    photoKey="img-2026"
                    role="Founder • Creative Director"
                    age={17}
                    size="sm"
                  />
                  <div className="text-center sm:text-left flex-1">
                    <div className="flex items-center justify-center sm:justify-start gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#FFA03A]/10 text-[#FFA03A] border border-[#FFA03A]/30">
                        Founder • Age 17
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-slate-300 border border-white/10 font-mono">
                        img-2026
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mt-1">
                      Arpit Tiwari
                    </h3>
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                      Creative Director &amp; Viral Hook Strategist
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  "Traditional marketing tells you to follow safe templates. We know the first 3 seconds of a reel are make-or-break. We craft dynamic on-location shoots and visual pacing that bypass ad blindness and give local shops unforgettable fame."
                </p>

                <div className="space-y-1.5 text-xs text-slate-400 pt-1 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#FFA03A]" />
                    <span>Mobile: <strong className="text-white">+91 8085842137</strong></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Address: <strong className="text-slate-200">Chhiwla Lauwa, Rewa, MP</strong></span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href="tel:8085842137"
                  className="text-xs text-slate-300 hover:text-white flex items-center gap-1 font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FFA03A]" />
                  <span>Call 8085842137</span>
                </a>
                <a
                  href={`https://wa.me/918085842137?text=${encodeURIComponent('Hi Arpit, I want to discuss creative shoots for my shop!')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1.5 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-emerald-400" />
                  <span>Chat Arpit</span>
                </a>
              </div>
            </div>

            {/* Sanskar Tiwari Card */}
            <div
              id="founder-card-sanskar"
              className="relative rounded-3xl p-8 bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-blue-500/20 backdrop-blur-xl shadow-2xl flex flex-col justify-between space-y-6 hover:border-[#0066FF]/50 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <FounderPhoto
                    founderId="sanskar"
                    name="Sanskar Tiwari"
                    photoKey="snapchat-2939"
                    role="Co-Founder & CEO"
                    age={16}
                    isGymEnthusiast={true}
                    size="sm"
                  />
                  <div className="text-center sm:text-left flex-1">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#0066FF]/10 text-cyan-300 border border-[#0066FF]/30">
                        Co-Founder &amp; CEO • Age 16
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 font-semibold">
                        <Dumbbell className="w-2.5 h-2.5 text-emerald-400" />
                        <span>Gym</span>
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-slate-300 border border-white/10 font-mono">
                        snapchat-2939
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mt-1">
                      Sanskar Tiwari
                    </h3>
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                      Growth Funnels &amp; AI Operations
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  "Social media isn't just about getting hearts. It's an engine that must ring your phone, fill your WhatsApp with customer inquiries, and drive local people to walk through your shop doors. That's the system we build."
                </p>

                <div className="space-y-1.5 text-xs text-slate-400 pt-1 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#0066FF]" />
                    <span>Company Call: <strong className="text-white">+91 6260435157</strong></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Address &amp; HQ: <strong className="text-slate-200">Ward No. 6, Baikunthpur, Rewa, MP</strong></span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href="tel:6260435157"
                  className="text-xs text-slate-300 hover:text-white flex items-center gap-1 font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0066FF]" />
                  <span>Call 6260435157</span>
                </a>
                <a
                  href={`https://wa.me/919522464307?text=${encodeURIComponent('Hi Sanskar, I want to discuss Meta ads and growth funnels for my business!')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1.5 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-emerald-400" />
                  <span>Chat Sanskar</span>
                </a>
              </div>
            </div>
          </div>

          {/* Manifesto Callout Banner */}
          <div className="mt-12 max-w-4xl mx-auto rounded-2xl p-6 bg-gradient-to-r from-blue-900/30 via-purple-900/20 to-orange-950/20 border border-white/10 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div>
                <div className="text-xs uppercase font-bold text-cyan-400 tracking-wider">
                  The Rewa Advantage
                </div>
                <h4 className="text-lg font-bold text-white mt-1">
                  Ready to stand out in Baikunthpur, Rewa & across MP?
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Direct on-site shoots, lightning-fast turnaround, and transparent local rates.
                </p>
              </div>
              <a
                href={`tel:${AGENCY_INFO.phoneRaw}`}
                className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#8A2BE2] shadow-lg shadow-blue-900/50 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Arpit & Sanskar</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Modal Popup if selected */}
      {selectedService && (
        <div
          id="service-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-[#121622] border border-white/20 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 text-left relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  {renderServiceIcon(selectedService.iconName)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-display">
                    {selectedService.title}
                  </h3>
                  <span className="text-xs text-slate-400">SYNTHIC Core Service</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-slate-400 hover:text-white p-2 text-xl"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedService.longDesc}
            </p>

            <div className="space-y-2">
              <div className="text-xs uppercase font-bold text-[#0066FF] tracking-wider">
                Full Scope Deliverables
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {selectedService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-white/[0.02] p-2 rounded-lg border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10 flex gap-3">
              <a
                href={`${AGENCY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
                  `Hi Arpit & Sanskar, I want to book ${selectedService.title} for my shop.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-950/40"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Book via WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setSelectedService(null);
                  onNavigate('pricing');
                }}
                className="px-4 py-3 rounded-xl bg-white/10 text-white font-semibold text-xs hover:bg-white/20"
              >
                See Pricing
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
