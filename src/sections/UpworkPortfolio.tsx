import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { upworkProfiles } from '../data/portfolioData';
import { UpworkProfile } from '../types';
import { ExternalLink, Maximize2, ShieldAlert } from 'lucide-react';
import { UpworkProfilePlaceholder } from '../components/placeholders/UpworkProfilePlaceholder';
import { LightboxModal } from '../components/LightboxModal';

export const UpworkPortfolio: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState<UpworkProfile | null>(null);

  return (
    <section id="upwork-portfolio" className="py-20 md:py-28 relative bg-[#080B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="UPWORK PORTFOLIO"
          heading="Behind the Profiles. Driving the Opportunities."
          description="A selection of Upwork profiles I've managed across video editing, AI/ML, social media marketing, and graphic design services. My involvement focuses on opportunity research, personalized bidding, client communication, follow-ups, and client acquisition."
        />

        {/* Gallery Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {upworkProfiles.map((profile, idx) => {
            const hasCustomScreenshot = Boolean(profile.screenshot);

            return (
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group bg-[#111827] border border-[#263246] hover:border-[#3B82F6]/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-blue-950/30"
              >
                <div>
                  {/* Dominant Main Screenshot / Placeholder Area */}
                  <div
                    className="relative w-full aspect-[16/10] bg-[#0E1526] overflow-hidden cursor-pointer border-b border-[#263246]"
                    onClick={() => setSelectedProfile(profile)}
                    title="Click to view full screenshot"
                  >
                    {hasCustomScreenshot ? (
                      <img
                        src={profile.screenshot}
                        alt={profile.placeholderAlt}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                    ) : (
                      <UpworkProfilePlaceholder
                        title={profile.title}
                        category={profile.category}
                        profileUrl={profile.profileUrl}
                      />
                    )}

                    {/* View Full Image Overlay on Hover */}
                    <div className="absolute inset-0 bg-[#080B14]/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                      <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#3B82F6] rounded-lg shadow-lg">
                        <Maximize2 className="w-3.5 h-3.5" />
                        View Image
                      </span>
                    </div>
                  </div>

                  {/* Profile Card Body */}
                  <div className="p-6">
                    {/* Category & Status */}
                    <div className="flex items-center justify-between gap-2 text-xs mb-2">
                      <span className="font-semibold text-[#22D3EE] tracking-wide">
                        {profile.category}
                      </span>
                      {profile.reportedStatus && (
                        <span className="text-[11px] font-mono text-[#94A3B8] bg-[#172033] px-2 py-0.5 rounded border border-[#263246]">
                          {profile.reportedStatus}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors">
                      {profile.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                      {profile.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 border-t border-[#263246]/50 mt-4 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProfile(profile)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-[#F8FAFC] bg-[#172033] hover:bg-[#1E293B] border border-[#263246] hover:border-[#3B82F6]/60 rounded-xl transition-all cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#22D3EE]" />
                    <span>View image</span>
                  </button>

                  <a
                    href={profile.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 text-xs font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-xl transition-all shadow-sm cursor-pointer whitespace-nowrap"
                  >
                    <span>Visit Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mandatory Discreet Transparency & Privacy Notice */}
        <div className="mt-12 p-4 sm:p-5 rounded-xl bg-[#111827] border border-[#263246] flex items-start sm:items-center gap-3 text-xs text-[#94A3B8] leading-relaxed">
          <ShieldAlert className="w-5 h-5 text-[#22D3EE] shrink-0 mt-0.5 sm:mt-0" />
          <p>
            Profiles showcased represent freelance accounts I've worked with in a business development and client acquisition capacity. Service delivery and account ownership remain with the respective profile owners.
          </p>
        </div>
      </div>

      {/* Full Screenshot Lightbox Modal */}
      <LightboxModal
        profile={selectedProfile}
        onClose={() => setSelectedProfile(null)}
      />
    </section>
  );
};
