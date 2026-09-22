import React, { useState, useEffect } from 'react';
import { Camera, Dumbbell, Upload, Check, Sparkles, ZoomIn, X } from 'lucide-react';

interface FounderPhotoProps {
  founderId: 'arpit' | 'sanskar';
  name: string;
  photoKey: string; // 'img-2026' or 'snapchat-2939'
  role: string;
  age: number;
  isGymEnthusiast?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const FounderPhoto: React.FC<FounderPhotoProps> = ({
  founderId,
  name,
  photoKey,
  role,
  age,
  isGymEnthusiast,
  className = '',
  size = 'md',
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(`/images/${photoKey}.svg`);
  const [candidateIndex, setCandidateIndex] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Candidate paths to check in priority order
  const candidateUrls = [
    `/images/${photoKey}.jpg`,
    `/${photoKey}.jpg`,
    `/images/${photoKey}.png`,
    `/${photoKey}.png`,
    `/images/${photoKey}.jpeg`,
    `/${photoKey}.jpeg`,
    `/images/${photoKey}.webp`,
    `/${photoKey}.webp`,
    `/images/${photoKey}.svg`,
  ];

  // Check if user previously uploaded a local photo for this founder in this browser
  useEffect(() => {
    try {
      const savedCustomPhoto = localStorage.getItem(`synthic_avatar_${photoKey}`);
      if (savedCustomPhoto) {
        setCurrentSrc(savedCustomPhoto);
        return;
      }
    } catch {
      // localStorage unavailable or restricted
    }
    setCurrentSrc(candidateUrls[0]);
    setCandidateIndex(0);
  }, [photoKey]);

  const handleImageError = () => {
    const nextIndex = candidateIndex + 1;
    if (nextIndex < candidateUrls.length) {
      setCandidateIndex(nextIndex);
      setCurrentSrc(candidateUrls[nextIndex]);
    } else {
      // Fallback to svg
      setCurrentSrc(`/images/${photoKey}.svg`);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setCurrentSrc(dataUrl);
        try {
          localStorage.setItem(`synthic_avatar_${photoKey}`, dataUrl);
        } catch {
          // localStorage full or restricted
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const isArpit = founderId === 'arpit';

  // Dimension classes based on size
  const containerClasses = {
    sm: 'w-20 h-20 sm:w-24 sm:h-24',
    md: 'w-32 h-32 sm:w-40 sm:h-40',
    lg: 'w-48 h-48 sm:w-56 sm:h-56',
  };

  return (
    <>
      <div 
        className={`relative group inline-block select-none ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Ambient Gradient Glow Ring */}
        <div
          className={`absolute -inset-1.5 rounded-3xl blur-md transition-all duration-300 opacity-75 group-hover:opacity-100 ${
            isArpit
              ? 'bg-gradient-to-tr from-[#FFA03A] via-[#FF4A6B] to-[#8A2BE2]'
              : 'bg-gradient-to-tr from-[#0066FF] via-[#00F0FF] to-[#8A2BE2]'
          }`}
        />

        {/* Main Photo Card Frame */}
        <div
          className={`relative ${containerClasses[size]} rounded-[22px] overflow-hidden bg-[#0D101A] border-2 ${
            isArpit ? 'border-[#FFA03A]/40' : 'border-[#0066FF]/40'
          } shadow-2xl transition-transform duration-300 group-hover:scale-[1.02] cursor-pointer`}
          onClick={() => setShowModal(true)}
          title={`Click to view full photo of ${name}`}
        >
          <img
            src={currentSrc}
            alt={`${name} - ${photoKey}`}
            onError={handleImageError}
            className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />

          {/* Quick Hover Overlay with Zoom Icon */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-1.5 text-white">
            <ZoomIn className="w-5 h-5 text-white drop-shadow-md" />
            <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/20">
              View Photo
            </span>
          </div>

          {/* Top Corner Pill: Photo Filename Tag */}
          <div className="absolute top-2 left-2 z-10">
            <span
              className={`px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider backdrop-blur-md shadow-md border ${
                isArpit
                  ? 'bg-orange-950/80 text-[#FFA03A] border-orange-500/30'
                  : 'bg-blue-950/80 text-cyan-300 border-blue-500/30'
              }`}
            >
              {photoKey}
            </span>
          </div>

          {/* Bottom Badge for Gym (Sanskar) or Camera (Arpit) */}
          <div className="absolute bottom-2 right-2 z-10">
            {isGymEnthusiast ? (
              <span 
                className="p-1.5 rounded-full bg-[#0066FF] text-white shadow-lg flex items-center justify-center border border-cyan-300/40"
                title="Gym & Fitness Enthusiast"
              >
                <Dumbbell className="w-3.5 h-3.5" />
              </span>
            ) : (
              <span 
                className="p-1.5 rounded-full bg-[#FFA03A] text-slate-950 shadow-lg flex items-center justify-center border border-white/20"
                title="Viral Hook & Video Shoot Specialist"
              >
                <Camera className="w-3.5 h-3.5" />
              </span>
            )}
          </div>
        </div>

        {/* Optional Quick Upload trigger on hover / click */}
        <div className="mt-2 text-center">
          <label 
            htmlFor={`upload-photo-${photoKey}`}
            className="cursor-pointer text-[10px] text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 hover:underline"
            onClick={(e) => e.stopPropagation()}
            title={`Select or update ${photoKey} directly from your device`}
          >
            <Upload className="w-2.5 h-2.5" />
            <span>Upload {photoKey}</span>
          </label>
          <input
            id={`upload-photo-${photoKey}`}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>
      </div>

      {/* Lightbox / Modal for enlarged full-quality view */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative max-w-lg w-full bg-[#0D101A] border border-white/20 rounded-3xl p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <h4 className="text-xl font-display font-bold text-white flex items-center gap-2">
                  <span>{name}</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300 font-normal">
                    Age {age}
                  </span>
                </h4>
                <p className="text-xs text-slate-400 mt-0.5 font-medium">{role}</p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-black/50 border border-white/10 aspect-square flex items-center justify-center">
              <img
                src={currentSrc}
                alt={`${name} full view`}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Founder details in modal */}
            <div className="space-y-2 text-xs text-slate-300 pt-1">
              <div className="flex items-center justify-between py-1.5 px-3 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-slate-400">Photo Reference:</span>
                <span className="font-mono text-cyan-300 font-bold">{photoKey}</span>
              </div>
              {isGymEnthusiast && (
                <div className="flex items-center gap-2 py-1.5 px-3 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 text-cyan-200">
                  <Dumbbell className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Dedicated Gym &amp; Fitness Routine • High Daily Discipline</span>
                </div>
              )}
            </div>

            {/* Change / Upload Button inside Modal */}
            <div className="pt-2 flex items-center justify-between">
              <label
                htmlFor={`modal-upload-${photoKey}`}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs flex items-center gap-2 cursor-pointer transition-all"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Replace / Choose Local Photo</span>
              </label>
              <input
                id={`modal-upload-${photoKey}`}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />

              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2 rounded-xl bg-[#0066FF] text-white font-bold text-xs hover:bg-[#0052cc] transition-all"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
