import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { achievements } from '../data/portfolioData';
import { CountUp } from '../components/CountUp';
import { Building2, Clock } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="results" className="py-20 md:py-28 relative bg-[#0B0F1D]/80 border-t border-[#263246]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="RESULTS & IMPACT"
          heading="Real Work. Documented Outcomes."
          description="Concrete outcomes achieved through disciplined prospect identification, personalized client proposals, and structured sales pipeline management."
        />

        {/* 6 Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="bg-[#111827] border border-[#263246] hover:border-[#3B82F6]/50 rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:shadow-blue-950/20 flex flex-col justify-between"
            >
              <div>
                {/* Metric Figure with CountUp */}
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight flex items-baseline">
                  <CountUp end={item.value} suffix={item.suffix} />
                </div>

                {/* Primary Metric Description */}
                <h3 className="mt-3 text-base sm:text-lg font-bold text-[#22D3EE]">
                  {item.metricLabel}
                </h3>

                {/* Detailed Context */}
                <p className="mt-2 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {item.context}
                </p>
              </div>

              {/* Attribution and Timeframe Footer */}
              <div className="mt-6 pt-4 border-t border-[#263246]/70 flex flex-col gap-1.5 text-xs">
                <div className="flex items-center gap-1.5 text-[#F8FAFC] font-semibold">
                  <Building2 className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
                  <span>{item.company}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#64748B] font-mono">
                  <Clock className="w-3 h-3 text-[#22D3EE] shrink-0" />
                  <span>Timeframe: {item.timeframe}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Responsible disclosure */}
        <p className="mt-10 text-center text-xs text-[#64748B]">
          Attributed outcomes reflect recorded business development engagements and client acquisition initiatives.
        </p>
      </div>
    </section>
  );
};
