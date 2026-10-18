import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { coreExpertise } from '../data/portfolioData';
import {
  Briefcase,
  Globe,
  Megaphone,
  MailCheck,
  Users,
  Cpu,
  ArrowUpRight,
} from 'lucide-react';

export const CoreExpertise: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#3B82F6]" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#22D3EE]" />;
      case 'Megaphone':
        return <Megaphone className="w-5 h-5 text-[#3B82F6]" />;
      case 'MailCheck':
        return <MailCheck className="w-5 h-5 text-[#22D3EE]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#3B82F6]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#22D3EE]" />;
      default:
        return <Briefcase className="w-5 h-5 text-[#3B82F6]" />;
    }
  };

  return (
    <section id="expertise" className="py-20 md:py-28 relative bg-[#080B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="EXPERTISE"
          heading="What I Bring to the Table."
          description="Strategic business development capabilities focused on attracting qualified opportunities, connecting with potential clients, and supporting growth for digital service businesses."
        />

        {/* 3-Column Responsive Grid on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {coreExpertise.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="group relative bg-[#111827] border border-[#263246] hover:border-[#3B82F6]/50 rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:shadow-blue-950/30 flex flex-col justify-between"
            >
              {/* Card Header with Icon & Sequence Number */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-[#172033] border border-[#263246] group-hover:scale-110 group-hover:bg-[#1E293B] transition-transform">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#64748B] group-hover:text-[#22D3EE] transition-colors">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-[#263246]/60 flex items-center justify-between text-xs text-[#64748B] group-hover:text-[#94A3B8] transition-colors">
                <span>Client Acquisition Capability</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#3B82F6]" />
              </div>

              {/* Top hover line shimmer */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Transparency note */}
        <p className="mt-10 text-center text-xs text-[#64748B]">
          Note: Capabilities focus strictly on commercial representation, opportunity discovery, and relationship development. Technical service delivery is executed by specialized agency teams.
        </p>
      </div>
    </section>
  );
};
