import React from 'react';

interface SynthicLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showSubtitle?: boolean;
}

export const SynthicLogo: React.FC<SynthicLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  showSubtitle = false,
}) => {
  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  const uniqueId = React.useId().replace(/:/g, '');

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision Play-Button Lightning Bolt Icon */}
      <div className={`relative flex-shrink-0 ${iconDimensions[size]} group`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(255,107,53,0.35)] transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Sunset-to-Neon Purple/Electric Gradient matching user branding */}
            <linearGradient id={`synthic-grad-${uniqueId}`} x1="15%" y1="10%" x2="85%" y2="90%">
              <stop offset="0%" stopColor="#FFA03A" />
              <stop offset="35%" stopColor="#FF4A6B" />
              <stop offset="70%" stopColor="#8A2BE2" />
              <stop offset="100%" stopColor="#5E17EB" />
            </linearGradient>

            <filter id={`glow-${uniqueId}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#8A2BE2" floodOpacity="0.5" />
            </filter>
          </defs>

          {/* Left Wing of the Play Button with Lightning cutout edge */}
          <path
            d="M 22 18 
               C 22 14, 26 12, 29 15 
               L 47 38 
               L 41 47 
               L 52 47 
               L 35 83 
               C 33 87, 28 85, 27 81 
               L 20 62 
               C 18 56, 17 50, 19 44 
               Z"
            fill={`url(#synthic-grad-${uniqueId})`}
          />

          {/* Right Play Arrow Head with complementary Lightning cutout edge */}
          <path
            d="M 48 30 
               L 78 50 
               C 83 53, 83 58, 78 61 
               L 56 75 
               C 53 77, 49 76, 48 72 
               L 44 64 
               L 54 53 
               L 44 53 
               Z"
            fill={`url(#synthic-grad-${uniqueId})`}
          />

          {/* Core Dynamic Lightning Energy Path (Clean Negative Silhouette Channel) */}
          <path
            d="M 46 16 L 39 49 L 51 49 L 36 86"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.95"
            className="animate-pulse"
          />
        </svg>
      </div>

      {/* Typography */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5">
            <span className={`font-display font-black tracking-wider text-white ${titleSizes[size]}`}>
              SYNTHIC
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] shadow-[0_0_8px_#0066FF] animate-pulse" />
          </div>
          {showSubtitle && (
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-slate-400 font-semibold">
              AI VIDEO | ENTERPRISE SOLUTIONS
            </span>
          )}
        </div>
      )}
    </div>
  );
};
