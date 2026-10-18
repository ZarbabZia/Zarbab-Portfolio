import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { MarqueeRibbon } from './components/MarqueeRibbon';
import { About } from './sections/About';
import { CoreExpertise } from './sections/CoreExpertise';
import { Experience } from './sections/Experience';
import { UpworkPortfolio } from './sections/UpworkPortfolio';
import { Achievements } from './sections/Achievements';
import { IndustriesServices } from './sections/IndustriesServices';
import { Toolkit } from './sections/Toolkit';
import { Education } from './sections/Education';
import { Approach } from './sections/Approach';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

export const App: React.FC = () => {
  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioElem = document.getElementById('upwork-portfolio');
    if (portfolioElem) {
      portfolioElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080B14] text-[#F8FAFC] flex flex-col selection:bg-[#3B82F6]/30 selection:text-[#22D3EE]">
      {/* 3-Zone Sticky Navigation */}
      <Navbar onContactClick={scrollToContact} />

      {/* Main Content: 11 Sections in Strict Sequence */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero
          onExploreClick={scrollToPortfolio}
          onConnectClick={scrollToContact}
        />

        {/* Dynamic Transition Marquee */}
        <MarqueeRibbon />

        {/* Section 2: About Me */}
        <About />

        {/* Section 3: Core Expertise */}
        <CoreExpertise />

        {/* Section 4: Professional Experience */}
        <Experience />

        {/* Section 5: Upwork Profiles I've Managed */}
        <UpworkPortfolio />

        {/* Section 6: Achievements & Results */}
        <Achievements />

        {/* Section 7: Industries and Services */}
        <IndustriesServices />

        {/* Section 8: Platforms & Tools */}
        <Toolkit />

        {/* Section 9: Education */}
        <Education />

        {/* Section 10: Professional Approach */}
        <Approach />

        {/* Section 11: Contact */}
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default App;
