import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { professionalExperience } from '../data/portfolioData';
import { Briefcase, Calendar, TrendingUp, CheckCircle, Info } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative bg-[#0B0F1D]/60 border-t border-[#263246]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="CAREER JOURNEY"
          heading="The Experience Behind My Approach."
          description="A track record of identifying international client opportunities, accelerating pipeline momentum, and expanding commercial reach for agencies and tech firms."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-4 sm:left-8 top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#3B82F6] via-[#22D3EE] to-[#263246] hidden sm:block" />

          {/* Timeline Items */}
          <div className="space-y-10 sm:space-y-12">
            {professionalExperience.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col sm:flex-row items-start gap-6 sm:gap-10"
              >
                {/* Timeline Dot Indicator */}
                <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-2xl bg-[#111827] border-2 border-[#3B82F6] shadow-lg shadow-blue-950/40 shrink-0 z-10 transition-transform hover:scale-105">
                  <Briefcase className="w-6 h-6 text-[#22D3EE]" />
                </div>

                {/* Experience Card */}
                <div className="flex-1 w-full bg-[#111827] border border-[#263246] hover:border-[#3B82F6]/50 rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-300 hover:shadow-blue-950/20 hover:-translate-y-1">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#263246]/70">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold text-[#F8FAFC]">
                          {item.company}
                        </h3>
                        {item.isFreelance && (
                          <span className="text-[11px] font-medium text-[#22D3EE] bg-[#22D3EE]/10 border border-[#22D3EE]/30 px-2 py-0.5 rounded">
                            Freelance Contract
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-[#3B82F6] mt-0.5">
                        {item.role}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-[#94A3B8] font-mono bg-[#172033] px-3 py-1.5 rounded-lg border border-[#263246] self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-[#22D3EE]" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Date Confirmation Note if applicable */}
                  {item.statusNote && (
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-[#F59E0B] bg-[#F59E0B]/10 border border-[#F59E0B]/20 px-3 py-1 rounded-md">
                      <Info className="w-3.5 h-3.5 shrink-0" />
                      <span>{item.statusNote}</span>
                    </div>
                  )}

                  {/* Specialization */}
                  <div className="mt-4">
                    <span className="text-xs uppercase font-semibold text-[#64748B] tracking-wider">
                      Specialization
                    </span>
                    <p className="text-sm font-medium text-[#F8FAFC] mt-0.5">
                      {item.specialization}
                    </p>
                  </div>

                  {/* Responsibilities list */}
                  <div className="mt-5">
                    <span className="text-xs uppercase font-semibold text-[#64748B] tracking-wider">
                      Key Responsibilities & Scope
                    </span>
                    <ul className="mt-2.5 space-y-2">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#94A3B8]">
                          <CheckCircle className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Documented Outcome / Result if available */}
                  {item.documentedResult && (
                    <div className="mt-6 pt-4 border-t border-[#263246]/70 flex items-center gap-2.5 bg-[#172033]/60 p-3.5 rounded-xl border border-[#3B82F6]/30">
                      <TrendingUp className="w-5 h-5 text-[#22D3EE] shrink-0" />
                      <div className="text-xs sm:text-sm">
                        <span className="text-[#94A3B8]">Documented Result: </span>
                        <strong className="text-[#F8FAFC] font-semibold">{item.documentedResult}</strong>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
