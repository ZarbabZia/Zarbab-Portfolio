import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { HeroPortrait } from '../components/placeholders/HeroPortraitGraphic';

interface HeroProps {
  onExploreClick: () => void;
  onConnectClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onConnectClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:py-24 overflow-hidden"
    >
      {/* Background dynamic ambient orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#3B82F6]/15 rounded-full blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#22D3EE]/10 rounded-full blur-3xl animate-float-reverse pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Personal Introduction & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small introductory label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#172033] border border-[#263246] text-[#22D3EE] text-xs font-semibold tracking-wider uppercase mb-5 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#3B82F6] animate-pulse" />
              <span>HELLO, I'M ZARBAB ZIA</span>
            </motion.div>

            {/* Primary Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.12] text-balance"
            >
              Turning Opportunities Into Business Growth.
            </motion.h1>

            {/* Professional Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 text-base sm:text-lg font-semibold text-[#3B82F6] tracking-wide"
            >
              {personalInfo.positioning}
            </motion.p>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl"
            >
              {personalInfo.leadDescription}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-xl transition-colors shadow-lg shadow-blue-900/40 hover:shadow-blue-800/60 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onConnectClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#F8FAFC] bg-[#172033] hover:bg-[#1E293B] border border-[#263246] hover:border-[#3B82F6]/50 rounded-xl transition-colors cursor-pointer"
              >
                Let's Connect
              </motion.button>
            </motion.div>

            {/* Location marker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 flex items-center gap-2 text-xs font-medium text-[#94A3B8]"
            >
              <MapPin className="w-4 h-4 text-[#22D3EE] shrink-0" />
              <span>Based in {personalInfo.location}.</span>
              <span className="text-[#263246]">|</span>
              <span className="text-[#64748B]">International B2B Coverage</span>
            </motion.div>
          </div>

          {/* Right Column: Dedicated Professional Portrait Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end w-full"
          >
            <HeroPortrait
              imageSrc={personalInfo.heroPortrait.src}
              altText={personalInfo.heroPortrait.alt}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
