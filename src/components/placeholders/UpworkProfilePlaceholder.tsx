import React from 'react';
import { ExternalLink, Video, Cpu, Megaphone, Palette, CheckCircle2 } from 'lucide-react';

interface UpworkProfilePlaceholderProps {
  title: string;
  category: string;
  profileUrl: string;
  isLightbox?: boolean;
}

export const UpworkProfilePlaceholder: React.FC<UpworkProfilePlaceholderProps> = ({
  title,
  category,
  profileUrl,
  isLightbox = false,
}) => {
  const getCategoryIcon = () => {
    switch (category) {
      case 'Video Editing':
        return <Video className="w-5 h-5 text-[#14A800]" />;
      case 'Artificial Intelligence & Machine Learning':
        return <Cpu className="w-5 h-5 text-[#3B82F6]" />;
      case 'Social Media Marketing':
        return <Megaphone className="w-5 h-5 text-[#22D3EE]" />;
      case 'Graphic Design':
        return <Palette className="w-5 h-5 text-[#F59E0B]" />;
      default:
        return <ExternalLink className="w-5 h-5 text-[#3B82F6]" />;
    }
  };

  return (
    <div
      className={`w-full h-full bg-[#0F172A] flex flex-col justify-between border border-[#263246] rounded-xl overflow-hidden select-none transition-all ${
        isLightbox ? 'p-8 min-h-[460px]' : 'p-5 min-h-[220px]'
      }`}
    >
      {/* Upwork Profile Simulation Header */}
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-[#263246]/70">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#14A800]/20 border border-[#14A800]/40 flex items-center justify-center">
              <span className="text-[11px] font-bold text-[#14A800]">up</span>
            </div>
            <span className="text-xs font-semibold tracking-wide text-[#F8FAFC]">
              Upwork Talent Profile
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-[#94A3B8]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#14A800]" />
            <span>Identity Verified</span>
          </div>
        </div>

        {/* Profile Card Body Representation */}
        <div className={`flex items-start gap-4 ${isLightbox ? 'mt-6' : 'mt-4'}`}>
          <div
            className={`rounded-full bg-[#1E293B] border border-[#334155] flex items-center justify-center shrink-0 ${
              isLightbox ? 'w-16 h-16' : 'w-12 h-12'
            }`}
          >
            {getCategoryIcon()}
          </div>

          <div className="flex-1 min-w-0">
            <h4
              className={`font-semibold text-[#F8FAFC] truncate ${
                isLightbox ? 'text-lg' : 'text-sm'
              }`}
            >
              {title}
            </h4>
            <p className="text-xs text-[#22D3EE] font-medium mt-0.5 truncate">{category}</p>
            <p className="text-[11px] text-[#94A3B8] mt-1">
              Business Development & Client Acquisition Representation
            </p>
          </div>
        </div>

        {/* Mock profile skill tag pills representation */}
        <div className={`flex flex-wrap gap-1.5 ${isLightbox ? 'mt-6' : 'mt-3'}`}>
          <span className="px-2 py-0.5 text-[10px] bg-[#1E293B] text-[#94A3B8] rounded border border-[#334155]">
            {category}
          </span>
          <span className="px-2 py-0.5 text-[10px] bg-[#1E293B] text-[#94A3B8] rounded border border-[#334155]">
            Client Acquisition
          </span>
          <span className="px-2 py-0.5 text-[10px] bg-[#1E293B] text-[#94A3B8] rounded border border-[#334155]">
            Proposal Writing
          </span>
          {isLightbox && (
            <>
              <span className="px-2 py-0.5 text-[10px] bg-[#1E293B] text-[#94A3B8] rounded border border-[#334155]">
                Opportunity Research
              </span>
              <span className="px-2 py-0.5 text-[10px] bg-[#1E293B] text-[#94A3B8] rounded border border-[#334155]">
                Client Communication
              </span>
            </>
          )}
        </div>
      </div>

      {/* Footer Callout */}
      <div className={`pt-3 border-t border-[#263246]/60 flex items-center justify-between ${isLightbox ? 'mt-8' : 'mt-4'}`}>
        <span className="text-[10px] text-[#64748B] italic">
          Screenshot Placeholder · Upload in data/portfolioData.ts
        </span>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-[#3B82F6] hover:text-[#60A5FA] inline-flex items-center gap-1 transition-colors font-medium"
          onClick={(e) => e.stopPropagation()}
        >
          View live profile <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
