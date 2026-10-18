import React from 'react';
import { motion } from 'motion/react';

interface SectionHeadingProps {
  label: string;
  heading: string;
  description?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  heading,
  description,
  align = 'left',
}) => {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}
    >
      {/* Small uppercase section label */}
      <span className="text-xs font-semibold tracking-wider text-[#3B82F6] uppercase inline-block mb-3">
        {label}
      </span>

      {/* Primary editorial heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F8FAFC] leading-[1.2] text-balance">
        {heading}
      </h2>

      {/* Optional supporting description */}
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};
