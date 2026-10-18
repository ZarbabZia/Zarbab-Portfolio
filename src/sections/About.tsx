import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { aboutContent } from '../data/portfolioData';
import { CheckCircle2, Target, Users, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const iconList = [Target, Zap, Users, CheckCircle2];

  return (
    <section id="about" className="py-20 md:py-28 relative bg-[#0B0F1D]/80 border-t border-[#263246]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={aboutContent.sectionLabel}
          heading={aboutContent.heading}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Editorial Text (Left 7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#94A3B8] leading-relaxed"
          >
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={index === 3 ? 'text-[#F8FAFC] font-medium border-l-2 border-[#3B82F6] pl-4 my-6 py-1 bg-[#172033]/30 rounded-r-lg' : ''}
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Strategic Focus Pillars (Right 5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-[#111827] border border-[#263246] rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/20"
          >
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#3B82F6] mb-6">
              Strategic Focus Areas
            </h3>

            <div className="space-y-6">
              {aboutContent.keyPillars.map((pillar, idx) => {
                const IconComponent = iconList[idx % iconList.length];
                return (
                  <div key={pillar.title} className="flex items-start gap-3.5 group">
                    <div className="p-2 rounded-lg bg-[#172033] border border-[#263246] text-[#22D3EE] shrink-0 mt-0.5 group-hover:bg-[#1E293B] group-hover:scale-105 transition-all">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-[#94A3B8] mt-1 leading-normal">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-[#263246] text-xs text-[#94A3B8] leading-relaxed">
              <span className="text-[#F8FAFC] font-semibold">Value Principle: </span>
              Bridging the gap between agency technical execution and international commercial growth through disciplined qualification and research.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
