import React from 'react';
import { HeroAfsim } from '@/components/hero-afsim';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { RealisationsSection } from '@/components/sections/RealisationsSection';
import { AvisSection } from '@/components/sections/AvisSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { AmbientBackground } from '@/components/radial-background';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroAfsim />
          <ServicesSection />
          <RealisationsSection />
          <AvisSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
