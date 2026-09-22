import React from 'react';
import { PageId } from '../types';
import { AGENCY_INFO } from '../data/synthicData';
import { SynthicLogo } from '../components/SynthicLogo';
import { FounderPhoto } from '../components/FounderPhoto';
import { 
  Zap, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  MessageCircle, 
  ArrowRight, 
  Sparkles, 
  Award,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Dumbbell,
  Camera
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const whatsappUrl = `${AGENCY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    'Hi Arpit & Sanskar, I read your story on the website and would love to partner up!'
  )}`;

  return (
    <div id="about-page" className="min-h-screen pt-24 sm:pt-28 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-6 pb-16">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#FFA03A]/15 via-[#8A2BE2]/20 to-[#0066FF]/20 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <Zap className="w-3.5 h-3.5 text-[#FFA03A]" />
            <span className="text-xs uppercase tracking-widest font-bold text-slate-300">
              The Story Behind SYNTHIC
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight text-white leading-[1.1] max-w-4xl mx-auto">
            Young Blood.{' '}
            <span className="bg-gradient-to-r from-[#FFA03A] via-[#FF4A6B] to-[#8A2BE2] bg-clip-text text-transparent">
              Algorithmic Natives.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            Founded by young entrepreneurs <strong>Arpit Tiwari (Age 17)</strong> &amp; <strong>Sanskar Tiwari (Age 16)</strong>. We saw outdated marketing agencies charge fortunes for boring posts that nobody watches. We built SYNTHIC to give local shops the fame they deserve.
          </p>
        </div>
      </section>

      {/* 2. THE STORY BLOCK & GEN-Z MANIFESTO */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="rounded-3xl p-8 sm:p-12 glass-panel border border-white/15 space-y-8 relative overflow-hidden shadow-2xl">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Why 16 &amp; 17 Year Olds Understand Attention Better Than Legacy Suits
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              We grew up on the exact platforms where your future customers spend 4 to 6 hours every single day. We understand why an audience swipes away after 1.5 seconds, what sounds are trending before they blow up, and how to structure a hook that compels someone to save, share, and buy.
            </p>
            <p className="text-slate-300 text-base leading-relaxed">
              Based at <strong>Ward No. 6, Baikunthpur, Rewa, MP</strong> (SYNTHIC HQ), we operate with a hunger and speed that big, slow agencies simply cannot match. Whether it's coming to your storefront for an afternoon shoot or feeding your catalog through our AI Virtual Model studio at 2 AM, we work directly alongside you.
            </p>
          </div>

          {/* Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/10">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <TrendingUp className="w-5 h-5 text-[#0066FF]" />
              <h4 className="text-base font-bold text-white font-display">Attention First</h4>
              <p className="text-xs text-slate-400">
                If the first 3 seconds don't stop the thumb, the rest of the video doesn't matter. We obsess over the hook.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <Cpu className="w-5 h-5 text-[#8A2BE2]" />
              <h4 className="text-base font-bold text-white font-display">AI Powered Efficiency</h4>
              <p className="text-xs text-slate-400">
                We replace ₹50,000 fashion shoots with photorealistic 4K AI models, passing massive savings to local shop owners.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <Sparkles className="w-5 h-5 text-[#FFA03A]" />
              <h4 className="text-base font-bold text-white font-display">Local Enterprise Heart</h4>
              <p className="text-xs text-slate-400">
                Rewa's retail markets deserve world-class aesthetics. We are committed to lifting our local commerce.
              </p>
            </div>
          </div>
        </div>

        {/* Meet The Founders Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Arpit Tiwari Card */}
          <div id="founder-arpit-tiwari" className="p-8 rounded-3xl bg-[#0D101A] border border-orange-500/20 space-y-6 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-[#FFA03A]/50 transition-all duration-300">
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <FounderPhoto
                  founderId="arpit"
                  name="Arpit Tiwari"
                  photoKey="img-2026"
                  role="Founder • Creative Director"
                  age={17}
                  size="md"
                />
                <div className="text-center sm:text-left space-y-1.5 flex-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-bold text-[#FFA03A]">
                    <Camera className="w-3 h-3" />
                    <span>Founder • Creative Director</span>
                  </div>
                  <h3 className="text-2xl font-display font-extrabold text-white">Arpit Tiwari</h3>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 text-xs">
                    <span className="px-2 py-0.5 rounded-md bg-white/5 text-slate-200 border border-white/10 font-bold">
                      Age: 17
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-orange-950/60 text-orange-300 border border-orange-500/30 font-medium">
                      Photo: img-2026
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Arpit spearheads creative concepting, viral hook engineering, and on-location camera composition. With an innate grasp of retention pacing and trend synchronization, he ensures every shoot stops thumbs and builds brand prestige.
              </p>

              {/* Personal Details */}
              <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#FFA03A] flex-shrink-0" />
                  <span>Mobile: <strong className="text-white">+91 8085842137</strong></span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Address: <strong className="text-slate-200">Chhiwla Lauwa, Rewa, MP</strong></span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between text-xs text-slate-400 border-t border-white/10">
              <a
                href="tel:8085842137"
                className="text-slate-300 hover:text-white font-medium flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#FFA03A]" />
                <span>Call 8085842137</span>
              </a>
              <a
                href={`https://wa.me/918085842137?text=${encodeURIComponent('Hi Arpit, I want to discuss creative video shoots with you!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-emerald-400" />
                <span>Chat Arpit</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Sanskar Tiwari Card */}
          <div id="founder-sanskar-tiwari" className="p-8 rounded-3xl bg-[#0D101A] border border-blue-500/20 space-y-6 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-[#0066FF]/50 transition-all duration-300">
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <FounderPhoto
                  founderId="sanskar"
                  name="Sanskar Tiwari"
                  photoKey="snapchat-2939"
                  role="Co-Founder & CEO"
                  age={16}
                  isGymEnthusiast={true}
                  size="md"
                />
                <div className="text-center sm:text-left space-y-1.5 flex-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-xs font-bold text-cyan-300">
                    <Sparkles className="w-3 h-3" />
                    <span>Co-Founder &amp; CEO</span>
                  </div>
                  <h3 className="text-2xl font-display font-extrabold text-white">Sanskar Tiwari</h3>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 text-xs">
                    <span className="px-2 py-0.5 rounded-md bg-white/5 text-slate-200 border border-white/10 font-bold">
                      Age: 16
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-blue-950/60 text-cyan-300 border border-blue-500/30 font-medium">
                      Photo: snapchat-2939
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 font-semibold">
                      <Dumbbell className="w-3 h-3 text-emerald-400" />
                      <span>Gym Enthusiast</span>
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Sanskar leads growth funnels, Meta ad architectures, and AI model generation workflows. A dedicated fitness and gym enthusiast bringing high physical and mental discipline into every growth campaign, he focuses on turning views into direct walk-in customers and revenue.
              </p>

              {/* Personal Details */}
              <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#0066FF] flex-shrink-0" />
                  <span>Company Call: <strong className="text-white">+91 6260435157</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Company WhatsApp: <strong className="text-white">+91 9522464307</strong></span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Address &amp; HQ: <strong className="text-slate-200">Ward No. 6, Baikunthpur, Rewa, MP</strong></span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between text-xs text-slate-400 border-t border-white/10">
              <a
                href="tel:6260435157"
                className="text-slate-300 hover:text-white font-medium flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#0066FF]" />
                <span>Call 6260435157</span>
              </a>
              <a
                href={`https://wa.me/919522464307?text=${encodeURIComponent('Hi Sanskar, I want to talk about Meta ads and growth funnels for my business!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-emerald-400" />
                <span>Chat Sanskar</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Agency Headquarters Card matching prompt specifications */}
        <div className="rounded-3xl p-8 bg-white/[0.02] border border-white/10 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#0066FF]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-white">SYNTHIC Agency Headquarters</h3>
                <p className="text-xs text-slate-400">Ward No. 6, Baikunthpur, Rewa, Madhya Pradesh</p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Active In-Person &amp; Remote
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-300">
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-slate-500 block mb-1">Company &amp; Sanskar HQ Address</span>
              <strong className="text-white">{AGENCY_INFO.address}</strong>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-slate-500 block mb-1">Company Direct Call Line</span>
              <a href={`tel:${AGENCY_INFO.phoneRaw}`} className="text-white hover:text-cyan-300 font-bold block">
                {AGENCY_INFO.phone}
              </a>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-slate-500 block mb-1">Company WhatsApp Line</span>
              <a href={AGENCY_INFO.whatsappBaseUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-bold block">
                {AGENCY_INFO.whatsappNumber}
              </a>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-slate-500 block mb-1">Arpit Tiwari Direct Line</span>
              <a href="tel:8085842137" className="text-white hover:text-[#FFA03A] font-bold block">
                +91 8085842137
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300 pt-1">
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-slate-500 block mb-1">Arpit Tiwari Address</span>
              <strong className="text-white">{AGENCY_INFO.arpitAddress}</strong>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-slate-500 block mb-1">Official Email &amp; Social</span>
              <div className="flex items-center gap-3">
                <a href={`mailto:${AGENCY_INFO.email}`} className="text-white hover:text-cyan-300 font-bold">
                  {AGENCY_INFO.email}
                </a>
                <span className="text-slate-600">•</span>
                <a href={AGENCY_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-[#FFA03A] hover:underline font-bold">
                  @{AGENCY_INFO.instagram}
                </a>
              </div>
            </div>
          </div>

          <div className="pt-2 text-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-sm shadow-lg shadow-emerald-950/50 hover:brightness-110"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Connect on WhatsApp Now (+91 9522464307)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
