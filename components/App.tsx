/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
"use client";
import { useState } from 'react';
import { AnnouncementBar } from './AnnouncementBar';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { IntroSection } from './IntroSection';
import { ServicesSection } from './ServicesSection';
import { AboutSection } from './AboutSection';
import { ApproachSection } from './ApproachSection';
import { OfficeSection } from './OfficeSection';
import { FaqSection } from './FaqSection';
import { ContactSection } from './ContactSection';
import { Footer } from './Footer';
import { ConsultationModal } from './ConsultationModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Anxiety and Panic Therapy');

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsModalOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    // Smooth scroll down to contact section or open modal
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-main-text font-sans antialiased">
      {/* 1. Announcement Bar */}
      <AnnouncementBar onOpenConsultation={() => handleOpenConsultation()} />

      {/* 2. Navigation Header */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* 4. Introductory Section */}
        <IntroSection />

        {/* 5. Three Service Cards */}
        <ServicesSection onSelectServiceForConsult={handleSelectService} />

        {/* 6. About Dr. Maya Reynolds */}
        <AboutSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* 7. Therapeutic Approach */}
        <ApproachSection />

        {/* 8. New Our Office Section */}
        <OfficeSection />

        {/* 9. Frequently Asked Questions */}
        <FaqSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* 10. Contact CTA & Consultation Request */}
        <ContactSection preselectedService={selectedService} />
      </main>

      {/* 11. Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* Interactive Consultation Request Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        prefilledService={selectedService}
      />
    </div>
  );
}
