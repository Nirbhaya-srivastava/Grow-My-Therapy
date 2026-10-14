import React from 'react';
import { THERAPIST_PROFILE } from '../data/therapistData';
import { MapPin, Mail, Phone, Heart } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="section-forest bg-[#26392F] text-[#F5F0E7] pt-16 pb-12 border-t border-[#26392F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#F5F0E7]/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif text-2xl font-semibold tracking-tight text-[#F5F0E7]">
              {THERAPIST_PROFILE.name}
            </h3>
            <p className="text-xs text-[#C58E72] font-semibold uppercase tracking-wider">
              {THERAPIST_PROFILE.licenseTitle}
            </p>
            <p className="text-sm text-[#F5F0E7]/75 leading-relaxed max-w-sm">
              Providing compassionate, evidence-based psychotherapy for adults navigating anxiety, panic, trauma, and burnout. In-person therapy in Santa Monica and secure telehealth throughout California.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#26392F] bg-[#DFE5DA] hover:bg-white rounded transition-colors"
              >
                Book 15-Min Consultation
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#DFE5DA]">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-[#F5F0E7]/75">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Dr. Reynolds
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Clinical Specialties
                </a>
              </li>
              <li>
                <a href="#approach" className="hover:text-white transition-colors">
                  Therapeutic Approach
                </a>
              </li>
              <li>
                <a href="#office" className="hover:text-white transition-colors">
                  Santa Monica Office
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Request Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Practice Location & Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#DFE5DA]">
              Practice Office
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#F5F0E7]/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C58E72] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[#F5F0E7] font-medium">{THERAPIST_PROFILE.office.address}</p>
                  <p className="text-[11px] text-[#F5F0E7]/60">Santa Monica, CA 90401 (Profile address)</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#DFE5DA] shrink-0" />
                <a href={`mailto:${THERAPIST_PROFILE.contact.email}`} className="hover:text-white">
                  {THERAPIST_PROFILE.contact.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DFE5DA] shrink-0" />
                <a href={`tel:${THERAPIST_PROFILE.contact.phone}`} className="hover:text-white">
                  {THERAPIST_PROFILE.contact.phone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-[11px] text-[#F5F0E7]/60 leading-normal">
                California Telehealth Notice: Psychotherapy services are exclusively offered to individuals residing or located in the state of California in accordance with California Board of Psychology regulations.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Internship Disclosure */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#F5F0E7]/60">
          <div>
            <p>
              © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.
            </p>
          </div>

          {/* Academic / Internship attribution */}
          <div className="text-center md:text-right">
            <p className="text-[11px] text-[#DFE5DA]/80">
              Grow My Therapy Frontend Developer Internship Assignment · Fictional Psychologist Case Study
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
