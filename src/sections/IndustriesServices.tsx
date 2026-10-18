import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { digitalServices, targetedIndustries } from '../data/portfolioData';
import { Layers, Building } from 'lucide-react';

export const IndustriesServices: React.FC = () => {
  return (
    <section id="industries-services" className="py-20 md:py-28 relative bg-[#080B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="INDUSTRY EXPERIENCE"
          heading="Understanding Different Businesses. Finding the Right Opportunities."
          description="A dual focus on versatile service capabilities and specialized target sectors, enabling nuanced prospecting and tailored client acquisition campaigns."
        />

        <div className="space-y-16">
          {/* Group 1: Digital Services Represented */}
          <div>
            <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-[#263246]">
              <Layers className="w-5 h-5 text-[#3B82F6]" />
              <h3 className="text-xl font-bold text-[#F8FAFC]">
                Digital Services Represented in Client Acquisition
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {digitalServices.map((service, idx) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: (idx % 4) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                  className="bg-[#111827] border border-[#263246] hover:border-[#3B82F6]/50 rounded-xl p-5 transition-colors duration-200 hover:bg-[#172033]"
                >
                  <div className="text-[11px] font-mono text-[#22D3EE] font-medium uppercase tracking-wider mb-1">
                    {service.category}
                  </div>
                  <h4 className="text-base font-bold text-[#F8FAFC]">
                    {service.name}
                  </h4>
                  <p className="mt-2 text-xs text-[#94A3B8] leading-relaxed">
                    {service.focus}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Group 2: Targeted Industries */}
          <div>
            <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-[#263246]">
              <Building className="w-5 h-5 text-[#22D3EE]" />
              <h3 className="text-xl font-bold text-[#F8FAFC]">
                Industries Targeted for Strategic Prospecting
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {targetedIndustries.map((ind, idx) => (
                <motion.div
                  key={ind.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: (idx % 4) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                  className="bg-[#111827] border border-[#263246] hover:border-[#22D3EE]/50 rounded-xl p-5 transition-colors duration-200 hover:bg-[#172033]"
                >
                  <h4 className="text-base font-bold text-[#F8FAFC]">
                    {ind.name}
                  </h4>
                  <p className="mt-2 text-xs text-[#94A3B8] leading-relaxed">
                    {ind.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Framing Clarification */}
        <p className="mt-12 text-center text-xs text-[#64748B]">
          Representation refers to commercial positioning, qualification, and client relationship initiation. Technical fulfillment is handled by specialized partner production teams.
        </p>
      </div>
    </section>
  );
};
