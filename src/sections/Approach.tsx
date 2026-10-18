import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { approachSteps } from '../data/portfolioData';
import { Search, Compass, FileEdit, MessageSquare, RefreshCw } from 'lucide-react';

export const Approach: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-5 h-5 text-[#3B82F6]" />;
      case 1:
        return <Compass className="w-5 h-5 text-[#22D3EE]" />;
      case 2:
        return <FileEdit className="w-5 h-5 text-[#3B82F6]" />;
      case 3:
        return <MessageSquare className="w-5 h-5 text-[#22D3EE]" />;
      case 4:
        return <RefreshCw className="w-5 h-5 text-[#3B82F6]" />;
      default:
        return <Search className="w-5 h-5 text-[#3B82F6]" />;
    }
  };

  return (
    <section id="approach" className="py-20 md:py-28 relative bg-[#0B0F1D]/80 border-t border-[#263246]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="HOW I WORK"
          heading="A Thoughtful Approach to Business Development."
          description="A structured five-step methodology ensuring every opportunity is rigorously qualified, personalized, and nurtured for sustainable conversion."
        />

        {/* Step-Based Process Cards with Visual Connector */}
        <div className="relative">
          {/* Subtle horizontal connecting bar on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-[2px] bg-gradient-to-r from-[#3B82F6]/20 via-[#22D3EE]/40 to-[#3B82F6]/20 pointer-events-none -translate-y-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {approachSteps.map((step, idx) => (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="relative bg-[#111827] border border-[#263246] hover:border-[#3B82F6]/60 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-950/20 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Header with Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-[#172033] border border-[#263246] group-hover:scale-110 group-hover:bg-[#1E293B] transition-transform">
                      {getStepIcon(idx)}
                    </div>
                    <span className="font-mono text-sm font-bold text-[#64748B] group-hover:text-[#22D3EE] transition-colors">
                      {step.stepNumber}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs font-medium text-[#3B82F6] leading-snug">
                    {step.description}
                  </p>

                  <p className="mt-3 text-xs text-[#94A3B8] leading-relaxed">
                    {step.details}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#263246]/60 text-[10px] uppercase font-mono tracking-wider text-[#64748B]">
                  Stage {step.stepNumber} of 05
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
