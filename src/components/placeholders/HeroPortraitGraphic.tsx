import React from 'react';
import { UserCheck } from 'lucide-react';

interface HeroPortraitProps {
  imageSrc?: string;
  altText: string;
}

export const HeroPortrait: React.FC<HeroPortraitProps> = ({ imageSrc, altText }) => {
  const [hasError, setHasError] = React.useState(false);

  // If a real image path is provided and hasn't errored
  if (imageSrc && !hasError) {
    return (
      <div className="relative w-full max-w-md mx-auto">
        {/* Ambient radial glow behind the photograph with soft pulse */}
        <div className="absolute -inset-4 bg-gradient-to-tr from-[#3B82F6]/30 to-[#22D3EE]/25 rounded-3xl blur-2xl opacity-60 animate-pulse-soft pointer-events-none" />

        {/* Dedicated image frame */}
        <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-[#263246] bg-[#111827] shadow-2xl shadow-blue-950/50 group">
          <img
            src={imageSrc}
            alt={altText}
            onError={() => setHasError(true)}
            className="w-full h-full object-cover object-[center_10%] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            loading="eager"
            referrerPolicy="no-referrer"
          />

          {/* Delicate gradient scrim at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080B14]/80 via-transparent to-transparent pointer-events-none" />

          {/* Floating professional badge */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-2xl bg-[#080B14]/80 backdrop-blur-md border border-[#263246]/80 text-xs">
            <div>
              <p className="font-bold text-[#F8FAFC]">Zarbab Zia</p>
              <p className="text-[11px] text-[#22D3EE] font-medium">B2B Client Acquisition & Upwork Specialist</p>
            </div>
            <span className="text-[10px] font-mono text-[#94A3B8] bg-[#172033] px-2 py-0.5 rounded border border-[#263246]">
              Lahore, PK
            </span>
          </div>

          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
        </div>
      </div>
    );
  }

  // Tasteful, high-end abstract portrait placeholder silhouette
  return (
    <div className="relative w-full aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden border border-[#263246] bg-[#111827] shadow-2xl shadow-blue-950/30 flex flex-col items-center justify-between p-6">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#3B82F6]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#22D3EE]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Top subtle identifier */}
      <div className="w-full flex items-center justify-between text-[11px] font-mono tracking-wider text-[#94A3B8]/70 border-b border-[#263246]/60 pb-3">
        <span className="flex items-center gap-1.5">
          <UserCheck className="w-3.5 h-3.5 text-[#3B82F6]" />
          PORTRAIT SPOTLIGHT
        </span>
        <span className="text-[#3B82F6] font-medium">ZARBAB ZIA</span>
      </div>

      {/* Architectural Vector Silhouette */}
      <div className="relative my-auto flex flex-col items-center justify-center">
        <div className="relative w-44 h-44 rounded-full flex items-center justify-center p-1 bg-gradient-to-b from-[#3B82F6]/30 via-[#263246] to-transparent shadow-inner">
          <div className="w-full h-full rounded-full bg-[#0E1526] flex items-center justify-center overflow-hidden border border-[#263246]">
            <svg
              className="w-32 h-32 text-[#3B82F6]/60 fill-current mt-4"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="12" cy="7" r="4.5" />
              <path d="M12 13.5c-4.418 0-8 2.686-8 6v1.5h16v-1.5c0-3.314-3.582-6-8-6z" />
            </svg>
          </div>
        </div>

        {/* Professional badge below silhouette */}
        <div className="mt-5 text-center">
          <p className="text-sm font-semibold text-[#F8FAFC] tracking-wide">
            Business Development Professional
          </p>
          <p className="text-xs text-[#94A3B8] mt-0.5">
            Lahore, Pakistan · Global B2B Reach
          </p>
        </div>
      </div>

      {/* Development note */}
      <div className="w-full bg-[#172033]/80 border border-[#263246] rounded-xl p-3 text-center">
        <p className="text-[11px] text-[#94A3B8]">
          <span className="text-[#22D3EE] font-medium">Portrait Ready:</span> Set your image path in{' '}
          <code className="text-[#F8FAFC] bg-[#080B14] px-1 py-0.5 rounded text-[10px]">
            portfolioData.ts
          </code>
        </p>
      </div>

      {/* Subtle outer glow ring */}
      <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-3xl pointer-events-none" />
    </div>
  );
};
