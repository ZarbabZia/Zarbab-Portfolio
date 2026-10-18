import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { toolGroups } from '../data/portfolioData';
import {
  Briefcase,
  Users,
  Send,
  Search,
  BarChart3,
  GitBranch,
} from 'lucide-react';

export const Toolkit: React.FC = () => {
  const getGroupIcon = (name: string) => {
    switch (name) {
      case 'Freelance Platforms':
        return <Briefcase className="w-5 h-5 text-[#14A800]" />;
      case 'Prospecting & Network':
        return <Users className="w-5 h-5 text-[#0A66C2]" />;
      case 'Cold Email & Outreach':
        return <Send className="w-5 h-5 text-[#3B82F6]" />;
      case 'Business & Market Research':
        return <Search className="w-5 h-5 text-[#22D3EE]" />;
      case 'Analytics & Productivity':
        return <BarChart3 className="w-5 h-5 text-[#F59E0B]" />;
      case 'Sales Pipeline Management':
        return <GitBranch className="w-5 h-5 text-[#EC4899]" />;
      default:
        return <Briefcase className="w-5 h-5 text-[#3B82F6]" />;
    }
  };

  return (
    <section id="toolkit" className="py-20 md:py-28 relative bg-[#0B0F1D]/70 border-t border-[#263246]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="MY TOOLKIT"
          heading="The Tools Behind My Workflow."
          description="A structured modern stack spanning discovery, outbound pipeline execution, deliverability verification, and relationship tracking."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {toolGroups.map((group, idx) => (
            <motion.div
              key={group.groupName}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="bg-[#111827] border border-[#263246] hover:border-[#3B82F6]/50 rounded-2xl p-6 transition-all duration-300 shadow-lg hover:shadow-blue-950/20 flex flex-col justify-between"
            >
              <div>
                {/* Group Header */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-[#263246]">
                  <div className="p-2.5 rounded-xl bg-[#172033] border border-[#263246]">
                    {getGroupIcon(group.groupName)}
                  </div>
                  <h3 className="text-base font-bold text-[#F8FAFC]">
                    {group.groupName}
                  </h3>
                </div>

                {/* Tool items inside group */}
                <div className="space-y-3.5">
                  {group.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="p-3 rounded-xl bg-[#172033]/60 border border-[#263246]/60 hover:border-[#22D3EE]/40 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-[#F8FAFC]">
                          {tool.name}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-[#94A3B8] leading-relaxed">
                        {tool.purpose}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#263246]/40 text-[11px] text-[#64748B]">
                Active In Everyday Business Development
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
