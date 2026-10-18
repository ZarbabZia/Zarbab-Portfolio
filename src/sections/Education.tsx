import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { educationHistory } from '../data/portfolioData';
import { GraduationCap, BookOpen, Calendar, MapPin } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative bg-[#080B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="EDUCATION"
          heading="The Foundation of My Professional Journey."
          description="Technical education grounding my analytical approach to software, digital marketing, and tech service business development."
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {educationHistory.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="bg-[#111827] border border-[#263246] hover:border-[#3B82F6]/50 rounded-2xl p-7 transition-all duration-300 shadow-xl hover:shadow-blue-950/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-[#172033] border border-[#263246] text-[#3B82F6]">
                    {idx === 0 ? (
                      <GraduationCap className="w-6 h-6 text-[#22D3EE]" />
                    ) : (
                      <BookOpen className="w-6 h-6 text-[#3B82F6]" />
                    )}
                  </div>

                  {item.period && (
                    <div className="flex items-center gap-1.5 text-xs text-[#94A3B8] font-mono bg-[#172033] px-3 py-1.5 rounded-lg border border-[#263246]">
                      <Calendar className="w-3.5 h-3.5 text-[#22D3EE]" />
                      <span>{item.period}</span>
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-bold text-[#F8FAFC]">
                  {item.degree}
                </h3>

                <div className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-[#3B82F6]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.institution}</span>
                </div>

                {item.details && (
                  <p className="mt-4 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {item.details}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-[#263246]/60 text-[11px] text-[#64748B]">
                Computer Science & Information Technology
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
