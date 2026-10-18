import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section spy
      const sections = ['about', 'expertise', 'experience', 'upwork-portfolio', 'results', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Expertise', href: '#expertise', id: 'expertise' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Upwork Portfolio', href: '#upwork-portfolio', id: 'upwork-portfolio' },
    { label: 'Results', href: '#results', id: 'results' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B14]/90 backdrop-blur-md border-b border-[#263246] py-3.5 shadow-lg shadow-black/20'
          : 'bg-[#080B14]/60 backdrop-blur-sm border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-[#F8FAFC] hover:text-[#22D3EE] transition-colors whitespace-nowrap shrink-0"
          >
            Zarbab Zia
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#94A3B8]">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 ${
                  activeSection === link.id
                    ? 'text-[#22D3EE] font-semibold border-b-2 border-[#22D3EE]'
                    : 'hover:text-[#F8FAFC]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onContactClick}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg transition-all shadow-md shadow-blue-900/30 whitespace-nowrap shrink-0 cursor-pointer"
            >
              Let's Connect
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-[#94A3B8] hover:text-white hover:bg-[#172033] rounded-lg border border-[#263246] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F172A] border-b border-[#263246] px-5 py-4 space-y-3 animate-fade-in shadow-2xl">
          <nav className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium text-[#94A3B8] hover:text-[#22D3EE] py-1.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[#263246]">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full text-center py-2.5 px-4 text-xs font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg transition-colors cursor-pointer"
              >
                Let's Connect
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
