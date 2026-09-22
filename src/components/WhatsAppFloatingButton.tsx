import React, { useState } from 'react';
import { AGENCY_INFO } from '../data/synthicData';
import { MessageCircle, Phone, X } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `${AGENCY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    'Hi Arpit & Sanskar! I want to take my business to the next level with SYNTHIC.'
  )}`;

  return (
    <aside
      id="floating-contact-dock"
      aria-label="Contact Arpit and Sanskar"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2"
    >
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="bg-[#121622] border border-white/10 p-3.5 rounded-2xl shadow-2xl shadow-black/90 w-64 text-xs animate-in fade-in slide-in-from-bottom-2 duration-200 backdrop-blur-xl">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
            <div className="flex items-center gap-1.5 font-bold text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Arpit & Sanskar Online</span>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-slate-300 leading-relaxed mb-3">
            Want to book a video shoot, AI sample, or full account handling? Reach us directly on WhatsApp or call!
          </p>
          <div className="flex gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-1.5 px-2.5 rounded-lg bg-[#25D366] text-white font-bold text-center flex items-center justify-center gap-1 hover:brightness-110"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`tel:${AGENCY_INFO.phoneRaw}`}
              className="py-1.5 px-2.5 rounded-lg bg-white/10 text-white font-semibold text-center hover:bg-white/20 flex items-center justify-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-[#0066FF]" />
              <span>Call</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setShowTooltip(!showTooltip)}
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121622]/90 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white shadow-lg backdrop-blur-md transition-all hover:border-[#0066FF]/50"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Quick Chat with Founders</span>
        </button>

        <a
          id="floating-whatsapp-icon-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group p-3.5 sm:p-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-[0_0_25px_rgba(37,211,102,0.45)] hover:shadow-[0_0_35px_rgba(37,211,102,0.7)] hover:scale-110 active:scale-95 transition-all"
          aria-label="Direct WhatsApp chat with SYNTHIC"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#0A0C14] rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#0A0C14] rounded-full" />
          <MessageCircle className="w-6 h-6 fill-white" />
        </a>
      </div>
    </aside>
  );
};
