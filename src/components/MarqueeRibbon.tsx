import React from 'react';
import { Sparkles } from 'lucide-react';

export const MarqueeRibbon: React.FC = () => {
  const items = [
    "International B2B Client Acquisition",
    "Upwork Profile Management",
    "Digital Marketing Agency BD",
    "Meta & Google Ads Prospecting",
    "LinkedIn Sales Navigator",
    "High-Conversion Proposal Strategy",
    "Lead Qualification & Pipeline Growth",
    "Emerging Tech & AI Client Representation",
  ];

  return (
    <div className="relative w-full overflow-hidden py-3 bg-[#0c1222] border-y border-[#263246]/70 select-none">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#080B14] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#080B14] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-8">
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-4 shrink-0 text-xs font-semibold tracking-wider uppercase text-[#94A3B8]">
            <span className="hover:text-[#22D3EE] transition-colors">{text}</span>
            <Sparkles className="w-3 h-3 text-[#3B82F6]" />
          </div>
        ))}
      </div>
    </div>
  );
};
