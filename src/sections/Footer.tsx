import React from 'react';
import { ArrowUp, MapPin, Mail, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Experience', href: '#experience' },
    { label: 'Upwork Portfolio', href: '#upwork-portfolio' },
    { label: 'Results', href: '#results' },
    { label: 'Industries', href: '#industries-services' },
    { label: 'Toolkit', href: '#toolkit' },
    { label: 'Education', href: '#education' },
    { label: 'Approach', href: '#approach' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#05070D] border-t border-[#263246] py-14 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#263246]/60">
          {/* Identity & Positioning */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold tracking-tight text-[#F8FAFC]">
              {personalInfo.fullName}
            </h3>
            <p className="text-xs sm:text-sm text-[#3B82F6] font-medium">
              Business Development | Upwork | B2B Client Acquisition
            </p>
            <div className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
              <MapPin className="w-3.5 h-3.5 text-[#22D3EE]" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Quick Contact & Back to Top */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${personalInfo.contactLinks.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#F8FAFC] bg-[#111827] hover:bg-[#172033] border border-[#263246] rounded-xl transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#22D3EE]" />
              <span>Email Zarbab</span>
            </a>

            {personalInfo.contactLinks.linkedinUrl && (
              <a
                href={personalInfo.contactLinks.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#F8FAFC] bg-[#111827] hover:bg-[#172033] border border-[#263246] rounded-xl transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>LinkedIn</span>
              </a>
            )}

            {personalInfo.contactLinks.whatsappUrl && (
              <a
                href={personalInfo.contactLinks.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#F8FAFC] bg-[#111827] hover:bg-[#172033] border border-[#263246] rounded-xl transition-colors"
              >
                <span className="w-3.5 h-3.5 text-[#25D366] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.19 8.19 0 01-1.26-4.37c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.23.25-.88.86-.88 2.1 0 1.23.9 2.43 1.03 2.6.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.12-.23-.19-.48-.31z" />
                  </svg>
                </span>
                <span>WhatsApp</span>
              </a>
            )}

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#94A3B8] hover:text-[#F8FAFC] bg-[#111827] hover:bg-[#172033] border border-[#263246] rounded-xl transition-colors cursor-pointer"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Navigation Strip */}
        <div className="py-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-[#94A3B8]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#22D3EE] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Bottom Bar: Copyright & Professional Disclaimer */}
        <div className="pt-6 border-t border-[#263246]/40 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-4">
          <p>© {currentYear} Zarbab Zia. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Professional Portfolio · International Client Acquisition & Marketplace BD
          </p>
        </div>
      </div>
    </footer>
  );
};
