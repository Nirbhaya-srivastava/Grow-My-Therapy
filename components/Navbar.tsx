
"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { THERAPIST_PROFILE } from "../data/therapistData";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar = ({ onOpenConsultation }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Approach", href: "#approach" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleConsultation = () => {
    closeMobileMenu();
    onOpenConsultation();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#344E41]/10 bg-[#F8F5EF]/95 backdrop-blur-md">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex min-h-[76px] items-center justify-between gap-5 lg:min-h-[84px]">
          {/* Brand */}
          <a
            href="#home"
            onClick={closeMobileMenu}
            aria-label={`${THERAPIST_PROFILE.name} — Home`}
            className="group min-w-0 shrink-0"
          >
            <span className="block font-serif text-[21px] font-medium leading-tight tracking-[-0.045em] text-[#26392F] transition-colors group-hover:text-[#52685A] sm:text-[25px]">
              {THERAPIST_PROFILE.name}
            </span>
            <span className="mt-1 block text-[8px] font-semibold uppercase tracking-[0.19em] text-[#737D73] sm:text-[9px]">
              Licensed Clinical Psychologist
            </span>
          </a>

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-5 xl:flex 2xl:gap-7"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative py-2 text-[12px] font-medium text-[#526158] transition-colors hover:text-[#26392F]"
              >
                {link.label}
                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#52685A] transition-transform duration-200 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button
            type="button"
            onClick={onOpenConsultation}
            className="hidden shrink-0 items-center gap-2 rounded-full bg-[#344E41] px-5 py-3 text-[9px] font-bold uppercase tracking-[0.1em] text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#26392F] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#52685A] focus-visible:ring-offset-2 xl:inline-flex"
          >
            Book a consultation
            <ArrowRight size={13} />
          </button>

          {/* Tablet and mobile controls */}
          <div className="flex items-center gap-3 xl:hidden">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="hidden rounded-full bg-[#344E41] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-white transition hover:bg-[#26392F] sm:inline-flex"
            >
              Book a consultation
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#344E41]/15 text-[#344E41] transition hover:bg-[#DDE8DD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#52685A]"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile and tablet menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[#344E41]/10 bg-[#F8F5EF] px-5 pb-6 pt-3 shadow-lg sm:px-8 xl:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className="flex items-center justify-between border-b border-[#344E41]/10 py-3.5 text-sm text-[#344E41] transition-colors hover:text-[#737D73]"
              >
                {link.label}
                <ArrowRight size={15} className="text-[#8A988B]" />
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={handleConsultation}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#344E41] px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#26392F]"
          >
            Book a consultation
            <ArrowRight size={15} />
          </button>
        </div>
      )}
    </header>
  );
};
